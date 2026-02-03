/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  //eslint: { ignoreDuringBuilds: true, },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placeholder.svg",
      },
    ],
    formats: ["image/webp", "image/avif"],
    unoptimized: true,
  },
  // Configuración mejorada para producción
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig
