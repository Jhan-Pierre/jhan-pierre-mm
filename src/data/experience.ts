import type { Experience, Education } from "@/types"

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Desarrollador de Software - Prácticas Preprofesionales",
    company: "VENATOR S.A.C.",
    period: "2023 - 2024",
    type: "Tiempo Completo",
    description: [
      "Durante mi tiempo en VENATOR S.A.C., desarrollé una aplicación de escritorio utilizando ASP.NET MVC y C# que permitió optimizar los procesos internos de la empresa. Implementé la lógica del negocio, diseñé la interfaz de usuario y gestioné la base de datos con SQL Server. Utilicé metodología SCRUM para la gestión del proyecto, participando activamente en reuniones diarias y sprints, lo que permitió entregar funcionalidades de manera incremental y mantener una comunicación efectiva con el equipo.",
    ],
    skills: ["ASP.NET MVC", "C#", "SQL Server", "UML", "SCRUM"],
    achievements: [
      "Optimización de consultas SQL que redujo el tiempo de procesamiento de datos en un 20%",
      "Implementación de reportes automatizados que mejoró la eficiencia administrativa",
      "Finalización del proyecto una semana antes del plazo establecido",
    ],
  },
]

export const education: Education[] = [
  {
    id: 1,
    title: "TEC. DESARROLLO DE SOFTWARE",
    institution: "SENATI",
    period: "2022 - 2024",
    type: "Egresado",
    description:
      "Formación técnica profesional en desarrollo de software, con enfoque en programación, bases de datos, análisis y diseño de sistemas. Adquisición de habilidades prácticas para el desarrollo de aplicaciones web y de escritorio, incluyendo cursos especializados en Java, PHP, C# y tecnologías web modernas.",
    skills: ["Programación", "Bases de Datos", "Análisis de Sistemas", "Desarrollo Web"],
    achievements: [
      "Tercio superior de la promoción durante toda la carrera",
      "Reconocimiento por proyecto destacado en el curso de Desarrollo Web",
      "Participación en taller de innovación tecnológica organizado por la institución",
    ],
  },
]

