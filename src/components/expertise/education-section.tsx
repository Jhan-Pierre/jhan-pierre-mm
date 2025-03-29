import { education } from "@/data/experience"
import SectionIconHeading from "@/components/ui/section-icon-heading"
import { GraduationCap } from "lucide-react"
import TimelineItem from "@/components/ui/timeline-item"

export default function EducationSection() {
    return (
        <div className="mb-10">
            <SectionIconHeading title="Educación" icon={GraduationCap} />

            <div>
                {education.map((edu) => (
                    <TimelineItem
                        key={edu.id}
                        title={edu.title}
                        subtitle={
                            <>
                                <span>{edu.period}</span>
                                <span className="mx-2">•</span>
                                <span>{edu.institution}</span>
                            </>
                        }
                        badge={edu.type}
                        skills={edu.skills}
                        achievements={edu.achievements}
                    >
                        <p className="text-gray-300">{edu.description}</p>
                    </TimelineItem>
                ))}
            </div>
        </div>
    )
}