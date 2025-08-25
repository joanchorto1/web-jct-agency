import React from 'react';
import Layout from '../layouts/layout';
import { Helmet } from 'react-helmet';
import AveroLogo from '../img/AVERO LOGO.png';

const Avero = () => (
  <Layout>
    <Helmet>
      <title>Avero – Programa de facturació 100% adaptat a VeriFactu i la Llei Crea y Crece</title>
      <meta name="description" content="La solució més simple i moderna per complir amb VeriFactu i la Llei Crea y Crece." />
    </Helmet>
    <div className="bg-white text-dark">
      {/* Hero */}
      <section className="py-5 bg-light text-center text-md-start">
        <div className="container">
          <div className="row align-items-center g-4 flex-column flex-md-row">
            <div className="col-md-6">
              <h1>Avero – Programa de facturació 100% adaptat a VeriFactu i la Llei Crea y Crece.*</h1>
              <p>La solució més simple i moderna per a autònoms, PIMEs i gestories. Compleix amb la normativa sense complicacions.</p>
              <div className="d-flex gap-3 mt-3 flex-column flex-sm-row">
                <a href="https://avero.jctagency.com" className="btn btn-primary">Prova Avero gratis</a>
                <a href="/contacto" className="btn btn-outline-primary">Demana una demo</a>
              </div>
            </div>
            <div className="col-md-6 text-center position-relative">
              <img src={AveroLogo} alt="Mockup Avero" className="img-fluid" style={{ maxWidth: '400px' }} />
              <span className="badge bg-success position-absolute top-0 start-50 translate-middle-x mt-2">Adaptat a Veri*Factu – RD 1007/2023</span>
            </div>
          </div>
        </div>
      </section>

      {/* Per què Avero */}
      <section className="py-5">
        <div className="container">
          <h2>Per què Avero?</h2>
          <p>Avero és el programari de facturació creat per JCT Agency pensat per a cobrir les noves obligacions legals i simplificar la gestió diària de les empreses. Amb VeriFactu en vigor des de 2025 i l’entrada obligatòria al 2026, necessites un sistema segur, modern i validat per l’AEAT.*</p>
          <p className="text-muted">Software de facturació VeriFactu · Programa de factures Crea y Crece · Facturació per autònoms i PIMEs</p>
        </div>
      </section>

      {/* Funcionalitats clau */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Funcionalitats clau</h2>
          <ul className="list-unstyled">
            <li>✅ Factures electròniques (creació, enviament, rectificatives, simplificades).</li>
            <li>✅ Enviament automàtic a l’AEAT en temps real (modalitat Veri*Factu).</li>
            <li>✅ Gestió de pressupostos i albarans, conversió en factura amb un clic.</li>
            <li>✅ Control de clients i proveïdors amb historial complet.</li>
            <li>✅ Gestió d’articles i productes (preus, categories, stock bàsic).</li>
            <li>✅ Quadres de comandament i informes: ingressos, despeses, beneficis, IVA.</li>
            <li>✅ Signatura i certificat digital integrat per a remissió segura.</li>
            <li>✅ Còpies de seguretat i conservació de registres (complint el RRSIF).</li>
            <li>✅ Generació de codi QR tributari a les factures.</li>
            <li>✅ Enviament de factures per correu electrònic i PDF professional.</li>
            <li>✅ TPV integrat per a vendes físiques amb emissió de tiquets legals.</li>
            <li>✅ Gestió multiempresa i multiusuari amb rols i permisos.</li>
            <li>✅ Integració amb Stripe i passarel·les de pagament.</li>
          </ul>
        </div>
      </section>

      {/* Compliment legal */}
      <section className="py-5">
        <div className="container">
          <h2>Compliment legal (Veri*Factu i Llei Crea y Crece)</h2>
          <p>Veri*Factu: Avero envia cada factura a l’AEAT amb hash encadenat, registre inalterable i QR tributari.</p>
          <p>Llei Crea y Crece: Factura electrònica obligatòria per a operacions B2B.</p>
          <p>Normativa aplicable: RD 1007/2023, Ordre HAC/1177/2024 i modificacions RD 254/2025.</p>
          <p className="text-muted">Avero és el programari de facturació certificat i adaptat al reglament Veri*Factu (AEAT) i a la Llei Crea y Crece.</p>
        </div>
      </section>

      {/* Per a qui és Avero */}
      <section className="py-5 bg-light">
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
      <section className="py-5">
        <div className="container">
          <h2>Testimonis / Casos d’ús</h2>
          <blockquote className="blockquote">“Amb Avero genero les meves factures en segons i sé que estan validades per l’AEAT.”</blockquote>
          <blockquote className="blockquote">“Hem estalviat hores setmanals en la gestió de clients i IVA.”</blockquote>
        </div>
      </section>

      {/* Plans i preus */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Plans i preus</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Pla</th>
                <th>Preu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Autònoms</td>
                <td>des de XX €/mes</td>
              </tr>
              <tr>
                <td>PIME</td>
                <td>des de XX €/mes</td>
              </tr>
              <tr>
                <td>Gestories</td>
                <td>pla especial amb múltiples empreses vinculades</td>
              </tr>
            </tbody>
          </table>
          <a href="https://avero.jctagency.com" className="btn btn-primary">Consulta els nostres plans</a>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-5 text-center" style={{ backgroundColor: '#ff8c00' }}>
        <div className="container">
          <h2>Adelanta’t a la normativa. Prova Avero avui i compleix amb Veri*Factu sense preocupacions.</h2>
          <div className="d-flex gap-3 justify-content-center flex-column flex-sm-row mt-3">
            <a href="https://avero.jctagency.com" className="btn btn-dark">Crear compte gratis</a>
            <a href="/contacto" className="btn btn-outline-dark text-dark">Contacta amb un assessor</a>
          </div>
        </div>
      </section>

      {/* Peu de pàgina */}
      <footer className="py-4 bg-light">
        <div className="container">
          <p><a href="https://avero.jctagency.com">avero.jctagency.com</a></p>
          <ul className="list-unstyled">
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

