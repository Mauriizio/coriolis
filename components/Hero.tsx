import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Imagen de fondo optimizada */}
      <div className="absolute inset-0">
        <Image
          src="/images/bgHero.png"
          alt="Taller de artesanías con productos hechos a mano"
          fill
          className="object-container object-center"
          priority
          quality={90}
        />
        {/* Gradient overlay mejorado */}
       
      </div>

      {/* Capa blanca semitransparente para contraste */}
      

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge superior */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm text-gray-800 text-sm font-medium">
            ✨ Artesanías Auténticas
          </div>

          {/* Título principal con animación */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            <span className="block">Bienvenidos a</span>
            <span className="block bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
              Nuestra Tiendita
            </span>
          </h1>

          {/* Descripción mejorada */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Descubre artesanías únicas hechas a mano con pasión y dedicación. Cada pieza cuenta una historia y lleva el
            alma de nuestros artesanos.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="#productos"
              className="group inline-flex items-center px-8 py-4 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Ver Productos
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="#nosotros"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              Nuestra Historia
            </Link>
          </div>

          {/* Indicadores de características */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span className="text-sm">100% Artesanal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">Materiales Naturales</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm">Envío Nacional</span>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-gray-700 hover:text-gray-900 transition-colors duration-300">
          <span className="text-sm mb-2">Descubre más</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-gray-300 rounded-full hidden lg:block"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-gray-300 rounded-full hidden lg:block"></div>
      <div className="absolute top-1/3 right-8 w-2 h-2 bg-amber-400 rounded-full hidden lg:block animate-pulse"></div>
      <div className="absolute bottom-1/4 left-20 w-2 h-2 bg-orange-400 rounded-full hidden lg:block animate-pulse delay-1000"></div>
    </section>
  )
}
