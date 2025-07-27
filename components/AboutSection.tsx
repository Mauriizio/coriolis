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
              {/* Inspiración Marina */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">🌊</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Inspiración Marina</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Diseños basados en la vida oceánica</p>
                </div>
              </div>
              {/* Hecho a Mano */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">✋</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Hecho a Mano</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Cada pieza es única y especial</p>
                </div>
              </div>
              {/* Base Científica */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">🔬</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Base Científica</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Conocimiento de biología marina</p>
                </div>
              </div>
              {/* Personalizable */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-xl flex items-center justify-center">
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
                className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:shadow-lg transition-all"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 ..."/>
                </svg>
                <span className="text-sm sm:text-base">@coriolisaccesorios</span>
              </a>
            </div>
          </div>

          {/* Image - Reducida al 50% */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative w-1/2 aspect-square bg-gradient-to-br from-teal-100 to-cyan-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
              <Image
                src="/images/logo.png"
                alt="Artesana trabajando en accesorios marinos"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-teal-500 rounded-full opacity-20 animate-pulse hidden sm:block"></div>
            <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-20 h-20 sm:w-32 sm:h-32 bg-cyan-400 rounded-full opacity-15 animate-pulse delay-1000 hidden sm:block"></div>
          </div>

        </div>
      </div>
    </section>
  )
}
