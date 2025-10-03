import React from 'react';
import Layout from '../../components/layouts/layout';
import InlineCTAGroup from '../../components/cta/InlineCTAGroup';

const WorkMethod = () => (
  <Layout>
    <section className="section-spacing">
      <div className="container narrow-container">
        <span className="eyebrow text-uppercase">Com treballem</span>
        <h1 className="display-6 fw-bold mt-3">Metodologies col·laboratives i mesurables</h1>
        <p className="text-muted mt-3">
          Publicarem aviat el nostre operating model: discovery, co-creació amb equips interns, ritme d'execució i
          quadres de seguiment. També incorporarem plantilles i checklists descarregables.
        </p>
        <InlineCTAGroup
          className="mt-4"
          primaryLabel="Reserva un workshop exploratori"
          primaryHref="/contacte?from=com-treballem"
          secondaryHref="/contacte#demo"
        />
      </div>
    </section>
  </Layout>
);

export default WorkMethod;
