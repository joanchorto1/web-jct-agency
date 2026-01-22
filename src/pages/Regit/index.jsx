import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layouts/layout';
import RegitLogo from '../../components/img/regit-logo.svg';
import RegitWordmark from '../../components/img/regit-wordmark.svg';
import './Regit.css';

const descriptionItems = [
  'REGIT es una solución de control horario pensada para empresas pequeñas que necesitan cumplir la normativa sin complicarse.',
  'Centraliza fichajes, turnos y ausencias en un panel simple, con acceso desde móvil y escritorio.',
  'La información queda ordenada, lista para inspecciones y para tomar decisiones rápidas sin hojas de cálculo.',
];

const featureItems = [
  'Fichaje rápido desde móvil, tablet o PC.',
  'Geolocalización opcional y registro de incidencias.',
  'Gestión de turnos, descansos y vacaciones.',
  'Exportaciones automáticas para gestoría o inspección.',
  'Alertas de jornadas incompletas o fichajes duplicados.',
  'Usuarios y permisos por rol para cada responsable.',
];

const companyProfile = [
  'Negocios de 3 a 50 personas que quieren orden sin software complejo.',
  'Empresas con equipos mixtos: oficina, almacén, tiendas o movilidad.',
  'Direcciones que necesitan visibilidad diaria sin dedicar horas a revisar fichajes.',
];

const problemsSolved = [
  'Fichajes perdidos o inconsistentes que generan discusiones internas.',
  'Desorden con horas extra, descansos o bolsas de horas.',
  'Tiempo perdido cada mes preparando informes para gestoría.',
  'Falta de trazabilidad ante una inspección laboral.',
];

const advantages = [
  'Implementación rápida: en una mañana puedes tener al equipo fichando.',
  'Panel claro con métricas útiles, sin menús interminables.',
  'Soporte humano para resolver dudas sin tickets eternos.',
];

const legalAdvantages = [
  'Registro horario conforme a la normativa vigente.',
  'Histórico de fichajes accesible y exportable durante el periodo legal.',
  'Auditoría sencilla con evidencias claras por empleado.',
];

const pricingItems = [
  {
    title: 'Plan básico',
    description: 'Para equipos pequeños que solo necesitan fichar y exportar informes mensuales.',
  },
  {
    title: 'Plan avanzado',
    description: 'Incluye turnos, incidencias, permisos por rol y automatización de avisos.',
  },
  {
    title: 'Plan personalizado',
    description: 'Adaptado a empresas con varios centros o necesidades específicas de reporte.',
  },
];

const conclusionItems = [
  'REGIT reduce el caos del control horario y devuelve tiempo a tu equipo.',
  'Cumples la ley sin fricción y con datos claros cada día.',
  'Si quieres orden y sencillez, esta es la herramienta correcta.',
];

const RegitPage = () => (
  <Layout stickyVisibility="desktop-only">
    <Helmet>
      <title>REGIT | Control horario sencillo y ordenado</title>
      <meta
        name="description"
        content="REGIT es un control horario sencillo y ordenado para empresas pequeñas. Fichaje rápido, informes claros y cumplimiento legal sin complicaciones."
      />
    </Helmet>

    <div className="regit-page bg-white text-dark">
      <section className="section-spacing regit-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="eyebrow text-uppercase text-primary">Solución de control horario</span>
              <h1 className="display-5 fw-bold mt-3">REGIT</h1>
              <p className="lead text-muted mt-3">
                Control horario sencillo y ordenado para empresas pequeñas.
              </p>
              <div className="regit-hero__badge">
                <img src={RegitLogo} alt="Logo de Regit" />
                <span>Gestión clara de fichajes</span>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="regit-hero__logo">
                <img src={RegitWordmark} alt="Logotipo Regit con subtítulo" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-light">
        <div className="container narrow-container">
          <h2 className="fw-semibold">DESCRIPCIÓN</h2>
          <ul className="list-unstyled mt-4 d-grid gap-3">
            {descriptionItems.map((item) => (
              <li key={item} className="d-flex gap-3 align-items-start">
                <span className="text-primary fw-bold">•</span>
                <span className="text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <h2 className="fw-semibold">FUNCIONALIDADES</h2>
              <ul className="list-unstyled mt-4 d-grid gap-3">
                {featureItems.map((item) => (
                  <li key={item} className="d-flex gap-3 align-items-start">
                    <span className="text-primary fw-bold">✔</span>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <h2 className="fw-semibold">PERFIL DE EMPRESA</h2>
              <ul className="list-unstyled mt-4 d-grid gap-3">
                {companyProfile.map((item) => (
                  <li key={item} className="d-flex gap-3 align-items-start">
                    <span className="text-primary fw-bold">→</span>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <h2 className="fw-semibold">PROBLEMAS QUE RESUELVE</h2>
              <ul className="list-unstyled mt-4 d-grid gap-3">
                {problemsSolved.map((item) => (
                  <li key={item} className="d-flex gap-3 align-items-start">
                    <span className="text-danger fw-bold">•</span>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <h2 className="fw-semibold">VENTAJAS</h2>
              <ul className="list-unstyled mt-4 d-grid gap-3">
                {advantages.map((item) => (
                  <li key={item} className="d-flex gap-3 align-items-start">
                    <span className="text-primary fw-bold">✓</span>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container narrow-container">
          <h2 className="fw-semibold">VENTAJAS LEGALES</h2>
          <ul className="list-unstyled mt-4 d-grid gap-3">
            {legalAdvantages.map((item) => (
              <li key={item} className="d-flex gap-3 align-items-start">
                <span className="text-primary fw-bold">•</span>
                <span className="text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-spacing bg-light">
        <div className="container">
          <h2 className="fw-semibold text-center">PRECIOS</h2>
          <div className="row g-4 mt-1">
            {pricingItems.map((item) => (
              <div key={item.title} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm regit-card">
                  <div className="card-body p-4">
                    <h3 className="h5 fw-semibold">{item.title}</h3>
                    <p className="text-muted mb-0">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-muted text-center mt-4 mb-0">
            Solicita condiciones según número de empleados y centros de trabajo.
          </p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container narrow-container">
          <h2 className="fw-semibold">CONCLUSIÓN</h2>
          <ul className="list-unstyled mt-4 d-grid gap-3">
            {conclusionItems.map((item) => (
              <li key={item} className="d-flex gap-3 align-items-start">
                <span className="text-primary fw-bold">•</span>
                <span className="text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default RegitPage;
