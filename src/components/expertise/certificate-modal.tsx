"use client"

import { useEffect, useRef } from "react"
import { ArrowLeft, Calendar, Award, ExternalLink, BookOpen, Users, Tag } from "lucide-react"
import Image from "next/image"
import type { Certificate } from "@/types"
import { Badge } from "@/components/ui/badge"

interface CertificateModalProps {
    certificate: Certificate | null
    onCloseAction: () => void
    formatDateAction: (date: string) => string
}

// Reusable component for info cards
interface InfoCardProps {
    icon: React.ReactNode
    label: string
    value: string
    colorClass: string
}

const InfoCard = ({ icon, label, value, colorClass }: InfoCardProps) => (
    <div className="bg-zinc-800/50 p-3 rounded-lg border border-zinc-700/30 flex items-center gap-3">
        <div className={`${colorClass} p-2 rounded-full`}>
            {icon}
        </div>
        <div>
            <p className="text-xs text-gray-400">{label}</p>
            <p className="font-medium text-sm">{value}</p>
        </div>
    </div>
)

// Reusable component for section headers
interface SectionHeaderProps {
    title: string
}

const SectionHeader = ({ title }: SectionHeaderProps) => (
    <h4 className="text-base font-semibold mb-2 flex items-center gap-2">
        <span className="w-1 h-4 bg-cyan-400 rounded-full"></span>
        {title}
    </h4>
)

export default function CertificateModal({ certificate, onCloseAction, formatDateAction }: CertificateModalProps) {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onCloseAction()
        }

        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onCloseAction()
            }
        }

        document.addEventListener("keydown", handleEscape)
        document.addEventListener("mousedown", handleClickOutside)

        // Bloquear el scroll del body cuando el modal está abierto
        document.body.style.overflow = "hidden"

        return () => {
            document.removeEventListener("keydown", handleEscape)
            document.removeEventListener("mousedown", handleClickOutside)
            document.body.style.overflow = "auto"
        }
    }, [onCloseAction])

    if (!certificate) return null

    // Obtener el nombre de la categoría
    const getCategoryName = (category: string) => {
        const categories: Record<string, string> = {
            web: "Desarrollo Web",
            backend: "Backend",
            frontend: "Frontend",
            database: "Bases de Datos",
            cloud: "Cloud Computing",
            mobile: "Desarrollo Móvil",
            agile: "Metodologías Ágiles",
            other: "Otros",
        }

        return categories[category] || "General"
    }

    // Acortar la descripción a un tamaño moderado
    const getModerateDescription = (description: string) => {
        const sentences = description.split(".")
        if (sentences.length > 1) {
            return sentences[0] + ". " + sentences[1] + "."
        }
        return description
    }

    const categoryName = getCategoryName(certificate.category)
    const moderateDescription = getModerateDescription(certificate.description)

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div
                ref={modalRef}
                className="bg-zinc-900 rounded-xl w-full max-w-5xl max-h-[90vh] overflow-auto shadow-2xl border border-zinc-800 relative animate-in fade-in duration-300"
            >
                {/* Header */}
                <div className="sticky top-0 z-30 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800 p-4 flex justify-between items-center">
                    <button
                        onClick={onCloseAction}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="text-sm font-medium">Volver</span>
                    </button>
                    <h3 className="text-xl font-semibold">{certificate.title}</h3>
                    <div className="w-24"></div> {/* Espacio para equilibrar el header */}
                </div>

                <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Columna izquierda - Imagen del certificado */}
                    <div className="bg-zinc-800/50 rounded-xl overflow-hidden border border-zinc-700/30 p-4">
                        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                            <Image
                                src={certificate.imagePath || "/placeholder.svg"}
                                alt={`Certificado: ${certificate.title}`}
                                fill
                                className="object-contain"
                                onError={(e) => {
                                    e.currentTarget.onerror = null
                                    e.currentTarget.src = "/placeholder.svg?height=400&width=800&text=Certificado"
                                }}
                            />
                        </div>
                    </div>

                    {/* Columna derecha - Detalles del certificado */}
                    <div className="flex flex-col h-full">
                        {/* Información del certificado */}
                        <div className="grid grid-cols-3 gap-4 mb-5">
                            <InfoCard
                                icon={<Award className="w-4 h-4 text-cyan-400" />}
                                label="Institución"
                                value={certificate.issuer}
                                colorClass="bg-cyan-500/10"
                            />

                            <InfoCard
                                icon={<Calendar className="w-4 h-4 text-purple-400" />}
                                label="Expedición"
                                value={formatDateAction(certificate.date)}
                                colorClass="bg-purple-500/10"
                            />

                            <InfoCard
                                icon={<Tag className="w-4 h-4 text-amber-400" />}
                                label="Categoría"
                                value={categoryName}
                                colorClass="bg-amber-500/10"
                            />
                        </div>

                        {/* Descripción */}
                        <div className="mb-5">
                            <SectionHeader title="Descripción" />
                            <p className="text-gray-300 text-sm">{moderateDescription}</p>
                        </div>

                        {/* Habilidades */}
                        <div className="mb-5">
                            <SectionHeader title="Habilidades adquiridas" />
                            <div className="flex flex-wrap gap-2">
                                {certificate.skills.map((skill, index) => (
                                    <Badge key={index} variant="cyan" className="px-2 py-1 text-xs whitespace-nowrap">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Estadísticas */}
                        <div className="grid grid-cols-2 gap-4 mb-5">
                            <InfoCard
                                icon={<BookOpen className="w-4 h-4 text-cyan-400" />}
                                label="Duración"
                                value={`${certificate.stats?.hours || 20} horas`}
                                colorClass="bg-cyan-500/10"
                            />

                            <InfoCard
                                icon={<Users className="w-4 h-4 text-amber-400" />}
                                label="Programa"
                                value={`${certificate.stats?.weeks || 5} semanas`}
                                colorClass="bg-amber-500/10"
                            />
                        </div>

                        {/* Enlace a credencial original */}
                        {certificate.credentialUrl && (
                            <div className="mt-auto">
                                <a
                                    href={certificate.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>Ver credencial en sitio oficial</span>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}