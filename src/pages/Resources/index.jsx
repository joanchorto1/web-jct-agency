import React from 'react';
import Layout from '../../components/layouts/layout';
import InlineCTAGroup from '../../components/cta/InlineCTAGroup';

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
          primaryLabel="Vull rebre els primers recursos"
          primaryHref="/contacte?from=recursos"
          secondaryHref="/contacte#demo"
        />
      </div>
    </section>
  </Layout>
);

export default Resources;
