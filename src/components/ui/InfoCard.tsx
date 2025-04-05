import React, { ReactNode } from "react"

interface InfoCardProps {
    icon: ReactNode
    label: string
    value: string
    colorClass?: string
    size?: "sm" | "md"
}

export function InfoCard({
                             icon,
                             label,
                             value,
                             colorClass = "bg-cyan-500/10",
                             size = "sm"
                         }: InfoCardProps) {
    const padding = size === "sm" ? "p-3" : "p-4"
    const iconSize = size === "sm" ? "w-4 h-4" : "w-5 h-5"
    const valueSize = size === "sm" ? "text-sm" : "text-base"

    return (
        <div className={`bg-zinc-800/50 ${padding} rounded-lg border border-zinc-700/30 flex items-center gap-3`}>
            <div className={`${colorClass} p-2 rounded-full`}>
                {/* Clone the icon and add the size class */}
                {React.isValidElement(icon)
                    ? React.cloneElement(icon as React.ReactElement<React.HTMLAttributes<HTMLElement>>, { className: iconSize })
                    : icon}
            </div>
            <div>
                <p className="text-xs text-gray-400">{label}</p>
                <p className={`font-medium ${valueSize}`}>{value}</p>
            </div>
        </div>
    )
}