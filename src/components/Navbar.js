import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    setLangOpen(false);
  };

  const currentLangCode = (i18n.resolvedLanguage || i18n.language || 'fr').split('-')[0];

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const currentLanguage = languages.find((lang) => lang.code === currentLangCode) || languages[0];
  const navItems = ['home', 'about', 'projects', 'services', 'contact'];

  return (
    <nav className="nav-glass sticky top-0 z-50 px-4 sm:px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="font-display font-bold text-lg sm:text-xl tracking-tight">
          <span className="gradient-text">ZANGO QUENTIN</span>
        </NavLink>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={item === 'home' ? '/' : `/${item}`}
                className={({ isActive }) =>
                  `nav-link-futuristic ${isActive ? 'active' : ''}`
                }
              >
                {t(`common.${item}`)}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
            aria-label="Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-700/50 bg-white/5 hover:border-cyan-500/30 transition-colors"
            >
              <span className="text-lg" aria-hidden="true">{currentLanguage.flag}</span>
              <span className="text-sm text-slate-300 hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
            </button>
            <div
              className={`absolute right-0 mt-2 w-40 rounded-xl overflow-hidden border border-slate-700/50 bg-slate-900/95 backdrop-blur-xl shadow-2xl z-50 transition-all duration-200 ${
                langOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-2 hover:bg-white/5 ${
                    currentLangCode === lang.code ? 'text-cyan-400 bg-cyan-500/10' : 'text-slate-300'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-slate-700/50 flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item === 'home' ? '/' : `/${item}`}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `nav-link-futuristic block ${isActive ? 'active' : ''}`
              }
            >
              {t(`common.${item}`)}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
