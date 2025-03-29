// Tipos para la información personal
export interface PersonalInfo {
    name: string
    role: string
    email: string
    phone: string
    location: string
    languages: string[]
    isAvailable: boolean
    availabilityText: string
    photo: string
    socialLinks: SocialLink[]
    coffeeCups: number
}

export interface SocialLink {
    platform: string
    url: string
    icon: string
}

// Tipos para experiencia laboral
export interface Experience {
    id: number
    title: string
    company: string
    period: string
    type: string
    description: string[]
    skills: string[]
    achievements?: string[]
}

// Tipos para educación
export interface Education {
    id: number
    title: string
    institution: string
    period: string
    type: string
    description: string
    skills: string[]
    achievements?: string[]
}

// Tipos para habilidades
export interface Skill {
    name: string
    level: number
    category: SkillCategory
    icon?: string
}

export type SkillCategory = "language" | "framework" | "database" | "tool" | "other"

// Tipos para proyectos
export interface Project {
    id: number
    title: string
    category: string
    images: string[]
    description: string
    technologies: string[]
    demoUrl: string
    codeUrl: string
    period: string
    role: string
    features: string[]
}

// Tipos para certificaciones
export interface Certificate {
    id: number
    title: string
    issuer: string
    date: string
    description: string
    category: string
    color: string
    credentialUrl?: string
}

export interface CertificateCategory {
    id: string
    label: string
}

// Tipos para logros
export interface Achievement {
    value: string
    label: string
}