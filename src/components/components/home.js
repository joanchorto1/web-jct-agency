import React, { useState } from 'react';
import Layout from "../layouts/layout";
import LogoJCT from "../img/LOGO(Fondo Transparent).png";
import WebPhoto from "../img/WebPho.jpeg";
import AveroImage from "../img/bossacompra.png";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";

const Home = () => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [formFields, setFormFields] = useState({ nombre: '', email: '' });
  const [showAvero, setShowAvero] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_uaggcy8', 'template_f7zqqc9', e.target, 'PrtHsOGCYBrChfJU3')
      .then(() => {
        setFormSubmitted(true);
        setFormFields({ nombre: '', email: '' });
      })
      .catch(() => setFormSubmitted(false));
  };

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <Helmet>
        <title>JCT Agency | Software Empresarial a Medida</title>
        <meta
          name="description"
          content="JCT Agency desarrolla soluciones de software empresarial y servicios a medida."
        />
      </Helmet>
      <div className="d-flex flex-column bg-jct-blue">
        {/* Banner */}
        <section className="container">
          <div>
            <nav className="pt-3 navbar navbar-expand-lg navbar-dark bg-jct-blue">
              <ul className="navbar-nav d-flex" style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                <li className="nav-item">
                  <strong>
                    <a className="nav-link text-white" href="/" style={{ fontSize: '1.2rem', marginRight: '15px' }}>
                      Home
                    </a>
                  </strong>
                </li>
                <li className="nav-item">
                  <strong>
                    <a className="nav-link text-white" href="/contacto" style={{ fontSize: '1.2rem' }}>
                      Contacto
                    </a>
                  </strong>
                </li>
              </ul>
            </nav>
          </div>

          <div className="d-flex align-items-center text-white justify-content-between" style={{ height: '40vh' }}>
            <div>
              <img style={{ maxWidth: '50%', height: 'auto' }} src={LogoJCT} alt="Logo JCT Agency" />
            </div>
            <div>
              <h1 className="pb-3">JCT Agency</h1>
              <h2 className="text-white">Software empresarial y desarrollo a medida</h2>
            </div>
          </div>
        </section>

        {/* Sobre nosotros */}
        <section className="container-fluid bg-white p-5 text-black">
          <div className="container">
            <h2 className="mb-4">Sobre Nosotros</h2>
            <p>
              En JCT Agency ajudem a digitalitzar i optimitzar processos amb eines de software adaptades al teu negoci.
              Apostem per la innovació constant i el treball proper amb els nostres clients per aconseguir resultats de qualitat.
              Desenvolupem projectes a mida, des de webs corporatives fins a solucions d'automatització interna.
            </p>
            <img className="img-fluid rounded my-3" src={WebPhoto} alt="Projectes en desenvolupament" />
          </div>
        </section>

        {/* Servicios */}
        <section className="bg-light">
          <div className="container p-5">
            <h2 className="text-center text-dark mb-4">Serveis</h2>
            <p>
              Oferim solucions integrals perquè la teva empresa pugui treure el màxim rendiment de la tecnologia. Ens especialitzem en:
            </p>
            <ul>
              <li><strong>Desenvolupament Web</strong>: creació i manteniment de portals moderns i aplicacions progressives.</li>
              <li><strong>Aplicacions Mòbils</strong>: dissenyem apps nadiues i multiplataforma preparades per a les botigues oficials.</li>
              <li><strong>Programari a Mida</strong>: ERP i sistemes de gestió personalitzats amb integració d'APIs externes.</li>
            </ul>
            <p className="mt-3">Donem suport complet durant tot el cicle de vida del projecte i t'assessorem per assolir els teus objectius digitals.</p>
          </div>
        </section>

        {/* Línea Avero */}
        <section className="container p-5 bg-avero">
          <h2 className="text-center mb-4">Línia AVERO</h2>
          <p>
            Solucions de facturació amb <strong>Verifactu</strong> integrades directament al teu negoci. Pròximament
            incorporarem el mòdul de comptabilitat.
          </p>
          <img className="img-fluid rounded mb-3" src={AveroImage} alt="Facturació Avero" />
          <div className="text-center">
            <button className="btn btn-light" onClick={() => setShowAvero(!showAvero)}>
              {showAvero ? 'Ocultar detalls' : 'Veure detalls'}
            </button>
          </div>
          {showAvero && (
            <div className="mt-3">
              <p>• Generació i enviament automàtic de factures Verifactu.</p>
              <p>• Historial segur i accessible de totes les teves factures.</p>
            </div>
          )}
        </section>

        {/* Contacto */}
        <section className="bg-primary-subtle pt-5 pb-5">
          <div className="container pb-5">
            <h2 className="text-center text-dark-emphasis mb-4">¡Contáctanos!</h2>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Solicita más información</h5>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">
                          Nombre:
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="nombre"
                          name="nombre"
                          value={formFields.nombre}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email:
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
                      <button type="submit" className="btn btn-primary text-white">
                        Enviar
                      </button>
                      {isFormSubmitted && <p className="text-dark mt-3">¡Mensaje enviado!</p>}
                    </form>
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
