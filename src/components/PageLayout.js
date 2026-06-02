import React from 'react';
import { useLocation } from 'react-router-dom';

const PAGE_VARIANTS = {
  '/': 'home',
  '/about': 'about',
  '/projects': 'projects',
  '/services': 'services',
  '/contact': 'contact',
};

export default function PageLayout({ children }) {
  const { pathname } = useLocation();
  const variant = PAGE_VARIANTS[pathname] || 'home';

  return (
    <div className={`page-shell page-shell--${variant} relative min-h-[calc(100vh-4rem)] overflow-hidden`}>
      <div className="page-shell__gradient" aria-hidden="true" />
      <div className="page-shell__mesh" aria-hidden="true" />
      <div className="page-shell__noise" aria-hidden="true" />
      <div className="page-shell__grid" aria-hidden="true" />
      <div className="page-shell__beam" aria-hidden="true" />
      <div className="page-shell__orb page-shell__orb--1" aria-hidden="true" />
      <div className="page-shell__orb page-shell__orb--2" aria-hidden="true" />
      <div className="page-shell__orb page-shell__orb--3" aria-hidden="true" />

      <div className="relative z-10 py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
