/**
 * SmartBroker – Models Layer
 * Centraliza todos los datos de la aplicación.
 * Para actualizar contenido, edita únicamente este archivo.
 */

const AppModel = {

  /* ───────── BRAND ───────── */
  brand: {
    name: "SmartBroker",
    tagline: "Tu mejor aliado",
    description: "Corredora de seguros",
    logo: {
      text: "Smart<span class='logo-accent'>Broker</span>",
      image: "assets/logo-transparent.png",      // Logo sin fondo
    },
    colors: {
      primary:   "#2D2D2D",   // Gris carbón (texto "smart" del logo)
      accent:    "#E8571A",   // Naranja SmartBroker (ícono + "broker")
      accentAlt: "#C44510",   // Naranja oscuro (hover / profundidad)
      accentLight:"#FFF0E8",  // Naranja muy claro (fondos tenues)
      light:     "#F7F7F7",   // Gris claro neutro
      white:     "#FFFFFF",
      text:      "#2D2D2D",   // Mismo que primary para consistencia
      muted:     "#7A7A7A",   // Gris medio para textos secundarios
    },
  },

  /* ───────── NAV ───────── */
  nav: [
    { label: "Inicio",    href: "#inicio" },
    {
      label: "Servicios", href: "#servicios",
      dropdown: [
        { label: "Seguro de Vida",     href: "#vida",        icon: `<svg viewBox="0 0 20 20" fill="none"><path d="M10 17s-7-4.35-7-9a5 5 0 0110 0 5 5 0 0110 0c0 4.65-7 9-7 9z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M7 10h2l1.5-2.5 2 5 1.5-2.5H16" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
        { label: "Seguro de Salud",    href: "#salud",       icon: `<svg viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" stroke-width="1.5"/><path d="M10 7v6M7 10h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>` },
        { label: "Seguro Vehicular",   href: "#vehicular",   icon: `<svg viewBox="0 0 20 20" fill="none"><path d="M3 12l2-5h10l2 5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><rect x="2" y="12" width="16" height="4" rx="1.5" stroke="currentColor" stroke-width="1.5"/><circle cx="6" cy="16" r="1.5" stroke="currentColor" stroke-width="1.3"/><circle cx="14" cy="16" r="1.5" stroke="currentColor" stroke-width="1.3"/></svg>` },
        { label: "Seguro Empresarial", href: "#empresarial", icon: `<svg viewBox="0 0 20 20" fill="none"><rect x="3" y="7" width="14" height="11" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M7 7V5a2 2 0 014 0v2" stroke="currentColor" stroke-width="1.5"/><path d="M3 11h14" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>` },
      ]
    },
    { label: "Nosotros",  href: "#nosotros" },
    { label: "Contacto",  href: "#contacto" },
  ],

  /* ───────── HERO ───────── */
  hero: {
    eyebrow: "Corredora de Seguros Certificada",
    headline: "Protege lo que más importa,<br>con quien más confías.",
    subtext:
      "Más de 9 años asesorando a familias y empresas con soluciones de seguros inteligentes, transparentes y a tu medida.",
    cta:    { label: "Solicitar asesoría gratuita", href: "#contacto" },
    ctaAlt: { label: "Ver nuestros servicios",      href: "#servicios" },
    stats: [
      { value: "9+",    label: "Años de experiencia" },
      { value: "5.000+", label: "Clientes protegidos" },
      { value: "98%",    label: "Satisfacción" },
    ],
  },

  /* ───────── SPIDER MENU DATA ───────── */
  spiderMenu: [
    {
      id: "personas",
      label: "Personas",
      icon: "👤",
      angle: -90,
      childStep: 14,
      children: [
        { label: "Vehículos",              icon: "🚗", serviceId: "personas-vehiculos" },
        { label: "Hogar",                  icon: "🏠", serviceId: "personas-hogar" },
        { label: "Vida y\nAs. Médica",     icon: "❤️", serviceId: "personas-vida-medica" },
        { label: "Seguro\nde Viaje",       icon: "✈️", serviceId: "personas-viaje" },
        { label: "Vida y\nAhorro",         icon: "💰", serviceId: "personas-vida-ahorro" },
      ],
    },
    {
      id: "empresas",
      label: "Empresas",
      icon: "🏢",
      angle: 30,
      childStep: 10,
      children: [
        { label: "Multi-\nrriesgo",        icon: "🔐", serviceId: "empresas-multirriesgo" },
        { label: "Programas\nSeguros",     icon: "📋", serviceId: "empresas-programas" },
        { label: "Transporte",             icon: "🚢", serviceId: "empresas-transporte" },
        { label: "Resp.\nCivil",           icon: "⚖️", serviceId: "empresas-rc" },
        { label: "Accidentes\nPersonales", icon: "⛑️", serviceId: "empresas-accidentes" },
        { label: "Casco\nAéreo/Mar.",      icon: "⚓", serviceId: "empresas-casco" },
        { label: "Asistencia\nMédica",     icon: "🏥", serviceId: "empresas-medica" },
      ],
    },
    {
      id: "fianzas",
      label: "Fianzas",
      icon: "📜",
      angle: 150,
      childStep: 10,
      children: [
        { label: "BUA",   icon: "📄", serviceId: "fianzas-bua"   },
        { label: "CC",    icon: "📄", serviceId: "fianzas-cc"    },
        { label: "EOBCM", icon: "📄", serviceId: "fianzas-eobcm" },
        { label: "SO",    icon: "📄", serviceId: "fianzas-so"    },
        { label: "PGB",   icon: "📄", serviceId: "fianzas-pgb"   },
        { label: "FL",    icon: "📄", serviceId: "fianzas-fl"    },
        { label: "GA",    icon: "📄", serviceId: "fianzas-ga"    },
        { label: "GJ",    icon: "📄", serviceId: "fianzas-gj"    },
        { label: "GAR",   icon: "📄", serviceId: "fianzas-gar"   },
        { label: "GA",    icon: "📄", serviceId: "fianzas-ga"    },
      ],
    },
  ],


  /* ───────── WHATSAPP ───────── */
  waNumber: "593998661249",

  /* ───────── DESCRIPCIONES DE SERVICIOS ───────── */
  serviceInfo: {
    /* Servicios de la sección principal */
    "vida": {
      title: "Seguro de Vida",
      desc: "Garantiza el bienestar de tu familia ante cualquier eventualidad. En caso de fallecimiento o invalidez, tu familia recibirá una indemnización que les permitirá mantener su calidad de vida. Planes flexibles con primas accesibles que se adaptan a tu ciclo de vida y presupuesto.",
      features: ["Cobertura por fallecimiento", "Invalidez total y parcial", "Enfermedades graves (cáncer, ACV, infarto)", "Doble indemnización por accidente", "Gastos de sepelio incluidos"],
    },
    "salud": {
      title: "Seguro de Salud",
      desc: "Acceso a la mejor atención médica sin preocuparte por los costos. Contamos con una amplia red de clínicas y médicos especialistas a nivel nacional e internacional. Cobertura desde consultas ambulatorias hasta cirugías de alta complejidad.",
      features: ["Hospitalización y cirugías mayores", "Consultas ambulatorias ilimitadas", "Medicamentos recetados", "Maternidad y recién nacidos", "Emergencias en el exterior"],
    },
    "vehicular": {
      title: "Seguro Vehicular",
      desc: "Tu vehículo protegido ante accidentes, robos y daños a terceros. Asistencia en carretera disponible las 24 horas del día, los 7 días de la semana. Contamos con talleres autorizados en todo el país para una reparación rápida y de calidad.",
      features: ["Pérdida total y pérdida parcial", "Responsabilidad civil obligatoria y ampliada", "Asistencia en carretera 24/7", "Vehículo de reemplazo", "Daños por fenómenos naturales"],
    },
    "empresarial": {
      title: "Seguro Empresarial",
      desc: "Soluciones integrales para proteger tu negocio, activos, empleados y responsabilidad frente a terceros. Diseñamos programas a medida para empresas de todos los tamaños, desde PYMES hasta grandes corporaciones con múltiples sedes.",
      features: ["Todo riesgo empresarial", "Responsabilidad civil patronal", "Cobertura para empleados", "Pérdida de beneficios", "Equipo electrónico y maquinaria"],
    },
    "pymes": {
      title: "Seguros PYMES",
      desc: "Paquetes diseñados especialmente para pequeñas y medianas empresas que necesitan protección completa sin costos exorbitantes. Un solo contrato cubre múltiples riesgos para que puedas concentrarte en hacer crecer tu negocio.",
      features: ["Multirriesgo empresarial", "RC patronal", "Equipos y maquinaria", "Robo y hurto", "Responsabilidad civil de explotación"],
    },
    "individuales": {
      title: "Planes Individuales",
      desc: "Protección personalizada para ti y tu familia: vida, salud y accidentes con coberturas flexibles a tu medida. Asesoría 100% personalizada para encontrar el plan que mejor se adapta a tus necesidades y presupuesto.",
      features: ["Accidentes personales", "Vida individual", "Enfermedad grave", "Invalidez permanente", "Gastos médicos por accidente"],
    },
    /* Spider / menú araña */
    "personas-vehiculos":  { title: "Vehículos",             desc: "Protege tu auto, moto o camioneta frente a accidentes, robo y daños a terceros. Asistencia en carretera 24/7 y vehículo de reemplazo incluido.", features: ["Pérdida total y parcial","Responsabilidad civil","Asistencia 24/7","Vehículo de reemplazo"] },
    "personas-hogar":      { title: "Hogar",                 desc: "Tu vivienda y todo su contenido protegidos ante incendio, robo, inundaciones y daños eléctricos. Asistencia de plomería, electricidad y cerrajería sin costo adicional.", features: ["Incendio y explosión","Robo de contenidos","Daños por agua","Responsabilidad civil familiar","Asistencia hogar 24/7"] },
    "personas-vida-medica":{ title: "Vida y Asistencia Médica", desc: "Un plan que combina seguro de vida con acceso a atención médica de calidad. Protege a tu familia económicamente y garantiza tu salud en un solo producto.", features: ["Fallecimiento e invalidez","Enfermedades graves","Hospitalización y cirugías","Consultas ambulatorias","Medicamentos"] },
    "personas-viaje":      { title: "Seguro de Viaje",       desc: "Viaja tranquilo a cualquier destino del mundo. Cubrimos emergencias médicas en el exterior, cancelaciones de vuelo, pérdida de equipaje y repatriación sanitaria.", features: ["Emergencias médicas exterior","Evacuación y repatriación","Cancelación de vuelos","Pérdida de equipaje","Asistencia legal"] },
    "personas-vida-ahorro":{ title: "Vida y Ahorro",         desc: "Combina protección de vida con un componente de ahorro que genera rendimientos. Garantiza una suma asegurada al vencimiento o en caso de fallecimiento anticipado.", features: ["Seguro de vida base","Ahorro con rendimiento garantizado","Capital al vencimiento","Préstamo sobre rescate","Beneficios fiscales"] },
    "empresas-multirriesgo":{ title: "Multirriesgo Empresarial", desc: "Cobertura todo en uno para tu negocio: instalaciones, equipos, mercancías y responsabilidad civil en una sola póliza. Ideal para comercios, oficinas e industrias.", features: ["Incendio y explosión","Robo con fuerza","Daños por agua","Responsabilidad civil","Lucro cesante"] },
    "empresas-programas":  { title: "Programas de Seguros",  desc: "Diseñamos programas corporativos a la medida: análisis de riesgos, estructuración de coberturas y administración centralizada para grupos empresariales.", features: ["Auditoría de riesgos","Coberturas personalizadas","Administración centralizada","Reportes de siniestralidad","Renovaciones anuales"] },
    "empresas-transporte": { title: "Transporte",            desc: "Protege tus mercancías en tránsito por tierra, mar o aire, tanto en el mercado local como en comercio exterior. Carga general, refrigerados y valores.", features: ["Transporte terrestre","Transporte marítimo y aéreo","Todo riesgo o básica","Perecederos y refrigerados","RC del transportista"] },
    "empresas-rc":         { title: "Responsabilidad Civil", desc: "Protege a tu empresa ante reclamaciones de terceros por daños corporales o materiales causados en el ejercicio de tu actividad. RC de explotación, patronal y profesional.", features: ["RC de explotación","RC patronal","RC de productos","RC profesional","Defensa jurídica incluida"] },
    "empresas-accidentes": { title: "Accidentes Personales", desc: "Garantiza una indemnización a tus empleados ante accidentes que causen fallecimiento, invalidez o incapacidad. Complementa al IESS con coberturas superiores.", features: ["Muerte accidental","Invalidez permanente","Incapacidad temporal","Gastos médicos","Cobertura 24/7"] },
    "empresas-casco":      { title: "Casco Aéreo / Marítimo", desc: "Cobertura especializada para aeronaves y embarcaciones. Protegemos el casco, maquinaria y equipo de a bordo con alcance mundial y condiciones de mercado internacional.", features: ["Daños al casco y maquinaria","Responsabilidad civil","Todo riesgo","Remoción de restos","P&I embarcaciones"] },
    "empresas-medica":     { title: "Asistencia Médica Empresarial", desc: "Plan colectivo de salud para tus empleados: hospitalización, cirugías, consultas, odontología y medicamentos. Mejora el bienestar de tu equipo y reduce el ausentismo.", features: ["Hospitalización y cirugías","Consultas ambulatorias","Maternidad y neonatal","Odontología","Medicamentos con receta"] },
    "fianzas-bua":   { title: "BUA — Buen Uso del Anticipo", desc: "Garantiza que los anticipos entregados al contratista serán empleados exclusivamente en la ejecución del contrato. Exigida en contratos públicos y privados con anticipos.", features: ["Garantía del anticipo","Amortización proporcional","Contratos SERCOP","Liberación automática"] },
    "fianzas-cc":    { title: "CC — Cumplimiento de Contrato", desc: "Asegura que el contratista cumplirá todas las obligaciones pactadas en plazo, calidad y especificaciones. Obligatoria en contratación pública y privada de gran cuantía.", features: ["5% al 10% del contrato","Contratación pública","Obras, bienes y servicios","Ejecución ante incumplimiento"] },
    "fianzas-eobcm": { title: "EOBCM — Estabilidad de Obra", desc: "Cubre el período post-entrega garantizando estabilidad estructural, buen funcionamiento de instalaciones y calidad de materiales. Garantía de postventa en construcción.", features: ["Período post-recepción","Estabilidad estructural","Funcionamiento de equipos","Calidad de materiales","Vigencia 5 años SERCOP"] },
    "fianzas-so":    { title: "SO — Seriedad de la Oferta", desc: "Garantiza que el oferente mantendrá su propuesta durante la licitación y firmará el contrato si es adjudicado. Protege al contratante de postores que retiren su oferta.", features: ["1% al 3% de la oferta","Licitaciones públicas y privadas","Liberación a no adjudicados","Vigencia hasta firma del contrato"] },
    "fianzas-pgb":   { title: "PGB — Pago a la Garantía de Bienes", desc: "Garantiza el pago de bienes adquiridos bajo modalidades de crédito o consignación. Protege al proveedor ante incumplimiento de pago y facilita operaciones comerciales.", features: ["Garantía de pago al proveedor","Compras a crédito y consignación","Endosable y transferible","Plazos del crédito comercial"] },
    "fianzas-fl":    { title: "FL — Fiel Labor", desc: "Protege al empleador ante actos deshonestos, fraudes o malversaciones cometidos por empleados en el ejercicio de sus funciones. Cubre pérdidas económicas por conducta deshonesta.", features: ["Malversación y fraude","Protege activos y valores","Empleados de confianza","Cobertura individual o colectiva"] },
    "fianzas-ga":    { title: "GA — Garantía Aduanera", desc: "Garantiza el pago de tributos y aranceles ante el SENAE. Exigida para importadores, agentes de aduana y operadores de comercio exterior como requisito para operar.", features: ["Garantía ante el SENAE","Tributos y aranceles","Tránsito aduanero","Admisión temporal","Renovación anual"] },
    "fianzas-gj":    { title: "GJ — Garantía Judicial", desc: "Reemplaza el depósito en efectivo exigido en procesos judiciales. Permite mantener la liquidez mientras se resuelve el litigio, presentando la fianza como garantía ante el juzgado.", features: ["Sustitución de depósito judicial","Procesos civiles y laborales","Liberación de medidas cautelares","Todas las instancias judiciales"] },
    "fianzas-gar":   { title: "GAR — Garantía de Arrendamiento", desc: "Sustituye el depósito en efectivo exigido en contratos de arrendamiento comercial o residencial. Protege al arrendador ante impago de cánones o daños al inmueble.", features: ["Reemplaza depósito en efectivo","Cánones impagos","Daños al inmueble","Locales y vivienda","Plazos del contrato de arriendo"] },
  },

  /* ───────── SERVICES ───────── */
  services: [
    {
      id: "vida",
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 42s-17-10.5-17-22a12 12 0 0124 0 12 12 0 0124 0C41 31.5 24 42 24 42z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
        <path d="M17 24h6l3-5 4 10 3-5h5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      title: "Seguro de Vida",
      desc:  "Garantiza el bienestar de tu familia ante cualquier eventualidad. Planes flexibles que se adaptan a tu ciclo de vida.",
      features: ["Cobertura por fallecimiento", "Invalidez total y parcial", "Enfermedades graves"],
    },
    {
      id: "salud",
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="32" height="32" rx="6" stroke="currentColor" stroke-width="2.5"/>
        <path d="M24 16v16M16 24h16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
      title: "Seguro de Salud",
      desc:  "Acceso a la mejor atención médica sin preocuparte por los costos. Cobertura nacional e internacional.",
      features: ["Hospitalización y cirugías", "Medicamentos recetados", "Red médica premium"],
    },
    {
      id: "vehicular",
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 28l4-12h28l4 12" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
        <rect x="4" y="28" width="40" height="10" rx="3" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="14" cy="38" r="4" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="34" cy="38" r="4" stroke="currentColor" stroke-width="2.5"/>
        <path d="M18 38h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
      title: "Seguro Vehicular",
      desc:  "Tu vehículo protegido ante accidentes, robos y daños a terceros. Asistencia en carretera 24/7.",
      features: ["Pérdida total y parcial", "Responsabilidad civil", "Asistencia en ruta"],
    },
    {
      id: "empresarial",
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="16" width="32" height="26" rx="3" stroke="currentColor" stroke-width="2.5"/>
        <path d="M16 16V12a2 2 0 012-2h12a2 2 0 012 2v4" stroke="currentColor" stroke-width="2.5"/>
        <path d="M8 27h32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M20 27v4M28 27v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
      title: "Seguro Empresarial",
      desc:  "Soluciones integrales para proteger tu negocio, activos, empleados y responsabilidad frente a terceros.",
      features: ["Todo riesgo empresarial", "Responsabilidad civil", "Cobertura para empleados"],
    },
    {
      id: "pymes",
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="18" width="36" height="24" rx="3" stroke="currentColor" stroke-width="2.5"/>
        <path d="M14 18V14a2 2 0 012-2h16a2 2 0 012 2v4" stroke="currentColor" stroke-width="2.5"/>
        <rect x="18" y="28" width="12" height="14" rx="1.5" stroke="currentColor" stroke-width="2"/>
        <path d="M6 30h36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
      title: "Seguros PYMES",
      desc:  "Paquetes diseñados para pequeñas y medianas empresas que necesitan protección completa sin costos exorbitantes.",
      features: ["Multirriesgo empresarial", "RC patronal", "Equipos y maquinaria"],
    },
    {
      id: "individuales",
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="16" r="9" stroke="currentColor" stroke-width="2.5"/>
        <path d="M8 42c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M30 36l3 3 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      title: "Planes Individuales",
      desc:  "Protección personalizada para ti y tu familia: vida, salud y accidentes con coberturas flexibles a tu medida.",
      features: ["Accidentes personales", "Vida individual", "Enfermedad grave"],
    },
  ],

  /* ───────── ABOUT ───────── */
  about: {
    eyebrow: "Sobre SmartBroker",
    headline: "Más que un seguro,<br>una promesa de respaldo.",
    body: [
      "Somos una corredora de seguros independiente con más de 15 años en el mercado, comprometida con ofrecer asesoría honesta, soluciones personalizadas y acompañamiento real en los momentos que más importan.",
      "No trabajamos para las aseguradoras; trabajamos para ti. Nuestro modelo independiente nos permite acceder a las mejores pólizas del mercado y negociar en nombre de nuestros clientes.",
    ],
    values: [
      {
        icon: `<svg viewBox="0 0 32 32" fill="none"><path d="M16 3l3.5 7 7.5 1-5.5 5.5 1.3 7.5L16 20.5l-6.8 3.5 1.3-7.5L5 11l7.5-1z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
        title: "Confianza",
        desc: "Transparencia total en cada cotización y póliza.",
      },
      {
        icon: `<svg viewBox="0 0 32 32" fill="none"><path d="M16 4l10 5v9c0 5.5-4.5 10-10 12C6 28 2 23.5 2 18V9l14-5z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
        title: "Respaldo",
        desc: "Aliados con las aseguradoras más sólidas del país.",
      },
      {
        icon: `<svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="currentColor" stroke-width="1.8"/><path d="M16 10v7l4 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
        title: "Experiencia",
        desc: "9+ años asesorando con criterio y conocimiento.",
      },
      {
        icon: `<svg viewBox="0 0 32 32" fill="none"><path d="M4 20l7-7 5 5 7-9 5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        title: "Resultados",
        desc: "Más de 8.000 clientes protegidos y satisfechos.",
      },
    ],
  },

  /* ───────── TESTIMONIALS ───────── */
  testimonials: [
    {
      name: "Catalina Restrepo",
      role: "Empresaria · Santo Domingo",
      avatar: "CR",
      text: "SmartBroker cambió mi perspectiva sobre los seguros. Su asesoría fue clara, sin letra pequeña, y encontraron un plan que realmente se ajustaba a mi presupuesto.",
      rating: 5,
    },
    {
      name: "Andrés Molina",
      role: "Gerente de Transporte · Cuenca",
      avatar: "AM",
      text: "Llevamos 3 años trabajando con ellos para asegurar toda nuestra flota vehicular. Excelente servicio, respuesta rápida en siniestros y tarifas muy competitivas.",
      rating: 5,
    },
    {
      name: "Lucía Herrera",
      role: "Médica · Guayaquil",
      avatar: "LH",
      text: "El seguro de salud que consiguieron para mi familia superó todas nuestras expectativas. Acceso rápido, cobertura completa y un acompañamiento muy profesional.",
      rating: 5,
    },
    {
      name: "Jorge Quintero",
      role: "Constructor · Quito",
      avatar: "JQ",
      text: "Encontraron una póliza empresarial que protegía exactamente lo que necesitaba. El proceso fue sencillo y el equipo siempre estuvo disponible.",
      rating: 5,
    },
  ],

  /* ───────── CONTACT ───────── */
  contact: {
    headline: "¿Listo para proteger lo que más importa?",
    subtext:  "Completa el formulario y un asesor te contactará en menos de 24 horas. Sin compromisos, sin presión.",
    info: [
      { icon: "📍", label: "Dirección", value: "Av. Granda Centeno Oe5-50 y Vasco De Contreras Edificio Ikonus. PB. Oficina 3. Quito, Ecuador" },
      { icon: "📞", label: "Teléfono",  value: "099 866 1249" },
      { icon: "✉️", label: "Email",     value: "yordonez@smartbroker.com.ec" },
      { icon: "🕐", label: "Horario",   value: "Lun–Vie: 8am–6pm" },
    ],
    social: [
      { name: "LinkedIn",  href: "#", icon: "in", cls: "social-btn--linkedin"  },
      { name: "Instagram", href: "#", icon: "ig", cls: "social-btn--instagram" },
      { name: "Facebook",  href: "#", icon: "fb", cls: "social-btn--facebook"  },
      { name: "WhatsApp",  href: "#", icon: "wa", cls: "social-btn--whatsapp"  },
    ],
  },

  /* ───────── SITEMAP ───────── */
  sitemap: {
    primary: [
      { label: "Inicio",    href: "#inicio",    desc: "Página principal" },
      { label: "Servicios", href: "#servicios", desc: "Portafolio de seguros" },
      { label: "Nosotros",  href: "#nosotros",  desc: "Quiénes somos" },
      { label: "Contacto",  href: "#contacto",  desc: "Formulario y datos" },
    ],
    services: [
      { label: "Seguro de Vida",        href: "#vida" },
      { label: "Seguro de Salud",       href: "#salud" },
      { label: "Seguro Vehicular",      href: "#vehicular" },
      { label: "Seguro Empresarial",    href: "#empresarial" },
    ],
    legal: [
      { label: "Política de privacidad", href: "#" },
      { label: "Términos y condiciones", href: "#" },
      { label: "Tratamiento de datos",   href: "#" },
    ],
  },

};

export default AppModel;
