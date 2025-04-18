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
    title: "CosmoZen - Ecommerce",
    category: "web",
    images: [
      "/proyects/cosmozen/1.png",
      "/proyects/cosmozen/2.png",
      "/proyects/cosmozen/3.png",
      "/proyects/cosmozen/4.png",
      "/proyects/cosmozen/5.png",
      "/proyects/cosmozen/6.png",
      "/proyects/cosmozen/7.png",
    ],
    description:
        "HubTodoAppSistema web con un panel de administración intuitivo y una plataforma de ventas en línea, que permite gestionar productos, pedidos y realizar pagos de manera segura a través de PayPal.",
    technologies: ["C#", ".NET Framework", "Bootstrap", "SQL Server", "Git Hub"],
    demoUrl: "#",
    codeUrl: "https://github.com/Jhan-Pierre/ProyectoSistemaWeb",
    period: "Dec 2024 - Feb 2025",
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
    title: "TodoApp - Proyecto Colaborativo",
    category: "mobile",
    images: [
      "/proyects/todoapp/menu.png",
      "/proyects/todoapp/list.png",
      "/proyects/todoapp/calendar.png",
    ],
    description:
        "Aplicación móvil para gestionar tareas con recordatorios y notificaciones automáticas, con sincronización en la nube para el acceso con múltiples dispositivos.",
    technologies: ["Kotlin", "Jeckpack Compose", "Firebase", "MaterialUI", "Git Hub"],
    demoUrl: "https://todoapp.luislh.dev/",
    codeUrl: "https://github.com/Jhan-Pierre/Todo-App",
    period: "Agosto 2024 - Octubre 2024",
    role: "Desarrollador Backend",
    features: [
      "Gestión de Tareas",
      "Sincronización en la Nube",
      "Personalización y Filtrado",
      "Rendimiento y Optimización",
    ],
  },
  {
    id: 3,
    title: "Historial Plus - Proyecto Colaborativo",
    category: "web",
    images: ["/proyects/historialplus/1.png",
      "/proyects/historialplus/2.png",
      "/proyects/historialplus/3.png",
      "/proyects/historialplus/4.png",
      "/proyects/historialplus/5.png",
    ],
    description:
        "Sistema web para la gestión de historiales médicos, permitiendo a los pacientes acceder a sus registros clínicos, incluyendo imágenes y documentos médicos subidos por los doctores.",
    technologies: ["Java", "Spring Boot", "Spring Security", "React", "MySql", "Clodflare R2" ,"Git Hub"],
    demoUrl: "#",
    codeUrl: "https://github.com/luislh-dev/HistorialPlus",
    period: "Octubre 2024 - Abril 2025",
    role: "Desarrollador Backend",
    features: [
      "Autenticación y Autorización",
      "Gestión de Usuarios y Pacientes",
      "Administración de Historiales Clínicos",
      "Gestión de Archivos Médicos",
      "Rendimiento y Optimización",
    ],
  },
]

