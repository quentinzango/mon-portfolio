import React, { useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    {
      question: t('contact.faq.questions.typesDeProjets.question', 'Quels types de projets prenez-vous en charge ?'),
      answer: t('contact.faq.questions.typesDeProjets.answer', 'Je me spécialise dans le développement web et mobile, y compris les sites vitrines, les applications web, les applications mobiles cross-plateformes, et les solutions sur mesure pour les entreprises.')
    },
    {
      question: t('contact.faq.questions.delai.question', 'Quel est votre délai de livraison moyen ?'),
      answer: t('contact.faq.questions.delai.answer', 'Le délai dépend de la complexité du projet. Un site vitrine simple peut prendre 2-3 semaines, tandis qu\'une application personnalisée peut nécessiter plusieurs mois. Je vous fournirai un calendrier détaillé après analyse de vos besoins.')
    },
    {
      question: t('contact.faq.questions.maintenance.question', 'Proposez-vous un service de maintenance ?'),
      answer: t('contact.faq.questions.maintenance.answer', 'Oui, je propose différents forfaits de maintenance incluant mises à jour, corrections de bugs et support technique. Nous pouvons discuter d\'une solution adaptée à vos besoins.')
    },
    {
      question: t('contact.faq.questions.paiement.question', 'Quelles sont vos méthodes de paiement ?'),
      answer: t('contact.faq.questions.paiement.answer', 'J\'accepte les virements bancaires, PayPal et les paiements par carte de crédit. Un acompte est généralement demandé avant le début du projet, le solde étant dû à la livraison.')
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const openWhatsApp = useCallback(() => {
    const phoneNumber = '237670184922';
    const message = encodeURIComponent('Bonjour, je vous contacte depuis votre portfolio.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.sendForm(
        'service_5gzbv9d',
        'template_sbhu39l',
        form.current,
        'FXjU_rhoNNg5ZBUsa'
      );
      
      console.log('Email envoyé avec succès!', result.text);
      setSubmitStatus({
        success: true,
        message: t('contact.successMessage', 'Message envoyé avec succès !')
      });
      form.current.reset();
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus({
        success: false,
        message: t('contact.errorMessage', 'Erreur lors de l\'envoi du message.')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              {t('contact.title', 'Contactez-moi')}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500">
              {t('contact.subtitle', 'Discutons de votre projet')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1} noAnimation={isSubmitting}>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {t('contact.contactInfo', 'Informations de contact')}
                </h2>
                <p className="text-gray-600">
                  {t('contact.contactDescription', 'N\'hésitez pas à me contacter pour toute question.')}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full text-blue-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">quentinzango470@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 p-3 rounded-full text-green-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">WhatsApp</h3>
                    <button
                      onClick={openWhatsApp}
                      className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
                    >
                      <span>Envoyer un message</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} noAnimation={isSubmitting}>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contact.formTitle', 'Envoyez-moi un message')}
              </h2>
              
              {submitStatus && (
                <div 
                  key={submitStatus.success ? 'success' : 'error'}
                  className={`mb-6 p-4 rounded-md ${
                    submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    {t('contact.form.name', 'Nom complet')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    {t('contact.form.email', 'Email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                    {t('contact.form.service', 'Type de service')} *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">{t('contact.form.selectService', 'Sélectionnez un service')}</option>
                    <option value="web">{t('contact.form.webDev', 'Développement Web')}</option>
                    <option value="mobile">{t('contact.form.mobileDev', 'Développement Mobile')}</option>
                    <option value="consulting">{t('contact.form.consulting', 'Consulting')}</option>
                    <option value="other">{t('contact.form.other', 'Autre')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    {t('contact.form.message', 'Votre message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('contact.form.sending', 'Envoi en cours...')}
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        {t('contact.form.submit', 'Envoyer le message')}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>

        {/* Section FAQ */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t('contact.faq.title', 'Questions fréquemment posées')}
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-900 focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        openFaqIndex === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div 
                    className={`mt-4 text-gray-600 transition-all duration-300 ease-in-out ${
                      openFaqIndex === index ? 'block' : 'hidden'
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;