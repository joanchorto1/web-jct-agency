import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, Navigate, useParams } from 'react-router-dom';
import { localSeoPages } from '../data/localSeoPages';

function LocalSeoPage() {
  const { slug } = useParams();
  const page = localSeoPages.find((item) => item.slug === slug);

  if (!page) {
    return <Navigate to="/consultoria-informatica" replace />;
  }

  return (
    <article className="light-page">
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
      </Helmet>

      <section className="light-page__hero" data-aos="fade-up">
        <div className="site-container light-page__hero-grid">
          <div>
            <p className="light-page__eyebrow">{page.area}</p>
            <h1>{page.title}</h1>
            <p>
              Empresa de software, desarrollo a medida y servicios informáticos para pymes que quieren ordenar gestión,
              datos y procesos.
            </p>
            <Link to="/contacto#reserva" className="home-premium__cta">
              Pedir diagnóstico
            </Link>
          </div>
          <aside className="light-page__side-note" data-aos="zoom-in" data-aos-delay="120">
            <p className="light-page__eyebrow">Keywords locales</p>
            <div className="light-page__mini-list">
              {page.keywords.slice(0, 4).map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="light-page__section">
        <div className="site-container light-page__article">
          {page.paragraphs.map((paragraph, index) => (
            <p key={paragraph} data-aos="fade-up" data-aos-delay={(index % 3) * 60}>
              {paragraph}
            </p>
          ))}

          <section className="light-page__article-block" data-aos="fade-up">
            <h2>Servicios informáticos en {page.keywordName}</h2>
            <ul>
              {page.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </section>

          <section className="light-page__article-block" data-aos="fade-up">
            <h2>Preguntas frecuentes</h2>
            <div className="light-page__faq-list">
              {page.faqs.map((faq) => (
                <article className="light-page__faq-item" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="light-page__cta" data-aos="fade-up">
            <h2>Primero vemos el problema. Después decidimos la herramienta.</h2>
            <p>
              Si buscas consultoría informática en {page.keywordName}, podemos revisar tu caso y ver si necesitas
              software de gestión, automatización o desarrollo a medida.
            </p>
            <Link to="/analisis-gratuito" className="home-premium__cta">
              Analizar mi empresa
            </Link>
          </section>
        </div>
      </section>
    </article>
  );
}

export default LocalSeoPage;
