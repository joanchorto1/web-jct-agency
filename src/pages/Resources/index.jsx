import React from 'react';
import Layout from '../../components/layouts/layout';
import InlineCTAGroup from '../../components/cta/InlineCTAGroup';
import { WHATSAPP_LINKS } from '../../utils/whatsapp';

const resourceCollections = [
  {
    title: 'Observatori de producte digital',
    description:
      'Resums mensuals amb tendències de mercat, exemples de productes emergents i mètriques comparatives.',
  },
  {
    title: 'Plantilles operatives',
    description:
      'Models d’OKR, canvas d’hipòtesis, checklists per llançar pilots i guies per a equips multidisciplinaris.',
  },
  {
    title: 'Biblioteca de casos reals',
    description:
      'Anàlisi en profunditat de projectes d’innovació, amb context, decisions clau i resultats quantificats.',
  },
];

const formats = [
  {
    type: 'Workshops en directe',
    details: 'Sessions trimestrals amb convidats externs i exercicis pràctics per aplicar als teus equips.',
  },
  {
    type: 'Mini-llibretes digitals',
    details: 'Reculls temàtics de 20 pàgines amb frameworks accionables i recursos descarregables.',
  },
  {
    type: 'Clips de vídeo i podcast',
    details: 'Converses breus amb expertesa sectorial i demostracions d’eines que utilitzem al dia a dia.',
  },
];

const upcomingTopics = [
  'Com definir un roadmap de producte orientat a dades',
  'Models de governança per a plataformes SaaS B2B',
  'Onboarding d’usuaris en serveis digitals complexos',
  'Automatització de processos comercials amb IA aplicada',
];

const Resources = () => (
  <Layout>
    <section className="section-spacing">
      <div className="container narrow-container">
        <span className="eyebrow text-uppercase">Recursos</span>
        <h1 className="display-6 fw-bold mt-3">Guies, plantilles i perspectives accionables</h1>
        <p className="text-muted mt-3">
          Estem preparant una biblioteca amb informes, webinars i eines interactives per accelerar la transformació
          digital. Subscriu-t'hi per rebre una alerta quan publiquem el primer paquet de recursos.
        </p>
        <InlineCTAGroup
          className="mt-4"
          primaryLabel="Vull rebre els primers recursos per WhatsApp"
          primaryHref={WHATSAPP_LINKS.generalInquiry}
          secondaryLabel="Reserva diagnòstic per WhatsApp"
          secondaryHref={WHATSAPP_LINKS.reserveDiagnostic}
        />
      </div>
    </section>

    <section className="section-spacing bg-white">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-5">
            <span className="eyebrow text-uppercase">Col·leccions</span>
            <h2 className="fw-semibold mt-3">Un hub amb contingut curat per equips digitals</h2>
            <p className="text-muted mt-3">
              Cada col·lecció agrupa recursos complementaris perquè puguis passar de la inspiració a l’acció. Actualitzem
              els continguts de forma mensual amb l’aprenentatge dels projectes que gestionem.
            </p>
          </div>
          <div className="col-lg-7">
            <div className="row gy-4">
              {resourceCollections.map((collection) => (
                <div className="col-md-4" key={collection.title}>
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h3 className="h6 fw-semibold text-uppercase">{collection.title}</h3>
                      <p className="text-muted small mb-0 mt-3">{collection.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-spacing">
      <div className="container narrow-container">
        <span className="eyebrow text-uppercase">Formats</span>
        <h2 className="fw-semibold mt-3">Aprèn amb formats pensats per executar</h2>
        <p className="text-muted mt-3">
          Triem formats breus i aplicables perquè els teus equips puguin incorporar idees sense fricció. Inclourem notes
          de camp, vídeos, podcasts i plantilles per descarregar.
        </p>
        <div className="row gy-4 mt-2">
          {formats.map((format) => (
            <div className="col-md-4" key={format.type}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h5 fw-semibold">{format.type}</h3>
                  <p className="text-muted mt-3 mb-0">{format.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-spacing bg-white">
      <div className="container narrow-container">
        <span className="eyebrow text-uppercase">Temes en preparació</span>
        <h2 className="fw-semibold mt-3">Vols prioritzar algun d’aquests continguts?</h2>
        <p className="text-muted mt-3">
          Comparteix-nos quin tema t’ajudaria a desbloquejar el teu projecte i li donarem prioritat. Ens agrada co-crear amb
          la comunitat que confia en Joan Chorto Consultor.
        </p>
        <ul className="list-group list-group-flush shadow-sm">
          {upcomingTopics.map((topic) => (
            <li className="list-group-item py-3 px-4" key={topic}>
              <span className="fw-semibold">{topic}</span>
            </li>
          ))}
        </ul>
        <InlineCTAGroup
          className="mt-4"
          primaryLabel="Suggerir un tema"
          primaryHref="mailto:joan@joanchorto.com?subject=Suggeriment%20recursos"
          secondaryLabel="Parlem-ne en una trucada"
          secondaryHref="tel:+34633391411"
        />
      </div>
    </section>
  </Layout>
);

export default Resources;
