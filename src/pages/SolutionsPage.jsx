import React from 'react';

const solutions = [
  {
    name: 'Avero',
    description:
      'Sistema de control operativo para ordenar tareas, validar ejecución y reducir trabajo administrativo duplicado.',
  },
  {
    name: 'ConstructPro',
    description:
      'Entorno para seguimiento de obra, control de costes y coordinación técnica con información consolidada en tiempo real.',
  },
  {
    name: 'RegIT',
    description:
      'Plataforma para trazabilidad documental, cumplimiento y estandarización de procesos críticos en equipos exigentes.',
  },
  {
    name: 'Proyectos a medida',
    description:
      'Desarrollo de herramientas específicas cuando la operación requiere flujos, reglas y paneles adaptados al negocio.',
  },
];

function SolutionsPage() {
  return (
    <section className="section page-headroom">
      <div className="site-container">
        <div className="section-title-row">
          <p className="eyebrow">Soluciones</p>
          <h1>Herramientas integradas en una estrategia empresarial</h1>
          <p>
            No se trata de vender software. Se trata de implantar sistemas que sostengan decisiones, ejecución y
            rentabilidad en cada área de la empresa.
          </p>
          <p className="key-message">Cada empresa necesita un sistema diferente.</p>
        </div>

        <div className="solution-grid">
          {solutions.map((solution) => (
            <article key={solution.name} className="solution-card">
              <h2>{solution.name}</h2>
              <p>{solution.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionsPage;
