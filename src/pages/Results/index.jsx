import React from 'react';
import Layout from '../../components/layouts/layout';
import InlineCTAGroup from '../../components/cta/InlineCTAGroup';
import { WHATSAPP_LINKS } from '../../utils/whatsapp';

const resultHighlights = [
  {
    metric: '+38%',
    title: 'Increment de conversions',
    description:
      'Optimització d’un embut de captació B2B amb experiments quinzenals i integració de dades CRM.',
  },
  {
    metric: '4 setmanes',
    title: 'Temps per desplegar un MVP',
    description:
      'Co-creació d’un producte intern per a equips de vendes amb integració a sistemes legats.',
  },
  {
    metric: '12 punts',
    title: 'Millora en NPS',
    description:
      'Redisseny d’experiència en onboarding digital amb sessions d’usabilitat i noves automatitzacions.',
  },
];

const measurementPractices = [
  {
    title: 'Quadres de comandament vius',
    details: 'Configurem dashboards amb dades en temps real perquè tot l’equip conegui l’estat dels OKR.',
  },
  {
    title: 'Cercles de revisió mensuals',
    details: 'Sessions de revisió amb sponsors per validar aprenentatges i ajustar prioritats.',
  },
  {
    title: 'Documentació accionable',
    details: 'Guardem aprenentatges i resultats en repositoris compartits per replicar-los en altres iniciatives.',
  },
];

const testimonial = {
  quote:
    'Amb JCT Agency vam aconseguir visibilitat setmanal dels resultats i vam accelerar decisions que abans trigaven mesos. Han estat un partner que combina rigor i empatia.',
  author: 'COO d’empresa SaaS de serveis professionals',
};

const Results = () => (
  <Layout>
    <section className="section-spacing">
      <div className="container narrow-container">
        <span className="eyebrow text-uppercase">Resultats</span>
        <h1 className="display-6 fw-bold mt-3">Casos d'èxit i mètriques transparents</h1>
        <p className="text-muted mt-3">
          Estem recollint històries amb resultats tangibles en creixement d'usuari, eficiències operatives i retorn
          d'inversió. Aquesta secció mostrarà frameworks, dashboards i aprenentatges clau.
        </p>
        <InlineCTAGroup
          className="mt-4"
          primaryLabel="Comparteix el teu repte per WhatsApp"
          primaryHref={WHATSAPP_LINKS.reserveDiagnostic}
          secondaryLabel="Contacta per WhatsApp"
          secondaryHref={WHATSAPP_LINKS.generalInquiry}
        />
      </div>
    </section>

    <section className="section-spacing bg-white">
      <div className="container">
        <div className="row gy-4">
          {resultHighlights.map((result) => (
            <div className="col-md-4" key={result.title}>
              <div className="card h-100 border-0 shadow-sm text-center text-md-start">
                <div className="card-body p-4">
                  <div className="display-6 fw-bold text-primary">{result.metric}</div>
                  <h2 className="h5 fw-semibold mt-2">{result.title}</h2>
                  <p className="text-muted small mb-0 mt-3">{result.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-spacing">
      <div className="container narrow-container">
        <span className="eyebrow text-uppercase">Com mesurem</span>
        <h2 className="fw-semibold mt-3">Rigor analític i decisions compartides</h2>
        <p className="text-muted mt-3">
          Cada projecte inclou un pla de mesura pactat amb els equips implicats. Això garanteix que totes les decisions es
          prenguin amb dades actualitzades i una lectura compartida de l’impacte real.
        </p>
        <div className="row gy-4 mt-2">
          {measurementPractices.map((practice) => (
            <div className="col-md-4" key={practice.title}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h5 fw-semibold">{practice.title}</h3>
                  <p className="text-muted mt-3 mb-0">{practice.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-spacing bg-white">
      <div className="container narrow-container">
        <span className="eyebrow text-uppercase">Veu dels clients</span>
        <div className="card border-0 shadow-sm">
          <div className="card-body p-5">
            <p className="lead fst-italic text-muted">“{testimonial.quote}”</p>
            <p className="fw-semibold mt-4 mb-0">{testimonial.author}</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-spacing">
      <div className="container narrow-container text-center text-lg-start">
        <span className="eyebrow text-uppercase">Comparteix el teu repte</span>
        <h2 className="fw-semibold mt-3">T’ajudem a dissenyar la hipòtesi i mesurar-ne l’impacte</h2>
        <p className="text-muted mt-3">
          Explica’ns què vols assolir i revisarem conjuntament les mètriques clau. T’entregarem un pla de mesura i un
          calendari de proves perquè el teu equip pugui començar sense friccions.
        </p>
        <InlineCTAGroup
          className="mt-4"
          primaryLabel="Sol·licita una sessió per WhatsApp"
          primaryHref={WHATSAPP_LINKS.reserveDiagnostic}
          secondaryLabel="Explora una demo per WhatsApp"
          secondaryHref={WHATSAPP_LINKS.generalInquiry}
        />
      </div>
    </section>
  </Layout>
);

export default Results;
