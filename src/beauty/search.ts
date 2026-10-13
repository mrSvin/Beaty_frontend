/** A shared, deterministic client-side search index for every publicly linked content page. */
import {articles, careTopics, cosmeticsTopics, hairTopics, makeupTopics, manicureTopics} from './content';
import {guides} from './contentGuides';
import {ingredients} from './contentIngredient';
import {procedures} from './contentProcedures';
import {tests} from './contentTests';

export type SearchKind = 'article' | 'ingredient' | 'topic' | 'guide' | 'procedure' | 'test';
export type SearchItem = {
  id: string;
  kind: SearchKind;
  label: string;
  title: string;
  description: string;
  href: string;
  keywords?: string;
};

const topicItems = [
  ...careTopics.map(item => ({...item, category: 'Кожа', href: `/category/skin/${item.slug}`})),
  ...hairTopics.map(item => ({...item, category: 'Волосы', href: `/category/hair/${item.slug}`})),
  ...makeupTopics.map(item => ({...item, category: 'Макияж', href: `/category/makeup/${item.slug}`})),
  ...manicureTopics.map(item => ({...item, category: 'Маникюр', href: `/category/manicure/${item.slug}`})),
  ...cosmeticsTopics.map(item => ({...item, category: 'Косметика', href: `/category/cosmetics/${item.slug}`})),
];

export const SEARCH_ITEMS: SearchItem[] = [
  ...articles.map(item => ({id: `article-${item.slug}`, kind: 'article' as const, label: item.category, title: item.title, description: item.excerpt, href: `/articles/${item.slug}`, keywords: item.tags.join(' ')})),
  ...ingredients.map(item => ({id: `ingredient-${item.slug}`, kind: 'ingredient' as const, label: 'Ингредиент', title: item.name, description: item.description, href: `/ingredients/${item.slug}`, keywords: [item.benefits.join(' '), item.skin.join(' ')].join(' ')})),
  ...topicItems.map(item => ({id: `topic-${item.href}`, kind: 'topic' as const, label: item.category, title: item.name, description: item.description, href: item.href, keywords: `${item.intro} ${item.keywords.join(' ')}`})),
  ...guides.map(item => ({id: `guide-${item.slug}`, kind: 'guide' as const, label: 'Гайд', title: item.title, description: item.description, href: `/guides/${item.slug}`})),
  ...procedures.map(item => ({id: `procedure-${item.slug}`, kind: 'procedure' as const, label: 'Процедура', title: item.title, description: item.excerpt, href: `/procedures/${item.slug}`, keywords: item.type})),
  ...tests.map(item => ({id: `test-${item.slug}`, kind: 'test' as const, label: 'Тест', title: item.title, description: item.description, href: `/tests/${item.slug}`})),
];

export function normalizeSearch(value: string): string {
  return value.toLocaleLowerCase('ru-RU').normalize('NFKC').replace(/ё/g, 'е').replace(/[^a-zа-я0-9]+/gi, ' ').trim().replace(/\s+/g, ' ');
}

const STOP_WORDS = new Set(['в', 'во', 'с', 'со', 'на', 'за', 'к', 'по', 'для', 'от', 'до', 'из', 'у', 'и', 'или', 'а', 'о', 'об', 'про', 'как', 'что', 'это', 'его', 'ее', 'же', 'ли']);
const STEM_ENDINGS = ['иями', 'ями', 'ами', 'ости', 'остью', 'овых', 'евого', 'ого', 'ему', 'ому', 'ыми', 'ими', 'иях', 'ией', 'ией', 'ах', 'ях', 'ов', 'ев', 'ей', 'ия', 'ые', 'ий', 'ый', 'ая', 'яя', 'ое', 'ее', 'ую', 'юю', 'ам', 'ям', 'ом', 'ем', 'ой', 'ых', 'их', 'а', 'я', 'ы', 'и', 'е', 'у', 'ю', 'ь'];

function stem(word: string): string {
  // A compact search stemmer (not a linguistic analyser): matches «волосы»/«волосами», «крема»/«крем».
  if (word.length < 4 || /[a-z0-9]/.test(word)) return word;
  const ending = STEM_ENDINGS.find(suffix => word.endsWith(suffix) && word.length - suffix.length >= 3);
  return ending ? word.slice(0, -ending.length) : word;
}

function terms(value: string): string[] {
  const raw = normalizeSearch(value).split(' ').filter(Boolean);
  return raw.filter(item => !STOP_WORDS.has(item)).map(stem);
}

export function matchesSearchText(query: string, text: string): boolean {
  const tokens = terms(query);
  if (!tokens.length) return !normalizeSearch(query);
  const words = terms(text);
  return tokens.every(token => words.some(word => word === token || (token.length >= 4 && word.startsWith(token))));
}

const prepared = SEARCH_ITEMS.map(item => ({
  item,
  title: normalizeSearch(item.title),
  titles: terms(item.title),
  words: terms(`${item.title} ${item.description} ${item.keywords || ''} ${item.label}`),
  keywordWords: terms(item.keywords || ''),
  descriptionWords: terms(item.description),
  labelWords: terms(item.label),
}));

function tokenFound(token: string, words: string[]): boolean {
  return words.some(word => word === token || (token.length >= 4 && word.startsWith(token)));
}

export function searchSite(query: string, limit?: number): SearchItem[] {
  const normalized = normalizeSearch(query);
  const tokens = terms(query);
  if (normalized.length < 2 || !tokens.length) return [];
  const ranked = prepared.flatMap(({item, title, titles, words, keywordWords, descriptionWords, labelWords}) => {
    if (!tokens.every(token => tokenFound(token, words))) return [];
    const score = (title === normalized ? 120 : 0)
      + (title.startsWith(normalized) ? 55 : 0)
      + (title.includes(normalized) ? 35 : 0)
      + tokens.reduce((sum, token) => sum
        + (tokenFound(token, titles) ? 25 : 0)
        + (tokenFound(token, keywordWords) ? 12 : 0)
        + (tokenFound(token, descriptionWords) ? 5 : 0)
        + (tokenFound(token, labelWords) ? 3 : 0), 0);
    return [{item, score}];
  });
  ranked.sort((a,b) => b.score-a.score || a.item.title.localeCompare(b.item.title, 'ru'));
  return ranked.slice(0, limit).map(result => result.item);
}
