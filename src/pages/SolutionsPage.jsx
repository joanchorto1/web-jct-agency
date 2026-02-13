import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { services } from '../data/seoContent';

function SolutionsPage() {
  return (
    <section className="section page-headroom">
      <Helmet>
        <title>Soluciones de consultoría para pymes | Joan Chorto Consultor</title>
        <meta
          name="description"
          content="Soluciones de consultoría para pymes industriales, construcción y servicios: optimización de procesos, sistemas digitales, ERP y desarrollo a medida."
        />
      </Helmet>

      <div className="site-container">
        <div className="section-title-row" data-aos="fade-up">
          <p className="eyebrow">Soluciones</p>
          <h1>Servicios especializados para transformar gestión y eficiencia</h1>
          <p>
            Cada solución tiene una landing específica para resolver necesidades concretas en industria, construcción
            y servicios.
          </p>
          <p className="key-message">Cada empresa necesita un sistema diferente.</p>
        </div>

        <div className="solution-grid">
          {services.map((service) => (
            <article key={service.slug} className="solution-card" data-aos="fade-up">
              <h2>{service.shortTitle}</h2>
              <p>{service.excerpt}</p>
              <Link to={`/soluciones/${service.slug}`} className="seo-link-button">
                Ver servicio
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionsPage;
