import React from 'react';

const projects = [
  {
    title: 'Industria metalmecánica · Reorganización de planta y oficina técnica',
    initial: 'Producción, compras y administración trabajaban con datos no sincronizados.',
    problem: 'Retrasos en planificación, desviaciones de coste y cierres mensuales lentos.',
    action:
      'Se rediseñó el flujo operativo, se integró el ERP con partes de producción y se automatizó el control de costes por orden.',
    results: ['-31% en horas administrativas', '-18% en desviación de costes', '+22% en cumplimiento de plazos'],
    tools: 'ERP sectorial, panel de control financiero y automatizaciones de validación.',
  },
  {
    title: 'Construcción · Digitalización completa de seguimiento de obra',
    initial: 'Partes y certificaciones manuales con retraso entre obra y oficina.',
    problem: 'Facturación tardía, baja visibilidad de márgenes y sobrecostes no detectados a tiempo.',
    action:
      'Implantación de sistema digital de partes, control económico por obra y cuadros diarios de rendimiento.',
    results: ['+40% en velocidad de facturación', '-24% en incidencias de imputación', '+17% de margen operativo'],
    tools: 'ConstructPro, integración documental y workflows de aprobación.',
  },
  {
    title: 'Servicios técnicos · Escalado operativo sin aumentar estructura',
    initial: 'Crecimiento comercial con procesos internos manuales y poca trazabilidad.',
    problem: 'Saturación del equipo de coordinación y pérdida de productividad en backoffice.',
    action:
      'Estandarización de procesos críticos, automatización de tareas repetitivas y seguimiento por KPI semanales.',
    results: ['-27% en carga administrativa', '+19% en capacidad de servicio', '-35% en errores operativos'],
    tools: 'Avero, RegIT y desarrollos a medida para coordinación de equipos.',
  },
];

function ProjectsPage() {
  return (
    <section className="section page-headroom">
      <div className="site-container">
        <div className="section-title-row">
          <p className="eyebrow">Casos reales</p>
          <h1>Proyectos ejecutados con impacto medible</h1>
          <p>
            Cada caso sigue una estructura clara: situación inicial, problema, acción, resultado y herramientas
            utilizadas.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
