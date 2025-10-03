import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { Helmet } from "react-helmet";
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Layout from "../layouts/layout";
import { DEFAULT_LANGUAGE } from '../../i18n';

const Contact = () => {
    const { t } = useTranslation();
    const { lang } = useParams();
    const currentLang = lang ?? DEFAULT_LANGUAGE;

    const [isFormSubmitted, setFormSubmitted] = useState(false);
    const [formFields, setFormFields] = useState({
        nombre: '',
        empresa: '',
        email: '',
        mensaje: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_uaggcy8', 'template_88m2twe', e.target, 'PrtHsOGCYBrChfJU3')
            .then(() => {
                setFormSubmitted(true);
                setFormFields({
                    nombre: '',
                    empresa: '',
                    email: '',
                    mensaje: '',
                });
            })
            .catch(() => {
                setFormSubmitted(false);
            });
    };

    const handleChange = (e) => {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Layout>
            <Helmet>
                <title>{t('contact.meta.title')}</title>
                <link rel="canonical" href={`https://jctagency.com/${currentLang}/contacto`} />
                <meta
                    name="description"
                    content={t('contact.meta.description')}
                />
            </Helmet>

            <div>
                <section className="container pt-5">
                    <h1 className="text-center mb-4">{t('contact.title')}</h1>
                    <p className="text-center text-muted">
                        {t('contact.intro')}
                    </p>
                    <div>
                        <h2 className="mb-3">{t('contact.info.title')}</h2>
                        <p>
                            <strong>{t('contact.info.addressLabel')}</strong> {t('contact.info.addressValue')}
                        </p>
                        <p>
                            <strong>{t('contact.info.emailLabel')}</strong> {t('contact.info.emailValue')}
                        </p>
                        <p>
                            <strong>{t('contact.info.phoneLabel')}</strong> {t('contact.info.phoneValue')}
                        </p>
                    </div>
                    <div className="mt-4 pb-5">
                        <h2 className="mb-3">{t('contact.form.title')}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">
                                    {t('contact.form.nameLabel')}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    name="nombre"
                                    placeholder={t('contact.form.namePlaceholder')}
                                    value={formFields.nombre}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="empresa" className="form-label">
                                    {t('contact.form.companyLabel')}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="empresa"
                                    name="empresa"
                                    placeholder={t('contact.form.companyPlaceholder')}
                                    value={formFields.empresa}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    {t('contact.form.emailLabel')}
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder={t('contact.form.emailPlaceholder')}
                                    value={formFields.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mensaje" className="form-label">
                                    {t('contact.form.messageLabel')}
                                </label>
                                <textarea
                                    className="form-control"
                                    id="mensaje"
                                    name="mensaje"
                                    rows="4"
                                    placeholder={t('contact.form.messagePlaceholder')}
                                    value={formFields.mensaje}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-dark text-white">
                                {t('contact.form.submit')}
                            </button>
                            {isFormSubmitted && (
                                <p className="text-dark mt-3">{t('contact.form.success')}</p>
                            )}
                        </form>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Contact;
