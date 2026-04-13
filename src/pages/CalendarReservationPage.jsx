import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';

const API_BASE_URL = 'https://jcmanager.jctagency.com/api/calendar';
const USER_ID = 1;
const DEFAULT_DURATION = 60;

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  notes: '',
};

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getSlotStart = (slot) => {
  if (typeof slot === 'string') return slot;

  return (
    slot?.start_time ||
    slot?.start ||
    slot?.time ||
    slot?.datetime ||
    slot?.date_time ||
    slot?.scheduled_at ||
    ''
  );
};

const getSlotLabel = (slot) => {
  const start = getSlotStart(slot);
  const end = typeof slot === 'object' ? slot?.end_time || slot?.end : '';

  if (!start) return '';

  const startLabel = start.includes('T') ? start.slice(11, 16) : start.slice(0, 5);
  const endLabel = end ? (end.includes('T') ? end.slice(11, 16) : end.slice(0, 5)) : '';

  return endLabel ? `${startLabel} - ${endLabel}` : startLabel;
};

const getSlotDate = (selectedDate, start) => {
  if (!start) return null;
  const value = start.includes('T') ? start : `${selectedDate}T${start.slice(0, 5)}:00`;
  const date = new Date(value);

  return Number.isNaN(date.getTime()) ? null : date;
};

const isInsideReservationNotice = (selectedDate, start) => {
  const slotDate = getSlotDate(selectedDate, start);
  if (!slotDate) return true;

  const earliestBookableDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
  return slotDate < earliestBookableDate;
};

const normalizeSlots = (data, selectedDate) => {
  const rawSlots =
    data?.available_slots ||
    data?.availableSlots ||
    data?.slots ||
    data?.availability ||
    data?.available ||
    data?.data ||
    [];

  if (!Array.isArray(rawSlots)) return [];

  return rawSlots
    .filter((slot) => {
      if (typeof slot === 'string') return true;
      if (slot?.available === false || slot?.is_available === false || slot?.status === 'busy') return false;
      return Boolean(getSlotStart(slot));
    })
    .map((slot) => ({
      value: getSlotStart(slot),
      label: getSlotLabel(slot),
      disabled: isInsideReservationNotice(selectedDate, getSlotStart(slot)),
    }))
    .filter((slot) => slot.value && slot.label);
};

function CalendarReservationPage() {
  const [selectedDate, setSelectedDate] = useState(() => formatDate(new Date()));
  const [duration, setDuration] = useState(DEFAULT_DURATION);
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [formData, setFormData] = useState(initialFormData);
  const [availabilityStatus, setAvailabilityStatus] = useState('idle');
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const availabilityUrl = useMemo(() => {
    const params = new URLSearchParams({
      date: selectedDate,
      user_id: String(USER_ID),
      duration_minutes: String(duration),
    });

    return `${API_BASE_URL}/availability?${params.toString()}`;
  }, [duration, selectedDate]);

  useEffect(() => {
    const controller = new AbortController();

    const loadAvailability = async () => {
      setAvailabilityStatus('loading');
      setMessage('');
      setSlots([]);
      setSelectedSlot('');

      try {
        const response = await fetch(availabilityUrl, {
          headers: {
            Accept: 'application/json',
          },
          signal: controller.signal,
        });

        const data = await response.json().catch(() => null);

        if (!response.ok) {
          throw new Error(data?.message || 'No se ha podido cargar la disponibilidad.');
        }

        setSlots(normalizeSlots(data, selectedDate));
        setAvailabilityStatus('loaded');
      } catch (error) {
        if (error.name === 'AbortError') return;
        setAvailabilityStatus('error');
        setMessage(error.message || 'No se ha podido cargar la disponibilidad.');
      }
    };

    if (selectedDate) {
      loadAvailability();
    }

    return () => controller.abort();
  }, [availabilityUrl, selectedDate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus('submitting');
    setMessage('');

    try {
      if (!selectedSlot) {
        throw new Error('Selecciona una hora disponible.');
      }

      const slot = slots.find((item) => item.value === selectedSlot);
      if (!slot || slot.disabled) {
        throw new Error('Las reuniones deben reservarse con al menos 24 horas de antelación.');
      }

      const response = await fetch(`${API_BASE_URL}/events`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: USER_ID,
          date: selectedDate,
          start_time: selectedSlot,
          duration_minutes: Number(duration),
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          notes: formData.notes.trim(),
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || 'No se ha podido crear la cita.');
      }

      setSubmitStatus('success');
      setMessage(data?.message || 'Cita creada correctamente.');
      setFormData(initialFormData);
      setSelectedSlot('');
    } catch (error) {
      setSubmitStatus('error');
      setMessage(error.message || 'No se ha podido crear la cita.');
    }
  };

  return (
    <article className="light-page">
      <Helmet>
        <title>Reservar hora | Joan Chorto Consultor</title>
        <meta
          name="description"
          content="Consulta horas disponibles y reserva una cita en el calendario de Joan Chorto Consultor."
        />
      </Helmet>

      <section className="light-page__hero" data-aos="fade-up">
        <div className="site-container light-page__hero-grid">
          <div>
            <p className="light-page__eyebrow">Calendario</p>
            <h1>Reserva una hora.</h1>
            <p>Consulta la disponibilidad real y deja tu cita registrada en el calendario.</p>
          </div>
          <div className="calendar-reservation__summary" data-aos="zoom-in" data-aos-delay="120">
            <p className="light-page__eyebrow">Duración</p>
            <h2>{duration} minutos</h2>
            <p>Revisión inicial para detectar el problema y decidir próximos pasos.</p>
          </div>
        </div>
      </section>

      <section className="light-page__section">
        <div className="site-container calendar-reservation">
          <form className="calendar-reservation__form" onSubmit={handleSubmit} data-aos="fade-up">
            <div className="calendar-reservation__row">
              <label>
                <span>Fecha</span>
                <input
                  type="date"
                  value={selectedDate}
                  min={formatDate(new Date())}
                  onChange={(event) => setSelectedDate(event.target.value)}
                  required
                />
              </label>
              <label>
                <span>Duración</span>
                <select value={duration} onChange={(event) => setDuration(event.target.value)}>
                  <option value="30">30 minutos</option>
                  <option value="45">45 minutos</option>
                  <option value="60">60 minutos</option>
                </select>
              </label>
            </div>

            <div>
              <p className="calendar-reservation__label">Horas disponibles</p>
              {availabilityStatus === 'loading' && <p className="calendar-reservation__muted">Consultando disponibilidad...</p>}
              {availabilityStatus === 'loaded' && slots.length === 0 && (
                <p className="calendar-reservation__muted">No hay horas disponibles para esta fecha.</p>
              )}
              {slots.length > 0 && (
                <div className="calendar-reservation__slots">
                  {slots.map((slot) => (
                    <button
                      type="button"
                      key={`${slot.value}-${slot.label}`}
                      className={selectedSlot === slot.value ? 'is-selected' : ''}
                      disabled={slot.disabled}
                      onClick={() => setSelectedSlot(slot.value)}
                      title={slot.disabled ? 'Reserva disponible solo con 24 horas de antelación' : undefined}
                    >
                      {slot.label}
                      {slot.disabled ? ' · no disponible' : ''}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="calendar-reservation__row">
              <label>
                <span>Nombre</span>
                <input name="name" value={formData.name} onChange={handleChange} required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </label>
            </div>

            <div className="calendar-reservation__row">
              <label>
                <span>Teléfono</span>
                <input name="phone" value={formData.phone} onChange={handleChange} required />
              </label>
              <label>
                <span>Empresa</span>
                <input name="company" value={formData.company} onChange={handleChange} />
              </label>
            </div>

            <label>
              <span>Motivo de la reunión</span>
              <textarea name="notes" value={formData.notes} onChange={handleChange} rows="4" />
            </label>

            {message && (
              <p className={`calendar-reservation__message calendar-reservation__message--${submitStatus}`}>
                {message}
              </p>
            )}

            <button type="submit" className="home-premium__cta" disabled={submitStatus === 'submitting'}>
              {submitStatus === 'submitting' ? 'Reservando...' : 'Reservar hora'}
            </button>
          </form>
        </div>
      </section>
    </article>
  );
}

export default CalendarReservationPage;
