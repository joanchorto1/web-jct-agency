import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { seoArticlesWithContent } from '../data/seoArticles';

function SeoHubPage() {
  return (
    <>
      <Helmet>
        <title>Guías de gestión, digitalización y software para pymes</title>
        <meta
          name="description"
          content="Recursos y guías SEO sobre gestión empresarial, automatización, ERP, facturación, stock, construcción y digitalización de pymes en España."
        />
      </Helmet>

      <section className="section seo-hub">
        <div className="site-container">
          <div className="section-title-row">
            <p className="eyebrow">Recursos SEO</p>
            <h1>Guías para empresas que quieren ordenar gestión, procesos y rentabilidad</h1>
            <p>
              Aquí reunimos contenidos orientados a problemas reales de dirección, administración, facturación, stock,
              obra, servicios y digitalización. Cada guía desarrolla una intención de búsqueda concreta y plantea una
              salida práctica desde la operativa, no desde la teoría.
            </p>
          </div>

          <div className="seo-hub__grid">
            {seoArticlesWithContent.map((article) => (
              <article key={article.slug} className="seo-hub__card">
                <span className="seo-hub__tag">{article.groupLabel}</span>
                <h2>{article.title}</h2>
                <p>{article.paragraphs[0]}</p>
                <Link to={`/guias/${article.slug}`} className="seo-hub__link">
                  Leer guía
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SeoHubPage;
