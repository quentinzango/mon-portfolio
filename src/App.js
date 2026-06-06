/** import logo from './logo.svg';*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import PageLayout from "./components/PageLayout";

import './App.css';

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Service = lazy(() => import("./pages/Service"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <PageLayout>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-theme-muted">Chargement...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Service />} />
          </Routes>
        </Suspense>
      </PageLayout>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
