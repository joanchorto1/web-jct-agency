import React from 'react';

const moments = [
  'Cuando la empresa crece y la estructura interna ya no sostiene el ritmo.',
  'Cuando hay margen de facturación, pero baja eficiencia y rentabilidad real.',
  'Cuando la dirección necesita decisiones basadas en datos y no en urgencias.',
];

const transformations = [
  'Reestructuración de procesos y responsabilidades para ganar velocidad de ejecución.',
  'Implantación de sistemas de control operativo y financiero orientados a dirección.',
  'Alineación de equipos con modelos de gestión más claros, previsibles y escalables.',
];

const impact = [
  'Mejor control de costes y márgenes por línea de negocio.',
  'Reducción de tiempos improductivos en áreas administrativas y operativas.',
  'Mayor capacidad para crecer sin multiplicar complejidad interna.',
];

function ConsultingPage() {
  return (
    <section className="section page-headroom">
      <div className="site-container">
        <div className="section-title-row" data-aos="fade-up">
          <p className="eyebrow">Consultoría estratégica</p>
          <h1>Intervención de alto nivel para empresas que quieren escalar con orden</h1>
          <p>
            Este servicio está diseñado para dirección general y gerencias que necesitan transformar la operación con
            decisiones sólidas, ejecución rigurosa y resultados sostenibles.
          </p>
        </div>

        <div className="consulting-layout">
          <article className="consulting-card" data-aos="fade-up">
            <h2>Cuándo necesitas consultoría estratégica</h2>
            <ul>
              {moments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="consulting-card" data-aos="fade-up">
            <h2>Transformaciones que se pueden ejecutar</h2>
            <ul>
              {transformations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="consulting-card" data-aos="fade-up">
            <h2>Impacto esperado en negocio</h2>
            <ul>
              {impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="cta-box cta-box--consulting" data-aos="fade-up">
          <h2>Si estás en fase de crecimiento, necesitas estructura para sostenerlo.</h2>
          <a href="/contacto#reserva" className="btn-primary">
            Solicita reunión estratégica
          </a>
        </div>
      </div>
    </section>
  );
}

export default ConsultingPage;
