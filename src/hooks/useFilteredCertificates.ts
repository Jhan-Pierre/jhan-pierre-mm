"use client"

import { useState, useMemo } from "react"
import type { Certificate } from "@/types"

export function useFilteredCertificates(certificates: Certificate[], itemsPerPage = 8) {
    const [filter, setFilter] = useState("all")
    const [searchTerm, setSearchTerm] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const filteredCertificates = useMemo(() => {
        return certificates.filter((cert) => {
            // Filtrar por categoría
            if (filter !== "all" && cert.category !== filter) {
                return false
            }

            // Filtrar por término de búsqueda
            if (searchTerm.trim() !== "") {
                const searchLower = searchTerm.toLowerCase()
                return (
                    cert.title.toLowerCase().includes(searchLower) ||
                    cert.issuer.toLowerCase().includes(searchLower) ||
                    cert.description.toLowerCase().includes(searchLower)
                )
            }

            return true
        })
    }, [certificates, filter, searchTerm])

    // Calcular paginación
    const totalPages = Math.ceil(filteredCertificates.length / itemsPerPage)
    const currentCertificates = useMemo(() => {
        const indexOfLastCert = currentPage * itemsPerPage
        const indexOfFirstCert = indexOfLastCert - itemsPerPage
        return filteredCertificates.slice(indexOfFirstCert, indexOfLastCert)
    }, [filteredCertificates, currentPage, itemsPerPage])

    // Cambiar de página
    const paginate = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber)
        }
    }

    // Resetear filtros
    const resetFilters = () => {
        setFilter("all")
        setSearchTerm("")
        setCurrentPage(1)
    }

    return {
        filter,
        setFilter,
        searchTerm,
        setSearchTerm,
        currentPage,
        setCurrentPage,
        filteredCertificates,
        currentCertificates,
        totalPages,
        paginate,
        resetFilters,
    }
}