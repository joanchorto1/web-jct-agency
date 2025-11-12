import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';

import Layout from '../../components/layouts/layout';

const initialFormState = {
  nom: '',
  email: '',
  sector: '',
  numeroEmpleats: '',
  gestioParts: '',
  collDampolla: '',
  softwareFacturacio: '',
  predisposicioFase1: '',
  telefon: '',
  franjaHoraria: '',
};

const fieldValidators = {
  nom: (value) => (value.trim().length < 2 ? 'Introdueix el teu nom complet.' : ''),
  email: (value) =>
    /[^@\s]+@[^@\s]+\.[^@\s]+/.test(value) ? '' : 'Introdueix un email vàlid.',
  sector: (value) => (value ? '' : 'Selecciona el sector al qual pertany la teva empresa.'),
  numeroEmpleats: (value) => (value ? '' : 'Selecciona el nombre d\'empleats.'),
  gestioParts: (value) =>
    value.trim().length >= 10 ? '' : 'Descriu breument com gestioneu els parts actualment.',
  collDampolla: (value) =>
    value.trim().length >= 10 ? '' : 'Explica el principal coll d\'ampolla que esteu patint.',
  softwareFacturacio: (value) =>
    value.trim().length >= 2 ? '' : 'Digues-nos quin software de facturació utilitzeu.',
  predisposicioFase1: (value) =>
    value ? '' : 'Indica si esteu preparats per iniciar la fase 1 del projecte.',
  telefon: (value) =>
    /^\+?[0-9\s-]{9,15}$/.test(value.trim())
      ? ''
      : 'Introdueix un telèfon de contacte vàlid (amb prefix si escau).',
  franjaHoraria: (value) => (value ? '' : 'Selecciona la franja horària preferida.'),
};

const ContactReservationPage = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const calendlyUrl = useMemo(
    () => 'https://cal.com/joanchorto/20min?embed=1&layout=month_view',
    []
  );

  const validateField = (name, value) => {
    const validator = fieldValidators[name];
    if (!validator) return '';
    return validator(value);
  };

  const validateForm = () => {
    const newErrors = Object.entries(formData).reduce((acc, [key, value]) => {
      const error = validateField(key, value);
      if (error) {
        acc[key] = error;
      }
      return acc;
    }, {});

    setErrors(newErrors);
    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('idle');
    const validationResult = validateForm();
    if (Object.keys(validationResult).length > 0) {
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send('service_uaggcy8', 'template_88m2twe', {
        ...formData,
        message: `Sector: ${formData.sector}\nNº empleats: ${formData.numeroEmpleats}\nGestió actual de parts: ${formData.gestioParts}\nColl d'ampolla: ${formData.collDampolla}\nSoftware de facturació: ${formData.softwareFacturacio}\nPredisposició fase 1: ${formData.predisposicioFase1}\nTelèfon: ${formData.telefon}\nFranja horària: ${formData.franjaHoraria}`,
      });
      setStatus('success');
      setFormData(initialFormState);
      setErrors({});
    } catch (error) {
      console.error('Error enviant el formulari qualificat', error);
      setStatus('error');
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Reserva la sessió de diagnosi amb Joan Chorto Consultor</title>
        <link rel="canonical" href="https://joanchorto.com/contacte" />
        <meta
          name="description"
          content="Reserva una sessió de 20 minuts per diagnosticar el teu projecte digital i comparteix l'estat actual del teu procés."
        />
      </Helmet>

      <section className="bg-light py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <h1 className="mb-3">Qualifiquem la teva sessió de 20'</h1>
              <p className="text-muted mb-4">
                Explica'ns el context actual del teu negoci i reserva una trucada exploratòria. Amb aquesta informació
                podrem preparar la sessió perquè obtinguis un full de ruta clar per començar la fase 1.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="nom" className="form-label fw-semibold">
                    Nom i cognoms
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    className={`form-control ${errors.nom ? 'is-invalid' : ''}`}
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Nom complet"
                  />
                  {errors.nom && <div className="invalid-feedback d-block">{errors.nom}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email de contacte
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nom@empresa.com"
                  />
                  {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="sector" className="form-label fw-semibold">
                    Sector empresarial
                  </label>
                  <select
                    id="sector"
                    name="sector"
                    className={`form-select ${errors.sector ? 'is-invalid' : ''}`}
                    value={formData.sector}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona una opció</option>
                    <option value="Indústria">Indústria</option>
                    <option value="Serveis">Serveis</option>
                    <option value="Comerç">Comerç</option>
                    <option value="Logística">Logística</option>
                    <option value="Tecnologia">Tecnologia</option>
                    <option value="Altres">Altres</option>
                  </select>
                  {errors.sector && <div className="invalid-feedback d-block">{errors.sector}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="numeroEmpleats" className="form-label fw-semibold">
                    Nombre d'empleats
                  </label>
                  <select
                    id="numeroEmpleats"
                    name="numeroEmpleats"
                    className={`form-select ${errors.numeroEmpleats ? 'is-invalid' : ''}`}
                    value={formData.numeroEmpleats}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona una franja</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="200+">Més de 200</option>
                  </select>
                  {errors.numeroEmpleats && (
                    <div className="invalid-feedback d-block">{errors.numeroEmpleats}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="gestioParts" className="form-label fw-semibold">
                    Com gestioneu actualment els parts o incidències?
                  </label>
                  <textarea
                    id="gestioParts"
                    name="gestioParts"
                    rows="3"
                    className={`form-control ${errors.gestioParts ? 'is-invalid' : ''}`}
                    value={formData.gestioParts}
                    onChange={handleChange}
                    placeholder="Descriu processos, eines i equips implicats"
                  />
                  {errors.gestioParts && <div className="invalid-feedback d-block">{errors.gestioParts}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="collDampolla" className="form-label fw-semibold">
                    Quin és el principal coll d'ampolla?
                  </label>
                  <textarea
                    id="collDampolla"
                    name="collDampolla"
                    rows="3"
                    className={`form-control ${errors.collDampolla ? 'is-invalid' : ''}`}
                    value={formData.collDampolla}
                    onChange={handleChange}
                    placeholder="Ex: falta de visibilitat, temps de resposta, errors humans..."
                  />
                  {errors.collDampolla && <div className="invalid-feedback d-block">{errors.collDampolla}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="softwareFacturacio" className="form-label fw-semibold">
                    Quin software de facturació utilitzeu?
                  </label>
                  <input
                    id="softwareFacturacio"
                    name="softwareFacturacio"
                    type="text"
                    className={`form-control ${errors.softwareFacturacio ? 'is-invalid' : ''}`}
                    value={formData.softwareFacturacio}
                    onChange={handleChange}
                    placeholder="Nom de la solució o ERP"
                  />
                  {errors.softwareFacturacio && (
                    <div className="invalid-feedback d-block">{errors.softwareFacturacio}</div>
                  )}
                </div>

                <div className="mb-3">
                  <span className="form-label fw-semibold d-block mb-2">
                    Estàs preparat per iniciar la fase 1?
                  </span>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="predisposicioFase1"
                      id="fase1Si"
                      value="Sí"
                      checked={formData.predisposicioFase1 === 'Sí'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="fase1Si">
                      Sí, volem començar
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="predisposicioFase1"
                      id="fase1No"
                      value="Encara ho estem valorant"
                      checked={formData.predisposicioFase1 === 'Encara ho estem valorant'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="fase1No">
                      Encara ho estem valorant
                    </label>
                  </div>
                  {errors.predisposicioFase1 && (
                    <div className="invalid-feedback d-block">{errors.predisposicioFase1}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="telefon" className="form-label fw-semibold">
                    Telèfon de contacte
                  </label>
                  <input
                    id="telefon"
                    name="telefon"
                    type="tel"
                    className={`form-control ${errors.telefon ? 'is-invalid' : ''}`}
                    value={formData.telefon}
                    onChange={handleChange}
                    placeholder="+34 600 000 000"
                  />
                  {errors.telefon && <div className="invalid-feedback d-block">{errors.telefon}</div>}
                </div>

                <div className="mb-4">
                  <label htmlFor="franjaHoraria" className="form-label fw-semibold">
                    Franja horària preferida per la trucada
                  </label>
                  <select
                    id="franjaHoraria"
                    name="franjaHoraria"
                    className={`form-select ${errors.franjaHoraria ? 'is-invalid' : ''}`}
                    value={formData.franjaHoraria}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona una franja</option>
                    <option value="Matí (9h - 12h)">Matí (9h - 12h)</option>
                    <option value="Migdia (12h - 15h)">Migdia (12h - 15h)</option>
                    <option value="Tarda (15h - 18h)">Tarda (15h - 18h)</option>
                    <option value="Vespre (18h - 20h)">Vespre (18h - 20h)</option>
                  </select>
                  {errors.franjaHoraria && (
                    <div className="invalid-feedback d-block">{errors.franjaHoraria}</div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-dark w-100"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Enviant dades...' : 'Enviar qualificació'}
                </button>

                {status === 'success' && (
                  <div className="alert alert-success mt-3" role="alert">
                    Gràcies! Hem rebut la informació. Ara només cal reservar l\'hora que et vagi millor al calendari.
                  </div>
                )}
                {status === 'error' && (
                  <div className="alert alert-danger mt-3" role="alert">
                    Hi ha hagut un error en enviar les dades. Torna-ho a intentar en uns minuts o contacta amb nosaltres.
                  </div>
                )}
              </form>
            </div>

            <div className="col-lg-6">
              <div className="bg-white shadow-sm rounded-3 p-4 h-100">
                <h2 className="h4 mb-3">Reserva la trucada de 20 minuts</h2>
                <p className="text-muted">
                  Tria el dia i l\'hora que et vagi millor. La sessió es realitza via videotrucada i serveix per entendre
                  en detall el teu cas i acordar els següents passos.
                </p>
                <div className="ratio ratio-4x3 rounded overflow-hidden mb-4">
                  <iframe
                    src={calendlyUrl}
                    title="Reserva de reunió Cal.com"
                    allow="camera; microphone; fullscreen"
                    frameBorder="0"
                    style={{ border: 0 }}
                  />
                </div>
                <div>
                  <h3 className="h5">Preguntes freqüents</h3>
                  <ul className="list-unstyled mt-3 mb-0">
                    <li className="mb-3">
                      <strong>Què passa després d\'enviar el formulari?</strong>
                      <br />Revisem la informació, preparem un diagnòstic inicial i confirmem la reunió reservada.
                    </li>
                    <li className="mb-3">
                      <strong>Qui assistirà a la trucada?</strong>
                      <br />Un consultor de Joan Chorto Consultor especialitzat en processos digitals i integracions SaaS.
                    </li>
                    <li className="mb-0">
                      <strong>Quin és el resultat de la sessió?</strong>
                      <br />Obtindràs un pla d\'acció per la fase 1, amb prioritats, timing i properes validacions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactReservationPage;
