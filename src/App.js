/** import logo from './logo.svg';*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Galery from "./pages/Galery";
import Blog from "./pages/Blog";
import Service from "./pages/Service";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Service />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
