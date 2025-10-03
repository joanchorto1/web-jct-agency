import React from 'react';
import Layout from '../../components/layouts/layout';
import InlineCTAGroup from '../../components/cta/InlineCTAGroup';

const Solutions = () => (
  <Layout>
    <section className="section-spacing">
      <div className="container narrow-container">
        <span className="eyebrow text-uppercase">Solucions</span>
        <h1 className="display-6 fw-bold mt-3">Productes digitals i serveis modulars</h1>
        <p className="text-muted mt-3">
          Estem estructurant el catàleg de solucions, des del disseny de producte fins a la integració de plataformes
          SaaS i ecosistemes de dades. Torna aviat per consultar paquets, mètriques d'impacte i roadmap.
        </p>
        <InlineCTAGroup
          className="mt-4"
          primaryLabel="Reserva una conversa estratègica"
          primaryHref="/contacte?from=solutions"
          secondaryHref="/contacte#demo"
        />
      </div>
    </section>
  </Layout>
);

export default Solutions;
