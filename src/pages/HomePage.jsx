import React, { useEffect, useState } from 'react';
import ajuntamentLogo from '../components/img/Escudo heráldico en tonos grises.png';
import curmacLogo from '../components/img/Logo de Curmac Elevació en gris.png';
import egeaLogo from '../components/img/Logo de EGEA en gris.png';
import vimHouseLogo from '../components/img/Logotipo minimalista de VIM HOUSE.png';
const LEAD_MODAL_STORAGE_KEY = 'jctagency_lead_modal_submitted';

const partners = [
  { name: 'EGEA Arquitectura', logo: egeaLogo, alt: 'Logo de EGEA Arquitectura, cliente de consultoría operativa' },
  { name: 'VIM House', logo: vimHouseLogo, alt: 'Logo de VIM House, cliente de digitalización en construcción' },
  { name: "Ajuntament de L'Aldea", logo: ajuntamentLogo, alt: "Logo de l'Ajuntament de L'Aldea, cliente de modernización de procesos" },
  { name: 'Curmac Elevacions', logo: curmacLogo, alt: 'Logo de Curmac Elevacions, cliente de mejora operativa' },
];

const reasons = [
  {
    title: 'Control',
    text: 'Todo en un sitio.',
    icon: 'control',
  },
  {
    title: 'Claridad',
    text: 'Sabes qué pasa y por qué.',
    icon: 'clarity',
  },
  {
    title: 'Orden',
    text: 'Menos errores y menos lío.',
    icon: 'order',
  },
  {
    title: 'Dinero',
    text: 'Más margen, menos pérdidas.',
    icon: 'money',
  },
];

const reasonIcons = {
  control: (
    <>
      <path d="M12 3v3" />
      <path d="M12 18v3" />
      <path d="M3 12h3" />
      <path d="M18 12h3" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
  clarity: (
    <>
      <path d="M3 12s3.4-6 9-6 9 6 9 6-3.4 6-9 6-9-6-9-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  order: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
      <path d="m7 7 1.2 1.2L10.5 6" />
      <path d="m7 12 1.2 1.2 2.3-2.2" />
      <path d="m7 17 1.2 1.2 2.3-2.2" />
    </>
  ),
  money: (
    <>
      <path d="M4 17 9 12l3 3 8-8" />
      <path d="M14 7h6v6" />
      <path d="M5 20h14" />
    </>
  ),
};

function ReasonIcon({ type }) {
  return (
    <svg className="home-premium__reason-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {reasonIcons[type]}
    </svg>
  );
}

const cases = [
  {
    sector: 'ARQUITECTURA',
    text: 'Más control en 3 semanas.',
  },
  {
    sector: 'CONSTRUCCION',
    text: '75% menos tiempo administrativo.',
  },
  {
    sector: 'ADMINISTRACION',
    text: '78.000€ detectados en pérdidas.',
  },
  {
    sector: 'SERVICIOS',
    text: '+80% control operativo.',
  },
];

const phases = [
  {
    step: '01',
    label: 'Paso 1',
    title: 'Entiendo tu empresa',
    text: 'Veo cómo trabajas hoy.',
    result: 'Sin teoría',
  },
  {
    step: '02',
    label: 'Paso 2',
    title: 'Detecto el problema real',
    text: 'Señalo dónde se pierde dinero.',
    result: 'Sin rodeos',
  },
  {
    step: '03',
    label: 'Paso 3',
    title: 'Lo solucionamos',
    text: 'Ordenamos el proceso que falla.',
    result: 'Sin complicaciones',
  },
  {
    step: '04',
    label: 'Paso 4',
    title: 'Lo dejamos funcionando',
    text: 'El sistema queda claro y usable.',
    result: 'Sin humo',
  },
];

function HomePage() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
  });
  const [submitState, setSubmitState] = useState({
    status: 'idle',
    message: '',
  });

  useEffect(() => {
    const hasSubmittedLead = window.localStorage.getItem(LEAD_MODAL_STORAGE_KEY) === 'true';

    if (!hasSubmittedLead) {
      setIsLeadModalOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!isLeadModalOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsLeadModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isLeadModalOpen]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleLeadSubmit = async (event) => {
    event.preventDefault();

    setSubmitState({
      status: 'submitting',
      message: '',
    });

    try {
      const response = await fetch('https://jcmanager.jctagency.com/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          company: formData.company.trim(),
          email: formData.email.trim(),
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || 'No se ha podido guardar el lead.');
      }

      setSubmitState({
        status: 'success',
        message: data?.message || 'Lead guardado correctamente.',
      });
      window.localStorage.setItem(LEAD_MODAL_STORAGE_KEY, 'true');
      setFormData({
        name: '',
        company: '',
        email: '',
      });
      setIsLeadModalOpen(false);
    } catch (error) {
      setSubmitState({
        status: 'error',
        message: error.message || 'Ha ocurrido un error al enviar el formulario.',
      });
    }
  };

  return (
    <div className="home-premium">
      {isLeadModalOpen && (
        <div className="lead-modal" role="dialog" aria-modal="true" aria-labelledby="lead-modal-title">
          <button
            type="button"
            className="lead-modal__backdrop"
            aria-label="Cerrar modal"
            onClick={() => setIsLeadModalOpen(false)}
          />
          <div className="lead-modal__panel">
            <button
              type="button"
              className="lead-modal__close"
              aria-label="Cerrar modal"
              onClick={() => setIsLeadModalOpen(false)}
            >
              ×
            </button>

            <div className="lead-modal__content">
              <div className="lead-modal__copy">
                <p className="lead-modal__eyebrow">Diagnóstico operativo</p>
                <h2 id="lead-modal-title">¿Tu empresa funciona como debería?</h2>

                <div className="lead-modal__highlight">
                  <ul>
                    <li>Hay desorden o falta de control</li>
                    <li>Se pierde tiempo en procesos simples</li>
                    <li>Quieres mejorar, pero no sabes por dónde empezar</li>
                  </ul>
                </div>

                <p className="lead-modal__proposal">
                  Si te identificas, deja tus datos y lo revisamos.
                </p>
              </div>

              <form className="lead-modal__form" onSubmit={handleLeadSubmit}>
                <div>
                  <p className="lead-modal__form-title">Déjame tus datos y vemos si tiene sentido.</p>
                </div>

                <label className="lead-modal__field">
                  <span>Nombre</span>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                </label>

                <label className="lead-modal__field">
                  <span>Empresa</span>
                  <input type="text" name="company" value={formData.company} onChange={handleInputChange} required />
                </label>
                <label className="lead-modal__field">
                  <span>Email</span>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </label>

                <button type="submit" className="lead-modal__submit" disabled={submitState.status === 'submitting'}>
                  {submitState.status === 'submitting' ? 'Enviando…' : 'Quiero revisar mi caso'}
                </button>

                <p className="lead-modal__microcopy">Sin compromiso. Solo claridad.</p>

                {submitState.message && (
                  <p className={`lead-modal__feedback lead-modal__feedback--${submitState.status}`}>{submitState.message}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      )}

      <section className="home-premium__hero">
        <div className="site-container home-premium__hero-inner" data-aos="fade-up">
          <p className="home-premium__eyebrow">Consultoría operativa para pymes que necesitan control</p>
          <h1 className="home-premium__hero-title">
            <span>
              Tu empresa <mark>pierde dinero</mark> cada día.
            </span>
            <span>
              Y seguramente <mark>no sabes</mark> por qué.
            </span>
          </h1>
          <p className="home-premium__hero-copy">
            Yo te digo dónde está el problema y cómo arreglarlo.
          </p>
          <a href="/contacto#reserva" className="home-premium__cta">
            Analizar mi empresa (45 min)
          </a>
        </div>
      </section>

      <section className="home-premium__partners" data-aos="fade-up">
        <div className="site-container">
          <p className="home-premium__partners-kicker">Empresas con las que he trabajado</p>
          <div className="home-premium__partners-row">
            {partners.map((partner) => (
              <span key={partner.name}>
                <img src={partner.logo} alt={partner.alt} loading="lazy" />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="home-premium__problem">
        <div className="site-container home-premium__problem-inner" data-aos="fade-up">
          <p className="home-premium__eyebrow">Problema</p>
          <h2>Si esto te suena, tienes un problema:</h2>
          <ul className="home-premium__problem-list">
            <li>No sabes exactamente cuánto tienes en stock.</li>
            <li>Cada pedido va por un sitio distinto.</li>
            <li>Repites tareas cada día.</li>
            <li>Tomas decisiones sin datos claros.</li>
          </ul>
          <p className="home-premium__problem-strong">No es normal. Es dinero que estás perdiendo.</p>
        </div>
      </section>

      <section className="home-premium__reasons">
        <div className="site-container">
          <div className="home-premium__section-head" data-aos="fade-up">
            <p className="home-premium__eyebrow">Propuesta</p>
            <h2>
              No necesitas más herramientas. <span>Necesitas que todo funcione.</span>
            </h2>
          </div>
          <div className="home-premium__reason-grid">
            {reasons.map((reason) => (
              <article key={reason.title} className="home-premium__reason-card" data-aos="fade-up">
                <ReasonIcon type={reason.icon} />
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-premium__cases">
        <div className="site-container">
          <div className="home-premium__section-head" data-aos="fade-up">
            <p className="home-premium__eyebrow">Casos de éxito</p>
            <h2>
              Resultados <span>medibles y reales.</span>
            </h2>
          </div>
          <div className="home-premium__cases-grid">
            {cases.map((item) => (
              <article key={item.sector} className="home-premium__case-card" data-aos="fade-up">
                <span className="home-premium__case-badge">{item.sector}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-premium__process">
        <div className="site-container">
          <div className="home-premium__section-head" data-aos="fade-up">
            <p className="home-premium__eyebrow">Cómo trabajamos</p>
            <h2>Sin complicaciones. Sin teoría.</h2>
          </div>
          <div className="home-premium__timeline">
            {phases.map((phase) => (
              <article key={phase.step} className="home-premium__phase-card" data-aos="fade-up">
                <div className="home-premium__phase-step">{phase.step}</div>
                <div className="home-premium__phase-content">
                  <p className="home-premium__phase-label">{phase.label}</p>
                  <h3>{phase.title}</h3>
                  <p>{phase.text}</p>
                  <span className="home-premium__phase-result">{phase.result}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-premium__cta-band" data-aos="fade-up">
        <div className="site-container home-premium__cta-inner">
          <h2>Si tu empresa depende de Excel, WhatsApp o mil sistemas... no tienes control.</h2>
          <p>Y sin control, pierdes dinero.</p>
          <div className="home-premium__cta-list" aria-label="Qué revisamos en 45 minutos">
            <span>dónde estás perdiendo dinero</span>
            <span>qué lo está causando</span>
            <span>cómo solucionarlo</span>
          </div>
          <p>Sin compromiso. Sin humo.</p>
          <a href="/contacto#reserva" className="home-premium__cta">
            Analizar mi empresa
          </a>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
