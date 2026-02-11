'use client';

export default function HowItWorksSection() {
  const steps = [
    { number: 1, title: 'Inscription', description: 'Créez votre compte gratuitement' },
    { number: 2, title: 'Choix de formation', description: 'Sélectionnez votre parcours' },
    { number: 3, title: 'Suivi des modules', description: 'Avancez à votre rythme' },
    { number: 4, title: 'Évaluation', description: 'Validez vos acquis' },
    { number: 5, title: 'Attestation', description: 'Obtenez votre certificat' },
  ];

  return (
    <section className="how-it-works-section" id="fonctionnement">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="section-title-main">Comment ça marche ?</h2>
          <p className="section-subtitle">Votre parcours vers une nouvelle compétence en 5 étapes simples</p>
        </div>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
