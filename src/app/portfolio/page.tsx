"use client"

import { useState } from "react"
import SectionHeading from "@/components/ui/section-heading"
import ProjectFilters from "@/components/portfolio/project-filters"
import ProjectGrid from "@/components/portfolio/project-grid"
import ProjectDetailModal from "@/components/portfolio/project-detail-modal"
import { projects } from "@/data/projects"
import { useFilteredProjects } from "@/hooks/useFilteredProjects"
import Navbar from "@/components/navbar"
import type { Project } from "@/types"

export default function PortfolioPage() {
    const { filter, setFilter, filteredProjects } = useFilteredProjects(projects)
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    const handleViewProject = (project: Project) => {
        setSelectedProject(project)
    }

    const handleCloseModal = () => {
        setSelectedProject(null)
    }

    return (
        <main className="p-6">
            <Navbar />
            <div className="mt-2">
                <SectionHeading title="Portafolio" />
                <p className="text-gray-300 mb-8">
                    Aquí encontrarás una selección de mis proyectos más destacados. Cada proyecto incluye una descripción, las
                    tecnologías utilizadas y un enlace al repositorio de GitHub donde puedes explorar el código fuente.
                </p>

                <ProjectFilters filter={filter} setFilterAction={setFilter} />
                <ProjectGrid projects={filteredProjects} onViewProjectAction={handleViewProject} />

                {selectedProject && <ProjectDetailModal project={selectedProject} onCloseAction={handleCloseModal} />}
            </div>
        </main>
    )
}
