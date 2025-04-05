"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Calendar, Code, Users, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import type { Project } from "@/types"
import { BaseModal } from "@/components/ui/modal/BaseModal"
import { InfoCard } from "@/components/ui/InfoCard"
import { SectionHeader } from "@/components/ui/SectionHeader"

interface ProjectDetailModalProps {
    project: Project | null
    isOpen: boolean
    onCloseAction: () => void
}

export default function ProjectDetailModal({ project, isOpen, onCloseAction }: ProjectDetailModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Resetear el índice de imagen cuando cambia el proyecto
    useEffect(() => {
        setCurrentImageIndex(0)
    }, [project])

    if (!project) return null

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
    }

    return (
        <BaseModal isOpen={isOpen} onCloseAction={onCloseAction} maxWidth="max-w-3xl">
            {/* Contenedor de imagen sin bordes ni espacios */}
            <div className="relative h-64 sm:h-72 w-full">
                {/* Imagen actual */}
                <Image
                    src={project.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Botón de cierre - SOLO en la esquina superior derecha */}
                <div className="absolute top-0 right-0 p-3 z-50">
                    <button
                        onClick={onCloseAction}
                        className="bg-black/70 hover:bg-black/90 p-2 rounded-full transition-colors text-white"
                        aria-label="Cerrar"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Controles de navegación de imágenes */}
                {project.images.length > 1 && (
                    <>
                        <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
                            <button
                                onClick={prevImage}
                                className="bg-black/70 hover:bg-black/90 p-2 rounded-full transition-colors shadow-lg"
                                aria-label="Imagen anterior"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="bg-black/70 hover:bg-black/90 p-2 rounded-full transition-colors shadow-lg"
                                aria-label="Imagen siguiente"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Indicadores de imágenes */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                            {project.images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                                        index === currentImageIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                                    }`}
                                    aria-label={`Ver imagen ${index + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full font-medium">
                              {project.category === "web" ? "Web" : project.category === "desktop" ? "Escritorio" : "Móvil"}
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h2>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <InfoCard
                        icon={<Calendar className="text-cyan-400" />}
                        label="Fecha"
                        value={project.period}
                        colorClass="bg-cyan-500/10"
                        size="md"
                    />

                    <InfoCard
                        icon={<Code className="text-cyan-400" />}
                        label="Tipo"
                        value={project.category === "web"
                            ? "Aplicación Web"
                            : project.category === "desktop"
                                ? "Aplicación de Escritorio"
                                : "Aplicación Móvil"
                        }
                        colorClass="bg-cyan-500/10"
                        size="md"
                    />

                    <InfoCard
                        icon={<Users className="text-cyan-400" />}
                        label="Rol"
                        value={project.role}
                        colorClass="bg-cyan-500/10"
                        size="md"
                    />
                </div>

                {/* Descripción */}
                <div className="mb-6">
                    <SectionHeader title="Descripción" size="lg" />
                    <p className="text-gray-300">{project.description}</p>
                </div>

                {/* Tecnologías */}
                <div className="mb-6">
                    <SectionHeader title="Tecnologías" size="lg" />
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-zinc-700/50 px-3 py-1.5 rounded-md text-sm font-medium text-cyan-300 border border-zinc-600/50"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Características */}
                <div className="mb-6">
                    <SectionHeader title="Características" size="lg" />
                    <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Botón de GitHub */}
                <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white py-3 rounded-lg transition-colors shadow-md"
                >
                    <FaGithub className="w-5 h-5" />
                    <span>Ver código en GitHub</span>
                </a>
            </div>
        </BaseModal>
    )
}