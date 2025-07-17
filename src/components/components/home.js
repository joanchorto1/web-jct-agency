import React, { useState } from 'react';
import Layout from "../layouts/layout";
import WebPhoto from "../img/WebPho.jpeg";
import AveroImage from "../img/bossacompra.png";
import fondoHome from "../img/fondoHome.jpg";
import portatilIcon from "../img/portatilIcon.png";
import movilIcon from "../img/movilIcon.jpeg";
import lapizIcon from "../img/lapizIcon.jpeg";
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
      <div className="d-flex flex-column">
        {/* Hero */}
        <section
          className="hero d-flex align-items-center text-white text-center"
          style={{
            backgroundImage: `url(${fondoHome})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '70vh'
          }}
        >
          <div className="container">
            <h1 className="display-4 fw-bold">JCT Agency</h1>
            <p className="lead">Software empresarial i solucions digitals a mida</p>
            <a href="/contacto" className="btn btn-light mt-3">Contacta'ns</a>
          </div>
        </section>

        {/* Sobre nosotros */}
        <section className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <h2 className="mb-4">Sobre nosaltres</h2>
              <p>
                A JCT Agency impulsem la digitalització del teu negoci mitjançant eines de software a mida.
                Treballem colze a colze amb tu per aconseguir resultats d'alta qualitat i processos més eficients.
              </p>
              <p>Som especialistes en desenvolupament web, aplicacions i integració de sistemes empresarials.</p>
            </div>
            <div className="col-md-6 text-center">
              <img className="img-fluid rounded" src={WebPhoto} alt="Projectes en desenvolupament" />
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="bg-light py-5">
          <div className="container">
            <h2 className="text-center mb-4">Serveis</h2>
            <div className="row g-4 text-center">
              <div className="col-md-4">
                <img src={portatilIcon} alt="Desenvolupament web" style={{ width: '60px' }} className="mb-3" />
                <h5>Desenvolupament Web</h5>
                <p>Creació i manteniment de portals moderns i apps progressives.</p>
              </div>
              <div className="col-md-4">
                <img src={movilIcon} alt="Aplicacions mòbils" style={{ width: '60px' }} className="mb-3" />
                <h5>Aplicacions Mòbils</h5>
                <p>Disseny d'apps nadiues i multiplataforma per a les botigues oficials.</p>
              </div>
              <div className="col-md-4">
                <img src={lapizIcon} alt="Programari a mida" style={{ width: '60px' }} className="mb-3" />
                <h5>Programari a Mida</h5>
                <p>Sistemes de gestió integrats i personalitzats amb APIs externes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Línea Avero */}
        <section className="container py-5 bg-avero text-center">
          <h2 className="mb-4">Línia AVERO</h2>
          <p>
            Solucions de facturació amb <strong>Verifactu</strong> integrades directament al teu negoci.
            Properament incorporarem el mòdul de comptabilitat.
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
