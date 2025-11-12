import React from 'react';
import Layout from '../../components/layouts/layout';
import InlineCTAGroup from '../../components/cta/InlineCTAGroup';

const responseSteps = [
  {
    title: '1. Coneixement del repte',
    description:
      'Ens envies els objectius, context i deadlines. Responem amb un correu confirmant la recepció i demanant la informació clau si falta alguna peça.',
  },
  {
    title: '2. Sessió d’anàlisi inicial',
    description:
      'En menys de 24 hores coordinem una videotrucada de 30 minuts per entendre la situació i compartir idees preliminars.',
  },
  {
    title: '3. Proposta accionable',
    description:
      'En un màxim de 5 dies laborables preparem un document amb hipòtesis, roadmap, equips implicats i pressupost orientatiu.',
  },
];

const contactChannels = [
  {
    label: 'Coordinació directa amb Joan',
    value: 'joan@joanchorto.com',
    href: 'mailto:joan@joanchorto.com',
    helper: 'Responem abans de 24 hores laborables amb els següents passos.',
  },
  {
    label: 'Trucada immediata',
    value: '+34 633 391 411',
    href: 'tel:+34633391411',
    helper: 'De dilluns a divendres, de 9:00 a 18:00 (CET).',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/joanct',
    href: 'https://www.linkedin.com/in/joanct',
    helper: 'Escriu-nos i et contactarem per coordinar una reunió.',
  },
];

const faqs = [
  {
    question: 'Quina informació necessitem per començar?',
    answer:
      'Idealment, objectius de negoci, productes o serveis implicats, KPIs actuals i stakeholders que han d’estar involucrats en la primera sessió.',
  },
  {
    question: 'És possible signar NDA abans de compartir informació?',
    answer:
      'Sí. Disposem d’un model estàndard però també revisem el teu. Podem signar-lo digitalment abans de la reunió inicial.',
  },
  {
    question: 'Quin cost té l’anàlisi inicial?',
    answer:
      'L’anàlisi inicial i la proposta accionable són gratuïtes. Només pressupostem un cop definim l’abast i calendaritzem les primeres fites.',
  },
];

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
              Aviat incorporarem un formulari interactiu. Fins aleshores, escriu-nos a{' '}
              <a className="fw-semibold" href="mailto:joan@joanchorto.com">joan@joanchorto.com</a>{' '}
              o truca al <a className="fw-semibold" href="tel:+34633391411">633 391 411</a>.
            </p>
            <InlineCTAGroup
              primaryLabel="Enviar un correu ara"
              primaryHref="mailto:joan@joanchorto.com?subject=Reserva%20anàlisi%20gratuïta"
              secondaryLabel="Trucar a l'equip"
              secondaryHref="tel:+34633391411"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section-spacing bg-white">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5">
            <span className="eyebrow text-uppercase">Temps de resposta</span>
            <h2 className="fw-semibold mt-3">Un procés clar des del primer dia</h2>
            <p className="text-muted mt-3">
              Tenim un flux senzill per no perdre temps en burocràcia. Compartim un resum de cada interacció perquè totes les persones implicades
              tinguin visibilitat de l’estat del projecte.
            </p>
          </div>
          <div className="col-lg-7">
            <div className="row gy-4">
              {responseSteps.map((step) => (
                <div className="col-md-12" key={step.title}>
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h3 className="h5 fw-semibold">{step.title}</h3>
                      <p className="text-muted mt-3 mb-0">{step.description}</p>
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
        <span className="eyebrow text-uppercase">Canals</span>
        <h2 className="fw-semibold mt-3">Contacta pel canal que et resulti més còmode</h2>
        <p className="text-muted mt-3">
          Si prefereixes avançar via correu o t’és més pràctic una trucada ràpida, adapta’t al teu ritme. També podem coordinar-nos via
          LinkedIn si necessites involucrar altres persones de l’organització.
        </p>
        <div className="row gy-4 mt-2">
          {contactChannels.map((channel) => (
            <div className="col-md-4" key={channel.label}>
              <div className="card h-100 border-0 shadow-sm text-center text-md-start">
                <div className="card-body p-4">
                  <h3 className="h6 text-uppercase fw-semibold">{channel.label}</h3>
                  <a className="d-block fw-semibold mt-2" href={channel.href}>
                    {channel.value}
                  </a>
                  <p className="text-muted small mb-0 mt-3">{channel.helper}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-spacing bg-white">
      <div className="container narrow-container">
        <span className="eyebrow text-uppercase">Dubtes freqüents</span>
        <h2 className="fw-semibold mt-3">Respostes ràpides abans de la reunió</h2>
        <div className="accordion" id="contactFaq">
          {faqs.map((faq, index) => (
            <div className="accordion-item border-0 shadow-sm mb-3" key={faq.question}>
              <h3 className="accordion-header" id={`faqHeading${index}`}>
                <button
                  className={`accordion-button fw-semibold ${index !== 0 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faqCollapse${index}`}
                  aria-expanded={index === 0}
                  aria-controls={`faqCollapse${index}`}
                >
                  {faq.question}
                </button>
              </h3>
              <div
                id={`faqCollapse${index}`}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                aria-labelledby={`faqHeading${index}`}
                data-bs-parent="#contactFaq"
              >
                <div className="accordion-body text-muted">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-spacing">
      <div className="container narrow-container text-center text-lg-start">
        <span className="eyebrow text-uppercase">Pròxim pas</span>
        <h2 className="fw-semibold mt-3">Comencem a preparar la teva sessió</h2>
        <p className="text-muted mt-3">
          Un cop ens hagis escrit, compartirem un resum amb agenda, objectius i documents previs perquè aprofitem cada minut de la reunió.
        </p>
        <InlineCTAGroup
          className="mt-4"
          primaryLabel="Confirma la teva sessió"
          primaryHref="mailto:joan@joanchorto.com?subject=Confirmar%20sessio%20Joan%20Chorto"
          secondaryLabel="Demana que et truquem"
          secondaryHref="tel:+34633391411"
        />
      </div>
    </section>
  </Layout>
);

export default ContactReservation;
