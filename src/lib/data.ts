import {
  Anchor,
  Plane,
  Truck,
  Package,
  ShieldCheck,
  Warehouse,
  FileText,
  BadgeDollarSign,
  ShipWheel,
  CircleCheckBig,
  Award,
  Users,
  TimerReset,
  MapPinned,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import maritimoImg from "../assets/images/services/maritimo.png";
import aereoImg from "../assets/images/services/aereo.png";
import terrestreImg from "../assets/images/services/terrestre.png";
import consolidadaImg from "../assets/images/services/consolidada.png";
import seguroImg from "../assets/images/services/seguro.png";
import almacenamientoImg from "../assets/images/services/almacenamiento.png";

export const navItems = [
  { label: "Quiénes Somos", to: "/quienes-somos" },
  { label: "Servicios", to: "#servicios" },
  //{ label: "Países", to: "/" },
  { label: "Proceso", to: "#proceso" },
  { label: "Ventajas", to: "#ventajas" },
  { label: "Contacto", to: "#contacto" },
];

export const services = [
  {
    slug: "transporte-maritimo",
    icon: Anchor,
    title: "Transporte Marítimo",
    image: maritimoImg,
    description:
      "Envío de contenedores completos y carga consolidada desde los principales puertos de Asia y Norteamérica.",
    longDescription:
      "Nuestro servicio de transporte marítimo está orientado a importaciones de mercadería, contenedores completos y carga consolidada desde China y Estados Unidos hacia Bolivia. Coordinamos cada etapa del proceso, desde el origen hasta la entrega, buscando optimizar costos, mejorar tiempos y ofrecer trazabilidad en operaciones de comercio exterior.",
    features: [
      "Contenedores completos y carga consolidada",
      "Coordinación desde puertos internacionales",
      "Seguimiento del embarque y documentación",
      "Apoyo logístico hasta destino final en Bolivia",
    ],
  },
  {
    slug: "transporte-aereo",
    icon: Plane,
    title: "Transporte Aéreo",
    image: aereoImg,
    description:
      "Soluciones urgentes para mercadería de alto valor o tiempos de entrega reducidos.",
    longDescription:
      "El transporte aéreo está diseñado para operaciones que requieren velocidad, seguridad y mayor control del tiempo de tránsito. Es una excelente alternativa para cargas urgentes, productos de alto valor o mercadería que necesita llegar con prioridad desde Estados Unidos o China hacia Bolivia.",
    features: [
      "Ideal para carga urgente",
      "Tiempos de tránsito reducidos",
      "Seguimiento operativo constante",
      "Mayor agilidad para importaciones prioritarias",
    ],
  },
  {
    slug: "transporte-terrestre",
    icon: Truck,
    title: "Transporte Terrestre",
    image: terrestreImg,
    description:
      "Distribución nacional desde nuestros puntos logísticos hasta el destino final en Bolivia.",
    longDescription:
      "Nuestro servicio de transporte terrestre complementa la logística internacional con una distribución nacional segura y eficiente. Coordinamos la movilización de la mercadería dentro de Bolivia, asegurando que la entrega final se realice con puntualidad, control y respaldo operativo.",
    features: [
      "Distribución nacional",
      "Entrega final segura",
      "Coordinación logística interna",
      "Atención a distintos destinos en Bolivia",
    ],
  },
  {
    slug: "carga-consolidada",
    icon: Package,
    title: "Carga Consolidada",
    image: consolidadaImg,
    description:
      "Optimización de costos agrupando envíos para importadores que buscan eficiencia.",
    longDescription:
      "La carga consolidada permite reunir mercancía de distintos clientes en una misma operación logística para reducir costos y mejorar la eficiencia. Es ideal para importadores que no requieren un contenedor completo, pero desean mantener una operación ordenada, segura y rentable.",
    features: [
      "Reduce costos de importación",
      "Ideal para volúmenes medios o pequeños",
      "Mayor eficiencia operativa",
      "Alternativa flexible para importadores",
    ],
  },
  {
    slug: "seguro-de-carga",
    icon: ShieldCheck,
    title: "Seguro de Carga",
    image: seguroImg,
    description:
      "Protección de tu mercadería durante todo el proceso logístico con cobertura integral.",
    longDescription:
      "El seguro de carga brinda protección frente a imprevistos que puedan surgir durante el transporte internacional o nacional. Este servicio permite reducir riesgos y dar mayor tranquilidad al importador, protegiendo la inversión realizada en cada operación.",
    features: [
      "Cobertura para tu mercadería",
      "Respaldo ante imprevistos",
      "Mayor seguridad operativa",
      "Protección durante todo el proceso",
    ],
  },
  {
    slug: "almacenamiento",
    icon: Warehouse,
    title: "Almacenamiento",
    image: almacenamientoImg,
    description:
      "Bodegas seguras y coordinación operativa para recepción, preparación y despacho.",
    longDescription:
      "Nuestro servicio de almacenamiento está orientado a apoyar la recepción, organización y despacho de mercadería en espacios seguros. Facilita la preparación logística antes de la distribución final y permite un mejor control sobre la operación.",
    features: [
      "Recepción y resguardo de carga",
      "Coordinación de despacho",
      "Apoyo logístico complementario",
      "Mayor orden y control operativo",
    ],
  },
];

export const countries = [
  {
    code: "US",
    name: "Estados Unidos",
    cities: ["Miami", "Los Ángeles", "Houston"],
  },
  {
    code: "CN",
    name: "China",
    cities: ["Shanghai", "Shenzhen", "Guangzhou"],
  },
];

export const steps = [
  {
    number: "1",
    icon: FileText,
    title: "Cotización",
    description:
      "Envíanos los detalles de tu carga y recibe una cotización clara y rápida.",
  },
  {
    number: "2",
    icon: BadgeDollarSign,
    title: "Confirmación",
    description:
      "Coordinamos la recolección y definimos la mejor ruta para tu operación.",
  },
  {
    number: "3",
    icon: ShipWheel,
    title: "Transporte",
    description:
      "Monitoreo y trazabilidad durante el viaje desde origen hasta Bolivia.",
  },
  {
    number: "4",
    icon: CircleCheckBig,
    title: "Entrega",
    description:
      "Despacho aduanero y entrega final de manera segura, puntual y documentada.",
  },
];

export const stats = [
  {
    icon: Award,
    value: "15+",
    title: "Años de experiencia",
    description:
      "Especialistas en comercio exterior y operaciones internacionales.",
  },
  {
    icon: Users,
    value: "2,000+",
    title: "Clientes satisfechos",
    description:
      "Empresas e importadores que confían en nuestro servicio.",
  },
  {
    icon: TimerReset,
    value: "98%",
    title: "Entregas a tiempo",
    description:
      "Seguimiento y cumplimiento operativo en cada envío.",
  },
  {
    icon: MapPinned,
    value: "100%",
    title: "Cobertura nacional",
    description:
      "Atención y distribución para distintos destinos en Bolivia.",
  },
];

export const contactCards = [
  {
    icon: MapPin,
    title: "Dirección",
    content: [
      "Av. Camacho #1277, Casi esquina Colón Edificio Kersul piso 5 Of. 505",
      "La Paz, Bolivia",
    ],
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: ["+591 77291715 (WhatsApp)"],
  },
  {
    icon: Mail,
    title: "Email",
    content: ["info@aliantrack.com", "ventas@aliantrack.com"],
  },
];