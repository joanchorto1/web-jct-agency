const articleGroups = {
  pain: {
    label: 'Problemas de gestión',
    searchIntent:
      'La búsqueda nace cuando la empresa ya nota caos operativo, errores manuales o falta de visibilidad sobre facturas, stock, clientes o rentabilidad.',
    promise:
      'La solución no pasa por trabajar más horas. Pasa por ordenar datos, definir responsables, reducir puntos de captura manual y conectar procesos que hoy viven separados.',
  },
  software: {
    label: 'Software y herramientas',
    searchIntent:
      'La intención es comparar opciones de software, alternativas a Excel y sistemas de gestión que unifiquen ventas, facturación, stock y seguimiento diario.',
    promise:
      'Antes de elegir herramienta conviene definir el circuito real de la empresa, los datos mínimos que hay que controlar y la capacidad de adopción del equipo.',
  },
  consulting: {
    label: 'Consultoría y acompañamiento',
    searchIntent:
      'La empresa entiende que el problema no es solo tecnológico y busca ayuda externa para rediseñar procesos, implantar un sistema de gestión y acompañar el cambio.',
    promise:
      'Un consultor útil no vende humo ni informes genéricos: aterriza decisiones, prioriza fases, alinea al equipo y deja un sistema operativo más estable.',
  },
  sector: {
    label: 'Soluciones por sector',
    searchIntent:
      'La búsqueda combina una necesidad operativa con un contexto sectorial donde obra, instalaciones, industria o servicios obligan a controlar costes, partes y facturas con precisión.',
    promise:
      'La mejor solución es la que se adapta al ritmo real del negocio, conecta oficina y operativa de campo y evita duplicidades entre departamentos.',
  },
};

export const seoArticles = [
  { slug: 'pierdo-tiempo-con-excel-empresa', keyword: 'pierdo tiempo con excel empresa', title: 'Pierdo tiempo con Excel en mi empresa: cómo salir del bloqueo operativo', category: 'pain', audience: 'pymes que gestionan operaciones y administración desde hojas dispersas' },
  { slug: 'problemas-control-stock-empresa', keyword: 'problemas control stock empresa', title: 'Problemas de control de stock en la empresa: causas y solución práctica', category: 'pain', audience: 'negocios que compran, venden o almacenan material sin visibilidad fiable' },
  { slug: 'no-tengo-control-de-facturas', keyword: 'no tengo control de facturas', title: 'No tengo control de facturas: cómo ordenar cobros, pagos y seguimiento', category: 'pain', audience: 'empresas con facturación desordenada, vencimientos difusos y riesgo de errores' },
  { slug: 'errores-facturacion-empresa', keyword: 'errores facturación empresa', title: 'Errores de facturación en empresa: por qué ocurren y cómo evitarlos', category: 'pain', audience: 'equipos administrativos que rehacen facturas, corrigen datos y pierden tiempo' },
  { slug: 'gestion-empresa-desorganizada', keyword: 'gestión empresa desorganizada', title: 'Gestión de empresa desorganizada: señales claras y plan para recuperar control', category: 'pain', audience: 'dirección y administración que sienten caos en procesos y decisiones' },
  { slug: 'no-se-cuanto-gano-realmente-empresa', keyword: 'no sé cuánto gano realmente empresa', title: 'No sé cuánto gano realmente en mi empresa: cómo medir rentabilidad de verdad', category: 'pain', audience: 'empresas que facturan pero no traducen actividad en margen real' },
  { slug: 'como-automatizar-procesos-empresa', keyword: 'cómo automatizar procesos empresa', title: 'Cómo automatizar procesos en una empresa sin complicar al equipo', category: 'pain', audience: 'negocios que quieren eliminar tareas repetitivas sin montar un sistema imposible' },
  { slug: 'empresa-caos-administrativo-solucion', keyword: 'empresa caos administrativo solución', title: 'Empresa con caos administrativo: solución para ordenar gestión y ejecución', category: 'pain', audience: 'empresas que sufren fricción entre administración, operaciones y dirección' },
  { slug: 'duplico-trabajo-en-mi-empresa', keyword: 'duplico trabajo en mi empresa', title: 'Duplico trabajo en mi empresa: por qué pasa y cómo cortar la duplicidad', category: 'pain', audience: 'equipos que repiten datos en varios sistemas o en papel y Excel' },
  { slug: 'problemas-gestion-clientes-y-facturas', keyword: 'problemas gestión clientes y facturas', title: 'Problemas de gestión de clientes y facturas: cómo unificar información', category: 'pain', audience: 'empresas con datos comerciales y administrativos desconectados' },
  { slug: 'software-gestion-empresas-pequenas', keyword: 'software gestión empresas pequeñas', title: 'Software de gestión para empresas pequeñas: qué debe resolver de verdad', category: 'software', audience: 'pequeñas empresas que necesitan orden sin sobredimensionar el sistema' },
  { slug: 'erp-para-pymes-espana', keyword: 'erp para pymes españa', title: 'ERP para pymes en España: criterios para elegir sin equivocarte', category: 'software', audience: 'pymes españolas que comparan ERP y quieren evitar una mala implantación' },
  { slug: 'programa-facturacion-sencillo', keyword: 'programa facturación sencillo', title: 'Programa de facturación sencillo: cuándo basta y cuándo se queda corto', category: 'software', audience: 'negocios que buscan emitir facturas rápido y ganar trazabilidad' },
  { slug: 'alternativa-a-excel-empresa', keyword: 'alternativa a excel empresa', title: 'Alternativa a Excel para empresa: opciones para ganar control real', category: 'software', audience: 'empresas que ya han tocado el límite operativo de Excel' },
  { slug: 'software-control-stock-y-facturacion', keyword: 'software control stock y facturación', title: 'Software de control de stock y facturación: qué integración necesitas', category: 'software', audience: 'negocios con producto, almacén y necesidad de facturar sin errores' },
  { slug: 'herramienta-gestion-negocios', keyword: 'herramienta gestión negocios', title: 'Herramienta de gestión para negocios: cómo saber si encaja con tu operativa', category: 'software', audience: 'empresas que comparan herramientas y buscan un criterio de selección claro' },
  { slug: 'automatizacion-procesos-empresa', keyword: 'automatización procesos empresa', title: 'Automatización de procesos en empresa: por dónde empezar para que funcione', category: 'software', audience: 'empresas que quieren convertir tareas manuales en flujos repetibles' },
  { slug: 'crm-facturacion-todo-en-uno', keyword: 'crm + facturación todo en uno', title: 'CRM más facturación todo en uno: ventajas, límites y encaje real', category: 'software', audience: 'empresas que desean unir ventas, clientes y cobro en un único sistema' },
  { slug: 'software-para-empresa-construccion', keyword: 'software para empresa construcción', title: 'Software para empresa de construcción: control operativo, económico y documental', category: 'sector', audience: 'constructoras y empresas de obra que necesitan control transversal' },
  { slug: 'digitalizacion-pymes-espana', keyword: 'digitalización pymes españa', title: 'Digitalización de pymes en España: cómo hacerla útil y rentable', category: 'software', audience: 'pymes españolas que quieren digitalizarse con retorno y criterio' },
  { slug: 'consultor-digitalizacion-empresa', keyword: 'consultor digitalización empresa', title: 'Consultor de digitalización para empresa: qué debe aportar y cómo evaluar su trabajo', category: 'consulting', audience: 'empresas que valoran apoyo externo para ordenar y digitalizar su operativa' },
  { slug: 'consultoria-procesos-empresa', keyword: 'consultoría procesos empresa', title: 'Consultoría de procesos para empresa: qué mejora y cuándo tiene sentido', category: 'consulting', audience: 'compañías con procesos poco definidos o que dependen demasiado de personas clave' },
  { slug: 'mejorar-eficiencia-empresa-consultor', keyword: 'mejorar eficiencia empresa consultor', title: 'Mejorar la eficiencia de una empresa con consultor: enfoque práctico', category: 'consulting', audience: 'dirección que busca eficiencia operativa sin improvisación' },
  { slug: 'optimizar-empresa-costes-gestion', keyword: 'optimizar empresa costes gestión', title: 'Optimizar empresa, costes y gestión: cómo hacerlo con método', category: 'consulting', audience: 'empresas que quieren recortar desperdicio sin perder control ni servicio' },
  { slug: 'consultor-automatizacion-negocios', keyword: 'consultor automatización negocios', title: 'Consultor de automatización de negocios: cuándo compensa y qué exigir', category: 'consulting', audience: 'negocios que buscan automatizar procesos con una visión de negocio' },
  { slug: 'servicio-mejora-procesos-empresa', keyword: 'servicio mejora procesos empresa', title: 'Servicio de mejora de procesos para empresa: resultados esperables', category: 'consulting', audience: 'empresas que necesitan rediseñar circuitos y responsabilizar tareas' },
  { slug: 'ayuda-organizar-empresa-caos', keyword: 'ayuda organizar empresa caos', title: 'Ayuda para organizar una empresa con caos: primeros pasos que sí funcionan', category: 'consulting', audience: 'empresas que operan con urgencia constante y poca estructura' },
  { slug: 'implantar-sistema-gestion-empresa', keyword: 'implantar sistema gestión empresa', title: 'Implantar un sistema de gestión en una empresa: cómo hacerlo sin bloqueo', category: 'consulting', audience: 'equipos que necesitan pasar de la improvisación a una base operativa sólida' },
  { slug: 'consultor-erp-pequenas-empresas', keyword: 'consultor ERP pequeñas empresas', title: 'Consultor ERP para pequeñas empresas: rol real en la implantación', category: 'consulting', audience: 'pequeñas empresas que quieren implantar ERP con menos riesgo' },
  { slug: 'externalizar-gestion-administrativa-empresa', keyword: 'externalizar gestión administrativa empresa', title: 'Externalizar gestión administrativa de empresa: ventajas, riesgos y encaje', category: 'consulting', audience: 'empresas que no llegan a todo internamente y necesitan estructura' },
  { slug: 'gestion-obras-y-facturacion', keyword: 'gestión obras y facturación', title: 'Gestión de obras y facturación: cómo conectar ejecución, costes y cobro', category: 'sector', audience: 'empresas de obra que sufren retrasos entre producción y administración' },
  { slug: 'control-costes-obra-excel-alternativa', keyword: 'control costes obra excel alternativa', title: 'Control de costes de obra: alternativa a Excel para ganar precisión', category: 'sector', audience: 'constructoras que gestionan costes, certificaciones y compras en hojas sueltas' },
  { slug: 'erp-construccion-espana', keyword: 'erp construcción españa', title: 'ERP de construcción en España: qué debe cubrir para que sea rentable', category: 'sector', audience: 'empresas constructoras españolas que valoran implantar un ERP' },
  { slug: 'problemas-gestion-empresa-industrial', keyword: 'problemas gestión empresa industrial', title: 'Problemas de gestión en empresa industrial: cómo detectarlos y corregirlos', category: 'sector', audience: 'empresas industriales con tensión entre producción, compras y administración' },
  { slug: 'automatizacion-empresa-servicios', keyword: 'automatización empresa servicios', title: 'Automatización en empresa de servicios: cómo escalar sin ahogar al equipo', category: 'sector', audience: 'empresas de servicios que repiten tareas de coordinación y seguimiento' },
  { slug: 'software-para-instaladores', keyword: 'software para instaladores', title: 'Software para instaladores: agenda, partes, materiales y facturación conectados', category: 'sector', audience: 'empresas instaladoras con operativa mixta entre oficina y calle' },
];

const buildParagraphs = ({ keyword, audience, category }) => {
  const group = articleGroups[category];

  return [
    `Cuando una empresa busca "${keyword}" normalmente ya ha superado la fase de la incomodidad y ha entrado en una fase de coste real. El problema ya no es solo sentir desorden, sino perder tiempo, cometer errores, tomar decisiones tarde y cargar a personas clave con trabajo que no debería depender de ellas. Esto ocurre en ${audience}, donde la operación diaria suele crecer más rápido que la estructura de gestión. Lo que en una etapa inicial parecía resolverse con voluntad, hojas compartidas y seguimiento manual termina derivando en retrasos, duplicidades y una sensación constante de apagar fuegos. La buena noticia es que este escenario se puede corregir si se aborda con método, datos y una implantación realista.`,
    `La intención de búsqueda detrás de "${keyword}" revela una necesidad concreta. ${group.searchIntent} En la práctica, el origen suele ser una mezcla de procesos no documentados, información repartida entre Excel, WhatsApp, correo y memoria interna del equipo, y ausencia de un criterio único para registrar lo que pasa. Cuando cada persona anota los datos a su manera, el sistema se vuelve frágil. Aparecen versiones distintas de la misma información, tareas que nadie confirma como cerradas y una dependencia excesiva del administrativo, del gerente o de quien "siempre sabe dónde está todo". Ese modelo no escala y además impide ver con claridad dónde se gana dinero y dónde se pierde.`,
    `Hay señales muy claras de que el problema ya está afectando al negocio. Una es la duplicidad: el mismo dato se introduce varias veces en distintos soportes. Otra es la falta de trazabilidad: cuesta saber qué pedido, cliente, factura, parte o coste es el correcto. También aparecen errores de coordinación entre oficina y operativa, cierres contables lentos, retrasos en cobro, compras urgentes por falta de previsión y reuniones que consumen tiempo solo para alinear información dispersa. Cuando esto se cronifica, el equipo trabaja mucho pero la dirección sigue sin tener visibilidad fiable. El resultado es una empresa cansada, poco previsible y con margen erosionado por ineficiencias que rara vez se miden bien.`,
    `Resolver "${keyword}" no consiste en comprar software sin más. ${group.promise} Primero conviene mapear el proceso actual: qué ocurre desde que entra una oportunidad o un pedido hasta que se entrega, se factura y se cobra. Después hay que identificar dónde se repiten tareas, dónde se generan errores y qué datos necesita dirección para controlar el negocio. Con ese mapa ya se puede decidir si basta con ordenar procedimientos, si hace falta conectar herramientas existentes o si conviene implantar un sistema más completo. El objetivo no es llenar la empresa de pantallas, sino reducir fricción, asegurar consistencia en la información y liberar tiempo para tareas con más valor.`,
    `En proyectos de mejora operativa suele funcionar un enfoque por fases. La primera fase es diagnóstico y priorización. La segunda, diseño del flujo objetivo con responsables, reglas y datos mínimos obligatorios. La tercera, implantación técnica: formularios, automatizaciones, validaciones, avisos, cuadros de mando o integración entre CRM, ERP, facturación y almacén. La cuarta, seguimiento y ajuste con el equipo real. Este último paso es crítico porque muchas implantaciones fallan no por la herramienta, sino por no acompañar el cambio en la operativa diaria. Si el sistema obliga a hacer más trabajo del necesario o no refleja la realidad del negocio, el equipo lo abandonará y volverá al Excel, al audio de WhatsApp o a la libreta.`,
    `También es importante medir el retorno. Una mejora bien diseñada suele reducir horas administrativas, bajar errores de facturación o stock, acelerar cierres, mejorar la coordinación entre departamentos y dar a gerencia una lectura mucho más clara del margen. Esto no solo afecta a la eficiencia; afecta a la capacidad de decidir con criterio. Saber qué cliente consume más recursos, qué obra se desvía, qué servicio genera más incidencias o qué proceso está generando reprocesos permite actuar antes y no cuando el problema ya impacta en tesorería. Por eso, cualquier proyecto asociado a "${keyword}" debería incluir indicadores simples: tiempos, errores, retrasos, rentabilidad y grado de adopción por parte del equipo.`,
    `Si tu empresa está en este punto, conviene evitar dos extremos. El primero es seguir igual y asumir que el caos forma parte del crecimiento. El segundo es implantar un sistema demasiado grande, caro o rígido para la madurez real del negocio. Lo razonable es construir una base sólida: un único criterio de datos, procesos claros, responsabilidades visibles y herramientas conectadas con sentido. A partir de ahí sí se puede escalar. Ese enfoque permite pasar de la improvisación al control sin paralizar la actividad. Y eso es lo que de verdad debería conseguir cualquier solución relacionada con "${keyword}": menos fricción, más visibilidad y una estructura de gestión preparada para crecer.`,
  ];
};

export const seoArticlesWithContent = seoArticles.map((article) => ({
  ...article,
  groupLabel: articleGroups[article.category].label,
  paragraphs: buildParagraphs(article),
  checklist: [
    `Detectar qué parte del problema de "${article.keyword}" depende de datos dispersos y qué parte depende de proceso.`,
    'Definir un circuito único desde la entrada del trabajo hasta la factura y el cobro.',
    'Reducir duplicidades y establecer validaciones antes de que el error llegue al cliente o a contabilidad.',
    'Medir tiempo administrativo, incidencias y margen para saber si la mejora funciona de verdad.',
  ],
  faqs: [
    {
      question: `¿Qué suele provocar la búsqueda "${article.keyword}"?`,
      answer:
        'Normalmente hay crecimiento desordenado, demasiadas tareas manuales, información repartida y falta de una visión única para dirección, administración y operativa.',
    },
    {
      question: '¿Se resuelve solo con cambiar de software?',
      answer:
        'No siempre. Antes hay que ordenar el proceso, decidir qué datos son obligatorios y adaptar la herramienta al flujo real del negocio.',
    },
    {
      question: '¿Cuándo se notan los resultados?',
      answer:
        'Si el alcance está bien priorizado, las primeras mejoras suelen notarse en pocas semanas en forma de menos errores, menos tiempo perdido y más visibilidad.',
    },
  ],
}));

export const featuredSeoSlugs = [
  'pierdo-tiempo-con-excel-empresa',
  'software-gestion-empresas-pequenas',
  'consultor-digitalizacion-empresa',
  'software-para-empresa-construccion',
  'automatizacion-empresa-servicios',
  'problemas-control-stock-empresa',
];
