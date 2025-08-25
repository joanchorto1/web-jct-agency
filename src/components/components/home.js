import React, { useState } from 'react';
import Layout from "../layouts/layout";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";

import QuiSomImage from "../img/QUI SOM.png";
import AveroLogo from "../img/AVERO LOGO.png";
import softwareImg from "../img/DESENVOLUPAMENT SOFTWARE.png";
import consultoriesImg from "../img/CONSULTORIES.png";
import dissenyWebImg from "../img/DISENY PAGINES WEB.png";
import suportImg from "../img/SUPORT.png";
import infoIcon from "../img/infoIcon.jpeg";
import contactIcon from "../img/contactIcon.jpeg";

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
          content="Desenvolupem programari empresarial modern, intuïtiu i segur."
        />
      </Helmet>

      <div className="bg-white text-dark">
        {/* Claim principal */}
        <section className="py-5 text-center">
          <div className="container">
            <h1 className="display-5 fw-bold">
              JCT Agency – Solucions digitals per fer créixer el teu negoci
            </h1>
            <p className="lead">Desenvolupem programari empresarial modern, intuïtiu i segur.</p>
            <p>
              Ajudem autònoms, PIMEs i gestories a simplificar la gestió diària amb
              software adaptat a les seves necessitats i al marc legal vigent.
            </p>
            <div className="d-flex justify-content-center gap-3 mt-4">
              <a href="#serveis" className="btn btn-primary">
                ➡️ Coneix els nostres serveis
              </a>
              <a href="/contacto" className="btn btn-outline-primary">
                ➡️ Parla amb nosaltres
              </a>
            </div>
          </div>
        </section>

        {/* Qui som */}
        <section id="qui-som" className="py-5">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-md-6">
                <h2 className="mb-4">Qui som</h2>
                <p>
                  A JCT Agency som una agència tecnològica especialitzada en
                  solucions empresarials i software SaaS.
                </p>
                <p>El nostre objectiu és doble:</p>
                <ul>
                  <li>
                    Acompanyar autònoms i PIMEs en la seva digitalització amb
                    eines simples i fiables.
                  </li>
                  <li>
                    Ser el partner tecnològic de confiança de les gestories,
                    oferint eines que els permetin créixer i aportar més valor
                    als seus clients.
                  </li>
                </ul>
                <p>Valors que ens defineixen:</p>
                <ul>
                  <li>
                    <strong>Innovació</strong> → sempre a l’avantguarda en
                    tecnologia i normatives.
                  </li>
                  <li>
                    <strong>Simplicitat</strong> → software intuïtiu que
                    facilita el treball, no el complica.
                  </li>
                  <li>
                    <strong>Compliment legal i seguretat</strong> → desenvolupem
                    sistemes totalment adaptats a Veri*Factu i altres obligacions
                    normatives.
                  </li>
                  <li>
                    <strong>Proximitat i suport</strong> → ens involucrem en els
                    projectes dels nostres clients.
                  </li>
                </ul>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src={QuiSomImage}
                  alt="Equip JCT Agency"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Serveis */}
        <section id="serveis" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-4">Serveis</h2>
            <div className="row g-4">
              <div className="col-md-3 text-center">
                <img
                  src={softwareImg}
                  alt="Desenvolupament de software empresarial"
                  style={{ width: "60px" }}
                  className="mb-3"
                />
                <h5>Desenvolupament de software empresarial</h5>
                <p>
                  Creació de programes propis, solucions SaaS i integracions amb
                  serveis externs.
                </p>
              </div>
              <div className="col-md-3 text-center">
                <img
                  src={consultoriesImg}
                  alt="Consultoria tecnològica i legal"
                  style={{ width: "60px" }}
                  className="mb-3"
                />
                <h5>Consultoria tecnològica i legal</h5>
                <p>
                  Assessorament en noves normatives i estratègia de
                  digitalització.
                </p>
              </div>
              <div className="col-md-3 text-center">
                <img
                  src={dissenyWebImg}
                  alt="Disseny i manteniment web"
                  style={{ width: "60px" }}
                  className="mb-3"
                />
                <h5>Disseny i manteniment web</h5>
                <p>
                  Creació i gestió de webs corporatives, actualitzacions i
                  seguretat.
                </p>
              </div>
              <div className="col-md-3 text-center">
                <img
                  src={suportImg}
                  alt="Suport continuat"
                  style={{ width: "60px" }}
                  className="mb-3"
                />
                <h5>Suport continuat</h5>
                <p>Atenció propera i evolució constant del software.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Productes propis */}
        <section id="productes" className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">Productes propis</h2>
            <div className="row align-items-center g-4">
              <div className="col-md-6 text-center">
                <img
                  src={AveroLogo}
                  alt="Avero"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-6">
                <h3>Avero – Facturació moderna i segura</h3>
                <p>
                  Un software SaaS que simplifica la facturació d’autònoms i
                  PIMEs, i garanteix el compliment legal amb Veri*Factu.
                </p>
                <p>
                  Funcionalitats: factures, pressupostos, albarans, TPV, enviament
                  automàtic a l’AEAT, gestió de clients i productes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Què aportem */}
        <section id="aportem" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-4">Què aportem als nostres clients</h2>
            <div className="row g-4">
              <div className="col-md-3 text-center">
                <img
                  src={infoIcon}
                  alt="Confiança"
                  style={{ width: "60px" }}
                  className="mb-3"
                />
                <h5>Confiança</h5>
                <p>Treballem perquè compleixin amb la normativa sense maldecaps.</p>
              </div>
              <div className="col-md-3 text-center">
                <h5>Eficiència</h5>
                <p>Estalvi de temps i simplificació de processos.</p>
              </div>
              <div className="col-md-3 text-center">
                <h5>Escalabilitat</h5>
                <p>Solucions pensades per créixer amb el negoci.</p>
              </div>
              <div className="col-md-3 text-center">
                <img
                  src={contactIcon}
                  alt="Aliances estratègiques"
                  style={{ width: "60px" }}
                  className="mb-3"
                />
                <h5>Aliances estratègiques</h5>
                <p>Oferim a les gestories eines que generen nous ingressos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog / Recursos */}
        <section id="blog" className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">Blog / Recursos</h2>
            <ul className="list-unstyled">
              <li>“Com digitalitzar la gestió d’una PIME en 5 passos”</li>
              <li>“Guia pràctica per a gestories sobre Veri*Factu”</li>
              <li>“Per què un SaaS és millor que un software tradicional?”</li>
            </ul>
          </div>
        </section>

        {/* Contacte */}
        <section id="contacte" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-4">Contacte</h2>
            <div className="row g-4">
              <div className="col-md-6">
                <p>Parlem del teu projecte?</p>
                <p>📧 Correu: info@jctagency.com</p>
                <p>📍 Ubicació: [ciutat/província]</p>
                <p>📱 Xarxes socials (LinkedIn, etc.)</p>
              </div>
              <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nom" className="form-label">
                      Nom i cognoms
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nom"
                      name="nom"
                      value={formFields.nom}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="empresa" className="form-label">
                      Empresa
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="empresa"
                      name="empresa"
                      value={formFields.empresa}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formFields.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="missatge" className="form-label">
                      Missatge
                    </label>
                    <textarea
                      className="form-control"
                      id="missatge"
                      name="missatge"
                      rows="3"
                      value={formFields.missatge}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Enviar
                  </button>
                  {isFormSubmitted && (
                    <p className="mt-3">¡Missatge enviat!</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;

