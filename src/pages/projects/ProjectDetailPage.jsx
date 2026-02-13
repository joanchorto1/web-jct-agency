import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../../data/seoContent';

function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="section page-headroom">
        <div className="site-container section-title-row">
          <h1>Proyecto no encontrado</h1>
          <p>El caso solicitado no está disponible.</p>
          <Link className="btn-primary" to="/proyectos">
            Volver a proyectos
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section page-headroom">
      <Helmet>
        <title>{project.metaTitle}</title>
        <meta name="description" content={project.metaDescription} />
      </Helmet>

      <div className="site-container">
        <article className="seo-detail-card" data-aos="fade-up">
          <p className="eyebrow">Caso real · {project.sector}</p>
          <h1>{project.title}</h1>

          <h2>Situación inicial</h2>
          <p>{project.initial}</p>

          <h2>Problema real</h2>
          <p>{project.problem}</p>

          <h2>Acción realizada</h2>
          <p>{project.action}</p>

          <h2>Resultados medibles</h2>
          <ul>
            {project.results.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Herramientas utilizadas</h2>
          <p>{project.tools}</p>

          <div className="seo-detail-actions">
            <Link to="/contacto#reserva" className="btn-primary">
              Quiero aplicar este enfoque
            </Link>
            <Link to="/proyectos" className="seo-link-button">
              Ver todos los proyectos
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ProjectDetailPage;
