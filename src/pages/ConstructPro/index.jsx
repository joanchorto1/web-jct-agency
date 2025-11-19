import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layouts/layout';
import { WHATSAPP_LINKS } from '../../utils/whatsapp';
import { EMAIL_LINKS } from '../../utils/email';

import Logo from '../../components/img/apple-touch-icon.png';
import captura1 from '../../components/img/captura1.png';
import captura2 from '../../components/img/captura2.png';
import captura3 from '../../components/img/captura3.png';

const ReliefControlIcon = ({ label }) => (
  <svg
    role="img"
    aria-label={label}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="22" fill="#E7F1FF" />
    <circle cx="24" cy="24" r="17" stroke="#0D6EFD" strokeWidth="2" />
    <path
      d="M24 15v9l6 6"
      stroke="#0D6EFD"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M15 29h18" stroke="#0D6EFD" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="15" r="2" fill="#0D6EFD" />
  </svg>
);

const ReliefAutomationIcon = ({ label }) => (
  <svg
    role="img"
    aria-label={label}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="22" fill="#E8FFF2" />
    <circle cx="24" cy="24" r="13" stroke="#198754" strokeWidth="2" />
    <path
      d="M24 13v5M24 30v5M13 24h5M30 24h5"
      stroke="#198754"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M29 19 19 29"
      stroke="#198754"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="24" cy="24" r="4" fill="#198754" />
  </svg>
);

const ReliefReportsIcon = ({ label }) => (
  <svg
    role="img"
    aria-label={label}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="44" height="44" rx="8" fill="#FFF5E6" />
    <path
      d="M16 32v-8M24 32V18M32 32V22"
      stroke="#FD7E14"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 36h20"
      stroke="#FD7E14"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M20 14h8l4 4"
      stroke="#FD7E14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ReliefAccessIcon = ({ label }) => (
  <svg
    role="img"
    aria-label={label}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="16" width="40" height="24" rx="12" fill="#F0EDFF" />
    <path
      d="M18 20c1.2-4.2 5.1-7 9.6-6.4 4.6.6 8 4.4 8.4 8.9"
      stroke="#6F42C1"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16 32.5 20.5 37 32 25.5"
      stroke="#6F42C1"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const productScreens = [
  {
    title: 'Presupuestos alineados con la obra',
    description:
      'Configura plantillas de partidas, validaciones y márgenes aprobados antes de enviar cualquier presupuesto de construcción.',
    image: captura1,
    alt: 'Captura del módulo de presupuestos de ConstructPro',
  },
  {
    title: 'Cuadros de mando ejecutivos',
    description:
      'Sigue cada proyecto con indicadores en tiempo real, desviaciones y alertas proactivas para mantener el control de las obras.',
    image: captura2,
    alt: 'Panel principal de ConstructPro con indicadores de margen',
  },
  {
    title: 'Facturación sin errores',
    description:
      'Automatiza certificaciones, partes y facturas conectadas con obra y compras para reducir incidencias en la facturación de constructoras.',
    image: captura3,
    alt: 'Vista del sistema de facturas integradas de ConstructPro',
  },
];

const painPoints = [
  '📋 Los técnicos siguen usando papeles o Excel para los partes de obra.',
  '🧾 Los datos se pierden entre la obra y la facturación.',
  '🕒 No se conoce el coste real por proyecto.',
  '📉 Falta control sobre márgenes y beneficios.',
];

const reliefBenefits = [
  {
    title: 'Control total',
    description:
      'Obras, clientes y costes en tiempo real con trazabilidad completa de cada partida para un control de obras fiable.',
    icon: ReliefControlIcon,
    alt: "Icono control de operaciones",
  },
  {
    title: 'Automatización',
    description:
      "Del parte aprobado al presupuesto y de ahí a la factura sin copiar datos, reduciendo errores y tiempos administrativos.",
    icon: ReliefAutomationIcon,
    alt: 'Icono automatización',
  },
  {
    title: 'Informes y márgenes',
    description:
      'Conoce el beneficio de cada obra con paneles, alertas de desviaciones y reportes para la toma de decisiones.',
    icon: ReliefReportsIcon,
    alt: 'Icono informes',
  },
  {
    title: 'Acceso desde cualquier lugar',
    description:
      'Oficina, móvil u obra con permisos por roles y registro de cambios para mantener la seguridad y la trazabilidad.',
    icon: ReliefAccessIcon,
    alt: 'Icono acceso remoto',
  },
];

const processPhases = [
  {
    title: 'Diagnóstico gratuito',
    duration: '1 semana',
    description: 'Analizamos cómo trabajas, qué herramientas usas y dónde se producen los cuellos de botella.',
    outcome: 'Informe de cuellos de botella y plan rápido de mejoras.',
  },
  {
    title: 'Proyecto piloto',
    duration: '3-4 semanas',
    description: 'Fase piloto con el equipo clave para validar flujos, permisos e informes en pocas semanas.',
    outcome: 'Proceso validado con métricas de adopción y lista de verificación de puesta en marcha.',
  },
  {
    title: 'Implementación completa',
    duration: '6-8 semanas',
    description: 'ERP modular con partes, presupuestos, compras y facturación adaptado a tu negocio.',
    outcome: 'Suite configurada, datos migrados y formación para equipos de oficina y obra.',
  },
  {
    title: 'Mantenimiento y evolución',
    duration: 'Seguimiento mensual',
    description: 'Soporte continuo, revisiones periódicas y nuevas funcionalidades según las necesidades de la obra.',
    outcome: 'Hoja de ruta compartida, mejoras trimestrales y revisión de indicadores de margen.',
  },
];

const testimonials = [
  {
    quote: '“Hemos reducido un 60% el tiempo administrativo semanal.”',
    detail: 'Digitalizamos los partes y automatizamos las facturas para pasar de 10 a 4 horas de tareas manuales cada semana.',
    name: 'Jordi Riba',
    role: 'Director de operaciones',
    company: 'Obras Mediterránea',
    metric: '60% menos tiempo administrativo',
  },
  {
    quote: '“Veo el margen de cada proyecto con desviaciones inferiores al 2,5%.”',
    detail: 'Paneles de control con costes actualizados y alertas que mantienen 18 obras por debajo del 2,5% de desviación presupuestaria.',
    name: 'Núria Villalonga',
    role: 'Directora financiera',
    company: 'Construcciones Delta',
    metric: '18 obras controladas con <2,5% de desviación',
  },
  {
    quote: '“Todo el equipo trabaja con la misma información y sin errores duplicados.”',
    detail: 'Portal compartido entre oficina, jefes de obra y subcontratas que ha reducido un 40% las incidencias por versiones duplicadas en planos y partes.',
    name: 'Laia Casellas',
    role: 'Responsable de proyectos',
    company: 'Grupo Tirrena',
    metric: '40% menos incidencias por versiones duplicadas',
  },
];

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
      d="M12 .5C5.7.5.9 5.3.9 11.6c0 2 .5 3.9 1.5 5.6L.5 23.5l6.5-1.7c1.6.8 3.5 1.3 5.5 1.3 6.3 0 11.1-4.8 11.1-11.1S18.3.5 12 .5z"
    />
    <path
      fill="#FFF"
      d="M17.3 14.1c-.3-.2-2-.9-2.3-.9-.3 0-.4-.1-.6.2-.2.3-.8.9-1 1.1-.2.2-.4.3-.7.1-.3-.2-1.5-.6-2.8-1.7-1-1-1.6-2.1-1.8-2.4-.2-.3 0-.5.1-.7.1-.2.3-.4.4-.6.1-.2.1-.4 0-.6-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4-.2 0-.5 0-.8 0-.3 0-.7.1-1 .4-.3.3-1 1-1 2.5s1 3 1.1 3.2c.1.2 1.9 3 4.6 4.3 3 .1 3.9.2 4.6.1.7-.1 2.4-1 2.8-1.9.4-.9.4-1.6.3-1.8-.1-.2-.4-.3-.7-.5z"
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

const ConstructProPage = () => (
  <Layout stickyVisibility="desktop-only">
    <Helmet>
      <title>ConstructPro | Software de gestión de obras, control de obras y presupuestos</title>
      <meta
        name="description"
        content="ConstructPro es un ERP para empresas de construcción: gestión de obras, control de presupuestos, certificaciones de obra y facturación para constructoras con auditoría continua."
      />
    </Helmet>

    <div className="section-spacing bg-white text-dark">
      <section className="section-spacing pb-0">
        <div className="container">
          <div className="row align-items-center pb-5 g-5 flex-column-reverse flex-lg-row">
            <div className="col-lg-6">
              <span className="eyebrow text-uppercase text-primary">
                VeriFactu para empresas de construcción
              </span>
              <h1 className="display-5 fw-bold mt-3">
                Adapta tu empresa de construcción a VeriFactu sin perder el control de la obra
              </h1>
              <p className="lead text-muted mt-3">
                ConstructPro conecta certificaciones, obra y facturación para que cada factura salga lista para la AEAT, sin hojas sueltas ni copias manuales.
              </p>
              <p className="text-muted fst-italic">
                “Unificamos obra, márgenes y facturación en un solo flujo: del parte de obra a la factura VeriFactu, con auditoría continua del proceso.”
              </p>
              <ContactActionGroup
                className="mt-4"
                emailHref={EMAIL_LINKS.constructProInfo}
                whatsappHref={WHATSAPP_LINKS.constructProInfo}
                emailLabel="Revisar si cumplo VeriFactu (email)"
                whatsappLabel="Revisar por WhatsApp"
              />
              <a
                href="#demo-constructpro"
                className="btn btn-outline-secondary btn-lg mt-3"
              >
                Ver demo guiada en 3 minutos
              </a>
              <span className="text-muted d-block mt-2">
                Recibe un diagnóstico rápido sobre riesgos de sanción y cómo adaptar tu empresa en pocas semanas.
              </span>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src={Logo}
                alt="Jefe de obra consultando el estado de una obra desde una tablet"
                className="img-fluid rounded-4 shadow"
                style={{ maxWidth: '420px' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing py-4 bg-light border-top">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <p className="text-muted mb-2">¿Vienes desde el anuncio de Instagram sobre VeriFactu?</p>
              <h2 className="h4 fw-semibold">
                En menos de 30 minutos revisamos si tu empresa de construcción está preparada.
              </h2>
              <p className="text-muted mt-2">
                Analizamos tu forma actual de certificar, facturar y enviar a la AEAT, y te decimos qué tendrías que adaptar sin cambiar todo tu sistema de trabajo.
              </p>
              <ContactActionGroup
                className="justify-content-center mt-3"
                emailHref={EMAIL_LINKS.constructProInfo}
                whatsappHref={WHATSAPP_LINKS.constructProInfo}
                emailLabel="Quiero revisar mi situación"
                whatsappLabel="Prefiero WhatsApp"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-dark text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="eyebrow text-uppercase text-primary">Cumplimiento normativo</span>
              <h2 className="fw-semibold mt-3 text-white">ConstructPro alinea tu empresa con VeriFactu</h2>
              <p className="mt-3 text-white-50">
                Si ya trabajas con certificaciones y facturas, el problema no es generar más documentos: el problema es que cada factura cumpla VeriFactu sin rehacer el trabajo tres veces.
              </p>
              <ul className="list-unstyled d-grid gap-3 mt-4">
                <li className="bg-opacity-10 bg-white text-white rounded-4 p-3">
                  ✔ Cada factura con huella, registro de eventos y trazabilidad completa.
                </li>
                <li className="bg-opacity-10 bg-white text-white rounded-4 p-3">
                  ✔ XML generados automáticamente según el Real Decreto 1007/2023.
                </li>
                <li className="bg-opacity-10 bg-white text-white rounded-4 p-3">
                  ✔ Preparado para integrarse con tu contabilidad sin manipulaciones manuales.
                </li>
              </ul>
              <ContactActionGroup
                className="mt-4"
                emailHref={EMAIL_LINKS.constructProInfo}
                whatsappHref={WHATSAPP_LINKS.constructProInfo}
                emailLabel="Revisar cumplimiento por correo"
                whatsappLabel="Revisar por WhatsApp"
                variant="light"
                whatsappVariant="outline-light"
              />
              <p className="text-white-50 mt-2">Diagnóstico de cumplimiento y hoja de ruta de integración.</p>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src={captura3}
                alt="Pantalla de validación de facturas conforme a VeriFactu"
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="demo-constructpro" className="section-spacing py-5 bg-white border-top">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="eyebrow text-uppercase text-primary">Demo guiada</span>
              <h2 className="fw-semibold mt-3">Recorrido visual en solo 3 minutos</h2>
              <p className="text-muted mt-3">
                Comprueba cómo se conectan presupuestos, partes y facturas en ConstructPro con un flujo real de obra. El vídeo
                muestra cómo se actualizan los márgenes y cómo auditamos cada paso.
              </p>
              <a
                className="btn btn-primary btn-lg mt-3"
                href="https://www.youtube.com/embed/g4gTtl5RCB4?si=uUp_lK_wTj_CixmK"
                target="_blank"
                rel="noreferrer"
              >
                Ver demo guiada en 3 minutos
              </a>
            </div>
            <div className="col-lg-6">
              <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow">
                <iframe
                  src="https://www.youtube.com/embed/g4gTtl5RCB4?si=uUp_lK_wTj_CixmK"
                  title="Demo guiada de ConstructPro"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-light">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="fw-semibold">Una suite visual para dirigir la operativa</h2>
              <p className="text-muted mt-3">
                Visualiza presupuestos de construcción, seguimiento de márgenes y facturación auditada en pantallas diseñadas para directivos y capataces.
              </p>
            </div>
          </div>
          <div className="row g-4 mt-4">
            {productScreens.map((screen) => (
              <div className="col-12 col-md-6 col-lg-4" key={screen.title}>
                <div className="card h-100 border-0 shadow-sm overflow-hidden">
                  <img src={screen.image} alt={screen.alt} className="card-img-top" />
                  <div className="card-body p-4">
                    <h3 className="h5 fw-semibold">{screen.title}</h3>
                    <p className="text-muted mb-0">{screen.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="fw-semibold">Si te identificas con alguno de estos puntos, es hora de cambiar</h2>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-lg-8">
              <ul className="list-unstyled fs-5 d-grid gap-3">
                {painPoints.map((point) => (
                  <li key={point} className="p-4 bg-white shadow-sm rounded-4">
                    {point}
                  </li>
                ))}
              </ul>
              <ContactActionGroup
                className="justify-content-center mt-4"
                emailHref={EMAIL_LINKS.constructProInfo}
                whatsappHref={WHATSAPP_LINKS.constructProInfo}
                emailLabel="Solicitar análisis por correo"
                whatsappLabel="Solicitar por WhatsApp"
                variant="outline-primary"
                whatsappVariant="outline-primary"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <div className="row justify-content-between align-items-center mb-5">
            <div className="col-lg-5">
              <span className="eyebrow text-uppercase text-primary">Alivio</span>
              <h2 className="fw-semibold mt-3">Centraliza todo con ConstructPro</h2>
              <p className="text-muted mt-3">
                Gestión de obras, presupuestos, partes y facturación en un único sistema conectado. Cada equipo trabaja con la misma información y cada decisión se basa en datos actualizados.
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
            {reliefBenefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <div className="col" key={benefit.title}>
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className="me-3 flex-shrink-0">
                          <IconComponent label={benefit.alt} />
                        </div>
                        <h3 className="h5 mb-0">{benefit.title}</h3>
                      </div>
                      <p className="text-muted mb-0">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-light">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="fw-semibold">De una auditoría gratuita a una solución a medida</h2>
              <p className="text-muted mt-3">No vendemos software: diseñamos soluciones para gestión de obras y control de proyecto, fase a fase.</p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-4">
            {processPhases.map((phase) => (
              <div className="col" key={phase.title}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="h5 fw-semibold">{phase.title}</h3>
                    <p className="text-primary fw-semibold mb-2">{phase.duration}</p>
                    <p className="text-muted mb-2">{phase.description}</p>
                    <p className="mb-0 fw-medium">Resultado tangible: {phase.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <div className="row justify-content-between align-items-center mb-5">
            <div className="col-lg-6">
              <span className="eyebrow text-uppercase text-primary">Casos y resultados</span>
              <h2 className="fw-semibold mt-3">Empresas como la tuya ya han recuperado horas semanales</h2>
              <p className="text-muted mt-3">
                Validamos resultados con datos y testimonios. Nos integramos con tu equipo y compartimos indicadores de ahorro en tiempo real.
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {testimonials.map((item) => (
              <div className="col" key={item.quote}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4 d-flex flex-column">
                    <p className="fs-5 fw-semibold">{item.quote}</p>
                    <p className="text-muted mt-3 mb-0">{item.detail}</p>
                    <div className="mt-4">
                      <div className="fw-semibold">{item.name}</div>
                      <div className="text-muted">{item.role} · {item.company}</div>
                        <span className="badge bg-light text-primary mt-3" aria-label={item.metric}>
                          {item.metric}
                        </span>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <ContactActionGroup
              className="justify-content-center"
              emailHref={EMAIL_LINKS.constructProInfo}
              whatsappHref={WHATSAPP_LINKS.constructProInfo}
              emailLabel="Solicitar auditoría por correo"
              whatsappLabel="Hablar por WhatsApp"
            />
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default ConstructProPage;
