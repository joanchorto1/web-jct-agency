import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layouts/layout';

import './HomeStatic.css';

const Home = () => {
  const contactHref = '/contacte';

  return (
    <>
      <Helmet>
        <title>Digitalización práctica para empresas de servicios, construcción e industria</title>
        <meta
          name="description"
          content="Consultoría de digitalización enfocada a resultados: diagnósticos claros, automatización de procesos y facturación, y sistemas adaptados a empresas de servicios, construcción e industria."
        />
      </Helmet>

      <Layout>
        <div className="home-static">
          <section className="home-static__hero" aria-labelledby="hero-heading">
            <div className="home-static__hero-inner">
              <div className="home-static__hero-grid">
                <div>
                  <div className="home-static__eyebrow">Digitalización sin humo</div>
                  <h1 id="hero-heading" className="home-static__hero-title">
                    Ayudo a empresas a eliminar horas perdidas en gestión, errores y procesos manuales.
                  </h1>
                  <p className="home-static__hero-text">
                    Nada de transformación digital genérica. Digitalización práctica para empresas de servicios, construcción e industria.
                    Menos Excel, menos caos, más control real.
                  </p>
                  <div className="home-static__hero-actions">
                    <a href={contactHref} className="home-static__primary-btn" aria-label="Solicitar diagnóstico gratuito">
                      Solicitar diagnóstico gratuito
                    </a>
                  </div>
                  <ul className="home-static__micro-list" aria-label="Garantías del servicio">
                    <li>✔ Sin compromiso</li>
                    <li>✔ Enfoque práctico</li>
                    <li>✔ Resultados medibles en semanas, no en años</li>
                  </ul>

                </div>
                <ul className="home-static__micro-list" aria-label="Garantías del servicio">
                  <li>✔ Sin compromiso</li>
                  <li>✔ Enfoque práctico</li>
                  <li>✔ Resultados medibles en semanas, no en años</li>
                </ul>
              </div>

                <div className="home-static__note-card" aria-label="Diagnóstico gratuito">
                  <div className="home-static__note-pill">CTA único, claro</div>
                  <p className="home-static__note-text">
                    En una llamada rápida vemos dónde se pierden horas, qué automatizar y cómo empezar sin líos.
                  </p>
                  <a
                    href={contactHref}
                    className="home-static__contact-btn"
                    aria-label="Reservar diagnóstico gratuito"
                  >
                    Reservar diagnóstico gratuito
                  </a>
                  <p className="home-static__note-subtext">Sin compromiso, solo claridad.</p>
                </div>

              </div>
            </div>
          </section>

          <section className="home-static__section" aria-labelledby="problema-heading">
            <div className="home-static__section-header home-static__section-header--compact">
              <h2 id="problema-heading" className="home-static__section-title">
                ¿Te suena alguna de estas situaciones?
              </h2>
            </div>
            <div className="home-static__cards-grid">
              <article className="home-static__card home-static__card--list">
                <ul>
                  <li>Facturas hechas en Excel, Word o programas que no se adaptan a tu realidad.</li>
                  <li>Horas perdidas cada semana en tareas que no aportan valor.</li>
                  <li>Información duplicada, desactualizada o directamente incorrecta.</li>
                  <li>Procesos que dependen de “la persona que sabe cómo va”.</li>
                  <li>Miedo a cambios legales como VeriFactu, pero sin tiempo para entenderlo.</li>
                  <li>Sensación constante de desorden aunque trabajes mucho.</li>
                </ul>
                <p className="home-static__card-text">Casi nadie lee todo, pero el que se queda aquí está cualificado.</p>
                <div className="home-static__quote-note">
                  Si tu empresa funciona “porque siempre se ha hecho así”, el problema no es el software. Es el sistema.
                </div>
              </article>
            </div>
          </section>

          <section className="home-static__section" aria-labelledby="solucion-heading">
            <div className="home-static__section-header">
              <h2 id="solucion-heading" className="home-static__section-title">No vendo software. Diseño sistemas que funcionan.</h2>
            </div>
            <div className="home-static__cards-grid home-static__cards-grid--split">
              <article className="home-static__card home-static__card--wide">
                <p className="home-static__card-text">
                  Mi trabajo no consiste en instalar herramientas porque sí. Consiste en entender cómo funciona tu empresa,
                  detectar dónde se pierde tiempo y dinero, y construir una solución digital adaptada a tu realidad, no al revés.
                </p>
                <p className="home-static__card-text">A veces es un software estándar. A veces es una adaptación. A veces es cambiar el proceso antes de tocar una línea de código.</p>
                <p className="home-static__card-text">Eso es consultoría de verdad, no vender licencias.</p>
              </article>
            </div>
          </section>

          <section className="home-static__section" aria-labelledby="ofreces-heading">
            <div className="home-static__section-header">
              <h2 id="ofreces-heading" className="home-static__section-title">Servicios claros, no catálogo infinito</h2>
            </div>
            <div className="home-static__service-grid">
              <article className="home-static__card home-static__card--service">
                <h3>Digitalización de procesos</h3>
                <h4 className="home-static__card-subtitle">Optimización real de procesos internos</h4>
                <ul>
                  <li>Análisis de flujos de trabajo.</li>
                  <li>Eliminación de tareas manuales repetitivas.</li>
                  <li>Automatización de facturación, control y gestión.</li>
                  <li>Sistemas simples que el equipo entiende y usa.</li>
                </ul>
                <p className="home-static__card-text">Resultado: menos horas perdidas, menos errores, más control.</p>
              </article>

              <article className="home-static__card home-static__card--service">
                <h3>Facturación y cumplimiento legal</h3>
                <h4 className="home-static__card-subtitle">Facturación adaptada a VeriFactu</h4>
                <ul>
                  <li>Implementación de sistemas preparados para VeriFactu.</li>
                  <li>Soluciones sencillas para empresas que hoy usan Excel o Word.</li>
                  <li>Integración con procesos reales de la empresa.</li>
                  <li>Tranquilidad legal sin complicaciones técnicas.</li>
                </ul>
                <p className="home-static__card-text">Resultado: cumples la normativa sin que te explote la cabeza.</p>
              </article>

              <article className="home-static__card home-static__card--service">
                <h3>Soluciones sectoriales</h3>
                <h4 className="home-static__card-subtitle">Soluciones específicas por sector</h4>
                <ul>
                  <li>Empresas de construcción.</li>
                  <li>Empresas de servicios.</li>
                  <li>Pymes industriales.</li>
                  <li>Nada genérico: cada sector tiene sus problemas.</li>
                </ul>
                <p className="home-static__card-text">Tratarlos igual es perder el tiempo.</p>
              </article>
            </div>
          </section>

          <section className="home-static__section" aria-labelledby="metodo-heading">
            <div className="home-static__section-header">
              <h2 id="metodo-heading" className="home-static__section-title">Un proceso claro. Sin humo.</h2>
            </div>
            <div className="home-static__steps">
              <article className="home-static__step-card">
                <div className="home-static__step-number">1. Diagnóstico</div>
                <p>Analizo cómo trabajas hoy. Procesos, herramientas y puntos de fricción reales.</p>
              </article>
              <article className="home-static__step-card">
                <div className="home-static__step-number">2. Propuesta clara</div>
                <p>Te digo qué cambiar, qué automatizar y qué no vale la pena tocar.</p>
              </article>
              <article className="home-static__step-card">
                <div className="home-static__step-number">3. Implementación</div>
                <p>Configuración, adaptación o desarrollo de la solución.</p>
              </article>
              <article className="home-static__step-card">
                <div className="home-static__step-number">4. Acompañamiento</div>
                <p>No te dejo solo con un sistema que nadie entiende. Sin proyectos eternos. Sin dependencias absurdas.</p>
              </article>
            </div>
          </section>

          <section className="home-static__section" aria-labelledby="publico-heading">
            <div className="home-static__section-header">
              <h2 id="publico-heading" className="home-static__section-title">Para quién es (y para quién no)</h2>
            </div>
            <div className="home-static__audience-grid">
              <article className="home-static__card home-static__card--list">
                <h3>Esto es para ti si…</h3>
                <ul>
                  <li>Quieres orden y control, no más parches.</li>
                  <li>Entiendes que digitalizar es invertir, no gastar.</li>
                  <li>Prefieres soluciones prácticas a promesas bonitas.</li>
                  <li>Buscas a alguien que piense como empresario, no como comercial de software.</li>
                </ul>
              </article>
              <article className="home-static__card home-static__card--list">
                <h3>Y no es para ti si…</h3>
                <ul>
                  <li>Quieres “algo barato” sin cambiar nada.</li>
                  <li>Buscas una herramienta mágica que lo haga todo sola.</li>
                  <li>No estás dispuesto a cuestionar cómo trabajas hoy.</li>
                </ul>
                <p className="home-static__card-text">Filtrar aquí ahorra tiempo a los dos.</p>
              </article>
            </div>
          </section>

          <section className="home-static__section" aria-labelledby="autoridad-heading">
            <div className="home-static__section-header">
              <h2 id="autoridad-heading" className="home-static__section-title">Experiencia real, no teoría</h2>
            </div>
            <div className="home-static__cards-grid">
              <article className="home-static__card home-static__card--wide">
                <p className="home-static__card-text">
                  Trabajo con empresas reales, con problemas reales y plazos reales. He desarrollado e implementado sistemas de
                  facturación, gestión y automatización usados a diario por empresas y administraciones públicas.
                </p>
                <p className="home-static__card-text">No vendo promesas. Trabajo con datos, procesos y resultados.</p>
                <p className="home-static__card-text">(Aquí luego puedes añadir logos, casos o cifras cuando quieras)</p>
              </article>
            </div>
          </section>

          <section className="home-static__section home-static__cta-final" aria-labelledby="cta-heading">
            <div className="home-static__cta-card">
              <h2 id="cta-heading" className="home-static__section-title">
                ¿Quieres saber cuánto tiempo y dinero estás perdiendo ahora mismo?
              </h2>
              <p className="home-static__card-text">
                En una breve conversación analizamos tu situación y te digo, con claridad, si tiene sentido mejorarla o no.
              </p>
              <a href={contactHref} className="home-static__primary-btn" aria-label="Solicitar diagnóstico gratuito">
                Solicitar diagnóstico gratuito
              </a>
              <p className="home-static__cta-note">Sin compromiso. Sin ventas agresivas. Solo claridad.</p>
            </div>
          </section>

          <footer className="home-static__footer" aria-label="Información de contacto">
            <div className="home-static__footer-inner">
              <div>
                <strong>Joan Chorto – Consultor en digitalización empresarial</strong>
              </div>
              <div className="home-static__footer-links">
                <a href="mailto:joan@jctagency.com">Contacto</a>
                <span aria-hidden="true">·</span>
                <a href="/legal">Aviso legal</a>
                <span aria-hidden="true">·</span>
                <a href="/privacidad">Política de privacidad</a>
              </div>
            </div>
          </footer>
        </div>
      </Layout>
    </>
  );
};

export default Home;
