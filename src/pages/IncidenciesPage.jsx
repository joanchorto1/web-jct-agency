import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';

const initialFormState = {
  nom: '',
  servei: '',
  empresa: '',
  telefon: '',
  incidencia: '',
};

const initialErrors = {
  nom: '',
  servei: '',
  empresa: '',
  telefon: '',
  incidencia: '',
};

function IncidenciesPage() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrors);
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const nextErrors = {
      nom: formData.nom.trim().length >= 2 ? '' : 'Indica el nom.',
      servei: formData.servei.trim().length >= 2 ? '' : 'Indica el servei contractat.',
      empresa: formData.empresa.trim().length >= 2 ? '' : 'Indica l’empresa.',
      telefon: /^\+?[0-9\s-]{9,15}$/.test(formData.telefon.trim()) ? '' : 'Indica un telèfon vàlid.',
      incidencia:
        formData.incidencia.trim().length >= 10 ? '' : 'Descriu la incidència amb una mica més de detall.',
    };

    setErrors(nextErrors);
    return Object.values(nextErrors).every((value) => !value);
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('idle');

    if (!validate()) {
      return;
    }

    setStatus('sending');

    const message = `Servei contractat: ${formData.servei}
Empresa: ${formData.empresa}
Telèfon de contacte: ${formData.telefon}

Descripció de la incidència:
${formData.incidencia}`;

    try {
      await emailjs.send('service_uaggcy8', 'template_88m2twe', {
        nom: formData.nom,
        empresa: formData.empresa,
        telefon: formData.telefon,
        servei: formData.servei,
        message,
        to_email: 'joan@jctagency.com',
      });

      setFormData(initialFormState);
      setErrors(initialErrors);
      setStatus('success');
    } catch (error) {
      console.error('Error enviant la incidència', error);
      setStatus('error');
    }
  };

  return (
    <article className="light-page incident-page">
      <Helmet>
        <title>Incidències | Joan Chorto Consultor</title>
        <meta
          name="description"
          content="Comunica una incidència del teu servei contractat i rebràs resposta al més aviat possible."
        />
      </Helmet>

      <section className="light-page__hero" data-aos="fade-up">
        <div className="site-container light-page__hero-grid">
          <div>
            <p className="light-page__eyebrow">Incidències</p>
            <h1>Obri una incidència i la revisem directament.</h1>
            <p>
              Envia’ns el servei contractat, l’empresa i una descripció clara del problema perquè puguem actuar més
              ràpid.
            </p>
            <div className="incident-page__intro-list">
              <span>Resposta directa a joan@jctagency.com</span>
              <span>Dades mínimes per poder contactar-te</span>
              <span>Formulari curt i centrat en la incidència</span>
            </div>
          </div>

          <div className="light-page__contact-card">
            <h2>Formulari d’incidència</h2>

            <form className="incident-form" onSubmit={handleSubmit} noValidate>
              <label className="incident-form__field" htmlFor="nom">
                <span>Nom</span>
                <input id="nom" name="nom" type="text" value={formData.nom} onChange={handleChange} />
                {errors.nom ? <small>{errors.nom}</small> : null}
              </label>

              <label className="incident-form__field" htmlFor="servei">
                <span>Servei contractat</span>
                <input id="servei" name="servei" type="text" value={formData.servei} onChange={handleChange} />
                {errors.servei ? <small>{errors.servei}</small> : null}
              </label>

              <label className="incident-form__field" htmlFor="empresa">
                <span>Empresa</span>
                <input id="empresa" name="empresa" type="text" value={formData.empresa} onChange={handleChange} />
                {errors.empresa ? <small>{errors.empresa}</small> : null}
              </label>

              <label className="incident-form__field" htmlFor="telefon">
                <span>Tel. de contacte</span>
                <input id="telefon" name="telefon" type="tel" value={formData.telefon} onChange={handleChange} />
                {errors.telefon ? <small>{errors.telefon}</small> : null}
              </label>

              <label className="incident-form__field" htmlFor="incidencia">
                <span>Descripció de la incidència</span>
                <textarea
                  id="incidencia"
                  name="incidencia"
                  rows="6"
                  value={formData.incidencia}
                  onChange={handleChange}
                />
                {errors.incidencia ? <small>{errors.incidencia}</small> : null}
              </label>

              <button type="submit" className="site-header__cta incident-form__submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviant...' : 'Enviar incidència'}
              </button>

              {status === 'success' ? (
                <p className="incident-form__status incident-form__status--success">
                  Incidència enviada correctament.
                </p>
              ) : null}

              {status === 'error' ? (
                <p className="incident-form__status incident-form__status--error">
                  No s’ha pogut enviar. Escriu directament a joan@jctagency.com.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </article>
  );
}

export default IncidenciesPage;
