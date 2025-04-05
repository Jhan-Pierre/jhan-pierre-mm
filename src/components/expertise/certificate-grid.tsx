"use client"
import type { Certificate } from "@/types"
import { certificateCategories } from "@/data/certificates"

interface CertificateGridProps {
    certificates: Certificate[]
    onViewCertificateAction: (certificate: Certificate) => void
}

export default function CertificateGrid({ certificates, onViewCertificateAction }: CertificateGridProps) {
    const getCategoryName = (categoryId: string) => {
        const category = certificateCategories.find(cat => cat.id === categoryId)
        return category?.label || "General"
    }
    const getCategoryBadgeColor = (categoryId: string) => {
        const category = certificateCategories.find(cat => cat.id === categoryId)
        return category?.badgeColor || "bg-gray-500/20 text-gray-400"
    }

    return (
        <div className="overflow-hidden rounded-xl shadow-md">
            {/* Vista de escritorio */}
            <div className="hidden md:block">
                {/* Encabezado de la tabla */}
                <div className="grid grid-cols-12 gap-4 p-4 bg-zinc-800 text-sm font-medium">
                    <div className="col-span-6">Certificado</div>
                    <div className="col-span-3">Institución</div>
                    <div className="col-span-2">Categoría</div>
                    <div className="col-span-1 text-right">Acción</div>
                </div>

                {/* Filas de certificados */}
                <div className="divide-y divide-zinc-800/50 bg-zinc-900/50">
                    {certificates.map((cert, index) => (
                        <div
                            key={cert.id}
                            className={`grid grid-cols-12 gap-4 p-4 items-center hover:bg-zinc-800/30 transition-colors ${
                                index % 2 === 0 ? "bg-zinc-800/10" : "bg-transparent"
                            }`}
                        >
                            <div className="col-span-6 flex items-center gap-3">
                                {/* Usa el color decorativo del certificado para la barra izquierda */}
                                <div className={`w-1.5 h-8 rounded-full ${cert.color.split(" ")[0]}`}></div>
                                <div className="font-medium">{cert.title}</div>
                            </div>

                            <div className="col-span-3 text-gray-300">{cert.issuer}</div>

                            <div className="col-span-2">
                                <div
                                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryBadgeColor(cert.category)}`}
                                    style={{ whiteSpace: "nowrap" }}
                                >
                                    {getCategoryName(cert.category)}
                                </div>
                            </div>

                            <div className="col-span-1 flex justify-end">
                                <button
                                    onClick={() => onViewCertificateAction(cert)}
                                    className="bg-zinc-800 hover:bg-cyan-600 px-4 py-1.5 rounded text-xs font-medium transition-colors border border-zinc-700/30"
                                >
                                    Ver
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Vista móvil - Tarjetas */}
            <div className="md:hidden space-y-4">
                {certificates.map((cert) => (
                    <div
                        key={cert.id}
                        className="bg-zinc-800/30 rounded-lg overflow-hidden border border-zinc-700/30 hover:border-zinc-600/50 transition-all"
                    >
                        {/* Usa el color decorativo del certificado para la barra superior */}
                        <div className={`h-1 w-full ${cert.color.split(" ")[0]}`}></div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="font-medium text-white">{cert.title}</h3>
                                <div
                                    className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${getCategoryBadgeColor(cert.category)}`}
                                    style={{ whiteSpace: "nowrap" }}
                                >
                                    {getCategoryName(cert.category)}
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm mb-3">{cert.issuer}</p>

                            <button
                                onClick={() => onViewCertificateAction(cert)}
                                className="w-full bg-zinc-700 hover:bg-cyan-600 px-4 py-2 rounded text-sm font-medium transition-colors"
                            >
                                Ver certificado
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}