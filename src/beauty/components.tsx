import { ChevronDown, Clock3, Heart, Menu, Search, Sparkles, X } from 'lucide-react';
import { useEffect, useState, type ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { articles, careGroups, careTopics, hairGroups, hairTopics, ingredients } from './content';

export function Logo() {
  return (
    <Link to="/" className="brand" aria-label="BeautyGuide — на главную">
      <span className="brand-mark">B</span>
      <span>BeautyGuide</span>
    </Link>
  );
}

const megaGroups = careGroups.map((group) => ({
  title: group.title,
  items: careTopics.filter((item) => item.group === group.id),
}));

const hairMegaGroups = hairGroups.map((group) => ({
  title: group.title,
  items: hairTopics.filter((item) => item.group === group.id),
}));

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [hairMegaOpen, setHairMegaOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [mobileOpen]);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Основная навигация">
            <div className="mega-wrap" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
              <NavLink to="/category/skin">Кожа <ChevronDown size={14} /></NavLink>
              {megaOpen && (
                <div className="mega-menu">
                  <div className="mega-grid">
                    {megaGroups.map((group) => (
                      <div key={group.title}>
                        <p className="mega-title">{group.title}</p>
                        {group.items.map((item) => <Link key={item.slug} to={`/category/skin/${item.slug}`}>{item.name}</Link>)}
                      </div>
                    ))}
                    <div>
                      <p className="mega-title">Популярное</p>
                      {articles.slice(0, 3).map((item) => <Link key={item.slug} className="mega-feature" to={`/articles/${item.slug}`}>{item.title}</Link>)}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="mega-wrap" onMouseEnter={() => setHairMegaOpen(true)} onMouseLeave={() => setHairMegaOpen(false)}>
              <NavLink to="/category/hair">Волосы <ChevronDown size={14} /></NavLink>
              {hairMegaOpen && (
                <div className="mega-menu">
                  <div className="mega-grid">
                    {hairMegaGroups.map((group) => (
                      <div key={group.title}>
                        <p className="mega-title">{group.title}</p>
                        {group.items.map((item) => <Link key={item.slug} to={`/category/hair/${item.slug}`}>{item.name}</Link>)}
                      </div>
                    ))}
                    <div>
                      <p className="mega-title">С чего начать</p>
                      {hairTopics.slice(0, 3).map((item) => <Link key={item.slug} className="mega-feature" to={`/category/hair/${item.slug}`}>{item.name}</Link>)}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <NavLink to="/category/makeup">Макияж</NavLink>
            <NavLink to="/category/manicure">Маникюр</NavLink>
            <NavLink to="/category/cosmetics">Косметика</NavLink>
            <NavLink to="/ingredients">Ингредиенты</NavLink>
            <NavLink to="/procedures">Процедуры</NavLink>
            <NavLink to="/guides">Гайды</NavLink>
            <NavLink to="/tests">Тесты</NavLink>
          </nav>
          <div className="header-actions">
            <Link to="/search" className="icon-btn" aria-label="Поиск"><Search size={19} /></Link>
            <button type="button" className="icon-btn desktop-only" aria-label="Избранное"><Heart size={19} /></button>
            <button type="button" className="icon-btn mobile-only" onClick={() => setMobileOpen(true)} aria-label="Открыть меню" aria-expanded={mobileOpen}><Menu size={21} /></button>
          </div>
        </div>
      </header>
      {mobileOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Мобильное меню">
          <div className="mobile-drawer-head"><Logo /><button type="button" className="icon-btn" onClick={() => setMobileOpen(false)} aria-label="Закрыть меню"><X size={22} /></button></div>
          <Link className="mobile-search" to="/search" onClick={() => setMobileOpen(false)}><Search size={18} /> Что вы хотите узнать?</Link>
          <nav>
            {[['/category/skin','Кожа'],['/category/hair','Волосы'],['/category/makeup','Макияж'],['/category/manicure','Маникюр'],['/category/cosmetics','Косметика'],['/ingredients','Ингредиенты'],['/procedures','Процедуры'],['/guides','Гайды'],['/tests','Тесты']].map(([to,label]) => (
              <Link key={to} to={to} onClick={() => setMobileOpen(false)}>{label}<span>→</span></Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand"><Logo /><p>Большая взаимосвязанная энциклопедия красоты: уход, косметика, ингредиенты, процедуры и понятные гайды.</p></div>
        <div><h3>Разделы</h3><Link to="/category/skin">Кожа</Link><Link to="/category/hair">Волосы</Link><Link to="/category/makeup">Макияж</Link><Link to="/category/cosmetics">Косметика</Link></div>
        <div><h3>Полезное</h3><Link to="/guides">Гайды</Link><Link to="/ingredients">Ингредиенты</Link><Link to="/procedures">Процедуры</Link><Link to="/tests">Тесты</Link></div>
        <div><h3>О проекте</h3><a href="#about">О нас</a><a href="#editorial">Редакционная политика</a><a href="mailto:hello@simbeauty.ru">Контакты</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 BeautyGuide</span><span>Политика конфиденциальности · Пользовательское соглашение</span></div>
    </footer>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return <div className="breadcrumbs"><Link to="/">Главная</Link>{items.map((item, i) => <span key={`${item.label}-${i}`}>/ {item.to ? <Link to={item.to}>{item.label}</Link> : item.label}</span>)}</div>;
}

export function SectionHeading({ eyebrow, title, text, action }: { eyebrow?: string; title: string; text?: string; action?: ReactNode }) {
  return <div className="section-heading"><div><>{eyebrow && <p className="eyebrow">{eyebrow}</p>}</><h2>{title}</h2>{text && <p>{text}</p>}</div>{action}</div>;
}

export function ArticleCard({ article, featured = false }: { article: (typeof articles)[number]; featured?: boolean }) {
  return (
    <Link to={`/articles/${article.slug}`} className={`article-card ${featured ? 'featured' : ''}`}>
      <div className="card-image"><img src={article.image} alt="" loading="lazy" /></div>
      <div className="card-body"><span className="category-label">{article.category}</span><h3>{article.title}</h3><p>{article.excerpt}</p><div className="card-meta"><span><Clock3 size={14} />{article.readTime}</span><span>{article.date}</span></div></div>
    </Link>
  );
}

export function IngredientCard({ ingredient }: { ingredient: (typeof ingredients)[number] }) {
  return (
    <Link to={`/ingredients/${ingredient.slug}`} className="ingredient-card">
      <div className="ingredient-letter">{ingredient.name[0]}</div>
      <div><span>{ingredient.latin}</span><h3>{ingredient.name}</h3><p>{ingredient.description}</p></div><span className="ingredient-arrow">→</span>
    </Link>
  );
}

export function AdSlot({ label = 'Реклама', tall = false }: { label?: string; tall?: boolean }) {
  return <div className={`ad-slot ${tall ? 'tall' : ''}`}><span>{label}</span><small>место для рекламного блока</small></div>;
}

export function InfoBox({ title, children, tone = 'neutral' }: { title: string; children: ReactNode; tone?: 'neutral' | 'good' | 'warning' }) {
  return <div className={`info-box ${tone}`}><strong>{title}</strong><div>{children}</div></div>;
}

export function SearchField({ value, onChange, placeholder = 'Что вы хотите узнать?' }: { value: string; onChange: (value: string) => void; placeholder?: string }) {
  return <label className="search-field"><Search size={20} /><input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} /></label>;
}

export function Badge({ children }: { children: ReactNode }) { return <span className="badge"><Sparkles size={13} />{children}</span>; }
