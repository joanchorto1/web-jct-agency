import React from 'react';
import Layout from '../../components/layouts/layout';
import InlineCTAGroup from '../../components/cta/InlineCTAGroup';

const servicePillars = [
  {
    title: 'Estratègia i governança digital',
    description:
      'Auditories de maduresa, roadmaps trimestrals i models d’operació compartits per prioritzar inversions i coordinar equips.',
  },
  {
    title: 'Producte i experiència d’usuari',
    description:
      'Disseny de nous fluxos digitals, prototips validats amb usuaris i analítica integrada per mesurar el que importa.',
  },
  {
    title: 'Tecnologia i dades aplicades',
    description:
      'Integració de plataformes SaaS, automatitzacions i quadres de comandament que connecten fonts de dades crítiques.',
  },
];

const proofPoints = [
  {
    value: '+120%',
    label: 'Crec. d’adopció digital',
    description:
      'Mitjana d’increment d’usuaris actius en productes llançats amb metodologies d’iteració quinzenal.',
  },
  {
    value: '6 setmanes',
    label: 'Temps a llançar pilots',
    description:
      'Des de l’alineació d’objectius fins a la primera prova amb clients reals per validar la proposta de valor.',
  },
  {
    value: '94%',
    label: 'Satisfacció d’equips interns',
    description:
      'Percentatge de stakeholders que valoren positivament la transparència i el ritme d’execució compartit.',
  },
];

const workflow = [
  {
    title: 'Diagnòstic accionable',
    copy:
      'Analitzem dades d’ús, processos interns i mercat per detectar ràpidament les palanques de creixement amb major impacte.',
  },
  {
    title: 'Co-creació amb equips mixtos',
    copy:
      'Treballem en squads híbrids amb product owners, marketing i IT per assegurar adopció i transferència de coneixement.',
  },
  {
    title: 'Execució i aprenentatge continu',
    copy:
      'Definim OKR, llancem pilots i mesurem resultats per iterar noves funcionalitats o serveis de manera sostinguda.',
  },
];

const Home = () => (
  <Layout>
    <section className="page-hero section-spacing text-center text-lg-start">
      <div className="container narrow-container">
        <span className="eyebrow text-uppercase">JCT Agency</span>
        <h1 className="display-5 fw-bold mt-3">Impulsem el creixement digital amb productes i serveis a mida</h1>
        <p className="lead text-muted mt-3">
          Estem actualitzant l'experiència en línia per explicar-te com els nostres equips combinen estratègia,
          tecnologia i dades per detectar oportunitats i transformar el teu negoci.
        </p>
        <InlineCTAGroup
          className="mt-4"
          primaryHref="/contacte"
          secondaryHref="/contacte#demo"
        />
      </div>
    </section>

    <section className="section-spacing">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <span className="eyebrow text-uppercase">Com aportem valor</span>
            <h2 className="fw-semibold mt-3">Pilar a pilar, construïm iniciatives que escalen</h2>
            <p className="text-muted mt-3">
              Combinem la visió estratègica amb la capacitat tècnica per fer aterrar projectes tangibles. Treballem amb
              organitzacions que volen resultat mesurable sense perdre l’atenció pel detall.
            </p>
          </div>
          <div className="col-lg-8">
            <div className="row gy-4">
              {servicePillars.map((pillar) => (
                <div className="col-md-6" key={pillar.title}>
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h3 className="h5 fw-semibold">{pillar.title}</h3>
                      <p className="text-muted mt-3 mb-0">{pillar.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-spacing bg-white">
      <div className="container">
        <div className="row text-center text-lg-start align-items-center gy-4">
          <div className="col-lg-4">
            <span className="eyebrow text-uppercase">Impacte</span>
            <h2 className="fw-semibold mt-3">Resultats que guien les decisions</h2>
            <p className="text-muted mt-3">
              Cadascun dels projectes inclou instruments de mesura perquè puguis validar l’impacte real. Aquests són
              alguns indicadors consolidats dels darrers mesos.
            </p>
          </div>
          <div className="col-lg-8">
            <div className="row gy-4">
              {proofPoints.map((point) => (
                <div className="col-md-4" key={point.label}>
                  <div className="card h-100 border-0 shadow-sm text-center">
                    <div className="card-body p-4">
                      <div className="display-6 fw-bold text-primary">{point.value}</div>
                      <p className="fw-semibold mb-2 mt-2">{point.label}</p>
                      <p className="text-muted small mb-0">{point.description}</p>
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
        <span className="eyebrow text-uppercase">Metodologia</span>
        <h2 className="fw-semibold mt-3">Una col·laboració pensada per avançar sense friccions</h2>
        <p className="text-muted mt-3">
          Des del primer contacte definim objectius comuns i un calendari d’entregues clars. El nostre equip acompanya
          cada fase amb documentació i workshops perquè les decisions siguin compartides.
        </p>
        <div className="row gy-4 mt-2">
          {workflow.map((step) => (
            <div className="col-md-4" key={step.title}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h5 fw-semibold">{step.title}</h3>
                  <p className="text-muted mt-3 mb-0">{step.copy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <InlineCTAGroup
          className="mt-5 justify-content-center"
          primaryLabel="Descobreix com treballem"
          primaryHref="/com-treballem"
          secondaryLabel="Consulta els nostres sectors"
          secondaryHref="/sectors"
        />
      </div>
    </section>

    <section className="section-spacing bg-white">
      <div className="container narrow-container text-center text-lg-start">
        <span className="eyebrow text-uppercase">Proper pas</span>
        <h2 className="fw-semibold mt-3">Construïm junts el teu roadmap digital</h2>
        <p className="text-muted mt-3">
          En menys d’una setmana podem preparar una proposta inicial amb hipòtesis, mètriques i recursos necessaris.
          Explica’ns on vols arribar i definirem les fites claus per aconseguir-ho.
        </p>
        <InlineCTAGroup
          className="mt-4"
          primaryLabel="Programa una conversa de 30’"
          primaryHref="/contacte"
          secondaryLabel="Explora una demo personalitzada"
          secondaryHref="/contacte#demo"
        />
      </div>
    </section>
  </Layout>
);

export default Home;
