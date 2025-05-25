import type { Experience, Education } from "@/types"

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Desarrollador Web",
    company: "VENATOR S.A.C.",
    period: "Jun 2023 - Dic 2024",
    type: "Tiempo Completo",
    description: [
      "Desarrollé e implementé un sistema web para optimizar los procesos operativos, lo que resultó en una reducción del 30% en la carga laboral del área de producción. Aseguré la correcta integración del sistema en los equipos, garantizando su funcionamiento adecuado, y realicé actualizaciones periódicas para mantener su operatividad. Además, llevé a cabo un monitoreo constante del rendimiento del sistema, asegurando su estabilidad y eficiencia en todo momento.",
    ],
    skills: ["SQL Server", "C#", ".NET Framework", "Metodología Scrum", "Git", "GitHub"],
    achievements: [
      "Se redujo un 30% la carga laboral del área de producción al implementar un sistema web optimizad.",
      "Se garantizó la integración, actualización periódica y estabilidad del sistema, asegurando su eficiencia continua.",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer | Coordinador de Equipo",
    company: "NEUROQUANTIX",
    period: "Feb 2025 - May 2025",
    type: "Tiempo Completo",
    description: [
        "Desarrollé e implementé módulos de inicio de sesión con autenticación segura, utilizando tokens para reforzar la seguridad en el acceso. A lo largo del proceso, documenté de manera detallada las APIs desarrolladas, asegurando que la integración fuera clara y comprensible. Realicé pruebas unitarias exhaustivas para verificar el correcto funcionamiento de cada componente y asegurarme de que no se presentaran errores en el sistema. Además, optimicé los módulos existentes, lo que permitió mejorar considerablemente el rendimiento y la eficiencia del sistema, brindando una experiencia más fluida y estable para los usuarios."
    ],
    skills: ["Java", "Spring Boot", "Spring Security", "JWT", "SQL Server", "Mockito", "Git", "GitHub", "Metodología Scrum"],
    achievements: [
      "Se optimizó el rendimiento del sistema, logrando una experiencia de usuario más fluida y estable.",
      "Se implementó autenticación segura con tokens, reforzando la seguridad en el acceso al sistema.",
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
      "Tercio superior durante toda la carrera",
      "Reconocimiento por proyecto destacado en el curso de Desarrollo Web",
      "Participación en taller de innovación tecnológica organizado por la institución",
    ],
  },
]

