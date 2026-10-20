import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { articles, careTopics, categories, guides, hairTopics, makeupTopics, manicureTopics, cosmeticsTopics, procedures} from '../beauty/content';
import {ingredients} from "@/beauty/contentIngredient";
import {tests} from "@/beauty/contentTests";

const SITE_NAME = 'BeautyGuide';
export const ORIGIN = (import.meta.env.VITE_SITE_ORIGIN || 'https://simbeauty.ru').replace(/\/+$/, '');
const HOME_DESCRIPTION = 'BeautyGuide — информационный портал об уходе за кожей и волосами, косметике, ингредиентах, макияже, маникюре и beauty-процедурах.';

type SeoData = { title: string; description: string; keywords?: string; robots: string };
const normalizePath = (pathname: string) => pathname.replace(/\/+$/, '') || '/';

// Query-specific metadata for the pages with the strongest Search Console visibility.
// Titles are unique; the value proposition is matched by visible HTML content.
const prioritySeo: Record<string, {title: string; description: string}> = {
  '/category/hair/pushistost-volos': {
    title: 'Пушистость волос: причины и как убрать пушение | BeautyGuide',
    description: 'Почему волосы пушатся после мытья, от влажности или горячей укладки. Таблица причин, уход по шагам, ошибки и несмываемые средства.',
  },
  '/category/makeup/bronzer-haylayter': {
    title: 'Бронзер и хайлайтер: разница и зоны нанесения | BeautyGuide',
    description: 'Чем бронзер отличается от хайлайтера и контура: сравнение, куда наносить средства, как растушевать и избежать пятен.',
  },
  '/category/makeup/fiksaciya-makiyazha': {
    title: 'Как закрепить макияж: пудра или фиксатор | BeautyGuide',
    description: 'Чем фиксировать тон: пудра, спрей, стойкая формула. Таблица под тип кожи, тест стойкости и безопасное обновление макияжа.',
  },
  '/category/makeup/tonalnaya-osnova': {
    title: 'Как выбрать тональную основу по оттенку и финишу | BeautyGuide',
    description: 'Тональная основа без маски: как выбрать оттенок и подтон, проверить финиш, наносить тонкими слоями и сочетать с SPF.',
  },
  '/category/makeup/brovi': {
    title: 'Макияж бровей: карандаш, тени, гель и техника | BeautyGuide',
    description: 'Чем заполнить пробелы и уложить брови: сравнение карандаша, теней и геля, пошаговая техника, ошибки и проверка симметрии.',
  },
  '/category/skin/kombinirovannaya-kozha': {
    title: 'Комбинированная кожа: уход за Т-зоной и щеками | BeautyGuide',
    description: 'Как ухаживать за комбинированной кожей: таблица проблем Т-зоны и щёк, выбор крема, мягкое очищение и локальный уход.',
  },
  '/ingredients/dimethicone': {
    title: 'Диметикон в косметике: роль силикона и применение | BeautyGuide',
    description: 'Зачем нужен Dimethicone в креме, праймере и кондиционере: факты о гладкости, текстуре, совместимости и переносимости.',
  },
  '/ingredients/gluconolactone': {
    title: 'Глюконолактон в косметике: PHA, свойства и уход | BeautyGuide',
    description: 'Что делает Gluconolactone, чем PHA отличаются от AHA/BHA, как вводить средство и когда нужно избегать раздражения.',
  },
  '/ingredients/taurine': {
    title: 'Таурин в косметике: свойства и ограничения | BeautyGuide',
    description: 'Для чего в косметику добавляют Taurine: как оценивать обещания, смотреть на состав и безопасно пробовать новое средство.',
  },
  '/ingredients/behenyl-alcohol': {
    title: 'Бегениловый спирт: зачем он в креме и бальзаме | BeautyGuide',
    description: 'Behenyl Alcohol в INCI: отличие жирных спиртов от этанола, роль в текстуре крема и что учитывать чувствительной коже.',
  },
  '/procedures/paraffin-hand-treatment': {
    title: 'Парафинотерапия рук: результат и безопасность | BeautyGuide',
    description: 'Что даёт парафинотерапия рук, кому стоит отложить процедуру, риск ожога, подготовка и вопросы мастеру.',
  },
  '/procedures/vacuum-hydropeeling': {
    title: 'Вакуумный гидропилинг: как проходит и риски | BeautyGuide',
    description: 'Что уточнить перед вакуумным гидропилингом: растворы, сила вакуума, противопоказания, уход после и ожидаемый эффект.',
  },
};

export function getSeoData(pathname: string): SeoData {
  const path = normalizePath(pathname);
  if (prioritySeo[path]) return {...prioritySeo[path], robots: 'index, follow'};
  if (path === '/') return { title: 'Красота, уход и косметика — гайды и энциклопедия | BeautyGuide', description: HOME_DESCRIPTION, keywords: 'уход за кожей, косметика, ингредиенты косметики, уход за волосами, макияж, beauty гайды', robots: 'index, follow' };
  if (path === '/articles') return { title: 'Все статьи о красоте и уходе | BeautyGuide', description: 'Статьи BeautyGuide об уходе за кожей и волосами, косметике, макияже, маникюре, ингредиентах и процедурах.', robots: 'index, follow' };
  if (/^\/ingredients\/page\/(?:[2-9]|[1-9]\d+)$/.test(path)) { const page = Number(path.split('/').pop()); return {title: `Ингредиенты косметики — страница ${page} | BeautyGuide`, description: `Алфавитный каталог ингредиентов косметики, страница ${page}: свойства, применение и совместимость компонентов. Откройте карточки ингредиентов.`, robots:'index, follow'}; }
  if (path === '/ingredients') return { title: 'Ингредиенты косметики: энциклопедия составов | BeautyGuide', description: 'Энциклопедия ингредиентов косметики: ретинол, ниацинамид, кислоты, витамин C, керамиды, пептиды и другие компоненты.', robots: 'index, follow' };
  if (path === '/procedures') return { title: 'Beauty-процедуры: подготовка, уход и ответы | BeautyGuide', description: 'Понятные материалы о процедурах для лица, волос и тела: как проходят, как подготовиться и что учитывать после.', robots: 'index, follow' };
  if (path === '/guides') return { title: 'Beauty-гайды по уходу и косметике | BeautyGuide', description: 'Большие пошаговые гайды BeautyGuide: базовый уход, состав косметики, утренняя и вечерняя рутина.', robots: 'index, follow' };
  if (path === '/tests') return { title: 'Beauty-тесты и инструменты | BeautyGuide', description: 'Интерактивные тесты и инструменты BeautyGuide: тип кожи, схема ухода, совместимость ингредиентов и пористость волос.', robots: 'index, follow' };
  if (path === '/search') return { title: 'Поиск по BeautyGuide', description: 'Поиск по статьям, ингредиентам, гайдам и процедурам BeautyGuide.', robots: 'noindex, follow' };
  if (path.startsWith('/category/skin/')) { const item=careTopics.find(x=>x.slug===path.split('/').pop()); if(item) return { title: `${item.name}: уход, средства и ингредиенты | BeautyGuide`, description: item.description, keywords: item.keywords.join(', '), robots:'index, follow' }; }
  if (path.startsWith('/category/hair/')) { const item=hairTopics.find(x=>x.slug===path.split('/').pop()); if(item) return { title: `${item.name}: уход за волосами и практические советы | BeautyGuide`, description: item.description, keywords: item.keywords.join(', '), robots:'index, follow' }; }
  if (path.startsWith('/category/makeup/')) { const item=makeupTopics.find(x=>x.slug===path.split('/').pop()); if(item) return { title: `${item.name}: пошаговая техника макияжа | BeautyGuide`, description: item.description, keywords: item.keywords.join(', '), robots:'index, follow' }; }
  if (path.startsWith('/category/manicure/')) { const item=manicureTopics.find(x=>x.slug===path.split('/').pop()); if(item) return { title: `${item.name}: уход, покрытие и техника | BeautyGuide`, description: item.description, keywords: item.keywords.join(', '), robots:'index, follow' }; }
  if (path.startsWith('/category/cosmetics/')) { const item=cosmeticsTopics.find(x=>x.slug===path.split('/').pop()); if(item) return { title: `${item.name}: как выбрать и использовать | BeautyGuide`, description: item.description, keywords: item.keywords.join(', '), robots:'index, follow' }; }
  if (path.startsWith('/category/')) { const item=categories.find(x=>x.slug===path.split('/').pop()); if(item) return { title: `${item.name}: статьи и гайды | BeautyGuide`, description: `${item.description} Подборки статей, ингредиентов и практических материалов BeautyGuide.`, robots:'index, follow' }; }
  if (path.startsWith('/articles/')) { const item=articles.find(x=>x.slug===path.split('/').pop()); if(item) return { title: `${item.title} | BeautyGuide`, description: item.excerpt, keywords: item.tags.join(', '), robots:'index, follow' }; }
  if (path.startsWith('/ingredients/')) { const item=ingredients.find(x=>x.slug===path.split('/').pop()); if(item) return { title: `${item.name} в косметике: свойства и совместимость | BeautyGuide`, description: `${item.name}: ${item.description}`, keywords: `${item.name}, ${item.latin}, ингредиенты косметики`, robots:'index, follow' }; }
  if (path.startsWith('/procedures/')) { const item=procedures.find(x=>x.slug===path.split('/').pop()); if(item) return { title: `${item.title}: как проходит и что важно знать | BeautyGuide`, description:item.excerpt, robots:'index, follow' }; }
  if (path.startsWith('/guides/')) { const item=guides.find(x=>x.slug===path.split('/').pop()); if(item) return { title: `${item.title} | BeautyGuide`, description:item.description, robots:'index, follow' }; }
  if (path.startsWith('/tests/')) { const item=tests.find(x=>x.slug===path.split('/').pop()); if(item) return { title: `${item.title} — онлайн | BeautyGuide`, description:item.description, robots:'index, follow' }; }
  return { title:`Страница не найдена | ${SITE_NAME}`, description:HOME_DESCRIPTION, robots:'noindex, follow' };
}

export function getSeo(pathname: string) { const path=normalizePath(pathname); return {...getSeoData(path), canonical:`${ORIGIN}${path}`}; }
function setMeta(selector:string, attribute:'name'|'property', key:string, content:string){let el=document.head.querySelector<HTMLMetaElement>(selector);if(!el){el=document.createElement('meta');el.setAttribute(attribute,key);document.head.appendChild(el)}el.setAttribute('content',content)}
function setCanonical(url:string){let link=document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');if(!link){link=document.createElement('link');link.rel='canonical';document.head.appendChild(link)}link.href=url}
export default function SEO(){const location=useLocation();useEffect(()=>{const {title,description,keywords,canonical,robots}=getSeo(location.pathname);document.title=title;document.documentElement.lang='ru';setMeta('meta[name="description"]','name','description',description);setMeta('meta[name="robots"]','name','robots',robots);if(keywords)setMeta('meta[name="keywords"]','name','keywords',keywords);else document.head.querySelector('meta[name="keywords"]')?.remove();setCanonical(canonical);setMeta('meta[property="og:type"]','property','og:type','website');setMeta('meta[property="og:site_name"]','property','og:site_name',SITE_NAME);setMeta('meta[property="og:locale"]','property','og:locale','ru_RU');setMeta('meta[property="og:title"]','property','og:title',title);setMeta('meta[property="og:description"]','property','og:description',description);setMeta('meta[property="og:url"]','property','og:url',canonical);setMeta('meta[name="twitter:card"]','name','twitter:card','summary_large_image');setMeta('meta[name="twitter:title"]','name','twitter:title',title);setMeta('meta[name="twitter:description"]','name','twitter:description',description)},[location.pathname]);return null}
