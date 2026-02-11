'use client';

const partners = [
  'Ministere',
  'UNESCO',
  'PNUD',
  'ORANGE',
  'MTN',
  'Google',
];

export default function PartnersSection() {
  return (
    <section className="partners-section" id="partenaires">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <h2 className="section-title-main">Nos Partenaires</h2>
          <p className="section-subtitle">Ils nous font confiance pour former les talents de demain</p>
        </div>
        
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
