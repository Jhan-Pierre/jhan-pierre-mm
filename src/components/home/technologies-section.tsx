import SectionHeading from "@/components/ui/section-heading"

export default function TechnologiesSection() {
    const technologies = [
        { name: "Java", emoji: "☕" },
        { name: "Spring Boot", emoji: "🍃" },
        { name: "React", emoji: "⚛️" },
        { name: "Next.js", emoji: "▲" },
        { name: "C#", emoji: "🔷" },
        { name: "ASP.NET", emoji: "🌐" },
        { name: "JavaScript", emoji: "🟨" },
        { name: "SQL Server", emoji: "🗄️" },
        { name: "MySQL", emoji: "🐬" },
        { name: "Tailwind", emoji: "💨" },
        { name: "Git", emoji: "🔄" },
        { name: "SCRUM", emoji: "🔄" },
    ]

    return (
        <section className="mb-8 sm:mb-12">
            <SectionHeading title="Tecnologías Destacadas" className="text-xl sm:text-2xl" />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {technologies.map((tech, index) => (
                    <div
                        key={index}
                        className="bg-zinc-800 rounded-lg p-3 sm:p-4 text-center hover:bg-zinc-700 transition-colors"
                    >
                        <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{tech.emoji}</div>
                        <div className="text-xs sm:text-sm font-medium">{tech.name}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}