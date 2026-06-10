import React from 'react';
import { Helmet } from 'react-helmet';

const jcBaseLogo = '/JC_Base_Resources/JC_BASE_LOGO.png';
const jcBaseShots = [
  {
    src: encodeURI('/JC_Base_Resources/Captura de pantalla 2026-06-10 a las 16.02.10.png'),
    alt: 'Vista principal de JC Base',
    title: 'Vista principal del ecosistema',
  },
  {
    src: encodeURI('/JC_Base_Resources/Captura de pantalla 2026-06-10 a las 16.02.26.png'),
    alt: 'Vista operativa de JC Base',
    title: 'Operativa conectada',
  },
  {
    src: encodeURI('/JC_Base_Resources/Captura de pantalla 2026-06-10 a las 16.02.41.png'),
    alt: 'Vista documental de JC Base',
    title: 'Gestión documental y trazabilidad',
  },
  {
    src: encodeURI('/JC_Base_Resources/Captura de pantalla 2026-06-10 a las 16.02.59.png'),
    alt: 'Vista de procesos de JC Base',
    title: 'Procesos y datos maestros',
  },
  {
    src: encodeURI('/JC_Base_Resources/Captura de pantalla 2026-06-10 a las 16.03.33.png'),
    alt: 'Vista de control en JC Base',
    title: 'Control y configuración',
  },
];

const coreAreas = [
  {
    title: 'Gestión general',
    text: 'Empresas, usuarios, roles, permisos, configuraciones, datos fiscales, series documentales y ejercicios fiscales dentro de una estructura clara y utilizable.',
  },
  {
    title: 'Comercial y administración',
    text: 'Presupuestos, albaranes, facturas emitidas, compras, albaranes de compra, facturas recibidas, cobros y pagos conectados dentro del mismo sistema.',
  },
  {
    title: 'Economía y fiscalidad',
    text: 'Contabilidad, asientos, vencimientos, tesorería, libros contables, balances, pérdidas y ganancias, control económico y cumplimiento normativo.',
  },
  {
    title: 'Stock, operativa y trazabilidad',
    text: 'Stock, movimientos de almacén, regularizaciones, seguimiento de materiales e historial de acciones para saber qué se ha hecho, cuándo y con qué impacto.',
  },
];

const audiences = [
  {
    title: 'Pymes que necesitan orden',
    text: 'Empresas pequeñas y medianas que quieren controlar mejor su actividad comercial, administrativa, económica y operativa sin complicarse con un ERP pesado.',
  },
  {
    title: 'Negocios que ya no pueden seguir a base de Excel',
    text: 'Empresas que hoy trabajan con datos repartidos entre facturas, hojas de cálculo, papeles, mensajes y procesos internos poco conectados.',
  },
];

const advantages = [
  'Reduce tareas manuales y repetitivas.',
  'Evita errores y duplicación de información.',
  'Conecta mejor operativa y administración.',
  'Mejora el control de stock, documentos y procesos.',
  'Permite saber mejor qué se ha hecho y qué queda pendiente.',
  'Aporta información más fiable para decidir.',
  'Ofrece una herramienta más próxima a la realidad de la empresa.',
  'Se adapta mejor al sector y a la forma real de trabajar.',
];

const verticals = [
  {
    name: 'JC Taller',
    intro: 'Para talleres mecánicos, reparación y servicios similares que trabajan desde vehículo, reparación, piezas y horas.',
    bullets: ['Órdenes de reparación', 'Historial por vehículo', 'Piezas y recambios', 'Horas de mano de obra'],
  },
  {
    name: 'JC Mantenimiento / SAT',
    intro: 'Para mantenimiento, SAT, climatización, electricidad, fontanería e intervención técnica en campo.',
    bullets: ['Avisos e incidencias', 'Órdenes de trabajo', 'Asignación de técnicos', 'Partes, materiales y firma del cliente'],
  },
  {
    name: 'JC Construcción',
    intro: 'Para constructoras, reformas e instaladoras que necesitan convertir la actividad real de obra en control económico.',
    bullets: ['Obras y partes', 'Horas y materiales', 'Certificaciones', 'Presupuesto vs coste real'],
  },
  {
    name: 'JC Distribución',
    intro: 'Para mayoristas, almacenes y distribución que viven de stock, tarifas, compras, ventas y margen.',
    bullets: ['Pedidos de venta y compra', 'Reposición y stock mínimo', 'Multialmacén', 'Historial de movimientos'],
  },
  {
    name: 'JC Lloguer',
    intro: 'Para empresas que alquilan maquinaria, herramientas o equipos y necesitan controlar disponibilidad, estado y facturación por período.',
    bullets: ['Inventario de equipos', 'Disponibilidad y calendario', 'Contratos, entregas y retornos', 'Historial e incidencias por equipo'],
  },
];

const adaptationKeys = [
  'Es un ERP básico pero completo.',
  'Es adaptable, no rígido.',
  'Tiene variantes específicas por sector.',
  'Conecta la realidad operativa con la gestión administrativa.',
  'Es más natural de entender y de usar en el día a día.',
  'Se sitúa entre el software demasiado simple y el ERP demasiado pesado.',
];

const processStarts = [
  'Taller: orden de reparación',
  'Construcción: parte de obra',
  'Mantenimiento: incidencia',
  'Distribución: pedido',
  'Alquiler: reserva o contrato',
];

function ShotCard({ shot }) {
  return (
    <figure className="jc-base-page__shot-card">
      <img src={shot.src} alt={shot.alt} />
      <figcaption>{shot.title}</figcaption>
    </figure>
  );
}

function JcBasePage() {
  return (
    <article className="jc-base-page">
      <Helmet>
        <title>JC Base | ERP adaptable para la gestión real de la empresa</title>
        <meta
          name="description"
          content="JC Base es un ERP básico, completo y adaptable que conecta operativa, documentación, stock, facturación, contabilidad y trazabilidad, con variantes específicas para distintos sectores."
        />
      </Helmet>

      <section className="jc-base-page__hero">
        <div className="site-container jc-base-page__hero-grid" data-aos="fade-up">
          <div className="jc-base-page__hero-copy">
            <div className="jc-base-page__hero-brand">
              <img src={jcBaseLogo} alt="Logo de JC Base" className="jc-base-page__hero-logo" />
              <div>
                <p className="jc-base-page__eyebrow">ERP adaptable</p>
                <span>by JC Consultor</span>
              </div>
            </div>
            <h1>Un ERP básico, completo y adaptable para ordenar la gestión real de la empresa.</h1>
            <p className="jc-base-page__hero-lead">
              JC Base cubre las necesidades esenciales de control de una empresa y conecta operativa, documentación,
              stock, facturación, contabilidad y trazabilidad dentro de una solución práctica, clara y preparada para
              adaptarse según el sector.
            </p>
            <div className="jc-base-page__hero-actions">
              <a href="/contacto#reserva" className="home-premium__cta">
                Solicitar presentación
              </a>
              <a href="#verticales" className="jc-base-page__ghost-link">
                Ver verticales
              </a>
            </div>
          </div>

          <div className="jc-base-page__hero-visual" data-aos="zoom-in" data-aos-delay="120">
            <ShotCard shot={jcBaseShots[0]} />
          </div>
        </div>
      </section>

      <section className="jc-base-page__section">
        <div className="site-container jc-base-page__intro" data-aos="fade-up">
          <p className="jc-base-page__eyebrow">Qué es</p>
          <h2>Un ERP de gestión pensado para trabajar con más orden, más control y más conexión.</h2>
          <p>
            JC Base parte de una estructura empresarial común, sólida y funcional, que resuelve las áreas habituales
            de cualquier negocio: clientes, proveedores, productos, presupuestos, albaranes, facturas, compras,
            stock, cobros, pagos, contabilidad, fiscalidad y control interno.
          </p>
          <p>
            A partir de esta base, el sistema dispone de variantes específicas para sectores concretos, de forma que
            cada empresa puede trabajar con una solución más próxima a su manera real de funcionar.
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

        <div className="site-container jc-base-page__shots-grid jc-base-page__shots-grid--2" data-aos="fade-up">
          <ShotCard shot={jcBaseShots[1]} />
          <ShotCard shot={jcBaseShots[2]} />
        </div>
      </section>

      <section className="jc-base-page__section jc-base-page__section--alt">
        <div className="site-container jc-base-page__audience-grid">
          <div data-aos="fade-up">
            <p className="jc-base-page__eyebrow">Para quién es</p>
            <h2>Para empresas que necesitan una gestión completa pero accesible.</h2>
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
            <h2>Ni demasiado simple, ni rígido en exceso.</h2>
            <p>
              JC Base se sitúa en un punto mucho más práctico que muchas herramientas del mercado. No se queda en un
              programa básico centrado solo en facturas, pero tampoco obliga a la empresa a encajar en un ERP pesado,
              complejo o poco natural.
            </p>
            <p>
              Su diferencia está en combinar una base de gestión empresarial completa con variantes específicas por
              sector, para que la herramienta sea más comprensible, más útil y más alineada con la actividad real del
              negocio.
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
          <h2>Un ecosistema que evoluciona a través de variantes específicas.</h2>
          <p>
            JC Base parte de una base común de gestión empresarial, pero crece incorporando versiones más alineadas con
            sectores concretos. Así la empresa no solo tiene una herramienta general, sino una solución más cercana a
            su proceso real de trabajo.
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

        <div className="site-container jc-base-page__shots-grid jc-base-page__shots-grid--3" data-aos="fade-up">
          <ShotCard shot={jcBaseShots[2]} />
          <ShotCard shot={jcBaseShots[3]} />
          <ShotCard shot={jcBaseShots[4]} />
        </div>
      </section>

      <section className="jc-base-page__section jc-base-page__section--alt">
        <div className="site-container jc-base-page__split" data-aos="fade-up">
          <div>
            <p className="jc-base-page__eyebrow">Proceso real</p>
            <h2>La empresa puede empezar desde lo que realmente hace.</h2>
            <p>
              Un taller puede empezar desde una orden de reparación, una empresa de mantenimiento desde una incidencia,
              una constructora desde un parte de obra, un distribuidor desde una comanda y una empresa de alquiler
              desde una reserva o contrato.
            </p>
            <p>
              Después, el sistema transforma esta actividad en documentos comerciales, movimientos de stock,
              facturación, contabilidad y trazabilidad.
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
            <h2>Más control y menos dependencia de procesos dispersos.</h2>
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
          <h2>Una alternativa flexible a los ERPs genéricos.</h2>
          <p>
            JC Base ofrece una base empresarial completa, pero con capacidad real de adaptación y variantes específicas
            para sectores concretos. El resultado es una herramienta más comprensible, más cercana y más útil para el
            negocio real.
          </p>
          <a href="/contacto#reserva" className="home-premium__cta">
            Hablar sobre JC Base
          </a>
        </div>
      </section>
    </article>
  );
}

export default JcBasePage;
