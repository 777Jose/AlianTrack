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
} from 'lucide-react'

export const navItems = [
  { label: 'Quiénes Somos', href: '#quienes-somos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Países', href: '#paises' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Ventajas', href: '#ventajas' },
  { label: 'Contacto', href: '#contacto' },
]

export const services = [
  {
    icon: Anchor,
    title: 'Transporte Marítimo',
    description: 'Envío de contenedores completos y carga consolidada desde los principales puertos de Asia y Norteamérica.',
  },
  {
    icon: Plane,
    title: 'Transporte Aéreo',
    description: 'Soluciones urgentes para mercadería de alto valor o tiempos de entrega reducidos.',
  },
  {
    icon: Truck,
    title: 'Transporte Terrestre',
    description: 'Distribución nacional desde nuestros puntos logísticos hasta el destino final en Bolivia.',
  },
  {
    icon: Package,
    title: 'Carga Consolidada',
    description: 'Optimización de costos agrupando envíos para importadores que buscan eficiencia.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguro de Carga',
    description: 'Protección de tu mercadería durante todo el proceso logístico con cobertura integral.',
  },
  {
    icon: Warehouse,
    title: 'Almacenamiento',
    description: 'Bodegas seguras y coordinación operativa para recepción, preparación y despacho.',
  },
]

export const countries = [
  {
    code: 'US',
    name: 'Estados Unidos',
    cities: ['Miami', 'Los Ángeles', 'Houston'],
  },
  {
    code: 'CN',
    name: 'China',
    cities: ['Shanghai', 'Shenzhen', 'Guangzhou'],
  },
]

export const steps = [
  {
    number: '1',
    icon: FileText,
    title: 'Cotización',
    description: 'Envíanos los detalles de tu carga y recibe una cotización clara y rápida.',
  },
  {
    number: '2',
    icon: BadgeDollarSign,
    title: 'Confirmación',
    description: 'Coordinamos la recolección y definimos la mejor ruta para tu operación.',
  },
  {
    number: '3',
    icon: ShipWheel,
    title: 'Transporte',
    description: 'Monitoreo y trazabilidad durante el viaje desde origen hasta Bolivia.',
  },
  {
    number: '4',
    icon: CircleCheckBig,
    title: 'Entrega',
    description: 'Despacho aduanero y entrega final de manera segura, puntual y documentada.',
  },
]

export const stats = [
  {
    icon: Award,
    value: '15+',
    title: 'Años de experiencia',
    description: 'Especialistas en comercio exterior y operaciones internacionales.',
  },
  {
    icon: Users,
    value: '2,000+',
    title: 'Clientes satisfechos',
    description: 'Empresas e importadores que confían en nuestro servicio.',
  },
  {
    icon: TimerReset,
    value: '98%',
    title: 'Entregas a tiempo',
    description: 'Seguimiento y cumplimiento operativo en cada envío.',
  },
  {
    icon: MapPinned,
    value: '100%',
    title: 'Cobertura nacional',
    description: 'Atención y distribución para distintos destinos en Bolivia.',
  },
]

export const contactCards = [
  {
    icon: MapPin,
    title: 'Dirección',
    content: ['Av. Camacho #1277, Casi esquina Colón Edificio Kersul piso 5 Of. 505', 'La Paz, Bolivia'],
  },
  {
    icon: Phone,
    title: 'Teléfono',
    content: [ '+591 77291715 (WhatsApp)'],
  },
  {
    icon: Mail,
    title: 'Email',
    content: ['info@aliantrack.com', 'ventas@aliantrack.com'],
  },
]
