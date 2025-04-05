interface SectionHeaderProps {
    title: string
    size?: "sm" | "lg"
}

export function SectionHeader({ title, size = "sm" }: SectionHeaderProps) {
    const titleClass = size === "sm"
        ? "text-base font-semibold mb-2"
        : "text-xl font-semibold mb-3"

    return (
        <h4 className={`${titleClass} flex items-center gap-2`}>
            {size === "sm" && <span className="w-1 h-4 bg-cyan-400 rounded-full"></span>}
            {title}
        </h4>
    )
}