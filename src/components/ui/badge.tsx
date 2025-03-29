import type React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps {
    children: React.ReactNode
    variant?: "default" | "outline" | "cyan"
    className?: string
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-block px-2 py-1 rounded text-xs",
                variant === "default" && "bg-zinc-800",
                variant === "outline" && "bg-transparent border border-zinc-700",
                variant === "cyan" && "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
                className,
            )}
        >
      {children}
    </span>
    )
}