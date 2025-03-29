"use client"

import { Search, Filter, Globe, Server, Code, Database, Smartphone, Users, Award } from "lucide-react"
import type { CertificateCategory } from "@/types"

interface CertificateFiltersProps {
    categories: CertificateCategory[]
    filter: string
    setFilterAction: (filter: string) => void
    searchTerm: string
    setSearchTermAction: (term: string) => void
}

export default function CertificateFilters({
                                               categories,
                                               filter,
                                               setFilterAction,
                                               searchTerm,
                                               setSearchTermAction,
                                           }: CertificateFiltersProps) {
    // Función para obtener el icono según la categoría
    const getCategoryIcon = (categoryId: string) => {
        switch (categoryId) {
            case "all":
                return <Filter className="w-3.5 h-3.5" />
            case "web":
                return <Globe className="w-3.5 h-3.5" />
            case "backend":
                return <Server className="w-3.5 h-3.5" />
            case "frontend":
                return <Code className="w-3.5 h-3.5" />
            case "database":
                return <Database className="w-3.5 h-3.5" />
            case "mobile":
                return <Smartphone className="w-3.5 h-3.5" />
            case "agile":
                return <Users className="w-3.5 h-3.5" />
            case "other":
                return <Award className="w-3.5 h-3.5" />
            default:
                return <Filter className="w-3.5 h-3.5" />
        }
    }

    return (
        <div className="mb-6 flex flex-col md:flex-row gap-4">
            <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`px-3 py-1.5 rounded-md text-sm transition-colors flex items-center gap-1 ${
                            filter === category.id ? "bg-cyan-600 text-white" : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                        }`}
                        onClick={() => setFilterAction(category.id)}
                    >
                        {getCategoryIcon(category.id)}
                        {category.label}
                    </button>
                ))}
            </div>

            <div className="relative ml-auto">
                <div className="absolute left-3 top-1/5 -translate-y-1/2">
                    <Search className="w-4 h-4 translate-y-1/2 text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="Buscar certificados..."
                    value={searchTerm}
                    onChange={(e) => setSearchTermAction(e.target.value)}
                    className="pl-9 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-400 w-full md:w-64"
                />
            </div>
        </div>
    )
}