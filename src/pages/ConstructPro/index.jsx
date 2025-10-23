import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layouts/layout';

import siteManagerImg from '../../components/img/Man.png';
import controlIcon from '../../components/img/portatilIcon.png';
import automationIcon from '../../components/img/EFICIENCIA.png';
import reportsIcon from '../../components/img/analisis.png';
import accessIcon from '../../components/img/SUPORT.png';
import Logo from '../../components/img/apple-touch-icon.png';
import captura1 from '../../components/img/captura1.png';
import captura2 from '../../components/img/captura2.png';
import captura3 from '../../components/img/captura3.png';

const painPoints = [
  '📋 Els tècnics encara fan parts en paper o Excel.',
  '🧾 Les dades es perden entre obres i facturació.',
  '🕒 No saps exactament què costa cada projecte.',
  '📉 Falta control sobre marges i beneficis.',
];

const reliefBenefits = [
  {
    title: 'Control total',
    description: 'Obres, clients i costos en temps real amb traçabilitat completa de cada partida.',
    icon: controlIcon,
    alt: 'Icona control d\'operacions',
  },
  {
    title: 'Automatització',
    description: 'Del part aprovat al pressupost i d\'aquest a la factura sense copiar dades ni cometre errors.',
    icon: automationIcon,
    alt: 'Icona automatització',
  },
  {
    title: 'Informes i marges',
    description: 'Coneix el benefici de cada obra amb dashboards i alertes de desviacions.',
    icon: reportsIcon,
    alt: 'Icona informes',
  },
  {
    title: 'Accés des de qualsevol lloc',
    description: 'Oficina, mòbil o obra amb permisos per rols i registre de canvis.',
    icon: accessIcon,
    alt: 'Icona accés remot',
  },
];

const processPhases = [
  {
    title: 'Diagnòstic gratuït',
    description: 'Analitzem com treballes ara, quins sistemes utilitzes i on es produeixen els colls d\'ampolla.',
  },
  {
    title: 'Mini projecte',
    description: 'Fase pilot amb l\'equip clau per validar fluxos, permisos i informes en poques setmanes.',
  },
  {
    title: 'Implementació completa',
    description: 'ERP modular amb mòduls de parts, pressupostos, compres i facturació adaptats al teu negoci.',
  },
  {
    title: 'Manteniment i evolució',
    description: 'Suport continu, revisions periòdiques i noves funcionalitats segons els requisits de camp.',
  },
];

const testimonials = [
  {
    quote: '“Hem reduït un 60% el temps administratiu.”',
    detail: 'Digitalització completa dels parts i automatització de factures.',
  },
  {
    quote: '“Ara sé exactament quin marge tenim a cada obra.”',
    detail: 'Quadres de comandament amb costos actualitzats i alarmes de desviacions.',
  },
  {
    quote: '“Tot l’equip treballa amb la mateixa informació.”',
    detail: 'Portal compartit amb oficines, cap d\'obra i subcontractistes.',
  },
];

const ConstructProPage = () => (
  <Layout>
    <Helmet>
      <title>ConstructPro | ERP de construcció per coordinar obres i facturació</title>
      <meta
        name="description"
        content="Connecta oficina, obres i facturació amb ConstructPro. Auditories gratuïtes, fluxos automatitzats i control de marges en temps real per empreses de construcció."
      />
    </Helmet>

    <div className="section-spacing bg-white text-dark">
      <section className="section-spacing pb-0">
        <div className="container">
          <div className="row align-items-center g-5 flex-column-reverse flex-lg-row">
            <div className="col-lg-6">
              <span className="eyebrow text-uppercase text-primary">ConstructPro</span>
              <h1 className="display-5 fw-bold mt-3">
                La teva empresa de construcció sense parts en paper ni pèrdua de control
              </h1>
              <p className="lead text-muted mt-3">
                ConstructPro connecta oficina, obres i facturació en un únic sistema. Sense complicacions, amb fluxos pensats
                per a caps d\'obra i equips administratius.
              </p>
              <p className="text-muted">
                “La teva empresa de construcció perd hores cada setmana entre parts en paper, errors i falta de control. ConstructPro és la solució que connecta oficina, obres i facturació — sense complicacions.”
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                <a href="/contacte?from=constructpro" className="btn btn-primary btn-lg">
                  Sol·licita una auditoria gratuïta
                </a>
                <span className="text-muted align-self-center">
                  Descobreix quantes hores i diners pots estalviar.
                </span>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src={Logo}
                alt="Cap d\'obra consultant l\'estat d\'una obra des d\'una tauleta"
                className="img-fluid rounded-4 shadow"
                style={{ maxWidth: '420px' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="fw-semibold">Si et reconeixes en algun d’aquests punts, és hora de canviar</h2>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-lg-8">
              <ul className="list-unstyled fs-5 d-grid gap-3">
                {painPoints.map((point) => (
                  <li key={point} className="p-4 bg-white shadow-sm rounded-4">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="text-center mt-4">
                <a href="/contacte?from=constructpro" className="btn btn-outline-primary">
                  Fem una anàlisi gratuïta del teu procés
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <div className="row justify-content-between align-items-center mb-5">
            <div className="col-lg-5">
              <span className="eyebrow text-uppercase text-primary">Alleujament</span>
              <h2 className="fw-semibold mt-3">Centralitza-ho tot amb ConstructPro</h2>
              <p className="text-muted mt-3">
                Gestió d’obres, pressupostos, parts i facturació en un únic sistema connectat. Cada equip treballa amb la mateixa
                informació i cada decisió es basa en dades actualitzades.
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
            {reliefBenefits.map((benefit) => (
              <div className="col" key={benefit.title}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <img src={benefit.icon} alt={benefit.alt} className="me-3" style={{ width: '48px' }} />
                      <h3 className="h5 mb-0">{benefit.title}</h3>
                    </div>
                    <p className="text-muted mb-0">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-light">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="fw-semibold">D’una auditoria gratuïta a una solució feta a mida</h2>
              <p className="text-muted mt-3">No venem programes. Construïm solucions amb tu, fase a fase.</p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-4">
            {processPhases.map((phase) => (
              <div className="col" key={phase.title}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="h5 fw-semibold">{phase.title}</h3>
                    <p className="text-muted mt-3 mb-0">{phase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <div className="row justify-content-between align-items-center mb-5">
            <div className="col-lg-6">
              <span className="eyebrow text-uppercase text-primary">Casos i resultats</span>
              <h2 className="fw-semibold mt-3">Empreses com la teva ja han recuperat desenes d’hores setmanals</h2>
              <p className="text-muted mt-3">
                Validem resultats amb dades i testimonis. Ens integrem amb el teu equip i compartim indicadors d’estalvi en temps
                real.
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {testimonials.map((item) => (
              <div className="col" key={item.quote}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4 d-flex flex-column">
                    <p className="fs-5 fw-semibold">{item.quote}</p>
                    <p className="text-muted mt-3 mb-0">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <a href="/contacte?from=constructpro" className="btn btn-primary btn-lg">
              Sol·licita una auditoria gratuïta
            </a>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default ConstructProPage;
