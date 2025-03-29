import type { Project } from "@/types"

export const projectCategories = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Aplicaciones Web" },
  { id: "desktop", label: "Aplicaciones de Escritorio" },
  { id: "mobile", label: "Aplicaciones Móviles" },
]

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestión",
    category: "desktop",
    images: [
      "/placeholder.svg?height=300&width=600",
      "/placeholder.svg?height=300&width=600&text=Pantalla+Principal",
      "/placeholder.svg?height=300&width=600&text=Dashboard",
    ],
    description:
        "Aplicación de escritorio para gestión empresarial con funcionalidades de inventario, ventas y reportes. Desarrollada con C# y SQL Server. El sistema permite el control completo del ciclo de ventas, desde la gestión de productos hasta la generación de informes detallados para la toma de decisiones.",
    technologies: ["C#", "ASP.NET MVC", "SQL Server", "Bootstrap"],
    demoUrl: "#",
    codeUrl: "https://github.com/Jhan-Pierre/sistema-gestion",
    period: "2023 - 2024",
    role: "Desarrollador Full Stack",
    features: [
      "Interfaz de usuario intuitiva y responsive",
      "Arquitectura escalable y mantenible",
      "Implementación de buenas prácticas de desarrollo",
      "Optimización de rendimiento y seguridad",
    ],
  },
  {
    id: 2,
    title: "Plataforma E-commerce",
    category: "web",
    images: [
      "/placeholder.svg?height=300&width=600",
      "/placeholder.svg?height=300&width=600&text=Catálogo+de+Productos",
    ],
    description:
        "Plataforma de comercio electrónico con carrito de compras, pasarela de pagos y gestión de productos. Implementada con Laravel y MySQL. Incluye un panel de administración completo para gestionar productos, categorías, pedidos y clientes, así como integración con múltiples métodos de pago.",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
    demoUrl: "#",
    codeUrl: "https://github.com/Jhan-Pierre/ecommerce-platform",
    period: "2022 - 2023",
    role: "Desarrollador Backend",
    features: [
      "Carrito de compras con persistencia de datos",
      "Panel de administración completo",
      "Integración con múltiples pasarelas de pago",
      "Sistema de búsqueda y filtrado avanzado",
    ],
  },
  {
    id: 3,
    title: "Aplicación de Notas",
    category: "mobile",
    images: ["/placeholder.svg?height=300&width=600"],
    description:
        "Aplicación móvil para tomar notas, crear listas de tareas y establecer recordatorios. Desarrollada con React Native y Firebase. Permite la sincronización entre dispositivos, categorización de notas, búsqueda avanzada y notificaciones personalizables para recordatorios importantes.",
    technologies: ["React Native", "Firebase", "JavaScript", "Redux"],
    demoUrl: "#",
    codeUrl: "https://github.com/Jhan-Pierre/notes-app",
    period: "2022 - 2023",
    role: "Desarrollador Mobile",
    features: [
      "Sincronización entre dispositivos",
      "Notificaciones personalizables",
      "Modo oscuro y temas personalizables",
      "Funcionamiento offline con sincronización posterior",
    ],
  },
]

