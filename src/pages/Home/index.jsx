import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layouts/layout';

import './HomeStatic.css';
const Home = () => {
  const agendaHref = '/agenda';

  const valuePillars = [
    {
      label: 'Sin burocracia',
      title: 'Operativa sin fricción',
      description:
        'Unifico la información de oficina, taller y obra para que los partes, costes y facturas fluyan sin esperas ni duplicidades.',
    },
    {
      label: 'Automatizaciones seguras',
      title: 'Procesos a prueba de errores',
      description:
        'Diseño validaciones y flujos automáticos que evitan olvidos y re-trabajos. Menos incidencias, más control y trazabilidad real.',
    },
    {
      label: 'Acompañamiento',
      title: 'Adopción con personas en mente',
      description:
        'Trabajo mano a mano con los equipos para que la tecnología se use de verdad. Formación, guías y seguimiento para mantener los resultados.',
    },
  ];

  const quickWins = [
    {
      step: 'Semana 1',
      title: 'Diagnóstico accionable',
      detail: 'Reviso flujos críticos, mido pérdidas y priorizo iniciativas con retorno claro. Obtienes un mapa de acciones inmediato.',
    },
    {
      step: 'Semanas 2-3',
      title: 'Implantación ágil',
      detail: 'Pruebo automatizaciones en un entorno seguro, conecto herramientas y valido datos con tu equipo antes de escalar.',
    },
    {
      step: 'Semana 4',
      title: 'Arranque y soporte',
      detail: 'Formación práctica, checklist de adopción y seguimiento de KPIs. Ajustamos hasta que los ahorros se vean en horas y facturación.',
    },
  ];

  const faqs = [
    {
      question: '¿Qué necesito tener preparado para el diagnóstico?',
      answer:
        'Solo una conversación de 20 minutos y acceso a tus flujos actuales (partes, órdenes de trabajo, facturación y seguimiento de costes). Yo me encargo del análisis.',
    },
    {
      question: '¿Trabajas con mis herramientas actuales o propones nuevas?',
      answer:
        'Parto de lo que ya utilizas y solo incorporo nuevas soluciones si aportan valor claro. El objetivo es simplificar, no sumar complejidad.',
    },
    {
      question: '¿Cómo aseguras que el equipo adopte los cambios?',
      answer:
        'Preparo guías sencillas, sesiones de formación y acompañamiento durante las primeras semanas. Medimos uso y resolvemos dudas rápido.',
    },
  ];

  const implementationHighlights = [
    {
      label: 'Paso 1',
      title: 'Diagnóstico cuantificable',
      description:
        'El diagnóstico cuantifica las pérdidas y define prioridades. Recibes un informe claro con mejoras rápidas y proyectos de mayor alcance según impacto y esfuerzo.',
      bullets: ['Mapa de pérdidas en tiempo y coste real.', 'Priorización por impacto y esfuerzo.'],
    },
    {
      label: 'Paso 2',
      title: 'Soporte continuo',
      description:
        'Acompañamos en la implantación técnica, formación de usuarios y seguimiento post-implantación. Ajustamos procesos y medimos resultados para asegurar adopción.',
      bullets: ['Formación a equipos clave.', 'Seguimiento y ajustes tras el lanzamiento.'],
    },
    {
      label: 'Paso 3',
      title: 'KPIs accionables',
      description:
        'Proponemos indicadores de seguimiento para medir eficiencia, reducción de errores y mejoras financieras. Así priorizamos nuevas automatizaciones con retorno claro.',
      bullets: ['Indicadores de eficiencia y calidad.', 'Prioridad sobre nuevas automatizaciones.'],
    },
  ];

  // Estilos en línea para los botones de contacto
  const btnPrimaryStyle = {
    background: '#0d6efd',
    color: '#ffffff',
    padding: '10px 16px',
    borderRadius: '12px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    border: '1px solid rgba(13,110,253,0.15)',
    boxShadow: '0 4px 10px rgba(13,110,253,0.06)'
  };

  const btnWhatsStyle = {
    background: '#25D366',
    color: '#ffffff',
    padding: '9px 14px',
    borderRadius: '12px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    border: '1px solid rgba(37,211,102,0.15)',
    boxShadow: '0 3px 8px rgba(37,211,102,0.06)'
  };

  const btnSecondaryStyle = {
    background: '#e9ecef',
    color: '#0d6efd',
    padding: '9px 14px',
    borderRadius: '12px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    border: '1px solid rgba(13,110,253,0.12)',
    boxShadow: '0 3px 8px rgba(13,110,253,0.05)'
  };

  const contactRowStyle = {
    display: 'flex',
    gap: '0.85rem',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '0.9rem'
  };

  const doubtCardStyle = {
    background: '#f8f9fa',
    padding: '12px',
    borderRadius: '10px',
    border: '1px solid #e9ecef',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  };

  return (
    <>
      <Helmet>
        <title>Digitalización y automatización para empresas eficaces</title>
        <meta
          name="description"
          content="Consultoría especializada en digitalización y automatización para empresas que buscan mejorar la gestión y aumentar la eficiencia operativa. Realizamos diagnósticos prácticos y cuantificables, mapeo de procesos y detección de pérdidas para diseñar soluciones que conectan taller, oficina y obra. Implantamos herramientas adaptadas, automatizaciones seguras y procesos que reducen errors i duplicidades, acceleren la facturació i milloren el control financer. Acompanyem amb formació, documentació i suport per garantir l'adopció i manteniment de les millores en el temps. Treballem amb companyies de manteniment, indústria i serveis, prioritzant intervencions amb impacte real en costos i temps. Si necessites una consultoria pragmàtica que combini criteri de negoci i tecnologia per avançar cap a una empresa més eficient i digitalitzada, reserva una sessió de diagnòstic i rebràs una fulla de ruta amb passos concrets i realistes d'implementació."
        />
      </Helmet>

      <Layout>
        <div className="home-static">
          <section className="home-static__hero" aria-labelledby="hero-heading">
            <div className="home-static__section home-static__hero-content">
              <div className="home-static__hero-grid">
                <div>
                  <div className="home-static__eyebrow">Digitalización + Automatización + Gestión</div>
                  <h1 id="hero-heading" className="home-static__hero-title">
                    Digitalización y eficiencia para empresas profesionales
                  </h1>
                  <p className="home-static__hero-text">
                    Analizo procesos, elimino pérdidas y diseño automatizaciones que ahorran horas y reducen errores. Trabajo para que tu equipo
                    dedique menos tiempo a tareas administrativas y más tiempo a decisiones que aportan valor.
                  </p>
                  <div className="home-static__hero-badges" aria-label="Garantías del servicio">
                    <div className="home-static__pill">
                      <span className="home-static__pill-dot" aria-hidden="true" />
                      <span>Sesiones sin tecnicismos</span>
                    </div>
                    <div className="home-static__pill">
                      <span className="home-static__pill-dot" aria-hidden="true" />
                      <span>Plan de acción en 72h</span>
                    </div>
                    <div className="home-static__pill">
                      <span className="home-static__pill-dot" aria-hidden="true" />
                      <span>Resultados medibles</span>
                    </div>
                  </div>
                  <div className="home-static__hero-actions">
                    <a href={agendaHref} className="home-static__primary-btn">
                      Reserva diagnóstico
                    </a>
                    <a href="#metodo" className="home-static__secondary-btn">
                      Ver método
                    </a>
                  </div>

                  <div className="home-static__hero-stats" aria-label="Impacto medio">
                    <div className="home-static__stat-card">
                      <div className="home-static__stat-value">-40%</div>
                      <div className="home-static__stat-label">tiempo administrativo</div>
                    </div>
                    <div className="home-static__stat-card">
                      <div className="home-static__stat-value">0 papel</div>
                      <div className="home-static__stat-label">partes y duplicidades</div>
                    </div>
                    <div className="home-static__stat-card">
                      <div className="home-static__stat-value">+2 días</div>
                      <div className="home-static__stat-label">a la factura cada semana</div>
                    </div>
                  </div>
                </div>

                <div className="home-static__hero-card" aria-labelledby="hero-card-heading">
                  <h2 id="hero-card-heading">Qué resuelvo</h2>
                  <ul>
                    <li>
                      <span className="home-static__hero-card-bullet" aria-hidden="true" />
                      Horas perdidas transfiriendo partes a facturación manualmente.
                    </li>
                    <li>
                      <span className="home-static__hero-card-bullet" aria-hidden="true" />
                      Errores por información desconectada entre oficina, taller y obra.
                    </li>
                    <li>
                      <span className="home-static__hero-card-bullet" aria-hidden="true" />
                      Falta de visibilidad en tiempo real sobre trabajos, costes y márgenes.
                    </li>
                  </ul>
                  <div className="home-static__hero-note">
                    Primera sesión de diagnóstico <span>gratuita</span> para empresas con más de 8 empleados.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="home-static__section" aria-labelledby="pilares-heading">
            <div className="home-static__section-header home-static__section-header--compact">
              <h2 id="pilares-heading" className="home-static__section-title">Un enfoque ejecutivo y práctico</h2>
              <p className="home-static__section-text">
                Aporto una mirada de negocio y tecnología para reducir fricción operativa. Cada entrega incluye documentación clara y decisiones respaldadas por datos.
              </p>
            </div>

            <div className="home-static__pillars-grid">
              {valuePillars.map((pillar) => (
                <article key={pillar.title} className="home-static__pillar-card">
                  <div className="home-static__card-label">{pillar.label}</div>
                  <h3 className="home-static__card-title">{pillar.title}</h3>
                  <p className="home-static__card-text">{pillar.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="metodo" className="home-static__section" aria-labelledby="metodo-heading">
            <div className="home-static__section-header">
              <h2 id="metodo-heading" className="home-static__section-title">
                Método práctico para digitalizar y automatizar
              </h2>
              <p className="home-static__section-text">
                Un proceso estructurado reduce la incertidumbre: diagnóstico, priorización, implementación y seguimiento.
              </p>
            </div>

            <div className="home-static__cards-grid">
              <article className="home-static__card">
                <div className="home-static__card-subtitle">1 · Análisis</div>
                <h3 className="home-static__card-title">Mapeo detallado de procesos</h3>
                <p className="home-static__card-text">
                  Entrevistas con equipos, revisión de registros y medición de tiempos. Identificamos cuellos de botella, tareas repetitivas
                  y puntos con riesgo de error para proponer soluciones concretas.
                </p>
              </article>

              <article className="home-static__card">
                <div className="home-static__card-subtitle">2 · Optimización</div>
                <h3 className="home-static__card-title">Rediseño orientado al resultado</h3>
                <p className="home-static__card-text">
                  Simplificamos flujos, eliminamos duplicidades y establecemos controles que aseguren calidad de datos y continuidad operativa.
                </p>
              </article>

              <article className="home-static__card">
                <div className="home-static__card-subtitle">3 · Automatización</div>
                <h3 className="home-static__card-title">Sistemas que aceleran tu gestión</h3>
                <p className="home-static__card-text">
                  Implementamos integraciones y automatizaciones que reducen entradas manuales y sincronizan información hasta la facturación.
                </p>
              </article>
            </div>

            <div className="home-static__method-details" style={{ gridArea: 'method-details', marginTop: '2rem' }}>
              <div className="home-static__insight-grid" role="list">
                {implementationHighlights.map((item) => (
                  <article key={item.title} className="home-static__insight-card" role="listitem">
                    <div className="home-static__insight-label">{item.label}</div>
                    <h3 className="home-static__section-subtitle home-static__insight-title">{item.title}</h3>
                    <p className="home-static__section-text home-static__insight-text">{item.description}</p>
                    <ul className="home-static__insight-list">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="home-static__section" aria-labelledby="plan-heading">
            <div className="home-static__section-header home-static__section-header--compact">
              <h2 id="plan-heading" className="home-static__section-title">Qué pasa en el primer mes</h2>
              <p className="home-static__section-text">
                Un plan corto, con entregables semanales y sin promesas vagas. Te digo qué haremos, cuándo y con qué indicador mediremos el resultado.
              </p>
            </div>

            <div className="home-static__timeline">
              {quickWins.map((item) => (
                <article key={item.title} className="home-static__timeline-card">
                  <div className="home-static__timeline-step">{item.step}</div>
                  <h3 className="home-static__timeline-title">{item.title}</h3>
                  <p className="home-static__timeline-text">{item.detail}</p>
                </article>
              ))}
            </div>

            <div className="home-static__quote" aria-label="Compromiso con la ejecución">
              <div className="home-static__quote-mark" aria-hidden="true">“</div>
              <p>
                No vendo software ni licencias. Mi trabajo es que tus procesos funcionen, que el equipo los use y que la dirección vea el impacto en horas y facturación.
              </p>
              <div className="home-static__quote-author">Joan Chorto, Consultor</div>
            </div>
          </section>

          <section id="resultados" className="home-static__section" aria-labelledby="resultados-heading">
            <div className="home-static__section-header">
              <h2 id="resultados-heading" className="home-static__section-title">
                Resultados tangibles en gestión y eficiencia
              </h2>
              <p className="home-static__section-text">
                Casos reales muestran reducciones de tiempo y mejoras en control y facturación tras implantar automatizaciones.
              </p>
            </div>

            <div className="home-static__cards-grid home-static__cards-grid--results">
              <article className="home-static__card">
                <div className="home-static__card-large-value">-40%</div>
                <p className="home-static__card-text">
                  Reducción del tiempo administrativo al eliminar papel y doble entrada, con ahorro de coste directo.
                </p>
              </article>

              <article className="home-static__card">
                <div className="home-static__card-large-value">+2 días</div>
                <p className="home-static__card-text">
                  Anticipación de la facturación semanal al unificar datos de taller, obra y oficina.
                </p>
              </article>

              <article className="home-static__card">
                <div className="home-static__card-large-value">0 errores</div>
                <p className="home-static__card-text">
                  Minimización de errores en trasvases de información mediante validaciones y flujos automáticos.
                </p>
              </article>
            </div>

            <div className="home-static__results-details">
              <p className="home-static__section-text">
                Publicamos casos de éxito como ConstructPro y Avero que ilustran el antes y después: procesos más rápidos, menos reclamaciones
                y mejor control financiero. Estos ejemplos sirven para entender el impacto real de la digitalización y la automatización sobre
                la rentabilidad y la gestión diaria.
              </p>
              <ul className="home-static__compact-list" aria-label="Entregables habituales">
                <li>Checklists de adopción y guías de uso para equipos operativos.</li>
                <li>Dashboards con KPIs de tiempos, costes y facturación para dirección.</li>
                <li>Protocolos de calidad de datos y alertas para evitar desviaciones.</li>
              </ul>
            </div>
          </section>

          <section id="sobre-mi" className="home-static__section" aria-labelledby="sobre-mi-heading">
            <div className="home-static__about-grid">
              <div>
                <h2 id="sobre-mi-heading" className="home-static__section-title">
                  Sobre mí
                </h2>
                <p className="home-static__section-text">
                  Soy Joan Chorto, consultor en eficiencia, digitalización y automatización. Acompaño a empresas industriales, de servicios y
                  del sector construcción a simplificar procesos, reducir errores y recuperar tiempo operativo.
                </p>
                <p className="home-static__section-text">
                  Mi trabajo combina criterio de negocio y tecnología: no se trata de incorporar herramientas por moda, sino de elegir y
                  adaptar soluciones que realmente mejoren la gestión y la toma de decisiones.
                </p>

                <h3 className="home-static__section-subtitle">Experiencia y compromiso</h3>
                <p className="home-static__section-text">
                  He trabajado con equipos operativos y mandos intermedios para implantar soluciones prácticas y sostenibles. Mi acompañamiento
                  incluye diagnóstico, implantación técnica, formación y soporte continuado hasta comprobar resultados medibles.
                </p>
                <div className="home-static__about-highlights" aria-label="Garantías de colaboración">
                  <div className="home-static__pill">
                    <span className="home-static__pill-dot" aria-hidden="true" />
                    Roadmap priorizado con ROI estimado.
                  </div>
                  <div className="home-static__pill">
                    <span className="home-static__pill-dot" aria-hidden="true" />
                    Sesiones de seguimiento con métricas claras.
                  </div>
                  <div className="home-static__pill">
                    <span className="home-static__pill-dot" aria-hidden="true" />
                    Entrega de documentación y procesos versionados.
                  </div>
                </div>
              </div>

            <aside className="home-static__about-card" aria-labelledby="especialidades-heading">
              <h3 id="especialidades-heading">Especialidades</h3>
              <ul className="home-static__about-list">
                  <li>• Digitalización de procesos operativos</li>
                  <li>• Automatización administrativa y de facturación</li>
                  <li>• Conexión oficina–taller–obra</li>
                  <li>• Dashboards de control, costes y producción</li>
                </ul>
              </aside>
            </div>
          </section>

          <section id="servicios" className="home-static__section" aria-labelledby="servicios-heading">
            <div className="home-static__section-header">
              <h2 id="servicios-heading" className="home-static__section-title">Servicios</h2>
              <p className="home-static__section-text">
                Consultoría, proyectos de implantación y soporte para que la digitalización y la automatización se integren en la operativa diaria.
              </p>
            </div>

            <div className="home-static__cards-grid">
              <article className="home-static__card">
                <h3 className="home-static__card-title">Consultoría y diagnóstico</h3>
                <p className="home-static__card-text">
                  Evaluamos procesos, cuantificamos pérdidas y priorizamos iniciativas con mayor retorno. Entregamos un plan claro y medidas
                  inmediatas para empezar a ahorrar tiempo y costes.
                </p>
              </article>

              <article className="home-static__card">
                <h3 className="home-static__card-title">Implementación técnica</h3>
                <p className="home-static__card-text">
                  Integraciones y automatizaciones adaptadas a las herramientas existentes o propuestas de nuevas soluciones si procede.
                  Implementación y pruebas hasta asegurar funcionamiento en producción.
                </p>
              </article>

              <article className="home-static__card">
                <h3 className="home-static__card-title">Formación y seguimiento</h3>
                <p className="home-static__card-text">
                  Formación práctica para usuarios y seguimiento post-implantación. Medimos KPIs y ajustamos procesos para consolidar la mejora.
                </p>
              </article>
            </div>
          </section>

          <section className="home-static__section" aria-labelledby="faq-heading">
            <div className="home-static__section-header home-static__section-header--compact">
              <h2 id="faq-heading" className="home-static__section-title">Preguntas frecuentes</h2>
              <p className="home-static__section-text">
                Transparencia desde el inicio: esto es lo que suelo resolver antes de empezar a trabajar juntos.
              </p>
            </div>

            <div className="home-static__faq-grid">
              {faqs.map((item) => (
                <article key={item.question} className="home-static__faq-card">
                  <h3 className="home-static__faq-question">{item.question}</h3>
                  <p className="home-static__faq-answer">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="contacto" className="home-static__section home-static__contact" aria-labelledby="contacto-heading">
            <div className="home-static__contact-grid">
              <div>
                <h2 id="contacto-heading" className="home-static__section-title">
                  Reserva tu diagnóstico
                </h2>
                <p className="home-static__contact-text">
                  Conversación de 20 minutos para entender tu operativa, identificar oportunidades y proponer los primeros pasos hacia la digitalización. Si prefieres, también puedes reservar directamente por correo.
                </p>

                <div style={contactRowStyle}>

                  <a
                    href={agendaHref}
                    style={btnPrimaryStyle}
                    aria-label="Reservar diagnóstico en la agenda"
                  >
                    Reservar diagnóstico
                  </a>

                  <a
                    href={agendaHref}
                    style={btnSecondaryStyle}
                    aria-label="Consultar horarios disponibles"
                  >
                    Ver agenda
                  </a>

                  <div style={doubtCardStyle}>
                    <div style={{fontSize: '0.95rem'}}>
                      <strong>¿Dudas?</strong>
                      <div style={{fontSize:'0.85rem', color:'#495057'}}>Gestiona tu cita desde la agenda</div>
                    </div>

                    <a
                      href={agendaHref}
                      style={btnWhatsStyle}
                      aria-label="Abrir agenda"
                    >
                      Ir a la agenda
                    </a>
                  </div>

                <p className="home-static__contact-note">También puedo adaptarme a tu herramienta de videoconferencia habitual.</p>
              </div>

              <div className="home-static__contact-card" aria-label="Datos de contacto">
                <div>
                  <div className="home-static__card-title">Email</div>
                  <a href="mailto:joan@jctagency.com">joan@jctagency.com</a>
                </div>
                <div>
                  <div className="home-static__card-title">Teléfono</div>
                  <a href="tel:+34633391411">+34 633 391 411</a>
                </div>
                <p className="home-static__contact-note">
                  Al reservar aceptas ser contactado para coordinar la sesión.
                </p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Home;
