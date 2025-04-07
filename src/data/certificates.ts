import type { Certificate, CertificateCategory } from "@/types"

export const certificateCategories: CertificateCategory[] = [
  { id: "all", label: "Todos", badgeColor: "bg-gray-500/20 text-gray-400" },
  { id: "web", label: "Desarrollo Web", badgeColor: "bg-blue-500/20 text-blue-400" },
  { id: "backend", label: "Backend", badgeColor: "bg-green-500/20 text-green-400" },
  { id: "frontend", label: "Frontend", badgeColor: "bg-cyan-500/20 text-cyan-400" },
  { id: "database", label: "Bases de Datos", badgeColor: "bg-orange-500/20 text-orange-400" },
  { id: "mobile", label: "Móvil", badgeColor: "bg-purple-500/20 text-purple-400" },
  { id: "agile", label: "Metodologías Ágiles", badgeColor: "bg-indigo-500/20 text-indigo-400" },
  { id: "other", label: "Otros", badgeColor: "bg-gray-500/20 text-gray-400" },
]

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Curso de Java Spring",
    issuer: "Platzi",
    date: "Marzo 2025",
    description:
        "Desarrollo de aplicaciones web con Java Spring Framework. Aprendí a crear APIs RESTful, implementar seguridad con Spring Security, trabajar con bases de datos utilizando Spring Data JPA y desarrollar aplicaciones web completas siguiendo las mejores prácticas de la industria.",
    category: "backend",
    color: "from-green-400 to-emerald-500",
    credentialUrl: "https://platzi.com/p/JhanPierre_Dev/curso/1996-java-spring/diploma/detalle/",
    imagePath: "/certificados/1.jpg",
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "RESTful APIs"],
    stats: {
      hours: 12,
      weeks: 3,
    },
  },
  {
    id: 2,
    title: "Scrum Fundamentals Certified",
    issuer: "SCRUMstudy",
    date: "Marzo 2025",
    description:
        "Certificación en fundamentos de la metodología Scrum. Este curso me permitió comprender los principios y prácticas de Scrum, incluyendo roles, eventos, artefactos y las reglas que los unen. Aprendí a implementar Scrum en equipos de desarrollo y a facilitar los procesos ágiles para maximizar el valor entregado.",
    category: "agile",
    color: "from-blue-400 to-indigo-500",
    credentialUrl: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1071248",
    imagePath: "/certificados/2.webp",
    skills: ["Scrum", "Sprint Planning", "User Stories", "Product Backlog", "Agile Mindset"],
    stats: {
      hours: 10,
      weeks: 1,
    },
  },
  {
    id: 3,
    title: "Excel - Básico, Intermedio y Avanzado!",
    issuer: "Udemy",
    date: "Febrero 2025",
    description:
        "Dominio completo de Microsoft Excel desde nivel básico hasta avanzado. Este curso integral me permitió dominar funciones avanzadas, tablas dinámicas, macros, VBA, fórmulas complejas y visualización de datos. Estas habilidades me permiten analizar datos eficientemente y crear informes profesionales automatizados.",
    category: "other",
    color: "from-green-400 to-teal-500",
    credentialUrl: "https://www.udemy.com/certificate/UC-5c8dbbf8-9373-4cbe-89db-8b86b8612294/",
    imagePath: "/certificados/3.webp",
    skills: ["Excel Avanzado", "Tablas Dinámicas", "Macros", "VBA", "Fórmulas Complejas"],
    stats: {
      hours: 13.5,
      weeks: 4,
    },
  },
  {
    id: 4,
    title: "Curso de SQL y MySQL",
    issuer: "Platzi",
    date: "Septiembre 2024",
    description:
        "Gestión y consulta de bases de datos relacionales con SQL y MySQL. Aprendí a diseñar esquemas de bases de datos eficientes, escribir consultas complejas, optimizar el rendimiento de las bases de datos y aplicar buenas prácticas de seguridad. Este conocimiento es fundamental para el desarrollo de aplicaciones con persistencia de datos.",
    category: "database",
    color: "from-orange-400 to-amber-500",
    credentialUrl: "https://platzi.com/p/JhanPierre_Dev/curso/1272-sql-mysql/diploma/detalle/",
    imagePath: "/certificados/4.webp",
    skills: ["SQL", "MySQL", "Diseño de Bases de Datos", "Optimización de Consultas", "Normalización"],
    stats: {
      hours: 30,
      weeks: 7,
    },
  },
  {
    id: 5,
    title: "Curso Definitivo de HTML y CSS",
    issuer: "Platzi",
    date: "Agosto 2024",
    description:
        "Desarrollo de interfaces web con HTML y CSS. Este curso me permitió dominar la estructura semántica de HTML5, las propiedades avanzadas de CSS3, diseño responsive, flexbox, grid y animaciones. Aprendí a crear interfaces modernas, accesibles y compatibles con múltiples dispositivos y navegadores.",
    category: "frontend",
    color: "from-red-400 to-pink-500",
    credentialUrl: "https://platzi.com/p/JhanPierre_Dev/curso/2008-html-css/diploma/detalle/",
    imagePath: "/certificados/5.webp",
    skills: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "CSS Grid", "Accesibilidad Web"],
    stats: {
      hours: 28,
      weeks: 6,
    },
  },
  {
    id: 6,
    title: "Curso Profesional de Git y GitHub",
    issuer: "Platzi",
    date: "Agosto 2024",
    description:
        "Control de versiones y colaboración en proyectos de software. Aprendí flujos de trabajo profesionales con Git, gestión de ramas, resolución de conflictos, integración continua y despliegue con GitHub Actions. Estas habilidades me permiten colaborar eficientemente en equipos de desarrollo y mantener un historial claro de cambios en el código.",
    category: "other",
    color: "from-gray-400 to-gray-600",
    credentialUrl: "https://platzi.com/p/JhanPierre_Dev/curso/1557-git-github/diploma/detalle/",
    imagePath: "/certificados/6.webp",
    skills: ["Git", "GitHub", "Control de Versiones", "Branching", "Pull Requests", "GitHub Actions"],
    stats: {
      hours: 22,
      weeks: 5,
    },
  },
  {
    id: 7,
    title: "Curso Profesional de Scrum",
    issuer: "Platzi",
    date: "Agosto 2024",
    description:
        "Implementación profesional de la metodología ágil Scrum. Este curso avanzado me permitió profundizar en la aplicación práctica de Scrum en entornos reales, la gestión de equipos multidisciplinarios, la planificación efectiva de sprints y la medición del rendimiento. Aprendí a adaptar Scrum a diferentes contextos y a resolver desafíos comunes en su implementación.",
    category: "agile",
    color: "from-blue-400 to-indigo-500",
    credentialUrl: "https://platzi.com/p/JhanPierre_Dev/curso/1750-scrum/diploma/detalle/",
    imagePath: "/certificados/7.webp",
    skills: ["Scrum Avanzado", "Gestión de Equipos", "Sprint Retrospective", "Métricas Ágiles", "Escalado Scrum"],
    stats: {
      hours: 32,
      weeks: 8,
    },
  },
  {
    id: 8,
    title: "Curso de Inglés Básico A1 para Principiantes",
    issuer: "Platzi",
    date: "Agosto 2024",
    description:
        "Fundamentos del idioma inglés para nivel principiante. Este curso me permitió desarrollar habilidades básicas de comunicación en inglés, incluyendo vocabulario esencial, gramática fundamental y pronunciación. Estas habilidades son cruciales para mi desarrollo profesional en el campo tecnológico global.",
    category: "other",
    color: "from-purple-400 to-indigo-500",
    credentialUrl: "https://platzi.com/p/JhanPierre_Dev/curso/3093-ingles-basico-principiantes/diploma/detalle/",
    imagePath: "/certificados/8.webp",
    skills: ["Inglés Básico", "Vocabulario Técnico", "Gramática Fundamental", "Pronunciación", "Comprensión Lectora"],
    stats: {
      hours: 24,
      weeks: 3,
    },
  },
  {
    id: 9,
    title: "Curso de Kotlin desde Cero",
    issuer: "Platzi",
    date: "Agosto 2024",
    description:
        "Desarrollo de aplicaciones móviles con Kotlin para Android. Aprendí los fundamentos del lenguaje Kotlin, programación orientada a objetos, funciones de extensión, corrutinas y su aplicación en el desarrollo de aplicaciones Android. Este conocimiento me permite crear aplicaciones móviles modernas y eficientes utilizando las mejores prácticas recomendadas por Google.",
    category: "mobile",
    color: "from-purple-400 to-indigo-500",
    credentialUrl: "https://platzi.com/p/JhanPierre_Dev/curso/2245-kotlin/diploma/detalle/",
    imagePath: "/certificados/9.webp",
    skills: ["Kotlin", "Android", "Corrutinas", "Programación Orientada a Objetos", "Jetpack Compose"],
    stats: {
      hours: 12,
      weeks: 3,
    },
  },
  {
    id: 10,
    title: "Curso de Responsive Design: Maquetación Mobile First",
    issuer: "Platzi",
    date: "Agosto 2024",
    description:
        "Diseño web adaptable con enfoque en dispositivos móviles. Este curso me enseñó a implementar la metodología Mobile First, utilizar media queries de forma efectiva, optimizar recursos para diferentes dispositivos y crear experiencias de usuario consistentes en cualquier tamaño de pantalla. Estas habilidades son esenciales para el desarrollo web moderno.",
    category: "frontend",
    color: "from-cyan-400 to-blue-500",
    credentialUrl: "https://platzi.com/p/JhanPierre_Dev/curso/2030-mobile-first/diploma/detalle/",
    imagePath: "/certificados/10.webp",
    skills: ["Mobile First", "Media Queries", "Responsive Design", "Optimización de Recursos", "UX Adaptable"],
    stats: {
      hours: 8,
      weeks: 2,
    },
  },
  {
    id: 11,
    title: "Fundamentos de la programación: Más allá de lo básico",
    issuer: "LinkedIn",
    date: "Agosto 2024",
    description:
        "Conceptos avanzados de programación con Python. Este curso me permitió profundizar en conceptos como programación orientada a objetos, patrones de diseño, manejo de excepciones, programación funcional y buenas prácticas de desarrollo. Estos conocimientos me ayudan a escribir código más limpio, mantenible y eficiente en cualquier lenguaje de programación.",
    category: "backend",
    color: "from-blue-400 to-indigo-500",
    credentialUrl:
        "https://www.linkedin.com/learning/certificates/41ed28cbb298a4d7ad6e64bfe90e9ab2f096324429c2a0531e46eff4250bcb5f",
    imagePath: "",
    skills: [
      "Python",
      "Programación Orientada a Objetos",
      "Patrones de Diseño",
      "Programación Funcional",
      "Clean Code",
    ],
    stats: {
      hours: 28,
      weeks: 7,
    },
  },
  {
    id: 12,
    title: "Fundamentos esenciales de la programación",
    issuer: "LinkedIn",
    date: "Agosto 2024",
    description:
        "Principios y estándares fundamentales de la programación. Este curso cubrió los conceptos básicos que son comunes a todos los lenguajes de programación, como variables, estructuras de control, funciones, algoritmos y estructuras de datos. Estos fundamentos sólidos me permiten aprender nuevos lenguajes y tecnologías con mayor facilidad.",
    category: "other",
    color: "from-gray-400 to-gray-600",
    credentialUrl:
        "https://www.linkedin.com/learning/certificates/bc9d5c749879054725f87d81bf331062c4036aa0d3df6f0dd6c7631a6b24d22b",
    imagePath: "",
    skills: ["Algoritmos", "Estructuras de Datos", "Lógica de Programación", "Resolución de Problemas", "Debugging"],
    stats: {
      hours: 18,
      weeks: 4,
    },
  },
  {
    id: 13,
    title: "Fundamentos profesionales del desarrollo de software",
    issuer: "Microsoft",
    date: "Agosto 2024",
    description:
        "Bases profesionales para el desarrollo de software por Microsoft y LinkedIn. Este curso me proporcionó una visión integral del ciclo de vida del desarrollo de software, incluyendo análisis de requisitos, diseño, implementación, pruebas y mantenimiento. También cubrió metodologías de desarrollo, herramientas profesionales y mejores prácticas de la industria.",
    category: "other",
    color: "from-blue-400 to-indigo-500",
    credentialUrl:
        "https://www.linkedin.com/learning/certificates/6109e386780d69dee5c2156bbe1d665383c2290144fbd6e86bac458277f886ea",
    imagePath: "",
    skills: ["SDLC", "Análisis de Requisitos", "Diseño de Software", "Testing", "Mantenimiento de Software"],
    stats: {
      hours: 26,
      weeks: 6,
    },
  },
  {
    id: 14,
    title: "Introducción a las habilidades profesionales en el desarrollo de software",
    issuer: "LinkedIn",
    date: "Agosto 2024",
    description:
        "Habilidades profesionales para carreras en desarrollo de software. Este curso se centró en las habilidades blandas esenciales para los desarrolladores, como comunicación efectiva, trabajo en equipo, gestión del tiempo, resolución de problemas y adaptabilidad. Estas habilidades complementan mis conocimientos técnicos y me ayudan a ser un profesional más completo.",
    category: "other",
    color: "from-blue-400 to-indigo-500",
    credentialUrl:
        "https://www.linkedin.com/learning/certificates/6e5e718b910458716453092a4e445e11a16014e02bec267d6709bb01decbb7b4",
    imagePath: "",
    skills: [
      "Comunicación Efectiva",
      "Trabajo en Equipo",
      "Gestión del Tiempo",
      "Resolución de Problemas",
      "Adaptabilidad",
    ],
    stats: {
      hours: 15,
      weeks: 3,
    },
  },
  {
    id: 15,
    title: "Scrum Foundation",
    issuer: "CertiProf",
    date: "Septiembre 2023",
    description:
        "Certificación en fundamentos de Scrum y metodologías ágiles. Este curso me proporcionó una comprensión sólida de los principios ágiles y el marco de trabajo Scrum, incluyendo roles, eventos, artefactos y valores. Aprendí a aplicar Scrum en diferentes contextos y a adaptar sus prácticas según las necesidades específicas de cada proyecto.",
    category: "agile",
    color: "from-blue-400 to-indigo-500",
    credentialUrl:
        "https://media.licdn.com/dms/document/media/v2/D4E2DAQGyR4vt6Ihu9Q/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1721154598298?e=1743638400&v=beta&t=fIfWyqUfIdd2NEYK5y0LB9OazGuGpNasCpTVlLvIC8A",
    imagePath: "",
    skills: ["Scrum", "Agile", "Product Owner", "Scrum Master", "Development Team", "Sprint"],
    stats: {
      hours: 20,
      weeks: 4,
    },
  },
  {
    id: 16,
    title: "Programming Essentials in C",
    issuer: "Cisco Networking Academy",
    date: "Octubre 2022",
    description:
        "Fundamentos de programación en lenguaje C. Este curso me permitió dominar los conceptos fundamentales de la programación en C, incluyendo tipos de datos, estructuras de control, funciones, punteros, gestión de memoria y entrada/salida. El conocimiento de C me proporciona una base sólida para entender cómo funcionan los lenguajes de programación a bajo nivel.",
    category: "backend",
    color: "from-gray-400 to-gray-600",
    credentialUrl:
        "https://media.licdn.com/dms/document/media/v2/D4E2DAQHfIgltSO58JA/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1722870499586?e=1743638400&v=beta&t=CAiDNMpfXC0ceOnaXJoGAI_tL9seFvy5pC6dtMbKCRU",
    imagePath: "",
    skills: ["Lenguaje C", "Punteros", "Gestión de Memoria", "Estructuras de Datos", "Programación Estructurada"],
    stats: {
      hours: 32,
      weeks: 8,
    },
  },
  {
    id: 17,
    title: "Programming Essentials in C++",
    issuer: "Cisco Networking Academy",
    date: "Octubre 2022",
    description:
        "Fundamentos de programación en lenguaje C++. Este curso cubrió los conceptos esenciales de C++ como programación orientada a objetos, plantillas, manejo de excepciones y la biblioteca estándar. Estas habilidades me permiten desarrollar aplicaciones eficientes y robustas utilizando uno de los lenguajes más potentes y versátiles de la industria.",
    category: "backend",
    color: "from-gray-400 to-gray-600",
    credentialUrl:
        "https://media.licdn.com/dms/document/media/v2/D4E2DAQFDgX_5g-GBZg/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1722870578059?e=1743638400&v=beta&t=WoxrZoVgz7zyn4ObSWWbL5yAIh9I31ebQhEXpmq0aOg",
    imagePath: "",
    skills: ["C++", "Programación Orientada a Objetos", "Plantillas", "STL", "Manejo de Excepciones"],
    stats: {
      hours: 34,
      weeks: 8,
    },
  },
  {
    id: 18,
    title: "Networking Essentials",
    issuer: "Cisco Networking Academy",
    date: "Junio 2022",
    description:
        "Fundamentos de redes y conectividad. Este curso me proporcionó conocimientos sobre los principios básicos de las redes informáticas, incluyendo modelos OSI y TCP/IP, direccionamiento IP, subredes, protocolos de red, dispositivos de red y seguridad básica. Estas habilidades son fundamentales para comprender cómo funcionan las aplicaciones en entornos conectados.",
    category: "other",
    color: "from-blue-400 to-indigo-500",
    credentialUrl:
        "https://media.licdn.com/dms/document/media/v2/D4E2DAQFLbTTmkUBP5g/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1722870667408?e=1743638400&v=beta&t=ckYYgiUNmSSVQH2Ks2wCJKbiR_6XGsUDJGMzmWlFEzg",
    imagePath: "",
    skills: ["Redes", "TCP/IP", "Modelo OSI", "Direccionamiento IP", "Protocolos de Red", "Seguridad Básica"],
    stats: {
      hours: 30,
      weeks: 7,
    },
  },
  {
    id: 19,
    title: "Programming Essentials in Python",
    issuer: "Cisco Networking Academy",
    date: "Junio 2022",
    description:
        "Fundamentos de programación en Python. Este curso me permitió dominar los conceptos básicos y avanzados de Python, incluyendo estructuras de datos, programación orientada a objetos, manejo de excepciones, módulos y paquetes. Python se ha convertido en una herramienta esencial en mi conjunto de habilidades para desarrollo web, análisis de datos y automatización.",
    category: "backend",
    color: "from-blue-400 to-indigo-500",
    credentialUrl:
        "https://media.licdn.com/dms/document/media/v2/D4E2DAQGpsUrUOZwVig/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1722870734588?e=1743638400&v=beta&t=cSLUKONvg6V55kOLHhv0LzqajcsBb68Npu6CtC7B7KU",
    imagePath: "",
    skills: ["Python", "Estructuras de Datos", "Programación Orientada a Objetos", "Módulos", "Manejo de Excepciones"],
    stats: {
      hours: 28,
      weeks: 7,
    },
  },
  {
    id: 20,
    title: "Entrepreneurship",
    issuer: "Cisco Networking Academy",
    date: "Abril 2022",
    description:
        "Fundamentos de emprendimiento y negocios. Este curso me proporcionó conocimientos sobre cómo identificar oportunidades de negocio, desarrollar modelos de negocio, realizar análisis de mercado, crear planes de negocio y gestionar recursos. Estas habilidades complementan mis conocimientos técnicos y me ayudan a entender mejor el contexto empresarial en el que se desarrolla el software.",
    category: "other",
    color: "from-green-400 to-emerald-500",
    credentialUrl:
        "https://media.licdn.com/dms/document/media/v2/D4E2DAQHAFBITLfWXRw/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1722870881052?e=1743638400&v=beta&t=0NKFkFW4glVHNfnWwI4veoV2-_XtZa0iV4qmytr2BdY",
    imagePath: "",
    skills: ["Emprendimiento", "Modelos de Negocio", "Análisis de Mercado", "Plan de Negocios", "Gestión de Recursos"],
    stats: {
      hours: 22,
      weeks: 5,
    },
  },
  {
    id: 21,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Abril 2022",
    description:
        "Introducción a la ciberseguridad y protección de datos. Este curso me proporcionó conocimientos fundamentales sobre amenazas de seguridad, vulnerabilidades, técnicas de protección, criptografía básica y mejores prácticas de seguridad. Estas habilidades son esenciales para desarrollar aplicaciones seguras y proteger la información sensible de los usuarios.",
    category: "other",
    color: "from-red-400 to-pink-500",
    credentialUrl:
        "https://media.licdn.com/dms/document/media/v2/D4E2DAQFMnm-rzLaGTA/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1722870924018?e=1743638400&v=beta&t=4r-KOfbrxQEMm1PysXtdQShNyYtUcpZPnFVkNGf4_yo",
    imagePath: "",
    skills: [
      "Ciberseguridad",
      "Amenazas de Seguridad",
      "Vulnerabilidades",
      "Criptografía Básica",
      "Protección de Datos",
    ],
    stats: {
      hours: 24,
      weeks: 6,
    },
  },
  {
    id: 22,
    title: "Get Connected",
    issuer: "Cisco Networking Academy",
    date: "Marzo 2022",
    description:
        "Fundamentos de conectividad digital. Este curso me proporcionó una comprensión básica de cómo funcionan las tecnologías digitales, Internet y las comunicaciones modernas. Aprendí sobre hardware, software, sistemas operativos, redes y seguridad básica. Estos conocimientos fundamentales son la base para comprender tecnologías más avanzadas.",
    category: "other",
    color: "from-blue-400 to-indigo-500",
    credentialUrl:
        "https://media.licdn.com/dms/document/media/v2/D4E2DAQHGS7aAkfZ1BA/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1722870838576?e=1743638400&v=beta&t=-ciiRat-2P5lHXVG30xiiAckOFOe3_-L4O7vCaJIi94",
    imagePath: "",
    skills: ["Tecnologías Digitales", "Internet", "Hardware", "Software", "Sistemas Operativos", "Redes Básicas"],
    stats: {
      hours: 16,
      weeks: 4,
    },
  },
  {
    id: 23,
    title: "Introduction to IoT",
    issuer: "Cisco Networking Academy",
    date: "Marzo 2022",
    description:
        "Introducción al Internet de las Cosas (IoT). Este curso me proporcionó una visión general de las tecnologías IoT, incluyendo sensores, actuadores, conectividad, protocolos y aplicaciones. Aprendí cómo los dispositivos conectados pueden recopilar y compartir datos, y cómo estas tecnologías están transformando industrias y mejorando la vida cotidiana.",
    category: "other",
    color: "from-green-400 to-teal-500",
    credentialUrl:
        "https://media.licdn.com/dms/document/media/v2/D4E2DAQEjCAj8glvN7w/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1722870795416?e=1743638400&v=beta&t=xAoUF5MBMRxMIm0lrTMtDAWQ5R729gdxVdRlNqhlMpw",
    imagePath: "",
    skills: ["IoT", "Sensores", "Actuadores", "Protocolos IoT", "Conectividad", "Aplicaciones IoT"],
    stats: {
      hours: 20,
      weeks: 5,
    },
  },
]