import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa"
import type { SocialLink } from "@/types"

interface SocialLinksProps {
    links: SocialLink[]
}

export default function SocialLinks({ links }: SocialLinksProps) {
    // Función para obtener el icono correspondiente
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "Github":
                return <FaGithub className="w-4 h-4" />
            case "Twitter":
                return <FaTwitter className="w-4 h-4" />
            case "Linkedin":
                return <FaLinkedin className="w-4 h-4" />
            case "Facebook":
                return <FaFacebook className="w-4 h-4" />
            default:
                return <FaFacebook className="w-4 h-4" />
        }
    }

    return (
        <div className="flex justify-center gap-3 mb-3 w-full">
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors bg-zinc-800 p-2 rounded-full hover:bg-zinc-700"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.platform}
                >
                    {getIcon(link.icon)}
                </a>
            ))}
        </div>
    )
}

