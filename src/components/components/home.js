import React, { useState } from 'react';
import Layout from "../layouts/layout";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";
import { WHATSAPP_LINKS } from "../../utils/whatsapp";

import heroImg from "../img/QUI SOM.png";
import softwareImg from "../img/DESENVOLUPAMENT SOFTWARE.png";
import consultoriesImg from "../img/CONSULTORIES.png";
import suportImg from "../img/SUPORT.png";
import AveroLogo from "../img/AVERO LOGO.png";
import AjuntamentAldeaLogo from "../img/AJUNTAMENT.jpeg";
import EGEALogo from "../img/EGEA.png";
import GERCOLogo from "../img/gerco-serveis-integrals.png";

import "../styles/Home.css";

const HERO_PAIN_POINTS = [
  "Processos dispersos que compliquen el control financer del dia a dia.",
  "Normatives Veri*Factu i AEAT canviants que generen incertesa.",
  "Aplicacions que es queden enrere i obliguen l’equip a dedicar hores de manteniment manual.",
];

const WORKFLOW_STEPS = [
  {
    title: "1. Diagnosi guiada",
    description:
      "Auditem fluxos, dades i tecnologia existent per entendre què frena el creixement i el compliment normatiu.",
  },
  {
    title: "2. Implantació iterativa",
    description:
      "Dissenyem un full de ruta modular i prioritzem els mòduls que resolen el dolor immediat amb entregues quinzenals.",
  },
  {
    title: "3. Evolució contínua",
    description:
      "Monitoritzem KPI, incidències i noves obligacions legals per mantenir el programari sempre al dia.",
  },
];

const MODULES = [
  {
    title: "Facturació Veri*Factu (Avero)",
    description:
      "Suite de facturació SaaS homologada per garantir l’enviament segur a l’AEAT des del primer dia.",
    bullets: [
      "Enviament automàtic de factures i registres amb hash verificable.",
      "Signatura digital, TPV i portal de validació perquè clients i gestors treballin en paral·lel.",
    ],
    icon: AveroLogo,
    iconAlt: "Logotip Avero",
  },
  {
    title: "Integracions i automatitzacions",
    description:
      "Connexió amb CRM, ERP, bancs i BI per eliminar tasques manuals i sincronitzar dades en temps real.",
    bullets: [
      "APIs i connectores pròpies amb monitoratge 24/7.",
      "Workflows sense errors humans ni fulls de càlcul dispersos.",
    ],
    icon: softwareImg,
    iconAlt: "Icona desenvolupament de software",
  },
  {
    title: "Portal de clients i equips",
    description:
      "Espais digitals perquè els teus clients puguin pujar, aprovar i consultar documentació en qualsevol moment.",
    bullets: [
      "Control de rols i permisos granular.",
      "Alertes automatitzades per reduir incidències i retards.",
    ],
    icon: consultoriesImg,
    iconAlt: "Icona consultoria",
  },
  {
    title: "Quadres de comandament i suport",
    description:
      "Visió temps real de KPI crítics i suport proactiu per garantir disponibilitat i millores evolutives.",
    bullets: [
      "Dashboards personalitzats per direcció i equips operatius.",
      "Manteniment continu amb roadmap compartit i sessions de revisió.",
    ],
    icon: suportImg,
    iconAlt: "Icona suport",
  },
];

const SECTORS = [
  {
    title: "Gestories i despatxos professionals",
    description:
      "Digitalitza la relació amb clients, ofereix serveis Veri*Factu i escala sense incrementar equips.",
  },
  {
    title: "PIMEs industrials i serveis B2B",
    description:
      "Integra vendes, finances i operacions amb sistemes que asseguren traçabilitat fiscal i productiva.",
  },
  {
    title: "Startups SaaS i equips híbrids",
    description:
      "Construeix producte i processos escalables amb mòduls que evolucionen amb el teu roadmap.",
  },
];

const EXPECTED_RESULTS = [
  {
    metric: "-40%",
    description: "Temps dedicat a tasques administratives gràcies a l’automatització de fluxos clau.",
  },
  {
    metric: "+99%",
    description: "Disponibilitat del programari verificada amb monitoratge actiu i alertes proactives.",
  },
  {
    metric: "<30 dies",
    description: "Desplegament del primer mòdul amb formació i transferència de coneixement.",
  },
];

const TRUST_CARDS = [
  {
    title: "Credencials Veri*Factu i AEAT",
    description:
      "Som proveïdor tecnològic registrat. Els nostres sistemes apliquen la signatura i l’enviament segur requerit per l’AEAT.",
  },
  {
    title: "Manteniment continu i roadmap compartit",
    description:
      "Monitoratge 24/7, SLA definits i sessions de revisió perquè el teu software evolucioni amb el negoci.",
  },
];

const CLIENT_LOGOS = [
  { src: AjuntamentAldeaLogo, alt: "Ajuntament de L'Aldea" },
  { src: EGEALogo, alt: "EGEA Arquitectura" },
  { src: GERCOLogo, alt: "GERCO Serveis Integrals" },
];

const Home = () => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [formFields, setFormFields] = useState({
    nombre: "",
    empresa: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_uaggcy8", "template_88m2twe", e.target, "PrtHsOGCYBrChfJU3")
      .then(() => {
        setFormSubmitted(true);
        setFormFields({ nombre: "", empresa: "", email: "", mensaje: "" });
      })
      .catch(() => setFormSubmitted(false));
  };

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <Helmet>
        <title>JCT Agency | Programari Veri*Factu amb evolució contínua</title>
        <meta
          name="description"
          content="Construïm software SaaS, integracions i portals Veri*Factu per a gestories, PIMEs i startups amb manteniment proactiu i compliment 100% AEAT."
        />
      </Helmet>

      <div className="home-view">
        <section className="home-hero" data-aos="fade-up">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 home-hero-content text-lg-start text-center">
                <span className="section-eyebrow">Producte digital i compliment fiscal</span>
                <h1 className="section-heading">
                  Software Veri*Factu que resol el dolor operatiu i evoluciona amb la teva empresa
                </h1>
                <p className="section-subheading">
                  Co-dissenyem experiències digitals perquè gestories, PIMEs i equips SaaS compleixin la normativa mentre automatitzen processos crítics.
                </p>
                <ul className="home-pain-list">
                  {HERO_PAIN_POINTS.map((pain) => (
                    <li key={pain}>{pain}</li>
                  ))}
                </ul>
                <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 mt-4 justify-content-md-start justify-content-center">
                  <a href={WHATSAPP_LINKS.generalInquiry} className="btn btn-brand">
                    Demana una demo per WhatsApp
                  </a>
                  <a href="#com-funciona" className="btn btn-outline-brand">
                    Descobreix com funciona
                  </a>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <img
                  src={heroImg}
                  alt="Equip treballant en software"
                  className="img-fluid"
                  style={{ maxWidth: "420px" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="com-funciona" data-aos="fade-up">
          <div className="container">
            <div className="row justify-content-between align-items-center g-4 mb-5">
              <div className="col-lg-7">
                <span className="section-eyebrow">Com funciona</span>
                <h2 className="section-heading">Un procés en tres passos perquè el canvi sigui tangible des del primer mes</h2>
                <p className="section-subheading">
                  Ens impliquem amb el teu equip per garantir que cada mòdul resol un problema real i queda integrat en l’operativa quotidiana.
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

        <section id="moduls" data-aos="fade-up">
          <div className="container">
            <div className="row justify-content-between align-items-center g-4 mb-5">
              <div className="col-lg-8">
                <span className="section-eyebrow">Mòduls que responen al dolor</span>
                <h2 className="section-heading">Activem només el que necessites, amb components reutilitzables i escalables</h2>
                <p className="section-subheading">
                  Cada mòdul està construït amb la mateixa base tecnològica i de disseny perquè la integració sigui ràpida, segura i coherent amb la identitat de la teva marca.
                </p>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {MODULES.map((module) => (
                <div className="col" key={module.title}>
                  <div className="card-surface">
                    <div className="card-icon">
                      <img src={module.icon} alt={module.iconAlt} className="img-fluid" />
                    </div>
                    <h3 className="h4 fw-semibold mb-3">{module.title}</h3>
                    <p className="text-muted">{module.description}</p>
                    <ul className="mt-3 ps-3 text-muted">
                      {module.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
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

        <section id="resultats" data-aos="fade-up">
          <div className="container">
            <div className="row justify-content-between align-items-center g-4 mb-5">
              <div className="col-lg-7">
                <span className="section-eyebrow">Resultats esperables</span>
                <h2 className="section-heading">Indicadors tangibles des de la primera iteració</h2>
                <p className="section-subheading">
                  Acompanyem la implantació amb mètriques clares perquè el teu equip vegi ràpidament l’impacte en operacions, finances i experiència de client.
                </p>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {EXPECTED_RESULTS.map((result) => (
                <div className="col" key={result.metric}>
                  <div className="metric-card h-100">
                    <h3>{result.metric}</h3>
                    <p>{result.description}</p>
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
                <span className="section-eyebrow">Veri*Factu, AEAT i manteniment</span>
                <h2 className="section-heading">Compliment acreditat i evolució constant del programari</h2>
                <p className="section-subheading">
                  El nostre equip combina producte digital, fiscalitat i suport tècnic per garantir que cada mòdul segueixi operatiu i actualitzat.
                </p>
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
                  <span className="section-eyebrow">Comencem</span>
                  <h2 className="section-heading">Explica’ns què vols solucionar i dissenyem la demo</h2>
                  <p className="section-subheading">
                    Comparteix els reptes actuals i prepara’t per rebre una proposta modular amb roadmap i pressupost orientatiu.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-4">
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Nom i cognoms"
                      className="form-control mb-3"
                      value={formFields.nombre}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Empresa"
                      className="form-control mb-3"
                      value={formFields.empresa}
                      onChange={handleChange}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control mb-3"
                      value={formFields.email}
                      onChange={handleChange}
                      required
                    />
                    <textarea
                      name="mensaje"
                      placeholder="Quin és el principal repte digital que vols resoldre?"
                      className="form-control mb-3"
                      rows="4"
                      value={formFields.mensaje}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <button type="submit" className="btn btn-brand">
                      Envia el missatge
                    </button>
                    {isFormSubmitted && <p className="mt-3 text-success">Missatge enviat correctament.</p>}
                  </form>
                </div>
                <div className="col-lg-5 offset-lg-1">
                  <div className="contact-details">
                    <h3 className="h5 fw-semibold mb-3">Contacte directe</h3>
                    <p><strong>📧</strong> info@jctagency.com</p>
                    <p><strong>📍</strong> Tarragona (Catalunya)</p>
                    <p><strong>📱</strong> 633 391 411</p>
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
