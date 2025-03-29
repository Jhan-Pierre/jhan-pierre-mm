interface SectionHeadingProps {
    title: string
    className?: string
}

export default function SectionHeading({ title, className = "" }: SectionHeadingProps) {
    return (
        <h2 className={`text-3xl font-bold mb-6 ${className}`}>
            {title}
            <div className="w-12 h-1 bg-cyan-400 mt-2"></div>
        </h2>
    )
}