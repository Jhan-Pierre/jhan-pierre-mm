import type { Experience, Education } from "@/types"

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Desarrollador Java",
    company: "VENATOR S.A.C.",
    period: "Jun 2023 - Dic 2024",
    type: "Tiempo Completo",
    description: [
      "Desarrollé e implementé un sistema web empresarial utilizando el ecosistema Java (Spring Boot) para optimizar los procesos operativos, logrando una reducción del 30% en la carga laboral. Implementé la capa de persistencia con JPA/Hibernate y aseguré la integración continua del sistema. Realicé actualizaciones periódicas y monitoreo de rendimiento mediante herramientas de diagnóstico de la JVM, garantizando estabilidad y alta disponibilidad.",
    ],
    skills: ["Java", "Spring Boot", "Spring Data JPA", "SQL Server", "Maven", "Git", "GitHub", "Scrum"],
    achievements: [
      "Se redujo un 30% la carga laboral del área de producción al implementar una solución robusta con Java.",
      "Se garantizó la escalabilidad y mantenimiento del sistema mediante buenas prácticas de desarrollo en el ecosistema Spring.",
    ],
  },
  {
    id: 2,
    title: "Java Backend Developer",
    company: "NEUROQUANTIX",
    period: "Feb 2025 - Jun 2025",
    type: "Tiempo Completo",
    description: [
      "Participé en el desarrollo de microservicios y APIs RESTful utilizando Java y Spring Boot. Implementé seguridad avanzada con Spring Security y JWT para la gestión de accesos. Documenté servicios con Swagger/OpenAPI y aseguré la calidad del código mediante pruebas unitarias con JUnit y Mockito. Optimicé consultas a base de datos y procesos batch, mejorando significativamente el tiempo de respuesta de la aplicación."
    ],
    skills: ["Java", "Spring Boot", "Spring Security", "JWT", "Hibernate", "SQL Server", "JUnit", "Mockito", "Git", "GitHub", "Scrum"],
    achievements: [
      "Se optimizó el rendimiento del sistema y consultas SQL, logrando una experiencia de usuario más fluida.",
      "Se implementó una arquitectura segura y escalable basada en estándares del ecosistema Java.",
    ],
  },
  {
    id: 3,
    title: "Asistente en Proyectos TI",
    company: "OBSERVATORIO DEL DELITO Y LA CRIMINALIDAD DE LA PNP",
    period: "Jul 2025 - Dic 2025",
    type: "Tiempo Completo",
    description: [
      "Asistí en la implementación de un sistema de gestión de datos para el Observatorio del Delito y la Criminalidad, colaborando en el desarrollo de herramientas para el análisis y visualización de datos. Participé en la integración de bases de datos y en la creación de informes estadísticos que apoyan la toma de decisiones estratégicas.",
    ],
    skills: ["Java", "Spring Boot", "C#", ".NET CORE", "Python", "SQL Server", "Git Hub", "Scrum"],
    achievements: [
      "Se desarrollaron herramientas de análisis y visualización de datos que mejoraron la toma de decisiones estratégicas."
    ],
  },
]

export const education: Education[] = [
  {
    id: 1,
    title: "TEC. DESARROLLO DE SOFTWARE",
    institution: "SENATI",
    period: "2022 - 2024",
    type: "Titulado a Nombre de la Nación",
    description:
      "Formación técnica profesional en desarrollo de software, con enfoque en programación, bases de datos, análisis y diseño de sistemas. Adquisición de habilidades prácticas para el desarrollo de aplicaciones web y de escritorio, incluyendo cursos especializados en Java, PHP, C# y tecnologías web modernas.",
    skills: ["Programación", "Bases de Datos", "Análisis de Sistemas", "Desarrollo Web"],
    achievements: [
      "Tercio superior durante toda la carrera",
      "Reconocimiento por proyecto destacado en el curso de Desarrollo Web",
      "Participación en taller de innovación tecnológica organizado por la institución",
    ],
  },
]

