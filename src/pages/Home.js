import React, { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import MagneticButton from '../components/MagneticButton';
import im1 from '../assets/im1.png';
import im2 from '../assets/im2.png';
import im3 from '../assets/im3.jpg';
import ims from '../assets/ims.png';
import im6 from '../assets/im6.png';
import im13 from '../assets/im13.png';
import imc from '../assets/imc.png';
import imv from '../assets/imv.png';
import imn from '../assets/imn.png';
import imq from '../assets/imq.png';
const heroImage = im13;

const Home = () => {
  const { t, i18n } = useTranslation();
  const [openSkillCategory, setOpenSkillCategory] = useState('languages');

  const skillCategories = useMemo(
    () => [
      {
        id: 'languages',
        title: t('home.skills.categories.languages.title'),
        icon: '💻',
        items: t('home.skills.categories.languages.items', { returnObjects: true }),
      },
      {
        id: 'frameworks',
        title: t('home.skills.categories.frameworks.title'),
        icon: '🧩',
        items: t('home.skills.categories.frameworks.items', { returnObjects: true }),
      },
      {
        id: 'sgbd',
        title: t('home.skills.categories.sgbd.title'),
        icon: '🗄️',
        items: t('home.skills.categories.sgbd.items', { returnObjects: true }),
      },
      {
        id: 'third-party',
        title: t('home.skills.categories.third-party.title'),
        icon: '🤝',
        items: t('home.skills.categories.third-party.items', { returnObjects: true }),
      },
    ],
    [t, i18n.language]
  );

  const [selectedDesign, setSelectedDesign] = useState(null);

  const activeCategory = skillCategories.find((c) => c.id === openSkillCategory) || skillCategories[0];

  const graphicDesignItems = useMemo(
    () => [
      { src: im1, alt: 'Affiche créative', title: t('home.graphicDesignItems.0', 'Affiche créative & branding') },
      { src: im2, alt: 'Illustration digitale', title: t('home.graphicDesignItems.1', 'Illustration digitale moderne') },
      { src: im3, alt: 'Identité visuelle', title: t('home.graphicDesignItems.2', 'Identité visuelle impactante') },
      { src: im6, alt: 'Packaging design', title: t('home.graphicDesignItems.3', 'Packaging design premium') },
      { src: ims, alt: 'Branding', title: t('home.graphicDesignItems.4', 'Branding & direction artistique') },
      { src: ims, alt: 'Design éditorial', title: t('home.graphicDesignItems.5', 'Design éditorial et mise en page') },
      { src: imc, alt: 'Motion design', title: t('home.graphicDesignItems.6', 'Concept motion design') },
      { src: imv, alt: 'Campagne sociale', title: t('home.graphicDesignItems.7', 'Visuel de campagne sociale') },
      { src: imn, alt: 'Web design', title: t('home.graphicDesignItems.8', 'Design web responsive') },
      { src: imq, alt: 'Visuel publicitaire', title: t('home.graphicDesignItems.9', 'Visuel publicitaire animé') },
    ],
    [t, i18n.language]
  );

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero */}
      <section className="relative py-6 sm:py-10">
        <AnimatedSection>
          <div className="glass-panel glow-ring rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden relative">
            <div
              className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="text-center lg:text-left">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="section-eyebrow"
                >
                  {t('home.heroBadge')}
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-display font-bold gradient-text leading-[1.1] tracking-tight"
                >
                  {t('home.title', 'Développeur Full Stack Passionné')}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-6 text-lg sm:text-xl text-theme-muted max-w-xl mx-auto lg:mx-0"
                >
                  {t('home.subtitle', 'Je crée des expériences web exceptionnelles avec des technologies modernes.')}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4"
                >
                  <Link to="/projects" className="btn-glow">
                    {t('home.seeProjects', 'Voir mes projets')}
                  </Link>
                  <Link to="/contact" className="btn-ghost">
                    {t('home.contactMe', 'Me contacter')}
                  </Link>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative flex justify-center"
              >
                <div className="glow-ring rounded-2xl p-[3px] max-w-md w-full aspect-square max-h-[520px] min-h-[420px]">
                  <div className="rounded-2xl overflow-hidden bg-slate-900/80 p-2 h-full">
                    <img
                      src={heroImage}
                      alt="Zango Quentin"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-xl"
                      loading="eager"
                      fetchpriority="high"
                      decoding="async"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Compétences */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center">
              <span className="section-eyebrow">{t('home.skillsEyebrow')}</span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold gradient-text">
                {t('home.skillsTitle', 'Mes Compétences')}
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-theme-muted mx-auto">
                {t('home.skillsSubtitle', 'Technologies que je maîtrise')}
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
            <div className="space-y-3">
              {skillCategories.map((category, index) => {
                const isActive = openSkillCategory === category.id;
                return (
                  <AnimatedSection key={category.id} delay={index * 0.07}>
                    <MagneticButton
                      active={isActive}
                      onClick={() => setOpenSkillCategory(category.id)}
                      className={`w-full px-6 py-5 rounded-2xl border border-slate-700/40 bg-slate-900/30 hover:border-cyan-500/30 transition-colors ${
                        isActive ? '' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl" aria-hidden="true">
                            {category.icon}
                          </span>
                          <h3 className={`text-lg font-semibold ${isActive ? "text-cyan-300" : "text-theme"}`}>
                            {category.title}
                          </h3>
                        </div>
                        <span
                          className={`text-xl transition-transform ${isActive ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        >
                          ⌄
                        </span>
                      </div>
                    </MagneticButton>
                  </AnimatedSection>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-card-strong rounded-3xl p-8 relative overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="absolute -top-16 -right-24 w-80 h-80 rounded-full bg-cyan-500/15 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-24 w-80 h-80 rounded-full bg-violet-500/15 blur-3xl"
              />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="text-3xl" aria-hidden="true">
                    {activeCategory.icon}
                  </span>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-theme">{activeCategory.title}</h3>
                    <p className="text-theme-muted mt-1">
                      {t('home.skillsPanelHint')}
                    </p>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="mt-8"
                  >
                    <div className="flex flex-wrap gap-3">
                      {activeCategory.items.map((item) => (
                        <motion.span
                          key={item}
                          whileHover={{ y: -3, scale: 1.02 }}
                          className="skill-chip"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15 }}
                      className="mt-8 flex items-center gap-3 text-theme-muted"
                    >
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/25">
                        ✨
                      </span>
                      <p className="text-sm sm:text-base">
                        {t(`home.skillsHints.${activeCategory.id}`)}
                      </p>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Graphisme */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center">
              <span className="section-eyebrow">
                {t('home.graphicDesignEyebrow', 'Graphiste & créateur visuel')}
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold gradient-text">
                {t('home.graphicDesignTitle', 'Mes réalisations graphiques')}
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-theme-muted mx-auto">
                {t('home.graphicDesignSubtitle', 'Découvrez mes designs et créations visuelles, cliquables pour une vue agrandie.')}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mt-12 graphic-design-ring">
              <div className="design-ring design-ring-spin">
                {graphicDesignItems.map((item, index) => {
                  const angle = index * (360 / graphicDesignItems.length);
                  return (
                    <div
                      key={item.alt}
                      className="design-wrapper"
                      style={{ transform: `rotate(${angle}deg)` }}
                    >
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.08 }}
                        className="design-tile"
                        style={{ transform: `translate(var(--design-radius, 220px)) rotate(-${angle}deg)` }}
                        onClick={() => setSelectedDesign(item)}
                        aria-label={item.title}
                      >
                        <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                        <div className="design-label">{item.title}</div>
                      </motion.button>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          <AnimatePresence>
            {selectedDesign && (
              <motion.div
                className="design-modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedDesign(null)}
              >
                <motion.div
                  className="design-modal-card"
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  onClick={(event) => event.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDesign(null)}
                    className="design-modal-close"
                    aria-label={t('home.closeDesign', 'Fermer')}
                  >
                    ×
                  </button>
                  <img src={selectedDesign.src} alt={selectedDesign.alt} className="design-modal-image" loading="lazy" decoding="async" />
                  <div className="px-6 py-5">
                    <h3 className="text-xl font-semibold text-theme">{selectedDesign.title}</h3>
                    <p className="mt-2 text-theme-muted text-sm">
                      {t('home.graphicDesignCaption', 'Clique pour agrandir chaque design.')}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* À propos */}
      <section className="py-12">
        <div>
          <AnimatedSection>
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 lg:mb-0"
              >
                <span className="section-eyebrow">{t('home.aboutEyebrow')}</span>
                <h2 className="mt-4 text-3xl font-display font-bold gradient-text">
                  {t('home.aboutTitle', 'À propos de moi')}
                </h2>
                <div className="mt-6 space-y-6 text-theme-muted">
                  <p>
                    {t('home.aboutText1', 'Développeur passionné avec une expérience dans la création d\'applications web et mobiles réactives.')}
                  </p>
                  <p>
                    {t('home.aboutText2', 'Je me spécialise dans le développement full-stack, avec une expertise dans la création d\'applications web modernes, performantes et évolutives.')}
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    to="/about"
                    className="text-base font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {t('home.learnMore', 'En savoir plus →')}
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="glow-ring rounded-2xl p-[2px]">
                <div className="relative rounded-2xl overflow-hidden glass-card p-2">
                  <img
                    className="w-full h-auto rounded-xl"
                    src={heroImage}
                    alt="À propos de moi"
                    loading="lazy"
                  />
                </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;