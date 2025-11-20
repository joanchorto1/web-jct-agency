import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layouts/layout';
import { WHATSAPP_LINKS } from '../../utils/whatsapp';
import { EMAIL_LINKS } from '../../utils/email';
import Logo from '../../components/img/apple-touch-icon.png';
import HeroLogo from '../../components/img/LOGO(Fondo Transparent).png';
import Capture1 from '../../components/img/captura1.png';
import Capture2 from '../../components/img/captura2.png';
import Capture3 from '../../components/img/captura3.png';

const WhatsAppIcon = () => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    className="ms-2"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
  >
    <path
      fill="#25D366"
      d="M12 .5C5.7.5.9 5.3.9 11.6c0 2 .5 3.9 1.5 5.6L.5 23.5l6.5-1.7c1.6.8 3.5 1.3 5.5 1.3 6.3 0 11.1-4.8 11.1-11.1S18.3 .5 12 .5z"
    />
    <path
      fill="#FFF"
      d="M17.3 14.1c-.3-.2-2-.9-2.3-.9-.3 0-.4-.1-.6.2-.2.3-.8.9-1 1.1-.2.2-.4.3-.7.1-.3-.2-1.5-.6-2.8-1.7-1-1-1.6-2.1-1.8-2.4-.2-.3 0-.5.1-.7.1-.2.3-.4.6-.1.2.1.4 0 .6-.1.2-.6 1.4-.8 1.9-.2.5.4.4.6.4.2 0 .5 0 .8 0 .3 0 .7.1 1 .4.3.3 1 1 1 2.5s1 3 1.1 3.2c.1.2 1.9 3 4.6 4.3 3 .1 3.9.2 4.6.1.7-.1 2.4-1 2.8-1.9.4-.9.4-1.6.3-1.8-.1-.2-.4-.3-.7-.5z"
    />
  </svg>
);

const ContactActionGroup = ({
  emailHref,
  whatsappHref,
  emailLabel,
  whatsappLabel,
  variant = 'primary',
  whatsappVariant = 'outline-primary',
  size = 'lg',
  className = '',
}) => (
  <div className={`d-flex flex-column flex-sm-row gap-3 ${className}`}>
    <a href={emailHref} className={`btn btn-${variant} btn-${size}`}>
      {emailLabel}
    </a>
    <a href={whatsappHref} className={`btn btn-${whatsappVariant} btn-${size}`}>
      {whatsappLabel}
      <WhatsAppIcon />
    </a>
  </div>
);

const faqItems = [
  {
    question: '¿Tengo que abandonar mi programa actual?',
    answer:
      'No. Revisamos cómo trabajas hoy y te dejamos un plan claro para conectar partes, certificaciones y facturas sin cambiar de software si no quieres.',
  },
  {
    question: '¿Qué pasa si ya tengo asesoría?',
    answer:
      'La involucramos desde el minuto uno para que el envío a la AEAT quede trazado y sin duplicar trabajo ni registros.',
  },
  {
    question: '¿Cuánto tardaremos en ver resultados?',
    answer: 'En la primera llamada obtienes riesgos y pasos. El ajuste básico suele quedar listo en 3 semanas.',
  },
];

const quickNumbers = [
  { value: '40', label: 'horas ahorradas al mes' },
  { value: '80%', label: 'menos errores en facturas' },
  { value: '3', label: 'semanas para tener el flujo controlado' },
];

const ConstructProPage = () => (
  <Layout stickyVisibility="desktop-only">
    <Helmet>
      <title>ConstructPro | Evita sanciones VeriFactu y controla tus obras</title>
      <meta
        name="description"
        content="Evita sanciones VeriFactu y controla tus obras en un único sistema. Diagnóstico gratuito para empresas de construcción con partes, certificaciones y facturas."
      />
    </Helmet>

    <div className="bg-white text-dark">
      <section className="section-spacing pb-0 position-relative overflow-hidden">
        <div className="container position-relative">
          <div className="row align-items-center g-5 flex-column-reverse flex-lg-row">
            <div className="col-lg-6 position-relative">
              <span className="eyebrow text-uppercase text-primary">ConstructPro para constructoras</span>
              <h1 className="display-5 fw-bold mt-3">
                Evita sanciones VeriFactu y controla tus obras en un único sistema.
              </h1>
              <p className="lead text-muted mt-3">
                Para empresas de construcción que trabajan con partes, certificaciones y facturas y no quieren duplicar trabajo con la nueva normativa.
              </p>
              <div className="d-flex flex-column gap-3">
                <ContactActionGroup
                  className="mt-1"
                  emailHref={EMAIL_LINKS.constructProInfo}
                  whatsappHref={WHATSAPP_LINKS.constructProInfo}
                  emailLabel="Reserva diagnóstico gratuito"
                  whatsappLabel="Hablar por WhatsApp"
                />
                <div className="d-flex gap-3 align-items-center flex-wrap">
                  {quickNumbers.map((item) => (
                    <div
                      key={item.label}
                      className="px-3 py-2 rounded-3 bg-light border d-flex align-items-center gap-2"
                    >
                      <span className="fw-bold text-primary fs-4 mb-0">{item.value}</span>
                      <span className="text-muted small fw-semibold">{item.label}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted small mb-0">
                  Beneficio + urgencia + acción: agenda ahora y evita rehacer la facturación a última hora.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative shadow-lg rounded-4 overflow-hidden">
                <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/7Qp5vcuMIlk"
                    title="Demo ConstructPro"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="position-absolute top-0 start-0 m-3 px-3 py-2 rounded-3 bg-white shadow-sm d-flex align-items-center gap-2">
                  <img src={HeroLogo} alt="ConstructPro" width="32" height="32" className="rounded" />
                  <span className="fw-semibold">Demo rápida: flujo completo</span>
                </div>
                <div className="position-absolute bottom-0 end-0 m-3 px-3 py-2 rounded-3 bg-dark text-white d-flex align-items-center gap-2">
                  <span className="badge bg-primary">Vídeo</span>
                  <span className="small">Cómo conectar obra, compras y facturas sin duplicar trabajo.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-4 pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <div className="p-4 p-md-5 rounded-4 bg-light border position-relative overflow-hidden">
                <div className="position-absolute top-0 end-0 m-3 px-3 py-1 bg-primary text-white rounded-pill fw-semibold">
                  30 min en videollamada
                </div>
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                  <h2 className="h4 fw-semibold mb-0">Tu diagnóstico gratuito explicado como un producto</h2>
                  <span className="badge bg-primary-subtle text-primary fw-semibold">Sin instalar nada</span>
                </div>
                <div className="row g-4 mt-3">
                  <div className="col-md-6">
                    <ul className="list-unstyled d-grid gap-3 fs-5 mb-0">
                      <li className="d-flex gap-2 align-items-start">
                        <span className="text-primary">●</span>
                        <span>Revisamos cómo certificas y facturas hoy.</span>
                      </li>
                      <li className="d-flex gap-2 align-items-start">
                        <span className="text-primary">●</span>
                        <span>Detectamos riesgos de sanción: duplicidades, incoherencias y errores de trazabilidad.</span>
                      </li>
                      <li className="d-flex gap-2 align-items-start">
                        <span className="text-primary">●</span>
                        <span>Te entrego un esquema claro de lo que tendrías que adaptar con o sin ConstructPro.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <div className="d-grid gap-3">
                      <div className="p-3 rounded-3 bg-white border d-flex align-items-center gap-3">
                        <span className="badge bg-success">✅</span>
                        <div>
                          <h3 className="h6 mb-1">Plan claro antes de la fecha límite de VeriFactu</h3>
                          <p className="mb-0 text-muted small">Checklist accionable para no improvisar la adaptación.</p>
                        </div>
                      </div>
                      <div className="p-3 rounded-3 bg-white border d-flex align-items-center gap-3">
                        <span className="badge bg-secondary">❌</span>
                        <div>
                          <h3 className="h6 mb-1">Sin cambiar tu programa actual</h3>
                          <p className="mb-0 text-muted small">Nos adaptamos a tu ERP y añadimos la trazabilidad que pide AEAT.</p>
                        </div>
                      </div>
                      <div className="p-3 rounded-3 bg-white border d-flex align-items-center gap-3">
                        <span className="badge bg-info text-dark">🔎</span>
                        <div>
                          <h3 className="h6 mb-1">Todo queda registrado</h3>
                          <p className="mb-0 text-muted small">Si AEAT revisa, tienes la evidencia: partes, certificaciones y facturas conectadas.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-4 pb-0 bg-dark text-white">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-semibold mb-3">VeriFactu: el riesgo real de sanción</h2>
              <p className="text-white-50 mb-4">
                La normativa penaliza duplicidades, incoherencias y trazas incompletas. Evita multas que pueden ir de 1.500€ a 400.000€ por obra.
              </p>
              <div className="d-grid gap-3">
                <div className="p-3 rounded-3 bg-white bg-opacity-10 border border-opacity-25">
                  <strong>1.500€</strong> por cada factura sin trazabilidad correcta.
                </div>
                <div className="p-3 rounded-3 bg-white bg-opacity-10 border border-opacity-25">
                  <strong>60.000€</strong> si no puedes demostrar el envío VeriFactu.
                </div>
                <div className="p-3 rounded-3 bg-white bg-opacity-10 border border-opacity-25">
                  <strong>Hasta 400.000€</strong> si se considera ocultación sistemática.
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-4 rounded-4 bg-white text-dark shadow-sm">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h3 className="h5 mb-0">¿Qué evitamos en la primera llamada?</h3>
                  <span className="badge bg-danger-subtle text-danger fw-semibold">Dolor → acción</span>
                </div>
                <ul className="list-unstyled mb-0 d-grid gap-3">
                  <li className="d-flex gap-3 align-items-start">
                    <span className="badge bg-danger">!</span>
                    <div>
                      <strong>Duplicar partes y facturas</strong>
                      <p className="mb-0 text-muted small">Detectamos incoherencias antes de que AEAT te las reclame.</p>
                    </div>
                  </li>
                  <li className="d-flex gap-3 align-items-start">
                    <span className="badge bg-warning text-dark">!</span>
                    <div>
                      <strong>Errores de trazabilidad</strong>
                      <p className="mb-0 text-muted small">Conectamos obra, compras y certificaciones para que nada quede suelto.</p>
                    </div>
                  </li>
                  <li className="d-flex gap-3 align-items-start">
                    <span className="badge bg-success">✓</span>
                    <div>
                      <strong>Plan de adaptación listo</strong>
                      <p className="mb-0 text-muted small">Guía práctica de qué cambiar y cuándo para evitar sanciones.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-4 pb-0">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="d-flex align-items-center gap-2 mb-3">
                <img src={Logo} alt="ConstructPro" width="32" height="32" className="rounded" />
                <span className="text-uppercase text-primary fw-bold small">Resultados medibles</span>
              </div>
              <h2 className="h4 fw-semibold">Impacto real en cifras</h2>
              <p className="text-muted">Menos teoría y más datos: así queda tu operación después de adoptar el flujo VeriFactu.</p>
              <div className="d-grid gap-3">
                {[{ label: 'Tareas administrativas por obra', value: 60 }, { label: 'Desviación media en 18 obras', value: 97.5 }, { label: 'Errores entre oficina y obra', value: 40 }].map((item) => (
                  <div key={item.label} className="p-3 rounded-3 bg-light border">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="fw-semibold">{item.label}</span>
                      <span className="text-primary fw-bold">-{item.value}%</span>
                    </div>
                    <div className="progress" role="progressbar" aria-label={item.label} aria-valuenow={item.value} aria-valuemin="0" aria-valuemax="100">
                      <div
                        className="progress-bar bg-primary"
                        style={{ width: `${Math.min(item.value, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                {[Capture1, Capture2, Capture3].map((src, index) => (
                  <div key={src} className="col-12 col-md-6">
                    <div className="rounded-4 overflow-hidden border shadow-sm h-100">
                      <img src={src} alt={`Captura ConstructPro ${index + 1}`} className="img-fluid w-100" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-4 pb-0 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="p-4 rounded-4 bg-white border h-100 shadow-sm">
                <span className="badge bg-secondary-subtle text-secondary fw-semibold mb-2">Claridad operativa</span>
                <h3 className="h5">Todo conectado</h3>
                <p className="text-muted">Obra, compras, facturas y costes en pantallas fáciles de leer, sin lenguaje corporate.</p>
                <img src={HeroLogo} alt="Logo ConstructPro" width="120" className="mt-3 opacity-75" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="p-4 rounded-4 bg-white border h-100 shadow-sm">
                <span className="badge bg-primary-subtle text-primary fw-semibold mb-2">Ajuste a tu equipo</span>
                <h3 className="h5">Sesión de alineación</h3>
                <p className="text-muted">Nos sentamos con tu equipo para ajustar cómo trabajarán, sin consultorías infinitas.</p>
                <ContactActionGroup
                  className="mt-3"
                  size="md"
                  emailHref={EMAIL_LINKS.constructProInfo}
                  whatsappHref={WHATSAPP_LINKS.constructProInfo}
                  emailLabel="Reserva diagnóstico"
                  whatsappLabel="WhatsApp"
                  variant="outline-primary"
                  whatsappVariant="primary"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="p-4 rounded-4 bg-white border h-100 shadow-sm">
                <span className="badge bg-danger-subtle text-danger fw-semibold mb-2">Enfoque VeriFactu</span>
                <h3 className="h5">AEAT ready</h3>
                <p className="text-muted">Registros listos por si AEAT revisa: trazabilidad completa y evidencias guardadas.</p>
                <div className="d-flex align-items-center gap-2">
                  <span className="display-6 fw-bold text-danger">0</span>
                  <span className="text-muted">sorpresas cuando llegue la inspección.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-4 pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                <h2 className="h4 fw-semibold mb-0">Preguntas frecuentes</h2>
                <span className="badge bg-secondary-subtle text-secondary">Lo que otros preguntan antes de reservar</span>
              </div>
              <div className="accordion" id="faq-constructpro">
                {faqItems.map((item, index) => (
                  <div className="accordion-item" key={item.question}>
                    <h3 className="accordion-header" id={`faq-heading-${index}`}>
                      <button
                        className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq-collapse-${index}`}
                        aria-expanded={index === 0 ? 'true' : 'false'}
                        aria-controls={`faq-collapse-${index}`}
                      >
                        {item.question}
                      </button>
                    </h3>
                    <div
                      id={`faq-collapse-${index}`}
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                      aria-labelledby={`faq-heading-${index}`}
                      data-bs-parent="#faq-constructpro"
                    >
                      <div className="accordion-body">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing pb-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="h4 fw-semibold">Reserva ahora y evita improvisar con VeriFactu</h2>
              <p className="text-muted">Dolor fuerte → solución simple → acción inmediata. Un solo objetivo: tu diagnóstico gratuito.</p>
              <ContactActionGroup
                className="justify-content-center mt-3"
                emailHref={EMAIL_LINKS.constructProInfo}
                whatsappHref={WHATSAPP_LINKS.constructProInfo}
                emailLabel="Reserva diagnóstico gratuito"
                whatsappLabel="Hablar por WhatsApp"
                variant="primary"
                whatsappVariant="outline-primary"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default ConstructProPage;
