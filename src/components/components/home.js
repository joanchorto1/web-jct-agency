import React, { useState } from 'react';
import Layout from "../layouts/layout";
import LogoJCT from "../img/LOGO(Fondo Transparent).png";
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
      <div className="d-flex flex-column text-dark bg-dark">
        {/* Banner */}
        <section className="container">
          <div>
            <nav className="pt-3 navbar navbar-expand-lg navbar-dark">
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
              En JCT Agency ayudamos a digitalizar y optimizar procesos mediante soluciones de software hechas a
              medida. Nuestro equipo trabaja con las últimas tecnologías para ofrecer productos de calidad.
            </p>
          </div>
        </section>

        {/* Servicios */}
        <section className="bg-dark-subtle">
          <div className="container p-5">
            <h2 className="text-center text-black mb-4">Servicios</h2>
            <div className="mb-4">
              <div className="card border-5 border-dark h-100">
                <h5 className="card-title p-3">Desarrollo Web</h5>
                <ul>
                  <li>Creación y mantenimiento de sitios web.</li>
                  <li>Portales empresariales y apps progresivas.</li>
                </ul>
              </div>
            </div>
            <div className="mb-4">
              <div className="card border-5 border-dark h-100">
                <h5 className="card-title p-3">Aplicaciones Móviles</h5>
                <ul>
                  <li>Apps nativas y multiplataforma.</li>
                  <li>Publicación en tiendas oficiales.</li>
                </ul>
              </div>
            </div>
            <div className="mb-4">
              <div className="card border-5 border-dark h-100">
                <h5 className="card-title p-3">Software a Medida</h5>
                <ul>
                  <li>ERP y sistemas de gestión personalizados.</li>
                  <li>Integración con APIs y servicios externos.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Línea Avero */}
        <section className="container p-5">
          <h2 className="text-center mb-4">Línea AVERO</h2>
          <p>
            Soluciones de facturación con <strong>Verifactu</strong> integradas en tu negocio. Próximamente añadiremos
            módulo de contabilidad.
          </p>
          <div className="text-center">
            <button className="btn btn-dark" onClick={() => setShowAvero(!showAvero)}>
              {showAvero ? 'Ocultar detalles' : 'Ver detalles'}
            </button>
          </div>
          {showAvero && (
            <div className="mt-3">
              <p>• Generación y envío automático de facturas Verifactu.</p>
              <p>• Historial seguro y accesible de todas tus facturas.</p>
            </div>
          )}
        </section>

        {/* Contacto */}
        <section className="bg-dark-subtle pt-5 pb-5">
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
                      <button type="submit" className="btn btn-dark text-white">
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
