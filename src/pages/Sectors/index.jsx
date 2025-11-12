import React from 'react';
import Layout from '../../components/layouts/layout';
import InlineCTAGroup from '../../components/cta/InlineCTAGroup';
import { WHATSAPP_LINKS } from '../../utils/whatsapp';

const sectors = [
  {
    name: 'Indústria i logística',
    description:
      'Optimitzem cadenes de valor amb plataformes connectades, visibilitat en temps real i automatitzacions d’operacions.',
    focus: 'Digitalització d’operacions, portals B2B i integració amb ERP.',
  },
  {
    name: 'Salut i biotec',
    description:
      'Acompanyem hospitals, clíniques i scale-ups de salut digital en projectes sensibles on la confiança és clau.',
    focus: 'Experiències pacient-centred, compliance i analítica regulada.',
  },
  {
    name: 'Serveis financers',
    description:
      'Dissenyem experiències omnicanal per a bancs, fintech i asseguradores, centrades en seguretat i agilitat.',
    focus: 'Onboarding digital segur, personalització de productes i dades de risc.',
  },
  {
    name: 'Retail i consum',
    description:
      'Connectem l’e-commerce amb experiències físiques, fidelització i gestió avançada d’inventari.',
    focus: 'UX omnicanal, programes de membresia i analítica de demanda.',
  },
];

const partnerBenefits = [
  {
    title: 'Coneixement sectorial profund',
    details: 'Investigació contínua de regulacions, competència i benchmarking per anticipar moviments.',
  },
  {
    title: 'Equips multidisciplinaris',
    details: 'Especialistes en producte, dades i tecnologia que ja han treballat en reptes similars.',
  },
  {
    title: 'Transferència de coneixement',
    details: 'Documentem processos perquè el teu equip pugui continuar evolucionant la solució de forma autònoma.',
  },
];

const Sectors = () => (
  <Layout>
    <section className="section-spacing">
      <div className="container narrow-container">
        <span className="eyebrow text-uppercase">Sectors</span>
        <h1 className="display-6 fw-bold mt-3">Experiència en verticals estratègics</h1>
        <p className="text-muted mt-3">
          Aviat trobaràs una radiografia clara de com treballem amb indústria, salut, serveis i retail per
          desbloquejar nous models digitals. Estem documentant processos i dades rellevants per a cada sector.
        </p>
        <InlineCTAGroup
          className="mt-4"
          primaryLabel="Parlem del teu sector (WhatsApp)"
          primaryHref={WHATSAPP_LINKS.reserveDiagnostic}
          secondaryLabel="Demana una demo per WhatsApp"
          secondaryHref={WHATSAPP_LINKS.generalInquiry}
        />
      </div>
    </section>

    <section className="section-spacing bg-white">
      <div className="container">
        <div className="row gy-4">
          {sectors.map((sector) => (
            <div className="col-md-6" key={sector.name}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h2 className="h5 fw-semibold">{sector.name}</h2>
                  <p className="text-muted mt-3">{sector.description}</p>
                  <p className="text-muted small mb-0 fw-semibold">Focus: {sector.focus}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-spacing">
      <div className="container narrow-container">
        <span className="eyebrow text-uppercase">Per què nosaltres</span>
        <h2 className="fw-semibold mt-3">Un partner alineat amb les necessitats del teu sector</h2>
        <p className="text-muted mt-3">
          Treballem colze a colze amb els equips interns per adaptar-nos a processos, regulacions i models operatius. Els
          aprenentatges acumulats ens permeten anticipar esculls i accelerar la implantació.
        </p>
        <div className="row gy-4 mt-2">
          {partnerBenefits.map((benefit) => (
            <div className="col-md-4" key={benefit.title}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h5 fw-semibold">{benefit.title}</h3>
                  <p className="text-muted mt-3 mb-0">{benefit.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-spacing bg-white">
      <div className="container narrow-container text-center text-lg-start">
        <span className="eyebrow text-uppercase">Sessions sectorials</span>
        <h2 className="fw-semibold mt-3">Organitzem workshops específics per vertical</h2>
        <p className="text-muted mt-3">
          Podem preparar un taller de 90 minuts amb dades de mercat, mapes d’actors i oportunitats prioritzades. Ideal per
          alinear equips directius i establir les primeres fites.
        </p>
        <InlineCTAGroup
          className="mt-4"
          primaryLabel="Reserva un workshop per WhatsApp"
          primaryHref={WHATSAPP_LINKS.reserveDiagnostic}
          secondaryLabel="Demana referències del teu sector"
          secondaryHref="mailto:joan@jctagency.com?subject=Referencies%20sectorials"
        />
      </div>
    </section>
  </Layout>
);

export default Sectors;
