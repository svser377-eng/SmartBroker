/**
 * SmartBroker – Models Layer
 * Centraliza todos los datos de la aplicación.
 * Para actualizar contenido, edita únicamente este archivo.
 */

const AppModel = {

  /* ───────── BRAND ───────── */
  brand: {
    name: "SmartBroker",
    /*tagline: "Tu mejor aliado",
    description: "Corredora de seguros",*/
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
    { label: "Inicio",           href: "#inicio" },
    { label: "Servicios",        href: "#servicios" },
    { label: "Nosotros",         href: "#nosotros" },
    { label: "Contacto",         href: "#contacto" },
    { label: "Acceso clientes",  href: "https://app.softseguros.com/login_asegurados/", target: "_blank" },
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
    "seguridad": {
      title: "Empresas de Seguridad",
      desc: "En Smartbroker ofrecemos soluciones especializadas en seguros para empresas de seguridad privada, diseñadas para cumplir con los requisitos exigidos por la normativa vigente para la obtención y renovación de permisos de operación. Protegemos a tu empresa, personal y operaciones con coberturas que brindan respaldo y tranquilidad en cada servicio.",
      features: ["Responsabilidad civil", "Accidentes personales para guarias y personal operativo", "Cobertura de Vida", "Protección de equipos y Bienes", "Asistencia Médica", "Coberturas patrimoniales para la operación de la empresa", "Dinero y Valores"],
    },
    /* Servicios de la sección principal */
    "vida": {
      title: "Seguro de Vida",
      desc: "Garantiza el bienestar de tu familia ante cualquier eventualidad. En caso de fallecimiento o invalidez, tu familia recibirá una indemnización que les permitirá mantener su calidad de vida. Planes flexibles con primas accesibles que se adaptan a tu ciclo de vida y presupuesto.",
      features: ["Cobertura por fallecimiento", "Invalidez total y parcial", "Enfermedades graves (cáncer, ACV, infarto)", "Doble indemnización por accidente", "Gastos de sepelio incluidos"],
    },
    "salud": {
      title: "Seguro de Salud",
      desc: "Protege tu salud y la de tu familia con soluciones integrales en asistencia médica nacional, internacional y adicional cobertura de gastos médicos mayores. Accede a atención médica, emergencias, hospitalización y respaldo financiero ante enfermedades o tratamientos de alto costo, con el acompañamiento y la tranquilidad que necesitas dentro y fuera del país.",
      features: ["Hospitalización y cirugías mayores", "Consultas ambulatorias ilimitadas", "Medicamentos recetados", "Maternidad y recién nacidos", "Emergencias en el exterior"],
    },
    "vehicular": {
      title: "Seguro Vehicular",
      desc: "Tu vehículo protegido ante accidentes, robos y daños a terceros. Asistencia en carretera disponible las 24 horas del día, los 7 días de la semana. Contamos con talleres autorizados en todo el país para una reparación rápida y de calidad.",
      features: ["Pérdida total y pérdida parcial", "Responsabilidad civil", "Asistencia 24/7", "Auto sustituto", "Daños por desastres naturales"],
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
      title: "Planes Individuales y Empresariales",
      desc: "En Smartbroker protegemos lo que más valoras con soluciones integrales en seguros para personas y empresas. Salud, vida, vehículos, hogar y coberturas corporativas con el respaldo y la asesoría que necesitas.",
      features: ["Seguros Individuales", "Asistencia Médica  Nacional e Internacional", "Gastos Mayores", "Vida y ahorro", "Vehiculos", "Hogar", "Accidentes Personales", "Viajes", "Seguros Empresariales", "Salud Corporativa", "Vehiculo y FLotas", "Responsabilidad Civil", "Multirriesgo Empresarial", "Transporte", "Todo Riesgo Construcción", "Fianzas", "Riesgos Laborales", "Vida y ahorro", "Beneficios para Colaboradores", "Accidentes Personales Colectivos", "Casco Aéreo / Maritimo"],
    },
    /* Spider / menú araña */
    "personas-vehiculos":  { title: "Vehículos",             desc: "Creamos un seguro acorde a tus necesidades, pensando en ti y tu familia para que viajen tranquilos, brindando la mejor protección.", features: ["Todo Riesgo","Pérdida parcial","Pérdida total","Choques","Responsabilidad civil(daños a terceros)","Robo","Auto Sustituto","Amparo patrimonial"] },
    "personas-hogar":      { title: "Hogar",                 desc: "Protegemos tu hogar, bienes inmuebles y sus contenidos ante los riesgos que pongan en peligro tu patrimonio y el de tu familia.", features: ["Incendio y explosión","Robo de contenidos","Daños por agua","Responsabilidad civil familiar","Asistencia hogar 24/7"] },
    "personas-vida-medica":{ title: "Vida y Asistencia Médica", desc: "La protección para los que amas, depende de ti. Coberturas acorde a tu presupuesto y necesidad.", features: ["Fallecimiento e invalidez","Vida y Ahorro","Enfermedades graves","Hospitalización y cirugías","Consultas ambulatorias","Medicamentos"] },
    "personas-viaje":      { title: "Seguro de Viaje",       desc: "Te brindamos tranquilidad y seguridad para que disfrutes tus viajes.", features: ["Emergencias médicas exterior","Evacuación y repatriación","Cancelación de vuelos","Pérdida de equipaje","Asistencia legal"] },
    "personas-vida-ahorro":{ title: "Vida y Ahorro",         desc: "Con nuestro plan de vida y ahorro, aseguras tú bienestar y el de tu familia mientras haces crecer tu dinero para alcanzar tus metas.", features: ["Seguro de vida base","Ahorro con rendimiento garantizado","Capital al vencimiento","Préstamo sobre rescate","Beneficios fiscales"] },
    "empresas-multirriesgo":{ title: "Multirriesgo Empresarial", desc: "Protegemos diversos riesgos que pueden afectar sus actividades y objetivos, su estabilidad y permanencia en el futuro.", features: ["Incendio y explosión","Robo con fuerza","Daños por agua","Responsabilidad civil","Lucro cesante"] },
    "empresas-programas":  { title: "Programas de Seguros",  desc: "Te asesoramos para que elijas la mejor opción de seguro empresarial, creamos productos que se ajusten a tu necesidad y presupuesto.", features: ["Auditoría de riesgos","Coberturas personalizadas","Administración centralizada","Reportes de siniestralidad","Renovaciones anuales"] },
    "empresas-transporte": { title: "Transporte",            desc: "Cobertura de los daños o pérdidas que sufran las mercaderías durante el transporte marítimo, aéreo o terrestre, para cargas internacionales y nacionales.", features: ["Transporte terrestre","Transporte marítimo y aéreo","Todo riesgo o básica","Perecederos y refrigerados","RC del transportista"] },
    "empresas-rc":         { title: "Responsabilidad Civil", desc: "Garantiza una cobertura apropiada sin que esto afecte al patrimonio o a la operatividad de la empresa.", features: ["Seguro de Responsabilidad Civil para Servicios de Vigilancia","Brinda protección y tranquilidad frente a las obligaciones legales del asegurado por daños o perjuicios ocasionados a terceros, derivados de las actividades del personal de vigilancia contratado, en cumplimiento de la normativa vigente."] },
    "empresas-accidentes": { title: "Accidentes Personales", desc: "Protegemos cada momento de tu vida, brindando cobertura en todo el mundo por cualquier accidente ocasionado fortuitamente.", features: ["Muerte accidental","Invalidez permanente","Incapacidad temporal","Gastos médicos","Cobertura 24/7","Seguro de Accidentes Personales para Empresas de Seguridad Privada","Diseñado para proteger a personal altamente expuesto, este seguro brinda respaldo ante accidentes, garantizando tranquilidad para la empresa y cumplimiento de los montos de cobertura exigidos por el ente regulador."] },
    "empresas-casco":      { title: "Casco Aéreo / Marítimo", desc: "Cubrimos los riesgos de daños físicos para aeronaves, embarcaciones marítimas, de uso particular y recreación en territorio nacional.", features: ["Daños al casco y maquinaria","Responsabilidad civil","Todo riesgo","Remoción de restos","P&I embarcaciones"] },
    "empresas-medica":     { title: "Asistencia Médica Empresarial", desc: "Impulsa el rendimiento de tu empresa cuidando a tu equipo. Nuestras soluciones de asistencia médica garantizan atención rápida y acceso a servicios de salud, reduciendo ausencias, aumentando la productividad y fortaleciendo tu negocio desde adentro.", features: ["Hospitalización y cirugías","Consultas ambulatorias","Maternidad y neonatal","Odontología","Medicamentos con receta"] },
    "fianzas-bua":   { title: "BUA — Buen Uso del Anticipo", desc: "Respalda que todos los recursos entregados como anticipo sean correctamente utilizados.", features: ["Garantía del anticipo","Amortización proporcional","Contratos SERCOP","Liberación automática"] },
    "fianzas-cc":    { title: "CC — Cumplimiento de Contrato", desc: "Garantiza la ejecución, en tiempo y calidad, de las condiciones estipuladas en tu contrato.", features: ["Contratación pública","Obras, bienes y servicios","Ejecución ante incumplimiento"] },
    "fianzas-eobcm": { title: "EOBCM — Estabilidad de Obra", desc: "Garantiza la debida ejecución de la obra y la buena calidad de los materiales que han sido utilizados en la realización del contrato.", features: ["Período post-recepción","Estabilidad estructural","Funcionamiento de equipos","Calidad de materiales","Vigencia 5 años SERCOP"] },
    "fianzas-so":    { title: "SO — Seriedad de la Oferta", desc: "Indemniza al beneficiario por la no subscripción de un contrato.", features: ["Licitaciones públicas y privadas","Liberación a no adjudicados","Vigencia hasta firma del contrato"] },
    "fianzas-pgb":   { title: "PGB — Pago a la Garantía de Bienes", desc: "Garantiza el cumplimiento de los subcontratistas de tu proyecto.", features: ["Garantía de pago al proveedor","Compras a crédito y consignación","Endosable y transferible","Plazos del crédito comercial"] },
    "fianzas-fl":    { title: "FL — Fiel Labor", desc: "Garantiza el cumplimiento de ordenanzas municipales, decretos presidenciales, acuerdos ministeriales o normativas en general.", features: ["Malversación y fraude","Protege activos y valores","Empleados de confianza","Cobertura individual o colectiva"] },
    "fianzas-ga":    { title: "GA — Garantía Aduanera", desc: "Garantiza el cumplimiento de obligaciones contraídas con la Aduana por los operadores de comercio exterior.", features: ["Garantía ante el SENAE","Tributos y aranceles","Tránsito aduanero","Admisión temporal","Renovación anual"] },
    "fianzas-gj":    { title: "GJ — Garantía Judicial", desc: "Asegura el cumplimiento de actos, resoluciones administrativas y/o providencias judiciales o arbitrales, proporcionando una capa adicional de seguridad y confianza en él.", features: ["Sustitución de depósito judicial","Procesos civiles y laborales","Liberación de medidas cautelares","Todas las instancias judiciales"] },
    "fianzas-gar":   { title: "GAR — Garantía de Arrendamiento", desc: "Cubre el riesgo de impago de alquileres dentro del contrato de arrendamiento.", features: ["Reemplaza depósito en efectivo","Cánones impagos","Daños al inmueble","Locales y vivienda","Plazos del contrato de arriendo"] },
  },

  /* ───────── SERVICES ───────── */
  services: [
    {
      id: "vehicular",
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 28l4-12h28l4 12" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
        <rect x="4" y="28" width="40" height="10" rx="3" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="14" cy="38" r="4" stroke="currentColor" stroke-width="2.5"/>
        <circle cx="34" cy="38" r="4" stroke="currentColor" stroke-width="2.5"/>
        <path d="M18 38h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
      title: "Vehicular",
      desc:  "Tu vehículo protegido ante accidentes, robos y daños a terceros. Asistencia en carretera 24/7 con talleres autorizados en todo el país.",
      /*features: [""],*/
    },
    {
      id: "salud",
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="32" height="32" rx="6" stroke="currentColor" stroke-width="2.5"/>
        <path d="M24 16v16M16 24h16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`,
      title: "Asistencia Médica",
      desc:  "Protege tu salud y la de tu familia con cobertura médica integral y respaldo ante gastos médicos mayores. Accede a atención, emergencias, hospitalización y una amplia red de servicios de salud diseñados para brindarte tranquilidad y bienestar en todo momento.",
      /*features: [""],*/
    },
    {
      id: "seguridad",
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4l18 7v13c0 11-8 20-18 24C14 44 6 35 6 24V11l18-7z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
        <circle cx="24" cy="22" r="5" stroke="currentColor" stroke-width="2.2"/>
        <path d="M16 36c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
      </svg>`,
      title: "Empresas de Seguridad",
      desc:  "Soluciones especializadas para empresas del sector de seguridad privada: protección de operaciones, personal y responsabilidad frente a terceros.",
      /*features: [""],*/
    },
    {
      id: "individuales",
      icon: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="14" r="8" stroke="currentColor" stroke-width="2.5"/>
        <path d="M4 40c0-7.7 6.3-14 14-14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="28" y="26" width="16" height="16" rx="3" stroke="currentColor" stroke-width="2.5"/>
        <path d="M32 34h8M36 30v8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
      title: "Individual / Empresarial",
      desc:  "Planes flexibles tanto para personas como para empresas de todos los tamaños. Un solo asesor para todas tus necesidades de protección.",
      
    },
  ],

  /* ───────── ABOUT ───────── */
  about: {
    eyebrow: "Sobre SmartBroker",
    headline: "Más que un seguro,<br>una promesa de respaldo.",
    body: [
      "Somos una corredora de seguros independiente con más de 9 años en el mercado, comprometida con ofrecer asesoría honesta, soluciones personalizadas y acompañamiento real en los momentos que más importan.",
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
      { icon: "📍", label: "Dirección", value: "Gaspar de Escalona N 38-39 y Av. Juan José de Villalengua Piso 2" },
      { icon: "📞", label: "Teléfono",  value: "099 866 1249 / 097 943 8015" },
      { icon: "✉️", label: "Email",     value: "yordonez@smartbroker.com.ec / operaciones@smartbroker.com.ec" },
      { icon: "🕐", label: "Horario",   value: "Lun–Vie: 8:30 am– 5:30 pm" },
    ],
    social: [
      { name: "LinkedIn",  href: "https://www.linkedin.com/company/smartbroker-ec/", icon: "in", cls: "social-btn--linkedin", target: "_blank", rel: "noopener noreferrer" },
      { name: "Instagram", href: "https://www.instagram.com/smart.broker.ec/", icon: "ig", cls: "social-btn--instagram", target: "_blank", rel: "noopener noreferrer" },
      { name: "Facebook",  href: "https://www.facebook.com/smart.broker.ec/", icon: "fb", cls: "social-btn--facebook", target: "_blank", rel: "noopener noreferrer"  },
      { name: "WhatsApp",  href: "https://wa.me/593998661249", icon: "wa", cls: "social-btn--whatsapp", target: "_blank", rel: "noopener noreferrer" },
      { name: "Tik-tok",  href: "https://www.tiktok.com/@smart.broker.ec", icon: "tt", cls: "social-btn--tik-tok", target: "_blank", rel: "noopener noreferrer"  },

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
      { label: "Vehicular",              href: "#vehicular" },
      { label: "Asistencia Médica",      href: "#salud" },
      { label: "Empresas de Seguridad",  href: "#seguridad" },
      { label: "Individual / Empresarial", href: "#individuales" },
    ],
    legal: [
      { label: "Política de privacidad", href: "#" },
      { label: "Términos y condiciones", href: "#" },
      { label: "Tratamiento de datos",   href: "#" },
    ],
  },

};

export default AppModel;

/* Exponer globalmente para acceso desde controllers */
window.AppModel = AppModel;
