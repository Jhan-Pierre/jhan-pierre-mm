import { Code, Database, Globe, Server } from "lucide-react"
import { programmingLanguages, frameworks, databases, tools } from "@/data/skills"

export default function TechnologiesSection() {
    return (
        <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Code className="text-cyan-400" />
                Tecnologías
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg p-6 shadow-lg hover:shadow-cyan-500/10 transition-shadow">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="bg-cyan-500/10 p-3 rounded-full">
                            <Code className="text-cyan-400" />
                        </div>
                        <h4 className="text-lg font-semibold">Lenguajes</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {programmingLanguages.map((tech) => (
                            <div
                                key={tech.name}
                                className="bg-zinc-700/50 hover:bg-cyan-500/20 px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-cyan-300 flex items-center gap-2"
                            >
                                {tech.icon && <span>{tech.icon}</span>}
                                {tech.name}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg p-6 shadow-lg hover:shadow-cyan-500/10 transition-shadow">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="bg-cyan-500/10 p-3 rounded-full">
                            <Globe className="text-cyan-400" />
                        </div>
                        <h4 className="text-lg font-semibold">Frameworks</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {frameworks.map((tech) => (
                            <div
                                key={tech.name}
                                className="bg-zinc-700/50 hover:bg-cyan-500/20 px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-cyan-300 flex items-center gap-2"
                            >
                                {tech.icon && <span>{tech.icon}</span>}
                                {tech.name}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg p-6 shadow-lg hover:shadow-cyan-500/10 transition-shadow">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="bg-cyan-500/10 p-3 rounded-full">
                            <Database className="text-cyan-400" />
                        </div>
                        <h4 className="text-lg font-semibold">Bases de Datos</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {databases.map((tech) => (
                            <div
                                key={tech.name}
                                className="bg-zinc-700/50 hover:bg-cyan-500/20 px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-cyan-300 flex items-center gap-2"
                            >
                                {tech.icon && <span>{tech.icon}</span>}
                                {tech.name}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg p-6 shadow-lg hover:shadow-cyan-500/10 transition-shadow">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="bg-cyan-500/10 p-3 rounded-full">
                            <Server className="text-cyan-400" />
                        </div>
                        <h4 className="text-lg font-semibold">Otros</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {tools.map((tech) => (
                            <div
                                key={tech.name}
                                className="bg-zinc-700/50 hover:bg-cyan-500/20 px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-cyan-300 flex items-center gap-2"
                            >
                                {tech.icon && <span>{tech.icon}</span>}
                                {tech.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}