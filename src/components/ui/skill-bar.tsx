interface SkillBarProps {
    name: string
    percentage: number
}

export default function SkillBar({ name, percentage }: SkillBarProps) {
    return (
        <div>
            <div className="flex justify-between mb-1">
                <span>{name}</span>
                <span>{percentage}%</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-2.5 overflow-hidden">
                <div className="bg-cyan-400 h-2.5 rounded-full animate-pulse-slow" style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    )
}