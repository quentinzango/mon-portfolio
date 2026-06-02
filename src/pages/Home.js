import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
const heroImage = 'https://placehold.co/1200x800/png?text=Portfolio';

const Home = () => {
  const { t } = useTranslation();
  const [openSkillCategory, setOpenSkillCategory] = useState('languages');

  const skillCategories = [
    {
      id: 'languages',
      title: 'Langages de programmation',
      icon: '💻',
      items: ['PHP', 'JavaScript', 'TypeScript', 'HTML', 'Dart', 'SQL', 'Python']
    },
    {
      id: 'frameworks',
      title: 'Frameworks et outils UI',
      icon: '🧩',
      items: ['CakePHP', 'Django', 'Laravel', 'Next.js', 'Bootstrap', 'Tailwind CSS', 'Flutter']
    },
    {
      id: 'sgbd',
      title: 'SGBD et plateformes de données',
      icon: '🗄️',
      items: ['MySQL', 'PostgreSQL', 'Firebase', 'Supabase']
    },
    {
      id: 'third-party',
      title: 'Compétences tiers',
      icon: '🤝',
      items: ['Intégration API REST', 'Git / GitHub', 'Déploiement Vercel', 'Méthodes Agile', 'Résolution de problèmes']
    }
  ];

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
                className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl leading-tight"
              >
                {t('home.title', 'Développeur Full Stack Passionné')}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 max-w-3xl mx-auto text-xl text-gray-500"
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
        <div>
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                {t('home.skillsTitle', 'Mes Compétences')}
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                {t('home.skillsSubtitle', 'Technologies que je maîtrise')}
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 max-w-4xl mx-auto space-y-4">
            {skillCategories.map((category, index) => {
              const isOpen = openSkillCategory === category.id;

              return (
                <AnimatedSection key={category.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="glass-card rounded-2xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenSkillCategory(isOpen ? null : category.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-blue-50/60 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl" aria-hidden="true">{category.icon}</span>
                        <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                      </div>
                      <span className={`text-xl text-blue-700 transition-transform ${isOpen ? 'rotate-180' : ''}`}>⌄</span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                          {category.items.map((item) => (
                            <span
                              key={item}
                              className="inline-flex justify-center items-center px-3 py-2 rounded-lg text-sm font-medium bg-blue-50 text-blue-800 border border-blue-100"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatedSection>
              );
            })}
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
                <h2 className="text-3xl font-extrabold text-gray-900">
                  {t('home.aboutTitle', 'À propos de moi')}
                </h2>
                <div className="mt-6 space-y-6 text-gray-600">
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