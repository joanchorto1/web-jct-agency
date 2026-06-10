import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, Navigate, useParams } from 'react-router-dom';
import { products } from '../data/productContent';

function ProductPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <Navigate to="/productos" replace />;
  }

  return (
    <article className="light-page">
      <Helmet>
        <title>{product.name} | Joan Chorto Consultor</title>
        <meta name="description" content={product.summary} />
      </Helmet>

      <section className="light-page__hero" data-aos="fade-up">
        <div className="site-container light-page__hero-grid">
          <div>
            <p className="light-page__eyebrow">{product.eyebrow}</p>
            <h1>{product.title}</h1>
            <p>{product.summary}</p>
            {product.labels ? (
              <div className="light-page__tag-cloud">
                {product.labels.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            ) : null}
            <Link to="/contacto#reserva" className="home-premium__cta">
              Analizar mi empresa
            </Link>
          </div>
          <img
            src={product.image}
            alt={product.name}
            className="light-page__hero-image light-page__hero-image--contain"
            data-aos="zoom-in"
            data-aos-delay="120"
          />
        </div>
      </section>

      <section className="light-page__section">
        <div className="site-container">
          <div className="light-page__section-head" data-aos="fade-up">
            <p className="light-page__eyebrow">Problema real</p>
            <h2>{product.problemTitle}</h2>
          </div>
          <div className="light-page__card-grid">
            {product.problems.map((point, index) => (
              <article className="light-page__card" key={point} data-aos="fade-up" data-aos-delay={index * 80}>
                <h3>{point}</h3>
              </article>
            ))}
          </div>
          <p className="light-page__statement" data-aos="fade-up">Resultado: trabajas mucho, pero no ves el margen hasta que ya es tarde.</p>
        </div>
      </section>

      <section className="light-page__section" data-aos="fade-up">
        <div className="site-container light-page__split">
          <div className="light-page__section-head">
            <p className="light-page__eyebrow">Solución</p>
            <h2>{product.name}</h2>
            <p>{product.definition}</p>
            {product.pricing ? <p className="light-page__product-pricing">{product.pricing}</p> : null}
          </div>
          <div className="light-page__text">
            <div className="light-page__mini-list">
              {product.does.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <p className="light-page__statement">{product.strategic}</p>
          </div>
        </div>
      </section>

      {product.sections ? (
        <section className="light-page__section" data-aos="fade-up">
          <div className="site-container light-page__product-sections">
            {product.sections.map((section) => (
              <article key={section.title} className="light-page__article-block">
                <h2>{section.title}</h2>
                {section.paragraphs
                  ? section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                  : null}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="light-page__section" data-aos="fade-up">
        <div className="site-container light-page__results-grid">
          <div>
            <p className="light-page__eyebrow">Para quién es</p>
            <div className="light-page__mini-list">
              {product.audience.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="light-page__eyebrow">Qué cambia</p>
            <div className="light-page__before-after">
              <article>
                <h3>Antes</h3>
                {product.before.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </article>
              <article>
                <h3>Después</h3>
                {product.after.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </article>
            </div>
          </div>
        </div>
      </section>

      {product.highlights ? (
        <section className="light-page__section" data-aos="fade-up">
          <div className="site-container">
            <div className="light-page__section-head">
              <p className="light-page__eyebrow">Diferenciación</p>
              <h2>Por qué no es solo otro software de facturación.</h2>
            </div>
            <div className="light-page__card-grid">
              {product.highlights.map((item) => (
                <article key={item} className="light-page__card">
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="light-page__section" data-aos="fade-up">
        <div className="site-container light-page__cta">
          <p className="light-page__eyebrow">Siguiente paso</p>
          <h2>Primero revisamos el problema. Después decidimos herramienta.</h2>
          <Link to="/analisis-gratuito" className="home-premium__cta">
            Pedir análisis gratuito
          </Link>
        </div>
      </section>
    </article>
  );
}

export default ProductPage;
