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
        emailjs.sendForm('service_0md04a8', 'template_4wu4rsh', e.target, 'igLg_BldBQqE1PovM')
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
                <title>Phoenix Group Tarragona - Contact our Digital Marketing Agency.</title>
                <link rel="canonical" href="https://phoenixgrp.es/contacto"/>
                <meta name={"description"} content={"We are here to answer your questions and discuss how we can help you achieve your goals. You can contact us through the following methods (Email/Phone/Contact Form)"}/>
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
                                    <a className="nav-link text-white" href="/contacto" style={{ fontSize: '1.2rem' }}>Contact</a>
                                </strong>
                            </li>
                        </ul>
                    </nav>
                </div>

                <section className={"container pt-5"}>
                    <h1 className="text-center mb-4">Contact Me</h1>
                    <p className="text-center text-muted">
                        We are here to answer your questions and discuss how we can help you achieve your goals. You can contact us through the following methods:
                    </p>
                    <div>
                        <h2 className="mb-3">Contact Information</h2>
                        <p>
                            <strong>Direction:</strong> Online
                        </p>
                        <p>
                            <strong>Email:</strong> info@jctagency.com
                        </p>
                        <p>
                            <strong>Phone:</strong> +34 633391411
                        </p>
                    </div>
                    <div className="mt-4 pb-5">
                        <h2 className="mb-3">Contact Form</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">
                                    Name:
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
                                    Company:
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
                                    Message:
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
                                Send Message
                            </button>
                            {isFormSubmitted && (
                                <p className="text-dark mt-3">Done!</p>
                            )}
                        </form>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Contact;
