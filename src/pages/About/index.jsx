import React from 'react';
import Layout from '../../components/layouts/layout';
import InlineCTAGroup from '../../components/cta/InlineCTAGroup';

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
          primaryLabel="Coneix-nos en una sessió introductòria"
          primaryHref="/contacte?from=sobre-jct"
          secondaryHref="/contacte#demo"
        />
      </div>
    </section>
  </Layout>
);

export default About;
