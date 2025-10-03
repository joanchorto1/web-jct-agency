import React from 'react';
import Layout from '../../components/layouts/layout';
import InlineCTAGroup from '../../components/cta/InlineCTAGroup';

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
          primaryLabel="Parlem del teu sector"
          primaryHref="/contacte?from=sectors"
          secondaryLabel="Explora una demo personalitzada"
          secondaryHref="/contacte#demo"
        />
      </div>
    </section>
  </Layout>
);

export default Sectors;
