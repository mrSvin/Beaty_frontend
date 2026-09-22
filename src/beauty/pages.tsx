import {useMemo, useState} from 'react';
import {
  ArrowRight,
  Check,
  ChevronRight,
  FlaskConical,
  ListFilter,
  Search,
  ShieldCheck,
  Sparkles,
  Star
} from 'lucide-react';
import {Link, useParams, useSearchParams} from 'react-router-dom';
import {
  AdSlot,
  ArticleCard,
  Badge,
  Breadcrumbs,
  InfoBox,
  IngredientCard,
  SearchField,
  SectionHeading
} from './components';
import {articles, careGroups, careTopics, categories, guides, images, ingredients, procedures, tests} from './content';

const skinTypes = ['Сухая', 'Жирная', 'Комбинированная', 'Чувствительная', 'Проблемная'];
const skinProblems = ['Акне', 'Пигментация', 'Морщины', 'Увлажнение', 'Восстановление барьера', 'Расширенные поры'];

const careTopicByLabel: Record<string, string> = {
  'Сухая': 'suhaya-kozha',
  'Жирная': 'zhirnaya-kozha',
  'Комбинированная': 'kombinirovannaya-kozha',
  'Чувствительная': 'chuvstvitelnaya-kozha',
  'Проблемная': 'problemnaya-kozha',
  'Акне': 'akne',
  'Пигментация': 'pigmentaciya',
  'Морщины': 'morshchiny',
  'Увлажнение': 'uvlazhnenie',
  'Восстановление барьера': 'vosstanovlenie-barera',
  'Расширенные поры': 'rasshirennye-pory',
};

export function HomePage() {
  const [skinType, setSkinType] = useState('');
  const [problem, setProblem] = useState('');
  const [query, setQuery] = useState('');

  return (
    <main>
      <section className="hero section-wrap">
        <div className="hero-copy">
          <Badge>Beauty без сложных терминов</Badge>
          <h1>Всё об уходе, косметике и красоте</h1>
          <p>Разбираем составы, процедуры и уход без перегруза обещаниями. Понятные статьи, большие гайды и инструменты, которые помогают ориентироваться в beauty-теме.</p>
          <div className="hero-search-wrap">
            <SearchField value={query} onChange={setQuery} />
            {query && (
              <div className="hero-suggestions">
                {[...articles.map(a => ({title:a.title,to:`/articles/${a.slug}`})), ...ingredients.map(i => ({title:i.name,to:`/ingredients/${i.slug}`}))]
                  .filter(x => x.title.toLowerCase().includes(query.toLowerCase())).slice(0,5).map(x => <Link key={x.to} to={x.to}>{x.title}<ArrowRight size={15}/></Link>)}
              </div>
            )}
          </div>
          <div className="search-prompts"><span>Попробуйте:</span><Link to="/ingredients/retinol">Ретинол</Link><Link to="/articles/kak-vybrat-spf">Как выбрать SPF</Link><Link to="/category/skin/zhirnaya-kozha">Уход за жирной кожей</Link></div>
        </div>
        <div className="hero-media"><img src={images.hero} alt="Косметические средства и уход за кожей"/><div className="hero-note"><span>Новый гайд</span><strong>Как собрать базовый уход</strong><Link to="/guides/bazovyy-uhod">Читать <ArrowRight size={14}/></Link></div></div>
      </section>

      <section className="section-wrap section-block">
        <SectionHeading eyebrow="Навигация" title="Популярные категории" text="Начните с темы, которая интересует вас сейчас." />
        <div className="category-grid">{categories.map((item) => {
          const to = item.slug === 'ingredients' ? '/ingredients' : item.slug === 'procedures' ? '/procedures' : item.slug === 'guides' ? '/guides' : `/category/${item.slug}`;
          return <Link to={to} className="category-card" key={item.slug}><img src={item.image} alt="" loading="lazy"/><div><h3>{item.name}</h3><p>{item.description}</p><span>Смотреть раздел <ArrowRight size={14}/></span></div></Link>
        })}</div>
      </section>

      <section className="section-muted section-block"><div className="section-wrap">
        <SectionHeading eyebrow="Редакция выбирает" title="Популярное сейчас" action={<Link className="text-link" to="/articles">Все статьи <ArrowRight size={15}/></Link>} />
        <div className="articles-grid featured-grid">{articles.slice(0,4).map((article, index) => <ArticleCard key={article.slug} article={article} featured={index===0}/>)}</div>
      </div></section>

      <section className="section-wrap section-block">
        <div className="finder-panel">
          <div className="finder-copy"><p className="eyebrow">Персональный ориентир</p><h2>Найдите уход для себя</h2><p>Выберите тип кожи и основную задачу. Мы покажем материалы, с которых удобно начать.</p><div className="finder-illustration"><Sparkles/><span>2 шага</span></div></div>
          <div className="finder-form">
            <div><label>Тип кожи</label><div className="chip-row">{skinTypes.map(x => <button className={skinType===x?'chip active':'chip'} onClick={()=>setSkinType(x)} key={x}>{x}</button>)}</div></div>
            <div><label>Основная задача</label><div className="chip-row">{skinProblems.map(x => <button className={problem===x?'chip active':'chip'} onClick={()=>setProblem(x)} key={x}>{x}</button>)}</div></div>
            <Link className={`primary-btn ${!skinType || !problem ? 'soft-disabled':''}`} to={problem ? `/category/skin/${careTopicByLabel[problem]}` : skinType ? `/category/skin/${careTopicByLabel[skinType]}` : '/category/skin'}>Подобрать рекомендации <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

      <section className="ingredients-section section-block"><div className="section-wrap">
        <SectionHeading eyebrow="Beauty-энциклопедия" title="Ингредиенты косметики" text="Что делает компонент, кому подходит, с чем сочетается и где стоит быть осторожнее." action={<Link className="secondary-btn" to="/ingredients">Все ингредиенты</Link>} />
        <div className="ingredient-grid">{ingredients.slice(0,8).map(i => <IngredientCard key={i.slug} ingredient={i}/>)}</div>
      </div></section>

      {/*<AdSlot />*/}

      <section className="section-wrap section-block">
        <SectionHeading eyebrow="Сохранить в закладки" title="Beauty-гайды" text="Большие пошаговые материалы с чек-листами, схемами и короткими выводами." />
        <div className="guide-grid">{guides.map(g => <Link to={`/guides/${g.slug}`} className="guide-card" key={g.slug}><span className="guide-number">{g.number}</span><img src={g.image} alt="" loading="lazy"/><div><h3>{g.title}</h3><p>{g.description}</p><span>Открыть гайд <ArrowRight size={14}/></span></div></Link>)}</div>
      </section>

      <section className="section-muted section-block"><div className="section-wrap">
        <SectionHeading eyebrow="Свежие материалы" title="Новые статьи" />
        <div className="articles-grid">{articles.slice(2,8).map(a => <ArticleCard key={a.slug} article={a}/>)}</div>
      </div></section>

      <section className="section-wrap section-block split-section">
        <div><SectionHeading eyebrow="Подборки" title="Когда нужен быстрый список"/><div className="collection-list">
          {['10 компонентов для сухой кожи','7 ошибок при использовании кислот','Лучшие ингредиенты для кожи после 30'].map((title,i)=><Link to="/articles" key={title}><span>0{i+1}</span><h3>{title}</h3><ArrowRight/></Link>)}
        </div></div>
        <div><SectionHeading eyebrow="Интерактив" title="Beauty-тесты и инструменты"/><div className="tool-list">{tests.slice(0,4).map(t=><Link to={`/tests/${t.slug}`} key={t.slug}><Sparkles size={18}/><div><h3>{t.title}</h3><p>{t.description}</p></div><ChevronRight size={18}/></Link>)}</div></div>
      </section>

      <section className="seo-editorial"><div className="section-wrap seo-grid"><div><p className="eyebrow">BeautyGuide</p><h2>Красота — это тема, в которой особенно важны контекст и понятные объяснения</h2></div><div><p>Мы строим материалы так, чтобы от одной статьи можно было перейти к ингредиенту, затем к большому гайду, тесту или смежной теме. Это помогает не искать ответы по кусочкам и видеть всю картину ухода.</p><p>Редакционная структура BeautyGuide разделяет базовые знания, ингредиенты, процедуры, схемы ухода и прикладные материалы. Мы не заменяем консультацию врача или косметолога и отдельно отмечаем темы, где персональная рекомендация специалиста важнее универсального совета.</p></div></div></section>
    </main>
  );
}

function SkinCategoryPage() {
  const skinCategory = categories.find((item) => item.slug === 'skin') || categories[0];
  const groupLinks = [
    ...careGroups.map((group, index) => ({ number: `0${index + 1}`, title: group.title, text: group.description, href: `#${group.id}` })),
    { number: '04', title: 'Популярное', text: 'Самые востребованные материалы об активах, увлажнении, SPF и базовой схеме ухода.', href: '#popular' },
  ];
  const careArticles = articles.filter((article) => ['Уход', 'Ингредиенты'].includes(article.category));

  return <main className="section-wrap page-block">
    <Breadcrumbs items={[{label:skinCategory.name}]}/>
    <div className="category-hero"><div><p className="eyebrow">Раздел</p><h1>{skinCategory.name}</h1><p>{skinCategory.description} Выберите направление: тип кожи, конкретную задачу или формат средства. Каждый подраздел ведёт на отдельную страницу с базовой схемой, ингредиентами и связанными материалами.</p></div><img src={skinCategory.image} alt="Уход за кожей"/></div>

    <div className="subcat-grid">{groupLinks.map((item)=><a key={item.title} href={item.href}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><ArrowRight size={17}/></a>)}</div>

    <div className="care-directory">
      {careGroups.map((group) => {
        const topics = careTopics.filter((topic) => topic.group === group.id);
        return <section className="care-group" id={group.id} key={group.id}>
          <SectionHeading eyebrow="Уход за кожей" title={group.title} text={group.description}/>
          <div className="care-topic-grid">{topics.map((topic)=><Link to={`/category/skin/${topic.slug}`} className="care-topic-card" key={topic.slug}><div><span>{topic.group === 'skin-type' ? 'Тип кожи' : topic.group === 'task' ? 'Задача' : 'Средство'}</span><h3>{topic.name}</h3><p>{topic.description}</p></div><ArrowRight size={17}/></Link>)}</div>
        </section>;
      })}
    </div>

    <section id="popular" className="care-popular">
      <SectionHeading eyebrow="Чаще читают" title="Популярные материалы об уходе" text="Базовые статьи, с которых удобно начать, если пока не хочется собирать сложную рутину." action={<Link className="text-link" to="/articles">Все статьи <ArrowRight size={15}/></Link>}/>
      <div className="articles-grid">{careArticles.slice(0,6).map((article)=><ArticleCard key={article.slug} article={article}/>)}</div>
    </section>

    <section className="care-ingredients-callout">
      <div><p className="eyebrow">Энциклопедия составов</p><h2>Разобраться в ингредиентах</h2><p>Ретинол, ниацинамид, кислоты, керамиды, витамин C и увлажняющие компоненты — отдельные страницы помогают понять роль каждого ингредиента в общей схеме.</p></div>
      <Link className="secondary-btn" to="/ingredients">Открыть ингредиенты <ArrowRight size={15}/></Link>
    </section>
  </main>;
}

export function CategoryPage() {
  const { slug = 'skin' } = useParams();
  if (slug === 'skin') return <SkinCategoryPage/>;

  const category = categories.find(c=>c.slug===slug) || categories[0];
  const filtered = articles.filter(a => slug === 'hair' ? a.category==='Волосы' : slug==='makeup' ? a.category==='Макияж' : slug==='manicure' ? a.category==='Маникюр' : slug==='cosmetics' ? ['Уход','Ингредиенты'].includes(a.category) : ['Уход','Ингредиенты'].includes(a.category));
  const cards = filtered.length >= 4 ? filtered : articles.slice(0,6);
  return <main className="section-wrap page-block">
    <Breadcrumbs items={[{label:category.name}]}/>
    <div className="category-hero"><div><p className="eyebrow">Раздел</p><h1>{category.name}</h1><p>{category.description} Здесь собраны материалы для разных уровней: от базовой схемы до подробных разборов и отдельных задач.</p></div><img src={category.image} alt=""/></div>
    <div className="content-with-sidebar"><div>
      <SectionHeading title="Популярные статьи"/><div className="articles-grid two-col">{cards.slice(0,4).map(a=><ArticleCard key={a.slug} article={a}/>)}</div>
      <SectionHeading title="Новые материалы"/><div className="articles-grid two-col">{articles.slice(2,8).map(a=><ArticleCard key={a.slug} article={a}/>)}</div>
    </div><aside className="sidebar"><div className="sidebar-box"><h3>Популярное</h3>{articles.slice(0,4).map((a,i)=><Link to={`/articles/${a.slug}`} key={a.slug}><span>0{i+1}</span>{a.title}</Link>)}</div><div className="sidebar-box"><h3>Категории</h3>{categories.slice(0,6).map(c=><Link key={c.slug} to={c.slug==='ingredients'?'/ingredients':`/category/${c.slug}`}>{c.name}<ChevronRight size={14}/></Link>)}</div></aside></div>
  </main>
}

export function CareTopicPage() {
  const { topic = '' } = useParams();
  const item = careTopics.find((entry) => entry.slug === topic);
  if (!item) return <NotFoundPage/>;

  const group = careGroups.find((entry) => entry.id === item.group);
  const relatedArticles = item.articleSlugs.map((slug) => articles.find((article) => article.slug === slug)).filter(Boolean) as typeof articles;
  const relatedIngredients = item.ingredientSlugs.map((slug) => ingredients.find((ingredient) => ingredient.slug === slug)).filter(Boolean) as typeof ingredients;
  const relatedTopics = item.relatedSlugs.map((slug) => careTopics.find((entry) => entry.slug === slug)).filter(Boolean) as typeof careTopics;

  return <main className="section-wrap page-block care-topic-page">
    <Breadcrumbs items={[{label:'Уход за кожей',to:'/category/skin'},{label:group?.title || 'Уход'},{label:item.name}]}/>
    <div className="care-topic-hero">
      <div><p className="eyebrow">{group?.title}</p><h1>{item.name}</h1><p>{item.description}</p><div className="care-topic-tags">{item.keywords.slice(0,3).map((keyword)=><span key={keyword}>{keyword}</span>)}</div></div>
      <div className="care-topic-summary"><span>Коротко</span><p>{item.intro}</p></div>
    </div>

    <div className="care-topic-columns">
      <section className="care-advice-card"><span className="care-advice-number">01</span><h2>База ухода</h2><p>Сначала соберите предсказуемую основу. Это упрощает оценку новых средств и помогает не перегружать рутину.</p><ul>{item.basics.map((point)=><li key={point}><Check size={16}/><span>{point}</span></li>)}</ul></section>
      <section className="care-advice-card"><span className="care-advice-number">02</span><h2>На что смотреть</h2><p>Эти ориентиры помогут выбирать средства по роли в рутине, а не только по рекламному обещанию.</p><ul>{item.focus.map((point)=><li key={point}><Check size={16}/><span>{point}</span></li>)}</ul></section>
    </div>

    {item.slug === 'suhaya-kozha' && <section className="care-topic-copy article-content">
      <h2>Как ухаживать за сухой кожей каждый день</h2>
      <p>Сухость часто ощущается как стянутость, шелушение и повышенная чувствительность к воде, ветру или перепадам температуры. Начните с мягкого очищения без горячей воды и агрессивных отдушек: после умывания кожа не должна «скрипеть» или быстро становиться дискомфортной.</p>
      <p>Наносите увлажняющее средство на слегка влажную кожу, чтобы поддержать её водный баланс. В составе крема полезно искать глицерин, гиалуроновую кислоту, пантенол, керамиды и другие липиды: увлажнители притягивают воду, а барьерные компоненты помогают удерживать её и уменьшают ощущение сухости.</p>
      <p>Зимой и в сухом помещении коже может понадобиться более плотная текстура, а летом — лёгкая эмульсия с теми же базовыми компонентами. Новые кислоты, ретиноиды и скрабы вводите только после стабилизации ухода и по одному за раз; при жжении, трещинах или стойком покраснении лучше сделать паузу и обратиться к дерматологу.</p>
    </section>}

    {item.slug === 'zhirnaya-kozha' && <section className="care-topic-copy article-content">
      <h2>Ежедневный уход за жирной кожей</h2>
      <p>Жирный блеск связан с активностью сальных желёз, но сам по себе не означает, что коже нужно постоянное обезжиривание. Умывание «до скрипа», спиртовые лосьоны и частые матирующие процедуры могут нарушить защитный барьер, усилить чувствительность и сделать ощущение жирности ещё заметнее.</p>
      <p>Основу ухода составляет мягкое очищение утром и вечером, лёгкое увлажнение и солнцезащита в комфортной текстуре. Ищите средства с глицерином, ниацинамидом и успокаивающими компонентами; слово «некомедогенный» может быть ориентиром, но переносимость конкретной формулы важнее любого маркетингового обозначения.</p>
      <p>Если есть забитые поры или высыпания, добавляйте один актив — например, салициловую кислоту — постепенно и с небольших частот. Не пытайтесь одновременно подсушить все зоны: наблюдайте за реакцией кожи, оставляйте дни для восстановления и при болезненных или стойких высыпаниях обращайтесь к дерматологу.</p>
    </section>}

    {item.slug === 'akne' && <InfoBox title="Когда лучше обратиться к специалисту" tone="warning"><p>Если высыпания выраженные, болезненные, оставляют заметные следы или долго не меняются, косметический уход не стоит рассматривать как замену консультации дерматолога.</p></InfoBox>}

    {relatedIngredients.length > 0 && <section className="care-topic-section"><SectionHeading eyebrow="Составы" title="Ингредиенты по теме" text="Не список обязательных покупок, а ориентир по компонентам, которые часто встречаются в средствах для этой задачи."/><div className="ingredient-grid">{relatedIngredients.map((ingredient)=><IngredientCard key={ingredient.slug} ingredient={ingredient}/>)}</div></section>}

    {relatedArticles.length > 0 && <section className="care-topic-section"><SectionHeading eyebrow="Подробнее" title="Материалы по теме"/><div className="articles-grid">{relatedArticles.map((article)=><ArticleCard key={article.slug} article={article}/>)}</div></section>}

    <section className="care-topic-section"><SectionHeading eyebrow="Навигация" title="Смежные темы" text="Перейдите к соседней задаче или типу ухода, если хотите уточнить схему."/><div className="care-related-grid">{relatedTopics.map((related)=><Link to={`/category/skin/${related.slug}`} key={related.slug}><span>{careGroups.find((entry)=>entry.id===related.group)?.title}</span><h3>{related.name}</h3><p>{related.description}</p><ArrowRight size={16}/></Link>)}</div></section>
  </main>;
}

export function ArticlesPage() {
  const [q,setQ]=useState(''); const [cat,setCat]=useState('Все');
  const list=articles.filter(a=>(cat==='Все'||a.category===cat)&&a.title.toLowerCase().includes(q.toLowerCase()));
  return <main className="section-wrap page-block"><Breadcrumbs items={[{label:'Все статьи'}]}/><div className="page-intro"><p className="eyebrow">Библиотека</p><h1>Все статьи</h1><p>Материалы BeautyGuide об уходе, косметике, макияже, волосах, ногтях и beauty-процедурах.</p></div>
    <div className="filter-bar"><SearchField value={q} onChange={setQ} placeholder="Поиск по статьям"/><select value={cat} onChange={e=>setCat(e.target.value)}><option>Все</option>{[...new Set(articles.map(a=>a.category))].map(x=><option key={x}>{x}</option>)}</select><button><ListFilter size={17}/>Сначала новые</button></div>
    <div className="articles-grid">{list.map(a=><ArticleCard key={a.slug} article={a}/>)}</div><div className="pagination"><button disabled>←</button><button className="active">1</button><button>2</button><button>3</button><button>→</button></div>
  </main>
}

export function ArticlePage() {
  const { slug }=useParams(); const article=articles.find(a=>a.slug===slug)||articles[0];
  return <main className="article-page section-wrap page-block"><Breadcrumbs items={[{label:article.category,to:'/articles'},{label:article.title}]}/>
    <div className="article-header"><span className="category-label">{article.category}</span><h1>{article.title}</h1><p>{article.excerpt}</p><div className="author-row"><div className="author-avatar">АК</div><div><strong>Анна Крылова</strong><span>beauty-редактор</span></div><div className="article-dates"><span>Опубликовано: {article.date}</span><span>Обновлено: 20 сентября 2026 · {article.readTime}</span></div></div></div>
    <img className="article-hero-image" src={article.image} alt=""/>
    <div className="article-layout"><aside className="toc"><strong>Содержание</strong>{['Что это такое','Как работает','Кому подходит','Как начать использовать','С чем можно сочетать','С чем не стоит сочетать','Возможные реакции','Частые вопросы'].map((x,i)=><a href={`#s${i+1}`} key={x}>{x}</a>)}</aside>
    <article className="article-content"><InfoBox title="Коротко" tone="good"><ul><li>Начинайте с простой и понятной схемы.</li><li>Добавляйте активы постепенно, а не все сразу.</li><li>Оценивайте переносимость и состояние кожного барьера.</li><li>Днём используйте солнцезащиту.</li></ul></InfoBox>
      <p className="lead">{article.excerpt} Ниже — спокойная пошаговая схема, которая помогает понять логику ухода и не перегружать рутину.</p>
      {/*<AdSlot/>*/}
      <h2 id="s1">Что важно знать вначале</h2><p>У любого активного ухода есть контекст: тип кожи, текущая переносимость средств, частота применения и сочетание с другими компонентами. Поэтому универсальная «идеальная схема» редко работает одинаково для всех.</p>
      <h2 id="s2">Как это работает</h2><p>Оценивать средство полезнее не по отдельному обещанию на упаковке, а по роли в общей схеме ухода. База обычно включает мягкое очищение, увлажнение и солнцезащиту; активы добавляются под конкретную задачу.</p>
      <InfoBox title="Совет эксперта"><p>Меняйте один элемент рутины за раз. Так проще понять, что именно дало эффект или вызвало дискомфорт.</p></InfoBox>
      <h2 id="s3">Кому подходит</h2><p>Выбор зависит не только от формального типа кожи, но и от её текущего состояния. Например, жирная кожа тоже может быть обезвоженной и чувствительной после слишком агрессивного ухода.</p>
      <h3>На что смотреть</h3><ul><li>ощущения после умывания;</li><li>скорость появления жирного блеска;</li><li>реакцию на новые активы;</li><li>сезон и климат;</li><li>наличие регулярной солнцезащиты.</li></ul>
      {/*<AdSlot/>*/}
      <h2 id="s4">Как начать использовать</h2><p>Новый актив разумно вводить постепенно. Сначала используйте его реже, чем предполагает максимальная схема, и не меняйте одновременно остальные средства.</p>
      <div className="steps"><div><span>01</span><h3>Стабилизируйте базу</h3><p>Очищение, увлажнение и SPF должны быть комфортными сами по себе.</p></div><div><span>02</span><h3>Добавьте один актив</h3><p>Выберите компонент под главную задачу и наблюдайте за переносимостью.</p></div><div><span>03</span><h3>Корректируйте частоту</h3><p>Увеличивайте её только при отсутствии выраженного дискомфорта.</p></div></div>
      <h2 id="s5">С чем можно сочетать</h2><div className="compat-grid"><InfoBox title="Можно сочетать" tone="good"><p>Ниацинамид · гиалуроновая кислота · пептиды</p></InfoBox><InfoBox title="Лучше разводить по времени" tone="warning"><p>Сильные кислоты и несколько раздражающих активов одновременно.</p></InfoBox></div>
      <h2 id="s6">С чем не стоит сочетать</h2><p>Чем больше потенциально раздражающих средств используется одновременно, тем сложнее понять причину реакции. Для чувствительной кожи особенно полезна консервативная схема.</p>
      <h2 id="s7">Возможные реакции</h2><InfoBox title="Важно" tone="warning"><p>Стойкое жжение, выраженное покраснение, отёк или ухудшение состояния кожи — повод прекратить эксперимент и обратиться за очной профессиональной оценкой.</p></InfoBox>
      {/*<AdSlot/>*/}
      <h2 id="s8">Частые вопросы</h2><FAQ/>
    </article><aside className="article-aside">
        {/*<AdSlot tall/>*/}
        <div className="sidebar-box"><h3>Читайте также</h3>{articles.filter(a=>a.slug!==article.slug).slice(0,3).map(a=><Link to={`/articles/${a.slug}`} key={a.slug}>{a.title}<ChevronRight size={14}/></Link>)}</div></aside></div>
    <section className="related"><SectionHeading title="Вам также будет интересно"/><div className="articles-grid">{articles.filter(a=>a.slug!==article.slug).slice(0,4).map(a=><ArticleCard key={a.slug} article={a}/>)}</div><div className="tag-row"><strong>По этой теме:</strong>{article.tags.map(t=><Link to="/search" key={t}>#{t}</Link>)}</div></section>
  </main>
}

function FAQ(){const qs=['Можно ли использовать средство каждый день?','Когда ждать заметный эффект?','Можно ли сочетать несколько активов?','Что делать, если появилась сухость?','Нужен ли SPF круглый год?'];return <div className="faq">{qs.map((q,i)=><details key={q}><summary>{q}<span>+</span></summary><p>{i===4?'Для большинства активных схем дневная фотозащита особенно важна. Ориентируйтесь на условия дня и рекомендации дерматологических организаций для вашего региона.':'Частота зависит от конкретного компонента, формулы и реакции кожи. Начинать обычно удобнее с более редкого применения и постепенно оценивать переносимость.'}</p></details>)}</div>}

export function IngredientsPage(){const [q,setQ]=useState('');const [filter,setFilter]=useState('Все');const chips=['Все','Увлажнение','Анти-эйдж','Акне','Пигментация','Чувствительная кожа'];const list=ingredients.filter(i=>i.name.toLowerCase().includes(q.toLowerCase())&&(filter==='Все'||`${i.benefits.join(' ')} ${i.skin.join(' ')}`.toLowerCase().includes(filter.toLowerCase().replace('анти-эйдж','обновление').replace('акне','проблемная'))));return <main className="section-wrap page-block"><Breadcrumbs items={[{label:'Ингредиенты'}]}/><div className="page-intro wide"><p className="eyebrow">Энциклопедия</p><h1>Ингредиенты косметики</h1><p>Понятный каталог компонентов: свойства, типы кожи, концентрации, совместимость и практические схемы использования.</p></div><SearchField value={q} onChange={setQ} placeholder="Найти ингредиент"/><div className="chip-row filter-chips">{chips.map(x=><button className={filter===x?'chip active':'chip'} key={x} onClick={()=>setFilter(x)}>{x}</button>)}</div><div className="alphabet">{'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЭЮЯ'.split('').map(x=><button key={x}>{x}</button>)}</div><div className="ingredient-grid catalogue">{list.map(i=><IngredientCard key={i.slug} ingredient={i}/>)}</div></main>}

export function IngredientPage(){const {slug}=useParams();const item=ingredients.find(i=>i.slug===slug)||ingredients[1];return <main className="section-wrap page-block"><Breadcrumbs items={[{label:'Ингредиенты',to:'/ingredients'},{label:item.name}]}/><div className="ingredient-hero"><div><p className="eyebrow">Ингредиент</p><h1>{item.name}</h1><span className="latin">{item.latin}</span><p>{item.description}</p></div><div className="ingredient-facts"><div><span>Тип</span><strong>{item.kind}</strong></div><div><span>Для кожи</span><strong>{item.skin.join(' · ')}</strong></div><div><span>Основные свойства</span><strong>{item.benefits.join(' · ')}</strong></div></div></div><div className="article-layout ingredient-layout"><aside className="toc"><strong>На странице</strong>{['Что это','Как работает','Для чего используется','Кому подходит','Концентрация','Как использовать','Совместимость','Осторожность'].map((x,i)=><a href={`#i${i}`} key={x}>{x}</a>)}</aside><article className="article-content"><h2 id="i0">Что такое {item.name.toLowerCase()}</h2><p>{item.description} В косметике свойства ингредиента зависят от формулы целиком, концентрации и способа применения.</p><h2 id="i1">Как работает</h2><p>Компонент рассматривают как часть общей системы ухода. Эффект зависит от регулярности, переносимости и того, насколько базовый уход поддерживает защитный барьер кожи.</p><h2 id="i2">Для чего используется</h2><ul>{item.benefits.map(x=><li key={x}>{x}</li>)}</ul><h2 id="i3">Кому подходит</h2><p>Чаще всего ориентируются на задачи кожи, а не только на её тип. В карточке выше перечислены наиболее типичные сценарии применения.</p>
  {/*<AdSlot/>*/}
  <h2 id="i4">Какая концентрация нужна</h2><p>Рабочая концентрация зависит от конкретного компонента и продукта. Более высокая цифра не означает автоматически более выраженный или более безопасный результат.</p><h2 id="i5">Как использовать</h2><p>Добавляйте средство постепенно и соблюдайте инструкцию производителя. При использовании активов, повышающих чувствительность к солнцу, уделяйте особое внимание фотозащите.</p><h2 id="i6">Совместимость ингредиентов</h2><div className="compat-table"><div><span>{item.name} + ниацинамид</span><strong><Check size={16}/>совместимы</strong></div><div><span>{item.name} + витамин C</span><strong><Check size={16}/>обычно совместимы</strong></div><div><span>{item.name} + кислоты</span><strong className="caution">△ оценивать переносимость</strong></div></div><h2 id="i7">Побочные эффекты и осторожность</h2><InfoBox title="Если кожа реагирует" tone="warning"><p>При выраженном или сохраняющемся раздражении прекратите использование нового средства. При необычной реакции лучше обратиться к врачу.</p></InfoBox><FAQ/></article></div><section className="related"><SectionHeading title="Похожие ингредиенты"/><div className="ingredient-grid">{ingredients.filter(i=>i.slug!==item.slug).slice(0,4).map(i=><IngredientCard key={i.slug} ingredient={i}/>)}</div></section></main>}

export function ProceduresPage(){return <main className="section-wrap page-block"><Breadcrumbs items={[{label:'Процедуры'}]}/><div className="page-intro"><p className="eyebrow">Beauty-процедуры</p><h1>Процедуры для лица, волос и тела</h1><p>Что происходит на процедуре, как подготовиться, как проходит восстановление и какие вопросы стоит задать специалисту заранее.</p></div><div className="chip-row filter-chips">{['Для лица','Для волос','Для тела','Инъекционные','Аппаратные','Домашний уход'].map(x=><button className="chip" key={x}>{x}</button>)}</div><div className="procedure-grid">{procedures.map(p=><Link to={`/procedures/${p.slug}`} key={p.slug} className="procedure-card"><img src={p.image} alt=""/><div><span>{p.type}</span><h3>{p.title}</h3><p>{p.excerpt}</p><b>Подробнее <ArrowRight size={14}/></b></div></Link>)}</div></main>}

export function ProcedurePage(){const {slug}=useParams();const p=procedures.find(x=>x.slug===slug)||procedures[0];return <main className="section-wrap page-block"><Breadcrumbs items={[{label:'Процедуры',to:'/procedures'},{label:p.title}]}/><div className="procedure-hero"><img src={p.image} alt=""/><div><span className="category-label">{p.type}</span><h1>{p.title}</h1><p>{p.excerpt}</p><div className="procedure-note"><ShieldCheck/><span>Информация носит ознакомительный характер. Для процедур с медицинскими ограничениями ориентируйтесь на очную консультацию квалифицированного специалиста.</span></div></div></div><article className="article-content centered"><h2>Что это</h2><p>{p.title} — процедура, результат и переносимость которой зависят от исходного состояния, оборудования или используемой техники и квалификации специалиста.</p><h2>Как проходит</h2><p>До начала стоит обсудить ожидания, подготовку, ограничения и план восстановления. Конкретный протокол зависит от процедуры и индивидуальной ситуации.</p><h2>Сколько процедур необходимо</h2><p>Количество сеансов нельзя корректно определить только по общему описанию: оно зависит от цели, используемой технологии и реакции организма.</p>
  {/*<AdSlot/>*/}
  <h2>Подготовка</h2><ul><li>уточнить ограничения и противопоказания;</li><li>сообщить специалисту о принимаемых препаратах и недавних процедурах;</li><li>следовать инструкции клиники или мастера.</li></ul><h2>Уход после процедуры</h2><p>Первые рекомендации даёт специалист, который выполнял процедуру. Для многих процедур важны мягкий уход, защита от солнца и временный отказ от раздражающих активов.</p><h2>Противопоказания</h2><p>Они зависят от конкретной технологии. Не используйте универсальные списки как замену медицинскому опросу перед процедурой.</p><h2>Частые вопросы</h2><FAQ/></article><section className="related"><SectionHeading title="Похожие процедуры"/><div className="procedure-grid">{procedures.filter(x=>x.slug!==p.slug).slice(0,3).map(x=><Link to={`/procedures/${x.slug}`} key={x.slug} className="procedure-card"><img src={x.image} alt=""/><div><span>{x.type}</span><h3>{x.title}</h3><p>{x.excerpt}</p></div></Link>)}</div></section></main>}

export function GuidesPage(){return <main className="section-wrap page-block"><Breadcrumbs items={[{label:'Гайды'}]}/><div className="page-intro"><p className="eyebrow">Пошагово</p><h1>Beauty-гайды</h1><p>Большие структурированные материалы для тех, кто хочет разобраться в теме последовательно — без десятка открытых вкладок.</p></div><div className="guide-grid large">{guides.map(g=><Link to={`/guides/${g.slug}`} className="guide-card" key={g.slug}><span className="guide-number">{g.number}</span><img src={g.image} alt=""/><div><h3>{g.title}</h3><p>{g.description}</p><span>Открыть гайд <ArrowRight size={14}/></span></div></Link>)}</div></main>}

export function GuidePage(){const {slug}=useParams();const g=guides.find(x=>x.slug===slug)||guides[0];return <main className="guide-page"><div className="section-wrap page-block"><Breadcrumbs items={[{label:'Гайды',to:'/guides'},{label:g.title}]}/><div className="guide-hero"><div><span className="guide-number big">{g.number}</span><p className="eyebrow">Большой beauty-гайд</p><h1>{g.title}</h1><p>{g.description}</p><div className="progress-line"><span style={{width:'35%'}}></span></div><small>4 главы · 18 минут</small></div><img src={g.image} alt=""/></div><div className="guide-chapters"><div className="guide-toc"><strong>В этом гайде</strong>{['Определяем отправную точку','Собираем базовый уход','Добавляем активы под задачу','Проверяем схему и корректируем'].map((x,i)=><a href={`#g${i}`} key={x}><span>0{i+1}</span>{x}</a>)}</div><article className="article-content"><h2 id="g0">1. Определяем отправную точку</h2><p>Начните не со списка модных ингредиентов, а с наблюдений за кожей: как она чувствует себя после умывания, где появляется блеск, есть ли стянутость и какие средства уже используются.</p><div className="checklist"><h3>Мини-чеклист</h3>{['Запишите текущие средства','Определите одну главную задачу','Уберите дублирующие активы','Оцените комфорт базового ухода'].map(x=><label key={x}><input type="checkbox"/>{x}</label>)}</div><h2 id="g1">2. Собираем базовый уход</h2><div className="steps"><div><span>01</span><h3>Очищение</h3><p>Мягкое и достаточное для вашей схемы.</p></div><div><span>02</span><h3>Увлажнение</h3><p>Текстура подбирается по комфорту.</p></div><div><span>03</span><h3>SPF</h3><p>Особенно важен при активном уходе.</p></div></div>
  {/*<AdSlot/>*/}
  <h2 id="g2">3. Добавляем активы под задачу</h2><p>Добавляйте один компонент за раз и дайте схеме время. Так проще оценить результат и переносимость.</p><InfoBox title="Правило гида" tone="good"><p>Сначала стабильная база, затем один целевой актив. Сложная рутина не обязательно эффективнее простой.</p></InfoBox><h2 id="g3">4. Проверяем схему и корректируем</h2><p>Через несколько недель оцените комфорт, регулярность и то, насколько схема реально вписывается в жизнь. Уход должен быть выполнимым, а не идеальным на бумаге.</p><FAQ/></article></div><section className="related"><SectionHeading title="Другие гайды"/><div className="guide-grid">{guides.filter(x=>x.slug!==g.slug).slice(0,3).map(x=><Link to={`/guides/${x.slug}`} className="guide-card" key={x.slug}><span className="guide-number">{x.number}</span><img src={x.image} alt=""/><div><h3>{x.title}</h3><p>{x.description}</p></div></Link>)}</div></section></div></main>}

export function TestsPage(){return <main className="section-wrap page-block"><Breadcrumbs items={[{label:'Тесты'}]}/><div className="page-intro"><p className="eyebrow">Интерактив</p><h1>Beauty-тесты и инструменты</h1><p>Небольшие интерактивные помощники, которые дают ориентир и ведут к подробным материалам по теме.</p></div><div className="tests-grid">{tests.map((t,i)=><Link to={`/tests/${t.slug}`} key={t.slug}><span className="test-icon">{i%2?<FlaskConical/>:<Sparkles/>}</span><h3>{t.title}</h3><p>{t.description}</p><b>Начать <ArrowRight size={14}/></b></Link>)}</div></main>}

export function TestPage(){const {slug}=useParams();const t=tests.find(x=>x.slug===slug)||tests[0];const [step,setStep]=useState(0);const [answer,setAnswer]=useState('');const questions=[{q:'Как чувствует себя кожа после умывания?',a:['Комфортно','Появляется сухость','Быстро появляется жирный блеск','Разные зоны ведут себя по-разному']},{q:'Что происходит с кожей к середине дня?',a:['Почти не меняется','Становится сухой','Блестит почти всё лицо','Блестит в основном T-зона']},{q:'Как кожа реагирует на плотные кремы?',a:['Комфортно','Впитывает очень быстро','Часто кажутся тяжёлыми','Зависит от зоны лица']}];if(step>=questions.length)return <main className="section-wrap test-page"><Breadcrumbs items={[{label:'Тесты',to:'/tests'},{label:t.title}]}/><div className="test-result"><div className="result-icon"><Star/></div><p className="eyebrow">Результат</p><h1>Ваш ориентир — комбинированная кожа</h1><p>Разные зоны могут вести себя по-разному: T-зона чаще становится жирнее, а щёки остаются нормальными или склонными к сухости.</p><div className="result-care"><h2>С чего начать</h2><ul><li>мягкое очищение без ощущения стянутости;</li><li>лёгкое увлажнение на всё лицо;</li><li>активы добавлять под конкретную задачу;</li><li>ежедневная фотозащита по условиям дня.</li></ul></div><Link className="primary-btn" to="/category/skin">Материалы для комбинированной кожи <ArrowRight size={16}/></Link></div></main>;
const q=questions[step];return <main className="section-wrap test-page"><Breadcrumbs items={[{label:'Тесты',to:'/tests'},{label:t.title}]}/><div className="test-card"><div className="test-progress"><span>{step+1} / {questions.length}</span><div><i style={{width:`${((step+1)/questions.length)*100}%`}}></i></div></div><p className="eyebrow">{t.title}</p><h1>{q.q}</h1><div className="answer-list">{q.a.map(a=><button onClick={()=>setAnswer(a)} className={answer===a?'active':''} key={a}><span>{answer===a?<Check size={16}/>:''}</span>{a}</button>)}</div><button className="primary-btn" disabled={!answer} onClick={()=>{setStep(s=>s+1);setAnswer('')}}>Продолжить <ArrowRight size={16}/></button></div></main>}

export function SearchPage(){const [params]=useSearchParams();const [q,setQ]=useState(params.get('q')||'');const lower=q.toLowerCase();const resultArticles=useMemo(()=>articles.filter(a=>!q||`${a.title} ${a.excerpt}`.toLowerCase().includes(lower)),[q,lower]);const resultIng=useMemo(()=>ingredients.filter(i=>!q||`${i.name} ${i.description}`.toLowerCase().includes(lower)),[q,lower]);return <main className="section-wrap page-block"><Breadcrumbs items={[{label:'Поиск'}]}/><div className="page-intro"><p className="eyebrow">Поиск по BeautyGuide</p><h1>Что вы хотите узнать?</h1></div><SearchField value={q} onChange={setQ} placeholder="Например, ретинол"/><div className="search-results"><section><div className="search-section-title"><h2>Статьи</h2><span>{resultArticles.length}</span></div>{resultArticles.slice(0,5).map(a=><Link to={`/articles/${a.slug}`} key={a.slug}><span>{a.category}</span><div><h3>{a.title}</h3><p>{a.excerpt}</p></div><ArrowRight/></Link>)}</section><section><div className="search-section-title"><h2>Ингредиенты</h2><span>{resultIng.length}</span></div>{resultIng.slice(0,5).map(i=><Link to={`/ingredients/${i.slug}`} key={i.slug}><span>Ингредиент</span><div><h3>{i.name}</h3><p>{i.description}</p></div><ArrowRight/></Link>)}</section></div></main>}

export function NotFoundPage(){return <main className="section-wrap not-found"><div><span>404</span><h1>Похоже, эта страница исчезла</h1><p>Попробуйте поиск или вернитесь в один из популярных разделов BeautyGuide.</p><div className="not-found-search"><Search size={19}/><Link to="/search">Найти материал</Link></div><div className="tag-row"><Link to="/category/skin">Уход</Link><Link to="/ingredients">Ингредиенты</Link><Link to="/guides">Гайды</Link><Link to="/tests">Тесты</Link></div></div></main>}
