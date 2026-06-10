import React from 'react';
import { Helmet } from 'react-helmet';

const coreAreas = [
  {
    title: 'Core empresarial',
    text: 'Empresas, usuarios, permisos, datos maestros, configuración, auditoría, adjuntos y estructura común lista para crecer.',
  },
  {
    title: 'Comercial y administración',
    text: 'Presupuestos, albaranes, facturas, compras, cobros, pagos, vencimientos y transformaciones documentales conectadas.',
  },
  {
    title: 'Economía y fiscalidad',
    text: 'Contabilidad, cierres, libros, balances, fiscalidad y soporte para entornos AEAT y VeriFactu.',
  },
  {
    title: 'Stock y trazabilidad',
    text: 'Existencias, movimientos, regularizaciones, multialmacén y relación directa entre operativa, documento y control económico.',
  },
];

const audiences = [
  {
    title: 'Cliente final',
    text: 'Pymes, empresas de servicios, negocios técnicos, actividades con stock y compañías que no encajan ni en software básico ni en un ERP rígido.',
  },
  {
    title: 'Canal',
    text: 'Distribuidores, consultorías, implantadores y empresas de digitalización que quieren lanzar soluciones sectoriales sin construir un ERP completo desde cero.',
  },
];

const advantages = [
  'Reduce trabajo manual y evita duplicar datos entre Excel, WhatsApp, papeles y facturas.',
  'Conecta operativa, documentación, stock, facturación, contabilidad y control.',
  'Mejora la trazabilidad de lo hecho, lo pendiente y lo facturado.',
  'Permite controlar mejor costes, materiales, tiempos, incidencias y márgenes.',
  'Da una base modular y escalable para crecer sin rehacer el sistema.',
  'Evita elegir entre un software demasiado simple y un ERP demasiado pesado.',
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

const channelBenefits = [
  'Reducir tiempos de desarrollo e implantación.',
  'Evitar rehacer un ERP completo en cada nuevo proyecto.',
  'Ofrecer productos más adaptados al sector.',
  'Diferenciarse del software genérico.',
  'Crear líneas de negocio propias y evolucionables.',
  'Vender más valor que simple licencia.',
];

const processStarts = [
  'Taller: orden de reparación',
  'Construcción: parte de obra',
  'Mantenimiento: incidencia',
  'Distribución: pedido',
  'Alquiler: reserva o contrato',
];

function JcBasePage() {
  return (
    <article className="jc-base-page">
      <Helmet>
        <title>JC Base | Ecosistema ERP modular para verticales sectoriales</title>
        <meta
          name="description"
          content="JC Base es un ecosistema ERP modular y evolutivo que une gestión, operativa, stock, facturación, contabilidad y trazabilidad para crear soluciones sectoriales sin empezar de cero."
        />
      </Helmet>

      <section className="jc-base-page__hero">
        <div className="site-container jc-base-page__hero-grid" data-aos="fade-up">
          <div className="jc-base-page__hero-copy">
            <p className="jc-base-page__eyebrow">JC Base</p>
            <h1>El ecosistema para construir ERPs sectoriales sin rehacer el núcleo cada vez.</h1>
            <p className="jc-base-page__hero-lead">
              JC Base no es un simple producto. Es una base empresarial modular que resuelve la capa transversal del
              negocio y deja libre la parte realmente diferencial de cada sector.
            </p>
            <p className="jc-base-page__hero-text">
              Une operativa, administración, stock, facturación, contabilidad, fiscalidad y trazabilidad dentro de un
              núcleo común preparado para crear verticales más naturales, más comprensibles y más útiles.
            </p>
            <div className="jc-base-page__hero-actions">
              <a href="/contacto#reserva" className="home-premium__cta">
                Solicitar presentación
              </a>
              <a href="#verticales" className="seo-link-button">
                Ver verticales
              </a>
            </div>
            <div className="jc-base-page__tag-cloud">
              <span>ERP modular</span>
              <span>VeriFactu y AEAT</span>
              <span>Stock y contabilidad</span>
              <span>Canal y distribuidores</span>
              <span>Base evolutiva</span>
            </div>
          </div>

          <div className="jc-base-page__hero-visual" data-aos="zoom-in" data-aos-delay="120">
            <div className="jc-base-page__hero-core">
              <strong>JC Base</strong>
              <span>Núcleo empresarial común</span>
            </div>
            <div className="jc-base-page__hero-orbits">
              <div>JC Taller</div>
              <div>JC SAT</div>
              <div>JC Construcción</div>
              <div>JC Distribución</div>
              <div>JC Lloguer</div>
            </div>
          </div>
        </div>
      </section>

      <section className="jc-base-page__section">
        <div className="site-container jc-base-page__intro" data-aos="fade-up">
          <p className="jc-base-page__eyebrow">Qué es</p>
          <h2>Una base común para no empezar cada solución desde cero.</h2>
          <p>
            JC Base aporta un núcleo ERP ya resuelto con empresas, usuarios, datos maestros, facturación, compras,
            contabilidad, stock, fiscalidad, configuración general y trazabilidad. Sobre esa base, cada vertical solo
            desarrolla la parte verdaderamente propia del sector: pantallas, reglas, automatismos y procesos.
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
            <h2>Doble valor: cliente final y canal.</h2>
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
            <h2>No parte del documento final. Parte del proceso real del negocio.</h2>
            <p>
              Muchas herramientas genéricas empiezan desde la factura, el presupuesto o el asiento. JC Base permite
              empezar desde una orden de reparación, una incidencia, una obra, una reserva o una comanda. Después
              traduce esa realidad en documentos comerciales, stock, facturación, contabilidad y control.
            </p>
          </div>
          <div className="jc-base-page__process-list">
            {processStarts.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="jc-base-page__section" id="verticales">
        <div className="site-container jc-base-page__section-head" data-aos="fade-up">
          <p className="jc-base-page__eyebrow">Verticales</p>
          <h2>Un ecosistema preparado para especializarse.</h2>
          <p>
            El núcleo común resuelve la capa transversal. Cada vertical resuelve el flujo operativo propio del sector
            sin perder coherencia, velocidad de desarrollo ni continuidad tecnológica.
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
            <p className="jc-base-page__eyebrow">Ventaja para el canal</p>
            <h2>Una oportunidad de producto, no solo una base técnica.</h2>
            <p>
              JC Base permite a distribuidores, consultorías, implantadores y empresas de digitalización ofrecer
              soluciones más adaptadas sin construir un ERP completo en cada proyecto.
            </p>
          </div>
          <ul className="jc-base-page__bullet-list">
            {channelBenefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="jc-base-page__section">
        <div className="site-container jc-base-page__split" data-aos="fade-up">
          <div>
            <p className="jc-base-page__eyebrow">Ventaja para el cliente</p>
            <h2>Más control sin obligar a la empresa a trabajar de una forma artificial.</h2>
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
          <h2>Ni software demasiado simple, ni ERP demasiado rígido.</h2>
          <p>
            JC Base ocupa un punto intermedio mucho más útil: una base empresarial sólida, flexible y preparada para
            crecer por especialización sectorial.
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
