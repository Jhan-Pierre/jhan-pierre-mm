"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface CertificatePaginationProps {
    currentPage: number
    totalPages: number
    paginateAction: (page: number) => void
}

export default function CertificatePagination({ currentPage, totalPages, paginateAction }: CertificatePaginationProps) {
    if (totalPages <= 1) return null

    return (
        <div className="mt-8 flex justify-center items-center gap-2">
            <button
                onClick={() => paginateAction(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-md ${
                    currentPage === 1 ? "text-gray-500 cursor-not-allowed" : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                }`}
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-1">
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => paginateAction(i + 1)}
                        className={`w-8 h-8 rounded-md flex items-center justify-center ${
                            currentPage === i + 1 ? "bg-cyan-600 text-white" : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            <button
                onClick={() => paginateAction(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-md ${
                    currentPage === totalPages
                        ? "text-gray-500 cursor-not-allowed"
                        : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                }`}
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    )
}