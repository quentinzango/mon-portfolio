// src/pages/Projects.js
import React from 'react';
import { motion } from 'framer-motion';  // Ajoutez cette ligne
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import AnimatedSection from '../components/AnimatedSection';
import im7 from '../assets/im7.png';
import im9 from '../assets/im9.png';
import im8 from '../assets/im8.png';
const Projects = () => {
  const { t } = useTranslation();
  const projects = [
    {
      id: 1,
      title: "Dashboard d'administration",
      description: "Le dashboard d’administration ENMkit est une interface web centralisée permettant aux administrateurs de superviser, configurer et contrôler à distance les kits EMkit installés dans les ménages.",
      year: 2025,
      teamSize: 3,
      client: "2MeTech",
      technologies: ["React.js", "Tailwind CSS"],
      features: [
        "Gestion des kits ENMkit",
        "Suivi de la consommation électrique",
        "Alertes et notifications",
        "Rapports et statistiques"
      ],
      image: im7,
      githubUrl: "https://github.com/quentinzango/Dashboard",
      //demoUrl: "https://ecommerce-demo.example.com"
    },
    {
      id: 2,
      title: "Application Mobile de Contrôle de Relais ENMkit ",
      description: "L’application mobile ENMkit est une application intuitive permettant aux abonnés et techniciens de configurer et de contrôler à distance l’alimentation électrique d’un site via un relais GSM, en s’appuyant sur des commandes sécurisées SMS.",
      year: 2025,
      teamSize: 3,
      client: "2MeTech",
      technologies: ["Flutter", "MySQL"],
      features: [
        "Contrôle à distance du relais",
        "Authentification et sécurité",
        "Synchronisation du kit",
        "Suivi de la consommation électrique",
      ],
      image: im8, // Remplacez par votre image
      githubUrl: "https://github.com/quentinzango/app-mobile-enmkit",
      //demoUrl: "https://project-management-demo.example.com"
    },
    {
      id: 3,
      title: "Application Météo",
      description: "Application météo en temps réel avec prévisions sur 7 jours et géolocalisation automatique.",
      year: 2022,
      teamSize: 1,
      client: "Projet personnel",
      technologies: ["React", "OpenWeather API", "Geolocation API", "Chart.js"],
      features: [
        "Météo actuelle et prévisions sur 7 jours",
        "Géolocalisation automatique",
        "Recherche par ville",
        "Graphiques des températures",
        "Thème clair/sombre"
      ],
      image: im9, // Remplacez par votre image
      githubUrl: "https://github.com/yourusername/weather-app",
      demoUrl: "https://weather-demo.example.com"
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
              {t('projects.title', 'Mes Projets')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-3xl mx-auto text-xl text-gray-500"
            >
              {t('projects.subtitle', 'Découvrez une sélection de mes projets les plus récents.')}
            </motion.p>
          </div>
        </AnimatedSection>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.2}>
              <div className="h-[600px]">
                <ProjectCard project={project} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;