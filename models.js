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
      image: "assets/LogoSmart.JPG", // Usa el logo real proporcionado
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
    { label: "Servicios", href: "#servicios" },
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
      { name: "LinkedIn",  href: "#", icon: "in" },
      { name: "Instagram", href: "#", icon: "ig" },
      { name: "Facebook",  href: "#", icon: "fb" },
      { name: "WhatsApp",  href: "#", icon: "wa" },
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
