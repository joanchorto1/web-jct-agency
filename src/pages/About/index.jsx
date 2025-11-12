import React from 'react';
import Layout from '../../components/layouts/layout';
import InlineCTAGroup from '../../components/cta/InlineCTAGroup';
import { WHATSAPP_LINKS } from '../../utils/whatsapp';

const storyHighlights = [
  {
    title: 'Origen en producte digital',
    description:
      'El 2016 vam néixer com un equip de product managers i enginyers ajudant startups a passar de la idea al mercat amb processos lean.',
  },
  {
    title: 'Escalant equips híbrids',
    description:
      'Hem format squads mixtos amb organitzacions corporatives i scale-ups per connectar estratègia, màrqueting i tecnologia.',
  },
  {
    title: 'Focalitzats en resultats mesurables',
    description:
      'Perseguim impacte tangible: creixement d’usuaris, eficiències operatives i noves fonts d’ingressos basades en dades.',
  },
];

const values = [
  {
    name: 'Transparència radical',
    copy: 'Compartim dades, riscos i aprenentatges en temps real. Cap sorpresa, només decisions informades conjuntament.',
  },
  {
    name: 'Execució pragmàtica',
    copy: 'Creiem en prototips, validacions curtes i roadmap vius. Cada iteració ha d’aportar valor directe als usuaris.',
  },
  {
    name: 'Cultura d’equip ampliada',
    copy: 'Treballem com un sol equip amb el client: rituals compartits, eines obertes i transferència constant de coneixement.',
  },
];

const team = [
  {
    role: 'Estratègia i governança',
    focus: 'OKR, PMO digital i alineació d’sponsors amb equips d’execució.',
  },
  {
    role: 'Producte i experiència',
    focus: 'UX research, product discovery i evolució contínua de serveis digitals.',
  },
  {
    role: 'Dades i tecnologia',
    focus: 'Arquitectures modulars, integracions SaaS i analítica avançada aplicada a decisions de negoci.',
  },
];

const About = () => (
  <Layout>
    <section className="section-spacing">
      <div className="container narrow-container">
        <span className="eyebrow text-uppercase">Sobre JCT</span>
        <h1 className="display-6 fw-bold mt-3">Un equip híbrid d'estratègia, producte i tecnologia</h1>
        <p className="text-muted mt-3">
          Estem actualitzant la nostra història, els valors i la manera com col·laborem amb partners i clients. Trobaràs
          trajectòries professionals, cultura i la nostra manera de mesurar l'impacte intern.
        </p>
        <InlineCTAGroup
          className="mt-4"
          primaryLabel="Coneix-nos per WhatsApp"
          primaryHref={WHATSAPP_LINKS.reserveDiagnostic}
          secondaryLabel="Contacta per WhatsApp"
          secondaryHref={WHATSAPP_LINKS.generalInquiry}
        />
      </div>
    </section>

    <section className="section-spacing bg-white">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-5">
            <span className="eyebrow text-uppercase">Història</span>
            <h2 className="fw-semibold mt-3">D’on venim i què ens mou</h2>
            <p className="text-muted mt-3">
              La nostra experiència neix del llançament de productes digitals i serveis SaaS en sectors competitius. Aquesta
              trajectòria ens ha portat a col·laborar amb equips que volen avançar sense perdre la proximitat humana.
            </p>
          </div>
          <div className="col-lg-7">
            <div className="row gy-4">
              {storyHighlights.map((item) => (
                <div className="col-md-4" key={item.title}>
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h3 className="h6 fw-semibold text-uppercase">{item.title}</h3>
                      <p className="text-muted small mb-0 mt-3">{item.description}</p>
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
        <span className="eyebrow text-uppercase">Valors</span>
        <h2 className="fw-semibold mt-3">Principis que guien cada projecte</h2>
        <p className="text-muted mt-3">
          El nostre compromís amb clients, partners i equips interns es basa en aquests principis. Ens permeten mantenir la
          confiança mentre explorem noves oportunitats de negoci.
        </p>
        <div className="row gy-4 mt-2">
          {values.map((value) => (
            <div className="col-md-4" key={value.name}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h5 fw-semibold">{value.name}</h3>
                  <p className="text-muted mt-3 mb-0">{value.copy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-spacing bg-white">
      <div className="container">
        <div className="row gy-4 align-items-start">
          <div className="col-lg-5">
            <span className="eyebrow text-uppercase">Equip</span>
            <h2 className="fw-semibold mt-3">Perfils clau que treballaran amb tu</h2>
            <p className="text-muted mt-3">
              Cada projecte incorpora un equip base i una xarxa de col·laboradors especialitzats en funció del repte. Així
              assegurem l’expertesa necessària sense perdre agilitat.
            </p>
          </div>
          <div className="col-lg-7">
            <ul className="list-group list-group-flush shadow-sm">
              {team.map((member) => (
                <li className="list-group-item py-4 px-4" key={member.role}>
                  <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">
                    <div>
                      <h3 className="h5 fw-semibold mb-1">{member.role}</h3>
                      <p className="text-muted mb-0">{member.focus}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="section-spacing">
      <div className="container narrow-container text-center text-lg-start">
        <span className="eyebrow text-uppercase">Vols saber-ne més?</span>
        <h2 className="fw-semibold mt-3">Programem una trobada amb les persones clau</h2>
        <p className="text-muted mt-3">
          Podem compartir casos, metodologia i materials interns perquè valoris si som el partner adequat. Ens adaptem al
          format que necessitis: virtual, presencial o workshop amb el teu equip.
        </p>
        <InlineCTAGroup
          className="mt-4"
          primaryLabel="Agenda una reunió per WhatsApp"
          primaryHref={WHATSAPP_LINKS.reserveDiagnostic}
          secondaryLabel="Demana una demo per WhatsApp"
          secondaryHref={WHATSAPP_LINKS.generalInquiry}
        />
      </div>
    </section>
  </Layout>
);

export default About;
