import type { LucideIcon } from "lucide-react"

interface SectionIconHeadingProps {
    title: string
    icon: LucideIcon
    className?: string
}

export default function SectionIconHeading({ title, icon: Icon, className = "" }: SectionIconHeadingProps) {
    return (
        <div className={`flex items-center gap-3 mb-6 ${className}`}>
            <div className="bg-cyan-500/10 p-2 rounded-lg">
                <Icon className="text-cyan-400 w-5 h-5" />
            </div>
            <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
    )
}