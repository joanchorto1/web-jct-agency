import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser';

import Layout from '../components/layouts/layout';

const initialFormState = {
  nombre: '',
  correo: '',
  telefono: '',
  asunto: '',
  fecha: '',
  hora: '',
  envio: 'whatsapp',
};

const validators = {
  nombre: (value) => (value.trim().length >= 2 ? '' : 'Introduce tu nombre completo.'),
  correo: (value) =>
    /[^@\s]+@[^@\s]+\.[^@\s]+/.test(value) ? '' : 'Introduce un correo electrónico válido.',
  telefono: (value) =>
    /^\+?[0-9\s-]{9,15}$/.test(value.trim())
      ? ''
      : 'Introduce un teléfono de contacto válido (incluye prefijo si aplica).',
  asunto: (value) => (value.trim().length >= 4 ? '' : 'Cuéntanos brevemente el motivo de la reunión.'),
  fecha: (value) => (value ? '' : 'Selecciona una fecha disponible.'),
  hora: (value) => (value ? '' : 'Selecciona la hora de la cita.'),
};

const Agenda = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [confirmationMethod, setConfirmationMethod] = useState(initialFormState.envio);
  const [persistenceError, setPersistenceError] = useState('');

  const calendarUrl = useMemo(
    () => 'https://cal.com/joanchorto/20min?embed=1&layout=month_view',
    []
  );

  const validateField = (name, value) => {
    const validator = validators[name];
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

  const persistLocalRecord = async () => {
    const recordLine = `${formData.nombre} | ${formData.correo} | ${formData.telefono} | ${formData.asunto} | ${formData.fecha} ${formData.hora}`;

    try {
      let existingContent = '';

      try {
        const existingResponse = await fetch('/agenda-registros.txt', { cache: 'no-store' });
        if (existingResponse.ok) {
          existingContent = await existingResponse.text();
        }
      } catch (readError) {
        console.warn('No se pudo leer el archivo de registros', readError);
      }

      const hasDuplicate = existingContent
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean)
        .some((line) => line.endsWith(`${formData.fecha} ${formData.hora}`));

      if (hasDuplicate) {
        setPersistenceError('Ya existe una cita registrada para esa fecha y hora. Elige otro horario disponible.');
        return { success: false, duplicated: true };
      }

      const trimmedContent = existingContent.trim();
      const updatedContent = trimmedContent ? `${trimmedContent}\n${recordLine}` : recordLine;

      const saveResponse = await fetch('/agenda-registros.txt', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: updatedContent,
      });

      if (!saveResponse.ok) {
        throw new Error('No se pudo escribir el archivo de registros');
      }

      return { success: true };
    } catch (writeError) {
      console.error('Error en la persistencia local de la agenda', writeError);
      setPersistenceError('No se pudo registrar tu cita en el archivo local. Inténtalo de nuevo más tarde.');
      return { success: false };
    }
  };

  const buildSlotMessage = () => {
    if (!formData.fecha || !formData.hora) return '';

    const selectedDate = new Date(`${formData.fecha}T${formData.hora}`);
    return selectedDate.toLocaleString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('idle');
    setPersistenceError('');
    const validationResult = validateForm();
    if (Object.keys(validationResult).length > 0) {
      return;
    }

    setStatus('sending');

    try {
      const slotText = buildSlotMessage();
      const persistenceResult = await persistLocalRecord();

      if (!persistenceResult.success) {
        setStatus('error');
        return;
      }

      const message = `Nombre: ${formData.nombre}\nCorreo: ${formData.correo}\nTeléfono: ${formData.telefono}\nAsunto: ${formData.asunto}\nFecha y hora: ${slotText}`;

      if (formData.envio === 'whatsapp') {
        const whatsappText = `Hola, soy ${formData.nombre}. Quisiera reservar una reunión el ${slotText}. Puedes escribirme a ${formData.correo} o llamarme al ${formData.telefono}. Asunto: ${formData.asunto}.`;
        const whatsappUrl = `https://wa.me/34633391411?text=${encodeURIComponent(whatsappText)}`;
        window.open(whatsappUrl, '_blank');
        setStatus('success');
        setConfirmationMethod(formData.envio);
      } else {
        await emailjs.send('service_uaggcy8', 'template_88m2twe', {
          ...formData,
          message,
          to_email: 'info@jctagency.com',
        });
        setStatus('success');
        setConfirmationMethod(formData.envio);
      }

      setPersistenceError('');
      setFormData(initialFormState);
      setErrors({});
    } catch (error) {
      console.error('Error enviando la solicitud de agenda', error);
      setStatus('error');

      const fallbackBody = `Hola, soy ${formData.nombre}.\nMe gustaría confirmar una reunión el ${buildSlotMessage()}.\nCorreo: ${formData.correo}\nTeléfono: ${formData.telefono}\nAsunto: ${formData.asunto}`;
      window.location.href = `mailto:info@jctagency.com?subject=Solicitud%20de%20cita&body=${encodeURIComponent(fallbackBody)}`;
    }
  };

  return (
    <Layout stickyVisibility="desktop-only">
      <Helmet>
        <title>Agenda — Reserva una fecha con Joan Chorto Consultor</title>
        <meta
          name="description"
          content="Consulta las fechas disponibles de Joan Chorto y reserva una reunión dejando tus datos de contacto."
        />
        <link rel="canonical" href="https://joanchorto.com/agenda" />
      </Helmet>

      <section className="bg-light py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <span className="section-eyebrow">Agenda abierta</span>
              <h1 className="mb-3">Reserva una fecha que te encaje</h1>
              <p className="text-muted mb-4">
                Revisa la disponibilidad real de mi agenda y reserva tu hueco. Elige la fecha y hora que te encaja y dime cómo
                prefieres confirmar la cita: por WhatsApp o por correo.
              </p>

              <div className="bg-white shadow-sm rounded-3 p-4">
                <h2 className="h5 mb-3">Datos de contacto y cita</h2>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label fw-semibold">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Nombre y apellidos"
                    />
                    {errors.nombre && <div className="invalid-feedback d-block">{errors.nombre}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="correo" className="form-label fw-semibold">
                      Correo electrónico
                    </label>
                    <input
                      id="correo"
                      name="correo"
                      type="email"
                      className={`form-control ${errors.correo ? 'is-invalid' : ''}`}
                      value={formData.correo}
                      onChange={handleChange}
                      placeholder="nombre@empresa.com"
                    />
                    {errors.correo && <div className="invalid-feedback d-block">{errors.correo}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="telefono" className="form-label fw-semibold">
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                    />
                    {errors.telefono && <div className="invalid-feedback d-block">{errors.telefono}</div>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="asunto" className="form-label fw-semibold">
                      Asunto de la reunión
                    </label>
                    <textarea
                      id="asunto"
                      name="asunto"
                      className={`form-control ${errors.asunto ? 'is-invalid' : ''}`}
                      rows="3"
                      value={formData.asunto}
                      onChange={handleChange}
                      placeholder="Cuéntame qué necesitas resolver"
                    />
                    {errors.asunto && <div className="invalid-feedback d-block">{errors.asunto}</div>}
                  </div>

                  <div className="row g-3 mb-4">
                    <div className="col-sm-6">
                      <label htmlFor="fecha" className="form-label fw-semibold">
                        Fecha
                      </label>
                      <input
                        id="fecha"
                        name="fecha"
                        type="date"
                        className={`form-control ${errors.fecha ? 'is-invalid' : ''}`}
                        value={formData.fecha}
                        onChange={handleChange}
                      />
                      {errors.fecha && <div className="invalid-feedback d-block">{errors.fecha}</div>}
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="hora" className="form-label fw-semibold">
                        Hora
                      </label>
                      <input
                        id="hora"
                        name="hora"
                        type="time"
                        className={`form-control ${errors.hora ? 'is-invalid' : ''}`}
                        value={formData.hora}
                        onChange={handleChange}
                      />
                      {errors.hora && <div className="invalid-feedback d-block">{errors.hora}</div>}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="envio" className="form-label fw-semibold">
                      Cómo quieres confirmar la cita
                    </label>
                    <select
                      id="envio"
                      name="envio"
                      className="form-select"
                      value={formData.envio}
                      onChange={handleChange}
                    >
                      <option value="whatsapp">Abrir WhatsApp con mensaje prellenado</option>
                      <option value="email">Enviar por correo a info@jctagency.com</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-dark w-100" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Enviando solicitud...' : 'Enviar y reservar'}
                  </button>

                  {status === 'success' && (
                    <div className="alert alert-success mt-3 mb-0" role="alert">
                      ¡Gracias! Hemos registrado tu selección. Abre el calendario para verificar la disponibilidad y confirma
                      tu reserva desde {confirmationMethod === 'whatsapp' ? 'WhatsApp' : 'correo electrónico'}.
                    </div>
                  )}
                  {persistenceError && (
                    <div className="alert alert-warning mt-3 mb-0" role="alert">
                      {persistenceError}
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="alert alert-danger mt-3 mb-0" role="alert">
                      Ha ocurrido un error al enviar la solicitud. Inténtalo de nuevo en unos minutos.
                    </div>
                  )}
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="bg-white shadow-sm rounded-3 p-4 h-100">
                <h2 className="h5 mb-3">Fechas disponibles</h2>
                <p className="text-muted">
                  Consulta las fechas libres y reserva tu franja horaria en un clic. El calendario muestra la disponibilidad
                  actualizada en tiempo real.
                </p>
                <div className="ratio ratio-4x3 rounded overflow-hidden">
                  <iframe
                    src={calendarUrl}
                    title="Agenda de Joan Chorto"
                    allow="camera; microphone; fullscreen"
                    frameBorder="0"
                    style={{ border: 0 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Agenda;
