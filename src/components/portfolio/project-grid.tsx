import ProjectCard from "@/components/portfolio/project-card"
import type { Project } from "@/types"
import { Code } from "lucide-react"

interface ProjectGridProps {
    projects: Project[]
    onViewProjectAction: (project: Project) => void
}

export default function ProjectGrid({ projects, onViewProjectAction }: ProjectGridProps) {

    const reversedProjects = [...projects].reverse();

    return (
        <div>
            {projects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {reversedProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} onViewProjectAction={onViewProjectAction} />
                    ))}
                </div>
            ) : (
                <div className="bg-zinc-800/50 rounded-xl p-10 text-center border border-zinc-700/50">
                    <div className="flex justify-center mb-4">
                        <div className="bg-zinc-700/50 p-3 rounded-full">
                            <Code className="w-6 h-6 text-cyan-400" />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No hay proyectos</h3>
                    <p className="text-gray-400">No se encontraron proyectos que coincidan con el filtro seleccionado.</p>
                </div>
            )}
        </div>
    )
}