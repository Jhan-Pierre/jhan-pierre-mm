import type { LucideIcon } from "lucide-react"

interface ContactItemProps {
    icon: LucideIcon
    text: string
    href?: string
    whatsapp?: boolean
}

export default function ContactItem({ icon: Icon, text, href, whatsapp }: ContactItemProps) {
    const content = (
        <>
            <div className="bg-cyan-500/10 p-1.5 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                <Icon className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="text-sm group-hover:text-cyan-300 transition-colors">{text}</span>
        </>
    )

    // Si es un número de teléfono y se especifica WhatsApp, crear un enlace de WhatsApp
    const getHref = () => {
        if (whatsapp && href?.startsWith("tel:")) {
            // Extraer solo los números del teléfono
            const phoneNumber = href.replace("tel:", "").replace(/\D/g, "")
            return `https://wa.me/${phoneNumber}`
        }
        return href
    }

    if (href) {
        return (
            <a
                href={getHref()}
                className="flex items-center gap-2 p-1 rounded-lg hover:bg-zinc-800 transition-colors group"
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
                {content}
            </a>
        )
    }

    return (
        <div className="flex items-center gap-2 p-1 rounded-lg hover:bg-zinc-800 transition-colors group">{content}</div>
    )
}

