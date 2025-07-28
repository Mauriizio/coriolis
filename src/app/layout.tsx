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
    "Accesorios hechos a mano en porcelana fría: colecciones oceánica, floral, Pet Lovers y más. Diseños exclusivos, personalizados y envíos a todo Chile.",
  keywords:
    "joyería artesanal, accesorios únicos, porcelana fría, colecciones oceánica, colección floral, Pet Lovers, accesorios para mascotas, Santiago Chile",
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
