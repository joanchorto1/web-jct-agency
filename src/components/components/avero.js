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
          <div className="row align-items-center g-4 flex-column flex-md-row">
            <div className="col-md-6">
              <h1>Avero — Software de facturación compatible con VeriFactu y AEAT</h1>
              <p>La solución más sencilla y moderna para autónomos, pymes y gestorías. Gestiona facturas electrónicas AEAT, genera archivos Verifactu y automatiza tu cumplimiento fiscal.</p>
              <div className="d-flex gap-3 mt-3 flex-column flex-sm-row">
                <a href="https://avero.jctagency.com" className="btn btn-avero">Prueba Avero gratis</a>

                {/* WhatsApp demo CTA */}
                <a
                  href="https://wa.me/34633391411?text=Hola%20Joan%2C%20vull%20una%20demo%20d%27Avero."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-avero"
                >
                  Solicitar demo
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" className="ms-2" xmlns="http://www.w3.org/2000/svg" focusable="false">
                    <path fill="#25D366" d="M12 .5C5.7.5.9 5.3.9 11.6c0 2 .5 3.9 1.5 5.6L.5 23.5l6.5-1.7c1.6.8 3.5 1.3 5.5 1.3 6.3 0 11.1-4.8 11.1-11.1S18.3.5 12 .5z"/>
                    <path fill="#FFF" d="M17.3 14.1c-.3-.2-2-.9-2.3-.9-.3 0-.4-.1-.6.2-.2.3-.8.9-1 1.1-.2.2-.4.3-.7.1-.3-.2-1.5-.6-2.8-1.7-1-1-1.6-2.1-1.8-2.4-.2-.3 0-.5.1-.7.1-.2.3-.4.4-.6.1-.2.1-.4 0-.6-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4-.2 0-.5 0-.8 0-.3 0-.7.1-1 .4-.3.3-1 1-1 2.5s1 3 1.1 3.2c.1.2 1.9 3 4.6 4.3 3 .1 3.9.2 4.6.1.7-.1 2.4-1 2.8-1.9.4-.9.4-1.6.3-1.8-.1-.2-.4-.3-.7-.5z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center position-relative">
              <img src={AveroLogo} alt="Mockup Avero" className="img-fluid" style={{ maxWidth: '400px' }} />
              <span className="badge bg-avero position-absolute top-0 start-50 translate-middle-x mt-2">Adaptado a Veri*Factu – RD 1007/2023</span>
            </div>
          </div>
        </div>
      </section>

      {/* Per què Avero */}
      <section className="py-5" data-aos="fade-up">
        <div className="container">
          <h2>¿Por qué Avero?</h2>
          <p>Avero es un programa de facturación homologado diseñado para cumplir VeriFactu y la Ley Crea y Crece. Facilita la emisión de facturas electrónicas AEAT, el control de registros fiscales y la generación automática de XML y justificantes.</p>
          <p className="text-muted">Software de facturación VeriFactu · Facturas electrónicas AEAT · Programa de facturación homologado · Cumplimiento VeriFactu</p>
        </div>
      </section>

      {/* Funcionalitats clau */}
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container">
          <h2 className="mb-4">Funcionalidades clave</h2>
          <div className="row">
            {/* Facturació */}
            <div className="col-md-4 mb-4">
              <div className="p-4 border-top border-4 border-avero text-center">
                <img src={facturacioImg} alt="Facturación" style={{ width: '60px' }} className="mb-3" />
                <h3>Facturación</h3>
                <ul className="feature-list mb-0 mt-3 text-start">
                  <li className="mb-2">Facturas electrónicas (creación, envío y rectificativas) compatibles con AEAT.</li>
                  <li className="mb-2">Presupuestos y albaranes convertibles en factura con un clic.</li>
                  <li className="mb-2">Gestión de clientes y proveedores con historial fiscal completo.</li>
                  <li className="mb-2">Catálogo de artículos y control básico de stock.</li>
                  <li className="mb-2">Envío profesional por correo y descarga de PDF fiscal.</li>
                  <li className="mb-0">TPV integrado para ventas físicas con tickets legales.</li>
                </ul>
              </div>
            </div>

            {/* Utilitats premium */}
            <div className="col-md-4 mb-4">
              <div className="p-4 border-top border-4 border-avero text-center">
                <img src={utilitatsImg} alt="Utilidades premium" style={{ width: '60px' }} className="mb-3" />
                <h3>Utilidades premium</h3>
                <ul className="feature-list mb-0 mt-3 text-start">
                  <li className="mb-2">Cuadros de mando e informes: ingresos, gastos, beneficios e IVA.</li>
                  <li className="mb-2">Multiempresa y control de usuarios con roles y permisos.</li>
                  <li className="mb-2">Integraciones con pasarelas de pago como Stripe.</li>
                  <li className="mb-0">Firma y certificado digital para remisión segura a terceros y AEAT.</li>
                </ul>
              </div>
            </div>

            {/* AEAT */}
            <div className="col-md-4 mb-4">
              <div className="p-4 border-top border-4 border-avero text-center">
                <img src={aeatImg} alt="AEAT" style={{ width: '60px' }} className="mb-3" />
                <h3>AEAT y cumplimiento</h3>
                <ul className="feature-list mb-0 mt-3 text-start">
                  <li className="mb-2">Envío automático y verificado a la AEAT (modalidad VeriFactu).</li>
                  <li className="mb-2">Copias de seguridad y conservación de registros conforme a normativa.</li>
                  <li className="mb-0">Generación de código QR tributario en facturas electrónicas.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliment legal */}
      <section className="py-5" data-aos="fade-up">
        <div className="container">
          <h2>Cumplimiento legal (VeriFactu y Ley Crea y Crece)</h2>
          <p>Avero envía cada factura con hash encadenado, conserva un registro inalterable y añade el QR tributario exigido por la normativa.</p>
          <p>Normativa aplicable: RD 1007/2023, Orden HAC/1177/2024 y actualizaciones posteriores.</p>
          <p className="text-muted">Programa de facturación homologado y diseñado para el cumplimiento fiscal automatizado.</p>
        </div>
      </section>

      {/* Per a qui és Avero */}
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container">
          <h2>¿Para quién es Avero?</h2>
          <ul className="list-unstyled">
            <li><strong>Autónomos</strong> → emite facturas electrónicas AEAT sin complejidad técnica.</li>
            <li><strong>Pymes</strong> → controla facturación, clientes e informes fiscales en tiempo real.</li>
            <li><strong>Gestorías</strong> → ofrece Avero a clientes y automatiza la gestión fiscal.</li>
          </ul>
        </div>
      </section>

      {/* Testimonis */}
      <section className="py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-4">Testimonios y casos de uso</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="p-4 bg-light h-100 text-center rounded">
                <img
                  src={man}
                  alt="Cliente satisfecho"
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                <blockquote className="blockquote mb-0">
                  “Con Avero emito mis facturas en segundos y sé que están validadas por la AEAT.”
                </blockquote>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="p-4 bg-light h-100 text-center rounded">
                <img
                  src={woman}
                  alt="Cliente satisfecho"
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                <blockquote className="blockquote mb-0">
                  “Hemos ahorrado horas semanales en la gestión de clientes y el IVA.”
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
          <h2>Vídeo explicativo</h2>
          <p>Próximamente: un vídeo que muestra Avero paso a paso y cómo automatiza la facturación AEAT y VeriFactu.</p>
          {/* TODO: Incrustar el vídeo explicatiu quan estigui llest.
          <div className="ratio ratio-16x9">
            <video src={DemoVideo} controls></video>
          </div>
          */}
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
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" className="ms-2" xmlns="http://www.w3.org/2000/svg" focusable="false">
                <path fill="#25D366" d="M12 .5C5.7.5.9 5.3.9 11.6c0 2 .5 3.9 1.5 5.6L.5 23.5l6.5-1.7c1.6.8 3.5 1.3 5.5 1.3 6.3 0 11.1-4.8 11.1-11.1S18.3.5 12 .5z"/>
                <path fill="#FFF" d="M17.3 14.1c-.3-.2-2-.9-2.3-.9-.3 0-.4-.1-.6.2-.2.3-.8.9-1 1.1-.2.2-.4.3-.7.1-.3-.2-1.5-.6-2.8-1.7-1-1-1.6-2.1-1.8-2.4-.2-.3 0-.5.1-.7.1-.2.3-.4.4-.6.1-.2.1-.4 0-.6-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4-.2 0-.5 0-.8 0-.3 0-.7.1-1 .4-.3.3-1 1-1 2.5s1 3 1.1 3.2c.1.2 1.9 3 4.6 4.3 3 .1 3.9.2 4.6.1.7-.1 2.4-1 2.8-1.9.4-.9.4-1.6.3-1.8-.1-.2-.4-.3-.7-.5z"/>
              </svg>
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
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" className="ms-2" xmlns="http://www.w3.org/2000/svg" focusable="false">
                <path fill="#25D366" d="M12 .5C5.7.5.9 5.3.9 11.6c0 2 .5 3.9 1.5 5.6L.5 23.5l6.5-1.7c1.6.8 3.5 1.3 5.5 1.3 6.3 0 11.1-4.8 11.1-11.1S18.3.5 12 .5z"/>
                <path fill="#FFF" d="M17.3 14.1c-.3-.2-2-.9-2.3-.9-.3 0-.4-.1-.6.2-.2.3-.8.9-1 1.1-.2.2-.4.3-.7.1-.3-.2-1.5-.6-2.8-1.7-1-1-1.6-2.1-1.8-2.4-.2-.3 0-.5.1-.7.1-.2.3-.4.4-.6.1-.2.1-.4 0-.6-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4-.2 0-.5 0-.8 0-.3 0-.7.1-1 .4-.3.3-1 1-1 2.5s1 3 1.1 3.2c.1.2 1.9 3 4.6 4.3 3 .1 3.9.2 4.6.1.7-.1 2.4-1 2.8-1.9.4-.9.4-1.6.3-1.8-.1-.2-.4-.3-.7-.5z"/>
              </svg>
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

