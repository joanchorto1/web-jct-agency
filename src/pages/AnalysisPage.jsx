import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import analysisImage from '../components/img/mano_grafica.png';

const reviewBlocks = [
  'Captación y gestión de clientes',
  'Procesos repetitivos',
  'Herramientas y sistemas',
  'Cuellos de botella',
];

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
          <img
            src={analysisImage}
            alt="Análisis operativo con gráficos"
            className="light-page__hero-image light-page__hero-image--contain"
            data-aos="zoom-in"
            data-aos-delay="120"
          />
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
          <div className="light-page__card-grid">
            {reviewBlocks.map((block, index) => (
              <article className="light-page__card" key={block} data-aos="fade-up" data-aos-delay={index * 80}>
                <h3>{block}</h3>
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
