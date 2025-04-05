"use client"

import { useRef, useMemo, useState } from "react"
import { certificates, certificateCategories } from "@/data/certificates"
import { useFilteredCertificates } from "@/hooks/useFilteredCertificates"
import SectionIconHeading from "@/components/ui/section-icon-heading"
import { Award } from "lucide-react"
import CertificateFilters from "./certificate-filters"
import CertificateGrid from "./certificate-grid"
import CertificatePagination from "./certificate-pagination"
import CertificateModal from "./certificate-modal"
import type { Certificate } from "@/types"

export default function CertificatesSection() {
    const certificationsRef = useRef<HTMLDivElement>(null)
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)

    const {
        filter,
        setFilter,
        searchTerm,
        setSearchTerm,
        currentPage,
        filteredCertificates,
        currentCertificates,
        totalPages,
        paginate,
        resetFilters,
    } = useFilteredCertificates(certificates, 10) // Aumentado a 10 certificados por página

    // Calcular categorías que tienen certificados
    const categoriesWithCertificates = useMemo(() => {
        const categories = new Set<string>()
        certificates.forEach((cert) => {
            categories.add(cert.category)
        })

        // Siempre incluir "all"
        return certificateCategories.filter((category) => category.id === "all" || categories.has(category.id))
    }, [certificates])

    // Función para formatear la fecha (mostrar solo las 3 primeras letras del mes)
    const formatDate = (dateString: string) => {
        const parts = dateString.split(" ")
        if (parts.length === 2) {
            const month = parts[0].substring(0, 3)
            return `${month} ${parts[1]}`
        }
        return dateString
    }

    const handleViewCertificate = (certificate: Certificate) => {
        setSelectedCertificate(certificate)
    }

    const handleCloseModal = () => {
        setSelectedCertificate(null)
    }

    return (
        <div id="certificaciones" ref={certificationsRef} className="mb-10 scroll-mt-20">
            <SectionIconHeading title="Certificaciones" icon={Award} />
            <div className="text-sm text-gray-400 ml-2 -mt-4 mb-6">({filteredCertificates.length} certificados)</div>

            <CertificateFilters
                categories={categoriesWithCertificates}
                filter={filter}
                setFilterAction={setFilter}
                searchTerm={searchTerm}
                setSearchTermAction={setSearchTerm}
            />

            {/* Mensaje cuando no hay resultados */}
            {filteredCertificates.length === 0 && (
                <div className="bg-zinc-800 p-8 rounded-lg text-center">
                    <p className="text-gray-400">No se encontraron certificados que coincidan con tu búsqueda.</p>
                    <button
                        onClick={resetFilters}
                        className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-md transition-colors"
                    >
                        Limpiar filtros
                    </button>
                </div>
            )}

            {/* Grid de certificados */}
            {filteredCertificates.length > 0 && (
                <CertificateGrid
                    certificates={currentCertificates}
                    onViewCertificateAction={handleViewCertificate}
                />
            )}

            {/* Paginación */}
            <CertificatePagination currentPage={currentPage} totalPages={totalPages} paginateAction={paginate} />

            {/* Modal de certificado */}
            {selectedCertificate && (
                <CertificateModal certificate={selectedCertificate} onCloseAction={handleCloseModal} formatDateAction={formatDate} />
            )}
        </div>
    )
}