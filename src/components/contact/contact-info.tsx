import { personalInfo } from "@/data/personal"
import { Mail, Phone, MapPin } from "lucide-react"
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"

export default function ContactInfo() {
    return (
        <div className="bg-zinc-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-800 shadow-lg h-full">
            <div className="bg-gradient-to-r from-cyan-600/20 to-transparent p-4 sm:p-5 border-b border-zinc-800">
                <h3 className="text-lg sm:text-xl font-semibold text-white">Información de Contacto</h3>
            </div>

            <div className="p-4 sm:p-5 space-y-4 sm:space-y-6">
                <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-zinc-700/30 transition-all group"
                >
                    <div className="bg-cyan-500/10 p-2 sm:p-3 rounded-lg group-hover:bg-cyan-500/20 transition-all">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                    </div>
                    <div>
                        <p className="font-medium text-white group-hover:text-cyan-300 transition-colors text-sm sm:text-base">
                            {personalInfo.email}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-400">Correo electrónico</p>
                    </div>
                </a>

                <a
                    href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-zinc-700/30 transition-all group"
                >
                    <div className="bg-cyan-500/10 p-2 sm:p-3 rounded-lg group-hover:bg-cyan-500/20 transition-all">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                    </div>
                    <div>
                        <p className="font-medium text-white group-hover:text-cyan-300 transition-colors text-sm sm:text-base">
                            {personalInfo.phone}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-400">Teléfono móvil</p>
                    </div>
                </a>

                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg hover:bg-zinc-700/30 transition-all group">
                    <div className="bg-cyan-500/10 p-2 sm:p-3 rounded-lg group-hover:bg-cyan-500/20 transition-all">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                    </div>
                    <div>
                        <p className="font-medium text-white text-sm sm:text-base">{personalInfo.location}</p>
                        <p className="text-xs sm:text-sm text-gray-400">Ubicación</p>
                    </div>
                </div>

                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-zinc-700/50">
                    <h4 className="text-xs sm:text-sm font-medium text-gray-400 mb-3 sm:mb-4">REDES SOCIALES</h4>
                    <div className="flex gap-3">
                        <a
                            href="https://github.com/Jhan-Pierre"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-zinc-700/50 hover:bg-zinc-700 p-2 sm:p-3 rounded-lg transition-colors group"
                        >
                            <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        </a>
                        <a
                            href="https://linkedin.com/in/jhandev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-zinc-700/50 hover:bg-zinc-700 p-2 sm:p-3 rounded-lg transition-colors group"
                        >
                            <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61564429679198"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-zinc-700/50 hover:bg-zinc-700 p-2 sm:p-3 rounded-lg transition-colors group"
                        >
                            <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}