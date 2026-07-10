import {
  Home,
  Factory,
  Sofa,
  Store,
  Map,
  DraftingCompass,
  type LucideIcon,
} from "lucide-react";

/* ── Navegación ──────────────────────────────────────────────── */

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "#home" },
  { label: "Nosotros", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Proyectos", href: "#projects" },
  { label: "Galería", href: "#gallery" },
  { label: "Contacto", href: "#contact" },
];

/* ── Servicios ───────────────────────────────────────────────── */

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    icon: Home,
    title: "Diseño Residencial",
    description:
      "Creamos espacios habitables que combinan funcionalidad, confort y estética, adaptándonos al estilo de vida y las necesidades de cada familia.",
  },
  {
    icon: Factory,
    title: "Diseño Industrial",
    description:
      "Desarrollamos proyectos para naves industriales, bodegas y espacios de producción, optimizando la distribución, la eficiencia operativa y el cumplimiento de normativas.",
  },
  {
    icon: Sofa,
    title: "Diseño de Mobiliario",
    description:
      "Diseñamos mobiliario personalizado que integra funcionalidad, ergonomía y diseño, aprovechando al máximo cada espacio y reflejando el estilo del proyecto.",
  },
  {
    icon: Store,
    title: "Diseño Comercial",
    description:
      "Diseñamos locales, oficinas y espacios comerciales que fortalecen la identidad de cada negocio y mejoran la experiencia de clientes y colaboradores.",
  },
  {
    icon: Map,
    title: "Diseño Urbano",
    description:
      "Planeamos y diseñamos espacios públicos y entornos urbanos que promueven la movilidad, la integración social y el desarrollo sostenible de las comunidades.",
  },
  {
    icon: DraftingCompass,
    title: "Proyecto Ejecutivo",
    description:
      "Elaboramos la documentación técnica completa para la construcción, incluyendo planos, detalles, especificaciones y procesos necesarios para ejecutar la obra con precisión.",
  },
];

/* ── Proyectos ───────────────────────────────────────────────── */

export type Project = {
  name: string;
  location: string;
  category: string;
  year: string;
  description: string;
  /** Ruta de la imagen del proyecto en /public/images */
  src: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Residencial Vallejo",
    location: "San Miguel de Allende, MX",
    category: "Residencial",
    year: "2024",
    description:
      "Una residencia en ladera de volúmenes en voladizo, que enmarca el valle a través de cristales de piso a techo.",
    src: "/images/vallejo.jpg",
  },
  {
    name: "Residencial Padilla",
    location: "Lagos de Moreno, Jalisco, MX",
    category: "Residencial",
    year: "2022",
    description:
      "Una vivienda moderna de gran tamaño y lujosa. Totalmente adaptada a las necesidades del cliente y su familia.",
    src: "/images/padilla.jpg",
  },
  {
    name: "Centro de Capacitación de Kasai Mexicana",
    location: "León, Guanajuato, MX",
    category: "Ejecutivo",
    year: "2017",
    description:
      "Un centro de capacitación moderno que integra espacios de aprendizaje y áreas de recreación para la comunidad.",
    src: "/images/kasai.jpg",
  },
  {
    name: "Casa Luani",
    location: "León, Guanajuato, MX",
    category: "Residencial",
    year: "2026",
    description:
      "Una vivienda contemporánea diseñada a detalle, pensada para el confort y el estilo de vida de la familia que la habita.",
    src: "/images/luani.jpeg",
  },
];

/* ── Galería (máximo 8 imágenes) ─────────────────────────────── */

export type GallerySlide = { id: number; label: string; src: string };

export const GALLERY_SLIDES: GallerySlide[] = Array.from(
  { length: 8 },
  (_, i) => ({
    id: i + 1,
    label: `Imagen de Galería ${String(i + 1).padStart(2, "0")}`,
    src: `/images/imagen${i + 1}.jpg`,
  })
);

/* ── Estadísticas ────────────────────────────────────────────── */

export type Stat = { value: number; suffix: string; label: string };

export const STATS: Stat[] = [
  { value: 100, suffix: "+", label: "Proyectos Completados" },
  { value: 20, suffix: "+", label: "Años de Experiencia" },
  { value: 50, suffix: "+", label: "Clientes Satisfechos" },
];

/* ── Testimonios (marcadores de posición) ────────────────────── */

export type Testimonial = { quote: string; name: string; role: string };

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Excelente Arquitecto. Desde el diseño hasta la entrega de la casa, todo el proceso fue muy profesional. Siempre estuvo atento a los detalles, cumplió con los tiempos acordados y la calidad de la construcción superó mis expectativas. Lo recomiendo ampliamente por su compromiso, seriedad y excelente servicio. ¡Estamos muy contentos con el Arq Rey!",
    name: "Casa Luani",
    role: "Proyecto Residencial",
  },
  {
    quote:
      "El testimonio del cliente aparecerá aquí. Unas líneas sobre la experiencia de trabajar con ARQCA y el resultado obtenido.",
    name: "Nombre del Cliente",
    role: "Proyecto Comercial",
  },
  {
    quote:
      "El testimonio del cliente aparecerá aquí. Unas líneas sobre la experiencia de trabajar con ARQCA y el resultado obtenido.",
    name: "Nombre del Cliente",
    role: "Diseño de Interiores",
  },
];
