import averoLogo from '../components/img/AVERO LOGO.png';
import constructProLogo from '../components/img/ContructPRO-Logo.png';
import regitLogo from '../components/img/regit_logo.png';

export const products = [
  {
    slug: 'avero',
    name: 'Avero',
    eyebrow: 'Facturación y gestión',
    title: 'Trabajas mucho, pero no sabes si ganas dinero.',
    summary:
      'Avero es un sistema de facturación y gestión básica para empresas que ya están trabajando, pero sin control real.',
    image: averoLogo,
    problemTitle: 'El problema no es “necesito facturar”.',
    problems: ['Clientes en un sitio', 'Facturas en otro', 'Pedidos por WhatsApp', 'Nadie sabe el margen real'],
    definition:
      'No intenta ser un ERP complejo. Ordena la operativa diaria y te da datos claros para tomar decisiones.',
    does: [
      'Centraliza clientes, presupuestos y facturas',
      'Organiza documentos sin depender de Excel',
      'Permite ver ingresos y actividad en un solo sitio',
      'Reduce errores y duplicidades',
    ],
    strategic:
      'Avero no es el final del proceso. Es el sistema que te permite ver el problema real. Sin datos claros, no puedes mejorar nada.',
    audience: ['Empresas pequeñas y medianas', 'Negocios que han crecido sin estructura', 'Equipos con varias herramientas a la vez'],
    before: ['Desorden', 'Decisiones a ciegas', 'Tiempo perdido'],
    after: ['Información clara', 'Menos errores', 'Base para crecer'],
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
