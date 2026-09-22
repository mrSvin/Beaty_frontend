export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  readTime: string;
  date: string;
  tags: string[];
};

export type Ingredient = {
  slug: string;
  name: string;
  latin: string;
  description: string;
  kind: string;
  skin: string[];
  benefits: string[];
};

export const images = {
  hero: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1600&q=85',
  skincare: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1000&q=80',
  portrait: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
  makeup: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=80',
  hair: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1000&q=80',
  manicure: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80',
  procedure: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=80',
  serum: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80',
  sunscreen: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1000&q=80',
};

export const articles: Article[] = [
  { slug: 'retinol-kak-ispolzovat', title: 'Ретинол для лица: как правильно использовать', excerpt: 'Как вводить ретинол в уход, с какой частоты начинать и какие сочетания лучше исключить.', category: 'Уход', image: images.portrait, readTime: '9 мин', date: '18 сентября 2026', tags: ['ретинол', 'активы', 'анти-эйдж'] },
  { slug: 'komponenty-dlya-uvlazhneniya', title: 'Лучшие компоненты для увлажнения кожи', excerpt: 'Гиалуроновая кислота, глицерин, керамиды и другие компоненты, которые помогают удерживать влагу.', category: 'Ингредиенты', image: images.serum, readTime: '7 мин', date: '16 сентября 2026', tags: ['увлажнение', 'сухость'] },
  { slug: 'chto-takoe-niacinamid', title: 'Что такое ниацинамид и зачем он коже', excerpt: 'Разбираем свойства витамина B3, рабочие концентрации и совместимость с другими активами.', category: 'Ингредиенты', image: images.skincare, readTime: '8 мин', date: '14 сентября 2026', tags: ['ниацинамид', 'барьер'] },
  { slug: 'kak-vybrat-spf', title: 'Как выбрать SPF для лица на каждый день', excerpt: 'Что означают SPF и UVA-маркировки и как подобрать комфортную текстуру под свой тип кожи.', category: 'Уход', image: images.sunscreen, readTime: '10 мин', date: '12 сентября 2026', tags: ['spf', 'солнцезащита'] },
  { slug: 'ochishchenie-kozhi', title: 'Очищение кожи без пересушивания: базовая схема', excerpt: 'Когда достаточно одного средства, зачем нужен двойной этап и как понять, что очищение слишком агрессивное.', category: 'Уход', image: images.skincare, readTime: '6 мин', date: '10 сентября 2026', tags: ['очищение', 'барьер'] },
  { slug: 'poristost-volos', title: 'Пористость волос: как определить и подобрать уход', excerpt: 'Признаки низкой, средней и высокой пористости и практичная схема ухода без лишних средств.', category: 'Волосы', image: images.hair, readTime: '8 мин', date: '8 сентября 2026', tags: ['волосы', 'пористость'] },
  { slug: 'stoykiy-makiyazh', title: 'Стойкий макияж без эффекта маски', excerpt: 'Подготовка кожи, тонкие слои и фиксация: что действительно влияет на стойкость макияжа.', category: 'Макияж', image: images.makeup, readTime: '7 мин', date: '5 сентября 2026', tags: ['макияж', 'тон'] },
  { slug: 'uhod-za-kutikuloy', title: 'Уход за кутикулой между визитами на маникюр', excerpt: 'Как поддерживать аккуратный вид ногтей дома и какие привычки чаще всего вредят кутикуле.', category: 'Маникюр', image: images.manicure, readTime: '5 мин', date: '2 сентября 2026', tags: ['маникюр', 'ногти'] },
];

export const ingredients: Ingredient[] = [
  { slug: 'retinol', name: 'Ретинол', latin: 'Retinol', description: 'Форма витамина A, применяемая в уходе для обновления кожи и работы с признаками фотостарения.', kind: 'активный ингредиент', skin: ['нормальная', 'жирная', 'комбинированная'], benefits: ['обновление кожи', 'текстура', 'пигментация'] },
  { slug: 'niacinamide', name: 'Ниацинамид', latin: 'Niacinamide', description: 'Форма витамина B3, используемая в косметике для ухода за кожей.', kind: 'активный ингредиент', skin: ['жирная', 'проблемная', 'чувствительная'], benefits: ['контроль себума', 'укрепление барьера', 'осветление пигментации'] },
  { slug: 'hyaluronic-acid', name: 'Гиалуроновая кислота', latin: 'Hyaluronic Acid', description: 'Увлажняющий компонент, который помогает связывать воду в роговом слое кожи.', kind: 'увлажнитель', skin: ['сухая', 'нормальная', 'чувствительная'], benefits: ['увлажнение', 'комфорт', 'поддержка барьера'] },
  { slug: 'vitamin-c', name: 'Витамин C', latin: 'Ascorbic Acid', description: 'Антиоксидантный актив, который применяют для сияния кожи и работы с неровным тоном.', kind: 'антиоксидант', skin: ['нормальная', 'тусклая', 'с пигментацией'], benefits: ['антиоксидантная защита', 'сияние', 'тон кожи'] },
  { slug: 'aha', name: 'AHA-кислоты', latin: 'Alpha Hydroxy Acids', description: 'Группа кислот для поверхностного отшелушивания и выравнивания текстуры кожи.', kind: 'эксфолианты', skin: ['нормальная', 'сухая', 'с пигментацией'], benefits: ['отшелушивание', 'сияние', 'текстура'] },
  { slug: 'bha', name: 'BHA-кислоты', latin: 'Beta Hydroxy Acids', description: 'Кислоты, среди которых наиболее известна салициловая; часто используются в уходе за жирной кожей.', kind: 'эксфолианты', skin: ['жирная', 'проблемная', 'комбинированная'], benefits: ['поры', 'себум', 'высыпания'] },
  { slug: 'peptides', name: 'Пептиды', latin: 'Peptides', description: 'Короткие цепочки аминокислот, используемые в формулах для поддерживающего ухода.', kind: 'активный ингредиент', skin: ['все типы'], benefits: ['упругость', 'поддержка ухода', 'комфорт'] },
  { slug: 'ceramides', name: 'Керамиды', latin: 'Ceramides', description: 'Липиды, естественно присутствующие в кожном барьере и важные для удержания влаги.', kind: 'барьерные липиды', skin: ['сухая', 'чувствительная', 'поврежденный барьер'], benefits: ['барьер', 'увлажнение', 'снижение сухости'] },
];

export const categories = [
  { slug: 'skin', name: 'Уход за кожей', image: images.portrait, description: 'Базовый и активный уход, типы кожи, проблемы и рабочие схемы.' },
  { slug: 'hair', name: 'Волосы', image: images.hair, description: 'Уход за кожей головы, длиной, окрашенными и пористыми волосами.' },
  { slug: 'makeup', name: 'Макияж', image: images.makeup, description: 'Техники, продукты, подготовка кожи и понятные разборы макияжа.' },
  { slug: 'manicure', name: 'Маникюр', image: images.manicure, description: 'Уход за ногтями и кутикулой, покрытия и домашние привычки.' },
  { slug: 'cosmetics', name: 'Косметика', image: images.skincare, description: 'Как выбирать средства по задаче, а не по обещаниям на упаковке.' },
  { slug: 'ingredients', name: 'Ингредиенты', image: images.serum, description: 'Энциклопедия активов, увлажнителей, кислот и барьерных компонентов.' },
  { slug: 'procedures', name: 'Процедуры', image: images.procedure, description: 'Что важно знать до процедуры, во время восстановления и после.' },
  { slug: 'guides', name: 'Beauty-гайды', image: images.hero, description: 'Большие пошаговые материалы, которые можно сохранить и использовать как шпаргалку.' },
];

export const guides = [
  { slug: 'polnyy-gid-po-uhodu', number: '01', title: 'Полный гид по уходу за кожей', description: 'От определения типа кожи до понятной утренней и вечерней схемы.', image: images.portrait },
  { slug: 'bazovyy-uhod', number: '02', title: 'Как построить базовый уход', description: 'Минимум средств, понятная последовательность и критерии выбора.', image: images.skincare },
  { slug: 'kak-chitat-sostav', number: '03', title: 'Как читать состав косметики', description: 'Как ориентироваться в INCI и не делать выводы по одному ингредиенту.', image: images.serum },
  { slug: 'utro-vecher', number: '04', title: 'Что наносить утром и вечером', description: 'Удобная схема слоёв с примерами для разных задач кожи.', image: images.sunscreen },
];

export const procedures = [
  { slug: 'laser-hair-removal', title: 'Лазерная эпиляция', type: 'Аппаратные', image: images.procedure, excerpt: 'Как проходит процедура, как подготовиться и чего ожидать от курса.' },
  { slug: 'chemical-peeling', title: 'Химический пилинг', type: 'Для лица', image: images.portrait, excerpt: 'Виды пилингов, восстановление и факторы, которые важно обсудить со специалистом.' },
  { slug: 'hair-lamination', title: 'Ламинирование волос', type: 'Для волос', image: images.hair, excerpt: 'Что даёт процедура, кому подходит и как меняется домашний уход.' },
  { slug: 'facial-massage', title: 'Массаж лица', type: 'Домашний уход', image: images.hero, excerpt: 'Ручные техники, ограничения и реалистичные ожидания от регулярного массажа.' },
];

export const tests = [
  { slug: 'skin-type', title: 'Определить тип кожи', description: '8 вопросов о том, как кожа ведёт себя после умывания и в течение дня.' },
  { slug: 'routine-builder', title: 'Построить схему ухода', description: 'Подберите базовые этапы по типу кожи и основной задаче.' },
  { slug: 'ingredient-compatibility', title: 'Проверить совместимость ингредиентов', description: 'Быстрый ориентир по популярным комбинациям активов.' },
  { slug: 'hair-porosity', title: 'Определить пористость волос', description: 'Поймите, как волосы удерживают влагу и какие текстуры им подходят.' },
  { slug: 'cosmetics-usage', title: 'Калькулятор расхода косметики', description: 'Оцените, на сколько примерно хватит средства при регулярном использовании.' },
  { slug: 'care-fit', title: 'Тест: какой уход вам подходит', description: 'Соберите персональный ориентир из нескольких простых ответов.' },
];

export const allIndexablePaths = [
  '/',
  '/articles',
  '/ingredients',
  '/procedures',
  '/guides',
  '/tests',
  ...categories.filter((item) => !['ingredients', 'procedures', 'guides'].includes(item.slug)).map((item) => `/category/${item.slug}`),
  ...articles.map((item) => `/articles/${item.slug}`),
  ...ingredients.map((item) => `/ingredients/${item.slug}`),
  ...procedures.map((item) => `/procedures/${item.slug}`),
  ...guides.map((item) => `/guides/${item.slug}`),
  ...tests.map((item) => `/tests/${item.slug}`),
];
