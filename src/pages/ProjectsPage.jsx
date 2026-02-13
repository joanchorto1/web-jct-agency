import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { projects } from '../data/seoContent';

function ProjectsPage() {
  return (
    <section className="section page-headroom">
      <Helmet>
        <title>Casos reales de consultoría empresarial | Joan Chorto Consultor</title>
        <meta
          name="description"
          content="Proyectos reales de transformación empresarial en arquitectura, construcción, administración y servicios técnicos, con resultados medibles."
        />
      </Helmet>

      <div className="site-container">
        <div className="section-title-row" data-aos="fade-up">
          <p className="eyebrow">Casos reales</p>
          <h1>Proyectos ejecutados con impacto medible</h1>
          <p>
            Cada caso sigue una estructura clara: situación inicial, problema, acción, resultado y herramientas
            utilizadas.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article key={project.slug} className="project-card" data-aos="fade-up">
              <h2>{project.title}</h2>
              <ul>
                <li>
                  <strong>Situación inicial:</strong> {project.initial}
                </li>
                <li>
                  <strong>Problema real:</strong> {project.problem}
                </li>
                <li>
                  <strong>Acción realizada:</strong> {project.action}
                </li>
                <li>
                  <strong>Resultados medibles:</strong> {project.results.join(' · ')}
                </li>
                <li>
                  <strong>Herramientas utilizadas:</strong> {project.tools}
                </li>
              </ul>
              <Link to={`/proyectos/${project.slug}`} className="seo-link-button">
                Ver caso completo
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
