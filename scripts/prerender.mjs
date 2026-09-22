import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import {
  render,
  getSeo,
  indexablePaths,
  nonIndexablePrerenderPaths,
  ORIGIN,
} from '../.prerender/prerender.js';

const template = await readFile('dist/index.html', 'utf8');
if (!template.includes('<div id="root"></div>')) {
  throw new Error('Vite template is missing the root element');
}

const escape = (value) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}[character]));

if (new Set(indexablePaths).size !== indexablePaths.length) {
  throw new Error('Duplicate routes in the SEO catalogue');
}

const prerenderPaths = [
  ...indexablePaths,
  ...nonIndexablePrerenderPaths,
  '/404',
];

console.log(`Prerendering ${prerenderPaths.length} pages...`);

for (const path of prerenderPaths) {
  const seo = getSeo(path);
  const body = await render(path);

  if (!body.includes('<h1')) {
    throw new Error(`No H1 rendered for ${path}`);
  }

  const keywordsMeta = seo.keywords
    ? `<meta name="keywords" content="${escape(seo.keywords)}" />`
    : '';

  const html = template
    .replace(/<title>.*?<\/title>/s, `<title>${escape(seo.title)}</title>`)
    .replace(/\s*<meta (?:name="(?:description|robots|keywords|twitter:card|twitter:title|twitter:description)"|property="og:(?:type|site_name|locale|title|description|url)")[^>]*>/g, '')
    .replace(/\s*<link rel="canonical"[^>]*>/g, '')
    .replace('</head>', [
      `<meta name="description" content="${escape(seo.description)}" />`,
      `<meta name="robots" content="${seo.robots}" />`,
      keywordsMeta,
      `<link rel="canonical" href="${seo.canonical}" />`,
      '<meta property="og:type" content="website" />',
      '<meta property="og:site_name" content="BeautyGuide" />',
      '<meta property="og:locale" content="ru_RU" />',
      `<meta property="og:title" content="${escape(seo.title)}" />`,
      `<meta property="og:description" content="${escape(seo.description)}" />`,
      `<meta property="og:url" content="${seo.canonical}" />`,
      '<meta name="twitter:card" content="summary" />',
      `<meta name="twitter:title" content="${escape(seo.title)}" />`,
      `<meta name="twitter:description" content="${escape(seo.description)}" />`,
      '</head>',
    ].filter(Boolean).join('\n'))
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  const file = path === '/'
    ? 'dist/index.html'
    : path === '/404'
      ? 'dist/404.html'
      : `dist${path}/index.html`;

  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}

await writeFile(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${indexablePaths
    .map((path) => `\n  <url><loc>${ORIGIN}${path}</loc></url>`)
    .join('')}\n</urlset>\n`,
);

await writeFile(
  'dist/robots.txt',
  `User-agent: *\nAllow: /\nSitemap: ${ORIGIN}/sitemap.xml\n`,
);

console.log(`Prerender complete: ${indexablePaths.length} indexable pages, ${nonIndexablePrerenderPaths.length} non-indexable pages`);
