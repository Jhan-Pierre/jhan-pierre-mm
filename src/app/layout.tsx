import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/sidebar/index"

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
    preload: true,
    fallback: ["system-ui", "sans-serif"],
})

export const metadata: Metadata = {
    title: "JhanDev | Portfolio",
    description: "Portfolio profesional de desarrollador",
    metadataBase: new URL("https://portfolio.example.com"),
    creator: "Jhan Pierre",
    applicationName: "Portfolio Personal",
    keywords: ["portfolio", "desarrollador", "frontend", "backend", "fullstack"],
    icons: {
        icon: "/favicon.svg",
    },
}

export const viewport: Viewport = {
    colorScheme: "dark",
    themeColor: "#000000",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    interactiveWidget: "resizes-visual",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es" className="dark" suppressHydrationWarning>
        <body className={`${inter.variable} font-sans bg-black text-white antialiased`}>
        <div className="flex flex-col md:flex-row gap-4 max-w-7xl mx-auto p-4">
            <div className="md:sticky md:top-4 md:self-start flex-shrink-0 w-full md:w-72 lg:w-80">
                <Sidebar />
            </div>
            <div className="flex-grow bg-zinc-900 rounded-lg shadow-lg border border-zinc-800">{children}</div>
        </div>
        </body>
        </html>
    )
}