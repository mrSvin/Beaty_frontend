import { mkdir, readFile, readdir, rename, stat, unlink, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const manifestPath = resolve(root, 'scripts/image-sources.json')
const outputDir = resolve(root, 'public/images')
const concurrency = 8
const retries = 3

const MAX_DIMENSION = 1000
const WEBP_QUALITY = 50

const manifest = JSON.parse(await readFile(manifestPath, 'utf8'))
await mkdir(outputDir, { recursive: true })

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Удаляет все временные файлы (*.download, *.processed), которые могли
 * остаться после прерванных или упавших запусков скрипта.
 */
async function cleanupTempFiles(dir) {
  let entries
  try {
    entries = await readdir(dir)
  } catch {
    return
  }
  let removed = 0
  for (const entry of entries) {
    if (entry.endsWith('.download') || entry.endsWith('.processed')) {
      await unlink(resolve(dir, entry)).catch(() => {})
      removed += 1
    }
  }
  if (removed > 0) {
    console.log(`Cleaned up ${removed} leftover temp file(s)`)
  }
}

await cleanupTempFiles(outputDir)

async function isReady(path) {
  try {
    const info = await stat(path)
    if (info.size < 16) return false
    const data = await readFile(path)
    const isWebp =
        data.subarray(0, 4).toString('ascii') === 'RIFF' &&
        data.subarray(8, 12).toString('ascii') === 'WEBP'
    if (!isWebp) return false

    // Проверяем, что размеры не превышают лимит
    const metadata = await sharp(data).metadata()
    if (metadata.width > MAX_DIMENSION || metadata.height > MAX_DIMENSION) return false

    return true
  } catch {
    return false
  }
}

/**
 * Уменьшает изображение пропорционально до MAX_DIMENSION по большей стороне
 * и пересохраняет его в WebP с качеством WEBP_QUALITY.
 * Если изображение уже меньше лимита — всё равно пересохраняет с нужным качеством.
 */
async function processImage(inputPath, outputPath) {
  const image = sharp(inputPath)
  const metadata = await image.metadata()

  const needsResize =
      metadata.width > MAX_DIMENSION || metadata.height > MAX_DIMENSION

  let pipeline = image

  if (needsResize) {
    pipeline = pipeline.resize({
      width: MAX_DIMENSION,
      height: MAX_DIMENSION,
      fit: 'inside', // сохраняет пропорции, вписывая в квадрат 1000x1000
      withoutEnlargement: true, // не увеличивает маленькие картинки
    })
  }

  await pipeline
      .webp({ quality: WEBP_QUALITY, effort: 4 })
      .toFile(outputPath)
}

async function downloadImage(item) {
  const destination = resolve(outputDir, item.file)
  if (await isReady(destination)) return { file: item.file, skipped: true }

  const tempDownload = `${destination}.download`
  const tempProcessed = `${destination}.processed`

  for (let attempt = 1; attempt <= retries; attempt += 1) {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 30_000)
    try {
      const response = await fetch(item.source, {
        signal: controller.signal,
        headers: {
          Accept: 'image/webp,image/*;q=0.8,*/*;q=0.5',
          'User-Agent': 'Mozilla/5.0 (compatible; SimBeautyAssetLocalizer/1.0)',
        },
      })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const bytes = Buffer.from(await response.arrayBuffer())
      if (
          bytes.length < 16 ||
          bytes.subarray(0, 4).toString('ascii') !== 'RIFF' ||
          bytes.subarray(8, 12).toString('ascii') !== 'WEBP'
      ) {
        throw new Error(
            `server returned non-WebP data (${response.headers.get('content-type') ?? 'unknown content type'})`,
        )
      }

      await writeFile(tempDownload, bytes)
      await processImage(tempDownload, tempProcessed)
      await rename(tempProcessed, destination)

      const finalInfo = await stat(destination)
      return { file: item.file, skipped: false, size: finalInfo.size }
    } catch (error) {
      if (attempt === retries) throw new Error(`${item.file}: ${error.message}`)
      await sleep(500 * attempt)
    } finally {
      clearTimeout(timeout)
      // Гарантированная очистка временных файлов: и при успехе, и при ошибке.
      // Если rename уже переименовал .processed — unlink просто тихо упадёт.
      await unlink(tempDownload).catch(() => {})
      await unlink(tempProcessed).catch(() => {})
    }
  }
}

let index = 0
let downloaded = 0
let skipped = 0
const failures = []

async function worker() {
  while (true) {
    const current = index
    index += 1
    if (current >= manifest.length) return
    const item = manifest[current]
    try {
      const result = await downloadImage(item)
      if (result.skipped) skipped += 1
      else downloaded += 1
      process.stdout.write(
          `${result.skipped ? 'skip' : 'saved'} ${item.file}${result.size ? ` (${Math.round(result.size / 1024)} KB)` : ''}\n`,
      )
    } catch (error) {
      failures.push(error.message)
      process.stderr.write(`failed ${error.message}\n`)
    }
  }
}

await Promise.all(
    Array.from({ length: Math.min(concurrency, manifest.length) }, () => worker()),
)

// Финальная зачистка на случай, если что-то осталось после параллельных воркеров
await cleanupTempFiles(outputDir)

if (failures.length) {
  throw new Error(
      `Could not localize ${failures.length} image(s). Re-run the command when network access is available.\n${failures.join('\n')}`,
  )
}

console.log(
    `Images ready: ${manifest.length}; downloaded: ${downloaded}; already present: ${skipped}`,
)