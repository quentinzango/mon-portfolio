/** import logo from './logo.svg';*/
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import PageLayout from "./components/PageLayout";

import './App.css';

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Service = lazy(() => import("./pages/Service"));

const PAGE_META = {
  '/': {
    title: 'Zango Quentin | Développeur Full Stack & Designer Web',
    description: 'Portfolio de Quentin Zango, développeur full stack, créatif digital et intégrateur web spécialisé en React, Python et design d’expérience.',
  },
  '/about': {
    title: 'À propos | Quentin Zango',
    description: 'Découvrez le parcours, les compétences et l’expertise de Quentin Zango en développement web, mobile et design.',
  },
  '/projects': {
    title: 'Projets | Quentin Zango',
    description: 'Consultez les projets web et applications développés par Quentin Zango : interfaces, dashboards, apps et solutions digitales.',
  },
  '/services': {
    title: 'Services | Quentin Zango',
    description: 'Services de développement web, design UX/UI, intégration et création d’applications sur mesure pour les entreprises.',
  },
  '/contact': {
    title: 'Contact | Quentin Zango',
    description: 'Contactez Quentin Zango pour un projet web, un site vitrine, une application ou un accompagnement créatif.',
  },
};

function AppShell() {
  const location = useLocation();

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const pageMeta = PAGE_META[location.pathname] || PAGE_META['/'];

    document.title = pageMeta.title;
    if (metaDescription) {
      metaDescription.setAttribute('content', pageMeta.description);
    }
    if (ogTitle) {
      ogTitle.setAttribute('content', pageMeta.title);
    }
    if (ogDescription) {
      ogDescription.setAttribute('content', pageMeta.description);
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <PageLayout>
        <main id="main-content" aria-label="Contenu principal">
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-theme-muted">Chargement...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Service />} />
            </Routes>
          </Suspense>
        </main>
      </PageLayout>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
