import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

import Layout from '../layouts/layout';
import { DEFAULT_LANGUAGE } from '../../i18n';

const Pressupost = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang ?? DEFAULT_LANGUAGE;

  const [service, setService] = useState('');
  const initialForm = {
    nombre: '',
    empresa: '',
    email: '',
    pages: '1-5',
    ecommerce: false,
    modules: '1-2',
    cloud: false,
    platforms: 'one',
    auth: false,
  };
  const [formData, setFormData] = useState(initialForm);
  const [price, setPrice] = useState(null);
  const [sent, setSent] = useState(false);

  const buildPath = (path = '') => `/${currentLang}${path ? `/${path}` : ''}`;

  const handleServiceChange = (e) => {
    setService(e.target.value);
    setPrice(null);
    setSent(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const calculatePrice = () => {
    let total = 0;
    if (service === 'web') {
      total = 1300;
      if (formData.pages === '6-10') total += 1000;
      if (formData.pages === '11+') total += 2000;
      if (formData.ecommerce) total += 1500;
    } else if (service === 'software') {
      total = 4500;
      if (formData.modules === '3-5') total += 3000;
      if (formData.modules === '6+') total += 6000;
      if (formData.cloud) total += 2500;
    } else if (service === 'app') {
      total = 7500;
      if (formData.platforms === 'both') total += 3500;
      if (formData.auth) total += 1500;
    }
    return total;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const estimated = calculatePrice();
    setPrice(estimated);
    const { nombre, empresa, email, ...rest } = formData;
    const serviceLabel = service ? t(`pressupost.form.projectType.values.${service}`) : '';
    const mensaje = t('pressupost.emailMessage', {
      service: serviceLabel,
      details: JSON.stringify(rest),
      price: estimated,
    });

    emailjs
      .send(
        'service_uaggcy8',
        'template_yav8r89',
        {
          nombre,
          empresa,
          email,
          mensaje,
        },
        'PrtHsOGCYBrChfJU3'
      )
      .then(() => {
        setSent(true);
        setFormData(initialForm);
      })
      .catch(() => setSent(false));
  };

  return (
    <Layout>
      <Helmet>
        <title>{t('pressupost.meta.title')}</title>
        <meta name="description" content={t('pressupost.meta.description')} />
      </Helmet>
      <div className="container py-5">
        <h1 className="mb-4 text-center">{t('pressupost.title')}</h1>
        <div className="mb-4">
          <label className="form-label">{t('pressupost.form.projectType.label')}</label>
          <select className="form-select" value={service} onChange={handleServiceChange} required>
            <option value="">{t('pressupost.form.projectType.placeholder')}</option>
            <option value="web">{t('pressupost.form.projectType.options.web')}</option>
            <option value="software">{t('pressupost.form.projectType.options.software')}</option>
            <option value="app">{t('pressupost.form.projectType.options.app')}</option>
          </select>
        </div>

        {service && (
          <form onSubmit={handleSubmit}>
            {service === 'web' && (
              <>
                <div className="mb-3">
                  <label className="form-label">{t('pressupost.form.web.pagesLabel')}</label>
                  <select name="pages" className="form-select" value={formData.pages} onChange={handleChange}>
                    <option value="1-5">{t('pressupost.form.web.pages.options.basic')}</option>
                    <option value="6-10">{t('pressupost.form.web.pages.options.medium')}</option>
                    <option value="11+">{t('pressupost.form.web.pages.options.advanced')}</option>
                  </select>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="ecommerce" name="ecommerce" checked={formData.ecommerce} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="ecommerce">{t('pressupost.form.web.ecommerce')}</label>
                </div>
              </>
            )}

            {service === 'software' && (
              <>
                <div className="mb-3">
                  <label className="form-label">{t('pressupost.form.software.modulesLabel')}</label>
                  <select name="modules" className="form-select" value={formData.modules} onChange={handleChange}>
                    <option value="1-2">{t('pressupost.form.software.modules.options.basic')}</option>
                    <option value="3-5">{t('pressupost.form.software.modules.options.medium')}</option>
                    <option value="6+">{t('pressupost.form.software.modules.options.advanced')}</option>
                  </select>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="cloud" name="cloud" checked={formData.cloud} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="cloud">{t('pressupost.form.software.cloud')}</label>
                </div>
              </>
            )}

            {service === 'app' && (
              <>
                <div className="mb-3">
                  <label className="form-label">{t('pressupost.form.app.platformsLabel')}</label>
                  <select name="platforms" className="form-select" value={formData.platforms} onChange={handleChange}>
                    <option value="one">{t('pressupost.form.app.platforms.options.single')}</option>
                    <option value="both">{t('pressupost.form.app.platforms.options.multiple')}</option>
                  </select>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="auth" name="auth" checked={formData.auth} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="auth">{t('pressupost.form.app.auth')}</label>
                </div>
              </>
            )}

            <div className="mb-3">
              <label className="form-label">{t('pressupost.form.name')}</label>
              <input type="text" name="nombre" className="form-control" value={formData.nombre} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">{t('pressupost.form.company')}</label>
              <input type="text" name="empresa" className="form-control" value={formData.empresa} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">{t('pressupost.form.email')}</label>
              <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary">{t('pressupost.form.submit')}</button>
            {sent && <p className="mt-3">{t('pressupost.form.success')}</p>}
          </form>
        )}

        {price !== null && (
          <div className="mt-4 text-center">
            <div className="alert alert-info" role="alert">
              {t('pressupost.result.estimated', { price })}
            </div>
            <p>{t('pressupost.result.nextStep')}</p>
            <Link to={buildPath('contacto')} className="btn btn-success">
              {t('pressupost.result.contactCta')}
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Pressupost;
