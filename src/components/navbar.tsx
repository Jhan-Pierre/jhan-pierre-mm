"use client"

import { useState, useEffect, useTransition } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const pathname = usePathname()
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Detectar tamaño de pantalla para mostrar/ocultar menú móvil
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        // Comprobar al cargar
        checkScreenSize()

        // Comprobar al cambiar el tamaño de la ventana
        window.addEventListener("resize", checkScreenSize)
        return () => window.removeEventListener("resize", checkScreenSize)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Cerrar menú móvil cuando cambia la ruta
    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [pathname])

    const tabs = [
        { id: "/", label: "Sobre mí" },
        { id: "/expertise", label: "Experiencia" },
        { id: "/portfolio", label: "Portfolio" },
        { id: "/contact", label: "Contacto" },
    ]

    const navigate = (href: string) => {
        startTransition(() => {
            router.push(href)
        })
    }

    return (
        <nav
            className={cn(
                "sticky top-0 z-50 transition-all duration-300",
                scrolled ? "bg-zinc-900/80 backdrop-blur-sm py-2 px-3 -mx-3 rounded-lg shadow-lg" : "py-0",
            )}
        >
            <div className="flex items-center justify-between">
                {/* Título de la página actual en móviles */}
                {isMobile && (
                    <div className="flex-1">
                        <h2 className="text-lg font-medium text-cyan-400">
                            {tabs.find((tab) => tab.id === pathname)?.label || "Inicio"}
                        </h2>
                    </div>
                )}

                {/* Enlaces de navegación en escritorio */}
                {!isMobile && (
                    <div className="flex items-center gap-4 lg:gap-6 overflow-x-auto scrollbar-hide">
                        {tabs.map((tab) => (
                            <Link
                                key={tab.id}
                                href={tab.id}
                                onClick={(e) => {
                                    e.preventDefault()
                                    navigate(tab.id)
                                }}
                                className={cn(
                                    "text-gray-400 hover:text-white transition-colors whitespace-nowrap relative py-2 text-sm lg:text-base",
                                    pathname === tab.id && "text-cyan-400 font-medium",
                                    isPending && "opacity-70",
                                )}
                                prefetch={true}
                            >
                                {tab.label}
                                {pathname === tab.id && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"></span>}
                            </Link>
                        ))}
                    </div>
                )}

                {/* Botón de menú móvil */}
                {isMobile && (
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white bg-zinc-800 hover:bg-zinc-700 p-2 rounded-md ml-auto"
                        aria-label="Menú"
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                )}
            </div>

            {/* Menú móvil */}
            {isMobile && isMobileMenuOpen && (
                <div
                    id="mobile-menu"
                    className="mt-4 bg-zinc-800 rounded-lg p-4 shadow-xl border border-zinc-700 z-50 relative"
                >
                    <div className="flex flex-col space-y-3">
                        {tabs.map((tab) => (
                            <Link
                                key={tab.id}
                                href={tab.id}
                                onClick={(e) => {
                                    e.preventDefault()
                                    navigate(tab.id)
                                    setIsMobileMenuOpen(false)
                                }}
                                className={cn(
                                    "text-white hover:text-cyan-300 transition-colors py-2 px-3 rounded-md font-medium",
                                    pathname === tab.id && "bg-zinc-700 text-cyan-400",
                                )}
                                prefetch={true}
                            >
                                {tab.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}