import React from 'react';
import heroBackground from '../components/img/hero_section-jc.png';

const partnerLogos = ['EGEA Arquitectura', 'VIM House', "Ajuntament de L'Aldea", 'Curmac Elevacions'];

const serviceCards = [
  { title: 'Implantación de nuevos sistemas digitales' },
  { title: 'Optimización de procesos de producción' },
  { title: 'Reestructuración organizativa' },
  { title: 'Optimización integral de procesos' },
];

const testimonials = [
  {
    quote:
      'JC Consultor nos ayudó a optimizar procesos clave de producción, logrando mejoras significativas en eficiencia y control.',
    author: 'Marta Gómez',
    role: 'Dirección Operativa',
  },
  {
    quote:
      'Gracias a su enfoque estratégico implantamos una transformación digital efectiva que mejoró la coordinación de toda la empresa.',
    author: 'Lluís Ferrer',
    role: 'Dirección General',
  },
];

const metrics = [
  { value: '+76%', label: 'Incremento en eficiencia' },
  { value: '+150M€', label: 'Facturación impulsada' },
  { value: '+200', label: 'Empresas asesoradas' },
  { value: '+200', label: 'Proyectos implementados' },
];

function HomePage() {
  return (
    <section className="welcome">
      <div className="site-container">
        <div className="welcome-frame">
          <section className="welcome-hero" style={{ backgroundImage: `url(${heroBackground})` }}>
            <div className="welcome-hero__content" data-aos="fade-up">
              <h1>Consultoría Estratégica para Empresas</h1>
              <p>
                Ayudo a empresarios de pymes industriales, construcción y servicios a mejorar procesos, reducir costes
                y escalar con una gestión más eficiente.
              </p>
              <a href="/contacto#reserva" className="btn-primary">
                Reserva una sesión
              </a>
              <ul>
                <li>Análisis y diagnóstico empresarial</li>
                <li>Estrategias personalizadas</li>
                <li>Gestión del cambio</li>
              </ul>
            </div>
          </section>

          <section className="welcome-logos" data-aos="fade-up">
            <h2>Empresas con las que he trabajado</h2>
            <div className="welcome-logos__list">
              {partnerLogos.map((logo) => (
                <span key={logo}>{logo}</span>
              ))}
            </div>
          </section>

          <section className="welcome-services" data-aos="fade-up">
            <h2>Servicios de Consultoría</h2>
            <div className="welcome-services__grid">
              {serviceCards.map((service) => (
                <article key={service.title} className="welcome-service-card" data-aos="zoom-in-up">
                  <h3>{service.title}</h3>
                </article>
              ))}
            </div>
            <a className="welcome-secondary-cta" href="/proyectos">
              Ver más proyectos
            </a>
          </section>

          <section className="welcome-testimonials" data-aos="fade-up">
            <h2>Opiniones de Clientes</h2>
            <div className="welcome-testimonials__grid">
              {testimonials.map((item) => (
                <article key={item.author} className="welcome-testimonial-card" data-aos="fade-up">
                  <span className="welcome-testimonial-card__quote">“</span>
                  <p>{item.quote}</p>
                  <div className="welcome-testimonial-card__stars">★★★★★</div>
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="welcome-metrics" data-aos="fade-up">
            {metrics.map((metric) => (
              <article key={metric.label}>
                <span>{metric.value}</span>
                <p>{metric.label}</p>
              </article>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
