import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { seoArticlesWithContent } from '../data/seoArticles';

export const problemPages = seoArticlesWithContent.filter((article) => article.category === 'pain').slice(0, 10);

function ProblemsPage() {
  return (
    <article className="light-page">
      <Helmet>
        <title>Problemas comunes en empresas | Joan Chorto Consultor</title>
        <meta
          name="description"
          content="Problemas comunes en empresas: Excel, stock, facturas, duplicidades, caos administrativo, rentabilidad y procesos manuales."
        />
      </Helmet>

      <section className="light-page__hero" data-aos="fade-up">
        <div className="site-container light-page__hero-grid">
          <div>
            <p className="light-page__eyebrow">Problemas</p>
            <h1>Señales de que la gestión te está costando dinero.</h1>
            <p>Diez páginas SEO para problemas concretos. Sin teoría. Con el punto de partida claro.</p>
            <Link to="/analisis-gratuito" className="home-premium__cta">
              Analizar mi caso
            </Link>
          </div>
          <div className="home-premium__hero-board" data-aos="zoom-in" data-aos-delay="120">
            <div className="home-premium__hero-board-main">
              <span>10</span>
              <p>Problemas habituales en pymes con operativa desordenada.</p>
            </div>
            <div className="home-premium__hero-board-search">
              <span>Stock</span>
              <span>Facturas</span>
              <span>Excel</span>
              <strong>Control</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="light-page__section">
        <div className="site-container">
          <div className="light-page__card-grid light-page__card-grid--three">
            {problemPages.map((article, index) => (
              <article className="light-page__card" key={article.slug} data-aos="fade-up" data-aos-delay={(index % 3) * 80}>
                <p className="light-page__eyebrow">{article.keyword}</p>
                <h3>{article.title}</h3>
                <p>{article.paragraphs[0].slice(0, 210)}...</p>
                <Link to={`/problemas/${article.slug}`} className="seo-link-button">
                  Ver problema
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

export default ProblemsPage;
