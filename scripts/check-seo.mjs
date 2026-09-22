import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { indexablePaths, getSeo } from '../.prerender/prerender.js';

const titles = new Set();
const descriptions = new Set();
const sitemap = await readFile('dist/sitemap.xml', 'utf8');

for (const path of indexablePaths) {
  const file = path === '/' ? 'dist/index.html' : `dist${path}/index.html`;
  const html = await readFile(file, 'utf8');
  const seo = getSeo(path);

  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const description = html.match(/name="description" content="([^"]*)"/)?.[1];

  assert(title, `Missing title: ${path}`);
  assert(description, `Missing description: ${path}`);
  assert(!titles.has(title), `Repeated title: ${path}`);
  assert(!descriptions.has(description), `Repeated description: ${path}`);
  assert(html.includes(`<link rel="canonical" href="${seo.canonical}" />`), `Wrong canonical: ${path}`);
  assert(html.includes('<h1'), `Missing H1: ${path}`);
  assert(sitemap.includes(`<loc>${seo.canonical}</loc>`), `Missing from sitemap: ${path}`);

  titles.add(title);
  descriptions.add(description);
}

assert(!sitemap.includes('/404'), '404 must not be in sitemap');
console.log(`SEO checks passed: ${indexablePaths.length} unique prerendered pages`);
