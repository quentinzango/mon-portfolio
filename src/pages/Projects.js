// src/pages/Projects.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import AnimatedSection from '../components/AnimatedSection';
import PageHeader from '../components/PageHeader';
import ima from '../assets/ima.png';
import im7 from '../assets/im7.png';
import imb from '../assets/imb.png';
const im9 = 'https://placehold.co/1200x800/png?text=Projet+3';
const im10 = ima;
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
      image: imb,
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
    },
    {
      id: 4,
      title: "Site vitrine U2G",
      description: "Conception d'un site web vitrine pour l'entreprise U2G permettant aux utilisateurs de découvrir les réalisations de l'entreprise, de contacter l'équipe, de demander des devis et de se localiser facilement. Projet réalisé en 2 semaines.",
      year: 2026,
      teamSize: 1,
      client: "U2G",
      technologies: ["React.js", "Tailwind CSS", "Supabase"],
      features: [
        "Présentation des services et réalisations",
        "Formulaire de contact",
        "Demande de devis",
        "Localisation de l'entreprise",
        "Interface moderne et responsive"
      ],
      image: im10,
      githubUrl: "https://github.com/universdesgadget/u2g",
      demoUrl: "https://www.universdesgadgets.com/"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <PageHeader
        badge="Réalisations"
        title={t('projects.title', 'Mes Projets')}
        subtitle={t('projects.subtitle', 'Découvrez une sélection de mes projets les plus récents.')}
      />
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
  );
};
export default Projects;