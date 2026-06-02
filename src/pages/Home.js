import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import MagneticButton from '../components/MagneticButton';
import im12 from '../assets/im12.png';
const heroImage = im12;

const Home = () => {
  const { t } = useTranslation();
  const [openSkillCategory, setOpenSkillCategory] = useState('languages');

  const skillCategories = [
    {
      id: 'languages',
      title: 'Langages de programmation',
      icon: '💻',
      items: ['PHP', 'JavaScript', 'TypeScript', 'HTML', 'Dart', 'SQL', 'Python', 'Et autres']
    },
    {
      id: 'frameworks',
      title: 'Frameworks et outils UI',
      icon: '🧩',
      items: ['CakePHP', 'Django', 'Laravel', 'Next.js', 'Bootstrap', 'Tailwind CSS', 'Flutter', 'Et autres']
    },
    {
      id: 'sgbd',
      title: 'SGBD et plateformes de données',
      icon: '🗄️',
      items: ['MySQL', 'PostgreSQL', 'Firebase', 'Supabase', 'Et autres']
    },
    {
      id: 'third-party',
      title: 'Compétences tiers',
      icon: '🤝',
      items: ['Intégration d\'API', 'Git / GitHub', 'Déploiement', 'Méthodes Agile', 'Maintenance', 'Et autres']
    }
  ];

  const activeCategory = skillCategories.find((c) => c.id === openSkillCategory) || skillCategories[0];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12">
        <div>
          <AnimatedSection>
            <div className="text-center glass-panel rounded-3xl p-8 sm:p-12">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 text-transparent bg-clip-text sm:text-5xl sm:tracking-tight lg:text-6xl leading-tight"
              >
                {t('home.title', 'Développeur Full Stack Passionné')}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 max-w-3xl mx-auto text-xl text-slate-600"
              >
                {t('home.subtitle', 'Je crée des expériences web exceptionnelles avec des technologies modernes.')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 flex justify-center space-x-4"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {t('home.seeProjects', 'Voir mes projets')}
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {t('home.contactMe', 'Me contacter')}
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Compétences */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 text-transparent bg-clip-text">
                {t('home.skillsTitle', 'Mes Compétences')}
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-slate-600 mx-auto">
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
                      className={`w-full px-6 py-5 rounded-2xl border transition-colors ${
                        isActive
                          ? "border-indigo-200 bg-gradient-to-r from-indigo-50/70 via-cyan-50/60 to-emerald-50/60"
                          : "border-slate-200/80 bg-white/60 hover:bg-white/80"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl" aria-hidden="true">
                            {category.icon}
                          </span>
                          <h3 className={`text-lg font-semibold ${isActive ? "text-indigo-800" : "text-slate-900"}`}>
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
                className="absolute -top-16 -right-24 w-80 h-80 rounded-full bg-indigo-200/30 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-24 w-80 h-80 rounded-full bg-cyan-200/20 blur-3xl"
              />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="text-3xl" aria-hidden="true">
                    {activeCategory.icon}
                  </span>
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900">{activeCategory.title}</h3>
                    <p className="text-slate-600 mt-1">
                      Clique sur une catégorie pour afficher les technologies.
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
                      className="mt-8 flex items-center gap-3 text-slate-700"
                    >
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-r from-indigo-50 to-cyan-50 border border-indigo-100">
                        ✨
                      </span>
                      <p className="text-sm sm:text-base">
                        {activeCategory.id === "languages"
                          ? "Langages orientés front/back, scripts et données."
                          : activeCategory.id === "frameworks"
                          ? "Frameworks & outils pour construire des interfaces modernes."
                          : activeCategory.id === "sgbd"
                          ? "SGBD et services pour stocker, synchroniser et exploiter les données."
                          : "Compétences complémentaires pour livrer un projet de A à Z."}
                      </p>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
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
                <h2 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 text-transparent bg-clip-text">
                  {t('home.aboutTitle', 'À propos de moi')}
                </h2>
                <div className="mt-6 space-y-6 text-slate-600">
                  <p>
                    {t('home.aboutText1', 'Développeur passionné avec une expérience dans la création d\'applications web modernes et réactives.')}
                  </p>
                  <p>
                    {t('home.aboutText2', 'Je me spécialise dans le développement full-stack avec un focus sur les technologies JavaScript.')}
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    to="/about"
                    className="text-base font-medium text-blue-600 hover:text-blue-500"
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
                <div className="relative rounded-2xl overflow-hidden glass-card p-2">
                  <img
                    className="w-full h-auto rounded-xl"
                    src={heroImage}
                    alt="À propos de moi"
                    loading="lazy"
                  />
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