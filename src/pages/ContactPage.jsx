import React, { useMemo, useState } from 'react';
import emailjs from '@emailjs/browser';

const initialForm = {
  nombre: '',
  empresa: '',
  email: '',
  telefono: '',
  mensaje: '',
};

function ContactPage() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState('idle');

  const reserveUrl = useMemo(() => 'https://cal.com/joanchorto/20min', []);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');

    try {
      await emailjs.send('service_uaggcy8', 'template_88m2twe', {
        nom: formData.nombre,
        email: formData.email,
        telefon: formData.telefono,
        sector: formData.empresa,
        message: formData.mensaje,
      });

      setStatus('success');
      setFormData(initialForm);
    } catch (error) {
      console.error('Error al enviar el formulario de contacto', error);
      setStatus('error');
    }
  };

  return (
    <section className="section page-headroom">
      <div className="site-container">
        <div className="section-title-row">
          <p className="eyebrow">Contacto</p>
          <h1>Hablemos de tu siguiente fase empresarial</h1>
          <p>Cuéntame tu contexto y revisamos cómo transformar operaciones, gestión y resultados.</p>
        </div>

        <div className="contact-grid">
          <article className="contact-card">
            <h2>Formulario</h2>
            <form onSubmit={onSubmit} className="contact-form">
              <label htmlFor="nombre">Nombre y apellidos</label>
              <input id="nombre" name="nombre" value={formData.nombre} onChange={onChange} required />

              <label htmlFor="empresa">Empresa</label>
              <input id="empresa" name="empresa" value={formData.empresa} onChange={onChange} required />

              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={onChange} required />

              <label htmlFor="telefono">Teléfono</label>
              <input id="telefono" name="telefono" value={formData.telefono} onChange={onChange} required />

              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={onChange}
                placeholder="Describe brevemente tu situación actual y el objetivo que quieres conseguir."
                required
              />

              <button type="submit" className="btn-primary" disabled={status === 'loading'}>
                {status === 'loading' ? 'Enviando...' : 'Enviar solicitud'}
              </button>

              {status === 'success' && (
                <p className="form-status form-status--ok">Solicitud enviada. Te responderé en menos de 24 horas.</p>
              )}
              {status === 'error' && (
                <p className="form-status form-status--error">No se pudo enviar. Escríbeme directamente por email.</p>
              )}
            </form>
          </article>

          <article className="contact-card" id="reserva">
            <h2>Reserva de sesión</h2>
            <p>
              Agenda una sesión estratégica de 20 minutos para revisar prioridades, bloqueos operativos y margen de
              mejora inmediato.
            </p>
            <a href={reserveUrl} target="_blank" rel="noreferrer" className="btn-primary">
              Ir a Calendly / Reserva
            </a>

            <div className="contact-direct">
              <h3>Contacto directo</h3>
              <a href="mailto:joan@jctagency.com">joan@jctagency.com</a>
              <a href="tel:+34633391411">633391411</a>
              <span>L'Aldea Tarragona 43896</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
