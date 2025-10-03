import React from 'react';
import Layout from '../../components/layouts/layout';
import InlineCTAGroup from '../../components/cta/InlineCTAGroup';

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
          primaryLabel="Comparteix el repte que vols resoldre"
          primaryHref="/contacte?from=resultats"
          secondaryHref="/contacte#demo"
        />
      </div>
    </section>
  </Layout>
);

export default Results;
