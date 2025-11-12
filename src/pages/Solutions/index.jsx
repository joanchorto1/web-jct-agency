import React from 'react';
import Layout from '../../components/layouts/layout';
import InlineCTAGroup from '../../components/cta/InlineCTAGroup';
import AveroLogo from '../../components/img/AVERO LOGO.png';
import constructProIcon from '../../components/img/portatilIcon.png';

const solutionSuites = [
  {
    title: 'Discovery i disseny de producte',
    description:
      'Workshops d’alineació, recerca amb usuaris i definició d’MVP amb roadmap prioritzat.',
    deliverables: 'Persones, journey maps, prototips interactius i business case inicial.',
  },
  {
    title: 'Llançament i operació de plataformes',
    description:
      'Implementació de solucions SaaS, integració amb sistemes i governança de producte.',
    deliverables: 'Backlog d’implementació, arquitectura, runbooks i training per equips interns.',
  },
  {
    title: 'Activació i creixement',
    description:
      'Estratègies d’adquisició, engagement i monetització amb experiments controlats.',
    deliverables: 'Models de dades, dashboards, seqüències d’automatització i plans d’optimització.',
  },
];

const accelerators = [
  {
    name: 'Sprint d’impacte en 10 dies',
    copy: 'Identifiquem una oportunitat concreta i lliurem un prototip funcional amb hipòtesis prioritzades.',
  },
  {
    name: 'Playbooks sectorials',
    copy: 'Reculls de bones pràctiques i integracions provades per accelerar la implementació.',
  },
  {
    name: 'Labs d’innovació conjunta',
    copy: 'Programes trimestrals amb equips mixtos per experimentar i llançar nous serveis o funcionalitats.',
  },
];

const productPages = [
  {
    title: 'Avero – Facturació Veri*Factu',
    description:
      'Programa de facturació homologat per a gestories, PIMEs i autònoms. Compliment legal, portal de clients i integració amb gestories.',
    href: '/avero',
    ctaLabel: 'Explora Avero',
    icon: AveroLogo,
    iconAlt: 'Logotip Avero',
  },
  {
    title: 'ConstructPro – ERP per a construcció',
    description:
      'Centralitza parts, pressupostos i facturació d’obres connectant oficines i equips de camp amb dashboards de marges.',
    href: '/constructpro',
    ctaLabel: 'Coneix ConstructPro',
    icon: constructProIcon,
    iconAlt: 'Icona ConstructPro',
  },
];

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

    <section className="section-spacing bg-white">
      <div className="container">
        <div className="row justify-content-between align-items-center mb-5">
          <div className="col-lg-7">
            <span className="eyebrow text-uppercase text-primary">Solucions destacades</span>
            <h2 className="fw-semibold mt-3">Productes propis per a facturació i operacions</h2>
            <p className="text-muted mt-3 mb-0">
              Complementem els projectes de consultoria amb software propietari que accelera l’adopció i assegura el compliment.
              Explora els nostres productes i reserva una demo guiada.
            </p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {productPages.map((solution) => (
            <div className="col" key={solution.title}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 d-flex flex-column">
                  <div className="d-flex align-items-center gap-3">
                    <img src={solution.icon} alt={solution.iconAlt} style={{ width: '56px' }} className="flex-shrink-0" />
                    <h2 className="h5 fw-semibold mb-0">{solution.title}</h2>
                  </div>
                  <p className="text-muted mt-3 flex-grow-1">{solution.description}</p>
                  <a href={solution.href} className="btn btn-link px-0 align-self-start">
                    {solution.ctaLabel}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-spacing bg-white">
      <div className="container">
        <div className="row gy-4">
          {solutionSuites.map((suite) => (
            <div className="col-md-4" key={suite.title}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h2 className="h5 fw-semibold">{suite.title}</h2>
                  <p className="text-muted mt-3">{suite.description}</p>
                  <p className="text-muted small mb-0 fw-semibold">Lliurables: {suite.deliverables}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-spacing">
      <div className="container narrow-container">
        <span className="eyebrow text-uppercase">Acceleradors</span>
        <h2 className="fw-semibold mt-3">Programes ràpids per generar momentum</h2>
        <p className="text-muted mt-3">
          Dissenyem acceleradors per desbloquejar resultats en poques setmanes. Són formats intensius que combinen consultoria,
          tecnologia i execució conjunta amb els teus equips.
        </p>
        <div className="row gy-4 mt-2">
          {accelerators.map((item) => (
            <div className="col-md-4" key={item.name}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h5 fw-semibold">{item.name}</h3>
                  <p className="text-muted mt-3 mb-0">{item.copy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-spacing bg-white">
      <div className="container narrow-container text-center text-lg-start">
        <span className="eyebrow text-uppercase">Vols veure un cas aplicat?</span>
        <h2 className="fw-semibold mt-3">Preparem una demo amb les solucions més adients</h2>
        <p className="text-muted mt-3">
          Compartirem exemples de dashboards, arquitectures i rituals de treball que millor s’ajustin a la teva organització.
          També et recomanarem quins acceleradors poden aportar valor immediat.
        </p>
        <InlineCTAGroup
          className="mt-4"
          primaryLabel="Demana una demo de solucions"
          primaryHref="/contacte?from=solutions"
          secondaryLabel="Contacta amb l’equip tècnic"
          secondaryHref="mailto:joan@joanchorto.com?subject=Contacte%20equip%20tecnic"
        />
      </div>
    </section>
  </Layout>
);

export default Solutions;
