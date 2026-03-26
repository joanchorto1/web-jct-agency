import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, Navigate, useParams } from 'react-router-dom';
import { seoArticlesWithContent } from '../data/seoArticles';

function SeoArticlePage() {
  const { slug } = useParams();
  const article = seoArticlesWithContent.find((item) => item.slug === slug);

  if (!article) {
    return <Navigate to="/guias" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{article.title}</title>
        <meta
          name="description"
          content={`${article.title}. Guía práctica para empresas que buscan resolver ${article.keyword} con más control, menos errores y una operativa más rentable.`}
        />
      </Helmet>

      <article className="section seo-article">
        <div className="site-container">
          <div className="section-title-row seo-article__head">
            <p className="eyebrow">{article.groupLabel}</p>
            <h1>{article.title}</h1>
            <p>
              Esta guía responde a la búsqueda <strong>{article.keyword}</strong> con un enfoque práctico para dirección,
              administración y equipos operativos que necesitan más control y menos fricción.
            </p>
          </div>

          <div className="seo-article__layout">
            <div className="seo-article__body">
              {article.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <section className="seo-article__block">
                <h2>Qué conviene revisar primero</h2>
                <ul>
                  {article.checklist.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="seo-article__block">
                <h2>Preguntas frecuentes</h2>
                <div className="seo-article__faq-list">
                  {article.faqs.map((faq) => (
                    <div key={faq.question} className="seo-article__faq-item">
                      <h3>{faq.question}</h3>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="cta-box seo-article__cta">
                <h2>¿Quieres aterrizar esta mejora en tu empresa?</h2>
                <p>
                  Si tu caso encaja con <strong>{article.keyword}</strong>, podemos revisar el proceso actual, detectar
                  puntos de pérdida y plantear un plan de implantación realista.
                </p>
                <div className="seo-article__cta-actions">
                  <a href="/contacto#reserva" className="btn-primary">
                    Solicitar diagnóstico
                  </a>
                  <Link to="/guias" className="seo-hub__link">
                    Ver más guías
                  </Link>
                </div>
              </section>
            </div>

            <aside className="seo-article__sidebar">
              <div className="seo-article__sidebar-card">
                <h2>Keyword principal</h2>
                <p>{article.keyword}</p>
              </div>
              <div className="seo-article__sidebar-card">
                <h2>Enfoque</h2>
                <p>{article.groupLabel}</p>
              </div>
              <div className="seo-article__sidebar-card">
                <h2>Siguiente paso</h2>
                <p>Ordenar datos, proceso y responsables antes de implantar más herramientas.</p>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}

export default SeoArticlePage;
