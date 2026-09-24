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

export type CareTopicGroup = 'skin-type' | 'task' | 'product';

export type CareTopic = {
  slug: string;
  name: string;
  group: CareTopicGroup;
  description: string;
  intro: string;
  basics: string[];
  focus: string[];
  ingredientSlugs: string[];
  articleSlugs: string[];
  relatedSlugs: string[];
  keywords: string[];
};

export type HairTopicGroup = 'hair-type' | 'task' | 'product';

export type HairTopic = {
  slug: string;
  name: string;
  group: HairTopicGroup;
  description: string;
  intro: string;
  basics: string[];
  focus: string[];
  routine: string[];
  mistakes: string[];
  relatedSlugs: string[];
  keywords: string[];
  specialist?: string;
};

export type MakeupTopicGroup = 'base' | 'zone' | 'technique';

export type MakeupTopic = {
  slug: string;
  name: string;
  group: MakeupTopicGroup;
  description: string;
  intro: string;
  basics: string[];
  focus: string[];
  routine: string[];
  mistakes: string[];
  relatedSlugs: string[];
  keywords: string[];
};

export type ManicureTopicGroup = 'care' | 'covering' | 'style';

export type ManicureTopic = {
  slug: string;
  name: string;
  group: ManicureTopicGroup;
  description: string;
  intro: string;
  basics: string[];
  focus: string[];
  routine: string[];
  mistakes: string[];
  relatedSlugs: string[];
  keywords: string[];
};

export type CosmeticsTopicGroup = 'care' | 'decorative' | 'choice';

export type CosmeticsTopic = {
  slug: string;
  name: string;
  group: CosmeticsTopicGroup;
  description: string;
  intro: string;
  basics: string[];
  focus: string[];
  routine: string[];
  mistakes: string[];
  relatedSlugs: string[];
  keywords: string[];
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


// Обложки для карточек каталога «Уход за кожей».
// Используются изображения с Pexels и Unsplash, чтобы раздел визуально
// соответствовал карточкам «Процедуры» и при этом не зависел от локальных ассетов.
export const careTopicImages: Record<string, string> = {
  'suhaya-kozha': 'https://images.pexels.com/photos/3762890/pexels-photo-3762890.jpeg?auto=compress&cs=tinysrgb&w=900',
  'zhirnaya-kozha': 'https://images.pexels.com/photos/8989964/pexels-photo-8989964.jpeg?auto=compress&cs=tinysrgb&w=900',
  'kombinirovannaya-kozha': 'https://images.pexels.com/photos/7010949/pexels-photo-7010949.jpeg?auto=compress&cs=tinysrgb&w=900',
  'chuvstvitelnaya-kozha': 'https://images.pexels.com/photos/5927811/pexels-photo-5927811.jpeg?auto=compress&cs=tinysrgb&w=900',
  'problemnaya-kozha': 'https://images.pexels.com/photos/9475732/pexels-photo-9475732.jpeg?auto=compress&cs=tinysrgb&w=900',
  'akne': 'https://images.pexels.com/photos/8101530/pexels-photo-8101530.jpeg?auto=compress&cs=tinysrgb&w=900',
  'pigmentaciya': 'https://images.pexels.com/photos/6417954/pexels-photo-6417954.jpeg?auto=compress&cs=tinysrgb&w=900',
  'morshchiny': 'https://images.pexels.com/photos/7010890/pexels-photo-7010890.jpeg?auto=compress&cs=tinysrgb&w=900',
  'uvlazhnenie': 'https://images.pexels.com/photos/29755259/pexels-photo-29755259.jpeg?auto=compress&cs=tinysrgb&w=900',
  'vosstanovlenie-barera': 'https://images.pexels.com/photos/9475732/pexels-photo-9475732.jpeg?auto=compress&cs=tinysrgb&w=900',
  'rasshirennye-pory': 'https://images.pexels.com/photos/8989957/pexels-photo-8989957.jpeg?auto=compress&cs=tinysrgb&w=900',
  'kremy': 'https://images.pexels.com/photos/6560344/pexels-photo-6560344.jpeg?auto=compress&cs=tinysrgb&w=900',
  'syvorotki': 'https://images.pexels.com/photos/8945936/pexels-photo-8945936.jpeg?auto=compress&cs=tinysrgb&w=900',
  'toniki': 'https://images.pexels.com/photos/8128060/pexels-photo-8128060.jpeg?auto=compress&cs=tinysrgb&w=900',
  'maski': 'https://images.pexels.com/photos/7622921/pexels-photo-7622921.jpeg?auto=compress&cs=tinysrgb&w=900',
  'spf': images.sunscreen,
  'ochishchenie': 'https://images.pexels.com/photos/6560307/pexels-photo-6560307.jpeg?auto=compress&cs=tinysrgb&w=900',
};

export const hairTopicImages: Record<string, string> = {
  'suhie-volosy': 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=900',
  'zhirnye-korni': 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=900',
  'tonkie-volosy': 'https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=900',
  'kudryavye-volosy': 'https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=900',
  'poristye-volosy': 'https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&w=900',
  'okrashennye-volosy': 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=900',
  'lomkost-volos': 'https://images.pexels.com/photos/3992873/pexels-photo-3992873.jpeg?auto=compress&cs=tinysrgb&w=900',
  'sekushchiesya-konchiki': 'https://images.pexels.com/photos/3993463/pexels-photo-3993463.jpeg?auto=compress&cs=tinysrgb&w=900',
  'pushistost-volos': 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=900',
  'obem-volos': 'https://images.pexels.com/photos/3993307/pexels-photo-3993307.jpeg?auto=compress&cs=tinysrgb&w=900',
  'termozashchita': 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=900',
  'kozha-golovy': 'https://images.pexels.com/photos/3993312/pexels-photo-3993312.jpeg?auto=compress&cs=tinysrgb&w=900',
  'shampuni': 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=900',
  'kondicionery': 'https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=900',
  'maski-dlya-volos': 'https://images.pexels.com/photos/3993459/pexels-photo-3993459.jpeg?auto=compress&cs=tinysrgb&w=900',
  'nesmyvaemyi-uhod': 'https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg?auto=compress&cs=tinysrgb&w=900',
  'masla-dlya-volos': 'https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg?auto=compress&cs=tinysrgb&w=900',
  'suhoy-shampun': 'https://images.pexels.com/photos/3738375/pexels-photo-3738375.jpeg?auto=compress&cs=tinysrgb&w=900',
};

export const makeupTopicImages: Record<string, string> = {
  'podgotovka-kozhi': 'https://images.pexels.com/photos/12585853/pexels-photo-12585853.jpeg?auto=compress&cs=tinysrgb&w=900',
  'tonalnaya-osnova': 'https://images.pexels.com/photos/9846610/pexels-photo-9846610.jpeg?auto=compress&cs=tinysrgb&w=900',
  'konsiler': 'https://images.pexels.com/photos/12585853/pexels-photo-12585853.jpeg?auto=compress&cs=tinysrgb&w=900',
  'pudra': 'https://images.pexels.com/photos/9846610/pexels-photo-9846610.jpeg?auto=compress&cs=tinysrgb&w=900',
  'rumyana': 'https://images.pexels.com/photos/29588093/pexels-photo-29588093.jpeg?auto=compress&cs=tinysrgb&w=900',
  'bronzer-haylayter': 'https://images.pexels.com/photos/9743993/pexels-photo-9743993.jpeg?auto=compress&cs=tinysrgb&w=900',
  'makiyazh-glaz': 'https://images.pexels.com/photos/8065401/pexels-photo-8065401.jpeg?auto=compress&cs=tinysrgb&w=900',
  'strelki': 'https://images.pexels.com/photos/6713331/pexels-photo-6713331.jpeg?auto=compress&cs=tinysrgb&w=900',
  'tush-dlya-resnic': 'https://images.pexels.com/photos/6713322/pexels-photo-6713322.jpeg?auto=compress&cs=tinysrgb&w=900',
  'brovi': 'https://images.pexels.com/photos/9743993/pexels-photo-9743993.jpeg?auto=compress&cs=tinysrgb&w=900',
  'makiyazh-gub': 'https://images.pexels.com/photos/7588641/pexels-photo-7588641.jpeg?auto=compress&cs=tinysrgb&w=900',
  'krasnaya-pomada': 'https://images.pexels.com/photos/4672744/pexels-photo-4672744.jpeg?auto=compress&cs=tinysrgb&w=900',
  'naturalnyy-makiyazh': 'https://images.pexels.com/photos/6954126/pexels-photo-6954126.jpeg?auto=compress&cs=tinysrgb&w=900',
  'vecherniy-makiyazh': 'https://images.pexels.com/photos/13965213/pexels-photo-13965213.jpeg?auto=compress&cs=tinysrgb&w=900',
  'stoykiy-makiyazh': 'https://images.pexels.com/photos/29588093/pexels-photo-29588093.jpeg?auto=compress&cs=tinysrgb&w=900',
  'makiyazh-s-ochkami': 'https://images.pexels.com/photos/7588642/pexels-photo-7588642.jpeg?auto=compress&cs=tinysrgb&w=900',
  'bystryy-makiyazh': 'https://images.pexels.com/photos/4672744/pexels-photo-4672744.jpeg?auto=compress&cs=tinysrgb&w=900',
  'fiksaciya-makiyazha': 'https://images.pexels.com/photos/9846610/pexels-photo-9846610.jpeg?auto=compress&cs=tinysrgb&w=900',
};


export const manicureTopicImages: Record<string, string> = {
  'uhod-za-kutikuloy': images.manicure,
  'lomkie-nogti': 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80',
  'rasslaivanie-nogtey': 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=80',
  'domashniy-manikyur': 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=900&q=80',
  'instrumenty-dlya-manikyura': 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80',
  'uhod-za-rukami': 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=900&q=80',
  'baza-dlya-manikyura': 'https://images.unsplash.com/photo-1599948128020-9a44505b0d1b?auto=format&fit=crop&w=900&q=80',
  'obychnyy-lak': 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80',
  'gel-lak': 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80',
  'snyatie-gel-laka': 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=80',
  'stoykost-pokrytiya': 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80',
  'manikyur-bez-pokrytiya': 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=900&q=80',
  'forma-nogtey': 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=900&q=80',
  'korotkie-nogti': 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80',
  'nyudovyy-manikyur': 'https://images.unsplash.com/photo-1599948128020-9a44505b0d1b?auto=format&fit=crop&w=900&q=80',
  'krasnyy-manikyur': 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80',
  'frantsuzskiy-manikyur': 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80',
  'minimalistichnyy-manikyur': 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80',
};


export const cosmeticsTopicImages: Record<string, string> = {
  "ochishchayushchie-sredstva": "https://images.pexels.com/photos/6560307/pexels-photo-6560307.jpeg?auto=compress&cs=tinysrgb&w=900",
  "uvlazhnyayushchiy-krem": "https://images.pexels.com/photos/6560344/pexels-photo-6560344.jpeg?auto=compress&cs=tinysrgb&w=900",
  "syvorotka-dlya-lica": "https://images.pexels.com/photos/8945936/pexels-photo-8945936.jpeg?auto=compress&cs=tinysrgb&w=900",
  "spf-dlya-lica": "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=80",
  "maska-dlya-lica": "https://images.pexels.com/photos/7622921/pexels-photo-7622921.jpeg?auto=compress&cs=tinysrgb&w=900",
  "krem-dlya-vek": "https://images.pexels.com/photos/3762890/pexels-photo-3762890.jpeg?auto=compress&cs=tinysrgb&w=900",
  "tonalnyy-krem": "https://images.pexels.com/photos/9846610/pexels-photo-9846610.jpeg?auto=compress&cs=tinysrgb&w=900",
  "konsiler-kak-produkt": "https://images.pexels.com/photos/12585853/pexels-photo-12585853.jpeg?auto=compress&cs=tinysrgb&w=900",
  "pudra-kak-produkt": "https://images.pexels.com/photos/29588093/pexels-photo-29588093.jpeg?auto=compress&cs=tinysrgb&w=900",
  "tush-kak-produkt": "https://images.pexels.com/photos/6713322/pexels-photo-6713322.jpeg?auto=compress&cs=tinysrgb&w=900",
  "pomada-i-tint": "https://images.pexels.com/photos/4672744/pexels-photo-4672744.jpeg?auto=compress&cs=tinysrgb&w=900",
  "rumyana-kak-produkt": "https://images.pexels.com/photos/29588093/pexels-photo-29588093.jpeg?auto=compress&cs=tinysrgb&w=900",
  "kak-chitat-sostav": "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=900",
  "srok-godnosti-kosmetiki": "https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=900",
  "hranenie-kosmetiki": "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=900",
  "kosmetika-dlya-chuvstvitelnoy-kozhi": "https://images.pexels.com/photos/5927811/pexels-photo-5927811.jpeg?auto=compress&cs=tinysrgb&w=900",
  "komedogennost": "https://images.pexels.com/photos/8989964/pexels-photo-8989964.jpeg?auto=compress&cs=tinysrgb&w=900",
  "patch-test": "https://images.pexels.com/photos/9475732/pexels-photo-9475732.jpeg?auto=compress&cs=tinysrgb&w=900",
  "kak-sobrat-kosmetichku": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80"
};

export const articles: Article[] = [
  { slug: 'retinol-kak-ispolzovat', title: 'Ретинол для лица: как правильно использовать', excerpt: 'Как вводить ретинол в уход, с какой частоты начинать и какие сочетания лучше исключить.', category: 'Кожа', image: images.portrait, readTime: '9 мин', date: '18 сентября 2026', tags: ['ретинол', 'активы', 'анти-эйдж'] },
  { slug: 'komponenty-dlya-uvlazhneniya', title: 'Лучшие компоненты для увлажнения кожи', excerpt: 'Гиалуроновая кислота, глицерин, керамиды и другие компоненты, которые помогают удерживать влагу.', category: 'Ингредиенты', image: images.serum, readTime: '7 мин', date: '16 сентября 2026', tags: ['увлажнение', 'сухость'] },
  { slug: 'chto-takoe-niacinamid', title: 'Что такое ниацинамид и зачем он коже', excerpt: 'Разбираем свойства витамина B3, рабочие концентрации и совместимость с другими активами.', category: 'Ингредиенты', image: images.skincare, readTime: '8 мин', date: '14 сентября 2026', tags: ['ниацинамид', 'барьер'] },
  { slug: 'kak-vybrat-spf', title: 'Как выбрать SPF для лица на каждый день', excerpt: 'Что означают SPF и UVA-маркировки и как подобрать комфортную текстуру под свой тип кожи.', category: 'Кожа', image: images.sunscreen, readTime: '10 мин', date: '12 сентября 2026', tags: ['spf', 'солнцезащита'] },
  { slug: 'ochishchenie-kozhi', title: 'Очищение кожи без пересушивания: базовая схема', excerpt: 'Когда достаточно одного средства, зачем нужен двойной этап и как понять, что очищение слишком агрессивное.', category: 'Кожа', image: images.skincare, readTime: '6 мин', date: '10 сентября 2026', tags: ['очищение', 'барьер'] },
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
  { slug: 'skin', name: 'Кожа', image: images.portrait, description: 'Базовый и активный уход, типы кожи, проблемы и рабочие схемы.' },
  { slug: 'hair', name: 'Волосы', image: images.hair, description: 'Уход за кожей головы, длиной, окрашенными и пористыми волосами.' },
  { slug: 'makeup', name: 'Макияж', image: images.makeup, description: 'Техники, продукты, подготовка кожи и понятные разборы макияжа.' },
  { slug: 'manicure', name: 'Маникюр', image: images.manicure, description: 'Уход за ногтями и кутикулой, покрытия и домашние привычки.' },
  { slug: 'cosmetics', name: 'Косметика', image: images.skincare, description: 'Как выбирать средства по задаче, а не по обещаниям на упаковке.' },
  { slug: 'ingredients', name: 'Ингредиенты', image: images.serum, description: 'Энциклопедия активов, увлажнителей, кислот и барьерных компонентов.' },
  { slug: 'procedures', name: 'Процедуры', image: images.procedure, description: 'Что важно знать до процедуры, во время восстановления и после.' },
  { slug: 'guides', name: 'Beauty-гайды', image: images.hero, description: 'Большие пошаговые материалы, которые можно сохранить и использовать как шпаргалку.' },
];

export const careGroups: { id: CareTopicGroup; title: string; description: string }[] = [
  { id: 'skin-type', title: 'По типу кожи', description: 'Как собрать базовую схему ухода с учётом того, как кожа ведёт себя в течение дня.' },
  { id: 'task', title: 'По задаче', description: 'Материалы под конкретную цель: от увлажнения и поддержки барьера до работы с неровным тоном.' },
  { id: 'product', title: 'Средства', description: 'Как выбирать кремы, сыворотки, тоники, маски, SPF и очищение и какую роль они играют в рутине.' },
];

export const careTopics: CareTopic[] = [
  {
    slug: 'suhaya-kozha', name: 'Сухая кожа', group: 'skin-type',
    description: 'Как уменьшить ощущение стянутости и собрать комфортную базу без перегруженной рутины.',
    intro: 'Сухая кожа обычно нуждается не в максимальном количестве средств, а в мягком очищении, регулярном увлажнении и формулах, которые помогают удерживать влагу. Ориентируйтесь на комфорт после умывания и в течение дня, а не только на плотность крема.',
    basics: ['мягкое очищение без выраженного обезжиривания', 'увлажняющий слой после умывания', 'крем с компонентами, поддерживающими барьер', 'дневная фотозащита по условиям дня'],
    focus: ['глицерин и гиалуроновая кислота для увлажнения', 'керамиды и другие липиды для поддержки барьера', 'мягкие кремовые или эмульсионные текстуры', 'постепенное введение кислот и ретиноидов'],
    ingredientSlugs: ['hyaluronic-acid','ceramides','peptides'], articleSlugs: ['komponenty-dlya-uvlazhneniya','ochishchenie-kozhi','kak-vybrat-spf'], relatedSlugs: ['chuvstvitelnaya-kozha','uvlazhnenie','vosstanovlenie-barera'], keywords: ['сухая кожа','уход за сухой кожей','увлажнение кожи']
  },
  {
    slug: 'zhirnaya-kozha', name: 'Жирная кожа', group: 'skin-type',
    description: 'Как контролировать дискомфорт от избытка себума и не пересушивать кожу агрессивным уходом.',
    intro: 'Жирная кожа может одновременно испытывать обезвоженность и чувствительность, поэтому слишком жёсткое очищение часто только усложняет уход. Базовая схема строится вокруг мягкого умывания, лёгкого увлажнения и точечного добавления активов под задачу.',
    basics: ['бережное очищение утром и вечером по необходимости', 'лёгкое увлажнение, если коже комфортнее с ним', 'один актив под основную задачу', 'SPF в удобной текстуре'],
    focus: ['ниацинамид как универсальный поддерживающий компонент', 'BHA в подходящей формуле при склонности к забитым порам', 'некомедогенность как ориентир, а не абсолютная гарантия', 'отказ от постоянного ощущения «до скрипа» после умывания'],
    ingredientSlugs: ['niacinamide','bha','hyaluronic-acid'], articleSlugs: ['chto-takoe-niacinamid','ochishchenie-kozhi','kak-vybrat-spf'], relatedSlugs: ['problemnaya-kozha','akne','rasshirennye-pory'], keywords: ['жирная кожа','уход за жирной кожей','себум']
  },
  {
    slug: 'kombinirovannaya-kozha', name: 'Комбинированная кожа', group: 'skin-type',
    description: 'Уход для ситуации, когда T-зона и щёки ведут себя по-разному.',
    intro: 'При комбинированной коже не обязательно использовать две полностью разные рутины. Чаще достаточно общей мягкой базы и более точечного применения активов или плотных текстур только там, где они действительно нужны.',
    basics: ['единое мягкое очищение для всего лица', 'лёгкая базовая эмульсия или крем', 'локальное нанесение более плотного ухода на сухие зоны', 'активы — точечно и постепенно'],
    focus: ['ниацинамид', 'увлажняющие компоненты', 'BHA для отдельных зон при необходимости', 'гибкая плотность крема по сезону'],
    ingredientSlugs: ['niacinamide','hyaluronic-acid','bha'], articleSlugs: ['chto-takoe-niacinamid','komponenty-dlya-uvlazhneniya','ochishchenie-kozhi'], relatedSlugs: ['zhirnaya-kozha','suhaya-kozha','rasshirennye-pory'], keywords: ['комбинированная кожа','уход за комбинированной кожей','T-зона']
  },
  {
    slug: 'chuvstvitelnaya-kozha', name: 'Чувствительная кожа', group: 'skin-type',
    description: 'Как упростить рутину и снизить вероятность дискомфорта при использовании новых средств.',
    intro: 'Чувствительной коже обычно помогает предсказуемая, короткая рутина и осторожное тестирование новых продуктов. Важнее не «самый мягкий» маркетинговый ярлык, а отсутствие постоянного раздражения и понятная переносимость конкретной формулы.',
    basics: ['минималистичная базовая схема', 'новые средства по одному', 'пауза между введением активов', 'отслеживание индивидуальных реакций'],
    focus: ['керамиды и увлажнители', 'простые формулы без лишней нагрузки', 'комфортное очищение', 'осторожность с частым отшелушиванием'],
    ingredientSlugs: ['ceramides','hyaluronic-acid','niacinamide'], articleSlugs: ['komponenty-dlya-uvlazhneniya','ochishchenie-kozhi','chto-takoe-niacinamid'], relatedSlugs: ['suhaya-kozha','vosstanovlenie-barera','uvlazhnenie'], keywords: ['чувствительная кожа','уход за чувствительной кожей','кожный барьер']
  },
  {
    slug: 'problemnaya-kozha', name: 'Проблемная кожа', group: 'skin-type',
    description: 'Базовый уход при склонности к высыпаниям без попытки решить всё множеством активов одновременно.',
    intro: 'При склонности к высыпаниям полезно сначала стабилизировать базу: мягкое очищение, комфортное увлажнение и фотозащиту. Косметический уход может поддерживать кожу, но выраженные или длительно сохраняющиеся высыпания лучше обсуждать с дерматологом.',
    basics: ['мягкая база без постоянного пересушивания', 'не менять несколько активов одновременно', 'следить за переносимостью', 'не заменять уходом медицинскую оценку при выраженных симптомах'],
    focus: ['ниацинамид', 'BHA в умеренной схеме', 'лёгкие увлажняющие текстуры', 'SPF при использовании активного ухода'],
    ingredientSlugs: ['niacinamide','bha','ceramides'], articleSlugs: ['chto-takoe-niacinamid','ochishchenie-kozhi','kak-vybrat-spf'], relatedSlugs: ['akne','zhirnaya-kozha','rasshirennye-pory'], keywords: ['проблемная кожа','уход при высыпаниях','уход за проблемной кожей']
  },
  {
    slug: 'akne', name: 'Акне', group: 'task',
    description: 'Как выстроить поддерживающий уход при склонности к воспалениям и не перегрузить кожу активами.',
    intro: 'Косметика не заменяет диагностику и лечение акне, но базовый уход может помогать поддерживать комфорт кожи во время выбранной специалистом или самостоятельной рутины. Полезно избегать частой смены средств и слишком агрессивного очищения.',
    basics: ['мягкое очищение', 'увлажнение по потребности', 'фотозащита', 'один новый актив за раз'],
    focus: ['BHA и ниацинамид как распространённые косметические компоненты', 'поддержка барьера', 'лёгкие нераздражающие текстуры', 'обращение к дерматологу при выраженном или длительном течении'],
    ingredientSlugs: ['bha','niacinamide','ceramides'], articleSlugs: ['chto-takoe-niacinamid','ochishchenie-kozhi','kak-vybrat-spf'], relatedSlugs: ['problemnaya-kozha','rasshirennye-pory','vosstanovlenie-barera'], keywords: ['акне уход','уход при акне','косметика при акне']
  },
  {
    slug: 'pigmentaciya', name: 'Пигментация', group: 'task',
    description: 'Как собрать рутину для неровного тона и почему фотозащита остаётся базовым этапом.',
    intro: 'Работа с неровным тоном обычно требует регулярности и терпения. В косметической рутине часто используют антиоксиданты, ретиноиды и мягкие отшелушивающие компоненты, но ключевым фоном остаётся защита от солнца.',
    basics: ['ежедневная фотозащита по условиям дня', 'один целевой актив', 'увлажняющая база', 'оценка переносимости в течение нескольких недель'],
    focus: ['витамин C', 'ретинол', 'AHA-кислоты', 'ниацинамид'],
    ingredientSlugs: ['vitamin-c','retinol','aha','niacinamide'], articleSlugs: ['retinol-kak-ispolzovat','chto-takoe-niacinamid','kak-vybrat-spf'], relatedSlugs: ['spf','morshchiny','uvlazhnenie'], keywords: ['пигментация','уход от пигментации','неровный тон кожи']
  },
  {
    slug: 'morshchiny', name: 'Морщины', group: 'task',
    description: 'Уход за кожей с фокусом на увлажнение, фотозащиту и доказанные активные компоненты.',
    intro: 'Текстура кожи меняется с возрастом естественным образом. В уходе имеет смысл сосредоточиться не на обещании «стереть» изменения, а на поддержании увлажнённости, комфорта и защите от факторов, ускоряющих фотостарение.',
    basics: ['регулярное увлажнение', 'дневная фотозащита', 'активы только при хорошей переносимости', 'реалистичные ожидания от косметики'],
    focus: ['ретинол', 'пептиды', 'витамин C', 'керамиды'],
    ingredientSlugs: ['retinol','peptides','vitamin-c','ceramides'], articleSlugs: ['retinol-kak-ispolzovat','komponenty-dlya-uvlazhneniya','kak-vybrat-spf'], relatedSlugs: ['pigmentaciya','uvlazhnenie','syvorotki'], keywords: ['уход за зрелой кожей','морщины уход','ретинол']
  },
  {
    slug: 'uvlazhnenie', name: 'Увлажнение', group: 'task',
    description: 'Как различать увлажнители, смягчающие компоненты и средства для удержания влаги.',
    intro: 'Увлажнение — это не один ингредиент и не обязательно плотный крем. Комфортная схема может сочетать компоненты, связывающие воду, и липиды или эмоленты, которые уменьшают потерю влаги с поверхности кожи.',
    basics: ['наносить увлажняющее средство на комфортно очищенную кожу', 'подбирать текстуру по ощущению, а не по типу упаковки', 'менять плотность ухода по сезону', 'при сухости оценивать также качество очищения'],
    focus: ['глицерин и гиалуроновая кислота', 'керамиды', 'пептиды', 'кремы и эмульсии с понятной базой'],
    ingredientSlugs: ['hyaluronic-acid','ceramides','peptides'], articleSlugs: ['komponenty-dlya-uvlazhneniya','ochishchenie-kozhi'], relatedSlugs: ['suhaya-kozha','vosstanovlenie-barera','kremy'], keywords: ['увлажнение кожи','как увлажнить кожу','увлажняющий крем']
  },
  {
    slug: 'vosstanovlenie-barera', name: 'Восстановление барьера', group: 'task',
    description: 'Что упростить в рутине, если кожа стала чувствительнее, суше или хуже переносит привычные средства.',
    intro: 'Когда кожа становится менее комфортной после активного ухода, полезно временно сократить количество раздражающих шагов и вернуться к простой базе. Термин «восстановление барьера» описывает поддерживающую стратегию, а не мгновенный эффект одного средства.',
    basics: ['сократить частоту потенциально раздражающих активов', 'оставить мягкое очищение', 'использовать привычное увлажнение', 'возвращать активы постепенно'],
    focus: ['керамиды', 'увлажнители', 'простые кремовые основы', 'отсутствие постоянного жжения и дискомфорта'],
    ingredientSlugs: ['ceramides','hyaluronic-acid','niacinamide'], articleSlugs: ['komponenty-dlya-uvlazhneniya','ochishchenie-kozhi','chto-takoe-niacinamid'], relatedSlugs: ['chuvstvitelnaya-kozha','suhaya-kozha','uvlazhnenie'], keywords: ['кожный барьер','восстановление барьера кожи','поврежденный барьер']
  },
  {
    slug: 'rasshirennye-pory', name: 'Расширенные поры', group: 'task',
    description: 'Как сделать уход более предсказуемым при заметной текстуре и склонности пор к загрязнению.',
    intro: 'Размер пор во многом задан особенностями кожи и не может быть «закрыт» косметикой навсегда. Уход скорее помогает поддерживать чистоту поверхности, контролировать избыток себума и визуально выравнивать текстуру.',
    basics: ['регулярное, но не агрессивное очищение', 'лёгкое увлажнение', 'активы с умеренной частотой', 'отказ от травмирующих способов механической очистки'],
    focus: ['BHA', 'ниацинамид', 'ретиноиды при хорошей переносимости', 'SPF в активной схеме'],
    ingredientSlugs: ['bha','niacinamide','retinol'], articleSlugs: ['chto-takoe-niacinamid','retinol-kak-ispolzovat','ochishchenie-kozhi'], relatedSlugs: ['zhirnaya-kozha','akne','ochishchenie'], keywords: ['расширенные поры','уход за порами','салициловая кислота поры']
  },
  {
    slug: 'kremy', name: 'Кремы', group: 'product',
    description: 'Как выбирать крем по текстуре, задаче и состоянию кожи, а не только по маркировке на банке.',
    intro: 'Крем чаще всего закрывает базовую задачу: сделать кожу комфортнее и уменьшить потерю влаги. Плотность и состав стоит выбирать по ощущениям кожи, сезону и тому, какие активы уже есть в рутине.',
    basics: ['для базы важнее комфорт и регулярность', 'плотная текстура не всегда означает более сильное увлажнение', 'один крем может подходить нескольким типам кожи', 'дневной и ночной крем не обязаны быть разными'],
    focus: ['керамиды и эмоленты', 'глицерин и гиалуроновая кислота', 'отсутствие конфликтующей с рутиной нагрузки активами', 'удобство нанесения под SPF или макияж'],
    ingredientSlugs: ['ceramides','hyaluronic-acid','peptides'], articleSlugs: ['komponenty-dlya-uvlazhneniya'], relatedSlugs: ['uvlazhnenie','suhaya-kozha','vosstanovlenie-barera'], keywords: ['крем для лица','как выбрать крем','увлажняющий крем']
  },
  {
    slug: 'syvorotki', name: 'Сыворотки', group: 'product',
    description: 'Когда сыворотка действительно нужна и как встроить её в базовый уход без лишних слоёв.',
    intro: 'Сыворотка — это формат продукта, а не обязательный этап. Она полезна, когда в рутину нужно добавить конкретный актив или лёгкий увлажняющий слой; при этом хороший крем может оставаться единственным средством после очищения.',
    basics: ['выбирать сыворотку под одну понятную задачу', 'не наслаивать много активных формул сразу', 'ориентироваться на концентрацию и переносимость', 'закрывать кремом только если это нужно по ощущениям'],
    focus: ['ниацинамид', 'витамин C', 'ретинол', 'гиалуроновая кислота'],
    ingredientSlugs: ['niacinamide','vitamin-c','retinol','hyaluronic-acid'], articleSlugs: ['chto-takoe-niacinamid','retinol-kak-ispolzovat','komponenty-dlya-uvlazhneniya'], relatedSlugs: ['kremy','pigmentaciya','morshchiny'], keywords: ['сыворотка для лица','как выбрать сыворотку','сыворотка уход']
  },
  {
    slug: 'toniki', name: 'Тоники', group: 'product',
    description: 'Нужен ли тоник в современной рутине и чем увлажняющий формат отличается от кислотного.',
    intro: 'Тоник не является обязательным шагом после умывания. Современные формулы могут работать как лёгкий увлажняющий слой или как носитель активов — поэтому оценивать стоит конкретный состав и задачу, а не название категории.',
    basics: ['обычный увлажняющий тоник — опциональный шаг', 'кислотный тоник фактически относится к активному уходу', 'не дублировать одинаковые активы в нескольких слоях', 'при чувствительности выбирать простую рутину'],
    focus: ['увлажнители', 'AHA/BHA только по задаче', 'совместимость с остальной схемой', 'отсутствие обязательности «восстанавливать pH» после современного очищения'],
    ingredientSlugs: ['hyaluronic-acid','aha','bha'], articleSlugs: ['komponenty-dlya-uvlazhneniya','ochishchenie-kozhi'], relatedSlugs: ['syvorotki','ochishchenie','uvlazhnenie'], keywords: ['тоник для лица','нужен ли тоник','кислотный тоник']
  },
  {
    slug: 'maski', name: 'Маски', group: 'product',
    description: 'Как использовать маски как дополнительный, а не обязательный этап ухода.',
    intro: 'Маски удобны как эпизодический формат — например, для дополнительного увлажнения или очищения. Они не обязаны заменять базовый крем и не делают рутину автоматически эффективнее.',
    basics: ['использовать по необходимости, а не по расписанию', 'не сочетать несколько раздражающих масок подряд', 'после очищающих форматов оценивать комфорт кожи', 'увлажняющие маски можно считать дополнительным слоем ухода'],
    focus: ['увлажняющие компоненты', 'глины и абсорбирующие компоненты — умеренно', 'кислоты — как актив, а не «просто маска»', 'простые формулы при чувствительной коже'],
    ingredientSlugs: ['hyaluronic-acid','ceramides','aha'], articleSlugs: ['komponenty-dlya-uvlazhneniya'], relatedSlugs: ['uvlazhnenie','chuvstvitelnaya-kozha','kremy'], keywords: ['маска для лица','увлажняющая маска','очищающая маска']
  },
  {
    slug: 'spf', name: 'SPF', group: 'product',
    description: 'Как выбрать солнцезащитное средство для лица и сделать его регулярной частью дневной рутины.',
    intro: 'Лучший SPF — тот, который соответствует условиям дня и который вы готовы наносить достаточно регулярно. При выборе важны уровень защиты, UVA-маркировка, текстура и совместимость с остальным уходом.',
    basics: ['наносить как завершающий этап утреннего ухода', 'ориентироваться на условия пребывания на солнце', 'обновлять защиту при длительном нахождении на улице по инструкции средства', 'подбирать комфортную текстуру'],
    focus: ['широкий спектр защиты', 'SPF 30–50 для повседневных сценариев в зависимости от условий', 'устойчивость к воде при соответствующих активностях', 'совместимость с макияжем и уходом'],
    ingredientSlugs: ['vitamin-c','retinol'], articleSlugs: ['kak-vybrat-spf','retinol-kak-ispolzovat'], relatedSlugs: ['pigmentaciya','morshchiny','syvorotki'], keywords: ['spf для лица','солнцезащитный крем','как выбрать spf']
  },
  {
    slug: 'ochishchenie', name: 'Очищение', group: 'product',
    description: 'Как выбрать средство для умывания и понять, нужен ли вам двойной этап очищения.',
    intro: 'Очищение должно удалять загрязнения и остатки дневных средств, но не обязано оставлять кожу обезжиренной «до скрипа». Количество этапов зависит от макияжа, устойчивого SPF и того, чем вам удобно пользоваться.',
    basics: ['одного мягкого средства часто достаточно', 'двойное очищение полезно при стойком макияже или плотном SPF', 'горячая вода и длительное умывание могут усиливать сухость', 'после умывания кожа не должна постоянно жечь или сильно стягиваться'],
    focus: ['мягкие ПАВы', 'кремовые и гелевые текстуры по комфорту', 'масло или бальзам как первый этап при необходимости', 'простота и регулярность'],
    ingredientSlugs: ['ceramides','hyaluronic-acid'], articleSlugs: ['ochishchenie-kozhi','komponenty-dlya-uvlazhneniya'], relatedSlugs: ['chuvstvitelnaya-kozha','zhirnaya-kozha','toniki'], keywords: ['очищение кожи','средство для умывания','двойное очищение']
  },
];


export const hairGroups: { id: HairTopicGroup; title: string; description: string }[] = [
  { id: 'hair-type', title: 'По типу и состоянию волос', description: 'Как адаптировать базовый уход под сухость, пористость, окрашивание, тонкие или кудрявые волосы.' },
  { id: 'task', title: 'По задаче', description: 'Что делать с ломкостью, пушистостью, нехваткой объёма, секущимися концами и воздействием горячей укладки.' },
  { id: 'product', title: 'Средства', description: 'Как выбирать шампунь, кондиционер, маску, несмываемый уход, масло и сухой шампунь без лишних покупок.' },
];

export const hairTopics: HairTopic[] = [
  {
    slug: 'suhie-volosy', name: 'Сухие волосы', group: 'hair-type',
    description: 'Как уменьшить сухость по длине, сохранить мягкость и не перегрузить волосы плотными средствами.',
    intro: 'Сухость длины чаще заметна по тусклости, спутыванию и шершавости. Уход строится вокруг мягкого мытья кожи головы, кондиционирования после каждого мытья и защиты длины от трения и горячих инструментов.',
    basics: ['шампунь наносить в первую очередь на кожу головы', 'после мытья использовать кондиционер по длине', 'аккуратно промакивать волосы полотенцем, не тереть', 'перед горячей укладкой наносить термозащиту'],
    focus: ['смягчающие кондиционирующие компоненты', 'несмываемые кремы и сыворотки по потребности', 'умеренное количество масел только на длину', 'регулярность важнее большого числа банок'],
    routine: ['Очищайте кожу головы по мере загрязнения.', 'На длину наносите кондиционер на несколько минут.', 'На влажные волосы добавляйте небольшое количество несмываемого средства.', 'Снижайте температуру фена и используйте термозащиту.'],
    mistakes: ['наносить много шампуня на всю длину', 'пытаться «увлажнить» волосы только маслом', 'тереть мокрые волосы полотенцем', 'ежедневно использовать горячие инструменты без защиты'],
    relatedSlugs: ['poristye-volosy','lomkost-volos','maski-dlya-volos'], keywords: ['сухие волосы','уход за сухими волосами','увлажнение волос']
  },
  {
    slug: 'zhirnye-korni', name: 'Жирные корни', group: 'hair-type',
    description: 'Как очищать кожу головы по потребности и при этом не пересушивать длину.',
    intro: 'Быстрое появление жирности у корней не означает, что волосы нужно «приучать» к редкому мытью. Частоту очищения удобнее подбирать по ощущению свежести кожи головы, а кондиционирующие продукты оставлять на длине.',
    basics: ['мыть голову по мере загрязнения', 'шампунь распределять по коже головы, а не по концам', 'кондиционер наносить ниже зоны корней', 'при необходимости промывать кожу головы дважды небольшим количеством шампуня'],
    focus: ['комфорт после мытья без зуда и стянутости', 'лёгкие текстуры на длине', 'тщательное смывание средств', 'сухой шампунь как временный косметический помощник, а не замена мытью'],
    routine: ['Намочите волосы и хорошо пропитайте кожу головы водой.', 'Вспеньте небольшое количество шампуня у корней.', 'Повторите очищение, если было много стайлинга или себума.', 'Кондиционер используйте только на длине.'],
    mistakes: ['откладывать мытьё через дискомфорт ради «тренировки» кожи головы', 'наносить плотные маски на корни без необходимости', 'агрессивно скрабировать кожу при каждом мытье', 'использовать сухой шампунь много дней подряд вместо очищения'],
    relatedSlugs: ['kozha-golovy','shampuni','suhoy-shampun'], keywords: ['жирные корни','жирная кожа головы','как часто мыть голову']
  },
  {
    slug: 'tonkie-volosy', name: 'Тонкие волосы', group: 'hair-type',
    description: 'Как сохранить лёгкость, объём и защитить тонкую длину от механического повреждения.',
    intro: 'Тонкие волосы легче утяжелить избытком плотных текстур, но это не значит, что им не нужен кондиционер. Обычно лучше работают небольшие дозировки, лёгкие несмываемые средства и аккуратное обращение с влажной длиной.',
    basics: ['использовать кондиционер небольшим количеством', 'наносить плотные средства только на концы', 'расчёсывать без рывков, начиная с концов', 'подбирать стайлинг, который не склеивает длину'],
    focus: ['лёгкие кондиционеры', 'спреи вместо плотных кремов при склонности к утяжелению', 'объём у корней за счёт укладки, а не пересушивания', 'минимизация трения и тугих причёсок'],
    routine: ['Очищайте кожу головы привычным шампунем.', 'Наносите кондиционер на нижнюю половину длины.', 'Используйте лёгкий спрей или термозащиту.', 'Сушите корни с направлением воздуха против привычного пробора для визуального объёма.'],
    mistakes: ['полностью отказываться от кондиционера', 'наносить масло у корней', 'часто использовать сильную фиксацию без последующего очищения', 'начёсывать волосы ежедневно'],
    relatedSlugs: ['obem-volos','kondicionery','nesmyvaemyi-uhod'], keywords: ['тонкие волосы','уход за тонкими волосами','объем волос']
  },
  {
    slug: 'kudryavye-volosy', name: 'Кудрявые и волнистые волосы', group: 'hair-type',
    description: 'Базовая схема для более оформленного завитка, мягкости и меньшей пушистости.',
    intro: 'Кудрявые и волнистые волосы часто лучше выглядят, когда длину расчёсывают во влажном состоянии с кондиционером и не нарушают форму завитка после высыхания. Рабочая схема зависит от плотности волос и того, насколько легко они утяжеляются.',
    basics: ['бережно распутывать волосы с кондиционером', 'не тереть длину махровым полотенцем', 'наносить стайлинг на влажные волосы', 'сушить естественно или диффузором на комфортной температуре'],
    focus: ['баланс кондиционирования и лёгкости', 'гели и кремы для фиксации формы завитка', 'микрофибра или гладкая хлопковая ткань для промакивания', 'обновление завитка небольшим количеством воды и стайлинга'],
    routine: ['После шампуня распределите кондиционер по длине.', 'Распутайте волосы пальцами или подходящей расчёской.', 'На мокрую длину нанесите стайлинг и сформируйте пряди.', 'Не расчёсывайте сухие локоны, если хотите сохранить рисунок завитка.'],
    mistakes: ['расчёсывать сухие волосы мелкой щёткой', 'использовать слишком много тяжёлых масел', 'сушить горячим потоком вплотную к волосам', 'ожидать, что один метод одинаково подойдёт любому типу завитка'],
    relatedSlugs: ['pushistost-volos','suhie-volosy','nesmyvaemyi-uhod'], keywords: ['кудрявые волосы','уход за кудрявыми волосами','волнистые волосы']
  },
  {
    slug: 'poristye-volosy', name: 'Пористые волосы', group: 'hair-type',
    description: 'Как распознать повышенную пористость и собрать уход, который делает длину более гладкой и управляемой.',
    intro: 'Пористость описывает то, насколько легко поверхность волоса пропускает и теряет воду. На практике важнее наблюдать за поведением длины: быстрое намокание и высыхание, спутывание и пушистость часто требуют более регулярного кондиционирования.',
    basics: ['использовать кондиционер после каждого мытья', 'добавлять маску по состоянию длины', 'закрывать уход лёгким несмываемым продуктом', 'сокращать травмирующую горячую укладку'],
    focus: ['силиконы и кондиционирующие полимеры для гладкости', 'чередование лёгких и более насыщенных средств', 'защита от трения', 'оценка результата по мягкости и управляемости, а не по тесту со стаканом воды'],
    routine: ['Очищайте кожу головы, не растирая длину.', 'Используйте кондиционер на каждом мытье.', 'Раз в несколько мытьев заменяйте его маской, если длине это подходит.', 'Наносите несмываемую защиту перед сушкой.'],
    mistakes: ['ориентироваться только на домашний «тест пористости»', 'перегружать длину маслами', 'постоянно использовать максимальную температуру утюжка', 'часто осветлять волосы без пауз и поддерживающего ухода'],
    relatedSlugs: ['suhie-volosy','lomkost-volos','maski-dlya-volos'], keywords: ['пористые волосы','пористость волос','уход за пористыми волосами']
  },
  {
    slug: 'okrashennye-volosy', name: 'Окрашенные волосы', group: 'hair-type',
    description: 'Как поддерживать мягкость и внешний вид длины после окрашивания или осветления.',
    intro: 'После окрашивания, особенно осветления, длина может стать более пористой и ломкой. Домашний уход не возвращает волосу исходное состояние, но помогает снизить трение, добавить гладкость и поддерживать аккуратный вид между посещениями салона.',
    basics: ['мягко очищать кожу головы', 'использовать кондиционер после каждого мытья', 'добавлять маску по потребности', 'обязательно защищать длину при горячей укладке'],
    focus: ['формулы для повреждённой и окрашенной длины', 'несмываемые средства с кондиционирующими компонентами', 'умеренная температура воды и инструментов', 'бережное расчесывание'],
    routine: ['Шампунь используйте преимущественно у корней.', 'На длину наносите кондиционер или маску.', 'Перед сушкой распределяйте термозащиту.', 'Между окрашиваниями уменьшайте количество травмирующих процедур.'],
    mistakes: ['часто осветлять одну и ту же длину', 'использовать утюжок на очень высокой температуре', 'расчёсывать спутанные мокрые волосы рывками', 'ожидать, что шампунь способен полностью восстановить повреждённый волос'],
    relatedSlugs: ['poristye-volosy','lomkost-volos','termozashchita'], keywords: ['окрашенные волосы','уход после окрашивания','осветленные волосы']
  },
  {
    slug: 'lomkost-volos', name: 'Ломкость волос', group: 'task',
    description: 'Как уменьшить механическое повреждение и сохранить длину, если волосы легко обламываются.',
    intro: 'Ломкость — это повреждение стержня волоса, а не выпадение из корня. В уходе полезно уменьшить трение, высокие температуры и повторные химические процедуры, а также регулярно кондиционировать длину.',
    basics: ['бережно распутывать волосы', 'использовать кондиционер и несмываемую защиту', 'не затягивать мокрые волосы тугими резинками', 'снижать температуру горячих инструментов'],
    focus: ['гладкость и уменьшение трения', 'защита кончиков', 'паузы между агрессивными химическими процедурами', 'мягкие аксессуары для волос'],
    routine: ['После мытья промокните волосы, не выкручивая их.', 'Распутайте длину с концов.', 'Нанесите несмываемое средство и термозащиту.', 'При заметно повреждённых концах своевременно обновляйте стрижку.'],
    mistakes: ['путать ломкость с выпадением из корня', 'часто делать тугие причёски', 'использовать горячий утюжок на влажных волосах', 'считать, что секущиеся концы можно «склеить» навсегда'],
    relatedSlugs: ['sekushchiesya-konchiki','termozashchita','okrashennye-volosy'], keywords: ['ломкость волос','волосы ломаются','поврежденные волосы']
  },
  {
    slug: 'sekushchiesya-konchiki', name: 'Секущиеся кончики', group: 'task',
    description: 'Что реально помогает при сечении и как дольше сохранять концы аккуратными после стрижки.',
    intro: 'Уже разделившийся кончик нельзя восстановить до первоначального состояния косметикой. Сыворотки и масла могут временно сгладить поверхность, а стрижка удаляет повреждённый участок. Дальше задача ухода — снизить повторное повреждение.',
    basics: ['регулярно оценивать состояние концов', 'использовать кондиционер и несмываемую защиту', 'уменьшать трение об одежду и полотенце', 'подстригать повреждённую длину по необходимости'],
    focus: ['силиконовые сыворотки для временной гладкости', 'масла в малом количестве', 'термозащита', 'бережное расчесывание'],
    routine: ['После мытья кондиционируйте нижнюю часть длины.', 'На влажные концы нанесите защитный продукт.', 'Избегайте многократного прохождения утюжком по одной пряди.', 'Обновляйте срез, когда концы начинают заметно цепляться и расслаиваться.'],
    mistakes: ['ожидать постоянного «запаивания» секущихся концов', 'ежедневно выпрямлять кончики высокой температурой', 'срезать отдельные волосы бытовыми тупыми ножницами', 'переносить масло на корни в попытке решить проблему длины'],
    relatedSlugs: ['lomkost-volos','masla-dlya-volos','termozashchita'], keywords: ['секущиеся кончики','уход за кончиками волос','как убрать сечение']
  },
  {
    slug: 'pushistost-volos', name: 'Пушистость волос', group: 'task',
    description: 'Как сделать поверхность волос более гладкой и уменьшить реакцию на влажность.',
    intro: 'Пушистость может быть естественной особенностью текстуры или усиливаться при повреждении и сухости. Обычно помогает более последовательное кондиционирование, аккуратная сушка и стайлинг, который формирует поверхность пряди.',
    basics: ['не растирать волосы полотенцем', 'использовать кондиционер', 'наносить несмываемый продукт на влажную длину', 'сушить воздухом по направлению от корней к концам'],
    focus: ['силиконы и кондиционирующие компоненты', 'кремы или сыворотки против пушистости', 'умеренная влажность волос при нанесении стайлинга', 'гладкие наволочки и аксессуары как дополнительный, а не обязательный шаг'],
    routine: ['После мытья аккуратно отожмите лишнюю воду.', 'Распределите кондиционер и тщательно смойте.', 'На влажные волосы нанесите немного несмываемого средства.', 'Не трогайте волосы слишком часто во время высыхания.'],
    mistakes: ['расчёсывать сухие кудри ради гладкости', 'наносить слишком много масла', 'сушить горячим воздухом хаотично во все стороны', 'ожидать полного исчезновения естественной текстуры'],
    relatedSlugs: ['kudryavye-volosy','poristye-volosy','nesmyvaemyi-uhod'], keywords: ['пушистость волос','волосы пушатся','как убрать пушистость']
  },
  {
    slug: 'obem-volos', name: 'Объём волос', group: 'task',
    description: 'Как добавить визуальный объём у корней без пересушивания кожи головы и длины.',
    intro: 'Объём зависит от густоты, диаметра волоса, стрижки и укладки. Косметика может дать временный визуальный эффект: облегчить длину, приподнять корни и добавить текстуру, но не изменить природную густоту.',
    basics: ['не перегружать корни плотными средствами', 'кондиционер наносить преимущественно на длину', 'подбирать лёгкий стайлинг', 'сушить корни с направлением, создающим подъём'],
    focus: ['муссы и спреи для объёма', 'правильное распределение кондиционера', 'чистота кожи головы', 'стрижка и форма как важная часть визуального объёма'],
    routine: ['Вымойте кожу головы и тщательно смойте шампунь.', 'Нанесите кондиционер на длину.', 'Добавьте небольшое количество средства для объёма у корней.', 'Высушите волосы, приподнимая корни щёткой или направлением воздуха.'],
    mistakes: ['сильно пересушивать кожу головы ради объёма', 'наносить плотную маску у корней перед укладкой', 'делать ежедневный агрессивный начёс', 'ожидать увеличения реальной густоты от стайлинга'],
    relatedSlugs: ['tonkie-volosy','shampuni','suhoy-shampun'], keywords: ['объем волос','как придать объем волосам','тонкие волосы объем']
  },
  {
    slug: 'termozashchita', name: 'Термозащита', group: 'task',
    description: 'Как использовать термозащиту перед феном, плойкой или утюжком и что ещё снижает тепловое повреждение.',
    intro: 'Термозащита помогает уменьшить воздействие высокой температуры, но не делает горячую укладку безвредной. На результат также влияют температура инструмента, время контакта и то, насколько часто вы укладываете волосы.',
    basics: ['наносить средство равномерно до горячей укладки', 'не использовать утюжок на мокрых волосах', 'выбирать минимальную температуру, при которой укладка получается', 'не проходить многократно по одной пряди'],
    focus: ['спреи для тонких волос', 'кремы и сыворотки для более сухой длины', 'полное высушивание перед утюжком', 'регулярные дни без горячих инструментов'],
    routine: ['Промокните волосы после мытья.', 'Равномерно распределите термозащиту по длине.', 'Высушите феном на комфортной температуре.', 'Плойку или утюжок используйте только на полностью сухих волосах.'],
    mistakes: ['считать термозащиту полной гарантией от повреждений', 'наносить средство только на верхний слой волос', 'использовать максимальную температуру по умолчанию', 'зажимать мокрую прядь горячим инструментом'],
    relatedSlugs: ['lomkost-volos','okrashennye-volosy','nesmyvaemyi-uhod'], keywords: ['термозащита для волос','как пользоваться термозащитой','защита волос от фена']
  },
  {
    slug: 'kozha-golovy', name: 'Уход за кожей головы', group: 'task',
    description: 'Базовые правила очищения кожи головы, которые помогают поддерживать комфорт между мытьём.',
    intro: 'Здоровый уход за волосами начинается с кожи головы: шампунь нужен прежде всего ей. Частота мытья индивидуальна и зависит от количества себума, потоотделения, стайлинга и личного комфорта.',
    basics: ['мыть кожу головы по мере загрязнения', 'распределять шампунь подушечками пальцев без царапания ногтями', 'тщательно смывать очищающие средства', 'не наносить маски для длины на корни без отдельной рекомендации производителя'],
    focus: ['комфорт без постоянного зуда и жжения', 'подходящая частота очищения', 'умеренное использование сухого шампуня', 'отказ от агрессивного механического скрабирования'],
    routine: ['Хорошо намочите кожу головы.', 'Распределите шампунь по нескольким зонам.', 'Мягко массируйте подушечками пальцев.', 'Тщательно смойте и при необходимости повторите.'],
    mistakes: ['царапать кожу ногтями', 'оставлять сухой шампунь на много дней', 'использовать жёсткий пилинг при раздражении', 'игнорировать стойкий зуд, болезненность или выраженное шелушение'],
    relatedSlugs: ['zhirnye-korni','shampuni','suhoy-shampun'], keywords: ['уход за кожей головы','как мыть голову','здоровая кожа головы'],
    specialist: 'Если зуд, болезненность, корки или выраженное шелушение сохраняются, лучше обратиться к дерматологу: косметический уход не заменяет диагностику заболеваний кожи головы.'
  },
  {
    slug: 'shampuni', name: 'Шампуни', group: 'product',
    description: 'Как выбрать шампунь по состоянию кожи головы, частоте мытья и количеству стайлинга.',
    intro: 'Шампунь в первую очередь очищает кожу головы. Необязательно искать один продукт «на всю жизнь»: более мягкий вариант может быть удобен для частого мытья, а более очищающий — после большого количества стайлинга.',
    basics: ['ориентироваться на комфорт кожи головы', 'наносить средство преимущественно на корни', 'регулировать количество по густоте волос', 'тщательно смывать пену'],
    focus: ['мягкость очищения', 'частота использования', 'совместимость с окрашиванием и стайлингом', 'отсутствие стойкого раздражения'],
    routine: ['Намочите кожу головы не меньше нескольких секунд.', 'Вспеньте небольшую порцию шампуня в ладонях.', 'Распределите у корней и мягко промассируйте.', 'При необходимости сделайте второе короткое мытьё.'],
    mistakes: ['наносить много шампуня на сухую длину', 'оценивать качество только по количеству пены', 'мыть голову слишком редко через дискомфорт', 'считать любой сульфат автоматически вредным'],
    relatedSlugs: ['zhirnye-korni','kozha-golovy','kondicionery'], keywords: ['как выбрать шампунь','шампунь для волос','мытье головы']
  },
  {
    slug: 'kondicionery', name: 'Кондиционеры', group: 'product',
    description: 'Зачем нужен кондиционер, куда его наносить и как подобрать плотность под свою длину.',
    intro: 'Кондиционер уменьшает трение, облегчает расчёсывание и делает поверхность волос более гладкой. Он полезен не только сухим волосам: тонкой длине тоже может подойти лёгкая формула в небольшой дозировке.',
    basics: ['наносить на длину после шампуня', 'распределять особенно тщательно по концам', 'выдерживать время по инструкции', 'хорошо смывать, если средство не заявлено как несмываемое'],
    focus: ['плотность текстуры', 'скольжение при распутывании', 'отсутствие утяжеления', 'регулярность использования'],
    routine: ['После шампуня уберите лишнюю воду руками.', 'Распределите кондиционер от середины длины к концам.', 'Мягко распутайте волосы.', 'Смойте средство и аккуратно промокните длину.'],
    mistakes: ['отказываться от кондиционера при тонких волосах', 'наносить большое количество на кожу головы', 'смывать сразу, не дав средству распределиться', 'использовать маску вместо кондиционера при каждом мытье, если волосы быстро утяжеляются'],
    relatedSlugs: ['suhie-volosy','tonkie-volosy','maski-dlya-volos'], keywords: ['кондиционер для волос','как пользоваться кондиционером','бальзам для волос']
  },
  {
    slug: 'maski-dlya-volos', name: 'Маски для волос', group: 'product',
    description: 'Когда маска действительно нужна и чем она отличается от обычного кондиционера.',
    intro: 'Маска — более насыщенный формат кондиционирования. Она может быть полезна сухой, окрашенной или повреждённой длине, но не обязана использоваться после каждого мытья. Частоту проще подбирать по ощущению мягкости и утяжеления.',
    basics: ['использовать на чистой влажной длине', 'не наносить на корни без необходимости', 'соблюдать время выдержки', 'регулировать частоту по состоянию волос'],
    focus: ['насыщенность формулы', 'сочетание со стайлингом', 'ощущение мягкости после высыхания', 'отсутствие постоянного накопления продукта'],
    routine: ['После шампуня слегка отожмите воду.', 'Распределите маску по длине.', 'Оставьте на время, указанное производителем.', 'Тщательно смойте и оцените, нужен ли дополнительный кондиционер.'],
    mistakes: ['держать маску часами без указания производителя', 'наносить слишком много продукта', 'использовать маску как лечение выпадения волос', 'считать жжение нормальным признаком эффективности'],
    relatedSlugs: ['suhie-volosy','poristye-volosy','kondicionery'], keywords: ['маска для волос','как пользоваться маской для волос','уход за поврежденными волосами']
  },
  {
    slug: 'nesmyvaemyi-uhod', name: 'Несмываемый уход', group: 'product',
    description: 'Как выбрать спрей, крем или сыворотку и не получить ощущение тяжёлых или липких волос.',
    intro: 'Несмываемые средства дополняют кондиционер: уменьшают трение, облегчают расчёсывание, помогают контролировать пушистость и часто дают термозащиту. Начинать лучше с маленькой дозировки.',
    basics: ['наносить на влажную или сухую длину по инструкции', 'начинать с минимального количества', 'распределять особенно тщательно по концам', 'не заменять им очищение и кондиционер'],
    focus: ['спреи для лёгкости', 'кремы для сухой и кудрявой длины', 'сыворотки для гладкости', 'наличие термозащиты, если средство используется перед феном'],
    routine: ['Промокните волосы после мытья.', 'Разотрите небольшое количество продукта в ладонях или распылите по длине.', 'Распределите расчёской или пальцами.', 'Добавляйте ещё только если волосам не хватает продукта.'],
    mistakes: ['сразу наносить большую порцию', 'распылять много средства на корни', 'смешивать несколько плотных несмываемых продуктов без необходимости', 'считать любое масло полноценной термозащитой'],
    relatedSlugs: ['pushistost-volos','termozashchita','masla-dlya-volos'], keywords: ['несмываемый уход для волос','спрей для волос','крем для волос']
  },
  {
    slug: 'masla-dlya-volos', name: 'Масла для волос', group: 'product',
    description: 'Что масло может дать длине, куда его наносить и почему оно не заменяет увлажняющий уход.',
    intro: 'Масла уменьшают трение и добавляют блеск, особенно на сухих концах. При этом они не «наполняют волос водой» и не восстанавливают повреждение навсегда. Обычно достаточно буквально нескольких капель.',
    basics: ['использовать небольшое количество', 'наносить преимущественно на длину и концы', 'добавлять на влажные или сухие волосы по результату', 'сочетать с кондиционированием, а не заменять его'],
    focus: ['лёгкость формулы', 'дозировка', 'совместимость со стайлингом', 'визуальный блеск и снижение пушистости'],
    routine: ['Разотрите 1–2 капли между ладонями.', 'Проведите руками по концам и нижней части длины.', 'Не добавляйте продукт, пока не оцените результат.', 'При утяжелении уменьшите дозу или частоту.'],
    mistakes: ['наносить много масла на корни', 'ожидать от масла восстановления секущихся концов', 'использовать чистое масло перед горячим утюжком без подходящей термозащиты', 'заменять маслом кондиционер при выраженной сухости'],
    relatedSlugs: ['suhie-volosy','sekushchiesya-konchiki','nesmyvaemyi-uhod'], keywords: ['масло для волос','масло для кончиков','как наносить масло на волосы']
  },
  {
    slug: 'suhoy-shampun', name: 'Сухой шампунь', group: 'product',
    description: 'Как использовать сухой шампунь между мытьём и не превращать его в постоянную замену очищению.',
    intro: 'Сухой шампунь впитывает часть себума и визуально освежает корни. Это удобный продукт для отдельных ситуаций, но он не смывает пот, себум и остатки стайлинга с кожи головы.',
    basics: ['наносить на сухие корни', 'использовать небольшое количество', 'дать продукту распределиться и затем вычесать или промассировать', 'после нескольких применений нормально вымыть кожу головы'],
    focus: ['умеренная дозировка', 'равномерное нанесение по проборам', 'отсутствие раздражения', 'использование как временного решения'],
    routine: ['Разделите сухие волосы на несколько проборов.', 'Распылите средство с рекомендованного расстояния.', 'Подождите время из инструкции.', 'Мягко промассируйте корни и расчешите волосы.'],
    mistakes: ['распылять средство вплотную к коже', 'наслаивать сухой шампунь много дней', 'наносить на влажные волосы, если продукт для этого не предназначен', 'использовать при уже раздражённой коже головы'],
    relatedSlugs: ['zhirnye-korni','kozha-golovy','shampuni'], keywords: ['сухой шампунь','как пользоваться сухим шампунем','свежесть волос без мытья']
  },
];


export const makeupGroups: { id: MakeupTopicGroup; title: string; description: string }[] = [
  { id: 'base', title: 'База и тон', description: 'Подготовка кожи, тональные продукты, коррекция, пудра, румяна и работа с финишем.' },
  { id: 'zone', title: 'Глаза, брови и губы', description: 'Понятные схемы для отдельных зон: тени, стрелки, тушь, брови и разные варианты макияжа губ.' },
  { id: 'technique', title: 'Техники и стойкость', description: 'Готовые сценарии макияжа: естественный, вечерний, быстрый, стойкий и удобный вариант для очков.' },
];

export const makeupTopics: MakeupTopic[] = [
  {
    slug: 'podgotovka-kozhi', name: 'Подготовка кожи к макияжу', group: 'base',
    description: 'Как подготовить кожу, чтобы тон распределялся ровнее и макияж оставался комфортным.',
    intro: 'Хорошая подготовка не требует отдельной сложной рутины. Обычно достаточно привычного увлажнения, солнцезащиты по условиям дня и нескольких минут перед нанесением декоративных средств.',
    basics: ['нанести привычный уход тонким слоем', 'дать крему или SPF распределиться', 'не наслаивать лишние плотные текстуры', 'использовать праймер только под конкретную задачу'],
    focus: ['комфорт кожи без стянутости', 'отсутствие лишней жирной плёнки', 'совместимость ухода с тоном', 'минимум трения при нанесении'],
    routine: ['Завершите обычный уход и дайте последнему слою распределиться.', 'При необходимости аккуратно промокните явный избыток средства.', 'Праймер нанесите только на зоны, где он действительно нужен.', 'Начните тон с небольшого количества и оцените, как он ложится.'],
    mistakes: ['наносить много слоёв ухода прямо перед тоном', 'использовать праймер автоматически без понятной задачи', 'тереть кожу спонжем или кистью', 'пытаться пересушить кожу ради матового финиша'],
    relatedSlugs: ['tonalnaya-osnova','stoykiy-makiyazh','fiksaciya-makiyazha'], keywords: ['подготовка кожи к макияжу','база под макияж','как подготовить кожу к макияжу']
  },
  {
    slug: 'tonalnaya-osnova', name: 'Тональная основа', group: 'base',
    description: 'Как подобрать оттенок, покрытие и способ нанесения без тяжёлого эффекта.',
    intro: 'Тональная основа может давать прозрачное, среднее или плотное покрытие. Для аккуратного результата полезнее начинать с небольшого количества и усиливать покрытие только там, где оно действительно нужно.',
    basics: ['проверять оттенок ближе к линии лица', 'начинать с тонкого слоя', 'растушёвывать границы к периферии', 'наслаивать покрытие локально'],
    focus: ['степень покрытия', 'финиш — матовый, естественный или сияющий', 'удобный инструмент нанесения', 'поведение тона спустя несколько часов'],
    routine: ['Нанесите небольшое количество в центральной части лица.', 'Распределите средство кистью, спонжем или пальцами.', 'Проверьте границы у линии роста волос и нижней части лица.', 'Точечно добавьте второй слой только там, где нужен.'],
    mistakes: ['подбирать оттенок только по коже руки', 'наносить сразу большое количество', 'пытаться перекрыть всё одним плотным слоем', 'забывать оценивать оттенок при дневном освещении'],
    relatedSlugs: ['konsiler','pudra','podgotovka-kozhi'], keywords: ['тональная основа','как выбрать тональный крем','как наносить тональный крем']
  },
  {
    slug: 'konsiler', name: 'Консилер', group: 'base',
    description: 'Точечная коррекция под глазами и на отдельных участках без лишнего слоя тона.',
    intro: 'Консилер удобен для локального покрытия: его можно использовать поверх тональной основы или самостоятельно. Главное — не превращать точечный продукт в ещё один плотный слой на всём лице.',
    basics: ['использовать небольшое количество', 'наносить только на нужные зоны', 'растушёвывать прежде всего границы', 'фиксировать пудрой только по необходимости'],
    focus: ['оттенок близкий к коже', 'пластичность формулы под глазами', 'тонкий слой на мимических участках', 'совместимость с пудрой'],
    routine: ['Поставьте маленькие точки продукта на нужную область.', 'Подождите несколько секунд, если формула допускает более плотное покрытие после фиксации.', 'Растушуйте края пальцем, кистью или спонжем.', 'Добавьте второй минимальный слой только при необходимости.'],
    mistakes: ['брать слишком светлый оттенок для всей зоны под глазами', 'наносить много продукта вплотную к ресницам', 'перегружать область плотной пудрой', 'растирать консилер вместо мягкой растушёвки'],
    relatedSlugs: ['tonalnaya-osnova','pudra','naturalnyy-makiyazh'], keywords: ['консилер','как наносить консилер','консилер под глаза']
  },
  {
    slug: 'pudra', name: 'Пудра', group: 'base',
    description: 'Как фиксировать макияж локально, уменьшать блеск и не перегружать сухие зоны.',
    intro: 'Пудра нужна не каждому макияжу и не обязательно на всё лицо. Чаще всего полезнее закрепить только зоны, где кремовые продукты остаются подвижными или быстрее появляется блеск.',
    basics: ['наносить небольшое количество', 'фиксировать прежде всего зоны риска', 'использовать мягкую кисть для тонкого слоя', 'днём сначала промокать себум, а потом добавлять пудру'],
    focus: ['рассыпчатая или компактная форма', 'прозрачность оттенка', 'финиш без выраженной сухости', 'локальная фиксация вместо плотного слоя'],
    routine: ['Дайте кремовым продуктам немного зафиксироваться.', 'Наберите небольшое количество пудры и уберите избыток.', 'Пройдитесь по T-зоне и другим нужным участкам.', 'Оставьте более сухие или сияющие зоны без дополнительного слоя, если это комфортно.'],
    mistakes: ['припудривать всё лицо очень плотным слоем', 'наслаивать пудру поверх себума много раз', 'использовать слишком светлую прозрачную пудру без проверки', 'сильно тереть кистью уже нанесённый тон'],
    relatedSlugs: ['tonalnaya-osnova','stoykiy-makiyazh','fiksaciya-makiyazha'], keywords: ['пудра для лица','как наносить пудру','фиксация макияжа пудрой']
  },
  {
    slug: 'rumyana', name: 'Румяна', group: 'base',
    description: 'Кремовые, жидкие и сухие румяна: как наносить цвет постепенно и без пятен.',
    intro: 'Румяна быстро меняют общий характер макияжа. Их можно располагать ближе к центру щёк, растягивать к вискам или использовать как более заметный цветовой акцент — строгой единственной схемы нет.',
    basics: ['начинать с маленького количества', 'наслаивать цвет постепенно', 'подбирать инструмент под текстуру', 'смягчать границы чистой кистью или спонжем'],
    focus: ['кремовая, жидкая или сухая формула', 'насыщенность оттенка', 'положение румян в общей композиции', 'стойкость на выбранной базе'],
    routine: ['Наберите минимальное количество продукта.', 'Поставьте цвет на выбранную зону щеки.', 'Растушуйте наружу мягкими движениями.', 'При необходимости добавьте ещё один тонкий слой.'],
    mistakes: ['набирать много яркого продукта сразу', 'наносить жидкие румяна на очень пудровую базу без проверки', 'пытаться исправить пятно дополнительным количеством цвета', 'считать одну схему расположения обязательной для всех'],
    relatedSlugs: ['bronzer-haylayter','naturalnyy-makiyazh','stoykiy-makiyazh'], keywords: ['румяна','как наносить румяна','кремовые румяна']
  },
  {
    slug: 'bronzer-haylayter', name: 'Бронзер и хайлайтер', group: 'base',
    description: 'Как добавить тепла и сияния, сохранив мягкие переходы и лёгкий финиш.',
    intro: 'Бронзер добавляет более тёплый оттенок отдельным зонам, а хайлайтер усиливает отражение света. Это дополнительные, а не обязательные этапы макияжа.',
    basics: ['набирать продукт понемногу', 'растушёвывать без жёстких границ', 'не смешивать понятия бронзера и обязательного контуринга', 'использовать сияние только там, где нравится эффект'],
    focus: ['температура оттенка бронзера', 'интенсивность сияния', 'кремовая или сухая текстура', 'баланс с румянами'],
    routine: ['Нанесите бронзер мягкой кистью на выбранные зоны.', 'Растушуйте края чистой кистью.', 'Добавьте румяна, если используете их в схеме.', 'Точечно нанесите хайлайтер на зоны, где хочется отражения света.'],
    mistakes: ['делать очень резкие полосы бронзера', 'наносить много яркого хайлайтера сразу', 'использовать слишком большую кисть для точечной работы', 'считать контуринг обязательным этапом'],
    relatedSlugs: ['rumyana','vecherniy-makiyazh','naturalnyy-makiyazh'], keywords: ['бронзер','хайлайтер','как наносить бронзер и хайлайтер']
  },
  {
    slug: 'makiyazh-glaz', name: 'Макияж глаз', group: 'zone',
    description: 'Простая схема теней, растушёвка, выбор кистей и способы повысить стойкость.',
    intro: 'Для законченного макияжа глаз не обязательно использовать много оттенков. Один основной цвет, мягкая линия ресниц и тушь уже могут дать выразительный результат.',
    basics: ['начинать с одного-двух оттенков', 'строить насыщенность постепенно', 'смягчать границы чистой кистью', 'использовать базу под тени только при необходимости'],
    focus: ['матовые и сияющие текстуры', 'направление растушёвки', 'стойкость на подвижном веке', 'баланс с линией ресниц'],
    routine: ['Нанесите основной оттенок на подвижное веко.', 'Смягчите верхнюю границу пушистой кистью.', 'При желании затемните внешний угол или линию ресниц.', 'Завершите тушью или оставьте макияж без неё.'],
    mistakes: ['наносить сразу слишком много тёмных теней', 'тереть кистью вместо мягкой растушёвки', 'считать сложную схему обязательной', 'не учитывать осыпание сияющих текстур'],
    relatedSlugs: ['strelki','tush-dlya-resnic','vecherniy-makiyazh'], keywords: ['макияж глаз','как наносить тени','макияж тенями']
  },
  {
    slug: 'strelki', name: 'Стрелки', group: 'zone',
    description: 'Как подобрать инструмент и рисовать стрелку небольшими контролируемыми этапами.',
    intro: 'Стрелка получается стабильнее, если не пытаться провести всю линию одним движением. Проще сначала задать направление хвостика, затем соединить его с ресничным краем и только после этого добавлять толщину.',
    basics: ['начинать с короткого хвостика', 'проверять форму при открытом глазе', 'соединять линию небольшими отрезками', 'утолщать стрелку постепенно'],
    focus: ['карандаш для мягкой линии', 'фломастер для тонкого хвоста', 'гелевая подводка для контроля кистью', 'тени для растушёванной стрелки'],
    routine: ['Наметьте направление внешнего хвостика.', 'Соедините его с внешней третью ресничного края.', 'Заполните промежутки короткими движениями.', 'Сравните обе стрелки при открытых глазах и только потом корректируйте.'],
    mistakes: ['сильно натягивать уголок глаза', 'сразу рисовать очень толстую линию', 'оценивать симметрию только с закрытыми глазами', 'пытаться добиться абсолютной геометрической идентичности'],
    relatedSlugs: ['makiyazh-glaz','tush-dlya-resnic','vecherniy-makiyazh'], keywords: ['как рисовать стрелки','стрелки на глазах','подводка для глаз']
  },
  {
    slug: 'tush-dlya-resnic', name: 'Тушь для ресниц', group: 'zone',
    description: 'Как выбрать щёточку, наносить тушь без лишних комочков и аккуратно её снимать.',
    intro: 'Эффект туши зависит не только от обещаний на упаковке, но и от формы щёточки, количества продукта и самих ресниц. Обычно одного-двух тонких слоёв достаточно.',
    basics: ['убирать явный избыток продукта со щёточки', 'наносить от основания к кончикам', 'не делать слишком много слоёв', 'снимать макияж без сильного трения'],
    focus: ['объём, длина или разделение', 'обычная или водостойкая формула', 'форма щёточки', 'отсутствие раздражения глаз'],
    routine: ['Достаньте щёточку без многократного прокачивания тюбика.', 'Поставьте её у основания ресниц.', 'Проведите к кончикам небольшим зигзагообразным движением.', 'Если нужен второй слой, нанесите его до полного высыхания первого.'],
    mistakes: ['разбавлять подсохшую тушь водой', 'делиться тушью с другими', 'наслаивать много сухих слоёв', 'сильно тереть глаза при снятии'],
    relatedSlugs: ['makiyazh-glaz','strelki','makiyazh-s-ochkami'], keywords: ['тушь для ресниц','как наносить тушь','как выбрать тушь']
  },
  {
    slug: 'brovi', name: 'Макияж бровей', group: 'zone',
    description: 'Карандаш, тени и гель: как добавить цвет и форму без обязательной графичности.',
    intro: 'Брови можно оформлять очень по-разному. Для мягкого результата удобнее заполнять только отдельные промежутки короткими штрихами и после этого прочёсывать волоски.',
    basics: ['работать в направлении роста волосков', 'начинать с небольшого количества цвета', 'делать начало брови мягче', 'прочёсывать результат щёточкой'],
    focus: ['карандаш для штрихов', 'тени для мягкого заполнения', 'гель для фиксации', 'нейтральность оттенка'],
    routine: ['Прочешите бровь и оцените, где нужен продукт.', 'Короткими штрихами заполните отдельные зоны.', 'Смягчите цвет щёточкой.', 'Зафиксируйте волоски прозрачным или оттеночным гелем.'],
    mistakes: ['рисовать сплошную тёмную линию по всей брови', 'делать начало самым насыщенным участком', 'выбирать слишком контрастный оттенок без растушёвки', 'наслаивать много воска или геля'],
    relatedSlugs: ['naturalnyy-makiyazh','makiyazh-glaz','bystryy-makiyazh'], keywords: ['макияж бровей','как красить брови','карандаш для бровей']
  },
  {
    slug: 'makiyazh-gub', name: 'Макияж губ', group: 'zone',
    description: 'Бальзам, карандаш, помада и блеск: как получить аккуратный контур и комфортный цвет.',
    intro: 'Схема макияжа губ зависит от нужной стойкости и финиша. Для быстрого варианта достаточно бальзама с оттенком, для более чёткого — карандаша и помады тонкими слоями.',
    basics: ['увлажнить сухие губы заранее', 'убрать лишний бальзам перед стойкой помадой', 'наносить цвет тонкими слоями', 'обновлять прежде всего внутренний край после еды'],
    focus: ['кремовый, матовый или глянцевый финиш', 'карандаш для контура и стойкости', 'комфорт при носке', 'простое снятие без трения'],
    routine: ['Нанесите комфортный бальзам и дайте ему впитаться.', 'При желании оформите контур карандашом.', 'Заполните губы тонким слоем помады или тинта.', 'Промокните и добавьте второй слой, если нужна стойкость.'],
    mistakes: ['агрессивно скрабировать губы перед каждым макияжем', 'наносить очень толстый слой матовой помады', 'пытаться обновлять стойкий цвет без удаления крошек и сухих участков', 'сильно тереть губы при снятии'],
    relatedSlugs: ['krasnaya-pomada','naturalnyy-makiyazh','vecherniy-makiyazh'], keywords: ['макияж губ','как красить губы','карандаш для губ']
  },
  {
    slug: 'krasnaya-pomada', name: 'Красная помада', group: 'zone',
    description: 'Как выбрать комфортный красный оттенок, оформить край и сохранить цвет аккуратным.',
    intro: 'Красная помада может быть единственным ярким акцентом или частью насыщенного макияжа. Вместо поиска универсально «правильного» оттенка лучше сравнить несколько вариантов и выбрать тот, который нравится именно в общей композиции.',
    basics: ['подготовить губы без агрессивного скраба', 'наносить цвет от центра к краям', 'использовать карандаш при необходимости', 'делать два тонких слоя вместо одного толстого'],
    focus: ['тёплый, нейтральный или холодный оттенок', 'кремовый или матовый финиш', 'мягкий или графичный контур', 'простая коррекция после еды'],
    routine: ['Нанесите небольшое количество цвета в центр губ.', 'Подведите его к контуру кистью, стиком или карандашом.', 'Промокните первый слой салфеткой.', 'Восстановите насыщенность вторым тонким слоем.'],
    mistakes: ['считать красную помаду только вечерним вариантом', 'наносить толстый слой на сухую поверхность', 'пытаться сразу сделать идеальный контур без промежуточной проверки', 'забывать убрать избыток с внутреннего края губ'],
    relatedSlugs: ['makiyazh-gub','vecherniy-makiyazh','stoykiy-makiyazh'], keywords: ['красная помада','как наносить красную помаду','макияж с красной помадой']
  },
  {
    slug: 'naturalnyy-makiyazh', name: 'Естественный макияж', group: 'technique',
    description: 'Лёгкая схема на каждый день с точечной коррекцией и минимумом обязательных этапов.',
    intro: 'Естественный макияж удобно собирать вокруг нескольких продуктов, которые дают вам нужный эффект. Полный тон, контуринг или сложные тени для такой схемы не обязательны.',
    basics: ['оставлять видимой естественную текстуру кожи', 'использовать точечную коррекцию', 'выбирать один-два мягких цветовых акцента', 'убирать этапы, которые не дают нужного эффекта'],
    focus: ['лёгкий тон или консилер', 'румяна', 'гель для бровей', 'тушь и продукт для губ по желанию'],
    routine: ['Точечно выровняйте тон там, где хотите.', 'Добавьте небольшое количество румян.', 'Прочешите и при необходимости оформите брови.', 'Завершите тушью и полупрозрачным продуктом для губ.'],
    mistakes: ['путать естественный макияж с обязательным большим количеством нюдовых средств', 'наносить плотный тон ради полностью однородной поверхности', 'использовать слишком много фиксирующей пудры', 'добавлять этапы только потому, что они есть в чужой схеме'],
    relatedSlugs: ['bystryy-makiyazh','podgotovka-kozhi','rumyana'], keywords: ['естественный макияж','натуральный макияж','макияж на каждый день']
  },
  {
    slug: 'vecherniy-makiyazh', name: 'Вечерний макияж', group: 'technique',
    description: 'Как сделать макияж выразительнее для искусственного света, не перегружая все зоны сразу.',
    intro: 'Вечерний макияж может отличаться от дневного всего одним более заметным элементом: стрелками, сияющими тенями, яркими губами или более контрастными румянами.',
    basics: ['выбрать главный акцент', 'строить насыщенность слоями', 'проверить результат при разном освещении', 'фиксировать только те зоны, где это нужно'],
    focus: ['сияющие или тёмные тени', 'стрелки', 'яркий продукт для губ', 'дополнительная фиксация'],
    routine: ['Соберите привычную базу тонким слоем.', 'Добавьте выбранный акцент на глаза или губы.', 'Сбалансируйте остальные зоны более спокойными продуктами или оставьте их яркими по желанию.', 'Проверьте границы и стойкость перед выходом.'],
    mistakes: ['считать плотный тон обязательным для вечера', 'усиливать все продукты одновременно без промежуточной оценки', 'использовать слишком много сухой пудры', 'не проверять сияющие продукты при искусственном свете'],
    relatedSlugs: ['makiyazh-glaz','krasnaya-pomada','stoykiy-makiyazh'], keywords: ['вечерний макияж','макияж на вечер','яркий макияж']
  },
  {
    slug: 'stoykiy-makiyazh', name: 'Стойкий макияж', group: 'technique',
    description: 'Подготовка, тонкие слои и локальная фиксация для более предсказуемого результата в течение дня.',
    intro: 'Стойкий макияж строится не из максимально большого количества средств, а из аккуратных слоёв. Праймер, пудра и фиксатор полезны только тогда, когда решают конкретную проблему вашей схемы.',
    basics: ['дать уходу распределиться', 'наносить кремовые продукты тонко', 'фиксировать зоны риска', 'брать с собой минимум средств для коррекции'],
    focus: ['стойкость тона на T-зоне', 'база под тени при необходимости', 'карандаш для стойкости губ', 'фиксирующий спрей как дополнительный этап'],
    routine: ['Подготовьте кожу и дождитесь распределения ухода.', 'Нанесите тон и консилер небольшими слоями.', 'Закрепите пудрой места, где покрытие чаще двигается.', 'Используйте фиксатор или устойчивые продукты на глазах и губах по необходимости.'],
    mistakes: ['делать каждый слой максимально плотным', 'пудрить поверх себума без промакивания', 'ожидать, что фиксирующий спрей решит все проблемы', 'часто трогать лицо руками'],
    relatedSlugs: ['fiksaciya-makiyazha','podgotovka-kozhi','pudra'], keywords: ['стойкий макияж','как сделать макияж стойким','фиксация макияжа']
  },
  {
    slug: 'makiyazh-s-ochkami', name: 'Макияж с очками', group: 'technique',
    description: 'Как уменьшить следы оправы и сделать макияж глаз удобным за линзами.',
    intro: 'При очках важнее всего учитывать механический контакт оправы с кожей. В зоне переносицы и носоупоров лучше использовать минимальное количество кремовых слоёв, а макияж глаз можно делать любым по стилю.',
    basics: ['уменьшать количество тона под оправой', 'локально фиксировать переносицу', 'учитывать касание ресниц линз', 'корректировать стёртые зоны маленьким количеством продукта'],
    focus: ['стойкость на переносице', 'подкручивание ресниц', 'видимость макияжа глаз через линзы', 'акцент на губах как альтернативный вариант'],
    routine: ['Нанесите тон максимально тонко в зоне оправы.', 'Закрепите переносицу небольшим количеством пудры.', 'Сделайте макияж глаз с учётом того, насколько его закрывает оправа.', 'Проверьте, не касаются ли ресницы линз.'],
    mistakes: ['наносить плотный слой тона под носоупоры', 'пытаться полностью исключить любые следы от механического контакта', 'наносить слишком много туши на кончики ресниц', 'считать, что яркая оправа запрещает яркий макияж'],
    relatedSlugs: ['tush-dlya-resnic','makiyazh-glaz','stoykiy-makiyazh'], keywords: ['макияж с очками','макияж глаз с очками','тон под очками']
  },
  {
    slug: 'bystryy-makiyazh', name: 'Быстрый макияж за 5 минут', group: 'technique',
    description: 'Короткая повторяемая схема из нескольких продуктов для дней, когда мало времени.',
    intro: 'Быстрее всего работает не попытка ускорить каждый жест, а сокращение количества решений. Выберите несколько знакомых средств и используйте их в одной и той же последовательности.',
    basics: ['оставить три-пять действительно полезных этапов', 'держать повседневный набор отдельно', 'использовать знакомые легко растушёвываемые текстуры', 'выбирать один быстрый акцент'],
    focus: ['консилер вместо полного тона', 'кремовые румяна', 'гель для бровей', 'тушь или продукт для губ'],
    routine: ['Точечно нанесите консилер или лёгкий тон.', 'Растушуйте немного румян.', 'Оформите брови гелем.', 'Добавьте тушь и бальзам с оттенком или выберите только один из этих шагов.'],
    mistakes: ['пытаться сделать полный сложный макияж быстрее за счёт спешки', 'каждое утро выбирать новый набор продуктов', 'использовать трудно исправляемые текстуры без привычки', 'считать пропуск этапа ошибкой'],
    relatedSlugs: ['naturalnyy-makiyazh','brovi','rumyana'], keywords: ['быстрый макияж','макияж за 5 минут','повседневный быстрый макияж']
  },
  {
    slug: 'fiksaciya-makiyazha', name: 'Фиксация макияжа', group: 'technique',
    description: 'Пудра, фиксирующий спрей и локальная коррекция: как сделать финиш устойчивее без лишних слоёв.',
    intro: 'Фиксация не обязана одинаково матировать всё лицо. Пудру удобно использовать по зонам, а фиксирующий спрей — как финальный дополнительный этап, если он действительно улучшает стойкость выбранных продуктов.',
    basics: ['фиксировать прежде всего подвижные зоны', 'использовать минимальное количество пудры', 'распылять фиксатор с рекомендованного расстояния', 'давать спрею высохнуть самостоятельно'],
    focus: ['пудра для контроля блеска', 'фиксатор с плёнкообразующими компонентами', 'освежающий мист для финиша', 'коррекция в течение дня'],
    routine: ['Завершите все кремовые этапы.', 'Локально закрепите нужные зоны пудрой.', 'Распылите фиксирующий спрей равномерным облаком.', 'Дайте ему высохнуть и оцените, нужен ли ещё продукт.'],
    mistakes: ['использовать лак для волос на лице', 'распылять фиксатор слишком близко', 'наслаивать много пудры и спрея без необходимости', 'ожидать полной неподвижности макияжа при любом трении'],
    relatedSlugs: ['stoykiy-makiyazh','pudra','podgotovka-kozhi'], keywords: ['фиксация макияжа','фиксатор макияжа','как закрепить макияж']
  },
];

export const manicureGroups: { id: ManicureTopicGroup; title: string; description: string }[] = [
  { id: 'care', title: 'Уход и инструменты', description: 'Кутикула, ломкость, расслоение, домашний маникюр, инструменты и уход за кожей рук.' },
  { id: 'covering', title: 'Покрытия', description: 'База, обычный лак, гель-лак, снятие, стойкость и аккуратный маникюр без декоративного покрытия.' },
  { id: 'style', title: 'Форма и дизайн', description: 'Форма ногтей, идеи для короткой длины, нюд, красный маникюр, френч и минималистичный дизайн.' },
];

export const manicureTopics: ManicureTopic[] = [
  {
    slug: 'uhod-za-kutikuloy', name: 'Уход за кутикулой', group: 'care',
    description: 'Как поддерживать аккуратную кутикулу и кожу вокруг ногтей без лишней травматизации.',
    intro: 'Регулярное увлажнение и бережная обработка обычно важнее частого глубокого срезания кожи. Цель домашнего ухода — комфорт и аккуратный вид без повреждений.',
    basics: ['увлажнять кожу рук и кутикулу', 'не отрывать заусенцы руками', 'работать чистыми инструментами', 'не срезать кожу глубже, чем необходимо'],
    focus: ['крем для рук', 'масло или бальзам для кутикулы', 'аккуратный пушер', 'точечное удаление заусенцев'],
    routine: ['Вымойте руки и полностью высушите их.', 'Нанесите средство для смягчения или немного крема.', 'Аккуратно отодвиньте кожу без сильного давления.', 'После маникюра нанесите крем или масло.'],
    mistakes: ['глубоко срезать живую кожу', 'отрывать заусенцы', 'делиться личными режущими инструментами', 'обрабатывать воспалённую кожу'],
    relatedSlugs: ['domashniy-manikyur','instrumenty-dlya-manikyura','uhod-za-rukami'], keywords: ['уход за кутикулой','как ухаживать за кутикулой','заусенцы']
  },
  {
    slug: 'lomkie-nogti', name: 'Ломкие ногти', group: 'care',
    description: 'Что уменьшает сколы и трещины свободного края и какие привычки чаще всего мешают отрастить длину.',
    intro: 'Ломкость часто усиливается из-за механической нагрузки, воды, бытовой химии и травматичного снятия покрытий. Полезнее снизить нагрузку, чем бесконечно наслаивать укрепляющие продукты.',
    basics: ['поддерживать удобную длину', 'подпиливать край без сильного истончения', 'защищать руки при уборке', 'снимать покрытия без отрывания'],
    focus: ['форма без острых цепляющихся углов', 'мягкая или средняя пилка', 'защитное покрытие по желанию', 'регулярный уход за кожей вокруг ногтя'],
    routine: ['Укоротите повреждённый свободный край.', 'Придайте ногтям удобную форму.', 'При необходимости нанесите базу или прозрачный лак.', 'Защищайте руки от длительного контакта с водой.'],
    mistakes: ['использовать ногти как инструмент', 'сильно шлифовать поверхность', 'отрывать стойкое покрытие', 'пытаться замаскировать стойкие изменения без выяснения причины'],
    relatedSlugs: ['rasslaivanie-nogtey','baza-dlya-manikyura','manikyur-bez-pokrytiya'], keywords: ['ломкие ногти','как укрепить ногти','ногти ломаются']
  },
  {
    slug: 'rasslaivanie-nogtey', name: 'Расслоение ногтей', group: 'care',
    description: 'Как ухаживать за расслаивающимся свободным краем и не усугублять повреждение шлифовкой и отрыванием слоёв.',
    intro: 'При расслоении тонкие слои ногтевой пластины отделяются у свободного края. Повреждённую часть лучше постепенно отрастить, уменьшая механическую и химическую нагрузку.',
    basics: ['не сдирать отделившиеся слои', 'держать умеренную длину', 'защищать руки от долгого замачивания', 'бережно снимать лак и покрытие'],
    focus: ['аккуратная пилка', 'защитная база', 'крем после мытья рук', 'форма без цепляющихся углов'],
    routine: ['Аккуратно укоротите расслаивающийся край.', 'Мягко выровняйте только шероховатый участок.', 'Нанесите защитную базу при необходимости.', 'Следите, чтобы ногти меньше контактировали с водой и химией.'],
    mistakes: ['отрывать слои пластины', 'постоянно полировать весь ноготь', 'подпиливать слишком глубоко боковые стороны', 'игнорировать выраженные изменения нескольких ногтей'],
    relatedSlugs: ['lomkie-nogti','manikyur-bez-pokrytiya','stoykost-pokrytiya'], keywords: ['расслоение ногтей','слоятся ногти','уход за ногтями']
  },
  {
    slug: 'domashniy-manikyur', name: 'Домашний маникюр', group: 'care',
    description: 'Понятная последовательность домашнего маникюра без сложной аппаратной обработки.',
    intro: 'Аккуратный домашний маникюр можно сделать небольшим набором инструментов. Главное — последовательность, чистота и отсутствие попытки убрать кожу или толщину ногтя «до идеала».',
    basics: ['снять старое покрытие', 'скорректировать длину и форму', 'бережно обработать кожу', 'нанести покрытие или завершить кремом'],
    focus: ['хорошее освещение', 'чистые инструменты', 'минимальное давление', 'простая повторяемая последовательность'],
    routine: ['Снимите старое покрытие и вымойте руки.', 'Подпилите ногти до одинаковой длины и формы.', 'Аккуратно обработайте кутикулу и заусенцы.', 'Нанесите лак или оставьте ногти без покрытия и завершите уходом.'],
    mistakes: ['пилить влажные размягчённые ногти грубой пилкой', 'слишком глубоко срезать кожу', 'работать тупым инструментом с усилием', 'наносить лак на жирную от крема пластину'],
    relatedSlugs: ['instrumenty-dlya-manikyura','uhod-za-kutikuloy','obychnyy-lak'], keywords: ['домашний маникюр','как сделать маникюр дома','маникюр пошагово']
  },
  {
    slug: 'instrumenty-dlya-manikyura', name: 'Инструменты для маникюра', group: 'care',
    description: 'Какой минимальный набор нужен дома и для чего используются пилка, пушер, кусачки и другие инструменты.',
    intro: 'Большой набор не делает маникюр аккуратнее автоматически. Дома полезнее несколько понятных инструментов, которыми легко управлять и которые можно содержать в чистоте.',
    basics: ['выбирать инструмент под конкретную задачу', 'проверять целостность рабочих краёв', 'очищать после использования', 'не передавать личные режущие инструменты другим'],
    focus: ['пилка для натуральных ногтей', 'пушер или апельсиновая палочка', 'кусачки для заусенцев', 'щётка для удаления пыли'],
    routine: ['Подготовьте только нужные инструменты.', 'Проверьте, что они чистые и исправные.', 'Используйте каждый инструмент без лишнего давления.', 'Очистите и полностью высушите набор после работы.'],
    mistakes: ['покупать фрезер без навыка только ради домашнего ухода', 'использовать слишком грубую пилку', 'резать кожу тупыми кусачками', 'хранить металлические инструменты влажными'],
    relatedSlugs: ['domashniy-manikyur','uhod-za-kutikuloy','forma-nogtey'], keywords: ['инструменты для маникюра','набор для маникюра','пилка для ногтей']
  },
  {
    slug: 'uhod-za-rukami', name: 'Уход за руками', group: 'care',
    description: 'Как уменьшить сухость кожи рук и поддерживать аккуратный вид маникюра между покрытиями.',
    intro: 'Кожа рук регулярно контактирует с водой, очищающими средствами и холодом. Поэтому простой крем после мытья часто полезнее редких сложных процедур.',
    basics: ['использовать мягкое очищение', 'наносить крем после контакта с водой', 'защищать руки при уборке', 'добавлять более плотный вечерний уход при необходимости'],
    focus: ['лёгкий дневной крем', 'плотная вечерняя текстура', 'уход за кутикулой', 'перчатки при бытовой химии'],
    routine: ['Мойте руки комфортным очищающим средством.', 'Промокните кожу полотенцем без сильного трения.', 'Нанесите крем на слегка влажную или сухую кожу.', 'На ночь при необходимости добавьте более плотный слой.'],
    mistakes: ['слишком часто скрабировать сухую кожу', 'игнорировать перчатки при уборке', 'наносить очень жирный крем прямо перед лаком', 'обрабатывать трещины декоративными средствами'],
    relatedSlugs: ['uhod-za-kutikuloy','domashniy-manikyur','manikyur-bez-pokrytiya'], keywords: ['уход за руками','сухая кожа рук','крем для рук']
  },
  {
    slug: 'baza-dlya-manikyura', name: 'База для маникюра', group: 'covering',
    description: 'Зачем нужна база под лак, чем отличаются выравнивающие и защитные варианты и когда можно обойтись без неё.',
    intro: 'База создаёт промежуточный слой между натуральным ногтем и цветом. Она может улучшить ровность покрытия, уменьшить окрашивание пластины и немного повысить стойкость.',
    basics: ['наносить тонким слоем', 'подбирать под тип покрытия', 'давать просохнуть или полимеризовать по инструкции', 'не заменять базой медицинскую помощь при проблемах ногтей'],
    focus: ['прозрачная база', 'выравнивающая формула', 'защита от яркого пигмента', 'совместимость с цветным покрытием'],
    routine: ['Очистите ногтевую пластину от пыли и крема.', 'Нанесите базу тонким равномерным слоем.', 'Дайте ей просохнуть или полимеризуйте по системе.', 'Продолжите цветным покрытием.'],
    mistakes: ['наносить слишком толстый слой', 'заходить базой на кожу', 'смешивать несовместимые системы', 'ожидать постоянного укрепления натурального ногтя'],
    relatedSlugs: ['obychnyy-lak','stoykost-pokrytiya','lomkie-nogti'], keywords: ['база для ногтей','база под лак','как наносить базу']
  },
  {
    slug: 'obychnyy-lak', name: 'Обычный лак', group: 'covering',
    description: 'Как наносить обычный лак тонкими слоями, быстрее получать ровный цвет и уменьшать сколы.',
    intro: 'Обычный лак не требует лампы и легко снимается дома. Для ровного результата важны тонкие слои, пауза между ними и аккуратный топ.',
    basics: ['убрать крем с ногтевой пластины', 'наносить два тонких слоя вместо одного толстого', 'давать каждому слою подсохнуть', 'завершать топом по желанию'],
    focus: ['равномерность первого слоя', 'время сушки', 'чистая граница у кутикулы', 'защита свободного края'],
    routine: ['Подготовьте ногти и нанесите базу при необходимости.', 'Нанесите первый тонкий слой цвета.', 'После подсыхания добавьте второй слой.', 'Закройте маникюр топом и дайте ему хорошо высохнуть.'],
    mistakes: ['сильно встряхивать флакон перед нанесением', 'наносить толстые слои', 'проверять высыхание сильным нажатием', 'контактировать с горячей водой сразу после маникюра'],
    relatedSlugs: ['baza-dlya-manikyura','stoykost-pokrytiya','nyudovyy-manikyur'], keywords: ['обычный лак для ногтей','как красить ногти','как наносить лак']
  },
  {
    slug: 'gel-lak', name: 'Гель-лак', group: 'covering',
    description: 'Основы стойкого покрытия: тонкие слои, аккуратная полимеризация и бережное отношение к коже вокруг ногтя.',
    intro: 'Гель-лак полимеризуется в подходящей лампе и требует соблюдения технологии конкретной системы. Для домашнего использования особенно важны аккуратное нанесение и отсутствие материала на коже.',
    basics: ['использовать совместимую систему', 'наносить материал тонко', 'убирать затёки до полимеризации', 'снимать покрытие без отрывания'],
    focus: ['подходящая лампа', 'время полимеризации производителя', 'чистая граница покрытия', 'безопасное снятие'],
    routine: ['Подготовьте ногти в соответствии с системой.', 'Нанесите базу и полимеризуйте по инструкции.', 'Добавьте цвет тонкими слоями.', 'Завершите топом и не допускайте материала на коже.'],
    mistakes: ['полимеризовать материал, затёкший на кожу', 'делать слишком толстые слои', 'использовать случайный режим лампы', 'отрывать покрытие при отслойке'],
    relatedSlugs: ['snyatie-gel-laka','stoykost-pokrytiya','baza-dlya-manikyura'], keywords: ['гель лак','маникюр гель лак','как наносить гель лак']
  },
  {
    slug: 'snyatie-gel-laka', name: 'Снятие гель-лака', group: 'covering',
    description: 'Как не повредить натуральный ноготь при снятии стойкого покрытия и почему материал нельзя сдирать.',
    intro: 'Способ снятия зависит от конкретного материала: одни системы размачиваются, другие снимаются спиливанием. Самое важное правило — не отрывать покрытие от ногтевой пластины.',
    basics: ['определить тип материала', 'не поддевать покрытие силой', 'работать постепенно', 'остановиться при боли или сильном жжении'],
    focus: ['размачивание только подходящих систем', 'контроль толщины при спиливании', 'минимум механического давления', 'уход за кожей после снятия'],
    routine: ['Уточните рекомендуемый способ снятия.', 'Снимите верхний слой или подготовьте покрытие по инструкции.', 'Размочите либо постепенно спилите материал.', 'Удалите остатки без соскабливания натурального ногтя.'],
    mistakes: ['сдирать отслойки руками', 'спиливать натуральный ноготь', 'ускорять процесс острым инструментом', 'снимать неизвестный материал неподходящим способом'],
    relatedSlugs: ['gel-lak','lomkie-nogti','stoykost-pokrytiya'], keywords: ['снятие гель лака','как снять гель лак','снять покрытие без вреда']
  },
  {
    slug: 'stoykost-pokrytiya', name: 'Стойкость покрытия', group: 'covering',
    description: 'Что влияет на сколы и отслойки и как сделать покрытие более предсказуемым без агрессивной подготовки ногтя.',
    intro: 'Стойкость зависит от подготовки, толщины слоёв, материалов, длины ногтей и бытовой нагрузки. Один дополнительный праймер не компенсирует слишком толстое или травматично нанесённое покрытие.',
    basics: ['очистить пластину от пыли и крема', 'наносить слои тонко', 'соблюдать время сушки или полимеризации', 'учитывать механическую нагрузку на свободный край'],
    focus: ['подготовка поверхности', 'чистая линия у кожи', 'торец свободного края', 'перчатки при уборке'],
    routine: ['Подготовьте ногти по инструкции системы.', 'Наносите каждый продукт тонким слоем.', 'Просушивайте или полимеризуйте полностью.', 'Не используйте ногти для поддевания и открывания предметов.'],
    mistakes: ['сильно спиливать натуральную пластину', 'наносить материал на кожу', 'ремонтировать крупную отслойку поверх загрязнений', 'делать слишком длинную форму для привычной нагрузки'],
    relatedSlugs: ['baza-dlya-manikyura','obychnyy-lak','gel-lak'], keywords: ['стойкость маникюра','почему скалывается лак','как продлить маникюр']
  },
  {
    slug: 'manikyur-bez-pokrytiya', name: 'Маникюр без покрытия', group: 'covering',
    description: 'Как поддерживать натуральные ногти аккуратными без цветного лака и частой полировки.',
    intro: 'Ровная форма, ухоженная кожа и аккуратный свободный край уже создают законченный маникюр. Цветное покрытие не является обязательной частью ухода.',
    basics: ['поддерживать одинаковую форму', 'бережно обрабатывать кутикулу', 'увлажнять кожу рук', 'минимально использовать бафф'],
    focus: ['овальная или мягкая квадратная форма', 'естественный блеск', 'прозрачная база по желанию', 'аккуратная кожа вокруг ногтя'],
    routine: ['Подпилите ногти до близкой длины.', 'Смягчите и аккуратно обработайте кутикулу.', 'Уберите пыль после подпиливания.', 'Нанесите крем и при желании прозрачную базу.'],
    mistakes: ['слишком часто полировать поверхность', 'глубоко вырезать кожу ради визуальной чистоты', 'пытаться скрыть изменения ногтя шлифовкой', 'использовать грубую пилку на натуральной пластине'],
    relatedSlugs: ['forma-nogtey','uhod-za-kutikuloy','korotkie-nogti'], keywords: ['маникюр без покрытия','натуральные ногти','уход за натуральными ногтями']
  },
  {
    slug: 'forma-nogtey', name: 'Форма ногтей', group: 'style',
    description: 'Как выбрать овал, мягкий квадрат, миндаль или другую форму под длину и привычную нагрузку.',
    intro: 'Форма должна быть не только красивой, но и удобной. На коротких ногтях легче поддерживать овал и мягкий квадрат, а более вытянутые формы требуют достаточного свободного края.',
    basics: ['учитывать натуральные боковые линии', 'не истончать боковые стороны', 'выбирать форму под реальную длину', 'корректировать постепенно'],
    focus: ['мягкий квадрат', 'овал', 'миндаль', 'графичный квадрат'],
    routine: ['Сравните длину всех ногтей.', 'Определите центральную ось каждого ногтя.', 'Сначала скорректируйте боковые линии, затем свободный край.', 'Сравните форму обеих рук и слегка исправьте асимметрию.'],
    mistakes: ['пилить боковые стенки слишком глубоко', 'пытаться сделать миндаль без достаточной длины', 'снимать слишком много длины за один проход', 'делать острые углы при постоянных сколах'],
    relatedSlugs: ['korotkie-nogti','minimalistichnyy-manikyur','manikyur-bez-pokrytiya'], keywords: ['форма ногтей','как выбрать форму ногтей','овал миндаль квадрат']
  },
  {
    slug: 'korotkie-nogti', name: 'Маникюр на короткие ногти', group: 'style',
    description: 'Практичные формы и идеи дизайна для небольшой длины без попытки визуально «спрятать» короткий ноготь.',
    intro: 'Короткая длина подходит однотонному покрытию, микрофренчу, нюду и небольшим акцентам. Главное — аккуратная форма и пропорции деталей.',
    basics: ['сохранять мягкие углы', 'не перегружать пластину крупными деталями', 'использовать цвет любой насыщенности', 'поддерживать кутикулу увлажнённой'],
    focus: ['мягкий квадрат', 'овал', 'микрофренч', 'небольшие вертикальные акценты'],
    routine: ['Придайте ногтям одинаковую короткую форму.', 'Выберите однотонную базу или спокойный фон.', 'Добавьте небольшой дизайн по желанию.', 'Перекройте топом и очистите границы покрытия.'],
    mistakes: ['считать тёмный цвет запрещённым для коротких ногтей', 'делать слишком широкий френч', 'пытаться сильно сузить ноготь спиливанием', 'перегружать маленькую пластину множеством крупных элементов'],
    relatedSlugs: ['forma-nogtey','frantsuzskiy-manikyur','minimalistichnyy-manikyur'], keywords: ['маникюр на короткие ногти','короткие ногти дизайн','короткий маникюр']
  },
  {
    slug: 'nyudovyy-manikyur', name: 'Нюдовый маникюр', group: 'style',
    description: 'Как выбрать молочный, розовый или бежевый нюд и получить ровный спокойный финиш.',
    intro: 'Нюд может быть почти прозрачным или достаточно плотным. Выбирать оттенок стоит не по строгим правилам, а по тому, как он смотрится рядом с кожей и нравится ли вам итоговый контраст.',
    basics: ['проверять оттенок при естественном свете', 'наносить светлый лак тонкими слоями', 'использовать базу при неровной поверхности', 'подбирать плотность под желаемый эффект'],
    focus: ['молочные оттенки', 'розовый нюд', 'бежевый нюд', 'полупрозрачные базы'],
    routine: ['Подготовьте форму и поверхность ногтей.', 'Нанесите базу при необходимости.', 'Добавьте один-два тонких слоя нюдового оттенка.', 'Завершите глянцевым или матовым топом.'],
    mistakes: ['искать единственный «правильный» оттенок под кожу', 'наносить светлый лак слишком толстым слоем', 'пытаться перекрыть каждую неровность большим количеством продукта', 'оценивать цвет только при искусственном освещении'],
    relatedSlugs: ['korotkie-nogti','frantsuzskiy-manikyur','minimalistichnyy-manikyur'], keywords: ['нюдовый маникюр','нюдовые ногти','молочный маникюр']
  },
  {
    slug: 'krasnyy-manikyur', name: 'Красный маникюр', group: 'style',
    description: 'Как выбрать оттенок красного и нанести насыщенный пигмент с чистой границей.',
    intro: 'Красный бывает холодным, тёплым, коралловым, классическим и глубоким бордовым. Он подходит любой длине, а аккуратность особенно зависит от чистого контура у кожи.',
    basics: ['использовать базу под насыщенный пигмент', 'наносить два тонких слоя', 'корректировать затёки сразу', 'завершать топом'],
    focus: ['классический красный', 'бордовый', 'коралловый', 'красный френч'],
    routine: ['Нанесите базу и дайте ей закрепиться.', 'Распределите первый тонкий слой красного лака.', 'Добавьте второй слой для плотности.', 'Исправьте границы и нанесите топ.'],
    mistakes: ['набирать слишком много лака на кисть', 'подводить продукт вплотную к коже одним толстым движением', 'пропускать базу при сильно пигментированном лаке', 'пытаться исправить затёк новым слоем цвета'],
    relatedSlugs: ['obychnyy-lak','korotkie-nogti','frantsuzskiy-manikyur'], keywords: ['красный маникюр','красные ногти','красный лак']
  },
  {
    slug: 'frantsuzskiy-manikyur', name: 'Французский маникюр', group: 'style',
    description: 'Классический френч, микрофренч и цветные варианты: как строить ровную линию свободного края.',
    intro: 'Френч можно адаптировать к любой длине. На коротких ногтях обычно лучше смотрится тонкая линия, а на длинных можно сделать более выраженный край.',
    basics: ['выбирать ширину линии под длину ногтя', 'рисовать от центрального ориентира', 'корректировать до полного высыхания', 'закреплять топом'],
    focus: ['классический белый край', 'микрофренч', 'цветной френч', 'молочная или розовая база'],
    routine: ['Нанесите базовый оттенок.', 'Наметьте центральную часть линии улыбки.', 'Соедините её с боковыми участками.', 'Исправьте форму тонкой кистью и закрепите топом.'],
    mistakes: ['делать слишком широкую линию на коротком ногте', 'пытаться нарисовать весь край одним быстрым движением', 'сравнивать только отдельный ноготь вместо всей руки', 'наносить топ до высыхания рисунка'],
    relatedSlugs: ['korotkie-nogti','nyudovyy-manikyur','minimalistichnyy-manikyur'], keywords: ['французский маникюр','френч на ногтях','микрофренч']
  },
  {
    slug: 'minimalistichnyy-manikyur', name: 'Минималистичный маникюр', group: 'style',
    description: 'Простые идеи дизайна с точками, линиями и небольшими акцентами, которые удобно повторить дома.',
    intro: 'Минимализм определяется не только нейтральным цветом, а небольшим количеством деталей. Один рисунок, тонкая линия или маленький акцент уже могут сделать покрытие интереснее.',
    basics: ['оставлять достаточно свободного пространства', 'использовать один-два типа деталей', 'рисовать небольшим количеством продукта', 'закреплять дизайн после высыхания'],
    focus: ['точки', 'тонкие линии', 'один акцентный ноготь', 'негативное пространство'],
    routine: ['Нанесите базовый цвет или прозрачное покрытие.', 'Выберите один простой элемент дизайна.', 'Повторите его на нескольких ногтях или оставьте асимметричным.', 'После высыхания аккуратно перекройте топом.'],
    mistakes: ['добавлять слишком много разных элементов', 'рисовать толстым слоем лака', 'стремиться к абсолютной симметрии любой ценой', 'размазывать рисунок кистью топа до высыхания'],
    relatedSlugs: ['nyudovyy-manikyur','frantsuzskiy-manikyur','korotkie-nogti'], keywords: ['минималистичный маникюр','простой дизайн ногтей','маникюр минимализм']
  },
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


export const cosmeticsGroups: { id: CosmeticsTopicGroup; title: string; description: string }[] = [
  {
    "id": "care",
    "title": "Уходовые средства",
    "description": "Очищение, кремы, сыворотки, SPF, маски и уход за зоной вокруг глаз — как выбирать формат под задачу и переносимость."
  },
  {
    "id": "decorative",
    "title": "Декоративная косметика",
    "description": "Тон, консилер, пудра, тушь, продукты для губ и румяна — акцент на выборе формулы, оттенка и удобства использования."
  },
  {
    "id": "choice",
    "title": "Как выбирать косметику",
    "description": "Состав, сроки, хранение, чувствительность, комедогенность, патч-тест и разумный набор без лишних покупок."
  }
];

export const cosmeticsTopics: CosmeticsTopic[] = [
  {
    "slug": "ochishchayushchie-sredstva",
    "name": "Очищающие средства",
    "group": "care",
    "description": "Гели, пенки, молочко и бальзамы: как выбрать очищение под кожу, макияж и привычную рутину.",
    "intro": "Очищающее средство должно удалять загрязнения и остатки продуктов без постоянного ощущения стянутости. Формат важен меньше, чем то, как кожа чувствует себя после умывания и справляется ли средство с вашей реальной задачей.",
    "basics": [
      "определить, что именно нужно смывать вечером",
      "выбирать комфортную степень очищения",
      "не стремиться к ощущению «до скрипа»",
      "оценивать кожу после умывания, а не только пенность средства"
    ],
    "focus": [
      "гели и пенки для водного очищения",
      "молочко и кремовые формулы для мягкого ощущения",
      "масло или бальзам для стойкого SPF и макияжа",
      "двойное очищение только при реальной необходимости"
    ],
    "routine": [
      "Определите, есть ли на коже стойкий SPF или макияж.",
      "При необходимости используйте первый этап — масло, бальзам или мицеллярную воду.",
      "Умойтесь водным средством без сильного трения.",
      "Промокните кожу и оцените комфорт до следующего этапа."
    ],
    "mistakes": [
      "покупать самое «сильное» очищение для жирной кожи",
      "умываться очень горячей водой",
      "тереть лицо щётками и полотенцем без необходимости",
      "считать двойное очищение обязательным утром и вечером"
    ],
    "relatedSlugs": [
      "uvlazhnyayushchiy-krem",
      "kak-chitat-sostav",
      "kosmetika-dlya-chuvstvitelnoy-kozhi"
    ],
    "keywords": [
      "очищающее средство для лица",
      "как выбрать гель для умывания",
      "пенка для умывания"
    ]
  },
  {
    "slug": "uvlazhnyayushchiy-krem",
    "name": "Увлажняющий крем",
    "group": "care",
    "description": "Как подобрать крем по текстуре и составу и понять, когда коже нужен более лёгкий или более насыщенный вариант.",
    "intro": "Крем помогает поддерживать комфорт и уменьшать потерю влаги. Подходящая текстура зависит от состояния кожи, сезона и того, какие продукты уже есть в рутине.",
    "basics": [
      "смотреть на ощущение кожи после нанесения",
      "подбирать плотность по сезону и состоянию",
      "не оценивать крем только по типу кожи на упаковке",
      "наносить комфортное количество без многослойности"
    ],
    "focus": [
      "глицерин и гиалуроновая кислота как увлажнители",
      "эмоленты для мягкости",
      "керамиды и липиды для поддержки барьера",
      "флюиды и гель-кремы при склонности к тяжести"
    ],
    "routine": [
      "Нанесите крем после очищения или сыворотки.",
      "Распределите тонким слоем без активного растирания.",
      "Через несколько минут оцените стянутость, липкость и блеск.",
      "При необходимости измените количество или плотность текстуры."
    ],
    "mistakes": [
      "выбирать самый плотный крем только из-за сухости",
      "считать блеск доказательством хорошего увлажнения",
      "наносить несколько кремов с одной функцией",
      "менять средство через пару дней без нормальной оценки"
    ],
    "relatedSlugs": [
      "syvorotka-dlya-lica",
      "kosmetika-dlya-chuvstvitelnoy-kozhi",
      "kak-chitat-sostav"
    ],
    "keywords": [
      "увлажняющий крем для лица",
      "как выбрать крем для лица",
      "крем для кожи"
    ]
  },
  {
    "slug": "syvorotka-dlya-lica",
    "name": "Сыворотка для лица",
    "group": "care",
    "description": "Что даёт сыворотка, когда она действительно нужна и как не собирать рутину из нескольких одинаковых активов.",
    "intro": "Сыворотка — формат, а не обязательная ступень. В ней может быть увлажняющая база, антиоксидант, кислота или другой актив, поэтому выбирать стоит конкретную функцию.",
    "basics": [
      "сначала определить главную задачу",
      "проверить, нет ли такого же актива в других средствах",
      "вводить активные формулы постепенно",
      "закрывать кремом только если коже это нужно"
    ],
    "focus": [
      "увлажняющие сыворотки",
      "ниацинамид под задачи себума и барьера",
      "витамин C как антиоксидантный актив",
      "кислоты и ретиноиды только с учётом переносимости"
    ],
    "routine": [
      "Выберите одну задачу и одно средство под неё.",
      "Нанесите небольшое количество на чистую кожу.",
      "Дайте слою распределиться перед следующим продуктом.",
      "Оценивайте переносимость несколько недель без одновременного добавления других активов."
    ],
    "mistakes": [
      "использовать три-четыре активные сыворотки одновременно",
      "ориентироваться только на высокий процент актива",
      "наносить больше ради более быстрого эффекта",
      "считать пощипывание обязательным признаком работы"
    ],
    "relatedSlugs": [
      "uvlazhnyayushchiy-krem",
      "kak-chitat-sostav",
      "patch-test"
    ],
    "keywords": [
      "сыворотка для лица",
      "как выбрать сыворотку",
      "активная сыворотка"
    ]
  },
  {
    "slug": "spf-dlya-lica",
    "name": "SPF для лица",
    "group": "care",
    "description": "Как выбирать солнцезащитное средство по уровню защиты, текстуре и совместимости с ежедневным уходом.",
    "intro": "Лучший SPF — тот, который обеспечивает нужную защиту и который удобно использовать регулярно в достаточном количестве. Комфортная текстура и совместимость с макияжем часто важнее бренда.",
    "basics": [
      "смотреть на защиту от UVB и UVA",
      "выбирать текстуру для регулярного использования",
      "наносить равномерно на открытые участки",
      "обновлять защиту по условиям пребывания на солнце"
    ],
    "focus": [
      "SPF 30–50 как частый повседневный диапазон",
      "водостойкость для спорта и пляжа",
      "флюиды для лёгкого финиша",
      "кремовые формулы при сухости"
    ],
    "routine": [
      "Завершите утренний уход и дайте слоям распределиться.",
      "Нанесите солнцезащиту равномерно.",
      "Подождите перед нанесением макияжа.",
      "При длительном пребывании на солнце обновляйте средство по инструкции."
    ],
    "mistakes": [
      "наносить символическое количество",
      "смешивать SPF с тональным кремом в ладони",
      "считать тон с SPF полной заменой отдельной защиты при активном солнце",
      "использовать один сценарий для офиса и пляжа"
    ],
    "relatedSlugs": [
      "tonalnyy-krem",
      "kak-chitat-sostav",
      "srok-godnosti-kosmetiki"
    ],
    "keywords": [
      "spf для лица",
      "как выбрать солнцезащитный крем",
      "солнцезащитная косметика"
    ]
  },
  {
    "slug": "maska-dlya-lica",
    "name": "Маски для лица",
    "group": "care",
    "description": "Увлажняющие, очищающие и тканевые маски: когда они полезны и почему не обязаны быть ежедневным этапом.",
    "intro": "Маска — дополнительный формат ухода, который может временно повысить комфорт, уменьшить ощущение сухости или дать косметический эффект. Она не заменяет стабильную базовую рутину.",
    "basics": [
      "выбирать маску под одну понятную задачу",
      "соблюдать время из инструкции",
      "не наносить раздражающую формулу на повреждённую кожу",
      "оценивать эффект как дополнительный, а не обязательный"
    ],
    "focus": [
      "кремовые увлажняющие маски",
      "глиняные формулы для временного матирования",
      "тканевые маски как окклюзивный формат",
      "успокаивающие формулы без большого числа активов"
    ],
    "routine": [
      "Очистите кожу привычным способом.",
      "Нанесите маску равномерно.",
      "Выдержите рекомендованное время.",
      "Удалите или распределите остатки по инструкции и завершите уход при необходимости."
    ],
    "mistakes": [
      "держать маску дольше ради усиления результата",
      "ждать полного растрескивания глины при дискомфорте",
      "ежедневно чередовать разные активные маски",
      "наносить активную маску на раздражённую кожу"
    ],
    "relatedSlugs": [
      "uvlazhnyayushchiy-krem",
      "kosmetika-dlya-chuvstvitelnoy-kozhi",
      "patch-test"
    ],
    "keywords": [
      "маска для лица",
      "как выбрать маску для лица",
      "тканевая маска"
    ]
  },
  {
    "slug": "krem-dlya-vek",
    "name": "Крем для век",
    "group": "care",
    "description": "Нужен ли отдельный крем вокруг глаз, чем он отличается от обычного крема и как выбирать комфортную текстуру.",
    "intro": "Отдельный крем для век нужен не всем. Он полезен, когда хочется более лёгкую текстуру, удобный формат или формулу, рассчитанную именно на чувствительную зону вокруг глаз.",
    "basics": [
      "наносить небольшое количество",
      "не подводить активный продукт близко к слизистой",
      "оценивать склонность к отёчности и раздражению",
      "не покупать отдельный продукт только потому, что он считается обязательным"
    ],
    "focus": [
      "лёгкие увлажняющие текстуры",
      "формулы без выраженного раздражения",
      "кофеин для временного косметического эффекта",
      "пептиды и увлажнители как поддерживающие компоненты"
    ],
    "routine": [
      "После очищения нанесите маленькое количество.",
      "Распределите по орбитальной зоне мягкими касаниями.",
      "Не растирайте кожу и не наносите средство в глаза.",
      "Утром дайте крему распределиться перед консилером."
    ],
    "mistakes": [
      "ожидать исчезновения генетических тёмных кругов от одного крема",
      "наносить толстый слой под ресницы",
      "использовать раздражающие активы слишком близко к глазам",
      "игнорировать жжение и слезотечение"
    ],
    "relatedSlugs": [
      "uvlazhnyayushchiy-krem",
      "kosmetika-dlya-chuvstvitelnoy-kozhi",
      "konsiler-kak-produkt"
    ],
    "keywords": [
      "крем для век",
      "крем вокруг глаз",
      "как выбрать крем для глаз"
    ]
  },
  {
    "slug": "tonalnyy-krem",
    "name": "Тональный крем",
    "group": "decorative",
    "description": "Как выбирать тональный крем по оттенку, покрытию и финишу, а не только по названию типа кожи.",
    "intro": "Тональный крем удобнее выбирать по четырём параметрам: оттенок, степень покрытия, финиш и поведение на коже в течение дня. Даже хорошая формула не подойдёт, если оттенок заметно отличается или покрытие избыточно.",
    "basics": [
      "тестировать оттенок на лице или линии челюсти",
      "смотреть на цвет после высыхания",
      "выбирать покрытие по желаемому эффекту",
      "проверять совместимость с уходом и SPF"
    ],
    "focus": [
      "лёгкое покрытие для общего выравнивания",
      "среднее покрытие как универсальный вариант",
      "матовый финиш для контроля блеска",
      "сатиновый или сияющий финиш для более живого эффекта"
    ],
    "routine": [
      "Нанесите несколько близких оттенков на линию челюсти.",
      "Подождите несколько минут и оцените при дневном свете.",
      "Проверьте формулу поверх привычного ухода.",
      "Если всё подходит, наносите тонкими слоями до нужного покрытия."
    ],
    "mistakes": [
      "подбирать оттенок по запястью",
      "покупать слишком светлый тон ради «освежения»",
      "оценивать оттенок сразу до высыхания",
      "компенсировать неудобную текстуру большим количеством пудры"
    ],
    "relatedSlugs": [
      "konsiler-kak-produkt",
      "pudra-kak-produkt",
      "kak-sobrat-kosmetichku"
    ],
    "keywords": [
      "как выбрать тональный крем",
      "тональный крем",
      "оттенок тонального крема"
    ]
  },
  {
    "slug": "konsiler-kak-produkt",
    "name": "Консилер",
    "group": "decorative",
    "description": "Как выбрать консилер для зоны под глазами и точечной коррекции, не перегружая кожу плотными слоями.",
    "intro": "Один консилер не обязан одинаково хорошо работать под глазами и на локальных несовершенствах. Для этих зон могут быть удобны разные плотность, оттенок и степень фиксации.",
    "basics": [
      "выбирать текстуру под конкретную зону",
      "не брать слишком светлый оттенок для маскировки",
      "наносить точечно и наращивать покрытие",
      "фиксировать пудрой только при необходимости"
    ],
    "focus": [
      "пластичная текстура для подвижной зоны под глазами",
      "плотный точечный консилер для отдельных участков",
      "персиковые корректоры для нейтрализации синевы",
      "оттенок близкий к коже для локальной коррекции"
    ],
    "routine": [
      "Определите, что именно хотите скорректировать.",
      "Нанесите маленькую точку продукта на нужную зону.",
      "Растушуйте границы кистью, спонжем или пальцем.",
      "При необходимости добавьте второй тонкий слой."
    ],
    "mistakes": [
      "рисовать большой светлый треугольник под глазами без необходимости",
      "наслаивать плотный консилер на сухую кожу",
      "выбирать один оттенок на все сезоны",
      "закреплять сухую зону большим количеством пудры"
    ],
    "relatedSlugs": [
      "tonalnyy-krem",
      "pudra-kak-produkt",
      "krem-dlya-vek"
    ],
    "keywords": [
      "консилер",
      "как выбрать консилер",
      "консилер под глаза"
    ]
  },
  {
    "slug": "pudra-kak-produkt",
    "name": "Пудра",
    "group": "decorative",
    "description": "Рассыпчатая и компактная пудра: как выбрать степень фиксации и избежать тяжёлого сухого финиша.",
    "intro": "Пудра нужна прежде всего для контроля блеска, уменьшения липкости кремовых продуктов и повышения стойкости в отдельных зонах. Покрывать ею всё лицо плотным слоем необязательно.",
    "basics": [
      "определить, нужна ли фиксация или дополнительное покрытие",
      "использовать небольшое количество",
      "наносить локально на подвижные и блестящие зоны",
      "подбирать оттенок, который не меняет цвет тона"
    ],
    "focus": [
      "прозрачная рассыпчатая пудра для фиксации",
      "тонированная компактная для коррекции в течение дня",
      "мелкий помол для более тонкого слоя",
      "матирующие формулы для T-зоны"
    ],
    "routine": [
      "Убедитесь, что кремовые продукты распределены без излишка.",
      "Наберите немного пудры и стряхните лишнее.",
      "Прижимающими движениями закрепите нужные зоны.",
      "В течение дня сначала промокните себум, а затем при необходимости обновите пудру."
    ],
    "mistakes": [
      "припудривать лицо снова и снова поверх себума",
      "использовать слишком светлую пудру со вспышкой",
      "натирать кистью ещё влажный тон",
      "считать полностью матовый финиш обязательным"
    ],
    "relatedSlugs": [
      "tonalnyy-krem",
      "konsiler-kak-produkt",
      "kak-sobrat-kosmetichku"
    ],
    "keywords": [
      "пудра для лица",
      "как выбрать пудру",
      "рассыпчатая пудра"
    ]
  },
  {
    "slug": "tush-kak-produkt",
    "name": "Тушь для ресниц",
    "group": "decorative",
    "description": "Объём, удлинение, водостойкость и щёточки: как выбрать тушь под привычный эффект и условия дня.",
    "intro": "Разница между тушами определяется не только формулой, но и щёточкой, количеством продукта и тем, как ресницы держат изгиб. Выбирайте нужный эффект: разделение, объём, длина или устойчивость к влаге.",
    "basics": [
      "определить главный желаемый эффект",
      "учитывать склонность туши отпечатываться",
      "водостойкую формулу использовать по ситуации",
      "снимать продукт без сильного трения"
    ],
    "focus": [
      "силиконовые щёточки для разделения",
      "ворсовые щётки для объёма",
      "tubing-формулы для стойкости",
      "водостойкая тушь для влажности и слёз"
    ],
    "routine": [
      "Удалите избыток продукта с кончика щёточки.",
      "Прокрасьте ресницы от основания к концам.",
      "Дайте первому слою немного схватиться.",
      "Добавьте второй слой только там, где нужен дополнительный эффект."
    ],
    "mistakes": [
      "добавлять много слоёв на полностью высохшую тушь",
      "разбавлять старую тушь водой",
      "пользоваться продуктом при изменившемся запахе",
      "делиться тушью с другими людьми"
    ],
    "relatedSlugs": [
      "srok-godnosti-kosmetiki",
      "hranenie-kosmetiki",
      "kak-sobrat-kosmetichku"
    ],
    "keywords": [
      "тушь для ресниц",
      "как выбрать тушь",
      "водостойкая тушь"
    ]
  },
  {
    "slug": "pomada-i-tint",
    "name": "Помада и тинт",
    "group": "decorative",
    "description": "Матовые, кремовые и полупрозрачные продукты для губ: как выбирать формулу по комфорту и стойкости.",
    "intro": "Для губ важны не только цвет и стойкость, но и ощущения через несколько часов. Матовые формулы часто устойчивее, кремовые легче обновлять, а тинты дают цвет без плотного слоя.",
    "basics": [
      "выбирать оттенок при привычном освещении",
      "оценивать комфорт после высыхания",
      "учитывать обновление после еды",
      "не использовать раздражающий продукт на повреждённых губах"
    ],
    "focus": [
      "кремовая помада для комфорта",
      "матовая жидкая для стойкости",
      "тинт для полупрозрачного цвета",
      "бальзам с оттенком для повседневного варианта"
    ],
    "routine": [
      "При необходимости нанесите тонкий слой бальзама заранее.",
      "Уберите явный избыток перед цветным продуктом.",
      "Нанесите помаду или тинт тонким равномерным слоем.",
      "Для более чёткого контура добавьте карандаш."
    ],
    "mistakes": [
      "наносить стойкую формулу на раздражённые губы",
      "пытаться исправлять сухость новым слоем матовой помады",
      "выбирать оттенок только по фото в интернете",
      "использовать продукт после заметного изменения запаха и текстуры"
    ],
    "relatedSlugs": [
      "srok-godnosti-kosmetiki",
      "kak-sobrat-kosmetichku",
      "hranenie-kosmetiki"
    ],
    "keywords": [
      "помада",
      "тинт для губ",
      "как выбрать помаду"
    ]
  },
  {
    "slug": "rumyana-kak-produkt",
    "name": "Румяна",
    "group": "decorative",
    "description": "Кремовые, жидкие и сухие румяна: как выбрать текстуру, оттенок и интенсивность для повседневной косметички.",
    "intro": "Румяна отличаются прозрачностью, скоростью растушёвки и финишем. Новичкам часто удобнее формулы, которые легко наслаивать постепенно.",
    "basics": [
      "сначала определить желаемую насыщенность",
      "наносить небольшое количество и наслаивать",
      "подбирать текстуру под привычные инструменты",
      "учитывать, что цвет в упаковке может выглядеть ярче, чем на коже"
    ],
    "focus": [
      "пудровые румяна для контролируемого нанесения",
      "кремовые для естественного финиша",
      "жидкие тинты для высокой пигментации",
      "нейтральные розовые и персиковые оттенки как простой старт"
    ],
    "routine": [
      "Наберите минимальное количество продукта.",
      "Нанесите на выбранную зону щёк.",
      "Растушуйте границы до желаемой мягкости.",
      "При необходимости добавьте ещё один тонкий слой."
    ],
    "mistakes": [
      "брать много высокопигментированного продукта сразу",
      "пытаться растушевать быстро фиксирующуюся формулу сразу на обеих щеках",
      "оценивать оттенок только на руке",
      "покупать оттенок только по правилу цветотипа"
    ],
    "relatedSlugs": [
      "pudra-kak-produkt",
      "tonalnyy-krem",
      "kak-sobrat-kosmetichku"
    ],
    "keywords": [
      "румяна",
      "как выбрать румяна",
      "кремовые румяна"
    ]
  },
  {
    "slug": "kak-chitat-sostav",
    "name": "Как читать состав косметики",
    "group": "choice",
    "description": "Как ориентироваться в INCI без страха перед длинными названиями и почему один ингредиент редко описывает всю формулу.",
    "intro": "Состав полезно читать не как список «хороших» и «плохих» веществ, а как подсказку о роли продукта. Эффект зависит от всей формулы, концентраций и того, как средство используется.",
    "basics": [
      "сначала смотреть на назначение продукта",
      "не делать вывод по одному ингредиенту",
      "учитывать положение компонента в списке только как грубый ориентир",
      "сверять активы с собственной переносимостью"
    ],
    "focus": [
      "увлажнители, эмоленты и окклюзивы",
      "активы под конкретные задачи",
      "отдушки как возможный фактор чувствительности, но не универсальное зло",
      "консерванты как нормальная часть многих водных формул"
    ],
    "routine": [
      "Определите, какую задачу должно решать средство.",
      "Найдите ключевые группы компонентов, а не отдельные пугающие названия.",
      "Проверьте, не дублируются ли сильные активы.",
      "Оцените средство по фактической переносимости после аккуратного введения."
    ],
    "mistakes": [
      "делить ингредиенты на «химию» и «натуральное»",
      "считать компонент плохим из-за длинного названия",
      "оценивать эффективность только по месту актива в INCI",
      "копировать чужой стоп-лист без своей реакции"
    ],
    "relatedSlugs": [
      "patch-test",
      "komedogennost",
      "kosmetika-dlya-chuvstvitelnoy-kozhi"
    ],
    "keywords": [
      "как читать состав косметики",
      "inci состав",
      "состав косметики"
    ]
  },
  {
    "slug": "srok-godnosti-kosmetiki",
    "name": "Срок годности косметики",
    "group": "choice",
    "description": "Чем общий срок годности отличается от периода после открытия и когда продукт лучше не использовать дальше.",
    "intro": "На упаковке могут одновременно быть дата годности и значок открытой баночки с числом месяцев. После вскрытия продукт контактирует с воздухом, руками и влагой, поэтому важны и маркировка, и состояние формулы.",
    "basics": [
      "проверять срок до открытия",
      "отмечать дату первого использования для редких продуктов",
      "обращать внимание на запах, цвет и консистенцию",
      "особенно внимательно относиться к продуктам для глаз"
    ],
    "focus": [
      "PAO — период после открытия",
      "срок годности закрытого продукта",
      "гигиена упаковки",
      "условия хранения, влияющие на стабильность"
    ],
    "routine": [
      "Найдите маркировку срока и PAO.",
      "При открытии при необходимости подпишите месяц и год.",
      "Храните продукт согласно инструкции.",
      "Не используйте средство при заметном изменении запаха, цвета или текстуры."
    ],
    "mistakes": [
      "считать декоративную косметику вечной",
      "разбавлять засохшую тушь водой",
      "использовать продукт после изменения запаха",
      "хранить открытые средства годами из жалости"
    ],
    "relatedSlugs": [
      "hranenie-kosmetiki",
      "tush-kak-produkt",
      "patch-test"
    ],
    "keywords": [
      "срок годности косметики",
      "срок после открытия косметики",
      "pao косметика"
    ]
  },
  {
    "slug": "hranenie-kosmetiki",
    "name": "Хранение косметики",
    "group": "choice",
    "description": "Где хранить косметику дома, почему ванная подходит не всем продуктам и когда холодильник действительно нужен.",
    "intro": "Большинство косметики рассчитано на обычную комнатную температуру вдали от прямого солнца и сильного нагрева. Постоянные перепады влажности и температуры могут быть менее желательны, чем закрытый сухой шкаф.",
    "basics": [
      "следовать условиям на упаковке",
      "держать продукты вдали от солнца и батарей",
      "плотно закрывать крышки",
      "не переносить средство в случайную тару без необходимости"
    ],
    "focus": [
      "сухое прохладное место для большинства средств",
      "холодильник только по инструкции или реальной необходимости",
      "чистые кисти и аппликаторы",
      "отдельное хранение резервов и открытых продуктов"
    ],
    "routine": [
      "Разделите открытые продукты и запас.",
      "Уберите средства с подоконника и от источников тепла.",
      "Проверьте, плотно ли закрываются упаковки.",
      "Раз в несколько месяцев просматривайте сроки и состояние редко используемых средств."
    ],
    "mistakes": [
      "хранить всю косметику в холодильнике",
      "оставлять банки открытыми",
      "держать SPF и активы в нагревающейся машине",
      "переливать продукт в тару без маркировки"
    ],
    "relatedSlugs": [
      "srok-godnosti-kosmetiki",
      "kak-sobrat-kosmetichku",
      "tush-kak-produkt"
    ],
    "keywords": [
      "как хранить косметику",
      "хранение косметики",
      "косметика в ванной"
    ]
  },
  {
    "slug": "kosmetika-dlya-chuvstvitelnoy-kozhi",
    "name": "Косметика для чувствительной кожи",
    "group": "choice",
    "description": "Как сокращать риск раздражения и выбирать более простые формулы, если кожа часто реагирует на новые средства.",
    "intro": "При чувствительной коже полезнее не искать надпись «гипоаллергенно», а сокращать количество переменных: простая база, постепенное введение новинок и отказ от нескольких раздражающих активов одновременно.",
    "basics": [
      "вводить по одному новому средству",
      "отдавать приоритет понятной базовой рутине",
      "не использовать несколько сильных активов одновременно",
      "прекращать применение при выраженной стойкой реакции"
    ],
    "focus": [
      "мягкое очищение",
      "нейтральные увлажняющие формулы",
      "минимум активов при нестабильном барьере",
      "SPF, который не вызывает жжения"
    ],
    "routine": [
      "Стабилизируйте базу из нескольких хорошо переносимых продуктов.",
      "Новинку используйте отдельно от других новых средств.",
      "Наблюдайте за реакцией несколько применений.",
      "При выраженном жжении, отёке или стойком покраснении прекратите использование."
    ],
    "mistakes": [
      "полагаться только на маркировку «для чувствительной кожи»",
      "тестировать несколько новых средств в один день",
      "продолжать использовать средство через сильное жжение",
      "пытаться решать стойкое раздражение только косметикой"
    ],
    "relatedSlugs": [
      "patch-test",
      "kak-chitat-sostav",
      "uvlazhnyayushchiy-krem"
    ],
    "keywords": [
      "косметика для чувствительной кожи",
      "чувствительная кожа средства",
      "гипоаллергенная косметика"
    ]
  },
  {
    "slug": "komedogennost",
    "name": "Комедогенность косметики",
    "group": "choice",
    "description": "Что означает «некомедогенно», почему списки комедогенных ингредиентов ограниченно полезны и как оценивать продукт на практике.",
    "intro": "Комедогенность нельзя надёжно определить по одному ингредиенту или универсальной таблице. Реакция зависит от полной формулы, концентрации, кожи и сочетания продуктов.",
    "basics": [
      "воспринимать «некомедогенно» как ориентир, а не гарантию",
      "оценивать всю рутину целиком",
      "вводить новые плотные средства по одному",
      "не списывать любое высыпание на «забитые поры»"
    ],
    "focus": [
      "текстура и количество продукта",
      "сочетание нескольких плотных слоёв",
      "качество очищения вечером",
      "индивидуальная реакция в течение нескольких недель"
    ],
    "routine": [
      "Добавьте один новый продукт, не меняя остальную схему.",
      "Используйте обычное количество.",
      "Наблюдайте за зонами, где обычно появляются комедоны.",
      "При повторяемом ухудшении после введения замените средство."
    ],
    "mistakes": [
      "исключать ингредиент навсегда из-за рейтинга в интернете",
      "считать натуральные масла безопасными для всех",
      "менять пять продуктов одновременно при высыпаниях",
      "пытаться диагностировать стойкое акне только по косметике"
    ],
    "relatedSlugs": [
      "kak-chitat-sostav",
      "patch-test",
      "kosmetika-dlya-chuvstvitelnoy-kozhi"
    ],
    "keywords": [
      "комедогенность косметики",
      "некомедогенная косметика",
      "забивает ли крем поры"
    ]
  },
  {
    "slug": "patch-test",
    "name": "Патч-тест новой косметики",
    "group": "choice",
    "description": "Как аккуратно знакомить кожу с новым средством и что такой тест может и не может предсказать.",
    "intro": "Домашний патч-тест не гарантирует отсутствие реакции на лице, но помогает заметить явную несовместимость до нанесения продукта на большую площадь.",
    "basics": [
      "тестировать один новый продукт за раз",
      "использовать небольшую площадь кожи",
      "не тестировать на раздражённом участке",
      "при выраженной реакции прекратить контакт со средством"
    ],
    "focus": [
      "небольшой участок как первичная проверка",
      "последующее постепенное введение на лицо",
      "наблюдение за жжением, зудом, отёком и стойким покраснением",
      "понимание, что домашний тест не является медицинской диагностикой"
    ],
    "routine": [
      "Выберите небольшой неповреждённый участок кожи.",
      "Нанесите немного продукта по инструкции.",
      "Наблюдайте за участком и не добавляйте другие новинки.",
      "Даже при нормальном тесте вводите средство на лицо постепенно."
    ],
    "mistakes": [
      "проводить тест на повреждённой коже",
      "считать отсутствие реакции полной гарантией",
      "продолжать использование при нарастающем отёке или жжении",
      "одновременно тестировать несколько средств на одной зоне"
    ],
    "relatedSlugs": [
      "kosmetika-dlya-chuvstvitelnoy-kozhi",
      "kak-chitat-sostav",
      "komedogennost"
    ],
    "keywords": [
      "патч тест косметики",
      "как тестировать косметику",
      "реакция на косметику"
    ]
  },
  {
    "slug": "kak-sobrat-kosmetichku",
    "name": "Как собрать базовую косметичку",
    "group": "choice",
    "description": "Минимальный набор уходовой и декоративной косметики без десятков дублирующих средств.",
    "intro": "Базовая косметичка — не фиксированный список покупок, а набор под ваш образ жизни. Полезнее начать с продуктов, которыми вы действительно пользуетесь, и добавлять новое только под конкретную задачу.",
    "basics": [
      "разделить ежедневные и редкие продукты",
      "не покупать несколько средств с одинаковой функцией",
      "оставить удобные универсальные оттенки",
      "регулярно проверять сроки редко используемых продуктов"
    ],
    "focus": [
      "очищение, крем и SPF как базовая уходовая часть",
      "консилер или тон по желанию",
      "один продукт для щёк, тушь и средство для губ как компактный декоративный набор",
      "отдельные активы только под реальную задачу"
    ],
    "routine": [
      "Запишите продукты, которыми реально пользуетесь за неделю.",
      "Уберите дубли одной функции.",
      "Добавьте только то, чего не хватает для привычного ухода или макияжа.",
      "Через месяц оцените, какие продукты остаются невостребованными."
    ],
    "mistakes": [
      "собирать косметичку по чужому обязательному списку",
      "покупать запас новых формул до проверки первой",
      "держать десятки похожих открытых средств",
      "считать многофункциональность обязательной для каждого продукта"
    ],
    "relatedSlugs": [
      "srok-godnosti-kosmetiki",
      "hranenie-kosmetiki",
      "tonalnyy-krem"
    ],
    "keywords": [
      "базовая косметичка",
      "что должно быть в косметичке",
      "минимум косметики"
    ]
  }
];

export const allIndexablePaths = [
  '/',
  '/articles',
  '/ingredients',
  '/procedures',
  '/guides',
  '/tests',
  ...categories.filter((item) => !['ingredients', 'procedures', 'guides'].includes(item.slug)).map((item) => `/category/${item.slug}`),
  ...careTopics.map((item) => `/category/skin/${item.slug}`),
  ...hairTopics.map((item) => `/category/hair/${item.slug}`),
  ...makeupTopics.map((item) => `/category/makeup/${item.slug}`),
  ...manicureTopics.map((item) => `/category/manicure/${item.slug}`),
  ...cosmeticsTopics.map((item) => `/category/cosmetics/${item.slug}`),
  ...articles.map((item) => `/articles/${item.slug}`),
  ...ingredients.map((item) => `/ingredients/${item.slug}`),
  ...procedures.map((item) => `/procedures/${item.slug}`),
  ...guides.map((item) => `/guides/${item.slug}`),
  ...tests.map((item) => `/tests/${item.slug}`),
];
