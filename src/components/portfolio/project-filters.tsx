"use client"

import { cn } from "@/lib/utils"
import { projectCategories } from "@/data/projects"
import { Filter, Globe, Monitor, Smartphone } from "lucide-react"

interface ProjectFiltersProps {
    filter: string
    setFilterAction: (filter: string) => void
}

export default function ProjectFilters({ filter, setFilterAction }: ProjectFiltersProps) {
    // Función para obtener el icono según la categoría
    const getCategoryIcon = (categoryId: string) => {
        switch (categoryId) {
            case "all":
                return <Filter className="w-4 h-4" />
            case "web":
                return <Globe className="w-4 h-4" />
            case "desktop":
                return <Monitor className="w-4 h-4" />
            case "mobile":
                return <Smartphone className="w-4 h-4" />
            default:
                return <Filter className="w-4 h-4" />
        }
    }

    return (
        <div className="mb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-300">Filtrar por categoría:</h3>
            <div className="flex flex-wrap gap-3">
                {projectCategories.map((category) => (
                    <button
                        key={category.id}
                        className={cn(
                            "px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium",
                            filter === category.id
                                ? "bg-cyan-600 text-white shadow-lg shadow-cyan-500/20"
                                : "bg-zinc-800 text-gray-300 hover:bg-zinc-700 border border-zinc-700/50",
                        )}
                        onClick={() => setFilterAction(category.id)}
                    >
                        {getCategoryIcon(category.id)}
                        {category.label}
                    </button>
                ))}
            </div>
        </div>
    )
}