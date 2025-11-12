import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/components/header';

import './HomeStatic.css';

const Home = () => {
  const currentYear = new Date().getFullYear();
  const waDiagnostic = 'https://wa.me/34633391411?text=Hola%20Joan%2C%20vull%20un%20diagnostic%20gratuit.';
  const waReserve = 'https://wa.me/34633391411?text=Hola%20Joan%2C%20vull%20reservar%20un%20diagnostic%20per%20la%20meva%20empresa.';

  return (
    <>
      <Helmet>
        <title>Joan Chorto Consultor — Eficiencia y Automatización</title>
        <meta
          name="description"
          content="Consultoría en eficiencia y automatización de procesos. Diagnóstico, optimización y sistemas que ahorran tiempo y dinero."
        />
      </Helmet>

      <div className="home-static">
        <Header />

        <main>
          <section className="home-static__hero" aria-labelledby="hero-heading">
            <div className="home-static__section home-static__hero-content">
              <div className="home-static__hero-grid">
                <div>
                  <h1 id="hero-heading" className="home-static__hero-title">
                    Ayudo a empresas a ganar <span>eficiencia</span> y <span>control</span>
                  </h1>
                  <p className="home-static__hero-text">
                    Analizo procesos, elimino pérdidas y diseño automatizaciones que ahorran horas y reducen errores. Trabaja
                    mejor, no más.
                  </p>
                  <div className="home-static__hero-actions">
                    <a href={waDiagnostic} target="_blank" rel="noopener noreferrer" className="home-static__primary-btn">
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
                      Horas perdidas pasando datos de partes a facturación.
                    </li>
                    <li>
                      <span className="home-static__hero-card-bullet" aria-hidden="true" />
                      Errores por información desconectada entre oficina, taller y obra.
                    </li>
                    <li>
                      <span className="home-static__hero-card-bullet" aria-hidden="true" />
                      Falta de visibilidad en tiempo real de trabajos, costes y márgenes.
                    </li>
                  </ul>
                  <div className="home-static__hero-note">
                    Primera sesión de diagnóstico <span>gratuita</span> para empresas con más de 8 empleados.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="metodo" className="home-static__section" aria-labelledby="metodo-heading">
            <div className="home-static__section-header">
              <h2 id="metodo-heading" className="home-static__section-title">
                Un método simple, resultados reales
              </h2>
              <p className="home-static__section-text">
                Trabajo con un proceso claro para que la mejora no dependa de improvisaciones.
              </p>
            </div>
            <div className="home-static__cards-grid">
              <article className="home-static__card">
                <div className="home-static__card-subtitle">1 · Análisis</div>
                <h3 className="home-static__card-title">Entender cómo trabajas</h3>
                <p className="home-static__card-text">
                  Mapeo de procesos, flujos de información y puntos ciegos. Identifico dónde se pierde tiempo y por qué.
                </p>
              </article>
              <article className="home-static__card">
                <div className="home-static__card-subtitle">2 · Optimización</div>
                <h3 className="home-static__card-title">Eliminar pérdidas y errores</h3>
                <p className="home-static__card-text">
                  Rediseño de tareas, eliminación de duplicidades y definición de controles claros.
                </p>
              </article>
              <article className="home-static__card">
                <div className="home-static__card-subtitle">3 · Automatización</div>
                <h3 className="home-static__card-title">Sistemas que trabajan por ti</h3>
                <p className="home-static__card-text">
                  Implementación de herramientas y automatizaciones para que la información fluya sola hasta la factura.
                </p>
              </article>
            </div>
          </section>

          <section id="resultados" className="home-static__section" aria-labelledby="resultados-heading">
            <div className="home-static__section-header">
              <h2 id="resultados-heading" className="home-static__section-title">
                Resultados
              </h2>
              <p className="home-static__section-text">
                Algunos impactos reales obtenidos en empresas de mantenimiento, industriales y de servicios.
              </p>
            </div>
            <div className="home-static__cards-grid home-static__cards-grid--results">
              <article className="home-static__card">
                <div className="home-static__card-large-value">-40%</div>
                <p className="home-static__card-text">
                  Reducción del tiempo administrativo eliminando partes en papel y doble entrada.
                </p>
              </article>
              <article className="home-static__card">
                <div className="home-static__card-large-value">+2 días</div>
                <p className="home-static__card-text">
                  Anticipación de la facturación semanal al conectar taller, obra y oficina.
                </p>
              </article>
              <article className="home-static__card">
                <div className="home-static__card-large-value">0 errores</div>
                <p className="home-static__card-text">
                  En traspasos de información gracias a flujos automatizados y validaciones.
                </p>
              </article>
            </div>
          </section>

          <section id="sobre-mi" className="home-static__section" aria-labelledby="sobre-mi-heading">
            <div className="home-static__about-grid">
              <div>
                <h2 id="sobre-mi-heading" className="home-static__section-title">
                  Sobre mí
                </h2>
                <p className="home-static__section-text">
                  Soy Joan Chorto, consultor en eficiencia y automatización. Ayudo a empresas industriales, de servicios y
                  construcción a simplificar procesos, reducir errores y ganar control sobre su trabajo diario.
                </p>
                <p className="home-static__section-text">
                  Mi enfoque combina criterio de negocio y tecnología. Hablo el lenguaje del taller y el de la oficina. El objetivo
                  no es cambiar todo lo que haces, sino hacer que funcione mejor.
                </p>
              </div>
              <aside className="home-static__about-card" aria-labelledby="especialidades-heading">
                <h3 id="especialidades-heading">Especializado en</h3>
                <ul className="home-static__about-list">
                  <li>• Digitalización de procesos operativos</li>
                  <li>• Automatización administrativa y de facturación</li>
                  <li>• Conexión oficina–taller–obra</li>
                  <li>• Dashboards de control y costes</li>
                </ul>
              </aside>
            </div>
          </section>

          <section id="contacto" className="home-static__section home-static__contact" aria-labelledby="contacto-heading">
            <div className="home-static__contact-grid">
              <div>
                <h2 id="contacto-heading" className="home-static__section-title">
                  Reserva tu diagnóstico
                </h2>
                <p className="home-static__contact-text">
                  Una conversación de 20 minutos para entender cómo trabajas hoy y cuántas horas y costes podrías estar ahorrando.
                </p>
                <div className="d-flex gap-2 align-items-center">
                  <a href="mailto:joan@joanchorto.com" className="home-static__contact-cta">
                    joan@joanchorto.com
                  </a>
                  <a href={waReserve} target="_blank" rel="noopener noreferrer" className="home-static__primary-btn">
                    Contactar per WhatsApp
                  </a>
                </div>
                <p className="home-static__contact-note">También puedo adaptarme a tu herramienta de videollamada habitual.</p>
              </div>
              <div className="home-static__contact-card" aria-label="Datos de contacto">
                <div>
                  <div className="home-static__card-title">Email</div>
                  <a href="mailto:joan@joanchorto.com">joan@joanchorto.com</a>
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
        </main>

        <footer className="home-static__footer">
          <div className="home-static__footer-inner">
            <p>© {currentYear} Joan Chorto Consultor. Todos los derechos reservados.</p>
            <nav className="home-static__footer-nav" aria-label="Enlaces principales">
              <a href="#metodo">Método</a>
              <a href="#resultados">Resultados</a>
              <a href="#sobre-mi">Sobre mí</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
