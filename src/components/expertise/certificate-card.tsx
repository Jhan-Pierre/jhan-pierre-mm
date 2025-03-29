import { Award, Calendar, ExternalLink } from "lucide-react"
import type { Certificate } from "@/types"

interface CertificateCardProps {
    certificate: Certificate
    formatDate: (date: string) => string
}

export default function CertificateCard({ certificate, formatDate }: CertificateCardProps) {
    // Generar URL para certificados que no tienen credentialUrl
    const getCredentialUrl = (cert: Certificate) => {
        if (cert.credentialUrl) return cert.credentialUrl
        // Generar una URL para los certificados que no tienen credentialUrl
        return `/files/certificates/${cert.id}.pdf`
    }

    return (
        <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/10 transition-all hover:translate-y-[-2px] flex flex-col">
            <div className={`h-2 bg-gradient-to-r ${certificate.color}`}></div>
            <div className="p-5 flex-grow">
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="text-lg font-semibold">{certificate.title}</h4>
                        <p className="text-gray-400 text-sm">{certificate.issuer}</p>
                    </div>
                    <div className="bg-cyan-500/10 p-2 rounded-full">
                        <Award className="text-cyan-400 w-5 h-5" />
                    </div>
                </div>
                <div className="mt-3 text-gray-300 text-sm">
                    <p>{certificate.description}</p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-gray-400 text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Expedición: {formatDate(certificate.date)}</span>
                </div>
            </div>
            <div className="p-4 pt-0 mt-auto">
                <a
                    href={getCredentialUrl(certificate)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center block bg-cyan-600 hover:bg-cyan-700 px-3 py-2 rounded-md transition-colors text-white flex items-center justify-center gap-1 shadow-md hover:shadow-lg"
                    title="Ver credencial en una nueva pestaña"
                >
                    Ver credencial
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
            </div>
        </div>
    )
}