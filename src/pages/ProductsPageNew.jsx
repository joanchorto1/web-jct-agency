import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { products } from '../data/productContent';

function ProductsPageNew() {
  return (
    <article className="light-page">
      <Helmet>
        <title>Productos para ordenar gestión, obra y facturación</title>
        <meta
          name="description"
          content="Productos propios para facturación, obra y trazabilidad: Avero, ConstructPro y Regit."
        />
      </Helmet>

      <section className="light-page__hero" data-aos="fade-up">
        <div className="site-container light-page__hero-grid">
          <div>
            <p className="light-page__eyebrow">Productos</p>
            <h1>Productos para ver dónde se pierde el dinero.</h1>
            <p>Primero el problema. Después la herramienta: facturación, obra o control interno.</p>
            <Link to="/analisis-gratuito" className="home-premium__cta">
              Ver por dónde empezar
            </Link>
          </div>
          <div className="light-page__hero-icon" aria-hidden="true" data-aos="zoom-in" data-aos-delay="120">
            <svg viewBox="0 0 120 120" focusable="false">
              <path d="M45 34 18 60l27 26" />
              <path d="M75 34 102 60 75 86" />
              <path d="M66 24 54 96" />
            </svg>
          </div>
        </div>
      </section>

      <section className="light-page__section">
        <div className="site-container light-page__product-list">
          {products.map((product, index) => (
            <article className="light-page__product-row" key={product.slug} data-aos="fade-up" data-aos-delay={index * 90}>
              <img src={product.image} alt={product.name} />
              <div>
                <p className="light-page__eyebrow">{product.eyebrow}</p>
                <h2>{product.name}</h2>
                <h3>{product.title}</h3>
                <p>{product.summary}</p>
                <Link to={`/productos/${product.slug}`} className="seo-link-button">
                  Ver producto
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}

export default ProductsPageNew;
