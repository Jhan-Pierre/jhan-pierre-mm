import type { NextConfig } from "next";

module.exports = {
    allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
    devIndicators: false
}

const nextConfig: NextConfig = {
    reactStrictMode: true,

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
        formats: ["image/avif", "image/webp"], // Eliminamos 'quality'
    },

    experimental: {
        optimizePackageImports: ["lucide-react"],
    },

    transpilePackages: ["lucide-react"],
};

export default nextConfig;
