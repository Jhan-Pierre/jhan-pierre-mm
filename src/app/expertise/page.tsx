"use client"

import SectionHeading from "@/components/ui/section-heading"
import ExperienceSection from "@/components/expertise/experience-section"
import EducationSection from "@/components/expertise/education-section"
import CertificatesSection from "@/components/expertise/certificates-section"
import TechnologiesSection from "@/components/expertise/technologies-section"
import Navbar from "@/components/navbar"

export default function ExpertisePage() {
    return (
        <main className="p-6">
            <Navbar />
            <div className="mt-2">
                <SectionHeading title="Experiencia" />
                <ExperienceSection />
                <EducationSection />
                <CertificatesSection />
                <TechnologiesSection />
            </div>
        </main>
    )
}