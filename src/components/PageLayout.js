import React from 'react';

/**
 * Enveloppe toutes les pages avec un fond cohérent : dégradé doux,
 * motifs géométriques et halos colorés (évite le blanc plat).
 */
export default function PageLayout({ children }) {
  return (
    <div className="page-shell relative min-h-[calc(100vh-4rem)] overflow-hidden">
      <div className="page-shell__gradient" aria-hidden="true" />
      <div className="page-shell__mesh" aria-hidden="true" />
      <div className="page-shell__dots" aria-hidden="true" />
      <div className="page-shell__grid" aria-hidden="true" />
      <div className="page-shell__orb page-shell__orb--1" aria-hidden="true" />
      <div className="page-shell__orb page-shell__orb--2" aria-hidden="true" />
      <div className="page-shell__orb page-shell__orb--3" aria-hidden="true" />

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
