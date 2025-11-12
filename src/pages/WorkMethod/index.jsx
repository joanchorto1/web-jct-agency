import React from 'react';
import Layout from '../../components/layouts/layout';
import InlineCTAGroup from '../../components/cta/InlineCTAGroup';
import { WHATSAPP_LINKS } from '../../utils/whatsapp';

const methodologySteps = [
  {
    title: 'Exploració i alineació',
    description:
      'Arrenquem amb tallers de discovery i sessions amb stakeholders per mapejar objectius, restriccions i oportunitats.',
  },
  {
    title: 'Hipòtesis i prototipat',
    description:
      'Prioritzem hipòtesis, dissenyem prototips i els validem amb usuaris o equips interns en cicles curts.',
  },
  {
    title: 'Llançament i aprenentatge continu',
    description:
      'Preparem els equips, activem mètriques i iterem amb ritmes quinzenals per consolidar resultats.',
  },
];

const rituals = [
  {
    name: 'Daily & weekly syncs',
    copy: 'Sessions breus per mantenir alineació i desbloquejar dependències ràpidament.',
  },
  {
    name: 'Revisions de sprint amb stakeholders',
    copy: 'Compartim avenços, mètriques i decisions perquè tot l’equip tingui context.',
  },
  {
    name: 'Retrospectives accionables',
    copy: 'Identifiquem millores en processos, comunicació i impacte per seguir evolucionant.',
  },
];

const enablement = [
  {
    title: 'Toolkit compartit',
    details: 'Espais digitals amb documentació, plantilles i gravacions perquè puguis consultar-ho quan vulguis.',
  },
  {
    title: 'Formació aplicada',
    details: 'Sessions hands-on amb els equips interns per adoptar noves eines, rituals i processos.',
  },
  {
    title: 'Acompanyament flexible',
    details: 'Continuem a la teva banda amb suport mensual o trimestral segons les necessitats del projecte.',
  },
];

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
          primaryLabel="Reserva un workshop per WhatsApp"
          primaryHref={WHATSAPP_LINKS.reserveDiagnostic}
          secondaryLabel="Contacta per WhatsApp"
          secondaryHref={WHATSAPP_LINKS.generalInquiry}
        />
      </div>
    </section>

    <section className="section-spacing bg-white">
      <div className="container">
        <div className="row gy-4">
          {methodologySteps.map((step) => (
            <div className="col-md-4" key={step.title}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h2 className="h5 fw-semibold">{step.title}</h2>
                  <p className="text-muted mt-3 mb-0">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-spacing">
      <div className="container narrow-container">
        <span className="eyebrow text-uppercase">Rituals</span>
        <h2 className="fw-semibold mt-3">Ritme compartit amb el teu equip</h2>
        <p className="text-muted mt-3">
          Ens integrem als teus canals i rituals per no crear silos. Això ens permet reaccionar ràpid i assegurar que cada
          decisió es prengui amb totes les persones implicades.
        </p>
        <div className="row gy-4 mt-2">
          {rituals.map((ritual) => (
            <div className="col-md-4" key={ritual.name}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h5 fw-semibold">{ritual.name}</h3>
                  <p className="text-muted mt-3 mb-0">{ritual.copy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-spacing bg-white">
      <div className="container narrow-container">
        <span className="eyebrow text-uppercase">Enablement</span>
        <h2 className="fw-semibold mt-3">Transferim capacitat perquè continuïs avançant</h2>
        <p className="text-muted mt-3">
          No volem generar dependències. Documentem processos i oferim suport flexible perquè puguis evolucionar la solució
          amb autonomia, implicant els equips interns des del primer dia.
        </p>
        <div className="row gy-4 mt-2">
          {enablement.map((item) => (
            <div className="col-md-4" key={item.title}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h5 fw-semibold">{item.title}</h3>
                  <p className="text-muted mt-3 mb-0">{item.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-spacing">
      <div className="container narrow-container text-center text-lg-start">
        <span className="eyebrow text-uppercase">Vols veure-ho en directe?</span>
        <h2 className="fw-semibold mt-3">Preparem un workshop adaptat al teu cas</h2>
        <p className="text-muted mt-3">
          Podem compartir agenda, dinàmiques i exemples d’entregables perquè valoris si el nostre operating model encaixa amb
          el teu equip. Ens adaptem al format presencial o virtual.
        </p>
        <InlineCTAGroup
          className="mt-4"
          primaryLabel="Dissenya el teu workshop per WhatsApp"
          primaryHref={WHATSAPP_LINKS.reserveDiagnostic}
          secondaryLabel="Parla amb la direcció de projectes"
          secondaryHref="mailto:joan@joanchorto.com?subject=Direccio%20de%20projectes"
        />
      </div>
    </section>
  </Layout>
);

export default WorkMethod;
