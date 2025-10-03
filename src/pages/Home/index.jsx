import React from 'react';
import Layout from '../../components/layouts/layout';
import InlineCTAGroup from '../../components/cta/InlineCTAGroup';

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
      <div className="container narrow-container text-center text-lg-start">
        <h2 className="fw-semibold">Nous recursos, casos i metodologies ben aviat</h2>
        <p className="text-muted mt-3">
          Estem preparant històries reals sobre resultats, guies pràctiques per sectors i plantilles per accelerar
          la presa de decisions digitals. Subscriu-t'hi per ser dels primers en descobrir-les.
        </p>
        <InlineCTAGroup
          className="mt-4"
          primaryLabel="Reserva l'anàlisi gratuïta"
          primaryHref="/contacte"
          secondaryLabel="Vull una demo personalitzada"
          secondaryHref="/contacte#demo"
        />
      </div>
    </section>
  </Layout>
);

export default Home;
