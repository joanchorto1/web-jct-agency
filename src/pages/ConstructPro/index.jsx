import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import constructProLogo from '../../components/img/ContructPRO-Logo.png';
import capture1 from '../../components/img/captura1.png';
import capture2 from '../../components/img/captura2.png';
import capture3 from '../../components/img/captura3.png';

const executiveSummary = [
  {
    number: '01',
    title: 'De presupuesto a ejecución',
    text: 'El presupuesto aceptado puede convertirse en obra y conservar su estructura de partidas. Lo vendido y lo ejecutado se comparan con el mismo criterio.',
  },
  {
    number: '02',
    title: 'Control económico por partida',
    text: 'Horas, materiales y gastos se imputan a partidas concretas para detectar desviaciones antes de que el margen desaparezca.',
  },
];

const problemCards = [
  {
    title: 'Costes poco visibles',
    text: 'La dirección no siempre sabe qué partida está consumiendo más recursos de los previstos.',
  },
  {
    title: 'Decisiones tarde',
    text: 'Cuando el sobrecoste se detecta al final, ya no queda margen para corregir.',
  },
  {
    title: 'Documentación dispersa',
    text: 'Justificantes, tickets, PDFs y datos críticos acaban repartidos entre carpetas, correos y chats.',
  },
];

const workflowSteps = ['Presupuesto', 'Obra', 'Costes reales', 'Factura', 'Cobro', 'Trazabilidad'];

const featureSections = [
  {
    id: 'presupuestos',
    kicker: 'Presupuestos',
    title: 'Ofertas profesionales con partidas, líneas e historial.',
    copy: [
      'ConstructPro permite crear, editar, duplicar y estructurar presupuestos por partidas.',
      'Cada partida puede contener mano de obra, material o servicios externos, con cantidad, precio, descuento e importe.',
      'También permite aplicar plantillas, reordenar partidas, cambiar estados y conservar observaciones e historial de actividad.',
    ],
    tags: ['Partidas', 'Plantillas', 'Historial', 'PDF corporativo'],
    media: [
      { type: 'image', src: capture1, alt: 'Captura de detalle de presupuesto en ConstructPro', label: 'Captura actual' },
      { type: 'placeholder', label: 'Espacio para PDF de presupuesto', text: 'Preparado para insertar un PDF limpio con partidas, importes y branding corporativo.' },
    ],
  },
  {
    id: 'obras',
    kicker: 'Obras',
    title: 'Del presupuesto aceptado a la obra real.',
    copy: [
      'Una obra puede nacer de un presupuesto aceptado y heredar sus partidas como base planificada.',
      'Esto evita reintroducciones manuales y permite comparar lo previsto contra lo ejecutado desde el primer día.',
      'La ficha de obra reúne cliente, fechas, estado, presupuesto asociado, importe planificado, coste real y desviación.',
    ],
    tags: ['Importe planificado', 'Coste real', 'Desviación', 'Estado de obra'],
    media: [
      { type: 'image', src: capture2, alt: 'Captura de ficha de obra en ConstructPro', label: 'Captura actual' },
      { type: 'placeholder', label: 'Espacio para conversión a obra', text: 'Reservado para una captura de creación de obra desde presupuesto aceptado.' },
    ],
    reverse: true,
  },
  {
    id: 'partidas',
    kicker: 'Control por partida',
    title: 'La rentabilidad se mide donde se pierde: en la partida.',
    copy: [
      'Cada partida de obra tiene un importe previsto y un coste real acumulado construido a partir de horas, materiales y gastos.',
      'Esto permite saber qué parte de la obra se está desviando y actuar antes de cerrar el proyecto con una sorpresa.',
    ],
    tags: ['Horas', 'Materiales', 'Gastos', 'Sobrecostes'],
    media: [
      { type: 'placeholder', label: 'Espacio para planificado vs real', text: 'Preparado para una comparativa económica por partida y desviación.' },
      { type: 'placeholder', label: 'Espacio para informe de desviaciones', text: 'Preparado para una vista de partidas con margen, coste y desviación.' },
    ],
  },
  {
    id: 'operativa',
    kicker: 'Operativa diaria',
    title: 'El trabajo de campo alimenta el control económico.',
    copy: [
      'Los usuarios pueden registrar horas, consumos de materiales y gastos asociados a partidas concretas.',
      'Cada registro actualiza el coste real de la obra y deja trazabilidad operativa y documental.',
      'La parte móvil facilita accesos rápidos al dashboard, alta de horas, materiales e historial.',
    ],
    tags: ['Móvil', 'Justificantes', 'Coste hora', 'Trazabilidad'],
    media: [
      { type: 'placeholder', label: 'Espacio para horas', text: 'Preparado para una captura de partes de trabajo.' },
      { type: 'placeholder', label: 'Espacio para materiales', text: 'Preparado para una captura de consumos, proveedor y ticket.' },
      { type: 'placeholder', label: 'Espacio para gastos', text: 'Preparado para una captura de categoría, importe y adjunto.' },
    ],
    reverse: true,
    wide: true,
  },
  {
    id: 'facturacion',
    kicker: 'Facturación',
    title: 'Facturas conectadas con proyectos, partidas y cobros.',
    copy: [
      'ConstructPro permite crear facturas manuales o vinculadas a obra.',
      'Las líneas de factura pueden asociarse a partidas del proyecto, calcular impuestos, registrar pagos parciales y conocer el pendiente real.',
      'El PDF de factura puede incluir líneas, vencimiento, proyecto, impuestos, observaciones y notas legales.',
    ],
    tags: ['Pagos parciales', 'Pendiente', 'Vencimiento', 'PDF factura'],
    media: [
      { type: 'image', src: capture3, alt: 'Captura de facturación y cobros en ConstructPro', label: 'Captura actual' },
      { type: 'placeholder', label: 'Espacio para PDF factura', text: 'Preparado para insertar un PDF A4 corporativo.' },
      { type: 'placeholder', label: 'Espacio para pagos', text: 'Preparado para una vista de cobros y pendiente real.' },
    ],
    wide: true,
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
  { value: 'Margen', label: 'por obra y por partida' },
  { value: 'Desviación', label: 'por línea presupuestada' },
  { value: 'Horas', label: 'imputadas y costeadas' },
  { value: 'Facturas', label: 'pendientes y antigüedad' },
];

const benefits = [
  'Más control sobre el estado económico real de cada obra.',
  'Mejor capacidad para detectar desviaciones antes de que sea tarde.',
  'Menos trabajo duplicado entre oficina, producción y administración.',
  'Facturación y cobros conectados con la ejecución real.',
  'Documentación centralizada y más fácil de defender.',
  'Base más sólida para trabajar con trazabilidad fiscal moderna.',
];

const idealFor = [
  'Constructoras y reformas con varias obras en marcha.',
  'Instaladoras que necesitan ligar presupuesto, ejecución y facturación.',
  'Empresas que quieren controlar costes por obra y por partida.',
  'Equipos que ya no pueden depender de Excel, papeles y seguimiento manual.',
];

function MediaCard({ item }) {
  if (item.type === 'image') {
    return (
      <figure className="constructpro-page__shot">
        <img src={item.src} alt={item.alt} />
        <figcaption>{item.label}</figcaption>
      </figure>
    );
  }

  return (
    <div className="constructpro-page__placeholder" aria-label={item.label}>
      <span>{item.label}</span>
      <strong>Espacio preparado para captura</strong>
      <p>{item.text}</p>
    </div>
  );
}

function ConstructProPage() {
  return (
    <article className="light-page constructpro-page">
      <Helmet>
        <title>ConstructPro | Control real de obra, costes y facturación</title>
        <meta
          name="description"
          content="ConstructPro conecta presupuestos, obras, partidas, costes reales, facturación, cobros y documentación en un único entorno pensado para empresas de construcción."
        />
      </Helmet>

      <section className="light-page__hero constructpro-page__hero" id="inicio" data-aos="fade-up">
        <div className="site-container constructpro-page__hero-grid">
          <div>
            <div className="constructpro-page__brand">
              <img src={constructProLogo} alt="Logo ConstructPro" />
              <div>
                <p className="light-page__eyebrow">Plataforma para constructoras</p>
                <span>by JC Consultor</span>
              </div>
            </div>
            <h1>Control real de obra, costes y facturación.</h1>
            <p className="constructpro-page__lead">
              ConstructPro conecta presupuestos, obras, partidas, costes reales, facturación, cobros y documentación
              en un único entorno pensado para empresas de construcción, reformas e instaladoras.
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
              alt: 'Dashboard principal de ConstructPro',
              label: 'Captura actual',
            }}
          />
        </div>
      </section>

      <section className="light-page__section" id="resumen">
        <div className="site-container">
          <div className="constructpro-page__section-head" data-aos="fade-up">
            <div>
              <p className="light-page__eyebrow">Resumen ejecutivo</p>
              <h2>Un sistema de gestión pensado alrededor de la obra.</h2>
            </div>
            <p>
              ConstructPro no se limita a emitir facturas o guardar contactos. Organiza el ciclo completo de una
              constructora: desde la oferta comercial hasta la ejecución, los costes reales, la facturación, el cobro y
              la trazabilidad fiscal.
            </p>
          </div>

          <div className="constructpro-page__summary-grid">
            {executiveSummary.map((item) => (
              <article key={item.title} className="constructpro-page__summary-card" data-aos="fade-up">
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="constructpro-page__media-stack" data-aos="fade-up">
            <MediaCard
              item={{
                type: 'placeholder',
                label: 'Espacio para menú principal',
                text: 'Preparado para insertar una captura con accesos a Presupuestos, Obras, Clientes, Facturas, Informes y Configuración.',
              }}
            />
          </div>
        </div>
      </section>

      <section className="light-page__section constructpro-page__band" id="problema">
        <div className="site-container">
          <div className="constructpro-page__section-head" data-aos="fade-up">
            <div>
              <p className="light-page__eyebrow">El problema</p>
              <h2>Cuando la información está dispersa, el margen se escapa.</h2>
            </div>
            <p>
              Muchas constructoras trabajan con presupuestos por un lado, costes reales en Excel o papeles, facturas en
              otro sistema y documentación repartida entre correos, carpetas y WhatsApp.
            </p>
          </div>

          <div className="constructpro-page__problem-grid">
            {problemCards.map((item) => (
              <article key={item.title} className="constructpro-page__problem-card" data-aos="fade-up">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="constructpro-page__flow" aria-label="Flujo ConstructPro" data-aos="fade-up">
            {workflowSteps.map((step) => (
              <div key={step} className="constructpro-page__flow-step">
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="light-page__section" id="funciones">
        <div className="site-container">
          <div className="constructpro-page__section-head" data-aos="fade-up">
            <div>
              <p className="light-page__eyebrow">Funcionalidades principales</p>
              <h2>Todo el ciclo de obra conectado.</h2>
            </div>
            <p>
              La clave no es tener muchas pantallas. La clave es que cada acción alimente el control económico y
              documental del proyecto.
            </p>
          </div>

          <div className="constructpro-page__features">
            {featureSections.map((section) => (
              <article
                key={section.id}
                className={`constructpro-page__feature-row${section.reverse ? ' is-reverse' : ''}`}
                data-aos="fade-up"
              >
                <div className="constructpro-page__feature-copy">
                  <p className="light-page__eyebrow">{section.kicker}</p>
                  <h2>{section.title}</h2>
                  {section.copy.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <div className="constructpro-page__tags">
                    {section.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className={`constructpro-page__media-grid${section.wide ? ' is-wide' : ''}`}>
                  {section.media.map((item) => (
                    <MediaCard key={`${section.id}-${item.label}`} item={item} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="light-page__section constructpro-page__band" id="diferencial">
        <div className="site-container">
          <div className="constructpro-page__section-head" data-aos="fade-up">
            <div>
              <p className="light-page__eyebrow">Diferencial</p>
              <h2>No es un facturador genérico con casco de obra puesto.</h2>
            </div>
            <p>
              ConstructPro está modelado para presupuestos, obras y partidas. El valor está en mantener un hilo continuo
              entre lo vendido, lo ejecutado, lo facturado, lo cobrado y lo trazado fiscalmente.
            </p>
          </div>

          <div className="constructpro-page__differential-grid">
            {diferencialCards.map((item) => (
              <article key={item.title} className="constructpro-page__summary-card" data-aos="fade-up">
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="constructpro-page__media-stack" data-aos="fade-up">
            <MediaCard
              item={{
                type: 'placeholder',
                label: 'Espacio para diagrama de flujo',
                text: 'Preparado para un esquema Presupuesto → Obra → Costes reales → Factura → Cobro → VeriFactu.',
              }}
            />
          </div>
        </div>
      </section>

      <section className="light-page__section" id="verifactu">
        <div className="site-container constructpro-page__feature-row" data-aos="fade-up">
          <div className="constructpro-page__feature-copy">
            <p className="light-page__eyebrow">VeriFactu</p>
            <h2>Base preparada para trazabilidad fiscal moderna.</h2>
            <p>
              ConstructPro incorpora configuración de entorno, certificado digital, generación de hash, UUID, XML, QR y
              seguimiento del estado de la factura.
            </p>
            <p>
              Esto debe comunicarse con precisión: la base técnica existe, pero conviene validar el envío real, la
              respuesta de AEAT y el ciclo completo antes de prometer cumplimiento total en producción.
            </p>
            <div className="constructpro-page__warning">
              <strong>Nota comercial prudente</strong>
              <p>Usar “base preparada para VeriFactu” o “módulo orientado a VeriFactu” hasta confirmar todo el flujo real.</p>
            </div>
          </div>

          <div className="constructpro-page__media-grid">
            <MediaCard
              item={{
                type: 'placeholder',
                label: 'Espacio para configuración VeriFactu',
                text: 'Preparado para entorno, certificado digital, hash, QR y seguimiento de estado.',
              }}
            />
            <MediaCard
              item={{
                type: 'placeholder',
                label: 'Espacio para XML y QR',
                text: 'Preparado para una vista clara de XML generado y QR asociado a factura.',
              }}
            />
          </div>
        </div>
      </section>

      <section className="light-page__section" id="documentos">
        <div className="site-container constructpro-page__section-head" data-aos="fade-up">
          <div>
            <p className="light-page__eyebrow">Documentos</p>
            <h2>Presupuestos, facturas y justificantes dentro del mismo flujo.</h2>
          </div>
          <p>
            PDF de presupuesto, PDF de factura, CSV de informes, XML VeriFactu, QR VeriFactu y documentación general
            asociados al proceso, no perdidos fuera de él.
          </p>
        </div>

        <div className="constructpro-page__media-grid is-wide" data-aos="fade-up">
          <MediaCard
            item={{
              type: 'placeholder',
              label: 'Espacio para documentos',
              text: 'Preparado para una galería de documentos generados y adjuntos por proceso.',
            }}
          />
          <MediaCard
            item={{
              type: 'placeholder',
              label: 'Espacio para justificantes',
              text: 'Preparado para tickets de materiales, gastos y archivos adjuntos asociados a obra o partida.',
            }}
          />
          <MediaCard
            item={{
              type: 'placeholder',
              label: 'Espacio para QR y XML',
              text: 'Preparado para evidencias fiscales y exportables.',
            }}
          />
        </div>
      </section>

      <section className="light-page__section constructpro-page__band" id="informes">
        <div className="site-container">
          <div className="constructpro-page__section-head" data-aos="fade-up">
            <div>
              <p className="light-page__eyebrow">Informes</p>
              <h2>Dirección ve margen, desviación y facturas pendientes.</h2>
            </div>
            <p>
              ConstructPro permite analizar margen por obra, desviación por partida, hoja de horas y antigüedad de
              facturas para seguimiento interno y reuniones de dirección.
            </p>
          </div>

          <div className="constructpro-page__metric-grid" data-aos="fade-up">
            {reportMetrics.map((metric) => (
              <article key={metric.label} className="constructpro-page__metric">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>

          <div className="constructpro-page__warning" data-aos="fade-up">
            <strong>Qué cambia para dirección</strong>
            <p>
              Ya no se revisa la obra cuando el problema explota. Se revisa mientras aún se puede corregir.
            </p>
          </div>
        </div>
      </section>

      <section className="light-page__section" id="beneficios">
        <div className="site-container">
          <div className="constructpro-page__section-head" data-aos="fade-up">
            <div>
              <p className="light-page__eyebrow">Beneficios</p>
              <h2>Más control operativo, financiero y documental.</h2>
            </div>
            <p>
              La ventaja no es solo emitir facturas o guardar archivos. La ventaja es sostener toda la operación con una
              estructura coherente.
            </p>
          </div>

          <div className="constructpro-page__benefits" data-aos="fade-up">
            {benefits.map((item, index) => (
              <article key={item} className="constructpro-page__benefit">
                <div className="constructpro-page__benefit-icon">{String(index + 1).padStart(2, '0')}</div>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="light-page__section" id="ideal">
        <div className="site-container constructpro-page__section-head" data-aos="fade-up">
          <div>
            <p className="light-page__eyebrow">Encaje</p>
            <h2>Especialmente adecuado para empresas que viven por obra y por partida.</h2>
          </div>
          <p>
            ConstructPro encaja mejor cuando hace falta controlar costes por obra y por partida, emitir documentos
            profesionales y centralizar información operativa, financiera y documental.
          </p>
        </div>

        <div className="constructpro-page__ideal-grid" data-aos="fade-up">
          {idealFor.map((item) => (
            <div key={item} className="constructpro-page__ideal-item">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="light-page__section" id="contacto">
        <div className="site-container constructpro-page__cta" data-aos="fade-up">
          <div>
            <p className="light-page__eyebrow">Siguiente paso</p>
            <h2>Solicita una demostración y revisamos si ConstructPro encaja con tu operativa real.</h2>
            <p>
              ConstructPro ayuda a controlar mejor la obra, defender márgenes, facturar con más trazabilidad y tener una
              visión más clara del negocio.
            </p>
          </div>
          <div className="constructpro-page__cta-actions">
            <Link to="/contacto#reserva" className="home-premium__cta">
              Solicitar demostración
            </Link>
            <Link to="/contacto" className="constructpro-page__ghost-link">
              Hablar con Joan
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

export default ConstructProPage;
