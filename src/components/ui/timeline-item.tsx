import type React from "react"
import { Trophy } from "lucide-react"

interface TimelineItemProps {
    title: string
    subtitle: React.ReactNode
    badge: string
    children: React.ReactNode
    skills?: string[]
    achievements?: string[]
}

export default function TimelineItem({ title, subtitle, badge, children, skills, achievements }: TimelineItemProps) {
    return (
        <div className="relative pl-8 border-l-2 border-cyan-400">
            <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-[9px] top-0"></div>
            <div className="mb-2">
                <h4 className="text-xl font-semibold">{title}</h4>
                <div className="flex items-center gap-2 text-gray-400 mb-2">{subtitle}</div>
                <div className="inline-block bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium mb-3">
                    {badge}
                </div>
            </div>
            {children}

            {skills && skills.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <span key={index} className="bg-zinc-800 px-2 py-1 rounded text-xs">
              {skill}
            </span>
                    ))}
                </div>
            )}

            {achievements && achievements.length > 0 && (
                <div className="mt-4">
                    <h5 className="text-sm font-semibold flex items-center gap-2 text-cyan-300 mb-2">
                        <Trophy className="w-4 h-4" />
                        LOGROS DESTACADOS
                    </h5>
                    <ul className="space-y-2">
                        {achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                                <span className="text-cyan-400 mt-1">•</span>
                                <span>{achievement}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}