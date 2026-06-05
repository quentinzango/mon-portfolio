// src/pages/Projects.js
import React, { useMemo } from 'react';
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
  const { t, i18n } = useTranslation();

  const projects = useMemo(
    () => [
      {
        id: 1,
        title: t('projects.list.dashboard.title'),
        description: t('projects.list.dashboard.description'),
        year: 2025,
        teamSize: 3,
        client: t('projects.list.dashboard.client'),
        technologies: ['React.js', 'Tailwind CSS'],
        features: t('projects.list.dashboard.features', { returnObjects: true }),
        image: im7,
        githubUrl: 'https://github.com/quentinzango/Dashboard',
      },
      {
        id: 2,
        title: t('projects.list.mobile.title'),
        description: t('projects.list.mobile.description'),
        year: 2025,
        teamSize: 3,
        client: t('projects.list.mobile.client'),
        technologies: ['Flutter', 'MySQL'],
        features: t('projects.list.mobile.features', { returnObjects: true }),
        image: imb,
        githubUrl: 'https://github.com/quentinzango/app-mobile-enmkit',
      },
      {
        id: 3,
        title: t('projects.list.weather.title'),
        description: t('projects.list.weather.description'),
        year: 2022,
        teamSize: 1,
        client: t('projects.list.weather.client'),
        technologies: ['React', 'OpenWeather API', 'Geolocation API', 'Chart.js'],
        features: t('projects.list.weather.features', { returnObjects: true }),
        image: im9,
        githubUrl: 'https://github.com/yourusername/weather-app',
        demoUrl: 'https://weather-demo.example.com',
      },
      {
        id: 4,
        title: t('projects.list.u2g.title'),
        description: t('projects.list.u2g.description'),
        year: 2026,
        teamSize: 1,
        client: t('projects.list.u2g.client'),
        technologies: ['React.js', 'Tailwind CSS', 'Supabase'],
        features: t('projects.list.u2g.features', { returnObjects: true }),
        image: im10,
        githubUrl: 'https://github.com/universdesgadget/u2g',
        demoUrl: 'https://www.universdesgadgets.com/',
      },
    ],
    [t, i18n.language]
  );

  return (
    <div className="max-w-7xl mx-auto">
      <PageHeader
        badge={t('projects.badge')}
        title={t('projects.title')}
        subtitle={t('projects.subtitle')}
      />
      <div className="space-y-24">
        {projects.map((project, index) => (
          <AnimatedSection key={project.id} delay={index * 0.2}>
            <div className="min-h-[600px]">
              <ProjectCard project={project} />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};
export default Projects;