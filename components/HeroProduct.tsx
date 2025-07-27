"use client"
import { useState } from "react"
import Image from "next/image"

export default function HeroProduct() {
  const [selectedImage, setSelectedImage] = useState(0)

  const productImages = [
    "/images/promo1.png",
    "/images/promo2.png",
    "/images/promo1.png",
  ]

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      "¡Hola! Me interesan los aretes de La Coleccion Oceánica 2025 \n\n¿Podrías darme más información sobre disponibilidad y colores?",
    )
    window.open(`https://wa.me/56949473122?text=${message}`, "_blank")
  }

  return (
    <section className="pt-16 sm:pt-20 pb-8 sm:pb-16 ocean-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Product Images - Mobile First */}
          <div className="order-1 lg:order-1 space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden">
              <Image
                src={productImages[selectedImage] || "/images/logo.png"}
                alt="Aretes de Medusas Moradas - Coriolis Accesorios"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-teal-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                ✨ Producto Destacado
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
                    src={image || "/placeholder.svg"}
                    alt={`Vista ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info - Mobile First */}
          <div className="order-2 lg:order-2 space-y-6 sm:space-y-8">
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
                
                Cada diseño representa una especie marina con ternura y detalle, celebrando la belleza del mar y el arte hecho con amor.

               🐳Ballenas,🐬 delfines, 🦀cangrejos,🦈tiburones, y mucho más...

              Descubre piezas únicas para mujeres que aman lo natural, lo auténtico y lo especial.

              </p>
            </div>

            {/* Features - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center space-x-3 p-3 sm:p-4 bg-white rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-600 text-lg">✋</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Hecho a Mano</p>
                  <p className="text-xs sm:text-sm text-gray-600">Porcelana fría</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 sm:p-4 bg-white rounded-xl shadow-sm">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-teal-600 text-lg">🔧</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">Acero Inoxidable</p>
                  <p className="text-xs sm:text-sm text-gray-600">Base resistente</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Mobile First */}
            <div className="space-y-3 sm:space-y-4">
              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 focus-visible"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
                </svg>
                <span className="text-sm sm:text-base">Comprar por WhatsApp</span>
              </button>

              <button className="w-full border-2 border-teal-500 text-teal-600 hover:bg-teal-50 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 text-sm sm:text-base focus-visible">
                Ver Más Productos del Catálogo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
