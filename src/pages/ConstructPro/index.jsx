import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import constructProLogo from '../../components/img/ContructPRO-Logo.png';
import capture1 from '../../components/img/captura1.png';
import capture2 from '../../components/img/captura2.png';
import capture3 from '../../components/img/captura3.png';

const summaryCards = [
  {
    number: '01',
    title: 'De presupuesto a ejecución',
    text: 'El presupuesto aceptado puede convertirse en obra y conservar su estructura de partidas. Así lo vendido y lo ejecutado se comparan con el mismo criterio.',
  },
  {
    number: '02',
    title: 'Control económico por partida',
    text: 'Las horas, materiales y gastos se imputan a partidas concretas para detectar desviaciones antes de que el margen desaparezca.',
  },
];

const problemCards = [
  {
    title: 'Costes poco visibles',
    text: 'La dirección no siempre sabe qué partida está consumiendo más recursos de los previstos.',
  },
  {
    title: 'Decisiones tarde',
    text: 'Cuando el sobrecoste se detecta al final, ya no hay margen para corregir.',
  },
  {
    title: 'Documentación dispersa',
    text: 'Justificantes, tickets, PDFs y datos críticos acaban repartidos en sitios distintos.',
  },
];

const flowSteps = ['Presupuesto', 'Obra', 'Costes reales', 'Factura', 'Cobro', 'Trazabilidad'];

const features = [
  {
    id: 'presupuestos',
    kicker: 'Presupuestos',
    title: 'Ofertas profesionales con partidas, líneas e historial.',
    copy: [
      'ConstructPro permite crear, editar, duplicar y estructurar presupuestos por partidas.',
      'Cada partida puede contener líneas de mano de obra, material o servicios externos, con unidad, cantidad, precio unitario, descuento e importe.',
      'También permite aplicar plantillas, reordenar partidas, cambiar estados y conservar observaciones e historial de actividad.',
    ],
    tags: ['Partidas', 'Plantillas', 'Historial', 'PDF corporativo'],
    mediaColumns: 2,
    media: [
      {
        type: 'image',
        src: capture1,
        alt: 'Detalle de presupuesto en ConstructPro',
        label: 'Captura actual',
        title: 'Detalle de presupuesto',
        text: 'Partidas y líneas del presupuesto.',
      },
      {
        type: 'placeholder',
        label: 'Espacio para PDF de presupuesto',
        title: 'PDF de presupuesto',
        text: 'Preparado para insertar una captura del PDF corporativo con datos fiscales y resumen económico.',
      },
    ],
  },
  {
    id: 'obras',
    kicker: 'Obras',
    title: 'Del presupuesto aceptado a la obra real.',
    copy: [
      'Una obra puede nacer de un presupuesto aceptado y heredar sus partidas como base planificada.',
      'Esto evita reintroducciones manuales y permite comparar lo previsto contra lo ejecutado desde el primer día.',
      'La ficha de obra incluye cliente, fechas, estado, presupuesto asociado, importe planificado, coste real y desviación.',
    ],
    tags: ['Importe planificado', 'Coste real', 'Desviación', 'Estado de obra'],
    reverse: true,
    mediaColumns: 2,
    media: [
      {
        type: 'placeholder',
        label: 'Espacio para conversión a obra',
        title: 'Conversión a obra',
        text: 'Preparado para una captura de creación de obra desde presupuesto aceptado.',
      },
      {
        type: 'image',
        src: capture2,
        alt: 'Ficha de obra en ConstructPro',
        label: 'Captura actual',
        title: 'Ficha de obra',
        text: 'Resumen económico, cliente, fechas y estado.',
      },
    ],
  },
  {
    id: 'partidas',
    kicker: 'Control por partida',
    title: 'La rentabilidad se mide donde se pierde: en la partida.',
    copy: [
      'Cada partida de obra tiene un importe previsto y un coste real acumulado. Ese coste real se construye a partir de horas, materiales y gastos.',
      'Esto permite saber qué parte de la obra se está desviando y no descubrir el problema cuando ya es demasiado tarde.',
    ],
    tags: ['Horas', 'Materiales', 'Gastos', 'Sobrecostes'],
    mediaColumns: 2,
    media: [
      {
        type: 'placeholder',
        label: 'Espacio para planificado vs real',
        title: 'Planificado vs real',
        text: 'Preparado para una comparativa económica por partida.',
      },
      {
        type: 'placeholder',
        label: 'Espacio para informe de desviaciones',
        title: 'Informe de desviaciones',
        text: 'Preparado para una vista de partidas con desviación y margen.',
      },
    ],
  },
  {
    id: 'operativa',
    kicker: 'Operativa diaria',
    title: 'Hacer que el trabajo de campo alimente el control económico.',
    copy: [
      'Los usuarios pueden registrar horas, consumos de materiales y gastos asociados a partidas concretas. Cada registro actualiza el coste real de la obra.',
      'La parte móvil facilita accesos rápidos al dashboard, alta de horas, alta de materiales e historial.',
    ],
    tags: ['Móvil', 'Justificantes', 'Coste hora', 'Trazabilidad'],
    reverse: true,
    mediaColumns: 3,
    media: [
      {
        type: 'placeholder',
        label: 'Espacio para horas',
        title: 'Horas',
        text: 'Preparado para una captura de partes de trabajo.',
      },
      {
        type: 'placeholder',
        label: 'Espacio para materiales',
        title: 'Materiales',
        text: 'Preparado para una captura de producto, proveedor y ticket.',
      },
      {
        type: 'placeholder',
        label: 'Espacio para gastos',
        title: 'Gastos',
        text: 'Preparado para una captura de categoría, importe y adjunto.',
      },
    ],
  },
  {
    id: 'facturacion',
    kicker: 'Facturación',
    title: 'Facturas conectadas con proyectos, partidas y cobros.',
    copy: [
      'ConstructPro permite crear facturas manuales o vinculadas a obra. Las líneas de factura pueden asociarse a partidas del proyecto, calcular impuestos, registrar pagos parciales y conocer el pendiente real.',
      'El PDF de factura puede incluir líneas, vencimiento, proyecto, resumen fiscal, observaciones y notas legales.',
    ],
    tags: ['Pagos parciales', 'Pendiente', 'Vencimiento', 'PDF factura'],
    mediaColumns: 3,
    media: [
      {
        type: 'image',
        src: capture3,
        alt: 'Ficha de factura en ConstructPro',
        label: 'Captura actual',
        title: 'Ficha de factura',
        text: 'Total, cobrado y pendiente.',
      },
      {
        type: 'placeholder',
        label: 'Espacio para PDF factura',
        title: 'PDF factura',
        text: 'Preparado para un documento A4 corporativo.',
      },
      {
        type: 'placeholder',
        label: 'Espacio para pagos',
        title: 'Pagos',
        text: 'Preparado para una vista de cobros registrados.',
      },
    ],
  },
];

const diferencialCards = [
  {
    number: 'A',
    title: 'Control operativo',
    text: 'La actividad diaria de obra se convierte en información económica útil.',
  },
  {
    number: 'B',
    title: 'Control financiero',
    text: 'Facturación, cobros, vencimientos y cash-flow se conectan con el estado real del proyecto.',
  },
  {
    number: 'C',
    title: 'Trazabilidad documental',
    text: 'Presupuestos, facturas, justificantes y documentos quedan asociados al flujo de trabajo.',
  },
];

const reportMetrics = [
  { value: '01', label: 'Margen por proyecto' },
  { value: '02', label: 'Desviación por partida' },
  { value: '03', label: 'Hoja de horas y extras' },
  { value: '04', label: 'Antigüedad de facturas' },
];

const benefits = [
  { number: '01', title: 'Ofertas más rápidas', text: 'Presupuestos reutilizables, estructurados y con presentación profesional.' },
  { number: '02', title: 'Más control de costes', text: 'Horas, materiales y gastos conectados con partidas reales.' },
  { number: '03', title: 'Menos pérdida de margen', text: 'Desviaciones visibles antes de que el problema sea irreversible.' },
  { number: '04', title: 'Mejor orden documental', text: 'Documentos, justificantes y facturas asociados al proyecto correcto.' },
  { number: '05', title: 'Visión financiera', text: 'Pendientes, vencidas, cobros, gastos y cash-flow mensual.' },
  { number: '06', title: 'Imagen profesional', text: 'PDFs corporativos, branding documental y trazabilidad clara.' },
];

function MediaCard({ item }) {
  if (item.type !== 'image' || !item.src) {
    return null;
  }

  return (
    <figure className="constructpro-page__image-card">
      <img src={item.src} alt={item.alt} />
      <figcaption className="constructpro-page__image-caption">{item.title}</figcaption>
    </figure>
  );
}

function ConstructProPage() {
  const featureSections = features.map((feature) => ({
    ...feature,
    visibleMedia: feature.media.filter((item) => item.type === 'image' && item.src),
  }));

  return (
    <article className="light-page constructpro-page">
      <Helmet>
        <title>ConstructPro | Control real de obra, costes y facturación</title>
        <meta
          name="description"
          content="ConstructPro conecta presupuestos, obras, partidas, costes reales, facturación, cobros y documentación en un único entorno pensado para empresas de construcción, reformas e instaladoras."
        />
      </Helmet>

      <section className="constructpro-page__hero" id="inicio" data-aos="fade-up">
        <div className="constructpro-page__page constructpro-page__hero-grid">
          <div>
            <div className="constructpro-page__brand">
              <img src={constructProLogo} alt="Logo ConstructPro" />
              <div>
                <p className="constructpro-page__eyebrow">Plataforma para constructoras</p>
                <span>by JC Consultor</span>
              </div>
            </div>
            <h1>Control real de obra, costes y facturación.</h1>
            <p className="constructpro-page__hero-lead">
              ConstructPro conecta presupuestos, obras, partidas, costes reales, facturación, cobros y documentación en
              un único entorno pensado para empresas de construcción, reformas e instaladoras.
            </p>
            <div className="constructpro-page__hero-actions">
              <Link to="/contacto#reserva" className="home-premium__cta">
                Solicitar demostración
              </Link>
              <a href="#funciones" className="constructpro-page__ghost-link">
                Ver funcionalidades
              </a>
            </div>
          </div>

          <MediaCard
            item={{
              type: 'image',
              src: capture1,
              alt: 'Captura del dashboard principal de ConstructPro',
              label: 'Captura actual',
              title: 'Dashboard principal',
              text: 'Panel preparado para métricas de presupuestos, obras, facturas, cobros y cash-flow.',
            }}
          />
        </div>
      </section>

      <section className="constructpro-page__subnav-wrap" aria-label="Navegación de la página">
        <div className="constructpro-page__page">
          <nav className="constructpro-page__subnav">
            <a href="#resumen">Resumen</a>
            <a href="#problema">Problema</a>
            <a href="#funciones">Funcionalidades</a>
            <a href="#verifactu">VeriFactu</a>
            <a href="#informes">Informes</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </section>

      <section className="constructpro-page__section" id="resumen">
        <div className="constructpro-page__page">
          <div className="constructpro-page__section-header" data-aos="fade-up">
            <div>
              <p className="constructpro-page__kicker">Resumen ejecutivo</p>
              <h2>Un sistema de gestión pensado alrededor de la obra.</h2>
            </div>
            <p className="constructpro-page__section-intro">
              ConstructPro no se limita a emitir facturas o guardar contactos. Organiza el ciclo completo de una
              constructora: desde la oferta comercial hasta la ejecución, los costes reales, la facturación, el cobro y
              la trazabilidad fiscal.
            </p>
          </div>

          <div className="constructpro-page__grid-2">
            {summaryCards.map((item) => (
              <article key={item.title} className="constructpro-page__card" data-aos="fade-up">
                <div className="constructpro-page__number">{item.number}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="constructpro-page__single-media" data-aos="fade-up">
            <MediaCard
              item={{
                type: 'placeholder',
                label: 'Espacio para menú principal',
                title: 'Vista general del menú principal',
                text: 'Preparado para una captura con accesos a Presupuestos, Obras, Clientes, Facturas, Informes y Configuración.',
              }}
            />
          </div>
        </div>
      </section>

      <section className="constructpro-page__section constructpro-page__section--dark" id="problema">
        <div className="constructpro-page__page">
          <div className="constructpro-page__section-header" data-aos="fade-up">
            <div>
              <p className="constructpro-page__kicker">El problema</p>
              <h2>Cuando la información está dispersa, el margen se escapa.</h2>
            </div>
            <p className="constructpro-page__section-intro">
              Muchas constructoras trabajan con presupuestos por un lado, costes reales en papeles o Excel, facturas en
              otro sistema y documentación repartida entre correos, carpetas y WhatsApp.
            </p>
          </div>

          <div className="constructpro-page__grid-3">
            {problemCards.map((item) => (
              <article key={item.title} className="constructpro-page__card" data-aos="fade-up">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="constructpro-page__flow" aria-label="Flujo ConstructPro" data-aos="fade-up">
            {flowSteps.map((step) => (
              <div key={step} className="constructpro-page__flow-step">
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="constructpro-page__section" id="funciones">
        <div className="constructpro-page__page">
          <div className="constructpro-page__section-header" data-aos="fade-up">
            <div>
              <p className="constructpro-page__kicker">Funcionalidades principales</p>
              <h2>Todo el ciclo de obra conectado.</h2>
            </div>
            <p className="constructpro-page__section-intro">
              La clave no es tener muchas pantallas. La clave es que cada acción alimente el control económico y
              documental del proyecto.
            </p>
          </div>

          {featureSections.map((feature) => (
            <article
              key={feature.id}
              className={`constructpro-page__feature-row${feature.reverse ? ' is-reverse' : ''}${feature.visibleMedia.length === 0 ? ' is-text-only' : ''}`}
              data-aos="fade-up"
            >
              <div className="constructpro-page__feature-copy">
                <p className="constructpro-page__kicker">{feature.kicker}</p>
                <h2>{feature.title}</h2>
                {feature.copy.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {feature.visibleMedia.length > 0 ? (
                <div className={`constructpro-page__media-grid constructpro-page__media-grid--${Math.min(feature.visibleMedia.length, feature.mediaColumns)}`}>
                  {feature.visibleMedia.map((item) => (
                    <MediaCard key={`${feature.id}-${item.label}`} item={item} />
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="constructpro-page__section constructpro-page__section--dark" id="diferencial">
        <div className="constructpro-page__page">
          <div className="constructpro-page__section-header" data-aos="fade-up">
            <div>
              <p className="constructpro-page__kicker">Diferencial</p>
              <h2>No es un facturador genérico con casco de obra puesto.</h2>
            </div>
            <p className="constructpro-page__section-intro">
              ConstructPro está modelado para presupuestos, obras y partidas. El valor está en mantener un hilo continuo
              entre lo vendido, lo ejecutado, lo facturado, lo cobrado y lo trazado fiscalmente.
            </p>
          </div>

          <div className="constructpro-page__grid-3">
            {diferencialCards.map((item) => (
              <article key={item.title} className="constructpro-page__card" data-aos="fade-up">
                <div className="constructpro-page__number">{item.number}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="constructpro-page__section" id="verifactu">
        <div className="constructpro-page__page">
          <article className="constructpro-page__feature-row" data-aos="fade-up">
            <div className="constructpro-page__feature-copy">
              <p className="constructpro-page__kicker">VeriFactu</p>
              <h2>Base preparada para trazabilidad fiscal moderna.</h2>
              <p>
                ConstructPro incorpora configuración de entorno, certificado digital, generación de hash, UUID, XML, QR
                y seguimiento del estado de la factura.
              </p>
              <p>
                Este apartado debe comunicarse con precisión: la base técnica existe, pero conviene validar el envío real,
                la respuesta de AEAT y el flujo completo antes de prometer cumplimiento total en producción.
              </p>
              <div className="constructpro-page__warning-box">
                <strong>Nota comercial prudente</strong>
                <p>Usar “base preparada para VeriFactu” o “módulo orientado a VeriFactu” hasta confirmar el ciclo completo.</p>
              </div>
            </div>

          </article>
        </div>
      </section>

      <section className="constructpro-page__section" id="documentos">
        <div className="constructpro-page__page">
          <div className="constructpro-page__section-header" data-aos="fade-up">
            <div>
              <p className="constructpro-page__kicker">Documentación</p>
              <h2>Documentos donde toca, no perdidos en el limbo.</h2>
            </div>
            <p className="constructpro-page__section-intro">
              Cada obra, presupuesto o factura puede tener documentación asociada dentro del sistema. Tickets,
              justificantes, documentos técnicos y archivos administrativos quedan conectados con el expediente
              correspondiente.
            </p>
          </div>

          <div className="constructpro-page__grid-2" data-aos="fade-up">
            <div className="constructpro-page__card">
              <h3>Archivos que genera y gestiona</h3>
              <p>
                PDF de presupuesto, PDF de factura, CSV de informes, XML VeriFactu, QR VeriFactu, documentos generales,
                tickets de materiales y justificantes de gastos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="constructpro-page__section" id="informes">
        <div className="constructpro-page__page">
          <div className="constructpro-page__section-header" data-aos="fade-up">
            <div>
              <p className="constructpro-page__kicker">Informes</p>
              <h2>Datos para dirigir, no para decorar pantallas.</h2>
            </div>
            <p className="constructpro-page__section-intro">
              ConstructPro permite analizar margen por obra, desviación por partida, hoja de horas y antigüedad de
              facturas. Los informes se pueden exportar para seguimiento interno y reuniones de dirección.
            </p>
          </div>

          <div className="constructpro-page__metric-grid" data-aos="fade-up">
            {reportMetrics.map((item) => (
              <article key={item.label} className="constructpro-page__metric">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>

          <div className="constructpro-page__warning-box" data-aos="fade-up">
            <strong>Punto a mejorar antes de venderlo como premium</strong>
            <p>El PDF de informes debería maquetarse como informe ejecutivo si se quiere usar como argumento comercial fuerte.</p>
          </div>
        </div>
      </section>

      <section className="constructpro-page__section" id="beneficios">
        <div className="constructpro-page__page">
          <div className="constructpro-page__section-header" data-aos="fade-up">
            <div>
              <p className="constructpro-page__kicker">Beneficios</p>
              <h2>Lo que gana una empresa al ordenar su operativa.</h2>
            </div>
            <p className="constructpro-page__section-intro">
              El beneficio no es tener software. El beneficio es controlar mejor la rentabilidad de cada obra.
            </p>
          </div>

          <div className="constructpro-page__benefits-grid" data-aos="fade-up">
            {benefits.map((item) => (
              <article key={item.number} className="constructpro-page__benefit">
                <div className="constructpro-page__benefit-icon">{item.number}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="constructpro-page__section" id="ideal">
        <div className="constructpro-page__page">
          <div className="constructpro-page__grid-2 constructpro-page__ideal-layout is-text-only" data-aos="fade-up">
            <div>
              <p className="constructpro-page__kicker">Cliente ideal</p>
              <h2>Para constructoras, reformistas e instaladoras que trabajan por proyectos.</h2>
              <p className="constructpro-page__section-intro constructpro-page__ideal-copy">
                ConstructPro es especialmente adecuado para empresas que necesitan controlar costes por obra y por
                partida, emitir documentos profesionales y centralizar información operativa, financiera y documental.
              </p>
              <p className="constructpro-page__section-intro constructpro-page__ideal-copy">
                Es ideal para empresas que han crecido más rápido que sus procesos internos y ahora necesitan orden,
                control y profesionalización sin perder agilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="constructpro-page__section" id="contacto">
        <div className="constructpro-page__page">
          <div className="constructpro-page__cta is-text-only" data-aos="fade-up">
            <div>
              <p className="constructpro-page__kicker">Cierre comercial</p>
              <h2>Transforma la gestión de obra en un sistema más ordenado, rentable y escalable.</h2>
              <p>
                ConstructPro ayuda a controlar mejor la obra, defender márgenes, facturar con más trazabilidad y tener
                una visión más clara del negocio.
              </p>
              <div className="constructpro-page__hero-actions constructpro-page__hero-actions--cta">
                <Link to="/contacto#reserva" className="constructpro-page__cta-primary">
                  Pedir presentación
                </Link>
                <a href="#inicio" className="constructpro-page__cta-secondary">
                  Volver arriba
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </article>
  );
}

export default ConstructProPage;
