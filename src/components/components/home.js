import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";
import { Link, useParams } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';

import Layout from "../layouts/layout";
import { DEFAULT_LANGUAGE } from '../../i18n';

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
import CTAIMAGE from "../img/CTA_HOME.png";

import AjuntamentAldeaLogo from "../img/AJUNTAMENT.jpeg";
import EGEALogo from "../img/EGEA.png";
import GERCOLogo from "../img/gerco-serveis-integrals.png";

const Home = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang ?? DEFAULT_LANGUAGE;

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

  const buildPath = (path = "") => `/${currentLang}${path ? `/${path}` : ""}`;

  const clientSegments = [
    {
      icon: autonomIcon,
      altKey: 'home.clients.items.autonomous.alt',
      titleKey: 'home.clients.items.autonomous.title',
      descriptionKey: 'home.clients.items.autonomous.description',
    },
    {
      icon: pimesIcon,
      altKey: 'home.clients.items.smes.alt',
      titleKey: 'home.clients.items.smes.title',
      descriptionKey: 'home.clients.items.smes.description',
    },
    {
      icon: gestoriesIcon,
      altKey: 'home.clients.items.accountants.alt',
      titleKey: 'home.clients.items.accountants.title',
      descriptionKey: 'home.clients.items.accountants.description',
    },
  ];

  const services = [
    {
      icon: softwareImg,
      altKey: 'home.services.items.software.alt',
      titleKey: 'home.services.items.software.title',
      descriptionKey: 'home.services.items.software.description',
    },
    {
      icon: consultoriesImg,
      altKey: 'home.services.items.consulting.alt',
      titleKey: 'home.services.items.consulting.title',
      descriptionKey: 'home.services.items.consulting.description',
    },
    {
      icon: dissenyWebImg,
      altKey: 'home.services.items.web.alt',
      titleKey: 'home.services.items.web.title',
      descriptionKey: 'home.services.items.web.description',
    },
    {
      icon: suportImg,
      altKey: 'home.services.items.support.alt',
      titleKey: 'home.services.items.support.title',
      descriptionKey: 'home.services.items.support.description',
    },
  ];

  const benefits = [
    {
      icon: confiancaImg,
      altKey: 'home.benefits.items.trust.alt',
      titleKey: 'home.benefits.items.trust.title',
      descriptionKey: 'home.benefits.items.trust.description',
    },
    {
      icon: eficienciaImg,
      altKey: 'home.benefits.items.efficiency.alt',
      titleKey: 'home.benefits.items.efficiency.title',
      descriptionKey: 'home.benefits.items.efficiency.description',
    },
    {
      icon: escalabilitatImg,
      altKey: 'home.benefits.items.scalability.alt',
      titleKey: 'home.benefits.items.scalability.title',
      descriptionKey: 'home.benefits.items.scalability.description',
    },
    {
      icon: aliancesImg,
      altKey: 'home.benefits.items.partnerships.alt',
      titleKey: 'home.benefits.items.partnerships.title',
      descriptionKey: 'home.benefits.items.partnerships.description',
    },
  ];

  const values = [
    { key: 'innovation' },
    { key: 'simplicity' },
    { key: 'compliance' },
    { key: 'support' },
  ];

  const blogLinks = [
    { path: 'blog/digitalitzar-pime', key: 'home.blog.links.digitalisation' },
    { path: 'blog/verifactu-gestories', key: 'home.blog.links.verifactu' },
    { path: 'blog/saas-vs-tradicional', key: 'home.blog.links.saas' },
  ];

  const contactDetails = [
    { icon: '📧', key: 'home.contact.details.email' },
    { icon: '📍', key: 'home.contact.details.location' },
    { icon: '📱', key: 'home.contact.details.phone' },
  ];

  return (
    <Layout>
      <Helmet>
        <title>{t('home.meta.title')}</title>
        <meta name="description" content={t('home.meta.description')} />
      </Helmet>

      <div className="bg-white text-dark home-view">
        <section className="py-5 bg-white" data-aos="fade-up">
          <div className="container">
            <div className="row align-items-center g-4 flex-column flex-md-row">
              <div className="col-md-6">
                <h1>{t('home.hero.title')}</h1>
                <p>
                  <Trans i18nKey="home.hero.description" components={{ strong: <strong /> }} />
                </p>
                <div className="d-flex gap-3 mt-3">
                  <a href="#serveis" className="btn btn-primary">
                    {t('home.hero.ctaServices')}
                  </a>
                  <a href="#contacte" className="btn btn-outline-primary">
                    {t('home.hero.ctaContact')}
                  </a>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src={heroImg}
                  alt={t('home.hero.imageAlt')}
                  className="img-fluid"
                  style={{ maxWidth: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="py-5 bg-light" data-aos="fade-up">
          <div className="container">
            <h2 className="text-center mb-4">{t('home.clients.title')}</h2>
            <p className="text-center">
              <Trans i18nKey="home.clients.description" components={{ strong: <strong /> }} />
            </p>
            <div className="row mt-4">
              {clientSegments.map(({ icon, altKey, titleKey, descriptionKey }) => (
                <div className="col-md-4 text-center mb-4" key={titleKey}>
                  <img src={icon} alt={t(altKey)} style={{ width: "60px" }} className="mb-3" />
                  <h5>{t(titleKey)}</h5>
                  <p><Trans i18nKey={descriptionKey} components={{ strong: <strong /> }} /></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="serveis" className="py-5 bg-white" data-aos="fade-up">
          <div className="container">
            <h2 className="text-center mb-4">{t('home.services.title')}</h2>
            <p className="text-center mb-5">{t('home.services.description')}</p>
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {services.map(({ icon, altKey, titleKey, descriptionKey }) => (
                <div className="col text-center" key={titleKey}>
                  <img
                    src={icon}
                    alt={t(altKey)}
                    style={{ width: "60px" }}
                    className="mb-3"
                  />
                  <h3>{t(titleKey)}</h3>
                  <p>
                    <Trans i18nKey={descriptionKey} components={{ strong: <strong /> }} />
                  </p>
                  <a href="#contacte" className="btn btn-link">
                    {t('home.services.learnMore')}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="avero" className="py-5 bg-light" data-aos="fade-up">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-md-6">
                <h2>{t('home.avero.title')}</h2>
                <p>
                  <Trans i18nKey="home.avero.description" components={{ strong: <strong /> }} />
                </p>
                <ul>
                  {['pointOne', 'pointTwo', 'pointThree', 'pointFour'].map((itemKey) => (
                    <li key={itemKey}>{t(`home.avero.list.${itemKey}`)}</li>
                  ))}
                </ul>
                <div className="d-flex gap-3 mt-3">
                  <Link to={buildPath('avero')} className="btn btn-primary">
                    {t('home.avero.primaryCta')}
                  </Link>
                  <a href="https://avero.jctagency.com" className="btn btn-outline-primary">
                    {t('home.avero.secondaryCta')}
                  </a>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <img src={AveroLogo} alt={t('home.avero.imageAlt')} className="img-fluid" style={{ maxWidth: "300px" }} />
              </div>
            </div>
          </div>
        </section>

        <section id="cta-programari" className="py-5 text-center bg-white" data-aos="fade-up">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-md-6">
                <h2 className="mb-3">{t('home.customCta.title')}</h2>
                <p>{t('home.customCta.description')}</p>
                <a href="#contacte" className="btn btn-primary mt-3">{t('home.customCta.button')}</a>
              </div>
              <div className="col-md-6 text-center">
                <img
                  src={CTAIMAGE}
                  alt={t('home.customCta.imageAlt')}
                  className="img-fluid"
                  style={{ maxWidth: "300px" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="beneficis" className="py-5 bg-light" data-aos="fade-up">
          <div className="container">
            <h2 className="text-center mb-4">{t('home.benefits.title')}</h2>
            <div className="row row-cols-2 row-cols-md-4 g-4">
              {benefits.map(({ icon, altKey, titleKey, descriptionKey }) => (
                <div className="col text-center" key={titleKey}>
                  <img src={icon} alt={t(altKey)} style={{ width: "60px" }} className="mb-3" />
                  <h3>{t(titleKey)}</h3>
                  <p>
                    <Trans i18nKey={descriptionKey} components={{ strong: <strong /> }} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="clients-validen" className="py-5 bg-white" data-aos="fade-up">
          <div className="container">
            <h2 className="text-center mb-4">{t('home.testimonials.title')}</h2>
            <div className="row text-center align-items-center g-4">
              <div className="col-md-4">
                <div className="mb-3" style={{ height: "80px" }}>
                  <img
                    src={AjuntamentAldeaLogo}
                    alt={t('home.testimonials.items.ajuntament.alt')}
                    className="img-fluid h-100"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p>{t('home.testimonials.items.ajuntament.name')}</p>
              </div>
              <div className="col-md-4">
                <div className="mb-3" style={{ height: "80px" }}>
                  <img
                    src={EGEALogo}
                    alt={t('home.testimonials.items.egea.alt')}
                    className="img-fluid h-100"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p>{t('home.testimonials.items.egea.name')}</p>
              </div>
              <div className="col-md-4">
                <div className="mb-3" style={{ height: "80px" }}>
                  <img
                    src={GERCOLogo}
                    alt={t('home.testimonials.items.gerco.alt')}
                    className="img-fluid h-100"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p>{t('home.testimonials.items.gerco.name')}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="valors" className="py-5 bg-light" data-aos="fade-up">
          <div className="container">
            <h2 className="text-center mb-4">{t('home.values.title')}</h2>
            <p className="text-center">
              <Trans i18nKey="home.values.description" components={{ strong: <strong /> }} />
            </p>
            <ul className="list-unstyled row g-4 mt-4">
              {values.map(({ key }) => (
                <li className="col-md-3 d-flex align-items-start" key={key}>
                  <span className="text-primary me-2">•</span>
                  <span>
                    <Trans i18nKey={`home.values.items.${key}`} components={{ strong: <strong /> }} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="blog" className="py-5 bg-white" data-aos="fade-up">
          <div className="container">
            <h2 className="text-center mb-4">{t('home.blog.title')}</h2>
            <ul className="list-unstyled">
              {blogLinks.map(({ path, key }) => (
                <li key={key}>
                  <Link to={buildPath(path)}>{t(key)}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="pressupost" className="py-5 bg-light" data-aos="fade-up">
          <div className="container text-center">
            <h2 className="mb-4">{t('home.quoteSection.title')}</h2>
            <p>{t('home.quoteSection.description')}</p>
            <Link to={buildPath('pressupost')} className="btn btn-outline-primary">
              {t('home.quoteSection.button')}
            </Link>
          </div>
        </section>

        <section id="contacte" className="py-5 bg-white" data-aos="fade-up">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-6">
                <h2>{t('home.contact.title')}</h2>
                <p>{t('home.contact.description')}</p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="nombre"
                    placeholder={t('home.contact.form.name')}
                    className="form-control mb-3"
                    value={formFields.nombre}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="empresa"
                    placeholder={t('home.contact.form.company')}
                    className="form-control mb-3"
                    value={formFields.empresa}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={t('home.contact.form.email')}
                    className="form-control mb-3"
                    value={formFields.email}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    name="mensaje"
                    placeholder={t('home.contact.form.message')}
                    className="form-control mb-3"
                    rows="4"
                    value={formFields.mensaje}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <button type="submit" className="btn btn-primary">
                    {t('home.contact.form.submit')}
                  </button>
                  {isFormSubmitted && <p className="mt-3">{t('home.contact.form.success')}</p>}
                </form>
              </div>
              <div className="col-md-6">
                {contactDetails.map(({ icon, key }) => (
                  <p key={key}>
                    <strong>{icon}</strong> {t(key)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
