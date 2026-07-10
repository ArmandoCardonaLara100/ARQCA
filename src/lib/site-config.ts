/**
 * ═══════════════════════════════════════════════════════════════
 *  ARQCA — CONFIGURACIÓN DEL SITIO
 *  Edita todo en este archivo para actualizar los datos de
 *  contacto, redes sociales, dirección y horario en todo el sitio.
 * ═══════════════════════════════════════════════════════════════
 */

export const SITE = {
  brand: "ARQCA",
  architect: "Reynaldo Cardona Guerrero",
  tagline: "Arquitectura diseñada para inspirar.",
  description:
    "ARQCA es el estudio de arquitectura de Reynaldo Cardona Guerrero — diseño residencial, comercial e interior definido por la precisión, la luz y una forma moderna atemporal.",
  url: "https://arqca.com", // ← tu dominio de producción
} as const;

export const CONTACT = {
  /** Número telefónico visible */
  phone: "+52 477 266 3307",
  /** Se usa para el enlace tel: — solo dígitos, con código de país */
  phoneHref: "tel:+524772663307",

  /** Enlace directo de WhatsApp */
  whatsapp: "https://wa.me/qr/BRUZZ76XPAZQJ1",

  /** Perfil de Instagram */
  instagram:
    "https://www.instagram.com/arqcaarquitectura?utm_source=qr&igsh=MXJqN20xZTBpc2N3cQ==",
  instagramHandle: "@arqcaarquitectura",

  /** Correo electrónico */
  email: "arqcaconstrucciones@gmail.com",

  /** Dirección que se muestra en la sección de contacto */
  address: "Av. Ejemplo 123, Col. Centro, Monterrey, N.L., México",

  /** Enlace de Google Maps — abre la ubicación en una pestaña nueva */
  mapsLink: "https://maps.app.goo.gl/cWjYMeGfA3m4pQ4z5",

  /**
   * URL del mapa de Google — pega aquí el src del iframe de tu mapa
   * (Google Maps → Compartir → Insertar un mapa). Mientras tanto se
   * muestra un marcador de posición.
   */
  mapsEmbedUrl: "",
} as const;

export const BUSINESS_HOURS = [
  { days: "Lunes — Viernes", hours: "9:00 — 18:00" },
  { days: "Sábado", hours: "10:00 — 14:00" },
  { days: "Domingo", hours: "Cerrado" },
] as const;
