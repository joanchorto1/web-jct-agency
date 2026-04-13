const localZones = [
  {
    slug: 'tortosa',
    name: 'Tortosa',
    area: "Terres de l'Ebre",
    context: 'empresas industriales, servicios técnicos, despachos profesionales y negocios que operan entre oficina y calle',
  },
  {
    slug: 'amposta',
    name: 'Amposta',
    area: "Terres de l'Ebre",
    context: 'pymes con administración, ventas, almacén o equipos externos que necesitan ordenar la gestión diaria',
  },
  {
    slug: 'la-rapita',
    name: 'La Ràpita',
    keywordName: 'La Rapita',
    area: "Delta de l'Ebre",
    context: 'empresas de servicios, comercio, actividad náutica, turismo y negocios con procesos repartidos entre varios canales',
  },
  {
    slug: 'deltebre',
    name: 'Deltebre',
    area: "Delta de l'Ebre",
    context: 'negocios locales, empresas de servicios, turismo y operaciones que necesitan más control sin implantar sistemas complejos',
  },
  {
    slug: 'cambrils',
    name: 'Cambrils',
    area: 'Costa Daurada',
    context: 'empresas de servicios, restauración, comercio y negocios con actividad estacional que necesitan datos claros',
  },
  {
    slug: 'reus',
    name: 'Reus',
    area: 'Baix Camp',
    context: 'pymes comerciales, industriales y de servicios que han crecido con herramientas desconectadas',
  },
  {
    slug: 'tarragona',
    name: 'Tarragona',
    area: 'Tarragonès',
    context: 'empresas industriales, servicios técnicos, construcción y equipos administrativos con procesos manuales',
  },
  {
    slug: 'vinaroz',
    name: 'Vinaròs',
    keywordName: 'Vinaroz',
    area: 'Baix Maestrat',
    context: 'empresas de servicios, comercio, construcción y negocios que necesitan software de gestión adaptado a su operativa',
  },
];

const buildLocalPage = (zone) => {
  const keywordName = zone.keywordName || zone.name;
  const title = `Consultoría informática en ${keywordName}`;

  return {
    ...zone,
    keywordName,
    title,
    metaTitle: `${title} | Software y gestión para pymes`,
    metaDescription: `${title} para pymes: desarrollo de software, servicios informáticos, software de gestión y mejora de procesos para empresas en ${zone.area}.`,
    keywords: [
      `consultoría informática en ${keywordName}`,
      `consultoria informatica en ${keywordName}`,
      `empresa de software en ${keywordName}`,
      `empresas de desarrollo de software en ${keywordName}`,
      `servicios informáticos en ${keywordName}`,
      `software gestión en ${keywordName}`,
    ],
    paragraphs: [
      `Si buscas consultoría informática en ${keywordName}, normalmente no necesitas solo alguien que instale una herramienta. Lo que necesitas es entender qué parte de la empresa está perdiendo tiempo, datos o margen, y decidir qué sistema tiene sentido implantar. Trabajo con ${zone.context}, donde el problema suele aparecer cuando Excel, WhatsApp, facturación, stock y clientes dejan de estar conectados.`,
      `La diferencia entre una empresa de software genérica y una consultoría informática útil está en el enfoque. Antes de proponer desarrollo de software, reviso cómo entra el trabajo, dónde se registra, quién lo valida, cómo se factura y qué datos necesita dirección para decidir. En empresas de ${keywordName} y ${zone.area}, ese análisis evita comprar software que no encaja con la operativa real.`,
      `También cubro servicios informáticos orientados a gestión: automatización de procesos, conexión de herramientas, sistemas de facturación, control de stock, cuadros de mando, formularios internos y soluciones a medida. La prioridad no es llenar la empresa de pantallas, sino reducir errores, eliminar duplicidades y dejar un circuito claro para el equipo.`,
      `Si tu empresa en ${keywordName} ya trabaja con varias herramientas y aun así no tiene control, el siguiente paso es una revisión corta. En 45 minutos podemos detectar dónde se rompe el proceso, qué lo está causando y si necesitas software de gestión, desarrollo a medida o simplemente ordenar mejor el sistema actual.`,
    ],
    services: [
      'Consultoría informática para pymes',
      'Desarrollo de software a medida',
      'Software de gestión y facturación',
      'Automatización de procesos internos',
      'Integración de herramientas y datos',
      'Cuadros de mando para dirección',
    ],
    faqs: [
      {
        question: `¿Trabajas presencialmente en ${keywordName}?`,
        answer: `Trabajo principalmente online, pero puedo desplazarme a ${keywordName} o la zona de ${zone.area} cuando el proyecto lo requiere.`,
      },
      {
        question: `¿Eres una empresa de desarrollo de software en ${keywordName}?`,
        answer:
          'El enfoque es consultoría más implantación. Primero detecto el problema operativo y después planteo software, automatización o desarrollo a medida si realmente aporta retorno.',
      },
      {
        question: '¿Qué tipo de empresas encajan mejor?',
        answer:
          'Pymes que ya están vendiendo, facturando y gestionando operaciones, pero han perdido control por trabajar con datos dispersos, tareas manuales o herramientas desconectadas.',
      },
    ],
  };
};

export const localSeoPages = localZones.map(buildLocalPage);
