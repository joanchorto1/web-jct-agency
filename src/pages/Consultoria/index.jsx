import React from 'react';
import { Button } from 'react-bootstrap';
import Layout from '../../components/layouts/layout';
import InlineCTAGroup from '../../components/cta/InlineCTAGroup';
import { WHATSAPP_LINKS } from '../../utils/whatsapp';

const painPoints = [
  'Procesos manuales que nadie ha cuestionado.',
  'Información repartida entre Excel, correos y personas.',
  'Decisiones tomadas sin datos fiables.',
  'Herramientas que se usan “a medias”.',
  'Dependencia de personas clave que bloquean el crecimiento.',
  'El resultado es siempre el mismo: más horas, más estrés y la sensación constante de ir apagando fuegos.',
];

const consultingPositioning = [
  'No empiezo recomendando herramientas. Empiezo entendiendo cómo funciona tu empresa de verdad.',
  'Mi trabajo es analizar procesos, detectar ineficiencias y diseñar una estructura digital que tenga sentido para tu negocio, tu equipo y tu volumen real.',
  'A veces implica software. A veces implica cambiar hábitos. A veces implica dejar de hacer cosas.',
  'Y sí, eso incomoda. Pero funciona.',
];

const analysisAreas = [
  'Procesos internos y flujos de trabajo.',
  'Gestión administrativa y facturación.',
  'Uso real de herramientas digitales.',
  'Duplicidades, errores y tareas sin valor.',
  'Dependencias críticas de personas o sistemas.',
  'Impacto de cambios legales o de crecimiento.',
];

const consultingProcess = [
  {
    title: 'Diagnóstico',
    description:
      'Analizo tu situación actual, procesos y puntos críticos. Aquí salen verdades incómodas, aviso.',
  },
  {
    title: 'Propuesta de mejora',
    description:
      'Defino qué cambiar, qué automatizar y qué eliminar. Prioridades claras y acciones concretas.',
  },
  {
    title: 'Acompañamiento',
    description: 'Te ayudo a implementar los cambios sin paralizar la empresa. Sin dependencia eterna. Sin venderte horas por venderlas.',
  },
];

const outcomes = [
  'Reducción real de tiempo perdido.',
  'Menos errores y reprocesos.',
  'Procesos claros y replicables.',
  'Mejora en la toma de decisiones.',
  'Tranquilidad operativa y control.',
  'Si al final no ves valor, algo habré hecho mal. Y no suele pasar.',
];

const suitableFor = [
  'Diriges una empresa y te falta control real.',
  'Estás creciendo o quieres hacerlo sin caos.',
  'Sabes que algo no funciona, pero no sabes por dónde empezar.',
  'Quieres soluciones prácticas, no discursos.',
];

const notFor = [
  'Buscas “algo rápido y barato”.',
  'No estás dispuesto a cambiar nada.',
  'Esperas que la tecnología lo haga todo sola.',
  'Filtrar también es parte del trabajo.',
];

const ConsultingPage = () => (
  <Layout stickyVisibility="desktop-only">
    <section className="section-spacing">
      <div className="container narrow-container">
        <span className="eyebrow text-uppercase">Página de consultoría</span>
        <h1 className="display-6 fw-bold mt-3">Consultoría en digitalización y eficiencia empresarial</h1>
        <p className="lead text-muted mt-3">
          Identifico dónde pierdes tiempo y dinero en tu empresa y diseño un sistema para eliminarlo. Sin humo. Sin teoría.
          Sin proyectos eternos.
        </p>
        <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
          <Button
            href={WHATSAPP_LINKS.reserveDiagnostic}
            size="lg"
            variant="primary"
            className="shadow-sm"
          >
            Solicitar sesión de diagnóstico
          </Button>
        </div>
        <div className="d-flex flex-column flex-md-row gap-3 mt-4">
          <div className="d-flex align-items-start gap-2">
            <span className="text-primary fw-bold">✔</span>
            <span className="fw-semibold">Enfoque práctico</span>
          </div>
          <div className="d-flex align-items-start gap-2">
            <span className="text-primary fw-bold">✔</span>
            <span className="fw-semibold">Resultados medibles</span>
          </div>
          <div className="d-flex align-items-start gap-2">
            <span className="text-primary fw-bold">✔</span>
            <span className="fw-semibold">Pensado para empresarios, no para técnicos</span>
          </div>
        </div>
      </div>
    </section>

    <section className="section-spacing bg-white">
      <div className="container narrow-container">
        <span className="eyebrow text-uppercase text-primary">El problema real</span>
        <h2 className="fw-semibold mt-3">El problema no es que trabajes mucho. Es que trabajas mal organizado.</h2>
        <p className="text-muted mt-3">La mayoría de empresas no tienen un problema de esfuerzo, sino de sistema.</p>
        <ul className="list-unstyled mt-4 d-grid gap-3">
          {painPoints.map((point) => (
            <li key={point} className="d-flex gap-3 align-items-start">
              <span className="text-primary fw-bold">•</span>
              <span className="text-muted">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="section-spacing">
      <div className="container narrow-container">
        <span className="eyebrow text-uppercase text-primary">Qué es esta consultoría (y qué no)</span>
        <h2 className="fw-semibold mt-3">Esto no es venderte software</h2>
        <div className="d-grid gap-3 mt-4">
          {consultingPositioning.map((item) => (
            <p key={item} className="text-muted mb-0">{item}</p>
          ))}
        </div>
      </div>
    </section>

    <section className="section-spacing bg-white">
      <div className="container">
        <div className="row justify-content-between align-items-start gy-4">
          <div className="col-lg-5">
            <span className="eyebrow text-uppercase text-primary">Qué trabajo contigo</span>
            <h2 className="fw-semibold mt-3">Áreas que analizamos</h2>
            <p className="text-muted mt-3">No miro “qué usas”. Miro qué te frena.</p>
          </div>
          <div className="col-lg-6">
            <ul className="list-unstyled d-grid gap-3 mb-0">
              {analysisAreas.map((area) => (
                <li key={area} className="d-flex gap-3 align-items-start">
                  <span className="text-primary fw-bold">→</span>
                  <span className="text-muted">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="section-spacing">
      <div className="container">
        <div className="row justify-content-between align-items-start gy-4">
          <div className="col-lg-5">
            <span className="eyebrow text-uppercase text-primary">Cómo funciona la consultoría</span>
            <h2 className="fw-semibold mt-3">Proceso claro, sin rodeos</h2>
          </div>
          <div className="col-lg-6">
            <div className="row gy-3">
              {consultingProcess.map((step, index) => (
                <div className="col-12" key={step.title}>
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center gap-3 mb-2">
                        <span className="badge bg-primary-subtle text-primary fw-semibold fs-6 rounded-pill">
                          {index + 1}
                        </span>
                        <h3 className="h5 fw-semibold mb-0">{step.title}</h3>
                      </div>
                      <p className="text-muted mb-0">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-spacing bg-white">
      <div className="container narrow-container">
        <span className="eyebrow text-uppercase text-primary">Qué obtienes</span>
        <h2 className="fw-semibold mt-3">Resultados, no informes bonitos</h2>
        <ul className="list-unstyled d-grid gap-3 mt-4">
          {outcomes.map((result) => (
            <li key={result} className="d-flex gap-3 align-items-start">
              <span className="text-primary fw-bold">•</span>
              <span className="text-muted">{result}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="section-spacing">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6">
            <span className="eyebrow text-uppercase text-primary">Para quién es esta consultoría</span>
            <h2 className="fw-semibold mt-3">Esto es para ti si…</h2>
            <ul className="list-unstyled d-grid gap-3 mt-3 mb-0">
              {suitableFor.map((item) => (
                <li key={item} className="d-flex gap-3 align-items-start">
                  <span className="text-primary fw-bold">✔</span>
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-6">
            <span className="eyebrow text-uppercase text-primary">Y no es para ti si…</span>
            <h2 className="fw-semibold mt-3">Filtrar también es parte del trabajo.</h2>
            <ul className="list-unstyled d-grid gap-3 mt-3 mb-0">
              {notFor.map((item) => (
                <li key={item} className="d-flex gap-3 align-items-start">
                  <span className="text-danger fw-bold">✕</span>
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="section-spacing bg-white">
      <div className="container narrow-container">
        <span className="eyebrow text-uppercase text-primary">Autoridad (sin fardar)</span>
        <h2 className="fw-semibold mt-3">Experiencia aplicada, no teoría</h2>
        <p className="text-muted mt-3">
          Trabajo con empresas reales, con equipos reales y problemas reales. He diseñado e implementado sistemas de gestión,
          facturación y automatización que se usan cada día para trabajar mejor, no para presumir.
        </p>
        <p className="text-muted mb-0">No vendo promesas. Trabajo con procesos, datos y resultados.</p>
      </div>
    </section>

    <section className="section-spacing">
      <div className="container narrow-container text-center text-lg-start">
        <span className="eyebrow text-uppercase text-primary">CTA final</span>
        <h2 className="fw-semibold mt-3">¿Tiene sentido esta consultoría para tu empresa?</h2>
        <p className="text-muted mt-3">
          En una sesión breve analizamos tu situación y te digo, con total claridad, si puedo ayudarte o no.
        </p>
        <InlineCTAGroup
          className="mt-4 justify-content-center justify-content-lg-start"
          primaryLabel="Solicitar sesión de diagnóstico"
          primaryHref={WHATSAPP_LINKS.reserveDiagnostic}
          secondaryLabel="Contacta por WhatsApp"
          secondaryHref={WHATSAPP_LINKS.generalInquiry}
          primaryVariant="primary"
          secondaryVariant="outline-primary"
        />
        <p className="text-muted small mt-4 mb-0">Sin compromiso. Sin presión comercial. Solo claridad.</p>
      </div>
    </section>
  </Layout>
);

export default ConsultingPage;
