import React from 'react';
import { Helmet } from 'react-helmet';

const frictionPoints = [
  {
    icon: 'route',
    text: 'Los equipos han creado sus propios atajos porque el sistema actual no responde a la realidad diaria.',
  },
  {
    icon: 'data',
    text: 'Cada departamento trabaja con criterios distintos y la dirección recibe información tarde, incompleta o duplicada.',
  },
  {
    icon: 'flow',
    text: 'El flujo comercial, operativo, administrativo y financiero no está conectado de principio a fin.',
  },
  {
    icon: 'tool',
    text: 'Las herramientas genéricas obligan a adaptar la empresa al programa, en vez de adaptar el sistema a la empresa.',
  },
];

const diagnosticAreas = [
  'Flujos de trabajo reales, no solo organigramas.',
  'Puntos de bloqueo entre departamentos.',
  'Datos críticos para dirección y cómo se generan.',
  'Tareas repetidas, excepciones y dependencias de personas clave.',
  'Herramientas actuales, integraciones posibles y partes que conviene sustituir.',
  'Impacto económico de errores, retrasos y falta de control.',
];

const method = [
  {
    step: '01',
    title: 'Auditoría operativa',
    text: 'Entiendo cómo trabaja la empresa, dónde se pierde velocidad y qué decisiones dependen hoy de intuición o urgencia.',
  },
  {
    step: '02',
    title: 'Arquitectura de solución',
    text: 'Defino la estructura: procesos, responsabilidades, datos, automatizaciones y software necesario para resolver el problema concreto.',
  },
  {
    step: '03',
    title: 'Implementación controlada',
    text: 'Construimos o adaptamos las piezas necesarias sin paralizar la operativa y con foco en adopción real por parte del equipo.',
  },
  {
    step: '04',
    title: 'Control para dirección',
    text: 'La empresa termina con indicadores claros, menos dependencia de personas clave y una forma más fiable de tomar decisiones.',
  },
];

const outcomes = [
  'Mapa claro de procesos críticos y cuellos de botella.',
  'Prioridades de intervención ordenadas por impacto en negocio.',
  'Soluciones específicas: automatizaciones, software propio, integraciones o cambios de proceso.',
  'Datos fiables para controlar margen, tiempos, carga de trabajo y estado real de la operación.',
];

const qualifiers = [
  {
    icon: 'scale',
    text: 'Facturas más de 1M al año y el crecimiento ya exige otra estructura.',
  },
  {
    icon: 'teams',
    text: 'Tienes varios equipos, sedes, líneas de negocio o procesos largos.',
  },
  {
    icon: 'fit',
    text: 'El software estándar se queda corto o fuerza demasiados parches.',
  },
  {
    icon: 'root',
    text: 'Quieres resolver problemas de raíz, no comprar otra herramienta que nadie usará bien.',
  },
];

const icons = {
  route: (
    <>
      <path d="M5 6h4a3 3 0 0 1 0 6H7a3 3 0 0 0 0 6h12" />
      <path d="M16 15l3 3-3 3" />
    </>
  ),
  data: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </>
  ),
  flow: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" />
      <path d="M10 7h3a4 4 0 0 1 4 4v3" />
      <path d="M14 11l3 3 3-3" />
    </>
  ),
  tool: (
    <>
      <path d="M14.5 5.5a4 4 0 0 0 4 4L9 19l-4-4 9.5-9.5Z" />
      <path d="M6.5 16.5l1 1" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16" />
      <path d="M6 8h12" />
      <path d="M7 8l-3 6h6L7 8Z" />
      <path d="M17 8l-3 6h6l-3-6Z" />
    </>
  ),
  teams: (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 20a5 5 0 0 1 10 0" />
      <path d="M13.5 20a4 4 0 0 1 7 0" />
    </>
  ),
  fit: (
    <>
      <path d="M4 8V4h4" />
      <path d="M20 8V4h-4" />
      <path d="M4 16v4h4" />
      <path d="M20 16v4h-4" />
      <path d="M9 12h6" />
    </>
  ),
  root: (
    <>
      <path d="M12 4v7" />
      <path d="M12 11c-4 0-6 2.5-6 6" />
      <path d="M12 11c4 0 6 2.5 6 6" />
      <path d="M9 17l-3 3" />
      <path d="M15 17l3 3" />
    </>
  ),
};

function PremiumIcon({ type }) {
  return (
    <svg className="jc-premium__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {icons[type]}
    </svg>
  );
}

function JcConsultorPremiumPage() {
  return (
    <>
      <Helmet>
        <title>JC Consultor Premium | Soluciones específicas para empresas +1M</title>
        <meta
          name="description"
          content="Consultoría premium para empresas que facturan más de 1M y necesitan soluciones específicas para procesos complejos, flujos largos y problemas operativos concretos."
        />
      </Helmet>

      <div className="jc-premium">
        <section className="jc-premium__hero">
          <div className="site-container jc-premium__hero-inner" data-aos="fade-up">
            <p className="jc-premium__eyebrow">JC Consultor Premium</p>
            <h1 className="jc-premium__hero-title">
              <span>
                Soluciones específicas para empresas que facturan <mark>más de 1M.</mark>
              </span>
            </h1>
            <p className="jc-premium__hero-subtitle">Sin software genérico. Sin procesos improvisados.</p>
            <p className="jc-premium__hero-copy">
              Para empresas con procesos complejos, equipos conectados entre sí y flujos de trabajo que necesitan una
              solución pensada para su operativa real.
            </p>
            <div className="jc-premium__actions">
              <a href="/contacto#reserva" className="jc-premium__button">
                Solicitar diagnóstico premium
              </a>
            </div>
          </div>
        </section>

        <section className="jc-premium__bar" data-aos="fade-up">
          <div className="site-container jc-premium__bar-grid">
            <span>Procesos complejos</span>
            <span>Flujos largos</span>
            <span>Soluciones a medida</span>
            <span>Control para dirección</span>
          </div>
        </section>

        <section className="jc-premium__section">
          <div className="site-container jc-premium__split">
            <div data-aos="fade-up">
              <p className="jc-premium__eyebrow">El problema</p>
              <h2>Cuando la empresa crece, el caos también escala.</h2>
            </div>
            <div className="jc-premium__text-stack" data-aos="fade-up">
              <p>
                En empresas de cierto volumen, el problema rara vez es una tarea aislada. El problema suele estar en la
                relación entre procesos, personas, datos y herramientas.
              </p>
              <p className="jc-premium__statement">
                No necesitas otro software genérico. Necesitas una solución pensada para tu operativa real.
              </p>
            </div>
          </div>

          <div className="site-container jc-premium__grid">
            {frictionPoints.map((point) => (
              <article key={point.text} className="jc-premium__card" data-aos="fade-up">
                <PremiumIcon type={point.icon} />
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="jc-premium__section jc-premium__section--dark">
          <div className="site-container jc-premium__split">
            <div data-aos="fade-up">
              <p className="jc-premium__eyebrow">Diagnóstico</p>
              <h2>Antes de construir nada, hay que entender dónde se rompe el sistema.</h2>
            </div>
            <ul className="jc-premium__check-list" data-aos="fade-up">
              {diagnosticAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="metodo" className="jc-premium__section">
          <div className="site-container jc-premium__section-head" data-aos="fade-up">
            <p className="jc-premium__eyebrow">Método</p>
            <h2>Intervención estratégica con ejecución técnica.</h2>
            <p>
              La consultoría no termina en un informe. El objetivo es dejar una estructura que funcione en el día a día.
            </p>
          </div>

          <div className="site-container jc-premium__steps">
            {method.map((item) => (
              <article key={item.step} className="jc-premium__step" data-aos="fade-up">
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="jc-premium__section">
          <div className="site-container jc-premium__split jc-premium__split--reverse">
            <div data-aos="fade-up">
              <p className="jc-premium__eyebrow">Resultado</p>
              <h2>Menos dependencia, más control y decisiones mejor informadas.</h2>
            </div>
            <div className="jc-premium__outcomes" data-aos="fade-up">
              {outcomes.map((outcome) => (
                <p key={outcome}>{outcome}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="jc-premium__section jc-premium__qualify">
          <div className="site-container jc-premium__section-head" data-aos="fade-up">
            <p className="jc-premium__eyebrow">Encaje</p>
            <h2>Esto es para empresas que necesitan precisión, no plantillas.</h2>
          </div>
          <div className="site-container jc-premium__qualify-grid">
            {qualifiers.map((qualifier) => (
              <div key={qualifier.text} className="jc-premium__qualifier" data-aos="fade-up">
                <PremiumIcon type={qualifier.icon} />
                <span>{qualifier.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="jc-premium__cta" data-aos="fade-up">
          <div className="site-container jc-premium__cta-inner">
            <p className="jc-premium__eyebrow">Siguiente paso</p>
            <h2>Si tu empresa ya factura más de 1M, el coste de seguir improvisando es demasiado alto.</h2>
            <p>
              Revisamos tu situación, detectamos el problema principal y vemos si tiene sentido una intervención premium.
            </p>
            <a href="/contacto#reserva" className="jc-premium__button">
              Solicitar reunión estratégica
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default JcConsultorPremiumPage;
