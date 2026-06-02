import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.webDev.title', 'Développement Web'),
      description: t('services.webDev.description', 'Création de sites web et applications web sur mesure avec les dernières technologies.'),
      icon: '💻'
    },
    {
      title: t('services.mobileDev.title', 'Applications Mobiles'),
      description: t('services.mobileDev.description', 'Développement d\'applications mobiles cross-plateformes performantes.'),
      icon: '📱'
    },
    {
      title: t('services.uiux.title', 'UI/UX Design'),
      description: t('services.uiux.description', 'Conception d\'interfaces utilisateur intuitives et attrayantes.'),
      icon: '🎨'
    },
    {
      title: t('services.seo.title', 'Référencement SEO'),
      description: t('services.seo.description', 'Optimisation pour les moteurs de recherche et amélioration de la visibilité.'),
      icon: '🔍'
    },
    {
      title: t('services.maintenance.title', 'Maintenance'),
      description: t('services.maintenance.description', 'Support continu et mises à jour pour votre application.'),
      icon: '⚙️'
    },
    {
      title: t('services.consulting.title', 'Consulting'),
      description: t('services.consulting.description', 'Conseils d\'experts pour votre projet numérique.'),
      icon: '💡'
    },
    {
      title: t('services.api.title', 'Intégration d\'API'),
      description: t('services.api.description', 'Connexion et intégration de services tiers et API externes pour étendre les fonctionnalités de votre application.'),
      icon: '🔌'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="pointer-events-none absolute -top-28 -left-24 w-80 h-80 bg-blue-200/40 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 w-96 h-96 bg-cyan-200/30 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
            >
              {t('services.title', 'Mes Services')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-3xl mx-auto text-xl text-gray-500"
            >
              {t('services.subtitle', 'Des solutions sur mesure pour répondre à vos besoins numériques')}
            </motion.p>
          </div>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative bg-white/90 backdrop-blur p-8 rounded-xl shadow-sm hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 h-full border border-gray-100"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-400 rounded-t-xl" />
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-16 bg-white/95 border border-blue-100 rounded-2xl shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('services.cta.title', 'Prêt à démarrer votre projet ?')}
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {t('services.cta.description', 'Contactez-moi pour discuter de votre projet et voir comment je peux vous aider à le concrétiser.')}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {t('services.cta.button', 'Me contacter')}
                </Link>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Services;