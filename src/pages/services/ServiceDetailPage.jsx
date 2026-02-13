import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { services } from '../../data/seoContent';

function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <section className="section page-headroom">
        <div className="site-container section-title-row">
          <h1>Servicio no encontrado</h1>
          <p>El servicio que buscas no está disponible.</p>
          <Link className="btn-primary" to="/soluciones">
            Volver a soluciones
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section page-headroom">
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
      </Helmet>

      <div className="site-container">
        <article className="seo-detail-card" data-aos="fade-up">
          <p className="eyebrow">Servicio especializado</p>
          <h1>{service.title}</h1>
          <p className="seo-detail-intro">{service.intro}</p>

          <h2>Qué incluye este servicio</h2>
          <ul>
            {service.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>

          <h2>Impacto en negocio</h2>
          <p>{service.outcome}</p>

          <h2>Preguntas frecuentes</h2>
          <div className="seo-faq-grid">
            {service.faqs.map((faq) => (
              <article key={faq.q} className="seo-faq-item" data-aos="fade-up">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </article>
            ))}
          </div>

          <div className="seo-detail-actions">
            <Link to="/contacto#reserva" className="btn-primary">
              Solicitar sesión estratégica
            </Link>
            <Link to="/soluciones" className="seo-link-button">
              Ver todas las soluciones
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ServiceDetailPage;
