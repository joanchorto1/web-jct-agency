import React from 'react';
import { Helmet } from 'react-helmet';

const whatsappUrl =
  'https://wa.me/34633391411?text=Quiero%20un%20diagnostico%20gratuito';

function ContactPage() {
  return (
    <article className="light-page">
      <Helmet>
        <title>Contacto | Joan Chorto Consultor</title>
        <meta name="description" content="Contacto directo para reservar un análisis gratuito de procesos." />
      </Helmet>

      <section className="light-page__hero" data-aos="fade-up">
        <div className="site-container light-page__hero-grid">
          <div>
            <p className="light-page__eyebrow">Contacto</p>
            <h1>Hablemos 45 minutos.</h1>
            <p>Revisamos dónde se pierde tiempo, control y margen. Sin compromiso.</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="home-premium__cta">
              Quiero un diagnóstico gratuito
            </a>
          </div>

          <article className="light-page__contact-card" id="reserva" data-aos="zoom-in" data-aos-delay="120">
            <h2>Contacto directo</h2>
            <a href="tel:+34633391411">633391411</a>
            <a href="mailto:joan@jctagency.com">joan@jctagency.com</a>
            <span>L'Aldea, Tarragona 43896</span>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary">
              WhatsApp
            </a>
          </article>
        </div>
      </section>
    </article>
  );
}

export default ContactPage;
