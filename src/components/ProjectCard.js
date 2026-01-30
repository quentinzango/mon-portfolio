import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaUsers, FaCalendarAlt, FaUserTie } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ParallaxImage } from './ParallaxImage';

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();

  return (
    <motion.div 
      className="project-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 mb-12"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="md:flex h-full">
        {/* Partie gauche - Image du projet avec effet parallaxe */}
        <div className="project-image-container md:w-1/2 relative group overflow-hidden h-full">
          <ParallaxImage 
            src={project.image} 
            alt={project.title}
            className="transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <button 
              onClick={() => window.open(project.demoUrl, '_blank')}
              className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium flex items-center hover:bg-blue-50 transition-colors"
            >
              <FaExternalLinkAlt className="mr-2" />
              {t('projects.viewDemo', 'Voir la démo')}
            </button>
          </div>
        </div>

        {/* Partie droite - Détails du projet */}
        <div className="project-content p-8 md:w-1/2">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
            <span className="text-sm text-gray-500 flex items-center">
              <FaCalendarAlt className="mr-1" /> {project.year}
            </span>
          </div>

          <p className="text-gray-600 mb-6">{project.description}</p>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">
              {t('projects.technologies', 'Technologies utilisées')}:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="tech-badge bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full hover:bg-blue-200 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">
              {t('projects.keyFeatures', 'Fonctionnalités clés')}:
            </h4>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              {project.features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (index * 0.05) }}
                  viewport={{ once: true }}
                  className="text-sm"
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-gray-200">
            <div className="flex items-center text-sm text-gray-500">
              <FaUsers className="mr-1" />
              <span>{project.teamSize} {project.teamSize > 1 ? t('projects.developers', 'développeurs') : t('projects.developer', 'développeur')}</span>
            </div>
            {project.client && (
              <div className="text-sm text-gray-500 flex items-center">
                <FaUserTie className="mr-1" />
                <span>{project.client}</span>
              </div>
            )}
          </div>

          <div className="mt-6 flex space-x-4">
            {project.githubUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                <FaGithub className="mr-2" />
                {t('projects.viewCode', 'Voir le code')}
              </motion.a>
            )}
            {project.demoUrl && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(project.demoUrl, '_blank')}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                <FaExternalLinkAlt className="mr-2" />
                {t('projects.liveDemo', 'Voir en ligne')}
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;