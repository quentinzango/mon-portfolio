import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import PageHeader from '../components/PageHeader';

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
    <div className="max-w-7xl mx-auto">
      <PageHeader
        badge="Expertise"
        title={t('services.title', 'Mes Services')}
        subtitle={t('services.subtitle', 'Des solutions sur mesure pour répondre à vos besoins numériques')}
      />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative glass-card p-8 rounded-2xl hover:shadow-xl hover:shadow-indigo-100/80 transition-all duration-300 h-full"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-400 rounded-t-xl" />
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-display font-bold text-theme mb-3">{service.title}</h3>
                <p className="text-theme-muted">{service.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-16 glass-panel rounded-2xl p-8">
            <div className="text-center">
              <h2 className="text-2xl font-display font-bold gradient-text mb-4">
                {t('services.cta.title', 'Prêt à démarrer votre projet ?')}
              </h2>
              <p className="text-theme-muted mb-6 max-w-2xl mx-auto">
                {t('services.cta.description', 'Contactez-moi pour discuter de votre projet et voir comment je peux vous aider à le concrétiser.')}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="btn-glow">
                  {t('services.cta.button', 'Me contacter')}
                </Link>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
    </div>
  );
};

export default Services;