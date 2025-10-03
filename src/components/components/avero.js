import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';

import Layout from '../layouts/layout';
import AveroLogo from '../img/AVERO LOGO.png';
import facturacioImg from '../img/Facturacio_Avero.png';
import utilitatsImg from '../img/Funcionalitats_Premium.png';
import aeatImg from '../img/AEAT_Funcions.png';
import man from '../img/Man.png';
import woman from '../img/Woman.png';
import { DEFAULT_LANGUAGE } from '../../i18n';

const Avero = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang ?? DEFAULT_LANGUAGE;

  const buildPath = (path = '') => `/${currentLang}${path ? `/${path}` : ''}`;

  const featureBlocks = [
    { key: 'billing', icon: facturacioImg },
    { key: 'utilities', icon: utilitatsImg },
    { key: 'aeat', icon: aeatImg },
  ];

  const testimonials = [
    { key: 'man', image: man },
    { key: 'woman', image: woman },
  ];

  const footerLinks = [
    { key: 'verifactu', path: 'programa-de-facturacio-verifactu' },
    { key: 'aeat', path: 'factures-electroniques-aeat' },
    { key: 'software', path: 'software-facturacio-autonoms-gestories' },
  ];

  return (
    <Layout>
      <Helmet>
        <title>{t('avero.meta.title')}</title>
        <meta
          name="description"
          content={t('avero.meta.description')}
        />
      </Helmet>
      <div className="bg-white text-dark">
        <section className="py-5 bg-light text-center text-md-start" data-aos="fade-up">
          <div className="container">
            <div className="row align-items-center g-4 flex-column flex-md-row">
              <div className="col-md-6">
                <h1>{t('avero.hero.title')}</h1>
                <p>{t('avero.hero.description')}</p>
                <div className="d-flex gap-3 mt-3 flex-column flex-sm-row">
                  <a href="https://avero.jctagency.com" className="btn btn-avero">
                    {t('avero.hero.primaryCta')}
                  </a>
                  <Link to={buildPath('contacto')} className="btn btn-outline-avero">
                    {t('avero.hero.secondaryCta')}
                  </Link>
                </div>
              </div>
              <div className="col-md-6 text-center position-relative">
                <img src={AveroLogo} alt={t('avero.hero.imageAlt')} className="img-fluid" style={{ maxWidth: '400px' }} />
                <span className="badge bg-avero position-absolute top-0 start-50 translate-middle-x mt-2">
                  {t('avero.hero.badge')}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5" data-aos="fade-up">
          <div className="container">
            <h2>{t('avero.why.title')}</h2>
            <p><Trans i18nKey="avero.why.description" components={{ strong: <strong /> }} /></p>
            <p className="text-muted">{t('avero.why.keywords')}</p>
          </div>
        </section>

        <section className="py-5 bg-light" data-aos="fade-up">
          <div className="container">
            <h2 className="mb-4">{t('avero.features.title')}</h2>
            <div className="row">
              {featureBlocks.map(({ key, icon }) => (
                <div className="col-md-4 mb-4" key={key}>
                  <div className="p-4 border-top border-4 border-avero text-center">
                    <img src={icon} alt={t(`avero.features.blocks.${key}.alt`)} style={{ width: '60px' }} className="mb-3" />
                    <h3>{t(`avero.features.blocks.${key}.title`)}</h3>
                    <ul className="feature-list mb-0 mt-3 text-start">
                      {t(`avero.features.blocks.${key}.items`, { returnObjects: true }).map((item, index) => (
                        <li className="mb-2" key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5" data-aos="fade-up">
          <div className="container">
            <h2>{t('avero.compliance.title')}</h2>
            <ul className="list-unstyled">
              {t('avero.compliance.items', { returnObjects: true }).map((item, index) => (
                <li className="mb-2" key={index}>{item}</li>
              ))}
            </ul>
            <p className="text-muted">{t('avero.compliance.note')}</p>
          </div>
        </section>

        <section className="py-5 bg-light" data-aos="fade-up">
          <div className="container">
            <h2>{t('avero.target.title')}</h2>
            <p><Trans i18nKey="avero.target.description" components={{ strong: <strong /> }} /></p>
            <ul>
              {t('avero.target.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-5" data-aos="fade-up">
          <div className="container">
            <h2>{t('avero.cta.title')}</h2>
            <p>{t('avero.cta.description')}</p>
            <div className="d-flex gap-3 flex-column flex-sm-row mt-3">
              <a href="https://avero.jctagency.com" className="btn btn-avero">
                {t('avero.cta.primaryCta')}
              </a>
              <Link to={buildPath('contacto')} className="btn btn-outline-avero">
                {t('avero.cta.secondaryCta')}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-5 bg-white" data-aos="fade-up">
          <div className="container">
            <h2 className="text-center mb-4">{t('avero.testimonials.title')}</h2>
            <div className="row g-4 justify-content-center">
              {testimonials.map(({ key, image }) => (
                <div className="col-md-6 col-lg-5" key={key}>
                  <div className="p-4 bg-light h-100 text-center rounded">
                    <img
                      src={image}
                      alt={t(`avero.testimonials.${key}.alt`)}
                      className="img-fluid rounded-circle mb-3"
                      style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                    />
                    <blockquote className="blockquote mb-0">
                      {t(`avero.testimonials.${key}.quote`)}
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5 bg-light" data-aos="fade-up">
          <div className="container text-center text-md-start">
            <h2>{t('avero.gallery.title')}</h2>
            <p>{t('avero.gallery.description')}</p>
          </div>
        </section>

        <section className="py-5" data-aos="fade-up">
          <div className="container text-center text-md-start">
            <h2>{t('avero.video.title')}</h2>
            <p>{t('avero.video.description')}</p>
          </div>
        </section>

        <section className="py-5 text-center" style={{ backgroundColor: '#ff8c00' }} data-aos="fade-up">
          <div className="container">
            <h2>{t('avero.finalCta.title')}</h2>
            <div className="d-flex gap-3 justify-content-center flex-column flex-sm-row mt-3">
              <a href="https://avero.jctagency.com" className="btn btn-dark">{t('avero.finalCta.primaryCta')}</a>
              <Link to={buildPath('contacto')} className="btn btn-outline-dark text-dark">
                {t('avero.finalCta.secondaryCta')}
              </Link>
            </div>
          </div>
        </section>

        <footer className="footer-sub py-4">
          <div className="container text-center text-md-start">
            <p className="mb-2"><a href="https://avero.jctagency.com">avero.jctagency.com</a></p>
            <ul className="list-unstyled mb-0">
              {footerLinks.map(({ key, path }) => (
                <li key={key}>
                  <Link to={buildPath(path)}>{t(`avero.footer.links.${key}`)}</Link>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Avero;
