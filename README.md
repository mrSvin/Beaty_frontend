### Подключение по ssh
```
ssh alex@192.168.1.45
```

### Копирование на сервер
```
scp -r ./dist/* alex@192.168.1.45:/var/www/simbeauty/
```

### Редактирование nginx
```
sudo nano /etc/nginx/sites-available/simbeauty.conf
sudo nginx -t
sudo systemctl restart nginx
```


# BeautyGuide

Информационный beauty-портал на React + Vite, собранный на основе структуры исходного проекта.

## Что реализовано

- современная главная страница в стиле clean beauty / premium editorial;
- mega-menu на desktop и fullscreen mobile drawer;
- категории: уход, волосы, макияж, маникюр, косметика;
- каталог статей с фильтрами;
- статья со sticky-содержанием, callout-блоками, FAQ, related content и рекламными слотами;
- энциклопедия ингредиентов и отдельная SEO-страница ингредиента;
- каталог beauty-процедур и страница процедуры;
- большие beauty-гайды с главами, чек-листом и progress indicator;
- интерактивные тесты;
- поиск по статьям и ингредиентам;
- адаптивные рекламные placeholders под РСЯ;
- 404;
- responsive layout: desktop / tablet / mobile;
- SEO metadata, canonical, sitemap.xml, robots.txt и prerender для индексируемых маршрутов.

## Запуск

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Основные файлы

- `src/beauty/content.ts` — контент и SEO-каталог маршрутов;
- `src/beauty/components.tsx` — header, mega-menu, cards, breadcrumbs, advertising slots и общие компоненты;
- `src/beauty/pages.tsx` — страницы сайта;
- `src/components/SEO.tsx` — meta/canonical/SEO;
- `src/index.css` — дизайн-система и адаптив;
- `src/prerender.tsx` + `scripts/prerender.mjs` — prerender и sitemap.

Фотографии сейчас подключены через внешние URLs Unsplash, поэтому при необходимости их можно заменить на локальные оптимизированные AVIF/WebP.
