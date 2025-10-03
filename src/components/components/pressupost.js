import React, { useState } from 'react';
import Layout from '../layouts/layout';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { trackEvent } from '../../utils/analytics';

const Pressupost = () => {
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
    auth: false
  };
  const [formData, setFormData] = useState(initialForm);
  const [price, setPrice] = useState(null);
  const [sent, setSent] = useState(false);

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
    const mensaje = `Servei: ${service}\nDetalls: ${JSON.stringify(rest)}\nPressupost: ${estimated}€`;
    emailjs
      .send('service_uaggcy8', 'template_yav8r89', {
        nombre,
        empresa,
        email,
        mensaje
      }, 'PrtHsOGCYBrChfJU3')
      .then(() => {
        setSent(true);
        setFormData(initialForm);
        trackEvent('Formulari enviat', { origen: 'Pressupost' });
      })
      .catch(() => setSent(false));
  };

  return (
    <Layout>
      <Helmet>
        <title>Calcula el teu pressupost | JCT Agency</title>
        <meta name="description" content="Calcula de manera orientativa el cost del teu projecte digital." />
      </Helmet>
      <div className="container py-5">
        <h1 className="mb-4 text-center">Calculadora de pressupost</h1>
        <div className="mb-4">
          <label className="form-label">Tipus de projecte</label>
          <select className="form-select" value={service} onChange={handleServiceChange} required>
            <option value="">Selecciona una opció</option>
            <option value="web">Pàgina web</option>
            <option value="software">Programa a mida</option>
            <option value="app">App mòbil</option>
          </select>
        </div>

        {service && (
          <form onSubmit={handleSubmit}>
            {service === 'web' && (
              <>
                <div className="mb-3">
                  <label className="form-label">Nombre de pàgines</label>
                  <select name="pages" className="form-select" value={formData.pages} onChange={handleChange}>
                    <option value="1-5">1-5</option>
                    <option value="6-10">6-10</option>
                    <option value="11+">Més de 10</option>
                  </select>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="ecommerce" name="ecommerce" checked={formData.ecommerce} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="ecommerce">Incloure e-commerce</label>
                </div>
              </>
            )}

            {service === 'software' && (
              <>
                <div className="mb-3">
                  <label className="form-label">Nombre de mòduls</label>
                  <select name="modules" className="form-select" value={formData.modules} onChange={handleChange}>
                    <option value="1-2">1-2</option>
                    <option value="3-5">3-5</option>
                    <option value="6+">6 o més</option>
                  </select>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="cloud" name="cloud" checked={formData.cloud} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="cloud">Integració al núvol</label>
                </div>
              </>
            )}

            {service === 'app' && (
              <>
                <div className="mb-3">
                  <label className="form-label">Plataformes</label>
                  <select name="platforms" className="form-select" value={formData.platforms} onChange={handleChange}>
                    <option value="one">iOS o Android</option>
                    <option value="both">iOS i Android</option>
                  </select>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="auth" name="auth" checked={formData.auth} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="auth">Autenticació d'usuaris</label>
                </div>
              </>
            )}

            <div className="mb-3">
              <label className="form-label">Nom</label>
              <input type="text" name="nombre" className="form-control" value={formData.nombre} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Empresa</label>
              <input type="text" name="empresa" className="form-control" value={formData.empresa} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary">Calcula pressupost</button>
            {sent && <p className="mt-3">Dades enviades correctament.</p>}
          </form>
        )}

        {price !== null && (
          <div className="mt-4 text-center">
            <div className="alert alert-info" role="alert">
              Pressupost estimat: {price}€
            </div>
            <p>Si el pressupost et quadra</p>
            <Link
              to="/contacto"
              className="btn btn-success"
              onClick={() => trackEvent('CTA clic', { etiqueta: 'Pressupost - Contacta' })}
            >
              Contacta
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Pressupost;

