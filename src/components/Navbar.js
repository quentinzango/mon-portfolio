import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import frFlag from '../assets/fr-flag.jpg';
import usFlag from '../assets/us-flag.jpg';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Fermer le menu déroulant quand on clique en dehors
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const languages = [
    { code: 'fr', name: 'Français', flag: frFlag },
    { code: 'en', name: 'English', flag: usFlag }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Animation pour les liens de la navbar
  const navItems = ['home', 'about', 'projects', 'services', 'gallery', 'blog', 'contact'];

  return (
    <nav className="bg-gray-800 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">ZANGO QUENTIN</h1>
      <div className="flex items-center space-x-6">
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <div key={item} className="group relative overflow-hidden">
              <NavLink 
                to={item === 'home' ? '/' : `/${item}`}
                className={({ isActive }) => 
                  `nav-link px-3 py-2 rounded-md text-sm font-medium ${
                    isActive 
                      ? 'bg-gray-900 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`
                }
              >
                {t(`common.${item}`)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            </div>
          ))}
        </div>

        {/* Menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Sélecteur de langue avec menu déroulant */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 focus:outline-none group"
          >
            <img 
              src={currentLanguage.flag} 
              alt={currentLanguage.name} 
              className="w-6 h-4 rounded-sm"
            />
            <span className="text-sm hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Menu déroulant */}
          <div 
            className={`absolute right-0 mt-2 w-40 bg-gray-700 rounded-md shadow-lg overflow-hidden transition-all duration-200 ease-in-out z-50 ${
              isOpen 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-2 hover:bg-gray-600 transition-colors duration-200 ${
                  i18n.language === lang.code ? 'bg-gray-600' : ''
                }`}
              >
                <img 
                  src={lang.flag} 
                  alt={lang.name} 
                  className="w-6 h-4 rounded-sm"
                />
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}