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
  /** Imagen destacada (miniatura de la tarjeta) en /public/images */
  src: string;
  /**
   * Galería del proyecto — hasta 5 imágenes que aparecen en la ventana
   * emergente al hacer clic en la flecha de la tarjeta. Cada entrada es la
   * ruta de una imagen en /public/images; deja "" para un marcador de posición
   * que podrás reemplazar más adelante por la foto final.
   */
  gallery: string[];
};

// Ordenados cronológicamente, del más antiguo al más reciente.
export const PROJECTS: Project[] = [
  {
    name: "Centro de Capacitación de Kasai Mexicana",
    location: "León Guanajuato, MX",
    category: "Ejecutivo",
    year: "2017",
    description:
      "Un centro de capacitación moderno que integra espacios de aprendizaje y áreas de recreación para la comunidad.",
    src: "/images/kasai.jpg",
    gallery: ["/images/kasai.jpg", "/images/kasai2.jpg"],
  },
  {
    name: "Residencial Padilla",
    location: "Lagos de Moreno, Jalisco, MX",
    category: "Residencial",
    year: "2022",
    description:
      "Una vivienda moderna de gran tamaño y lujosa. Totalmente adaptada a las necesidades del cliente y su familia.",
    src: "/images/house.jpg",
    // 5 espacios: la 1.ª es la foto destacada; reemplaza "" por más fotos.
    gallery: [
      "/images/house.jpg",
      "/images/padilla2.jpg",
      "/images/padilla3.jpg",
      "/images/padilla4.jpg",
      "/images/padilla5.jpg",
    ],
  },
  {
    name: "Residencial Vallejo",
    location: "San Miguel de Allende, MX",
    category: "Residencial",
    year: "2024",
    description:
      "Una residencia en ladera de volúmenes en voladizo, con una vista impresionante desde la alberca exterior.",
    src: "/images/vallejo.jpg",
    // 5 espacios: la 1.ª es la foto destacada; reemplaza "" por más fotos.
    gallery: [
      "/images/vallejo.jpg",
      "/images/vallejo2.jpg",
      "/images/vallejo3.jpg",
      "/images/vallejo4.jpg",
      "/images/vallejo5.jpg",
    ],
  },
  {
    name: "Casa Luani",
    location: "León Guanajuato, MX",
    category: "Residencial",
    year: "2026",
    description:
      "Una vivienda contemporánea diseñada a detalle, pensada para el confort y el estilo de vida de la familia que la habita.",
    src: "/images/luani.jpeg",
    // 5 espacios: la 1.ª es la foto destacada; reemplaza "" por más fotos.
    gallery: [
      "/images/luani.jpeg",
      "/images/luani2.jpeg",
      "/images/luani3.jpeg",
      "/images/luani4.jpeg",
      "/images/luani5.jpeg",
    ],
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
      "Excelente Arquitecto. Desde el diseño hasta la entrega de la casa, todo el proceso fue muy profesional. Siempre estuvo atento a los detalles, cumplió con los tiempos acordados y la calidad de la construcción superó mis expectativas. Lo recomiendo ampliamente por su compromiso, seriedad y excelente servicio. ¡Estamos muy contentos con el Arq Rey!.",
    name: "CASA LUANI",
    role: "Proyecto Residencial",
  },
  {
    quote:
      "Excelente trabajo, muy profesional, plasmó nuestras ideas en el proyecto, atención personalizada.",
    name: "RESIDENCIAL PADILLA",
    role: "Proyecto Residencial",
  },
  {
    quote:
      "Nuestra casa de los sueños fue diseñada y proyectada por Rey Cardona, quien de manera amable, paciente y atenta fue plasmando lo que ni siquiera nosotros teníamos claro. La idea se fue concretando a lo largo de no menos de 20 sesiones en las que Rey llegó siempre puntual acompañado de los planos que reflejaban claramente las decisiones tomadas en la anterior. Al momento de hacer realidad la construcción los planos ejecutivos nos permitieron realizar la obra sin ningún contratiempo. El resultado fue un hogar cálido, lleno de luz, donde disfrutamos reunirnos con familia y amigos. Gracias Rey!.",
    name: "RESIDENCIAL VALLEJO",
    role: "Proyecto Residencial",
  },
];
