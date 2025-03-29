interface TechTagsProps {
    technologies: string[]
}

export default function TechTags({ technologies }: TechTagsProps) {
    return (
        <div className="w-full mb-3">
            <h3 className="text-xs font-semibold mb-3 text-gray-400 flex items-center justify-center md:justify-start gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cyan-400"
                >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                TECNOLOGÍAS DESTACADAS
            </h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="bg-zinc-800 hover:bg-cyan-900/30 px-2 py-1 rounded text-xs text-cyan-300 border border-zinc-700 hover:border-cyan-700 transition-all duration-200"
                    >
            {tech}
          </span>
                ))}
            </div>
        </div>
    )
}


