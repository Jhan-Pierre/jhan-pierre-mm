import { experiences } from "@/data/experience"
import SectionIconHeading from "@/components/ui/section-icon-heading"
import { Briefcase } from "lucide-react"
import TimelineItem from "@/components/ui/timeline-item"

export default function ExperienceSection() {
    const reversedExperiences = [...experiences].reverse()
    return (
        <div className="mb-10">
            <SectionIconHeading title="Experiencia Laboral" icon={Briefcase} />

            <div className="space-y-8">
                {reversedExperiences.map((exp) => (
                    <TimelineItem
                        key={exp.id}
                        title={exp.title}
                        subtitle={
                            <>
                                <span>{exp.period}</span>
                                <span className="mx-2">•</span>
                                <span>{exp.company}</span>
                            </>
                        }
                        badge={exp.type}
                        skills={exp.skills}
                        achievements={exp.achievements}
                    >
                        {exp.description.length === 1 ? (
                            <p className="text-gray-300">{exp.description[0]}</p>
                        ) : (
                            <ul className="text-gray-300 space-y-2 list-disc list-inside">
                                {exp.description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </TimelineItem>
                ))}
            </div>
        </div>
    )
}