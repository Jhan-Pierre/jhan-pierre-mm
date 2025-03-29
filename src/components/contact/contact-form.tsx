"use client"

import type React from "react"
import { useState, type FormEvent, useRef } from "react"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import emailjs from "@emailjs/browser"

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null)
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.id]: e.target.value,
        })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setFormStatus("submitting")

        try {
            // Usar EmailJS para enviar el formulario
            const result = await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formRef.current!,
                {
                    publicKey: process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
                },
            )

            if (result.status === 200) {
                setFormStatus("success")
                setFormState({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                })
            } else {
                setFormStatus("error")
            }
        } catch (error) {
            console.error("Error al enviar el formulario:", error)
            setFormStatus("error")
        }
    }

    return (
        <div className="bg-zinc-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-800 shadow-lg h-full">
            <div className="bg-gradient-to-r from-cyan-600/20 to-transparent p-4 sm:p-5 border-b border-zinc-800">
                <h3 className="text-lg sm:text-xl font-semibold text-white">Envíame un mensaje</h3>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="p-4 sm:p-5 space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-1 sm:space-y-2">
                        <label htmlFor="name" className="text-xs sm:text-sm font-medium text-gray-300">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name" // Importante para EmailJS
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-zinc-700/50 border border-zinc-700 rounded-lg p-2 sm:p-3 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                            placeholder="Tu nombre"
                            disabled={formStatus === "submitting"}
                        />
                    </div>

                    <div className="space-y-1 sm:space-y-2">
                        <label htmlFor="email" className="text-xs sm:text-sm font-medium text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email" // Importante para EmailJS
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-zinc-700/50 border border-zinc-700 rounded-lg p-2 sm:p-3 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                            placeholder="tu.email@ejemplo.com"
                            disabled={formStatus === "submitting"}
                        />
                    </div>
                </div>

                <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="subject" className="text-xs sm:text-sm font-medium text-gray-300">
                        Asunto
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject" // Importante para EmailJS
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-zinc-700/50 border border-zinc-700 rounded-lg p-2 sm:p-3 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                        placeholder="Asunto del mensaje"
                        disabled={formStatus === "submitting"}
                    />
                </div>

                <div className="space-y-1 sm:space-y-2">
                    <label htmlFor="message" className="text-xs sm:text-sm font-medium text-gray-300">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        name="message" // Importante para EmailJS
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-zinc-700/50 border border-zinc-700 rounded-lg p-2 sm:p-3 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                        placeholder="Escribe tu mensaje aquí..."
                        disabled={formStatus === "submitting"}
                    ></textarea>
                </div>

                {formStatus === "success" && (
                    <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3 flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                        <p className="text-cyan-300 text-sm sm:text-base">Tu mensaje ha sido enviado correctamente. ¡Gracias!</p>
                    </div>
                )}

                {formStatus === "error" && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 flex items-center gap-3">
                        <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                        <p className="text-red-300 text-sm sm:text-base">
                            Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo de nuevo.
                        </p>
                    </div>
                )}

                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className={cn(
                            "flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all text-sm sm:text-base",
                            formStatus === "submitting"
                                ? "bg-zinc-700 text-gray-400 cursor-not-allowed"
                                : "bg-cyan-600 hover:bg-cyan-700 text-white",
                        )}
                    >
                        {formStatus === "submitting" ? (
                            <>
                                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                                <span>Enviando...</span>
                            </>
                        ) : (
                            <>
                                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span>Enviar mensaje</span>
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}