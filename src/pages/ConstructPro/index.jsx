import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layouts/layout';
import { WHATSAPP_LINKS } from '../../utils/whatsapp';

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
    title: 'Presupuestos alineados con obra',
    description:
      'Configura plantillas de partidas, validaciones y márgenes aprobados antes de enviar cualquier presupuesto de construcción.',
    image: captura1,
    alt: 'Captura del módulo de presupuestos de ConstructPro',
  },
  {
    title: 'Cuadros de mando ejecutivos',
    description:
      'Sigue cada proyecto con indicadores en tiempo real, desviaciones y alertas proactivas para el control de obras.',
    image: captura2,
    alt: 'Dashboard principal de ConstructPro con indicadores de margen',
  },
  {
    title: 'Facturación sin errores',
    description:
      'Automatiza certificaciones, partes y facturas conectadas a obra y compras para reducir incidencias en la facturación para constructoras.',
    image: captura3,
    alt: 'Vista del sistema de facturas integradas de ConstructPro',
  },
];

const painPoints = [
  '📋 Los técnicos siguen usando papeles o Excel para partes.',
  '🧾 Los datos se pierden entre obra y facturación.',
  '🕒 No se conoce el coste real por proyecto.',
  '📉 Falta control sobre márgenes y beneficios.',
];

const reliefBenefits = [
  {
    title: 'Control total',
    description: 'Obras, clientes y costes en tiempo real con trazabilidad completa de cada partida para un control de obras fiable.',
    icon: ReliefControlIcon,
    alt: "Icono control de operaciones",
  },
  {
    title: 'Automatización',
    description: "Del parte aprobado al presupuesto y de ahí a la factura sin copiar datos, reduciendo errores y tiempos administrativos.",
    icon: ReliefAutomationIcon,
    alt: 'Icona automatització',
  },
  {
    title: 'Informes y márgenes',
    description: 'Conoce el beneficio de cada obra con dashboards, alertas de desviaciones y reportes para la toma de decisiones.',
    icon: ReliefReportsIcon,
    alt: 'Icona informes',
  },
  {
    title: 'Acceso desde cualquier lugar',
    description: 'Oficina, mòbil u obra amb permisos per rols i registre de canvis per mantenir la seguretat i traçabilitat.',
    icon: ReliefAccessIcon,
    alt: 'Icona accés remot',
  },
];

const processPhases = [
  {
    title: 'Diagnóstico gratuito',
    description: 'Analizamos cómo trabajas, qué herramientas usas y dónde se producen los cuellos de botella.',
  },
  {
    title: 'Proyecto piloto',
    description: 'Fase piloto amb l\'equip clau per validar fluxos, permisos i informes en poques setmanes.',
  },
  {
    title: 'Implementación completa',
    description: 'ERP modular amb mòduls de parts, pressupostos, compres i facturació adaptat al teu negoci.',
  },
  {
    title: 'Mantenimiento y evolución',
    description: 'Suport continu, revisions periòdiques i noves funcionalitats segons necessitats de obra.',
  },
];

const testimonials = [
  {
    quote: '“Reducimos un 60% el tiempo administrativo.”',
    detail: 'Digitalización de parts i automatització de factures per a empreses de obra.',
  },
  {
    quote: '“Ahora sé exactamente el margen de cada proyecto.”',
    detail: 'Quadres de comandament amb costos actualitzats i alertes de desviació.',
  },
  {
    quote: '“Todo el equipo trabaja con la misma información.”',
    detail: 'Portal compartit entre oficina, cap d\'obra i subcontractes.',
  },
];

const verifactuHighlights = [
  'Trazabilitat completa de cada factura amb segell digital i registre d’esdeveniments.',
  'Generació automàtica dels fitxers XML i justificants requerits pel Reial Decret 1007/2023.',
  'Connexions amb programari comptable i CRM per evitar manipulacions no autoritzades.',
];

const ConstructProPage = () => (
  <Layout>
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
              <span className="eyebrow text-uppercase text-primary">Solución ERP profesional</span>
              <h1 className="display-5 fw-bold mt-3">
                Gestiona tu empresa de construcción con datos fiables y procesos integrados
              </h1>
              <p className="lead text-muted mt-3">
                ConstructPro conecta oficina técnica, equipos de obra y administración en un único entorno seguro para decisiones basadas en datos.
              </p>
              <p className="text-muted fst-italic">
                “Reducimos papeleo, aseguramos márgenes y automatizamos el ciclo presupuesto–ejecución–facturación amb auditories contínues.”
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                <a href={WHATSAPP_LINKS.constructProInfo} className="btn btn-primary btn-lg">
                  Solicitar auditoría
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" className="ms-2" xmlns="http://www.w3.org/2000/svg" focusable="false">
                    <path fill="#25D366" d="M12 .5C5.7.5.9 5.3.9 11.6c0 2 .5 3.9 1.5 5.6L.5 23.5l6.5-1.7c1.6.8 3.5 1.3 5.5 1.3 6.3 0 11.1-4.8 11.1-11.1S18.3.5 12 .5z"/>
                    <path fill="#FFF" d="M17.3 14.1c-.3-.2-2-.9-2.3-.9-.3 0-.4-.1-.6.2-.2.3-.8.9-1 1.1-.2.2-.4.3-.7.1-.3-.2-1.5-.6-2.8-1.7-1-1-1.6-2.1-1.8-2.4-.2-.3 0-.5.1-.7.1-.2.3-.4.4-.6.1-.2.1-.4 0-.6-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4-.2 0-.5 0-.8 0-.3 0-.7.1-1 .4-.3.3-1 1-1 2.5s1 3 1.1 3.2c.1.2 1.9 3 4.6 4.3 3 .1 3.9.2 4.6.1.7-.1 2.4-1 2.8-1.9.4-.9.4-1.6.3-1.8-.1-.2-.4-.3-.7-.5z"/>
                  </svg>
                </a>
                <span className="text-muted align-self-center">
                  Descubre cuánto puedes ahorrar en tiempo y costes.
                </span>
              </div>
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
              <div className="text-center mt-4">
                <a href={WHATSAPP_LINKS.constructProInfo} className="btn btn-outline-primary">
                  Solicitar análisis
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" className="ms-2" xmlns="http://www.w3.org/2000/svg" focusable="false">
                    <path fill="#25D366" d="M12 .5C5.7.5.9 5.3.9 11.6c0 2 .5 3.9 1.5 5.6L.5 23.5l6.5-1.7c1.6.8 3.5 1.3 5.5 1.3 6.3 0 11.1-4.8 11.1-11.1S18.3.5 12 .5z"/>
                    <path fill="#FFF" d="M17.3 14.1c-.3-.2-2-.9-2.3-.9-.3 0-.4-.1-.6.2-.2.3-.8.9-1 1.1-.2.2-.4.3-.7.1-.3-.2-1.5-.6-2.8-1.7-1-1-1.6-2.1-1.8-2.4-.2-.3 0-.5.1-.7.1-.2.3-.4.4-.6.1-.2.1-.4 0-.6-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4-.2 0-.5 0-.8 0-.3 0-.7.1-1 .4-.3.3-1 1-1 2.5s1 3 1.1 3.2c.1.2 1.9 3 4.6 4.3 3 .1 3.9.2 4.6.1.7-.1 2.4-1 2.8-1.9.4-.9.4-1.6.3-1.8-.1-.2-.4-.3-.7-.5z"/>
                  </svg>
                </a>
              </div>
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
                    <p className="text-muted mt-3 mb-0">{phase.description}</p>
                  </div>
                </div>
              </div>
            ))}
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
                Preparamos procesos, datos y documentos para que cada factura cumpla las nuevas obligaciones fiscales y se pueda justificar ante la Agencia Tributaria.
              </p>
              <ul className="list-unstyled d-grid gap-3 mt-4">
                {verifactuHighlights.map((item) => (
                  <li key={item} className="bg-opacity-10 bg-white text-white rounded-4 p-3">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                <a href={WHATSAPP_LINKS.constructProInfo} className="btn btn-outline-light btn-lg">
                  Planificar hoja de ruta
                  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" className="ms-2" xmlns="http://www.w3.org/2000/svg" focusable="false">
                    <path fill="#25D366" d="M12 .5C5.7.5.9 5.3.9 11.6c0 2 .5 3.9 1.5 5.6L.5 23.5l6.5-1.7c1.6.8 3.5 1.3 5.5 1.3 6.3 0 11.1-4.8 11.1-11.1S18.3.5 12 .5z"/>
                    <path fill="#FFF" d="M17.3 14.1c-.3-.2-2-.9-2.3-.9-.3 0-.4-.1-.6.2-.2.3-.8.9-1 1.1-.2.2-.4.3-.7.1-.3-.2-1.5-.6-2.8-1.7-1-1-1.6-2.1-1.8-2.4-.2-.3 0-.5.1-.7.1-.2.3-.4.4-.6.1-.2.1-.4 0-.6-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4-.2 0-.5 0-.8 0-.3 0-.7.1-1 .4-.3.3-1 1-1 2.5s1 3 1.1 3.2c.1.2 1.9 3 4.6 4.3 3 .1 3.9.2 4.6.1.7-.1 2.4-1 2.8-1.9.4-.9.4-1.6.3-1.8-.1-.2-.4-.3-.7-.5z"/>
                  </svg>
                </a>
                <span className="text-white-50 align-self-center">Informe de cumplimiento y roadmap de integración.</span>
              </div>
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
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <a href={WHATSAPP_LINKS.constructProInfo} className="btn btn-primary btn-lg">
              Solicitar auditoría
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" className="ms-2" xmlns="http://www.w3.org/2000/svg" focusable="false">
                <path fill="#25D366" d="M12 .5C5.7.5.9 5.3.9 11.6c0 2 .5 3.9 1.5 5.6L.5 23.5l6.5-1.7c1.6.8 3.5 1.3 5.5 1.3 6.3 0 11.1-4.8 11.1-11.1S18.3.5 12 .5z"/>
                <path fill="#FFF" d="M17.3 14.1c-.3-.2-2-.9-2.3-.9-.3 0-.4-.1-.6.2-.2.3-.8.9-1 1.1-.2.2-.4.3-.7.1-.3-.2-1.5-.6-2.8-1.7-1-1-1.6-2.1-1.8-2.4-.2-.3 0-.5.1-.7.1-.2.3-.4.4-.6.1-.2.1-.4 0-.6-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4-.2 0-.5 0-.8 0-.3 0-.7.1-1 .4-.3.3-1 1-1 2.5s1 3 1.1 3.2c.1.2 1.9 3 4.6 4.3 3 .1 3.9.2 4.6.1.7-.1 2.4-1 2.8-1.9.4-.9.4-1.6.3-1.8-.1-.2-.4-.3-.7-.5z"/>
              </svg>
              </a>
            </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default ConstructProPage;
