"use client"

import Image from "next/image"
import { Eye } from "lucide-react"
import type { Project } from "@/types"

interface ProjectCardProps {
    project: Project
    onViewProjectAction: (project: Project) => void
}

export default function ProjectCard({ project, onViewProjectAction }: ProjectCardProps) {
    return (
        <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl overflow-hidden group shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 border border-zinc-700/50 flex flex-col h-full">
            <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex justify-between items-center">
            <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full font-medium">
              {project.category === "web" ? "Web" : project.category === "desktop" ? "Escritorio" : "Móvil"}
            </span>
                    </div>
                </div>
            </div>

            <div className="p-4 sm:p-5 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-zinc-700/50 px-2 py-1 rounded-md text-xs font-medium text-cyan-300 border border-zinc-600/50"
                        >
              {tech}
            </span>
                    ))}
                </div>

                <button
                    onClick={() => onViewProjectAction(project)}
                    className="mt-auto w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white py-2.5 rounded-lg transition-colors shadow-md"
                >
                    <Eye className="w-4 h-4" />
                    <span>Ver proyecto</span>
                </button>
            </div>
        </div>
    )
}