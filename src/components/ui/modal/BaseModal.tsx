"use client"

import { useEffect, useRef, ReactNode } from "react"

interface BaseModalProps {
    isOpen: boolean
    onCloseAction: () => void
    children: ReactNode
    maxWidth?: string
}

export function BaseModal({ isOpen, onCloseAction, children, maxWidth = "max-w-3xl" }: BaseModalProps) {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!isOpen) return

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onCloseAction()
        }

        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onCloseAction()
            }
        }

        document.addEventListener("keydown", handleEscape)
        document.addEventListener("mousedown", handleClickOutside)

        // Bloquear el scroll del body cuando el modal está abierto
        document.body.style.overflow = "hidden"

        return () => {
            document.removeEventListener("keydown", handleEscape)
            document.removeEventListener("mousedown", handleClickOutside)
            document.body.style.overflow = "auto"
        }
    }, [isOpen, onCloseAction])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div
                ref={modalRef}
                className={`bg-zinc-900 rounded-xl w-full ${maxWidth} max-h-[90vh] overflow-auto shadow-2xl border border-zinc-800 relative animate-in fade-in duration-300`}
            >
                {children}
            </div>
        </div>
    )
}