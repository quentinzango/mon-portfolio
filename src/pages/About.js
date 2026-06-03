import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AnimatedSection from '../components/AnimatedSection';
import PageHeader from '../components/PageHeader';

const videoPreview = 'https://placehold.co/1280x720/jpg?text=Presentation+Video';
const myVideo = '';

const About = () => {
  const { t, i18n } = useTranslation();

  const education = useMemo(
    () => [
      {
        id: 1,
        year: t('about.educationList.licence.year'),
        title: t('about.educationList.licence.title'),
        institution: t('about.educationList.licence.institution'),
        description: t('about.educationList.licence.description'),
      },
      {
        id: 2,
        year: t('about.educationList.deug.year'),
        title: t('about.educationList.deug.title'),
        institution: t('about.educationList.deug.institution'),
        description: t('about.educationList.deug.description'),
      },
    ],
    [t, i18n.language]
  );

  const experience = useMemo(
    () => [
      {
        id: 1,
        year: t('about.experienceList.meTech.year'),
        title: t('about.experienceList.meTech.title'),
        company: t('about.experienceList.meTech.company'),
        description: t('about.experienceList.meTech.description'),
      },
      {
        id: 2,
        year: t('about.experienceList.foormulo.year'),
        title: t('about.experienceList.foormulo.title'),
        company: t('about.experienceList.foormulo.company'),
        description: t('about.experienceList.foormulo.description'),
      },
      {
        id: 3,
        year: t('about.experienceList.uni2grow.year'),
        title: t('about.experienceList.uni2grow.title'),
        company: t('about.experienceList.uni2grow.company'),
        description: t('about.experienceList.uni2grow.description'),
      },
    ],
    [t, i18n.language]
  );

  const certifications = useMemo(
    () => [
      { id: 'dev', style: 'blue' },
      { id: 'react', style: 'green' },
      { id: 'flutter', style: 'purple' },
    ],
    []
  );

  // Compétences techniques
  const skills = [
    { name: "JavaScript", level: 60 },
    { name: "React", level: 65 },
    { name: "Django", level: 60 },
    { name: "Python", level: 55 },
    { name: "SQL", level: 60 },
    { name: "Git", level: 75 }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <PageHeader
        badge={t('about.badge')}
        title={t('about.title')}
        subtitle={t('about.subtitle')}
      />

        {/* Section À Propos + Vidéo */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-bold text-theme mb-6">
                  {t('about.whoAmI', 'Qui suis-je ?')}
                </h2>
                <div className="space-y-4 text-theme-muted">
                  <p>
                    {t('about.description1', 'Développeur passionné avec une solide expérience dans la création d\'applications web et mobiles modernes. J\'aime résoudre des problèmes complexes avec des solutions élégantes.')}
                  </p>
                  <p>
                    {t('about.description2', 'Mon objectif est de créer des expériences utilisateur exceptionnelles tout en écrivant un code propre, maintenable et bien documenté.')}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
  <div className="relative rounded-xl overflow-hidden glass-card aspect-video">
    <video 
      className="w-full h-full object-cover"
      controls
      poster={videoPreview}  // Utilisation de l'image importée
    >
      {myVideo && <source src={myVideo} type="video/mp4" />}
      {t('about.videoNotSupported', 'Votre navigateur ne supporte pas la lecture de vidéos.')}
    </video>
  </div>
</AnimatedSection>
          </div>
        </div>

        {/* Section Parcours Académique et Professionnel */}
        <div className="mb-24">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-theme mb-12 text-center">
              {t('about.myJourney', 'Mon Parcours')}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Parcours Académique */}
            <AnimatedSection>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-theme mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {t('about.education', 'Formation')}
                </h3>
                <div className="space-y-8">
                  {education.map((item) => (
                    <div key={item.id} className="relative pl-8 border-l-2 border-blue-200">
                      <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-1"></div>
                      <span className="text-sm font-medium text-blue-600">{item.year}</span>
                      <h4 className="text-lg font-semibold text-theme mt-1">{item.title}</h4>
                      <p className="font-medium text-slate-300">{item.institution}</p>
                      <p className="text-theme-muted mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Expérience Professionnelle */}
            <AnimatedSection delay={0.2}>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-theme mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M12 18h.01M16 12a1 1 0 11-2 0 1 1 0 012 0zm-4 0a1 1 0 11-2 0 1 1 0 012 0zm-4 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                  {t('about.experience', 'Expérience Professionnelle')}
                </h3>
                <div className="space-y-8">
                  {experience.map((item) => (
                    <div key={item.id} className="relative pl-8 border-l-2 border-green-200">
                      <div className="absolute w-4 h-4 bg-green-600 rounded-full -left-2 top-1"></div>
                      <span className="text-sm font-medium text-green-600">{item.year}</span>
                      <h4 className="text-lg font-semibold text-theme mt-1">{item.title}</h4>
                      <p className="font-medium text-slate-300">{item.company}</p>
                      <p className="text-theme-muted mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Section Compétences */}
        <div className="mb-24">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-theme mb-12 text-center">
              {t('about.skills', 'Mes Compétences')}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-theme mb-6">
                  {t('about.technicalSkills', 'Compétences Techniques')}
                </h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                        <span className="text-sm text-theme-muted">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-theme mb-6">
                  {t('about.certifications', 'Certifications')}
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert) => {
                    const styles = {
                      blue: { box: 'bg-blue-50', title: 'text-blue-800', org: 'text-blue-600' },
                      green: { box: 'bg-green-50', title: 'text-green-800', org: 'text-green-600' },
                      purple: { box: 'bg-purple-50', title: 'text-purple-800', org: 'text-purple-600' },
                    }[cert.style];
                    return (
                      <div key={cert.id} className={`p-4 rounded-lg ${styles.box}`}>
                        <h4 className={`font-medium ${styles.title}`}>
                          {t(`about.certs.${cert.id}.title`)}
                        </h4>
                        <p className={`text-sm ${styles.org}`}>
                          {t(`about.certs.${cert.id}.org`)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
    </div>
  );
};

export default About;