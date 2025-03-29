"use client"

import { Coffee } from "lucide-react"
import { personalInfo } from "@/data/personal"
import { featuredTechnologies } from "@/data/skills"
import AvailabilityIndicator from "./availability-indicator"
import TechTags from "./tech-tags"
import SocialLinks from "./social-links"
import Image from "next/image"

export default function Sidebar() {
    return (
        <div className="bg-zinc-900 p-4 rounded-lg shadow-lg border border-zinc-800 flex flex-col items-center w-full relative overflow-hidden">
            {/* Elementos decorativos sutiles */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-16 h-16 rounded-lg bg-cyan-500 blur-3xl"></div>
            </div>

            {/* Contenedor de perfil */}
            <div className="w-full flex flex-col items-center gap-3 mb-4">
                {/* Foto de perfil */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-sm opacity-50 group-hover:opacity-70 transition-opacity"></div>
                    <div className="bg-zinc-800 rounded-full overflow-hidden w-24 h-24 md:w-28 md:h-28 ring-2 ring-cyan-400/30 relative z-10">
                        <Image
                            src={personalInfo.photo || "/placeholder.svg"}
                            alt="Foto de perfil"
                            width={112}
                            height={112}
                            className="object-cover w-full h-full"
                            style={{ borderRadius: "50%" }}
                        />
                    </div>
                </div>

                {/* Nombre y rol */}
                <div className="text-center">
                    <h1 className="text-lg font-bold">{personalInfo.name}</h1>
                    <p className="text-sm text-gray-400">{personalInfo.role}</p>
                </div>

                {/* Indicador de disponibilidad */}
                <AvailabilityIndicator isAvailable={personalInfo.isAvailable} text={personalInfo.availabilityText} />
            </div>

            <div className="w-full border-t border-zinc-800 my-2"></div>

            {/* Información de contacto */}
            <div className="w-full space-y-3 my-3">
                {/* Email */}
                <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center justify-center md:justify-start gap-2 p-2 rounded-lg hover:bg-zinc-800 transition-colors group"
                    onClick={(e) => {
                        e.preventDefault()
                        window.location.href = `mailto:${personalInfo.email}`
                    }}
                >
                    <div className="bg-cyan-500/10 p-1.5 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 text-cyan-400"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                    </div>
                    <span className="text-sm group-hover:text-cyan-300 transition-colors truncate">{personalInfo.email}</span>
                </a>

                {/* Teléfono */}
                <a
                    href={`https://wa.me/${personalInfo.phone.replace(/[^0-9+]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center md:justify-start gap-2 p-2 rounded-lg hover:bg-zinc-800 transition-colors group"
                >
                    <div className="bg-cyan-500/10 p-1.5 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 text-cyan-400"
                        >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                    </div>
                    <span className="text-sm group-hover:text-cyan-300 transition-colors">{personalInfo.phone}</span>
                </a>

                {/* Ubicación */}
                <div className="flex items-center justify-center md:justify-start gap-2 p-2 rounded-lg hover:bg-zinc-800 transition-colors group">
                    <div className="bg-cyan-500/10 p-1.5 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 text-cyan-400"
                        >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                    </div>
                    <span className="text-sm group-hover:text-cyan-300 transition-colors truncate">
            {personalInfo.location.split(",").slice(0, 2).join(",")}
          </span>
                </div>

                {/* Idiomas */}
                <div className="flex items-center justify-center md:justify-start gap-2 p-2 rounded-lg hover:bg-zinc-800 transition-colors group">
                    <div className="bg-cyan-500/10 p-1.5 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 text-cyan-400"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                            <path d="M2 12h20"></path>
                        </svg>
                    </div>
                    <span className="text-sm group-hover:text-cyan-300 transition-colors">
            {personalInfo.languages.join(", ")}
          </span>
                </div>
            </div>

            <div className="w-full border-t border-zinc-800 my-2"></div>

            {/* Tecnologías destacadas */}
            <TechTags technologies={featuredTechnologies} />

            {/* Botón de descarga CV */}
            <a
                href="/files/jhan-pierre-cv.pdf"
                onClick={(e) => {
                    e.preventDefault()
                    window.open("/files/jhan-pierre-cv.pdf", "_blank")
                }}
                className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-md transition-colors my-3 text-sm"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
                <span>Descargar CV</span>
            </a>

            {/* Redes sociales */}
            <SocialLinks links={personalInfo.socialLinks} />

            {/* Contador de café */}
            <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                <Coffee className="w-3 h-3 text-amber-500" />
                <span>{personalInfo.coffeeCups.toLocaleString()} tazas de café consumidas</span>
            </div>
        </div>
    )
}

