// ============================================================
// HERA BRAND CONFIG — edita solo este archivo para cambiar
// colores, tipografías, precios, textos clave y enlaces CTA.
// ============================================================

export const brandColors = {
  heraPrimary: "#9881D7",
  heraBg: "#0B0712",
  heraText: "#F2F1FF",
  heraMuted: "#BDB7D6",
  heraAccentGold: "#E7C978",
  heraSurface: "#160D2A",
  heraBorder: "#2A1F45",
  heraHover: "#B49AE8",
} as const;

export const brandTypography = {
  fontSans: "Inter, system-ui, -apple-system, sans-serif",
} as const;

export const brandLinks = {
  ctaPrimary: "https://hera.heradome.com",
  ctaDemo: "https://hera.heradome.com",
  ctaLogin: "https://hera.heradome.com",
  ctaContact: "hera.contactanos@gmail.com",
  siteUrl: "https://heradome.com",
  instagram: "https://www.instagram.com/hera.crm",
  privacyPolicy: "/privacy",
  termsOfService: "/terms",
  email: "hera.contactanos@gmail.com",
} as const;

export const brandPricing = [
  {
    id: "basico",
    name: "Básico",
    price: "18",
    period: "mes",
    tagline: "Para autónomos y micro-equipos.",
    features: [
      "Clientes",
      "Citas",
      "Tareas",
      "Facturas",
      "Soporte por email",
    ],
    cta: "Probar gratis",
    recommended: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "32",
    period: "mes",
    tagline: "Para salones de belleza y barberías con volumen.",
    features: [
      "Todo lo de Básico",
      "Empleados",
      "Departamentos",
      "Chatbot",
      "Notificaciones por email",
    ],
    cta: "Probar gratis",
    recommended: true,
  },
  {
    id: "business",
    name: "Business",
    price: "38",
    period: "mes",
    tagline: "Para pymes con más carga diaria.",
    features: [
      "Todo lo de Pro",
      "Configuración avanzada",
      "Onboarding prioritario",
    ],
    cta: "Probar gratis",
    recommended: false,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: null,
    period: null,
    tagline: "Multi-sede, integraciones, acuerdos.",
    features: [
      "Multi-sede",
      "Integraciones a medida",
      "Acuerdos comerciales",
      "Soporte dedicado",
    ],
    cta: "Hablar con nosotros",
    recommended: false,
  },
] as const;

// Placeholders de tracción (editar cuando tengáis datos reales)
export const brandMetrics = {
  pilotosActivos: "", // Pon un número cuando lo tengas, ej: "12"
  solicitudesDemo: "", // Ej: "47"
  targetClientes: "60",
} as const;
