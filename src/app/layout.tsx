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
  title: "Coriolis Accesorios - Joyería Marina Artesanal | Santiago, Chile",
  description:
    "Descubre accesorios únicos inspirados en la vida marina. Aretes de medusas, pulpos, delfines y más, hechos a mano en porcelana fría. Envíos a todo Chile.",
  keywords:
    "accesorios marinos, aretes artesanales, joyería marina, medusas, pulpos, delfines, Santiago Chile, porcelana fría",
  authors: [{ name: "Coriolis Accesorios" }],
  openGraph: {
    title: "Coriolis Accesorios - Joyería Marina Artesanal",
    description: "Accesorios únicos inspirados en la vida marina, hechos a mano con amor",
    type: "website",
    locale: "es_CL",
  },
  viewport: "width=device-width, initial-scale=1",
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
