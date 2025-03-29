import SectionHeading from "@/components/ui/section-heading"
import ContactInfo from "@/components/contact/contact-info"
import ContactForm from "@/components/contact/contact-form"
import Navbar from "@/components/navbar"

export default function ContactPage() {
    return (
        <main className="p-6">
            <Navbar />
            <div className="mt-2">
                <SectionHeading title="Contacto" />

                <div className="mt-6 text-gray-300 max-w-3xl">
                    <p className="text-lg">
                        Estoy interesado en oportunidades de desarrollo y colaboración en proyectos innovadores. Si tienes alguna
                        pregunta o propuesta, no dudes en contactarme.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </main>
    )
}