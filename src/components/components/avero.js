import React from 'react';
import Layout from '../layouts/layout';
import { Helmet } from 'react-helmet';
import { trackEvent } from '../../utils/analytics';
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
      <title>Avero – Programa de facturació 100% adaptat a VeriFactu i la Llei Crea y Crece</title>
      <meta
        name="description"
        content="Programa de facturació Avero per a autònoms, PIMEs i gestories; compleix Veri*Factu i la Llei Crea y Crece amb una eina senzilla i moderna."
      />
    </Helmet>
    <div className="bg-white text-dark">
      {/* Hero */}
      <section className="py-5 bg-light text-center text-md-start" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center g-4 flex-column flex-md-row">
            <div className="col-md-6">
              <h1>Avero – Programa de facturació 100% adaptat a VeriFactu i la Llei Crea y Crece.*</h1>
              <p>La solució més simple i moderna per a autònoms, PIMEs i gestories. Compleix amb la normativa sense complicacions.</p>
              <div className="d-flex gap-3 mt-3 flex-column flex-sm-row">
                <a
                  href="https://avero.jctagency.com"
                  className="btn btn-avero"
                  onClick={() => trackEvent('CTA clic', { etiqueta: 'Avero - Prova gratis (hero)' })}
                >
                  Prova Avero gratis
                </a>
                <a
                  href="/contacto"
                  className="btn btn-outline-avero"
                  onClick={() => trackEvent('CTA clic', { etiqueta: 'Avero - Demana demo (hero)' })}
                >
                  Demana una demo
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center position-relative">
              <img src={AveroLogo} alt="Mockup Avero" className="img-fluid" style={{ maxWidth: '400px' }} />
              <span className="badge bg-avero position-absolute top-0 start-50 translate-middle-x mt-2">Adaptat a Veri*Factu – RD 1007/2023</span>
            </div>
          </div>
        </div>
      </section>

      {/* Per què Avero */}
      <section className="py-5" data-aos="fade-up">
        <div className="container">
          <h2>Per què Avero?</h2>
          <p>Avero és el programari de facturació creat per JCT Agency pensat per a cobrir les noves obligacions legals i simplificar la gestió diària de les empreses. Amb VeriFactu en vigor des de 2025 i l’entrada obligatòria al 2026, necessites un sistema segur, modern i validat per l’AEAT.*</p>
          <p className="text-muted">Software de facturació VeriFactu · Programa de factures Crea y Crece · Facturació per autònoms i PIMEs</p>
        </div>
      </section>

      {/* Funcionalitats clau */}
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container">
          <h2 className="mb-4">Funcionalitats clau</h2>
          <div className="row">
            {/* Facturació */}
            <div className="col-md-4 mb-4">
              <div className="p-4 border-top border-4 border-avero text-center">
                <img src={facturacioImg} alt="Facturació" style={{ width: '60px' }} className="mb-3" />
                <h3>Facturació</h3>
                <ul className="feature-list mb-0 mt-3 text-start">
                  <li className="mb-2">Factures electròniques (creació, enviament, rectificatives, simplificades).</li>
                  <li className="mb-2">Gestió de pressupostos i albarans, conversió en factura amb un clic.</li>
                  <li className="mb-2">Control de clients i proveïdors amb historial complet.</li>
                  <li className="mb-2">Gestió d’articles i productes (preus, categories, stock bàsic).</li>
                  <li className="mb-2">Enviament de factures per correu electrònic i PDF professional.</li>
                  <li className="mb-0">TPV integrat per a vendes físiques amb emissió de tiquets legals.</li>
                </ul>
              </div>
            </div>

            {/* Utilitats premium */}
            <div className="col-md-4 mb-4">
              <div className="p-4 border-top border-4 border-avero text-center">
                <img src={utilitatsImg} alt="Utilitats premium" style={{ width: '60px' }} className="mb-3" />
                <h3>Utilitats premium</h3>
                <ul className="feature-list mb-0 mt-3 text-start">
                  <li className="mb-2">Quadres de comandament i informes: ingressos, despeses, beneficis, IVA.</li>
                  <li className="mb-2">Gestió multiempresa i multiusuari amb rols i permisos.</li>
                  <li className="mb-2">Integració amb Stripe i passarel·les de pagament.</li>
                  <li className="mb-0">Signatura i certificat digital integrat per a remissió segura.</li>
                </ul>
              </div>
            </div>

            {/* AEAT */}
            <div className="col-md-4 mb-4">
              <div className="p-4 border-top border-4 border-avero text-center">
                <img src={aeatImg} alt="AEAT" style={{ width: '60px' }} className="mb-3" />
                <h3>AEAT</h3>
                <ul className="feature-list mb-0 mt-3 text-start">
                  <li className="mb-2">Enviament automàtic a l’AEAT en temps real (modalitat Veri*Factu).</li>
                  <li className="mb-2">Còpies de seguretat i conservació de registres (complint el RRSIF).</li>
                  <li className="mb-0">Generació de codi QR tributari a les factures.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliment legal */}
      <section className="py-5" data-aos="fade-up">
        <div className="container">
          <h2>Compliment legal (Veri*Factu i Llei Crea y Crece)</h2>
          <p>Veri*Factu: Avero envia cada factura a l’AEAT amb hash encadenat, registre inalterable i QR tributari.</p>
          <p>Llei Crea y Crece: Factura electrònica obligatòria per a operacions B2B.</p>
          <p>Normativa aplicable: RD 1007/2023, Ordre HAC/1177/2024 i modificacions RD 254/2025.</p>
          <p className="text-muted">Avero és el programari de facturació certificat i adaptat al reglament Veri*Factu (AEAT) i a la Llei Crea y Crece.</p>
        </div>
      </section>

      {/* Per a qui és Avero */}
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container">
          <h2>Per a qui és Avero</h2>
          <ul className="list-unstyled">
            <li><strong>Autònoms</strong> → compleix obligacions fiscals sense coneixements tècnics.</li>
            <li><strong>PIMEs</strong> → controla la facturació, clients i informes.</li>
            <li><strong>Gestories</strong> → ofereix Avero als clients com a servei extra i guanya en eficiència.</li>
          </ul>
        </div>
      </section>

      {/* Testimonis */}
      <section className="py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-4">Testimonis / Casos d’ús</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="p-4 bg-light h-100 text-center rounded">
                <img
                  src={man}
                  alt="Client satisfet"
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                <blockquote className="blockquote mb-0">
                  “Amb Avero genero les meves factures en segons i sé que estan validades per l’AEAT.”
                </blockquote>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="p-4 bg-light h-100 text-center rounded">
                <img
                  src={woman}
                  alt="Client satisfet"
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                <blockquote className="blockquote mb-0">
                  “Hem estalviat hores setmanals en la gestió de clients i IVA.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria d'imatges */}
      <section className="py-5 bg-light" data-aos="fade-up">
        <div className="container">
          <h2>Galeria</h2>
          <p>Descobreix captures de pantalla i exemples de l'entorn d'Avero.</p>
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
          <h2>Vídeo explicatiu</h2>
          <p>Pròximament disponible: un vídeo que mostra com funciona Avero pas a pas.</p>
          {/* TODO: Incrustar el vídeo explicatiu quan estigui llest.
          <div className="ratio ratio-16x9">
            <video src={DemoVideo} controls></video>
          </div>
          */}
        </div>
      </section>

      {/*/!* Plans i preus *!/*/}
      {/*<section className="py-5 bg-light">*/}
      {/*  <div className="container">*/}
      {/*    <h2 className="mb-4">Plans i preus</h2>*/}
      {/*    <table className="table">*/}
      {/*      <thead>*/}
      {/*        <tr>*/}
      {/*          <th>Pla</th>*/}
      {/*          <th>Preu</th>*/}
      {/*        </tr>*/}
      {/*      </thead>*/}
      {/*      <tbody>*/}
      {/*        <tr>*/}
      {/*          <td>Autònoms</td>*/}
      {/*          <td>des de XX €/mes</td>*/}
      {/*        </tr>*/}
      {/*        <tr>*/}
      {/*          <td>PIME</td>*/}
      {/*          <td>des de XX €/mes</td>*/}
      {/*        </tr>*/}
      {/*        <tr>*/}
      {/*          <td>Gestories</td>*/}
      {/*          <td>pla especial amb múltiples empreses vinculades</td>*/}
      {/*        </tr>*/}
      {/*      </tbody>*/}
      {/*    </table>*/}
      {/*    <a href="https://avero.jctagency.com" className="btn btn-avero">Consulta els nostres plans</a>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* CTA final */}
      <section className="py-5 text-center" style={{ backgroundColor: '#ff8c00' }} data-aos="fade-up">
        <div className="container">
          <h2>Adelanta’t a la normativa. Prova Avero avui i compleix amb Veri*Factu sense preocupacions.</h2>
          <div className="d-flex gap-3 justify-content-center flex-column flex-sm-row mt-3">
            <a
              href="https://avero.jctagency.com"
              className="btn btn-dark"
              onClick={() => trackEvent('CTA clic', { etiqueta: 'Avero - Crear compte (final)' })}
            >
              Crear compte
            </a>
            <a
              href="/contacto"
              className="btn btn-outline-dark text-dark"
              onClick={() => trackEvent('CTA clic', { etiqueta: 'Avero - Contacta assessor (final)' })}
            >
              Contacta amb un assessor
            </a>
          </div>
        </div>
      </section>

      {/* Peu de pàgina */}
      <footer className="footer-sub py-4">
        <div className="container text-center text-md-start">
          <p className="mb-2"><a href="https://avero.jctagency.com">avero.jctagency.com</a></p>
          <ul className="list-unstyled mb-0">
            <li><a href="/programa-de-facturacio-verifactu">Programa de facturació VeriFactu</a></li>
            <li><a href="/factures-electroniques-aeat">Factures electròniques AEAT</a></li>
            <li><a href="/software-facturacio-autonoms-gestories">Software de facturació per autònoms i gestories</a></li>
          </ul>
        </div>
      </footer>
    </div>
  </Layout>
);

export default Avero;

