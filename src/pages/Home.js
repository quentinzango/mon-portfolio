import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import im10 from '../assets/im10.png';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {[
            { name: 'React', emoji: '⚛️' },
            { name: 'Django', emoji: '🐍' },
            { name: 'JavaScript', emoji: '📜' },
            { name: 'PostgreSQL', emoji: '🐘' },
            { name: 'MySQL', emoji: '💾' },
            { name: 'PHP', emoji: '🐘' }
          ].map((skill, index) => (
              <AnimatedSection key={skill.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-3">
                    {skill.emoji}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{skill.name}</h3>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img
                    className="w-full h-auto rounded-lg shadow-xl"
                    src={im10}
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