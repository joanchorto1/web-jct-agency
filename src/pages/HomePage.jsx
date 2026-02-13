import React from 'react';

const metrics = [
  { value: '+34%', label: 'Mejora media de eficiencia operativa en 12 meses' },
  { value: '150M€', label: 'Volumen gestionado en proyectos de transformación' },
  { value: '+200', label: 'Empresas asesoradas en industria, construcción y servicios' },
];

const services = [
  'Optimización de procesos',
  'Implantación de sistemas digitales',
  'ERP y herramientas propias',
  'Desarrollo a medida',
];

const testimonials = [
  {
    quote:
      'En 5 meses redujimos un 29% los tiempos de cierre administrativo y mejoramos el control de costes de obra.',
    author: 'Director General · Empresa constructora (65 empleados)',
  },
  {
    quote:
      'Pasamos de gestión reactiva a control diario de márgenes. La mejora fue inmediata y medible desde el primer trimestre.',
    author: 'Gerencia · Pyme industrial (42 empleados)',
  },
];

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="site-container hero__grid">
          <div>
            <p className="eyebrow">Transformación empresarial para pymes</p>
            <h1>Mejoramos procesos. Reducimos costes. Digitalizamos empresas.</h1>
            <p className="lead">
              Ayudo a empresarios a recuperar control sobre su operación, acelerar la toma de decisiones y convertir la
              gestión en una ventaja competitiva real.
            </p>
            <a href="/contacto#reserva" className="btn-primary">
              Reserva una sesión
            </a>
          </div>
          <aside className="hero__panel">
            <h2>Qué obtienes</h2>
            <ul>
              <li>Diagnóstico directo de cuellos de botella críticos.</li>
              <li>Plan de transformación por fases y prioridades.</li>
              <li>Implantación con foco en retorno económico.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="metrics-grid">
            {metrics.map((metric) => (
              <article key={metric.label} className="metric-card">
                <span>{metric.value}</span>
                <p>{metric.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-title-row">
            <h2>Servicios principales</h2>
            <p>Intervenciones ejecutadas para eliminar fricción operativa y profesionalizar la gestión.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service} className="service-card">
                {service}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-title-row">
            <h2>Resultados que ya han conseguido otros equipos</h2>
            <p>Sin teoría vacía. Sin presentaciones decorativas. Solo mejoras aplicadas y medibles.</p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.author} className="testimonial-card">
                <p>“{item.quote}”</p>
                <span>{item.author}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="site-container cta-box">
          <h2>Si quieres crecer sin perder control, este es el siguiente paso.</h2>
          <a href="/contacto#reserva" className="btn-primary">
            Reserva una sesión
          </a>
        </div>
      </section>
    </>
  );
}

export default HomePage;
