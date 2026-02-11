'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Comment m\'inscrire sur Win Academy ?',
    answer: 'L\'inscription est simple et gratuite. Cliquez sur le bouton "S\'inscrire" en haut à droite, remplissez le formulaire avec vos informations personnelles et validez votre compte.',
  },
  {
    question: 'Les formations sont-elles accessibles hors ligne ?',
    answer: 'Oui ! Notre plateforme est optimisée pour les zones à faible débit. Vous pouvez télécharger les contenus pour les consulter hors ligne.',
  },
  {
    question: 'Comment obtenir mon attestation ?',
    answer: 'Après avoir suivi tous les modules et réussi l\'évaluation finale, vous recevez automatiquement une attestation numérique avec un QR code unique vérifiable.',
  },
  {
    question: 'Quel est le coût des formations ?',
    answer: 'Win Academy propose des formations gratuites et payantes. Nous voulons rendre l\'éducation numérique accessible à tous les jeunes béninois.',
  },
  {
    question: 'Puis-je suivre les cours sur mobile ?',
    answer: 'Absolument ! Notre plateforme est entièrement responsive et optimisée pour une utilisation sur smartphone, même avec une connexion modeste.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq-section" id="faq">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="section-title-main">Questions Fréquentes</h2>
          <p className="section-subtitle">Tout ce que vous devez savoir sur Win Academy</p>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <div className="faq-icon">
                  <ChevronDown size={20} />
                </div>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
