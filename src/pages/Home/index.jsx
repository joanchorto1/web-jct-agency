import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../../components/layouts/layout';

import heroImg from '../../components/img/QUI SOM.png';
import softwareImg from '../../components/img/DESENVOLUPAMENT SOFTWARE.png';
import suportImg from '../../components/img/SUPORT.png';
import AveroLogo from '../../components/img/AVERO LOGO.png';
import constructProIcon from '../../components/img/portatilIcon.png';
import AjuntamentAldeaLogo from '../../components/img/AJUNTAMENT.jpeg';
import EGEALogo from '../../components/img/EGEA.png';
import GERCOLogo from '../../components/img/gerco-serveis-integrals.png';

import '../../components/styles/Home.css';

const HERO_PAIN_POINTS = [
  'Evitem hores perdudes en tasques manuals i quadratures repetitives.',
  'Traduïm els canvis de normativa en accions concretes per al teu equip.',
  'Creem un sistema únic perquè dades, finances i operacions estiguin sincronitzades.',
];

const SERVICE_PILLARS = [
  {
    title: 'Diagnosi estratègica i priorització',
    description:
      'Mapeig de processos, riscos fiscals i dependències tecnològiques per definir un full de ruta assumible i mesurable.',
  },
  {
    title: 'Disseny de processos i experiència',
    description:
      'Taller d’operacions, prototips validats amb equips interns i clients, i definició de KPI que demostren l’impacte.',
  },
  {
    title: 'Tecnologia sense friccions',
    description:
      'Integració de sistemes, automatitzacions i quadres de comandament que connecten la informació crítica sense manteniment manual.',
  },
  {
    title: 'Acompanyament i governança',
    description:
      'Formació, rituals de seguiment i PMO compartida per garantir l’adopció i l’evolució contínua del software.',
  },
];

const WORKFLOW_STEPS = [
  {
    title: '1. Diagnosi guiada',
    description:
      'Analitzem fluxos, dades d’ús i normativa aplicable per detectar el que frena el creixement i el compliment fiscal.',
  },
  {
    title: '2. Full de ruta accionable',
    description:
      'Co-dissenyem el pla amb direcció, finances i operacions per assegurar prioritats clares i responsabilitats compartides.',
  },
  {
    title: '3. Execució i evolució contínua',
    description:
      'Treballem en iteracions curtes amb equips mixtes, monitoritzem indicadors i adaptem els mòduls a cada canvi de normativa.',
  },
];

const SUCCESS_STORIES = [
  {
    title: 'Empresa de manteniment industrial',
    result: '-40% temps administratiu',
    description:
      'Vam redissenyar el circuit de parts i factures amb Veri*Factu, integrant el seu ERP i automatitzant l’aprovació de serveis.',
    learnings: [
      'Connectem ordres de treball, contractes i facturació en un únic dashboard operatiu.',
      'Reduïm incidències fiscals amb controls previs i alertes a equips de camp.',
    ],
    icon: suportImg,
    iconAlt: 'Il·lustració suport continu',
  },
  {
    title: 'Gestoria amb 300 clients pimes',
    result: '300 clients digitalitzats en 3 mesos',
    description:
      'Co-creem un onboarding automatitzat, canalitzant la documentació cap a Veri*Factu i establint rituals setmanals de seguiment.',
    learnings: [
      'Formem l’equip en scripts i plantilles perquè cada client entri amb la mateixa qualitat.',
      'Generem quadres de control perquè direcció visualitzi l’estat de compliment en temps real.',
    ],
    icon: AveroLogo,
    iconAlt: 'Logotip Avero',
  },
  {
    title: 'PIME industrial familiar',
    result: '7 fulls d’Excel eliminats',
    description:
      'Implementem integracions a mida entre magatzem, comptabilitat i facturació per tenir traçabilitat completa davant l’AEAT.',
    learnings: [
      'Automatitzem conciliacions i informes perquè gerència prengui decisions amb dades fiables.',
      'Establim un roadmap evolutiu amb revisions trimestrals i suport continu.',
    ],
    icon: softwareImg,
    iconAlt: 'Icona d’integracions',
  },
];

const SECTORS = [
  {
    title: 'Gestories i despatxos professionals',
    description:
      'Digitalitza la relació amb clients, ofereix serveis Veri*Factu i escala sense ampliar l’estructura.',
  },
  {
    title: 'PIMEs industrials i serveis B2B',
    description:
      'Integra vendes, finances i operacions amb sistemes que asseguren traçabilitat fiscal i productiva.',
  },
  {
    title: 'Direccions financeres i equips de compliment',
    description:
      'Impulsa models d’informació fiables, controls interns i informes regulatoris en un únic entorn.',
  },
];

const IMPACT_METRICS = [
  {
    value: '-40%',
    label: 'Temps administratiu',
    description: 'Reducció mitjana gràcies a l’automatització de fluxos clau i la signatura digital.',
  },
  {
    value: '+99%',
    label: 'Disponibilitat assegurada',
    description: 'Monitoratge actiu i alertes proactives per garantir el servei sense interrupcions.',
  },
  {
    value: '<30 dies',
    label: 'Primer mòdul en producció',
    description: 'Iteracions quinzenals amb formació i transferència de coneixement.',
  },
  {
    value: '+120%',
    label: 'Crec. d’adopció digital',
    description: 'Increment d’usuaris actius en projectes llançats amb squads híbrids.',
  },
  {
    value: '6 setmanes',
    label: 'Temps a llançar pilots',
    description: 'Des de l’alineació d’objectius fins a validar amb clients reals.',
  },
  {
    value: '94%',
    label: 'Satisfacció dels stakeholders',
    description: 'Valoració mitjana del ritme d’execució i la transparència del projecte.',
  },
];

const TRUST_CARDS = [
  {
    title: 'Partner digital de confiança',
    description:
      'Ens involucrem en el disseny, la implementació i l’evolució dels teus sistemes perquè compleixin avui i demà.',
  },
  {
    title: 'Compliment Veri*Factu acreditat',
    description:
      'Som proveïdor tecnològic registrat i operem amb protocols que asseguren la signatura i l’enviament segur a l’AEAT.',
  },
];

const CLIENT_LOGOS = [
  { src: AjuntamentAldeaLogo, alt: "Ajuntament de L'Aldea" },
  { src: EGEALogo, alt: 'EGEA Arquitectura' },
  { src: GERCOLogo, alt: 'GERCO Serveis Integrals' },
];

const PRODUCT_SOLUTIONS = [
  {
    eyebrow: 'Facturació Veri*Factu',
    title: 'Avero',
    description:
      'Programa de facturació homologat Veri*Factu perquè gestories, PIMEs i autònoms compleixin la normativa sense friccions.',
    href: '/avero',
    ctaLabel: 'Descobreix Avero',
    icon: AveroLogo,
    iconAlt: 'Logotip Avero',
  },
  {
    eyebrow: 'ERP per a construcció',
    title: 'ConstructPro',
    description:
      'Centralitza parts, pressupostos i facturació d’obres en temps real per guanyar control sobre marges i equips.',
    href: '/constructpro',
    ctaLabel: 'Coneix ConstructPro',
    icon: constructProIcon,
    iconAlt: 'Icona ConstructPro',
  },
];

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>JCT Agency | Consultoria Veri*Factu i operacions digitals</title>
        <meta
          name="description"
          content="Consultoria estratègica, software Veri*Factu i acompanyament continu per reduir riscos fiscals, automatitzar processos i fer créixer el teu negoci."
        />
      </Helmet>

      <div className="home-view">
        <section className="home-hero" data-aos="fade-up">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 home-hero-content text-lg-start text-center">
                <span className="section-eyebrow">Consultoria Veri*Factu end-to-end</span>
                <h1 className="section-heading">
                  T’ajudem a complir Veri*Factu mentre optimitzes la gestió de la teva empresa
                </h1>
                <p className="section-subheading">Estratègia + Software + Acompanyament continu.</p>
                <p className="hero-description">
                  Ens impliquem des de la diagnosi fins al manteniment perquè el teu equip treballi amb processos ordenats, dades fiables i tranquil·litat fiscal.
                </p>
                <ul className="home-pain-list">
                  {HERO_PAIN_POINTS.map((pain) => (
                    <li key={pain}>{pain}</li>
                  ))}
                </ul>
                <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 mt-4 justify-content-md-start justify-content-center">
                  <a href="/contacte" className="btn btn-brand">
                    Demana diagnòstic gratuït
                  </a>
                  <a href="#assessorem" className="link-arrow">
                    Coneix el nostre enfocament
                  </a>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <img
                  src={heroImg}
                  alt="Equip treballant en software"
                  className="img-fluid"
                  style={{ maxWidth: '420px' }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="assessorem" data-aos="fade-up" className="section-assessorem">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4">
                <span className="section-eyebrow">Assessorem i executem</span>
                <h2 className="section-heading">Definim processos, prioritzem iniciatives i els fem realitat amb tu</h2>
                <p className="section-subheading">
                  No només desenvolupem programari — treballem colze a colze amb direcció, equips operatius i gestories perquè cada decisió tingui impacte directe en els resultats i el compliment fiscal.
                </p>
                <div className="consulting-chips mt-4">
                  <span>Diagnosi i roadmap</span>
                  <span>Software Veri*Factu i integracions</span>
                  <span>Governança i suport continu</span>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row g-4">
                  {SERVICE_PILLARS.map((pillar) => (
                    <div className="col-md-6" key={pillar.title}>
                      <div className="card-surface h-100">
                        <h3 className="h5 fw-semibold">{pillar.title}</h3>
                        <p className="text-muted mt-3 mb-0">{pillar.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="com-funciona" data-aos="fade-up">
          <div className="container">
            <div className="row justify-content-between align-items-center g-4 mb-5">
              <div className="col-lg-7">
                <span className="section-eyebrow">Metodologia</span>
                <h2 className="section-heading">Del diagnòstic inicial als resultats mesurables en poques setmanes</h2>
                <p className="section-subheading">
                  Simplifiquem la transformació digital combinant consultoria, desenvolupament i canvi cultural perquè cada iteració redueixi temps, errors i riscos fiscals.
                </p>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {WORKFLOW_STEPS.map((step) => (
                <div className="col" key={step.title}>
                  <div className="card-surface h-100">
                    <h3 className="h5 fw-semibold mb-3">{step.title}</h3>
                    <p className="mb-0 text-muted">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="solucions" data-aos="fade-up" className="section-product-solutions">
          <div className="container">
            <div className="row justify-content-between align-items-center g-4 mb-5">
              <div className="col-lg-7">
                <span className="section-eyebrow">Solucions pròpies</span>
                <h2 className="section-heading">Productes que connecten consultoria i execució</h2>
                <p className="section-subheading">
                  Acompanyem cada implementació amb roadmap i suport continu. Explora les nostres solucions per a facturació i
                  operacions de camp.
                </p>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {PRODUCT_SOLUTIONS.map((solution) => (
                <div className="col" key={solution.title}>
                  <div className="card-surface h-100 d-flex flex-column">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={solution.icon}
                        alt={solution.iconAlt}
                        style={{ width: '56px' }}
                        className="flex-shrink-0"
                      />
                      <div>
                        <span className="badge bg-primary-subtle text-primary fw-semibold text-uppercase">
                          {solution.eyebrow}
                        </span>
                        <h3 className="h4 fw-semibold mt-2 mb-0">{solution.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted mt-3 flex-grow-1">{solution.description}</p>
                    <a href={solution.href} className="link-arrow mt-3 align-self-start">
                      {solution.ctaLabel}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="histories" data-aos="fade-up">
          <div className="container">
            <div className="row justify-content-between align-items-center g-4 mb-5">
              <div className="col-lg-8">
                <span className="section-eyebrow">Solucions reals</span>
                <h2 className="section-heading">Solucions reals per reduir temps, errors i riscos fiscals</h2>
                <p className="section-subheading">
                  Expliquem històries perquè visualitzis com combinant consultoria, tecnologia i suport continu podem desbloquejar millores tangibles al teu negoci.
                </p>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {SUCCESS_STORIES.map((story) => (
                <div className="col" key={story.title}>
                  <article className="story-card h-100">
                    <div className="story-icon">
                      <img src={story.icon} alt={story.iconAlt} className="img-fluid" />
                    </div>
                    <span className="story-result">{story.result}</span>
                    <h3 className="h4 fw-semibold">{story.title}</h3>
                    <p className="text-muted">{story.description}</p>
                    <ul className="mt-3 ps-3 text-muted">
                      {story.learnings.map((learning) => (
                        <li key={learning}>{learning}</li>
                      ))}
                    </ul>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section data-aos="fade-up">
          <div className="container">
            <div className="row justify-content-between align-items-center g-4 mb-5">
              <div className="col-lg-7">
                <span className="section-eyebrow">Impacte i mesura</span>
                <h2 className="section-heading">Indicadors que guien la presa de decisions</h2>
                <p className="section-subheading">
                  Cada projecte inclou instruments de mesura perquè puguis validar l’impacte real i prioritzar les següents iteracions amb dades objectives.
                </p>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {IMPACT_METRICS.map((metric) => (
                <div className="col" key={metric.label}>
                  <div className="metric-card h-100">
                    <h3>{metric.value}</h3>
                    <p className="fw-semibold mb-2">{metric.label}</p>
                    <p>{metric.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sectors" data-aos="fade-up">
          <div className="container">
            <div className="row justify-content-between align-items-center g-4 mb-5">
              <div className="col-lg-7">
                <span className="section-eyebrow">Sectors</span>
                <h2 className="section-heading">Experiència en negocis que necessiten complir mentre escalen</h2>
                <p className="section-subheading">
                  Treballem amb equips que requereixen traçabilitat, dades fiables i experiències digitals capaces d’oferir nous serveis.
                </p>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {SECTORS.map((sector) => (
                <div className="col" key={sector.title}>
                  <div className="card-surface h-100">
                    <span className="badge-soft mb-3">Sector</span>
                    <h3 className="h5 fw-semibold">{sector.title}</h3>
                    <p className="mb-0 text-muted">{sector.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="compliment" data-aos="fade-up">
          <div className="container">
            <div className="row justify-content-between align-items-center g-4 mb-5">
              <div className="col-lg-8">
                <span className="section-eyebrow">Partner continu</span>
                <h2 className="section-heading">Som el teu partner digital per dissenyar, implementar i evolucionar Veri*Factu</h2>
                <p className="section-subheading">
                  Aportem equip multidisciplinari i processos de governança perquè el sistema compleixi avui i demà sense carregar l’organització amb manteniment addicional.
                </p>
                <ul className="partner-commitments mt-4">
                  <li>Sessions quinzenals de seguiment per ajustar roadmap i prioritzar nous requisits.</li>
                  <li>Indicadors compartits de compliment, adopció i satisfacció de l’usuari final.</li>
                  <li>Canals directes amb consultors i enginyers per resoldre incidències en hores, no dies.</li>
                </ul>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {TRUST_CARDS.map((card) => (
                <div className="col" key={card.title}>
                  <div className="trust-card h-100">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-5">
              <a href="/contacte" className="btn btn-brand">
                Demana diagnòstic gratuït
              </a>
            </div>
          </div>
        </section>

        <section id="clients" data-aos="fade-up">
          <div className="container text-center">
            <span className="section-eyebrow">Clients que confien</span>
            <h2 className="section-heading">Organitzacions que ja treballen amb JCT Agency</h2>
            <p className="section-subheading mx-auto">
              Acompanyem administracions, estudis professionals i empreses privades en la seva transformació digital i adopció de Veri*Factu.
            </p>
            <div className="row justify-content-center align-items-center g-4 clients-logos mt-4">
              {CLIENT_LOGOS.map((logo) => (
                <div className="col-6 col-md-4" key={logo.alt}>
                  <img src={logo.src} alt={logo.alt} className="img-fluid" />
                  <p className="mt-2 text-muted">{logo.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacte" data-aos="fade-up">
          <div className="container">
            <div className="home-contact-card">
              <div className="row g-4 align-items-start">
                <div className="col-lg-6">
                  <span className="section-eyebrow">Proper pas</span>
                  <h2 className="section-heading">Explica’ns què vols solucionar i preparem el teu diagnòstic</h2>
                  <p className="section-subheading">
                    Comparteix els reptes actuals i rep un pla inicial amb priorització de processos, mètriques clau i propostes tecnològiques per començar.
                  </p>
                  <div className="mt-4">
                    <a href="/contacte" className="btn btn-brand">
                      Vull parlar amb l’equip
                    </a>
                    <p className="text-muted mt-3 mb-0">
                      Et redirigirem al formulari de contacte perquè ens expliquis amb detall el teu projecte.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 offset-lg-1">
                  <div className="contact-details">
                    <h3 className="h5 fw-semibold mb-3">Contacte directe</h3>
                    <p>
                      <strong>📧</strong> info@jctagency.com
                    </p>
                    <p>
                      <strong>📍</strong> Tarragona (Catalunya)
                    </p>
                    <p>
                      <strong>📱</strong> 633 391 411
                    </p>
                    <p className="mb-0 text-muted">
                      Programem sessions de seguiment quinzenals per garantir que el roadmap evoluciona amb el teu negoci.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
