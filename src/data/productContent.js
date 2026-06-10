import averoLogo from '../components/img/AVERO LOGO.png';
import constructProLogo from '../components/img/ContructPRO-Logo.png';
import regitLogo from '../components/img/regit_logo.png';

export const products = [
  {
    slug: 'jc-base',
    path: '/jc-base',
    name: 'JC Base',
    eyebrow: 'Ecosistema ERP modular',
    title: 'La base común para crear ERPs sectoriales sin empezar de cero.',
    summary:
      'JC Base es un ecosistema ERP modular que une operativa, facturación, stock, contabilidad, fiscalidad y trazabilidad dentro de un núcleo común preparado para crear verticales sectoriales.',
    indexDescription:
      'JC Base no es un simple programa de facturación ni un ERP rígido. Es una base empresarial modular que resuelve el núcleo transversal del negocio y permite construir soluciones verticales específicas para talleres, SAT, construcción, distribución, alquiler u otros sectores sin rehacer el ERP en cada proyecto.',
    labels: [
      'ERP modular',
      'Verticales sectoriales',
      'VeriFactu y AEAT',
      'Stock y contabilidad',
      'Canal y distribuidores',
      'Base evolutiva',
    ],
    image: '/JC_Base_Resources/JC_BASE_LOGO.png',
  },
  {
    slug: 'avero',
    name: 'Avero',
    eyebrow: 'Facturación y gestión',
    title: 'Facturación, gestión y control diario en un solo entorno.',
    summary:
      'Avero es un SaaS de gestión empresarial y facturación pensado para operar en España, con foco en cumplimiento normativo, control diario y simplificación administrativa.',
    indexDescription:
      'Avero centraliza clientes, catálogo, presupuestos, albaranes, facturas, TPV, informes y relación con la asesoría en una sola plataforma. No está pensado como un simple programa para emitir facturas, sino como una herramienta para vender, documentar, cobrar y justificar la actividad con trazabilidad fiscal preparada para VeriFactu y AEAT.',
    labels: [
      'VeriFactu y AEAT',
      'Presupuestos, albaranes y facturas',
      'TPV opcional',
      'Área para asesorías',
      'KPIs e informes',
      '15 €/mes',
    ],
    image: averoLogo,
    problemTitle: 'El problema no es solo emitir facturas.',
    problems: [
      'Clientes, productos y documentos repartidos en herramientas distintas',
      'Presupuestos, albaranes y facturas sin continuidad ni trazabilidad',
      'Cumplimiento fiscal que genera dudas, trabajo manual y riesgo',
      'Negocio activo, pero sin KPIs ni informes claros para decidir',
    ],
    definition:
      'Avero ordena la operativa comercial y administrativa desde un único entorno: clientes, productos, presupuestos, albaranes, facturas, TPV, informes, suscripción y colaboración con asesoría.',
    does: [
      'Gestión de empresas, usuarios y roles',
      'Clientes, productos, categorías y documentos comerciales conectados',
      'Presupuestos con PDF, duplicación y conversión a factura',
      'Facturación completa con rectificativas, exportación y PDF',
      'Cumplimiento VeriFactu con XML, huella, QR y estado ante AEAT',
      'Dashboard, informes de negocio y módulo opcional de TPV',
    ],
    strategic:
      'Su diferencial no está en “hacer facturas online”, sino en combinar operación diaria, flexibilidad fiscal, trazabilidad normativa y colaboración con asesoría dentro de una plataforma simple de implantar.',
    audience: [
      'Autónomos que necesitan facturar de forma profesional y cumplir normativa española',
      'Pymes de servicios o comercio que quieren controlar clientes, presupuestos, albaranes y facturas',
      'Negocios con punto de venta que necesitan TPV dentro del mismo ecosistema',
      'Empresas que comparten gestión con asesoría y quieren hacerlo de forma ordenada',
      'Asesorías que quieren dar una solución digital a sus clientes',
    ],
    before: ['Herramientas separadas', 'Errores y duplicidades', 'Cumplimiento fiscal con fricción'],
    after: ['Flujo comercial conectado', 'Control diario más claro', 'Trazabilidad fiscal preparada'],
    sections: [
      {
        title: 'Qué hace en la práctica',
        paragraphs: [
          'Avero centraliza en una sola plataforma la gestión de clientes, productos, presupuestos, albaranes, facturas, TPV y suscripción de la empresa.',
          'La lógica del producto está pensada para que una pyme o un autónomo puedan vender, documentar, cobrar y justificar su actividad desde un único entorno, sin ir saltando entre herramientas inconexas.',
        ],
      },
      {
        title: 'Funciones principales',
        bullets: [
          'Gestión de empresas y usuarios con roles',
          'Clientes, productos y categorías',
          'Presupuestos con estados, duplicación, PDF y conversión a factura',
          'Albaranes con estado, duplicación y descarga',
          'Facturas con PDF, exportación, reexpedición y rectificativas parciales o totales',
          'Casuísticas fiscales reales: ordinaria, IRPF, recargo de equivalencia y mixtas',
          'VeriFactu: XML, huella encadenada, QR, estado y envío a AEAT',
          'Dashboard con KPIs e informes de negocio',
          'TPV opcional con tickets, historial, rectificación y báscula',
          'Área para asesorías con acceso a empresas autorizadas y exportaciones',
        ],
      },
      {
        title: 'Ventajas para el cliente',
        bullets: [
          'Reduce trabajo manual al concentrar todo el flujo administrativo y comercial',
          'Evita errores al pasar de presupuesto a albarán y de albarán a factura',
          'Aporta más seguridad legal y fiscal con VeriFactu, QR y trazabilidad',
          'Mejora el control del negocio con KPIs e informes reales',
          'Facilita la colaboración con la asesoría sin enviar archivos fuera constantemente',
          'Permite crecer con más orden, usuarios, roles y procesos claros',
        ],
      },
    ],
    highlights: [
      'Mercado español y cumplimiento VeriFactu/AEAT',
      'Plataforma integral: presupuestos, albaranes, facturas, informes y TPV',
      'Módulo específico para asesorías',
      'Flexibilidad fiscal para casos reales',
      'Entrada simple: 15 €/mes, sin permanencia ni implantación',
    ],
    pricing: '15 €/mes por empresa, sin coste de implantación, sin permanencia y con asistencia directa.',
  },
  {
    slug: 'constructpro',
    name: 'ConstructPro',
    eyebrow: 'Construcción y obra',
    title: 'Control de obra, costes, facturación y rentabilidad en un solo sistema.',
    summary:
      'ConstructPRO es una plataforma de gestión integral para empresas de construcción, reformas, instalaciones y oficios técnicos que necesitan unir parte comercial, operativa y financiera.',
    indexDescription:
      'ConstructPRO centraliza presupuestos, proyectos, costes reales, horas, materiales, gastos, facturación y cobros en una sola plataforma. No está pensado como un simple programa para hacer presupuestos o facturas, sino como una herramienta para saber qué se ha vendido, qué se está ejecutando, qué se ha gastado y qué queda por cobrar en cada obra.',
    labels: [
      'Presupuesto + obra + factura',
      'Control por partida',
      'Horas, materiales y gastos',
      'Margen por proyecto',
      'VeriFactu',
      '35 €/mes',
    ],
    image: constructProLogo,
    problemTitle: 'En construcción el problema no es solo facturar.',
    problems: [
      'Presupuestos aceptados que no se convierten en control real de obra',
      'Horas, materiales y gastos repartidos entre papeles, Excel y mensajes',
      'Costes que se disparan sin que nadie vea la desviación a tiempo',
      'Facturación y cobros sin conexión clara con el estado real del proyecto',
    ],
    definition:
      'ConstructPRO está pensado desde la lógica real de una empresa constructora o instaladora: presupuesto, proyecto, partida, ejecución, coste, factura y cobro dentro de un mismo flujo.',
    does: [
      'Gestión de presupuestos con creación, duplicación, envío y seguimiento',
      'Conversión de presupuestos aceptados en proyectos u obras reales',
      'Seguimiento de costes, horas, materiales y gastos por obra y por partida',
      'Facturación vinculada a proyectos y control de cobros pendientes',
      'Gestión documental y PDFs con imagen corporativa',
      'Indicadores, informes y adaptación a VeriFactu',
    ],
    strategic:
      'Su valor no está en “digitalizar papeles”, sino en conectar la parte comercial con la ejecución y la rentabilidad. El objetivo es saber si una obra gana o pierde dinero antes de que sea demasiado tarde.',
    audience: [
      'Empresas constructoras pequeñas y medianas',
      'Empresas de reformas integrales',
      'Instaladores y empresas de mantenimiento técnico',
      'Industriales y oficios que trabajan por proyectos',
      'Equipos que necesitan controlar obra, costes, horas, materiales y facturación sin entrar en un ERP complejo',
    ],
    before: ['Obras seguidas por intuición', 'Costes dispersos', 'Margen detectado demasiado tarde'],
    after: ['Control real por obra', 'Seguimiento de desviaciones', 'Decisiones con datos útiles'],
    sections: [
      {
        title: 'Qué hace en la práctica',
        paragraphs: [
          'ConstructPRO unifica en un único entorno la captación comercial, la elaboración de presupuestos, el seguimiento del proyecto, el control de costes, la facturación y el cobro.',
          'En lugar de trabajar con Excels, correos, WhatsApp y herramientas separadas, permite ver con claridad qué se ha vendido, qué se está ejecutando, qué se ha gastado y qué queda pendiente en cada obra.',
        ],
      },
      {
        title: 'Funciones principales',
        bullets: [
          'Gestión de presupuestos con creación, edición, duplicación, envío y seguimiento',
          'Conversión de presupuestos aceptados en proyectos u obras reales',
          'Gestión de proyectos con partidas, estados, fechas, notas y control de ejecución',
          'Seguimiento de costes reales por obra y por partida',
          'Registro de horas, materiales, gastos, subcontrataciones y justificantes',
          'Gestión de clientes, proveedores, catálogo de productos y servicios',
          'Facturación vinculada a proyectos y control de pagos parciales o totales',
          'PDFs con imagen corporativa y documentación centralizada por obra o cliente',
          'Informes de margen, desviaciones, rentabilidad, horas y morosidad',
          'Panel de control, usuarios, roles, configuración fiscal e integración con VeriFactu',
        ],
      },
      {
        title: 'Ventajas para el cliente',
        bullets: [
          'Centraliza toda la información del negocio en una sola plataforma',
          'Reduce errores derivados de trabajar con herramientas dispersas',
          'Mejora la velocidad comercial en la elaboración de presupuestos',
          'Da control real sobre el coste de cada obra y cada partida',
          'Permite detectar desviaciones antes de que dañen el margen',
          'Mejora el control de tesorería gracias al seguimiento de facturas y cobros',
          'Professionaliza la imagen de la empresa con documentos mejor presentados',
          'Mejora la coordinación entre oficina, responsables de obra y administración',
        ],
      },
    ],
    highlights: [
      'Une presupuesto, obra, costes y facturación en un mismo flujo',
      'Control de margen por proyecto y por partida',
      'Seguimiento real de horas, materiales y gastos',
      'Más simple y usable que un ERP tradicional',
      'Pensado para pymes constructoras e instaladoras',
      'Propuesta clara de valor-precio por 35 €/mes',
    ],
    pricing: '35 €/mes para digitalizar obra, costes y facturación sin asumir la complejidad de un ERP pesado.',
  },
  {
    slug: 'regit',
    name: 'Regit',
    eyebrow: 'Administración y expedientes',
    title: 'Si no controlas horas, turnos y peticiones, aparecen los problemas.',
    summary:
      'Regit es un sistema de control de jornada y gestión interna de empleados pensado para ordenar el día a día.',
    image: regitLogo,
    problemTitle: 'Las empresas no fallan por no fichar.',
    problems: [
      'Horas que no se controlan',
      'Turnos mal organizados',
      'Peticiones internas caóticas',
      'Problemas con normativa',
    ],
    definition:
      'No intenta ser complejo. Está pensado para evitar problemas y ordenar el día a día del equipo.',
    does: [
      'Control de horas trabajadas',
      'Gestión de turnos',
      'Solicitudes internas',
      'Base para control laboral y organización',
    ],
    strategic:
      'Regit reduce fricción interna y da una base clara para gestionar personas, turnos y solicitudes.',
    audience: ['Empresas con empleados', 'Equipos con turnos', 'Negocios que necesitan orden interno'],
    before: ['Desorden interno', 'Falta de control', 'Problemas organizativos'],
    after: ['Organización clara', 'Menos fricción interna', 'Control del equipo'],
  },
];
