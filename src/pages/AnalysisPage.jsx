import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const reviewBlocks = [
  { title: 'Captación y gestión de clientes', icon: 'clients' },
  { title: 'Procesos repetitivos', icon: 'repeat' },
  { title: 'Herramientas y sistemas', icon: 'systems' },
  { title: 'Cuellos de botella', icon: 'bottleneck' },
];

const reviewIcons = {
  clients: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.8 18c.8-3.2 2.6-5 5.2-5s4.4 1.8 5.2 5" />
      <path d="M15 10.5c1.8.2 3.1 1.5 3.6 3.8" />
    </>
  ),
  repeat: (
    <>
      <path d="M4 7h11c2.8 0 5 2.2 5 5 0 1.4-.6 2.7-1.5 3.6" />
      <path d="m16 3 4 4-4 4" />
      <path d="M20 17H9c-2.8 0-5-2.2-5-5 0-1.4.6-2.7 1.5-3.6" />
      <path d="m8 21-4-4 4-4" />
    </>
  ),
  systems: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
      <path d="M8 9h8" />
      <path d="M8 12h5" />
    </>
  ),
  bottleneck: (
    <>
      <path d="M6 4h12" />
      <path d="M8 4c0 4 2.5 5.5 4 8 1.5-2.5 4-4 4-8" />
      <path d="M12 12c-1.5 2.5-4 4-4 8" />
      <path d="M12 12c1.5 2.5 4 4 4 8" />
      <path d="M6 20h12" />
    </>
  ),
};

function ReviewIcon({ type }) {
  return (
    <svg className="analysis-review__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {reviewIcons[type]}
    </svg>
  );
}

const steps = [
  ['1', 'Reunión de 30 a 45 minutos', 'Repasamos cómo funciona hoy la operativa.'],
  ['2', 'Puntos críticos', 'Detecto procesos lentos, repetidos o poco claros.'],
  ['3', 'Resumen claro', 'Te digo dónde actuar primero y por qué.'],
  ['4', 'Siguientes pasos', 'Si encaja, planteamos una propuesta concreta.'],
];

function AnalysisPage() {
  return (
    <article className="light-page">
      <Helmet>
        <title>Análisis gratuito de procesos | Joan Chorto Consultor</title>
        <meta
          name="description"
          content="Análisis gratuito de procesos para detectar pérdidas de tiempo, errores, tareas manuales y puntos de mejora en la operativa de tu empresa."
        />
      </Helmet>

      <section className="light-page__hero" data-aos="fade-up">
        <div className="site-container light-page__hero-grid">
          <div>
            <p className="light-page__eyebrow">Análisis gratuito</p>
            <h1>Análisis exprés de procesos.</h1>
            <p>
              En 30 a 45 minutos detecto dónde pierdes tiempo, dinero y control. Sin auditorías largas. Sin informes
              eternos.
            </p>
            <Link to="/contacto#reserva" className="home-premium__cta">
              Analizar mi empresa
            </Link>
          </div>
          <div className="analysis-hero__icon" aria-hidden="true" data-aos="zoom-in" data-aos-delay="120">
            <svg viewBox="0 0 120 120" focusable="false">
              <circle cx="52" cy="52" r="30" />
              <path d="M74 74 102 102" />
              <path d="M39 52h26" />
              <path d="M52 39v26" />
            </svg>
          </div>
        </div>
      </section>

      <section className="light-page__section" data-aos="fade-up">
        <div className="site-container light-page__split">
          <div className="light-page__section-head">
            <p className="light-page__eyebrow">Qué es</p>
            <h2>Una sesión rápida para ver qué está fallando.</h2>
          </div>
          <div className="light-page__text">
            <p>
              Revisamos tareas manuales, información duplicada, dependencia de WhatsApp, Excels desordenados y procesos
              que dependen demasiado de una persona.
            </p>
            <p>El objetivo es claro: ver dónde hay fricción y dónde conviene actuar primero.</p>
          </div>
        </div>
      </section>

      <section className="light-page__section">
        <div className="site-container">
          <div className="light-page__section-head" data-aos="fade-up">
            <p className="light-page__eyebrow">Qué reviso</p>
            <h2>Cuatro zonas donde suele escaparse el margen.</h2>
          </div>
          <div className="analysis-review">
            {reviewBlocks.map((block, index) => (
              <article className="analysis-review__item" key={block.title} data-aos="fade-up" data-aos-delay={index * 80}>
                <ReviewIcon type={block.icon} />
                <h3>{block.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="light-page__section">
        <div className="site-container">
          <div className="light-page__section-head" data-aos="fade-up">
            <p className="light-page__eyebrow">Cómo funciona</p>
            <h2>Sin teoría. Una conversación enfocada.</h2>
          </div>
          <div className="light-page__timeline">
            {steps.map(([step, title, text], index) => (
              <article className="light-page__step" key={title} data-aos="fade-up" data-aos-delay={index * 80}>
                <span>{step}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="light-page__section" data-aos="fade-up">
        <div className="site-container light-page__cta">
          <p className="light-page__eyebrow">Qué recibes</p>
          <h2>Un resumen claro, prioridades y próximos pasos.</h2>
          <p>Muchos problemas no necesitan más software. Necesitan ver qué proceso está roto.</p>
          <Link to="/contacto#reserva" className="home-premium__cta">
            Reservar análisis
          </Link>
        </div>
      </section>
    </article>
  );
}

export default AnalysisPage;
