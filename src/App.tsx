import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SolutionPage from './pages/SolutionPage';
import IndustryPage from './pages/IndustryPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ResourcesPage from './pages/ResourcesPage';
import GuidePage from './pages/GuidePage';
import RentalPage from './pages/RentalPage';

type PageKey =
  | 'home'
  | 'solution'
  | 'industry'
  | 'projects'
  | 'project'
  | 'about'
  | 'contact'
  | 'products'
  | 'product'
  | 'resources'
  | 'guide'
  | 'rental';

interface PageState {
  page: PageKey;
  id?: string;
}

const pageTitles: Record<PageKey, string> = {
  home: 'PCP Group — Industrial Environmental Solutions',
  solution: 'Solutions — PCP Group',
  industry: 'Industries — PCP Group',
  projects: 'Projects — PCP Group',
  project: 'Project — PCP Group',
  about: 'About — PCP Group',
  contact: 'Contact an Engineer — PCP Group',
  products: 'Products — PCP Group',
  product: 'Product — PCP Group',
  resources: 'Resources — PCP Group',
  guide: 'Guide — PCP Group',
  rental: 'Equipment Hire — PCP Group',
};

function App() {
  const [current, setCurrent] = useState<PageState>({ page: 'home' });

  const navigate = (page: string, id?: string) => {
    const state: PageState = { page: page as PageKey, id };
    window.history.pushState(state, '', id ? `/${page}/${id}` : `/${page === 'home' ? '' : page}`);
    setCurrent(state);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const onPop = (e: PopStateEvent) => {
      const state: PageState = e.state ?? { page: 'home' };
      setCurrent(state);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    document.title = pageTitles[current.page] ?? 'PCP Group';
  }, [current]);

  const renderPage = () => {
    switch (current.page) {
      case 'home':
        return <Home onNavigate={navigate} />;
      case 'solution':
        return <SolutionPage id={current.id ?? 'dust'} onNavigate={navigate} />;
      case 'industry':
        return <IndustryPage id={current.id ?? 'ports'} onNavigate={navigate} />;
      case 'projects':
        return <ProjectsPage onNavigate={navigate} />;
      case 'project':
        return <ProjectDetailPage id={current.id ?? ''} onNavigate={navigate} />;
      case 'about':
        return <AboutPage onNavigate={navigate} />;
      case 'contact':
        return <ContactPage onNavigate={navigate} />;
      case 'products':
        return <ProductsPage onNavigate={navigate} />;
      case 'product':
        return <ProductDetailPage id={current.id ?? ''} onNavigate={navigate} />;
      case 'resources':
        return <ResourcesPage onNavigate={navigate} section={current.id} />;
      case 'guide':
        return <GuidePage id={current.id ?? ''} onNavigate={navigate} />;
      case 'rental':
        return <RentalPage onNavigate={navigate} />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      <Navbar onNavigate={navigate} currentPage={current.page} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
