import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
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
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-16 bg-white rounded-xl shadow-sm p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('services.cta.title', 'Prêt à démarrer votre projet ?')}
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {t('services.cta.description', 'Contactez-moi pour discuter de votre projet et voir comment je peux vous aider à le concrétiser.')}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {t('services.cta.button', 'Me contacter')}
              </motion.button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Services;