import React from 'react';
import Layout from '../../components/layouts/layout';
import InlineCTAGroup from '../../components/cta/InlineCTAGroup';

const ContactReservation = () => (
  <Layout>
    <section className="section-spacing">
      <div className="container narrow-container">
        <span className="eyebrow text-uppercase">Contacte</span>
        <h1 className="display-6 fw-bold mt-3">Reserva l'anàlisi gratuïta o demana una demo personalitzada</h1>
        <p className="text-muted mt-3">
          Deixa'ns les teves dades i comparteix el repte que vols abordar. T'avisem en menys de 24 hores per acordar
          una sessió d'anàlisi inicial o una demo adaptada al teu equip.
        </p>
        <div className="card border-0 shadow-sm mt-4">
          <div className="card-body p-4 p-lg-5">
            <p className="mb-4 text-muted">
              Aviat incorporarem un formulari interactiu. Fins aleshores, escriu-nos a
              {' '}<a className="fw-semibold" href="mailto:joan@jctagency.com">joan@jctagency.com</a>
              {' '}o truca al <a className="fw-semibold" href="tel:+34633391411">633 391 411</a>.
            </p>
            <InlineCTAGroup
              primaryLabel="Enviar un correu ara"
              primaryHref="mailto:joan@jctagency.com?subject=Reserva%20anàlisi%20gratuïta"
              secondaryLabel="Trucar a l'equip"
              secondaryHref="tel:+34633391411"
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactReservation;
