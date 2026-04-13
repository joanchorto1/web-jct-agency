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

      <article className="light-page seo-hub">
        <section className="light-page__hero" data-aos="fade-up">
          <div className="site-container">
            <p className="light-page__eyebrow">Recursos SEO</p>
            <h1>Guías para empresas que quieren ordenar gestión, procesos y rentabilidad</h1>
            <p>
              Aquí reunimos contenidos orientados a problemas reales de dirección, administración, facturación, stock,
              obra, servicios y digitalización. Cada guía desarrolla una intención de búsqueda concreta y plantea una
              salida práctica desde la operativa, no desde la teoría.
            </p>
          </div>
        </section>

        <section className="light-page__section">
          <div className="site-container">
            <div className="seo-hub__grid">
              {seoArticlesWithContent.map((article, index) => (
                <article
                  key={article.slug}
                  className="light-page__card seo-hub__card"
                  data-aos="fade-up"
                  data-aos-delay={(index % 3) * 80}
                >
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
      </article>
    </>
  );
}

export default SeoHubPage;
