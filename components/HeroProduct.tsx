"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function HeroProduct() {
  const [selectedImage, setSelectedImage] = useState(0)

  const productImages = [
    "/images/promo2.png",
    "/images/promo1.png",
    "/images/promo3.png",
  ]

  // Auto‑rotate images every 3 seconds, loop back to start
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % productImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [productImages.length])

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      "¡Hola! Me interesan los aretes de La Colección Oceánica 2025.\n\n¿Podrías darme más información sobre disponibilidad y colores?",
    )
    window.open(`https://wa.me/56949473122?text=${message}`, "_blank")
  }

  // Función para hacer scroll al catálogo
  const scrollToCatalog = () => {
    const catalogSection = document.getElementById("productos")
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="pt-16 sm:pt-20 pb-8 sm:pb-16 ocean-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Product Images - Mobile First */}
          <div className="order-1 space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden">
              <Image
                src={productImages[selectedImage] || "/images/logo.png"}
                alt={`Promoción ${selectedImage + 1}`}
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-teal-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                ✨ Nueva Colección
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex space-x-2 sm:space-x-3 justify-center lg:justify-start">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all focus-visible ${
                    selectedImage === index
                      ? "border-teal-500 ring-2 ring-teal-200"
                      : "border-gray-200 hover:border-teal-300"
                  }`}
                  aria-label={`Ver imagen ${index + 1}`}
                >
                  <Image
                    src={image}
                    alt={`Miniatura ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info - Mobile First */}
          <div className="order-2 space-y-6 sm:space-y-8">
            <div>
              <div className="flex items-center space-x-2 text-teal-600 text-sm font-medium mb-2">
                <span>🔥 Nueva Temporada 2025</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                Colección
                <span className="block text-teal-600">Oceánica 2025</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Sumérgete en la magia del océano con esta línea exclusiva de aros artesanales, elaborados y pintados a mano en porcelana fría, con bases de acero inoxidable hipoalergénico.
                Cada diseño representa una especie marina con ternura y detalle: 🐳Ballenas, 🐬delfines, 🦀cangrejos, 🦈tiburones… y mucho más.
                Descubre piezas únicas para mujeres que aman lo natural, lo auténtico y lo especial.
              </p>
            </div>

            {/* Features - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center space-x-3 p-3 sm:p-4 bg-white rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 text-lg">✋</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Hecho a Mano</p>
                  <p className="text-xs sm:text-sm text-gray-600">Porcelana fría</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 sm:p-4 bg-white rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 text-lg">🔧</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Acero Inoxidable</p>
                  <p className="text-xs sm:text-sm text-gray-600">Base resistente</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 sm:space-y-4">
              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 focus-visible"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-..." />
                </svg>
                <span className="text-sm sm:text-base">Comprar por WhatsApp</span>
              </button>

              <button
                onClick={scrollToCatalog}
                className="w-full border-2 border-teal-500 text-teal-600 hover:bg-teal-50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span>Ver Más Productos del Catálogo</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
