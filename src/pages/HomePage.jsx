import React, { useEffect, useState } from 'react';

const LEAD_MODAL_STORAGE_KEY = 'jctagency_lead_modal_submitted';

const partners = ['EGEA Arquitectura', 'VIM House', "Ajuntament de L'Aldea", 'Curmac Elevacions'];

const reasons = [
  {
    title: 'ROI antes de intervenir',
    text: 'Antes de implantar cambios, cuantificamos cuánto cuesta cada ineficiencia en tiempo, margen y estructura. Si no hay retorno claro, se dice.',
  },
  {
    title: 'Implantación, no teoría',
    text: 'No entregamos un informe para archivar. Reordenamos procesos, configuramos sistemas y dejamos la operación funcionando en producción.',
  },
  {
    title: 'Digitalización útil',
    text: 'ERP, herramientas propias y automatizaciones orientadas a negocio. Tecnología al servicio de la gestión, no al revés.',
  },
  {
    title: 'Partner de dirección',
    text: 'Acompañamiento real en seguimiento, revisión y evolución. La transformación no termina al lanzar un sistema.',
  },
];

const cases = [
  {
    sector: 'ARQUITECTURA',
    metric: '3 semanas',
    title: 'Primera mejora operativa implantada',
    text: 'Reorganización del flujo de proyectos y seguimiento documental para acelerar control y reducir tareas manuales.',
    meta: 'EGEA Arquitectura',
  },
  {
    sector: 'CONSTRUCCION',
    metric: '75%',
    title: 'Reducción en tiempo administrativo',
    text: 'Digitalización del seguimiento de obra y control económico para reducir retrasos, errores y duplicidades.',
    meta: 'VIM House',
  },
  {
    sector: 'ADMINISTRACION',
    metric: '78.000€/año',
    title: 'Ahorro potencial identificado',
    text: 'Estandarización de circuitos internos y trazabilidad de expedientes con menos fricción entre departamentos.',
    meta: "Ajuntament de L'Aldea",
  },
  {
    sector: 'SERVICIOS',
    metric: '80%',
    title: 'Mayor visibilidad operativa',
    text: 'Coordinación técnica, asignación y cierre de servicios con datos más fiables y control de ejecución.',
    meta: 'Curmac Elevacions',
  },
];

const phases = [
  {
    step: '01',
    label: 'Fase 01 · Diagnóstico',
    title: 'Identificar',
    text: 'Entrevistamos a dirección y equipos clave, revisamos procesos críticos y calculamos el coste real de cada ineficiencia.',
    result: 'Resultado en 2-3 semanas',
  },
  {
    step: '02',
    label: 'Fase 02 · Prioridades',
    title: 'Decidir',
    text: 'Priorizamos las acciones según impacto, esfuerzo y retorno. Se define una hoja de ruta clara, sin dispersión.',
    result: 'Plan accionable por fases',
  },
  {
    step: '03',
    label: 'Fase 03 · Implantación',
    title: 'Implementar',
    text: 'Configuramos sistemas, automatizaciones y herramientas propias para que el cambio llegue a la operación diaria.',
    result: 'Procesos en producción',
  },
  {
    step: '04',
    label: 'Fase 04 · Seguimiento',
    title: 'Consolidar',
    text: 'Medimos adopción, resultados y nuevas oportunidades de mejora para consolidar una estructura más rentable.',
    result: 'Control y mejora continua',
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
                <h2 id="lead-modal-title">¿Tu empresa está funcionando todo lo bien que podría?</h2>

                <div className="lead-modal__highlight">
                  <ul>
                    <li>Hay desorden o falta de control en el día a día</li>
                    <li>Se pierde tiempo en procesos que deberían ser simples</li>
                    <li>Sientes que podrías mejorar resultados pero no sabes por dónde empezar</li>
                  </ul>
                </div>

                <p className="lead-modal__proposal">
                  Si te identificas, deja tus datos y vemos cómo ayudarte.
                </p>
              </div>

              <form className="lead-modal__form" onSubmit={handleLeadSubmit}>
                <div>
                  <p className="lead-modal__form-title">Déjame tus datos y vemos si tiene sentido ayudarte.</p>
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

                <p className="lead-modal__microcopy">Sin compromiso. Sin venta agresiva. Solo claridad.</p>

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
          <p className="home-premium__eyebrow">Consultoría estratégica para pymes que necesitan ordenar y escalar</p>
          <h1 className="home-premium__hero-title">
            Mejoramos procesos. Reducimos costes. <span>Implantamos sistemas que funcionan.</span>
          </h1>
          <p className="home-premium__hero-copy">
            Consultoría para empresas industriales, construcción y servicios que quieren ganar control, rentabilidad y
            eficiencia real. Sin software decorativo. Sin presentaciones vacías.
          </p>
          <a href="/contacto#reserva" className="home-premium__cta">
            Reserva una sesión
          </a>
        </div>
      </section>

      <section className="home-premium__partners" data-aos="fade-up">
        <div className="site-container">
          <p className="home-premium__partners-kicker">Empresas y organizaciones con las que he trabajado</p>
          <div className="home-premium__partners-row">
            {partners.map((partner) => (
              <span key={partner}>{partner}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="home-premium__problem">
        <div className="site-container home-premium__problem-inner" data-aos="fade-up">
          <p className="home-premium__eyebrow">El problema real</p>
          <h2>
            Has invertido en herramientas. <br />
            Pero la gestión sigue dependiendo de tareas manuales.
          </h2>
          <p>
            Partes que llegan tarde, datos duplicados, decisiones sin visibilidad y costes que nadie ha calculado con
            precisión. No es un problema de tener más software. Es un problema de estructura, proceso y control.
          </p>
          <p className="home-premium__problem-strong">
            Lo resolvemos implantando un sistema de trabajo más claro, medible y rentable.
          </p>
        </div>
      </section>

      <section className="home-premium__reasons">
        <div className="site-container">
          <div className="home-premium__section-head" data-aos="fade-up">
            <p className="home-premium__eyebrow">Por qué Joan Chorto Consultor</p>
            <h2>Transformación empresarial orientada a resultado.</h2>
          </div>
          <div className="home-premium__reason-grid">
            {reasons.map((reason) => (
              <article key={reason.title} className="home-premium__reason-card" data-aos="fade-up">
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
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
              Resultados de transformación <span>medibles y reales.</span>
            </h2>
          </div>
          <div className="home-premium__cases-grid">
            {cases.map((item) => (
              <article key={item.title} className="home-premium__case-card" data-aos="fade-up">
                <span className="home-premium__case-badge">{item.sector}</span>
                <div className="home-premium__case-metric">{item.metric}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <footer>{item.meta}</footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-premium__process">
        <div className="site-container">
          <div className="home-premium__section-head" data-aos="fade-up">
            <p className="home-premium__eyebrow">Cómo trabajamos</p>
            <h2>
              Implantamos mejoras operativas <span>en cuatro fases.</span>
            </h2>
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
          <a href="/contacto#reserva" className="home-premium__cta">
            Solicitar diagnóstico inicial
          </a>
          <p>30 minutos. Sin compromiso. Revisamos dónde estás perdiendo margen y capacidad de gestión.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
