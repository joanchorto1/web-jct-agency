import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layouts/layout';
import { WHATSAPP_LINKS } from '../../utils/whatsapp';
import { EMAIL_LINKS } from '../../utils/email';
import Logo from '../../components/img/apple-touch-icon.png';

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

    <div className="section-spacing bg-white text-dark">
      <section className="section-spacing pb-0">
        <div className="container">
          <div className="row align-items-center g-4 flex-column-reverse flex-lg-row">
            <div className="col-lg-6">
              <span className="eyebrow text-uppercase text-primary">ConstructPro para constructoras</span>
              <h1 className="display-5 fw-bold mt-3">
                Evita sanciones VeriFactu y controla tus obras en un único sistema.
              </h1>
              <p className="lead text-muted mt-3">
                Para empresas de construcción que trabajan con partes, certificaciones y facturas y no quieren duplicar trabajo con la nueva normativa.
              </p>
              <ContactActionGroup
                className="mt-4"
                emailHref={EMAIL_LINKS.constructProInfo}
                whatsappHref={WHATSAPP_LINKS.constructProInfo}
                emailLabel="Reserva diagnóstico gratuito"
                whatsappLabel="Hablar por WhatsApp"
              />
              <p className="text-muted small mt-3 mb-0">
                Beneficio claro + urgencia + acción: agenda ahora y evita rehacer la facturación a última hora.
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src={Logo}
                alt="Equipo de obra revisando ConstructPro desde el móvil"
                className="img-fluid rounded-4 shadow"
                style={{ maxWidth: '420px' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-4 pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="p-4 p-md-5 rounded-4 bg-light border">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                  <h2 className="h4 fw-semibold mb-0">Qué ocurre en estos 30 minutos</h2>
                  <span className="badge bg-primary-subtle text-primary fw-semibold">Videollamada rápida</span>
                </div>
                <ul className="list-unstyled mt-3 mb-4 d-grid gap-2 fs-5">
                  <li>• Revisamos cómo certificas y facturas hoy.</li>
                  <li>• Detectamos riesgos de sanción: duplicidades, incoherencias y errores de trazabilidad.</li>
                  <li>• Te entrego un esquema claro de lo que tendrías que adaptar con o sin ConstructPro.</li>
                </ul>
                <div className="d-flex flex-column flex-md-row gap-3">
                  <div className="flex-fill p-3 rounded-3 bg-white border">🔎 Sin instalar nada</div>
                  <div className="flex-fill p-3 rounded-3 bg-white border">❌ Sin cambiar tu programa actual</div>
                  <div className="flex-fill p-3 rounded-3 bg-white border">✅ Plan claro antes de la fecha límite de VeriFactu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-4 pb-0">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 col-xl-8">
              <h2 className="h4 fw-semibold">Resultados reales de nuestros clientes</h2>
              <ul className="list-unstyled d-grid gap-3 mt-4 fs-5 text-start text-lg-center">
                <li>60% menos tareas administrativas por obra</li>
                <li>18 obras controladas con menos del 2,5% de desviación</li>
                <li>40% menos errores entre oficina y obra</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-4 pb-0 bg-dark text-white">
        <div className="container">
          <div className="row justify-content-center text-center text-lg-start align-items-center g-4">
            <div className="col-lg-7">
              <h2 className="fw-semibold">Lo que significa en tu día a día</h2>
              <p className="text-white-50 mt-3">
                Todo queda registrado por si AEAT lo revisa, con pantallas fáciles para ver obras, costes y márgenes. Todo conectado: obra, compras, facturas y costes.
              </p>
              <p className="text-white-50 mb-0">
                Incluimos una sesión con tu equipo para ajustar cómo trabajaréis, sin lenguaje corporativo ni consultorías infinitas.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="d-grid gap-3">
                {quickNumbers.map((item) => (
                  <div key={item.label} className="p-3 rounded-3 bg-opacity-10 bg-white d-flex align-items-center justify-content-between">
                    <span className="display-6 fw-bold text-primary mb-0">{item.value}</span>
                    <span className="fw-semibold">{item.label}</span>
                  </div>
                ))}
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
