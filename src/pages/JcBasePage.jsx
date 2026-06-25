import React from 'react';
import { Helmet } from 'react-helmet';
import fecsysLogo from '../components/img/fecsys-logo.png';

const coreAreas = [
  {
    title: 'Base común para todo el negocio',
    text: 'Fecsys reúne la parte comercial, administrativa y operativa dentro de una misma base, para que la empresa deje de trabajar con información repartida y gane una visión mucho más clara del día a día.',
  },
  {
    title: 'Verticales que hablan el idioma del sector',
    text: 'La propuesta no es obligar a todas las empresas a funcionar igual, sino ofrecer variantes específicas para cada actividad: servicios técnicos, talleres, alquiler de maquinaria y despachos que trabajan por proyectos.',
  },
  {
    title: 'Implantación con sentido práctico',
    text: 'Fecsys está planteado para implantarse con criterio comercial: priorizando el proceso principal de cada empresa, reduciendo fricción y evitando proyectos eternos difíciles de asumir.',
  },
  {
    title: 'Más control sin complicar la operativa',
    text: 'El objetivo es que dirección, administración y operación puedan trabajar con más orden, menos dependencia de Excel, mensajes sueltos y tareas repetidas.',
  },
];

const audiences = [
  {
    title: 'Empresas de servicios técnicos',
    text: 'Negocios que necesitan coordinar avisos, intervenciones, contratos de mantenimiento y facturación sin perder tiempo persiguiendo información.',
  },
  {
    title: 'Talleres y empresas de reparación',
    text: 'Equipos que quieren controlar mejor órdenes, piezas, mano de obra, seguimiento al cliente y rentabilidad sin depender de sistemas improvisados.',
  },
  {
    title: 'Alquiler de maquinaria y equipos',
    text: 'Empresas que necesitan saber qué está disponible, qué está alquilado, qué debe volver y cómo mejorar la rentabilidad de cada activo.',
  },
  {
    title: 'Despachos y negocios por proyecto',
    text: 'Equipos que quieren conectar propuestas, fases, documentación, horas, facturación y rentabilidad con una visión mucho más ordenada.',
  },
];

const advantages = [
  'Ayuda a vender, organizar y facturar con más continuidad.',
  'Reduce pérdidas de tiempo entre oficina, operativa y administración.',
  'Evita duplicidades y mejora la visibilidad de lo pendiente.',
  'Permite tomar decisiones con una foto más real del negocio.',
  'Aporta una implantación más natural que un ERP genérico.',
  'Hace que cada vertical tenga un discurso comercial claro y fácil de entender.',
];

const verticals = [
  {
    name: 'Fecsys SAT',
    intro: 'Pensado para empresas de mantenimiento, instalaciones y asistencia técnica que necesitan convertir incidencias y visitas en una operativa controlada.',
    bullets: ['Órdenes de trabajo más claras', 'Seguimiento de técnicos', 'Contratos de mantenimiento', 'Facturación conectada al servicio'],
  },
  {
    name: 'Fecsys Talleres',
    intro: 'Orientado a talleres y negocios de reparación que quieren ordenar el trabajo diario y entender mejor el margen de cada intervención.',
    bullets: ['Órdenes de reparación', 'Seguimiento de clientes', 'Piezas y mano de obra', 'Más control del rendimiento diario'],
  },
  {
    name: 'Fecsys Maquinaria',
    intro: 'Dirigido a empresas de alquiler que necesitan controlar disponibilidad, contratos, entregas, devoluciones y rentabilidad de la flota.',
    bullets: ['Reservas y contratos', 'Disponibilidad real', 'Entregas y devoluciones', 'Rentabilidad por activo'],
  },
  {
    name: 'Fecsys Arquitectura',
    intro: 'Creado para despachos que trabajan por proyectos y necesitan ordenar fases, honorarios, documentación, horas y seguimiento al cliente.',
    bullets: ['Gestión por fases', 'Propuestas y honorarios', 'Control documental', 'Rentabilidad por proyecto'],
  },
];

const adaptationKeys = [
  'Una sola base para crecer con orden.',
  'Variantes específicas para vender mejor por sector.',
  'Implantación realista y progresiva.',
  'Más útil que un software genérico.',
  'Más asumible que un ERP pesado.',
  'Preparado para acompañar la evolución del negocio.',
];

const processStarts = [
  'Incidencia o aviso de cliente',
  'Orden de reparación',
  'Reserva o contrato de alquiler',
  'Proyecto o propuesta de honorarios',
  'Proceso comercial que necesita seguimiento real',
];
const heroTags = ['ERP modular', 'Verticales por sector', 'Implantación adaptable', 'Más control comercial'];

function JcBasePage() {
  return (
    <article className="jc-base-page">
      <Helmet>
        <title>Fecsys | ERP vertical para pymes que necesitan más control y más claridad</title>
        <meta
          name="description"
          content="Fecsys es una plataforma de gestión empresarial con verticales específicas para servicios técnicos, talleres, alquiler de maquinaria y negocios que trabajan por proyectos."
        />
      </Helmet>

      <section className="jc-base-page__hero">
        <div className="site-container jc-base-page__hero-grid" data-aos="fade-up">
          <div className="jc-base-page__hero-copy">
            <div className="jc-base-page__hero-brand">
              <img src={fecsysLogo} alt="Logo de Fecsys" className="jc-base-page__hero-logo" />
              <div>
                <p className="jc-base-page__eyebrow">ERP vertical para pymes</p>
                <span>by JC Consultor</span>
              </div>
            </div>
            <h1>Un software de gestión modular para empresas que ya no quieren crecer con procesos dispersos.</h1>
            <p className="jc-base-page__hero-lead">
              Fecsys une una base común de gestión con verticales específicas para distintos sectores, para que cada
              empresa pueda vender, organizar su operativa y ganar control sin asumir la rigidez de un ERP genérico.
            </p>
            <div className="jc-base-page__hero-actions">
              <a href="/contacto#reserva" className="home-premium__cta">
                Solicitar presentación
              </a>
              <a href="#verticales" className="jc-base-page__ghost-link">
                Ver verticales
              </a>
            </div>
            <div className="jc-base-page__tag-cloud">
              {heroTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="jc-base-page__section">
        <div className="site-container jc-base-page__intro" data-aos="fade-up">
          <p className="jc-base-page__eyebrow">Qué es</p>
          <h2>Una propuesta pensada para convertir el caos operativo en una gestión más clara y vendible.</h2>
          <p>
            Fecsys parte de una idea muy simple: muchas pymes no necesitan un software más, sino una manera más clara
            de conectar su actividad comercial, su operativa diaria y el control del negocio.
          </p>
          <p>
            Por eso se plantea como una solución modular, con una base común y variantes específicas por sector, para
            que el producto encaje mejor en la forma real de trabajar de cada empresa.
          </p>
        </div>

        <div className="site-container jc-base-page__core-grid">
          {coreAreas.map((item) => (
            <article key={item.title} className="jc-base-page__card" data-aos="fade-up">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

      </section>

      <section className="jc-base-page__section jc-base-page__section--alt">
        <div className="site-container jc-base-page__audience-grid">
          <div data-aos="fade-up">
            <p className="jc-base-page__eyebrow">Para quién es</p>
            <h2>Para empresas que quieren profesionalizar su gestión sin complicarse más.</h2>
          </div>

          <div className="jc-base-page__audience-cards">
            {audiences.map((item) => (
              <article key={item.title} className="jc-base-page__card" data-aos="fade-up">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="jc-base-page__section">
        <div className="site-container jc-base-page__split" data-aos="fade-up">
          <div>
            <p className="jc-base-page__eyebrow">Diferenciación</p>
            <h2>Ni un programa básico que se queda corto, ni un ERP pesado que frena la implantación.</h2>
            <p>
              Fecsys busca un punto mucho más práctico: suficiente estructura para ordenar el negocio, pero con una
              narrativa comercial y una implantación más cercanas a la realidad de cada sector.
            </p>
            <p>
              Su valor está en combinar una base común sólida con verticales que permiten hablar mejor con el cliente,
              demostrar el encaje desde el primer momento y acompañar el crecimiento con más coherencia.
            </p>
          </div>
          <div className="jc-base-page__process-list">
            {adaptationKeys.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="jc-base-page__section" id="verticales">
        <div className="site-container jc-base-page__section-head" data-aos="fade-up">
          <p className="jc-base-page__eyebrow">Verticales</p>
          <h2>Cuatro verticales claras para salir al mercado con un discurso más preciso.</h2>
          <p>
            Fecsys no se vende como una promesa abstracta. Se presenta como una propuesta concreta para sectores con
            problemas reales de coordinación, seguimiento y control diario.
          </p>
        </div>

        <div className="site-container jc-base-page__vertical-grid">
          {verticals.map((vertical) => (
            <article key={vertical.name} className="jc-base-page__vertical-card" data-aos="fade-up">
              <h3>{vertical.name}</h3>
              <p>{vertical.intro}</p>
              <ul>
                {vertical.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="jc-base-page__section jc-base-page__section--alt">
        <div className="site-container jc-base-page__split" data-aos="fade-up">
          <div>
            <p className="jc-base-page__eyebrow">Encaje comercial</p>
            <h2>La conversación empieza en el proceso real de cada empresa.</h2>
            <p>
              En Fecsys, cada vertical arranca desde lo que el cliente ya reconoce como su problema: una incidencia,
              una reparación, una reserva, un proyecto o un proceso comercial que hoy está mal conectado.
            </p>
            <p>
              Eso facilita una demostración mucho más comercial, más comprensible y orientada a resultados concretos.
            </p>
          </div>
          <ul className="jc-base-page__bullet-list">
            {processStarts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="jc-base-page__section">
        <div className="site-container jc-base-page__split" data-aos="fade-up">
          <div>
            <p className="jc-base-page__eyebrow">Ventaja para el cliente</p>
            <h2>Más orden diario, mejor seguimiento y una propuesta de valor más clara.</h2>
          </div>
          <ul className="jc-base-page__bullet-list">
            {advantages.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="jc-base-page__cta" data-aos="fade-up">
        <div className="site-container jc-base-page__cta-inner">
          <p className="jc-base-page__eyebrow">Posicionamiento</p>
          <h2>Una alternativa comercialmente más potente que el software genérico.</h2>
          <p>
            Fecsys permite presentar una base de gestión sólida con verticales específicas, para vender con más foco,
            implantar con más criterio y acompañar a cada pyme con una solución que se entiende mejor desde el primer
            minuto.
          </p>
          <a href="/contacto#reserva" className="home-premium__cta">
            Hablar sobre Fecsys
          </a>
        </div>
      </section>
    </article>
  );
}

export default JcBasePage;
