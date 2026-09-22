import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { articles, categories, guides, ingredients, procedures, tests } from '../beauty/content';

const SITE_NAME = 'BeautyGuide';
export const ORIGIN = (import.meta.env.VITE_SITE_ORIGIN || 'https://beautyguide.ru').replace(/\/+$/, '');
const HOME_DESCRIPTION = 'BeautyGuide — информационный портал об уходе за кожей и волосами, косметике, ингредиентах, макияже, маникюре и beauty-процедурах.';

type SeoData = { title: string; description: string; keywords?: string; robots: string };
const normalizePath = (pathname: string) => pathname.replace(/\/+$/, '') || '/';

export function getSeoData(pathname: string): SeoData {
  const path = normalizePath(pathname);
  if (path === '/') return { title: 'Красота, уход и косметика — гайды и энциклопедия | BeautyGuide', description: HOME_DESCRIPTION, keywords: 'уход за кожей, косметика, ингредиенты косметики, уход за волосами, макияж, beauty гайды', robots: 'index, follow' };
  if (path === '/articles') return { title: 'Все статьи о красоте и уходе | BeautyGuide', description: 'Статьи BeautyGuide об уходе за кожей и волосами, косметике, макияже, маникюре, ингредиентах и процедурах.', robots: 'index, follow' };
  if (path === '/ingredients') return { title: 'Ингредиенты косметики: энциклопедия составов | BeautyGuide', description: 'Энциклопедия ингредиентов косметики: ретинол, ниацинамид, кислоты, витамин C, керамиды, пептиды и другие компоненты.', robots: 'index, follow' };
  if (path === '/procedures') return { title: 'Beauty-процедуры: подготовка, уход и ответы | BeautyGuide', description: 'Понятные материалы о процедурах для лица, волос и тела: как проходят, как подготовиться и что учитывать после.', robots: 'index, follow' };
  if (path === '/guides') return { title: 'Beauty-гайды по уходу и косметике | BeautyGuide', description: 'Большие пошаговые гайды BeautyGuide: базовый уход, состав косметики, утренняя и вечерняя рутина.', robots: 'index, follow' };
  if (path === '/tests') return { title: 'Beauty-тесты и инструменты | BeautyGuide', description: 'Интерактивные тесты и инструменты BeautyGuide: тип кожи, схема ухода, совместимость ингредиентов и пористость волос.', robots: 'index, follow' };
  if (path === '/search') return { title: 'Поиск по BeautyGuide', description: 'Поиск по статьям, ингредиентам, гайдам и процедурам BeautyGuide.', robots: 'noindex, follow' };
  if (path.startsWith('/category/')) { const item=categories.find(x=>x.slug===path.split('/').pop()); if(item) return { title: `${item.name}: статьи и гайды | BeautyGuide`, description: `${item.description} Подборки статей, ингредиентов и практических материалов BeautyGuide.`, robots:'index, follow' }; }
  if (path.startsWith('/articles/')) { const item=articles.find(x=>x.slug===path.split('/').pop()); if(item) return { title: `${item.title} | BeautyGuide`, description: item.excerpt, keywords: item.tags.join(', '), robots:'index, follow' }; }
  if (path.startsWith('/ingredients/')) { const item=ingredients.find(x=>x.slug===path.split('/').pop()); if(item) return { title: `${item.name} в косметике: свойства и совместимость | BeautyGuide`, description: `${item.description} Свойства, кому подходит, как использовать и с чем сочетать.`, keywords: `${item.name}, ${item.latin}, ингредиенты косметики`, robots:'index, follow' }; }
  if (path.startsWith('/procedures/')) { const item=procedures.find(x=>x.slug===path.split('/').pop()); if(item) return { title: `${item.title}: как проходит и что важно знать | BeautyGuide`, description:item.excerpt, robots:'index, follow' }; }
  if (path.startsWith('/guides/')) { const item=guides.find(x=>x.slug===path.split('/').pop()); if(item) return { title: `${item.title} | BeautyGuide`, description:item.description, robots:'index, follow' }; }
  if (path.startsWith('/tests/')) { const item=tests.find(x=>x.slug===path.split('/').pop()); if(item) return { title: `${item.title} — онлайн | BeautyGuide`, description:item.description, robots:'index, follow' }; }
  return { title:`Страница не найдена | ${SITE_NAME}`, description:HOME_DESCRIPTION, robots:'noindex, follow' };
}

export function getSeo(pathname: string) { const path=normalizePath(pathname); return {...getSeoData(path), canonical:`${ORIGIN}${path}`}; }
function setMeta(selector:string, attribute:'name'|'property', key:string, content:string){let el=document.head.querySelector<HTMLMetaElement>(selector);if(!el){el=document.createElement('meta');el.setAttribute(attribute,key);document.head.appendChild(el)}el.setAttribute('content',content)}
function setCanonical(url:string){let link=document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');if(!link){link=document.createElement('link');link.rel='canonical';document.head.appendChild(link)}link.href=url}
export default function SEO(){const location=useLocation();useEffect(()=>{const {title,description,keywords,canonical,robots}=getSeo(location.pathname);document.title=title;document.documentElement.lang='ru';setMeta('meta[name="description"]','name','description',description);setMeta('meta[name="robots"]','name','robots',robots);if(keywords)setMeta('meta[name="keywords"]','name','keywords',keywords);else document.head.querySelector('meta[name="keywords"]')?.remove();setCanonical(canonical);setMeta('meta[property="og:type"]','property','og:type','website');setMeta('meta[property="og:site_name"]','property','og:site_name',SITE_NAME);setMeta('meta[property="og:locale"]','property','og:locale','ru_RU');setMeta('meta[property="og:title"]','property','og:title',title);setMeta('meta[property="og:description"]','property','og:description',description);setMeta('meta[property="og:url"]','property','og:url',canonical);setMeta('meta[name="twitter:card"]','name','twitter:card','summary_large_image');setMeta('meta[name="twitter:title"]','name','twitter:title',title);setMeta('meta[name="twitter:description"]','name','twitter:description',description)},[location.pathname]);return null}
