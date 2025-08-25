import React, { useState } from 'react';
import Layout from "../layouts/layout";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";

import heroImg from "../img/QUI SOM.png";
import autonomIcon from "../img/AUTONOM.png";
import pimesIcon from "../img/PYME.png";
import gestoriesIcon from "../img/GESTORIA.png";


import softwareImg from "../img/DESENVOLUPAMENT SOFTWARE.png";
import consultoriesImg from "../img/CONSULTORIES.png";
import dissenyWebImg from "../img/DISENY PAGINES WEB.png";
import suportImg from "../img/SUPORT.png";

import AveroLogo from "../img/AVERO LOGO.png";

import confiancaImg from "../img/CONFIANÇA.png";
import eficienciaImg from "../img/EFICIENCIA.png";
import escalabilitatImg from "../img/ESCALABILITAT.png";
import aliancesImg from "../img/ALIANÇES.png";

const Home = () => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [formFields, setFormFields] = useState({
    nom: "",
    empresa: "",
    email: "",
    missatge: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_uaggcy8", "template_f7zqqc9", e.target, "PrtHsOGCYBrChfJU3")
      .then(() => {
        setFormSubmitted(true);
        setFormFields({ nom: "", empresa: "", email: "", missatge: "" });
      })
      .catch(() => setFormSubmitted(false));
  };

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <Helmet>
        <title>JCT Agency | Solucions digitals per fer créixer el teu negoci</title>
        <meta
          name="description"
          content="Som una agència tecnològica especialitzada en software SaaS i programari empresarial."
        />
      </Helmet>

      <div className="bg-white text-dark">
        {/* Hero */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center g-4 flex-column flex-md-row">
              <div className="col-md-6">
                <h1>JCT Agency – Solucions digitals per a autònoms, PIMEs i gestories</h1>
                <p>
                  Som una agència tecnològica especialitzada en <strong>software SaaS</strong> i
                  <strong> programari empresarial</strong> que simplifica la gestió i garanteix el
                  <strong> compliment legal amb Veri*Factu</strong>.
                </p>
                <div className="d-flex gap-3 mt-3">
                  <a href="#serveis" className="btn btn-primary">
                    Descobreix els nostres serveis
                  </a>
                  <a href="#contacte" className="btn btn-outline-primary">
                    Parla amb nosaltres
                  </a>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src={heroImg}
                  alt="Handshake"
                  className="img-fluid"
                  style={{ maxWidth: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section id="clients" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-4">Ajudem empreses com la teva</h2>
            <p className="text-center">
              El nostre software està pensat per a <strong>autònoms</strong>, <strong>PIMEs</strong> i
              <strong> gestories</strong> que volen digitalitzar-se sense complicacions.
            </p>
            <div className="row mt-4">
              <div className="col-md-4 text-center mb-4">
                <img src={autonomIcon} alt="Autònoms" style={{ width: "60px" }} className="mb-3" />
                <h5>Autònoms</h5>
                <p>Solucions adaptades als professionals independents.</p>
              </div>
              <div className="col-md-4 text-center mb-4">
                <img src={pimesIcon} alt="PIMEs" style={{ width: "60px" }} className="mb-3" />
                <h5>PIMEs</h5>
                <p>Eines modernes per optimitzar la gestió empresarial.</p>
              </div>
              <div className="col-md-4 text-center mb-4">
                <img
                  src={gestoriesIcon}
                  alt="Gestories"
                  style={{ width: "60px" }}
                  className="mb-3"
                />
                <h5>Gestories</h5>
                <p>Programari que facilita nous serveis digitals als clients.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Serveis */}
        <section id="serveis" className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">Els nostres serveis</h2>
            <p className="text-center mb-5">
              A JCT Agency oferim serveis digitals per impulsar el creixement i l’eficiència del teu
              negoci.
            </p>
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col text-center">
                <img
                  src={softwareImg}
                  alt="Desenvolupament de software empresarial"
                  style={{ width: "60px" }}
                  className="mb-3"
                />
                <h3>Desenvolupament de software empresarial</h3>
                <p>
                  Creem <strong>programari propi</strong>, <strong>solucions SaaS</strong> i
                  <strong> integracions amb serveis externs</strong> perquè la teva empresa treballi amb
                  eines modernes i segures.
                </p>
                <a href="#contacte" className="btn btn-link">
                  Més informació
                </a>
              </div>
              <div className="col text-center">
                <img
                  src={consultoriesImg}
                  alt="Consultoria tecnològica i legal"
                  style={{ width: "60px" }}
                  className="mb-3"
                />
                <h3>Consultoria tecnològica i legal</h3>
                <p>
                  T’assessorem en <strong>noves normatives</strong>, <strong>estratègies de digitalització</strong> i
                  compliment amb <strong>Veri*Factu</strong>, perquè estiguis sempre a l’avantguarda.
                </p>
                <a href="#contacte" className="btn btn-link">
                  Més informació
                </a>
              </div>
              <div className="col text-center">
                <img
                  src={dissenyWebImg}
                  alt="Disseny i manteniment web"
                  style={{ width: "60px" }}
                  className="mb-3"
                />
                <h3>Disseny i manteniment web</h3>
                <p>
                  Creem i gestionem <strong>webs corporatives</strong> modernes, amb <strong>manteniment constant</strong>,
                  actualitzacions i seguretat garantida.
                </p>
                <a href="#contacte" className="btn btn-link">
                  Més informació
                </a>
              </div>
              <div className="col text-center">
                <img src={suportImg} alt="Suport continuat" style={{ width: "60px" }} className="mb-3" />
                <h3>Suport continuat</h3>
                <p>
                  Ens involucrem en els teus projectes amb <strong>atenció propera</strong> i
                  <strong> evolució constant del software</strong>, perquè el teu negoci mai s’aturi.
                </p>
                <a href="#contacte" className="btn btn-link">
                  Més informació
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Avero */}
        <section id="avero" className="py-5 bg-light">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-md-6">
                <h2>Avero – Facturació moderna i segura</h2>
                <p>
                  <strong>Avero</strong> és el nostre <strong>software SaaS de facturació</strong>, pensat per a
                  <strong> autònoms i PIMEs</strong>. Et permet gestionar <strong>factures, pressupostos, albarans i TPV</strong>
                  de forma simple, amb <strong>enviament automàtic a l’AEAT</strong> i total compliment legal amb
                  <strong> Veri*Factu</strong>.
                </p>
                <ul>
                  <li>Facturació electrònica completa i segura</li>
                  <li>Pressupostos, albarans i TPV integrats</li>
                  <li>Gestió de clients i productes</li>
                  <li>Compliment normatiu amb Veri*Factu</li>
                </ul>
                <div className="d-flex gap-3 mt-3">
                  <a href="/avero" className="btn btn-primary">Coneix Avero</a>
                  <a href="https://avero.jctagency.com" className="btn btn-outline-primary">Prova Avero gratis</a>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <img src={AveroLogo} alt="Avero" className="img-fluid" style={{ maxWidth: "300px" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Beneficis */}
        <section id="beneficis" className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">Què aportem als nostres clients</h2>
            <div className="row row-cols-2 row-cols-md-4 g-4">
              <div className="col text-center">
                <img src={confiancaImg} alt="Confiança" style={{ width: "60px" }} className="mb-3" />
                <h3>Confiança</h3>
                <p>
                  Treballem perquè compleixis amb la normativa sense maldecaps, amb <strong>solucions fiables i segures</strong>.
                </p>
              </div>
              <div className="col text-center">
                <img src={eficienciaImg} alt="Eficiència" style={{ width: "60px" }} className="mb-3" />
                <h3>Eficiència</h3>
                <p>
                  Optimitza el teu temps amb <strong>processos simplificats</strong> i un software intuïtiu.
                </p>
              </div>
              <div className="col text-center">
                <img
                  src={escalabilitatImg}
                  alt="Escalabilitat"
                  style={{ width: "60px" }}
                  className="mb-3"
                />
                <h3>Escalabilitat</h3>
                <p>Les nostres solucions creixen amb el teu negoci, adaptant-se a noves necessitats.</p>
              </div>
              <div className="col text-center">
                <img
                  src={aliancesImg}
                  alt="Aliances estratègiques"
                  style={{ width: "60px" }}
                  className="mb-3"
                />
                <h3>Aliances estratègiques</h3>
                <p>
                  Oferim a les <strong>gestories</strong> eines que obren <strong>nous canals d’ingressos</strong> i milloren el servei als seus clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valors */}
        <section id="valors" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-4">Els nostres valors</h2>
            <p className="text-center">
              A JCT Agency treballem amb una filosofia clara: oferir <strong>innovació, simplicitat, seguretat i proximitat</strong>.
            </p>
            <ul className="list-unstyled row g-4 mt-4">
              <li className="col-md-3">
                <strong>Innovació</strong> – sempre a l’avantguarda tecnològica i legal.
              </li>
              <li className="col-md-3">
                <strong>Simplicitat</strong> – software intuïtiu que facilita el treball, no el complica.
              </li>
              <li className="col-md-3">
                <strong>Compliment legal i seguretat</strong> – desenvolupem sistemes totalment adaptats a Veri*Factu i altres normatives.
              </li>
              <li className="col-md-3">
                <strong>Proximitat i suport</strong> – ens involucrem en cada projecte com si fos nostre.
              </li>
            </ul>
          </div>
        </section>

        {/* Blog / Recursos */}
        <section id="blog" className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">Recursos i guies útils</h2>
            <ul className="list-unstyled">
              <li>
                <a href="/blog/digitalitzar-pime">Com digitalitzar la gestió d’una PIME en 5 passos</a>
              </li>
              <li>
                <a href="/blog/verifactu-gestories">Guia pràctica per a gestories sobre Veri*Factu</a>
              </li>
              <li>
                <a href="/blog/saas-vs-tradicional">Per què un SaaS és millor que un software tradicional?</a>
              </li>
            </ul>
          </div>
        </section>

        {/* Contacte */}
        <section id="contacte" className="py-5 bg-light">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-6">
                <h2>Parlem del teu projecte?</h2>
                <p>Si busques un partner tecnològic per digitalitzar la teva empresa, contacta amb nosaltres.</p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="nom"
                    placeholder="Nom i cognoms"
                    className="form-control mb-3"
                    value={formFields.nom}
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
                    name="missatge"
                    placeholder="Missatge"
                    className="form-control mb-3"
                    rows="4"
                    value={formFields.missatge}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <button type="submit" className="btn btn-primary">
                    Enviar missatge
                  </button>
                  {isFormSubmitted && <p className="mt-3">¡Missatge enviat!</p>}
                </form>
              </div>
              <div className="col-md-6">
                <p>
                  <strong>📧</strong> info@jctagency.com
                </p>
                <p>
                  <strong>📍</strong> Tarragona (Catalunya)
                </p>
                <p>
                  <strong>📱</strong> 633 391 411
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;

