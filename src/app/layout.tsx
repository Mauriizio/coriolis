import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Coriolis Accesorios – Joyería Artesanal Exclusiva | Santiago, Chile",
  description:
    "Descubre nuestros aretes artesanales hechos a mano en porcelana fría, con diseños de flores y animales marinos. Aros únicos, femeninos, originales, perfectos para regalar o lucir un estilo creativo. Joyería artesanal en Santiago de Chile.",
  keywords:
    "joyería artesanal mujer, aretes hechos a mano, aros artesanales, aretes de porcelana fría, accesorios originales para mujer, aros con diseño floral, aretes con flores, aros con forma de animales, aretes con animales marinos, joyas artesanales Chile, aros femeninos únicos, accesorios delicados para mujer, joyería creativa hecha a mano, regalos originales para mujer, joyería artesanal Santiago.",

  authors: [{ name: "Coriolis Accesorios" }],
  openGraph: {
    title: "Coriolis Accesorios – Joyería Artesanal Única",
    description:
      "Descubre accesorios handcrafted en porcelana fría: desde conchas y flores hasta diseños Pet Lovers. Exclusividad y estilo en cada pieza.",
    type: "website",
    locale: "es_CL",
  },
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
