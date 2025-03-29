import CertificateCard from "./certificate-card"
import type { Certificate } from "@/types"

interface CertificateGridProps {
    certificates: Certificate[]
    formatDate: (date: string) => string
}

export default function CertificateGrid({ certificates, formatDate }: CertificateGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert) => (
                <CertificateCard key={cert.id} certificate={cert} formatDate={formatDate} />
            ))}
        </div>
    )
}