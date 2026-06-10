import averoLogo from '../components/img/AVERO LOGO.png';
import constructProLogo from '../components/img/ContructPRO-Logo.png';
import regitLogo from '../components/img/regit_logo.png';

export const products = [
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
    title: 'En obra el dinero se pierde antes de facturar.',
    summary:
      'ConstructPro es un sistema de gestión para constructoras que necesitan controlar lo que realmente pasa en obra.',
    image: constructProLogo,
    problemTitle: 'En construcción no se pierde dinero por facturar mal.',
    problems: [
      'Material que no se controla',
      'Producción sin seguimiento',
      'Despiece mal gestionado',
      'Costes que se disparan sin aviso',
    ],
    definition:
      'No es un ERP genérico adaptado. Está pensado directamente para cómo trabaja una constructora.',
    does: [
      'Control de stock y materiales en tiempo real',
      'Seguimiento de producción y despiece',
      'Control de costes por proyecto',
      'Visión clara de márgenes',
    ],
    strategic:
      'Avero te dice qué está pasando. ConstructPro te permite controlarlo. Si ahorras 2.000€/mes, pagar 60€ no duele.',
    audience: ['Empresas de construcción', 'Obradores y producción', 'Negocios con consumo de material real'],
    before: ['Intuición', 'Pérdidas invisibles', 'Caos en obra'],
    after: ['Control de costes', 'Trazabilidad', 'Decisiones basadas en datos'],
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
