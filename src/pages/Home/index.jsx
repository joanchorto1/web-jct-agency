import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layouts/layout';

import './HomeStatic.css';

const Home = () => {
  const contactHref = '/contacte';

  return (
    <>
      <Helmet>
        <title>Consultoría digital sin humo para empresas que necesitan resultados</title>
        <meta
          name="description"
          content="Implantamos sistemas digitales claros y medibles para empresas de servicios, construcción e industria. Menos caos, más control y decisiones con datos."
        />
      </Helmet>

      <Layout>
        <div className="home-static">
          <section className="home-static__hero" aria-labelledby="hero-heading">
            <div className="home-static__hero-inner">
              <div className="home-static__hero-grid">
                <div className="home-static__hero-copy">
                  <div className="home-static__eyebrow">Consultoría digital en serio</div>
                  <h1 id="hero-heading" className="home-static__hero-title">
                    Digitalizo tu empresa con un plan claro, menos papeleo y decisiones respaldadas por datos.
                  </h1>
                  <p className="home-static__hero-text">
                    Diagnóstico, automatización y acompañamiento para que tu equipo gane tiempo y tu operativa sea previsible.
                    Trabajamos sin licencias innecesarias, sin humo y con entregables tangibles desde el primer mes.
                  </p>
                  <div className="home-static__hero-actions">
                    <a href={contactHref} className="home-static__primary-btn" aria-label="Solicitar diagnóstico gratuito">
                      Solicitar diagnóstico gratuito
                    </a>
                    <a href={contactHref} className="home-static__ghost-btn" aria-label="Hablar con un consultor">
                      Hablar con un consultor
                    </a>
                  </div>
                  <div className="home-static__hero-badges" aria-label="Datos de confianza">
                    <span className="home-static__pill">
                      <span className="home-static__pill-dot"></span>
                      Enfoque para servicios, construcción e industria
                    </span>
                    <span className="home-static__pill">
                      <span className="home-static__pill-dot home-static__pill-dot--soft"></span>
                      Resultados medibles en semanas
                    </span>
                  </div>
                </div>

                <aside className="home-static__hero-panel" aria-label="Resumen de valor">
                  <div className="home-static__panel-header">Diagnóstico rápido</div>
                  <p className="home-static__panel-text">
                    Revisamos tus procesos, localizamos fugas de tiempo y definimos un roadmap accionable para ordenar tu
                    operativa y facturación.
                  </p>
                  <div className="home-static__panel-divider" aria-hidden="true"></div>
                  <ul className="home-static__panel-list">
                    <li>Sesión de 45 minutos sin compromiso</li>
                    <li>Mapa de prioridades en 72 horas</li>
                    <li>Implementación acompañada, sin proyectos eternos</li>
                  </ul>
                  <a href={contactHref} className="home-static__panel-btn" aria-label="Reservar diagnóstico">
                    Reservar diagnóstico
                  </a>
                </aside>
              </div>

              <div className="home-static__stats" aria-label="Métricas clave">
                <div className="home-static__stat-card">
                  <span className="home-static__stat-value">+8 años</span>
                  <span className="home-static__stat-label">Diseñando sistemas a medida</span>
                </div>
                <div className="home-static__stat-card">
                  <span className="home-static__stat-value">120h</span>
                  <span className="home-static__stat-label">Horas ahorradas de media por proyecto</span>
                </div>
                <div className="home-static__stat-card">
                  <span className="home-static__stat-value">98%</span>
                  <span className="home-static__stat-label">De adopción por parte de los equipos</span>
                </div>
              </div>
            </div>
          </section>

          <section className="home-static__section" aria-labelledby="services-heading">
            <div className="home-static__section-header">
              <p className="home-static__section-kicker">Qué hacemos</p>
              <h2 id="services-heading" className="home-static__section-title">
                Soluciones claras y enfocadas en tu operativa diaria
              </h2>
              <p className="home-static__section-subtitle">
                No vendemos software genérico. Diseñamos sistemas que encajan con tu negocio y que tu equipo puede usar desde el
                primer día.
              </p>
            </div>
            <div className="home-static__cards-grid home-static__cards-grid--three">
              <article className="home-static__card home-static__card--service">
                <h3>Digitalización de procesos</h3>
                <p>Flujos definidos, datos centralizados y automatizaciones que eliminan tareas repetitivas.</p>
                <ul>
                  <li>Mapeo completo de procesos y responsables.</li>
                  <li>Automatización de tareas críticas con bajo mantenimiento.</li>
                  <li>Cuadros de mando operativos y financieros.</li>
                </ul>
              </article>
              <article className="home-static__card home-static__card--service">
                <h3>Facturación y cumplimiento</h3>
                <p>Implantación segura para VeriFactu y sistemas de control que evitan errores y sanciones.</p>
                <ul>
                  <li>Integración con tus herramientas actuales.</li>
                  <li>Validaciones automáticas y trazabilidad de documentos.</li>
                  <li>Soporte y formación al equipo.</li>
                </ul>
              </article>
              <article className="home-static__card home-static__card--service">
                <h3>Soluciones sectoriales</h3>
                <p>Experiencia en servicios, construcción e industria para responder a casuísticas reales.</p>
                <ul>
                  <li>Control de obra y certificaciones.</li>
                  <li>Partes de trabajo digitalizados.</li>
                  <li>Operativa coordinada entre oficina y campo.</li>
                </ul>
              </article>
            </div>
          </section>

          <section className="home-static__section" aria-labelledby="method-heading">
            <div className="home-static__section-header">
              <p className="home-static__section-kicker">Método</p>
              <h2 id="method-heading" className="home-static__section-title">Un proceso diseñado para no perder tiempo</h2>
            </div>
            <div className="home-static__timeline">
              <div className="home-static__timeline-item">
                <div className="home-static__timeline-badge">1</div>
                <div>
                  <h3>Diagnóstico accionable</h3>
                  <p>Entrevistas, revisión de herramientas y detección de cuellos de botella con prioridades claras.</p>
                </div>
              </div>
              <div className="home-static__timeline-item">
                <div className="home-static__timeline-badge">2</div>
                <div>
                  <h3>Diseño de la solución</h3>
                  <p>Blueprint funcional con responsables, tiempos estimados y medición de impacto.</p>
                </div>
              </div>
              <div className="home-static__timeline-item">
                <div className="home-static__timeline-badge">3</div>
                <div>
                  <h3>Implementación y acompañamiento</h3>
                  <p>Configuración, migraciones y formación. Ajustes rápidos para asegurar adopción.</p>
                </div>
              </div>
              <div className="home-static__timeline-item">
                <div className="home-static__timeline-badge">4</div>
                <div>
                  <h3>Seguimiento con datos</h3>
                  <p>KPIs operativos, soporte continuo y mejora iterativa para mantener el orden.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="home-static__section home-static__section--inverse" aria-labelledby="trust-heading">
            <div className="home-static__section-header">
              <p className="home-static__section-kicker home-static__section-kicker--light">Por qué confían</p>
              <h2 id="trust-heading" className="home-static__section-title">Transparencia, criterio y acompañamiento real</h2>
              <p className="home-static__section-subtitle home-static__section-subtitle--light">
                No empiezo instalando software: primero ordeno, luego digitalizo. Así evitamos licencias inútiles y proyectos
                interminables.
              </p>
            </div>
            <div className="home-static__value-grid">
              <article className="home-static__value-card">
                <h3>Claridad</h3>
                <p>Documentación simple, diagramas y checklists para que todo el equipo entienda el nuevo sistema.</p>
              </article>
              <article className="home-static__value-card">
                <h3>Velocidad</h3>
                <p>Sprints cortos y entregables cada semana. Verás cambios visibles antes de tomar decisiones mayores.</p>
              </article>
              <article className="home-static__value-card">
                <h3>Control</h3>
                <p>KPIs operativos y financieros actualizados. Controlas la operación sin perder detalle.</p>
              </article>
            </div>
          </section>

          <section className="home-static__section" aria-labelledby="cta-heading">
            <div className="home-static__cta-card">
              <div>
                <p className="home-static__section-kicker">Próximo paso</p>
                <h2 id="cta-heading" className="home-static__section-title">
                  Hablemos 45 minutos y te llevo un plan concreto para tu empresa
                </h2>
                <p className="home-static__cta-text">
                  Agenda una llamada y en 72 horas tendrás un mapa de prioridades, plazos y quick wins para empezar.
                </p>
                <div className="home-static__cta-actions">
                  <a href={contactHref} className="home-static__primary-btn" aria-label="Reservar diagnóstico">
                    Reservar diagnóstico
                  </a>
                  <a href="mailto:joan@jctagency.com" className="home-static__ghost-btn" aria-label="Escribir por correo">
                    joan@jctagency.com
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </Layout>
    </>
  );
};

export default Home;
