import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  const shellRef = useRef(null);

  useGSAP(() => {
    const shell = shellRef.current;
    if (!shell) return undefined;

    gsap.fromTo(
      shell.querySelectorAll('[data-gsap-reveal]'),
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: shell,
          start: 'top 78%',
          once: true,
        },
      }
    );

    gsap.utils.toArray('.page-shell__orb').forEach((orb, index) => {
      gsap.to(orb, {
        y: index % 2 === 0 ? 70 : -70,
        x: index === 0 ? 30 : -30,
        ease: 'none',
        scrollTrigger: {
          trigger: shell,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.4,
        },
      });
    });

    gsap.to('.page-shell__beam', {
      y: 50,
      scale: 1.1,
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: shell,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.6,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars?.trigger === shell) {
          trigger.kill();
        }
      });
    };
  }, { scope: shellRef });

  return (
    <div ref={shellRef} className={`page-shell page-shell--${variant} relative min-h-[calc(100vh-4rem)] overflow-hidden`}>
      <div className="page-shell__gradient" aria-hidden="true" />
      <div className="page-shell__mesh" aria-hidden="true" />
      <div className="page-shell__noise" aria-hidden="true" />
      <div className="page-shell__grid" aria-hidden="true" />
      <div className="page-shell__beam" aria-hidden="true" />
      <div className="page-shell__orb page-shell__orb--1" aria-hidden="true" />
      <div className="page-shell__orb page-shell__orb--2" aria-hidden="true" />
      <div className="page-shell__orb page-shell__orb--3" aria-hidden="true" />

      <div data-gsap-reveal className="relative z-10 py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
