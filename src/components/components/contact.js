import Layout from "../layouts/layout";
import emailjs from 'emailjs-com';
import React, {useState} from "react";
import {Helmet} from "react-helmet";


const Contact = () => {

    const [isFormSubmitted, setFormSubmitted] = useState(false);
    const [formFields, setFormFields] = useState({
        nombre: '',
        empresa: '',
        email: '',
        mensaje: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Configurar el servicio Email.js
        emailjs.sendForm('service_uaggcy8', 'template_yav8r89', e.target, 'PrtHsOGCYBrChfJU3')
            .then((result) => {
                console.log(result.text);
                setFormSubmitted(true);
                // Vaciar los campos del formulario después del envío exitoso
                setFormFields({
                    nombre: '',
                    empresa: '',
                    email: '',
                    mensaje: '',
                });
            })
            .catch((error) => {
                console.log(error.text);
                setFormSubmitted(false);
            });
    };

    const handleChange = (e) => {
        // Actualizar el estado de los campos del formulario mientras el usuario escribe
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Layout>
            <Helmet>
                <title>JCT Agency - Contacto</title>
                <link rel="canonical" href="https://jctagency.com/contacto"/>
                <meta name="description" content="Estamos disponibles para resolver tus dudas y ofrecerte la mejor solución."/>
            </Helmet>

            <div>
                <div className={"bg-dark p-3"}>
                    <nav className="pt-3 navbar navbar-expand-lg navbar-dark">
                        <ul className="navbar-nav d-flex" style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                            <li className="nav-item">
                                <strong>
                                    <a className="nav-link text-white" href="/" style={{ fontSize: '1.2rem', marginRight: '15px' }}>Home</a>
                                </strong>
                            </li>
                            <li className="nav-item">
                                <strong>
                                    <a className="nav-link text-white" href="/contacto" style={{ fontSize: '1.2rem' }}>Contacto</a>
                                </strong>
                            </li>
                        </ul>
                    </nav>
                </div>

                <section className={"container pt-5"}>
                    <h1 className="text-center mb-4">Contacto</h1>
                    <p className="text-center text-muted">
                        Estamos aquí para responder a tus preguntas y ayudarte en tu proyecto. Puedes contactar con nosotros mediante:
                    </p>
                    <div>
                        <h2 className="mb-3">Información de contacto</h2>
                        <p>
                            <strong>Direction:</strong> Online
                        </p>
                        <p>
                            <strong>Email:</strong> joan@jctagency.com
                        </p>
                        <p>
                            <strong>Phone:</strong> +34 633391411
                        </p>
                    </div>
                    <div className="mt-4 pb-5">
                        <h2 className="mb-3">Formulario de contacto</h2>
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
                                <label htmlFor="empresa" className="form-label">
                                    Empresa:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="empresa"
                                    name="empresa"
                                    value={formFields.empresa}
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
                            <div className="mb-3">
                                <label htmlFor="mensaje" className="form-label">
                                    Mensaje:
                                </label>
                                <textarea
                                    className="form-control"
                                    id="mensaje"
                                    name="mensaje"
                                    rows="4"
                                    value={formFields.mensaje}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-dark text-white">
                                Enviar
                            </button>
                            {isFormSubmitted && (
                                <p className="text-dark mt-3">¡Enviado!</p>
                            )}
                        </form>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Contact;
