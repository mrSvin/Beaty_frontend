import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from './components/SEO';
import { Layout } from './beauty/components';
import { ArticlePage, ArticlesPage, CategoryPage, GuidePage, GuidesPage, HomePage, IngredientPage, IngredientsPage, NotFoundPage, ProcedurePage, ProceduresPage, SearchPage, TestPage, TestsPage } from './beauty/pages';

export function AppContent() {
  const location = useLocation();
  useEffect(() => { if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' }); }, [location.pathname]);
  return <>
    <SEO />
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/ingredients" element={<IngredientsPage />} />
        <Route path="/ingredients/:slug" element={<IngredientPage />} />
        <Route path="/procedures" element={<ProceduresPage />} />
        <Route path="/procedures/:slug" element={<ProcedurePage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/guides/:slug" element={<GuidePage />} />
        <Route path="/tests" element={<TestsPage />} />
        <Route path="/tests/:slug" element={<TestPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  </>;
}

export default function App() { return <BrowserRouter><AppContent /></BrowserRouter>; }
