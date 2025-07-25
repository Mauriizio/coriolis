import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-12 sm:py-16 lg:py-20 ocean-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content - Mobile First */}
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Sobre
                <span className="block text-teal-600">Coriolis Accesorios</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-6">
                Soy bióloga marina apasionada por el océano y sus criaturas. Cada accesorio que creo está inspirado en
                la belleza y diversidad de la vida marina.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Trabajo con porcelana fría y materiales de alta calidad para crear piezas únicas que capturen la esencia
                del mar. Cada diseño es pintado a mano con amor y dedicación, desde Santiago de Chile 🇨🇱
              </p>
            </div>

            {/* Features - Mobile Optimized Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">🌊</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Inspiración Marina</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Diseños basados en la vida oceánica</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">✋</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Hecho a Mano</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Cada pieza es única y especial</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">🔬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Base Científica</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Conocimiento de biología marina</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl sm:text-2xl">🎨</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Personalizable</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Colores y diseños a tu gusto</p>
                </div>
              </div>
            </div>

            {/* Social Links - Mobile Optimized */}
            <div className="flex justify-center sm:justify-start">
              <a
                href="https://instagram.com/coriolisaccesorios"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:shadow-lg transition-all focus-visible"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="text-sm sm:text-base">@coriolisaccesorios</span>
              </a>
            </div>
          </div>

          {/* Image - Mobile First */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square bg-gradient-to-br from-teal-100 to-cyan-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=600&text=Artesana+Trabajando"
                alt="Artesana trabajando en accesorios marinos"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating Elements - Hidden on mobile for cleaner look */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-teal-500 rounded-full opacity-20 animate-pulse hidden sm:block"></div>
            <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-20 h-20 sm:w-32 sm:h-32 bg-cyan-400 rounded-full opacity-15 animate-pulse delay-1000 hidden sm:block"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
