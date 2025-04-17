import SectionHeading from "@/components/ui/section-heading"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutSection() {
    return (
        <section className="mb-8 sm:mb-12">
            <SectionHeading title="Sobre Mí" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="md:col-span-2 space-y-3 sm:space-y-4 text-gray-300">
                    <p className="text-base sm:text-lg leading-relaxed">
                        Profesional Técnico en Desarrollo de Software con más de un año de experiencia.
                        Cuento con conocimientos en Java, Spring Boot, PHP, Laravel, .NET Framework y bases de datos SQL.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed">
                        Apasionado por la tecnología y el desarrollo web, disfruto crear soluciones que realmente aporten valor. Me gusta aprender constantemente, asumir nuevos retos y crecer con cada proyecto. Busco siempre la mejora continua, tanto a nivel técnico como personal, para desarrollar productos funcionales, modernos y con impacto real.
                    </p>

                    <div className="pt-3 sm:pt-4 flex flex-wrap gap-3 sm:gap-4">
                        <Link
                            href="/expertise"
                            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md transition-colors text-sm sm:text-base"
                        >
                            Ver Experiencia
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md transition-colors text-sm sm:text-base"
                        >
                            Contactar
                        </Link>
                    </div>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4 sm:p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4">
                        <div className="bg-cyan-500/10 p-2 sm:p-3 rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400"
                            >
                                <path d="M22 20V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2Z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-medium">Experiencia</h3>
                            <p className="text-gray-400 text-sm">+1 año</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4 mb-4">
                        <div className="bg-cyan-500/10 p-2 sm:p-3 rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400"
                            >
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-medium">Educación</h3>
                            <p className="text-gray-400 text-sm">SENATI</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="bg-cyan-500/10 p-2 sm:p-3 rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400"
                            >
                                <path d="M12 8c-2.8 0-5 2.2-5 5 0 2.8 2.2 5 5 5 2.8 0 5-2.2 5-5 0-2.8-2.2-5-5-5z"></path>
                                <path d="M12 3v1"></path>
                                <path d="M12 20v1"></path>
                                <path d="M3 12h1"></path>
                                <path d="M20 12h1"></path>
                                <path d="m18.364 5.636-.707.707"></path>
                                <path d="m6.343 17.657-.707.707"></path>
                                <path d="m5.636 5.636.707.707"></path>
                                <path d="m17.657 17.657.707.707"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-medium">Proyectos</h3>
                            <p className="text-gray-400 text-sm">+3 completados</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

