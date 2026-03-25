import React from 'react';

const whatsappUrl =
  'https://wa.me/34633391411?text=Quiero%20un%20diagnostico%20gratuito';

function ContactPage() {
  return (
    <section className="section page-headroom">
      <div className="site-container">
        <div className="section-title-row" data-aos="fade-up">
          <p className="eyebrow">Contacto</p>
          <h1>Contacto directo</h1>
          <p>Si quieres revisar tu situación actual y detectar oportunidades de mejora, este es el canal más rápido.</p>
        </div>

        <div className="contact-grid contact-grid--single">
          <article className="contact-card" id="reserva" data-aos="fade-up">
            <h2>Habla conmigo</h2>
            <div className="contact-direct contact-direct--open">
              <a href="tel:+34633391411">633391411</a>
              <span>L'Aldea Tarragona 43896</span>
              <a href="mailto:joan@jctagency.com">joan@jctagency.com</a>
            </div>

            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary">
              Quiero un diagnostico gratuito
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
