import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layouts/layout';

import Logo from '../../components/img/apple-touch-icon.png';
import captura1 from '../../components/img/captura1.png';
import captura2 from '../../components/img/captura2.png';
import captura3 from '../../components/img/captura3.png';

const ReliefControlIcon = ({ label }) => (
  <svg
    role="img"
    aria-label={label}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="22" fill="#E7F1FF" />
    <circle cx="24" cy="24" r="17" stroke="#0D6EFD" strokeWidth="2" />
    <path
      d="M24 15v9l6 6"
      stroke="#0D6EFD"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M15 29h18" stroke="#0D6EFD" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="15" r="2" fill="#0D6EFD" />
  </svg>
);

const ReliefAutomationIcon = ({ label }) => (
  <svg
    role="img"
    aria-label={label}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="22" fill="#E8FFF2" />
    <circle cx="24" cy="24" r="13" stroke="#198754" strokeWidth="2" />
    <path
      d="M24 13v5M24 30v5M13 24h5M30 24h5"
      stroke="#198754"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M29 19 19 29"
      stroke="#198754"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="24" r="4" fill="#198754" />
  </svg>
);

const ReliefReportsIcon = ({ label }) => (
  <svg
    role="img"
    aria-label={label}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="44" height="44" rx="8" fill="#FFF5E6" />
    <path
      d="M16 32v-8M24 32V18M32 32V22"
      stroke="#FD7E14"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 36h20"
      stroke="#FD7E14"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M20 14h8l4 4"
      stroke="#FD7E14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ReliefAccessIcon = ({ label }) => (
  <svg
    role="img"
    aria-label={label}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="16" width="40" height="24" rx="12" fill="#F0EDFF" />
    <path
      d="M18 20c1.2-4.2 5.1-7 9.6-6.4 4.6.6 8 4.4 8.4 8.9"
      stroke="#6F42C1"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16 32.5 20.5 37 32 25.5"
      stroke="#6F42C1"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const productScreens = [
  {
    title: 'Pressupostos alineats amb obra',
    description:
      'Configura plantilles de partides, revisions i marges aprovats abans d’enviar qualsevol oferta.',
    image: captura1,
    alt: 'Captura del mòdul de pressupostos de ConstructPro',
  },
  {
    title: 'Quadres de comandament executius',
    description:
      'Segueix cada projecte amb indicadors en temps real, desviacions i alertes proactives.',
    image: captura2,
    alt: 'Dashboard principal de ConstructPro amb indicadors de marge',
  },
  {
    title: 'Facturació sense errors',
    description:
      'Automatitza certificacions i factures connectades amb obra i compres per reduir incidències.',
    image: captura3,
    alt: 'Vista del sistema de factures integrades de ConstructPro',
  },
];

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
    icon: ReliefControlIcon,
    alt: "Icona control d'operacions",
  },
  {
    title: 'Automatització',
    description: "Del part aprovat al pressupost i d'aquest a la factura sense copiar dades ni cometre errors.",
    icon: ReliefAutomationIcon,
    alt: 'Icona automatització',
  },
  {
    title: 'Informes i marges',
    description: 'Coneix el benefici de cada obra amb dashboards i alertes de desviacions.',
    icon: ReliefReportsIcon,
    alt: 'Icona informes',
  },
  {
    title: 'Accés des de qualsevol lloc',
    description: 'Oficina, mòbil o obra amb permisos per rols i registre de canvis.',
    icon: ReliefAccessIcon,
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

const verifactuHighlights = [
  'Trazabilitat completa de cada factura amb segell digital i registre d’esdeveniments.',
  'Generació automàtica dels fitxers XML i justificants requerits pel Reial Decret 1007/2023.',
  'Connexions amb programari comptable i CRM per evitar manipulacions no autoritzades.',
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
              <span className="eyebrow text-uppercase text-primary">Solució ERP professional</span>
              <h1 className="display-5 fw-bold mt-3">
                Governar l'empresa constructora amb dades fiables i processos integrats
              </h1>
              <p className="lead text-muted mt-3">
                ConstructPro connecta oficina tècnica, equips d'obra i administració en un únic entorn segur per prendre decisions amb confiança.
              </p>
              <p className="text-muted fst-italic">
                “Reduïm paperassa, assegurem marges i automatitzem el cicle pressupost–execució–facturació amb auditories contínues.”
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
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="fw-semibold">Una suite visual per dirigir l'operativa</h2>
              <p className="text-muted mt-3">
                Visualitza pressupostos, seguiment de marge i facturació auditada en pantalles dissenyades per a equips directius i caps d'obra.
              </p>
            </div>
          </div>
          <div className="row g-4 mt-4">
            {productScreens.map((screen) => (
              <div className="col-12 col-md-6 col-lg-4" key={screen.title}>
                <div className="card h-100 border-0 shadow-sm overflow-hidden">
                  <img src={screen.image} alt={screen.alt} className="card-img-top" />
                  <div className="card-body p-4">
                    <h3 className="h5 fw-semibold">{screen.title}</h3>
                    <p className="text-muted mb-0">{screen.description}</p>
                  </div>
                </div>
              </div>
            ))}
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
            {reliefBenefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <div className="col" key={benefit.title}>
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="me-3 flex-shrink-0">
                          <IconComponent label={benefit.alt} />
                        </div>
                        <h3 className="h5 mb-0">{benefit.title}</h3>
                      </div>
                      <p className="text-muted mb-0">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
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

      <section className="section-spacing bg-dark text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="eyebrow text-uppercase text-primary">Compliment normatiu</span>
              <h2 className="fw-semibold mt-3 text-white">ConstructPro alinea la teva empresa amb Verifactu</h2>
              <p className="mt-3 text-white-50">
                Preparem processos, dades i documents perquè cada factura compleixi les noves obligacions fiscals i es pugui justificar davant l'Agència Tributària.
              </p>
              <ul className="list-unstyled d-grid gap-3 mt-4">
                {verifactuHighlights.map((item) => (
                  <li key={item} className="bg-opacity-10 bg-white text-white rounded-4 p-3">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                <a href="/contacte?from=constructpro-verifactu" className="btn btn-outline-light btn-lg">
                  Planifica el teu full de ruta
                </a>
                <span className="text-white-50 align-self-center">Informe de compliment i roadmap d'integració.</span>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src={captura3}
                alt="Pantalla de validació de factures conforme a Verifactu"
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>
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
