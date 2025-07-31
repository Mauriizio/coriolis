"use client"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      className="
        relative w-full h-screen
        flex flex-col items-center justify-between
        bg-white
        bg-[url('/images/bgHero.webp')]
        bg-no-repeat bg-top sm:bg-center bg-cover
        px-4 py-8
      "
    >
      {/* Logo en la parte superior (más grande) */}
      <div className="mt-12">
        <Image
          src="/images/coriolis.webp"
          alt="Coriolis Accesorios"
          width={400}
          height={400}
          priority
          fetchPriority="high"
          sizes="(max-width:768px)100vw,380px"
          className="object-contain"
          
        />
      </div>

      {/* Botones en la parte inferior */}
      <div className="mb-16 flex flex-col sm:flex-row gap-6">
        <Link
          href="#productos"
          className="px-10 py-4 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-500 transition"
        >
          Ver Productos
        </Link>
        <Link
          href="#nosotros"
          className="px-10 py-4 mb-4 border-2 border-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition"
        >
          Nuestra Historia
        </Link>
      </div>
    </section>
  )
}
