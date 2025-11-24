import React from 'react';
import Layout from '../layouts/layout';
import { Helmet } from 'react-helmet';
import AveroLogo from '../img/AVERO LOGO.png';
import facturacioImg from '../img/Facturacio_Avero.png';
import utilitatsImg from '../img/Funcionalitats_Premium.png';
import aeatImg from '../img/AEAT_Funcions.png';
import man from '../img/Man.png';
import woman from '../img/Woman.png';
// TODO: Afegir imatges i vídeo reals quan estiguin disponibles
// import GalleryImg1 from '../img/avero-gallery-1.png';
// import GalleryImg2 from '../img/avero-gallery-2.png';
// import DemoVideo from '../videos/avero-demo.mp4';

const WhatsAppIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" className="ms-2" xmlns="http://www.w3.org/2000/svg" focusable="false">
    <path fill="#25D366" d="M12 .5C5.7.5.9 5.3.9 11.6c0 2 .5 3.9 1.5 5.6L.5 23.5l6.5-1.7c1.6.8 3.5 1.3 5.5 1.3 6.3 0 11.1-4.8 11.1-11.1S18.3.5 12 .5z" />
    <path
      fill="#FFF"
      d="M17.3 14.1c-.3-.2-2-.9-2.3-.9-.3 0-.4-.1-.6.2-.2.3-.8.9-1 1.1-.2.2-.4.3-.7.1-.3-.2-1.5-.6-2.8-1.7-1-1-1.6-2.1-1.8-2.4-.2-.3 0-.5.1-.7.1-.2.3-.4.4-.6.1-.2.1-.4 0-.6-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4-.2 0-.5 0-.8 0-.3 0-.7.1-1 .4-.3.3-1 1-1 2.5s1 3 1.1 3.2c.1.2 1.9 3 4.6 4.3 3 .1 3.9.2 4.6.1.7-.1 2.4-1 2.8-1.9.4-.9.4-1.6.3-1.8-.1-.2-.4-.3-.7-.5z"
    />
  </svg>
);

const Avero = () => (
  <Layout>
    <Helmet>
      <title>Avero — Software de facturación VeriFactu y cumplimiento AEAT</title>
      <meta
        name="description"
        content="Avero es un software de facturación homologado para autónomos, pymes y gestorías. Cumple VeriFactu y requisitos AEAT, gestiona facturas electrónicas y automatiza procesos fiscales."
      />
    </Helmet>
    <div className="bg-white text-dark">
      {/* Hero */}
      <section className="py-5 bg-light text-center text-md-start" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center g-4 flex-column-reverse flex-lg-row">
            <div className="col-lg-6 position-relative">
              <span className="badge bg-avero text-uppercase mb-3">Avero para gestories, pymes y autónomos</span>
              <h1 className="display-6 fw-bold">Software de facturación VeriFactu listo para la AEAT.</h1>
              <p className="lead text-muted">Envía facturas electrónicas con QR tributario, conserva el registro íntegro y automatiza la presentación sin cambiar tu forma de trabajar.</p>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex gap-3 flex-column flex-sm-row">
                  <a href="https://avero.jctagency.com" className="btn btn-avero btn-lg">Prueba Avero gratis</a>
                  <a
                    href="https://wa.me/34633391411?text=Hola%20Joan%2C%20vull%20una%20demo%20d%27Avero."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-avero btn-lg"
                  >
                    Solicitar demo
                    <WhatsAppIcon />
                  </a>
                </div>
                <div className="d-flex gap-3 align-items-center flex-wrap">
                  <div className="px-3 py-2 rounded-3 bg-white border d-flex align-items-center gap-2">
                    <span className="badge bg-avero text-dark">Veri*Factu</span>
                    <span className="text-muted small">Homologado conforme al RD 1007/2023</span>
                  </div>
                  <div className="px-3 py-2 rounded-3 bg-white border d-flex align-items-center gap-2">
                    <span className="badge bg-dark">Onboarding</span>
                    <span className="text-muted small">Acompañamiento y puesta en marcha rápida</span>
                  </div>
                  <div className="px-3 py-2 rounded-3 bg-white border d-flex align-items-center gap-2">
                    <span className="badge bg-success">Soporte</span>
                    <span className="text-muted small">Asesor experto para tu sector</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center position-relative">
              <div className="p-4 bg-white shadow-lg rounded-4 position-relative">
                <img src={AveroLogo} alt="Mockup Avero" className="img-fluid" style={{ maxWidth: '380px' }} />
                <span className="badge bg-avero position-absolute top-0 start-50 translate-middle-x mt-2">Adaptado a Veri*Factu – RD 1007/2023</span>
                <p className="text-muted small mt-3 mb-0">Checklist de cumplimiento, facturas con hash encadenado y QR tributario incluidos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Per què Avero */}
      <section className="py-5" data-aos="fade-up">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold">¿Por qué Avero?</h2>
              <p className="lead">Programa de facturación homologado para cumplir VeriFactu y la Ley Crea y Crece sin improvisar. Diseñado para emitir facturas electrónicas AEAT con trazabilidad completa.</p>
              <ul className="list-unstyled d-grid gap-3 mb-4">
                <li className="d-flex gap-3 align-items-start">
                  <span className="badge bg-avero text-dark">1</span>
                  <div>
                    <h3 className="h6 mb-1">Registro íntegro y trazable</h3>
                    <p className="mb-0 text-muted">Hash encadenado, QR tributario y justificantes automáticos para cada factura.</p>
                  </div>
                </li>
                <li className="d-flex gap-3 align-items-start">
                  <span className="badge bg-avero text-dark">2</span>
                  <div>
                    <h3 className="h6 mb-1">Cumplimiento sin fricción</h3>
                    <p className="mb-0 text-muted">Modalidad VeriFactu lista para enviar a la AEAT y conservar copias de seguridad.</p>
                  </div>
                </li>
                <li className="d-flex gap-3 align-items-start">
                  <span className="badge bg-avero text-dark">3</span>
                  <div>
                    <h3 className="h6 mb-1">Acompañamiento experto</h3>
                    <p className="mb-0 text-muted">Equipo que configura tu cuenta y guía a tu gestoría para que nada quede fuera de norma.</p>
                  </div>
                </li>
              </ul>
              <div className="d-flex gap-3 flex-column flex-sm-row">
                <a href="https://avero.jctagency.com" className="btn btn-dark">Crear cuenta</a>
                <a
                  href="https://wa.me/34633391411?text=Hola%20Joan%2C%20vull%20crear%20un%20compte%20a%20Avero."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark"
                >
                  Agenda tu onboarding
                  <WhatsAppIcon />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-4 bg-light rounded-4 border">
                <h3 className="h5">Plan de arranque en 3 pasos</h3>
                <ol className="mb-0 text-muted d-grid gap-3 mt-3">
                  <li><strong>Diagnóstico rápido:</strong> revisamos tu facturación actual y exportaciones a AEAT.</li>
                  <li><strong>Configuración guiada:</strong> roles de usuario, plantillas y QR tributario activado.</li>
                  <li><strong>Envío verificado:</strong> pruebas de envío VeriFactu con registro de evidencias.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalitats clau */}
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container">
          <h2 className="mb-4">Funcionalidades clave pensadas para convertir</h2>
          <div className="row g-4">
            {/* Facturació */}
            <div className="col-md-4">
              <div className="p-4 rounded-4 border h-100 shadow-sm">
                <div className="d-flex align-items-center gap-3">
                  <img src={facturacioImg} alt="Facturación" style={{ width: '50px' }} />
                  <h3 className="h5 mb-0">Facturación</h3>
                </div>
                <ul className="feature-list mb-0 mt-3 text-start">
                  <li className="mb-2">Facturas electrónicas (creación, envío y rectificativas) compatibles con AEAT.</li>
                  <li className="mb-2">Presupuestos y albaranes convertibles en factura con un clic.</li>
                  <li className="mb-2">Gestión de clientes y proveedores con historial fiscal completo.</li>
                  <li className="mb-2">Catálogo de artículos y control básico de stock.</li>
                  <li className="mb-0">Envío profesional por correo y descarga de PDF fiscal.</li>
                </ul>
              </div>
            </div>

            {/* Utilitats premium */}
            <div className="col-md-4">
              <div className="p-4 rounded-4 border h-100 shadow-sm">
                <div className="d-flex align-items-center gap-3">
                  <img src={utilitatsImg} alt="Utilidades premium" style={{ width: '50px' }} />
                  <h3 className="h5 mb-0">Utilidades premium</h3>
                </div>
                <ul className="feature-list mb-0 mt-3 text-start">
                  <li className="mb-2">Cuadros de mando e informes: ingresos, gastos, beneficios e IVA.</li>
                  <li className="mb-2">Multiempresa y control de usuarios con roles y permisos.</li>
                  <li className="mb-2">Integraciones con pasarelas de pago como Stripe.</li>
                  <li className="mb-0">Firma y certificado digital para remisión segura a terceros y AEAT.</li>
                </ul>
              </div>
            </div>

            {/* AEAT */}
            <div className="col-md-4">
              <div className="p-4 rounded-4 border h-100 shadow-sm">
                <div className="d-flex align-items-center gap-3">
                  <img src={aeatImg} alt="AEAT" style={{ width: '50px' }} />
                  <h3 className="h5 mb-0">AEAT y cumplimiento</h3>
                </div>
                <ul className="feature-list mb-0 mt-3 text-start">
                  <li className="mb-2">Envío automático y verificado a la AEAT (modalidad VeriFactu).</li>
                  <li className="mb-2">Copias de seguridad y conservación de registros conforme a normativa.</li>
                  <li className="mb-0">Generación de código QR tributario en facturas electrónicas.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="alert alert-light border mt-4 d-flex align-items-start gap-3">
            <span className="badge bg-avero text-dark">Impacto</span>
            <p className="mb-0">Centraliza facturas, justificantes y envíos VeriFactu en un único panel. Elimina duplicados y reduce reclamaciones de clientes gracias a la trazabilidad completa.</p>
          </div>
        </div>
      </section>

      {/* Per a qui és Avero */}
      <section className="py-5" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-5">
              <h2 className="fw-bold">¿Para quién es Avero?</h2>
              <p className="text-muted">El software se adapta al tamaño de tu negocio y a cómo trabajas hoy.</p>
              <div className="p-4 bg-dark text-white rounded-4">
                <h3 className="h5 mb-3">Solicita tu demo guiada</h3>
                <p className="mb-3">Un especialista conecta en directo tus flujos de facturación y te muestra cómo cumplir VeriFactu.</p>
                <div className="d-flex flex-column gap-2">
                  <a href="https://avero.jctagency.com" className="btn btn-light text-dark">Probar gratis</a>
                  <a
                    href="https://wa.me/34633391411?text=Hola%20Joan%2C%20vull%20una%20demo%20d%27Avero."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light text-white"
                  >
                    Reservar con un asesor
                    <WhatsAppIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row g-4 mt-2">
                <div className="col-md-6">
                  <div className="p-4 border rounded-4 h-100">
                    <h3 className="h5">Autónomos y pymes</h3>
                    <ul className="feature-list mb-0 mt-3">
                      <li className="mb-2">Crea facturas y tickets en segundos, con QR tributario.</li>
                      <li className="mb-2">Controla ingresos, gastos y previsión fiscal.</li>
                      <li className="mb-0">Evita sanciones con trazabilidad completa.</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-4 border rounded-4 h-100">
                    <h3 className="h5">Gestorías</h3>
                    <ul className="feature-list mb-0 mt-3">
                      <li className="mb-2">Centraliza la facturación de tus clientes con VeriFactu.</li>
                      <li className="mb-2">Configura roles y permisos por cliente o departamento.</li>
                      <li className="mb-0">Envía justificantes y XML directamente a la AEAT.</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-4 border rounded-4 h-100">
                    <h3 className="h5">Despachos y franquicias</h3>
                    <ul className="feature-list mb-0 mt-3">
                      <li className="mb-2">Multiempresa y multiusuario con control centralizado.</li>
                      <li className="mb-2">Plantillas personalizables por línea de negocio.</li>
                      <li className="mb-0">Integraciones con pasarelas de pago.</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-4 border rounded-4 h-100">
                    <h3 className="h5">Facturación VeriFactu</h3>
                    <ul className="feature-list mb-0 mt-3">
                      <li className="mb-2">Hash encadenado y registro íntegro de operaciones.</li>
                      <li className="mb-2">Código QR y firma digital exigida por AEAT.</li>
                      <li className="mb-0">Conservación automática de copias de seguridad.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opiniones */}
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container">
          <h2 className="mb-4">Opiniones</h2>
          <p className="text-muted">Referències fictícies fins que tinguem testimonis reals.</p>
          <div className="row g-4">
            <div className="col-md-6 col-lg-7">
              <div className="p-4 bg-white h-100 text-start rounded shadow-sm">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img
                    src={man}
                    alt="Cliente satisfecho"
                    className="img-fluid rounded-circle"
                    style={{ width: '72px', height: '72px', objectFit: 'cover' }}
                  />
                  <div>
                    <h3 className="h6 mb-0">Autónomo</h3>
                    <span className="badge bg-avero text-dark">VeriFactu</span>
                  </div>
                </div>
                <blockquote className="blockquote mb-0">
                  “Con Avero emito mis facturas en segundos y sé que están validadas por la AEAT. Me olvido del QR y de las rectificativas.”
                </blockquote>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="p-4 bg-white h-100 text-start rounded shadow-sm">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img
                    src={woman}
                    alt="Cliente satisfecho"
                    className="img-fluid rounded-circle"
                    style={{ width: '72px', height: '72px', objectFit: 'cover' }}
                  />
                  <div>
                    <h3 className="h6 mb-0">Gestoría</h3>
                    <span className="badge bg-dark">Onboarding guiado</span>
                  </div>
                </div>
                <blockquote className="blockquote mb-0">
                  “Hemos ahorrado horas semanales en la gestión de clientes y el IVA. El equipo nos guió para activar VeriFactu sin frenar el trabajo.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería d'imatges */}
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container">
          <h2>Galería</h2>
          <p>Capturas y ejemplos del entorno de Avero. (Próximamente más imágenes reales).</p>
          {/* TODO: Afegir imatges reals de la galeria quan estiguin disponibles.
          <div className="row g-3">
            <div className="col-md-4">
              <img src={GalleryImg1} alt="Captura 1" className="img-fluid rounded" />
            </div>
            <div className="col-md-4">
              <img src={GalleryImg2} alt="Captura 2" className="img-fluid rounded" />
            </div>
            // Afegir més imatges segons sigui necessari
          </div>
          */}
        </div>
      </section>

      {/* Vídeo explicatiu */}
      <section className="py-5" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <h2>Vídeo explicativo</h2>
              <p>Próximamente: un vídeo que muestra Avero paso a paso y cómo automatiza la facturación AEAT y VeriFactu.</p>
              <div className="d-flex gap-3 flex-column flex-sm-row mt-3">
                <a href="https://avero.jctagency.com" className="btn btn-avero">Probar ahora</a>
                <a
                  href="https://wa.me/34633391411?text=Hola%20Joan%2C%20necessito%20assessorament%20per%20Avero."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-avero"
                >
                  Hablar con un asesor
                  <WhatsAppIcon />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-4 bg-light border rounded-4 h-100">
                <h3 className="h6 text-muted mb-2">Lo que verás en la demo</h3>
                <ul className="feature-list mb-0 d-grid gap-2">
                  <li>Creación y envío de facturas con QR tributario.</li>
                  <li>Registros VeriFactu y copias de seguridad automáticas.</li>
                  <li>Dashboard de IVA, gastos y facturación recurrente.</li>
                  <li>Gestión multiempresa y permisos por usuario.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-5 text-center" style={{ backgroundColor: '#ff8c00' }} data-aos="fade-up">
        <div className="container">
          <h2>Adelántate a la normativa. Prueba Avero hoy y cumple VeriFactu sin preocupaciones.</h2>
          <div className="d-flex gap-3 justify-content-center flex-column flex-sm-row mt-3">
            <a href="https://avero.jctagency.com" className="btn btn-dark">Crear cuenta</a>

            {/* WhatsApp create account */}
            <a
              href="https://wa.me/34633391411?text=Hola%20Joan%2C%20vull%20crear%20un%20compte%20a%20Avero."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              Crear cuenta
              <WhatsAppIcon />
            </a>

            <a href="/contacto" className="btn btn-outline-dark text-dark">Contacta con un asesor</a>

            {/* WhatsApp contact advisor */}
            <a
              href="https://wa.me/34633391411?text=Hola%20Joan%2C%20necessito%20assessorament%20per%20Avero."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark text-dark"
            >
              Contactar
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Peu de pàgina */}
      <footer className="footer-sub py-4">
        <div className="container text-center text-md-start">
          <p className="mb-2"><a href="https://avero.jctagency.com">avero.jctagency.com</a></p>
          <ul className="list-unstyled mb-0">
            <li><a href="/programa-de-facturacio-verifactu">Programa de facturación VeriFactu</a></li>
            <li><a href="/factures-electroniques-aeat">Facturas electrónicas AEAT</a></li>
            <li><a href="/software-facturacio-autonoms-gestories">Software de facturación para autónomos y gestorías</a></li>
          </ul>
        </div>
      </footer>
    </div>
  </Layout>
);

export default Avero;
