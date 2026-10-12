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
  assert(path === '/' || !path.endsWith('/'), `Trailing slash in SEO route: ${path}`);
  assert(seo.canonical === `https://simbeauty.ru${path}` || seo.canonical.endsWith(path), `Canonical/path disagreement: ${path}`);

  // Ensure the new editorial and quiz pages have useful non-JS HTML.
  if (path.startsWith('/articles/')) {
    assert((html.match(/<h2/g) ?? []).length >= 5, `Article lacks sections: ${path}`);
    assert((html.match(/<p/g) ?? []).length >= 10, `Article is thin: ${path}`);
    assert(html.includes('article-faq'), `Missing article FAQ: ${path}`);
  }
  if (path.startsWith('/tests/')) {
    assert(html.includes('О тесте и его возможностях'), `Missing SSR test guide: ${path}`);
    assert(html.includes('Ограничения методики'), `Missing methodology caveat: ${path}`);
  }
  if (path === '/ingredients') {
    assert((html.match(/class="directory-letter"/g) ?? []).length >= 10, 'Ingredient directory is missing alphabet links');
  }
  titles.add(title);
  descriptions.add(description);
}

assert(!sitemap.includes('/404'), '404 must not be in sitemap');
// The home page is legitimately ${ORIGIN}/; inner pages must not end with '/'.
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
for (const url of sitemapUrls) {
  const pathname = new URL(url).pathname;
  assert(pathname === '/' || !pathname.endsWith('/'), `Trailing slash in sitemap: ${url}`);
}
console.log(`SEO checks passed: ${indexablePaths.length} unique prerendered pages`);
