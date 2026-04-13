import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, Navigate, useParams } from 'react-router-dom';
import { problemPages } from './ProblemsPage';

function ProblemPage() {
  const { slug } = useParams();
  const article = problemPages.find((item) => item.slug === slug);

  if (!article) {
    return <Navigate to="/problemas" replace />;
  }

  return (
    <article className="light-page">
      <Helmet>
        <title>{article.title}</title>
        <meta name="description" content={`${article.title}. Cómo recuperar control, datos claros y procesos.`} />
      </Helmet>

      <section className="light-page__hero" data-aos="fade-up">
        <div className="site-container light-page__hero-grid">
          <div>
            <p className="light-page__eyebrow">{article.keyword}</p>
            <h1>{article.title}</h1>
            <p>Si esto pasa en tu empresa, no necesitas más ruido. Necesitas detectar dónde se rompe el proceso.</p>
            <Link to="/analisis-gratuito" className="home-premium__cta">
              Analizar mi empresa
            </Link>
          </div>
          <aside className="light-page__side-note" data-aos="zoom-in" data-aos-delay="120">
            <p className="light-page__eyebrow">Primer paso</p>
            <h2>Ordenar datos, proceso y responsables.</h2>
          </aside>
        </div>
      </section>

      <section className="light-page__section">
        <div className="site-container light-page__article">
          {article.paragraphs.slice(0, 4).map((paragraph, index) => (
            <p key={paragraph} data-aos="fade-up" data-aos-delay={index * 60}>{paragraph}</p>
          ))}

          <section className="light-page__article-block" data-aos="fade-up">
            <h2>Qué revisar primero</h2>
            <ul>
              {article.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="light-page__cta" data-aos="fade-up">
            <h2>En 45 minutos lo bajamos a tu caso.</h2>
            <p>Revisamos dónde se pierde tiempo, control y margen.</p>
            <Link to="/contacto#reserva" className="home-premium__cta">
              Reservar análisis
            </Link>
          </section>
        </div>
      </section>
    </article>
  );
}

export default ProblemPage;
