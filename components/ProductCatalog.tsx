"use client"
import { useState } from "react"
import Image from "next/image"

interface ProductVariant {
  color: string
  image: string
}

interface Product {
  id: number
  name: string
  description: string
  variants: ProductVariant[] // Cambiar de 'images' a 'variants'
  category: string
  whatsappMessage: string
}

const products: Product[] = [
  
  
  //Coleccion Oceanica
  {
    id: 1,
    name: "Aros de Orca",
    description: "Aros de Orca, elaborados en porcelana fría, con base de acero inoxidable.",
    variants: [
      { color: "Negro", image: "images/img (8).webp" },

    ],
    category: "Colección Oceánica",
    whatsappMessage: "Me interesan los aros de Orca 🐋",
  },

  {
    id: 2,
    name: "Aros de Tiburón Ballena Colgantes",
    description: "Tiburón Ballena Colgante, elaborados en porcelana fría, con base de acero inoxidable.",
    variants: [
      { color: "Azul", image: "images/img (36).webp" },
  
    ],
    category: "Colección Oceánica",
    whatsappMessage: "Me interesan los aros de Tiburón Ballena Colgantes 🐳",
  },

  {
    id: 3,
    name: "Aros de Tiburón Ballena Topito",
    description: "Tiburón Ballena Topito, elaborados en porcelana fría, con base de acero inoxidable.",
    variants: [
      { color: "Azul", image: "images/img (35).webp" },
    ],
    category: "Colección Oceánica",
    whatsappMessage: "Me interesan los aros de Tiburón Ballena version Topitos 🐳",
  },


  {
    id: 4,
    name: "Aros de Caballito de Mar",
    description: "Aros de Caballito de Mar, elaborados en porcelana fría, con base de acero inoxidable.",
    variants: [
      { color: "Personalizado", image: "images/img (1).webp" },
      { color: "Azul", image: "images/img (3).webp" },
      { color: "Coral", image: "images/img (46).webp" },
      { color: "Naranja", image: "images/img (63).webp" },
      { color: "Morado", image: "images/img (5).webp" },
    ],
    category: "Colección Oceánica",
    whatsappMessage: "Me interesan los aros de Caballito de Mar 🐴",
  },

  {
    id: 5,
    name: "Aros de Ballena Azul",
    description: "Aros de Ballena Azul, elaborados en porcelana fría, con base de acero inoxidable.",
    variants: [
      { color: "Azul", image: "images/img (6).webp" },
      
    ],
    category: "Colección Oceánica",
    whatsappMessage: "Me interesan los aros de Ballena Azul 🐋",
  },

  {
    id: 6,
    name: "Aros de Medusas",
    description: "Aros de Medusas, elaborados en porcelana fría, con base de acero inoxidable.",
    variants: [
      { color: "Morado", image: "images/img (15).webp" },
      { color: "Azul", image: "images/img (17).webp" },
      
    ],
    category: "Colección Oceánica",
    whatsappMessage: "Me interesan los aros de Medusas 🪼",
  },


  {
    id: 7,
    name: "Aros de Cangrejo Colgante",
    description: "Aros de Cangrejo Colgante, elaborados en porcelana fría, con base de acero inoxidable.",
    variants: [
      { color: "Naranja", image: "images/img (66).webp" },
        ],
    category: "Colección Oceánica",
    whatsappMessage: "Me interesan los aros de Cangrejo Colgantes 🦀",
  },

  {
    id: 8,
    name: "Aros de Cangrejo Topito",
    description: "Aros de Cangrejo Topito, elaborados en porcelana fría, con base de acero inoxidable.",
    variants: [
      
      { color: "Naranja", image: "images/img (50).webp" },
      
        ],
    category: "Colección Oceánica",
    whatsappMessage: "Me interesan los aros de Estrella de Mar ⭐",
  },
  
  
  {
    id: 9,
    name: "Aros de Delfin",
    description: "Aros de Delfin, elaborados en porcelana fría, con base de acero inoxidable.",
    variants: [
      { color: "Azul", image: "images/img (32).webp" },
        ],
    category: "Colección Oceánica",
    whatsappMessage: "Me interesan los aros de Delfin 🐬",
  },
  
  {
    id: 10,
    name: "Aros de Nemo",
    description: "Aros de Nemo, elaborados en porcelana fría, con base de acero inoxidable.",
    variants: [
      { color: "Rojo", image: "images/img (11).webp" },
        ],
    category: "Colección Oceánica",
    whatsappMessage: "Me interesan los aros de Nemo 🐠",
  },

  {
    id: 11,
    name: "Aros de Estrella de Mar",
    description: "Aros de Estrella de Mar, elaborados en porcelana fría, con base de acero inoxidable.",
    variants: [
      { color: "Personalizado", image: "images/img (20).webp" },
      { color: "Naranja", image: "images/img (21).webp" },
      { color: "Coral", image: "images/img (22).webp" },
        ],
    category: "Colección Oceánica",
    whatsappMessage: "Me interesan los aros de Estrella de Mar ⭐",
  },

  {
    id: 12,
    name: "Aros de Foca",
    description: "Aros de foca, elaborados en porcelana fría, con base de acero inoxidable.",
    variants: [
      { color: "Gris", image: "images/img (30).webp" },
        ],
    category: "Colección Oceánica",
    whatsappMessage: "Me interesan los aros de Foca 🦭",
  },

  {
    id: 13,
    name: "Aros de Estrella y Concha",
    description: "Composición Marina Estrella y Concha, en porcelana fría, con base de acero inoxidable.",
    variants: [
      { color: "Naranja", image: "images/img (43).webp" },
        ],
    category: "Colección Oceánica",
    whatsappMessage: "Me interesan los aros de Estrella y Concha ⭐🐚",
  },

  {
    id: 14,
    name: "Topitos de Conchas",
    description: "Mini Conchitas, Ideal para el dia a dia, en porcelana fría, con base de acero inoxidable.",
    variants: [
      { color: "Coral", image: "images/img (56).webp" },
        ],
    category: "Colección Oceánica",
    whatsappMessage: "Me interesan los topitos de Conchas 🐚",
  },

  //Coleccion Floral
  {
    id: 15,
    name: "Topitos de Mini Flores",
    description: "Mini Flores para combinar, elaborados en porcelana fría, con base de acero inoxidable.",
    variants: [
      { color: "Personalizado", image: "images/img (44).webp" },
      { color: "Morado", image: "images/img (58).webp" },
      { color: "Morado", image: "images/img (57).webp" },
      { color: "Rojo", image: "images/img (55).webp" },
        ],
    category: "Colección Floral",
    whatsappMessage: "Me interesan los topitos de mini flores 🌸",
  },

  {
    id: 16,
    name: "Aros Zafira",
    description: "Aros Zafira, elaborados en porcelana fría, con base de acero inoxidable.",
    variants: [
      
      { color: "Rojo", image: "images/img (47).webp" },
        ],
    category: "Colección Floral",
    whatsappMessage: "Me interesan los topitos de Zafira 🌺",
  },


  {
    id: 17,
    name: "Aros Melany",
    description: "Base redonda con pequeñas flores en tonos suaves, estilo elegante y delicado.",
    variants: [
      
      { color: "Coral", image: "images/img (39).webp" },
        ],
    category: "Colección Floral",
    whatsappMessage: "Me interesan los aros Melany 🌼",
  },

  {
    id: 18,
    name: "Aros de Flor de Margarita",
    description: "Inspirados en Margaritas frescas, en porcelana fría, con base de acero inoxidable.",
    variants: [
      
      { color: "Blanco", image: "images/img (18).webp" },
        ],
    category: "Colección Floral",
    whatsappMessage: "Me interesan los aros de flor Margarita 🌼",
  },

  {
    id: 19,
    name: "Aros de Flor de Pensamientos",
    description: "Inspirados en la Flor Pensamientos, en porcelana fría, con base de acero inoxidable.",
    variants: [
      
      { color: "Morado", image: "images/img (28).webp" },
        ],
    category: "Colección Floral",
    whatsappMessage: "Me interesan los aros de flor Pensamientos 🌺",
  },

  {
    id: 20,
    name: "Topitos Liora",
    description: "Aros Liora, en porcelana fría, con base de acero inoxidable.",
    variants: [
      
      { color: "Rojo", image: "images/img (67).webp" },
        ],
    category: "Colección Floral",
    whatsappMessage: "Me interesan los topitos Liora 🌸",
  },

  {
    id: 21,
    name: "Topitos de Girasol",
    description: "Topitos florales de Girasol, elaborados en porcelana fría, con base de acero inoxidable.",
    variants: [
      
      { color: "Amarillo", image: "images/img (60).webp" },
        ],
    category: "Colección Floral",
    whatsappMessage: "Me interesan los topitos de flor de Girasol 🌻",
  },

  {
    id: 22,
    name: "Aros de Monstera",
    description: "Aros de inspiracion tropical en forma de hoja Monstera, en su version clasica o variegada.",
    variants: [
      
      { color: "Verde", image: "images/img (23).webp" },
       { color: "Verde", image: "images/img (26).webp" },
       { color: "Verde", image: "images/img (25).webp" },
        ],
    category: "Colección Floral",
    whatsappMessage: "Me interesan los aros de hoja Monstera 🍃",
  },

  {
    id: 23,
    name: "Aros de Girasol Colgante",
    description: "Aros florales de Girasol, elaborados en porcelana fría, con base de acero inoxidable.",
    variants: [
      
      { color: "Amarillo", image: "images/img (13).webp" },
        ],
    category: "Colección Floral",
    whatsappMessage: "Me interesan los aros de flor de Girasol colgantes 🌻",
  },

  {
    id: 24,
    name: "Topitos Flor de Margarita",
    description: "Topitos florales inspirados en Margaritas frescas en version topitos.",
    variants: [
      
      { color: "Blanco", image: "images/img (18).webp" },
        ],
    category: "Colección Floral",
    whatsappMessage: "Me interesan los topitos de flor Margarita 🌼",
  },

  {
    id: 25,
    name: "Topitos Floriolis",
    description: "Topitos llamativos con una gran flor central, en porcelana fría, con base de acero inoxidable.",
    variants: [
      
      { color: "Naranja", image: "images/img (41).webp" },
        ],
    category: "Colección Floral",
    whatsappMessage: "Me interesan los topitos modelo Floriolis 🏵️",
  },

  //Coleccion Pet Lovers
  
  {
    id: 26,
    name: "Huellitas Pet Lovers",
    description: "Simpática mini huellita en topito para amantes de los animales.",
    variants: [
      
      { color: "Personalizado", image: "images/img (62).webp" },
        ],
    category: "Colección Pet Lovers",
    whatsappMessage: "Me interesan las Huellitas Pet Lovers 🐾",
  },

]



export default function ProductCatalog() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos")

  const categories = ["Todos", ...Array.from(new Set(products.map((p) => p.category)))]

  const filteredProducts =
    selectedCategory === "Todos" ? products : products.filter((p) => p.category === selectedCategory)

  const handleWhatsAppOrder = (product: Product, selectedColor?: string) => {
    const colorText = selectedColor ? ` en color ${selectedColor}` : ""
    const message = encodeURIComponent(
      `¡Hola! ${product.whatsappMessage}${colorText}\n\n¿Podrías darme más información sobre disponibilidad y precios?`,
    )
    window.open(`https://wa.me/56949473122?text=${message}`, "_blank")
  }

  // Componente Carousel para las tarjetas de productos
  const Carousel = ({ variants, alt, productId }: { variants: ProductVariant[]; alt: string; productId: number }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? variants.length - 1 : prevIndex - 1))
    }

    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === variants.length - 1 ? 0 : prevIndex + 1))
    }

    // Función para cambiar imagen por color
    const selectByColor = (index: number) => {
      setCurrentIndex(index)
    }

    if (variants.length <= 1) {
      return (
        <div className="relative w-full h-full">
          <Image
            src={variants[0]?.image || "/placeholder.svg"}
            alt={alt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )
    }

    return (
      <div className="relative w-full h-full">
        <Image
          src={variants[currentIndex]?.image || "/placeholder.svg"}
          alt={`${alt} - ${variants[currentIndex]?.color}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Botones de navegación */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          aria-label="Imagen anterior"
        >
          ←
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          aria-label="Siguiente imagen"
        >
          →
        </button>

        {/* Selectores de color - NUEVA FUNCIONALIDAD */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {variants.map((variant, index) => (
            <button
              key={index}
              onClick={() => selectByColor(index)}
              className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                index === currentIndex
                  ? "border-white scale-110 shadow-lg"
                  : "border-white/70 hover:border-white hover:scale-105"
              }`}
              style={{ backgroundColor: getColorHex(variant.color) }}
              aria-label={`Ver en color ${variant.color}`}
              title={variant.color}
            />
          ))}
        </div>
      </div>
    )
  }

  // Componente Carousel específico para el Modal
  const ModalCarousel = ({ variants, alt }: { variants: ProductVariant[]; alt: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? variants.length - 1 : prevIndex - 1))
    }

    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === variants.length - 1 ? 0 : prevIndex + 1))
    }

    // Función para cambiar imagen por color en el modal
    const selectByColor = (index: number) => {
      setCurrentIndex(index)
    }

    if (variants.length <= 1) {
      return (
        <Image
          src={variants[0]?.image || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      )
    }

    return (
      <div className="relative w-full h-full group">
        <Image
          src={variants[currentIndex]?.image || "/placeholder.svg"}
          alt={`${alt} - ${variants[currentIndex]?.color}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Botones de navegación */}
        <button
          onClick={goToPrevious}
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10 text-lg sm:text-xl"
          aria-label="Imagen anterior"
        >
          ←
        </button>

        <button
          onClick={goToNext}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 z-10 text-lg sm:text-xl"
          aria-label="Siguiente imagen"
        >
          →
        </button>

        {/* Selectores de color grandes para el modal */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {variants.map((variant, index) => (
            <button
              key={index}
              onClick={() => selectByColor(index)}
              className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-3 transition-all duration-300 ${
                index === currentIndex
                  ? "border-white scale-110 shadow-xl"
                  : "border-white/70 hover:border-white hover:scale-105"
              }`}
              style={{ backgroundColor: getColorHex(variant.color) }}
              aria-label={`Ver en color ${variant.color}`}
              title={variant.color}
            />
          ))}
        </div>

        {/* Contador de imágenes con nombre del color */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-black/60 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
          {variants[currentIndex]?.color} ({currentIndex + 1}/{variants.length})
        </div>
      </div>
    )
  }

  return (
    <section id="productos" className="py-10 bg-white ">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Descubre
            <span className="block text-teal-600">Nuestros Productos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Descubre nuestra colección completa de accesorios. <br/>👉🏻¿Quieres <strong>personalizar</strong> algun modelo? No hay problema! Solo escribeme💗
          </p>
          <a
                href="https://wa.me/56949473122?text=¡Hola! Me interesa personalizar un modelo de accesorio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors w-fit focus-visible"
              ><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
                </svg>
                <span>WhatsApp</span>
              </a>
        </div>

        

        {/* Category Filter - Carrusel con flechas suaves */}
<div className="mt-2 mb-12 relative">
  <h2 className="text-center text-lg sm:text-xl font-semibold mb-4 text-gray-800">
    Selecciona una categoría
  </h2>

  {/* Flecha izquierda */}
  <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10 sm:hidden pointer-events-none">
    <svg
      className="w-5 h-5 text-teal-500 opacity-60 animate-pulse"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </div>

  {/* Flecha derecha */}
  <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10 sm:hidden pointer-events-none">
    <svg
      className="w-5 h-5 text-teal-500 opacity-60 animate-pulse"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </div>

  <div className="overflow-x-auto scrollbar-hide px-4">
    <div className="flex w-max space-x-3 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`whitespace-nowrap px-6 py-3 rounded-full font-medium transition-all ${
            selectedCategory === category
              ? "bg-teal-500 text-white shadow-lg"
              : "bg-gray-100 text-gray-700 hover:bg-teal-50 hover:text-teal-600"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  </div>
</div>



        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative aspect-square overflow-hidden">
                <Carousel variants={product.variants} alt={product.name} productId={product.id} />
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 focus-visible"
                  aria-label={`Ver detalles de ${product.name}`}
                >
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-full text-gray-900 font-medium text-sm">
                    Ver Detalles
                  </div>
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-teal-600 font-medium">{product.category}</span>
                  <div className="flex space-x-1">
                    {product.variants.slice(0, 3).map((variant, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: getColorHex(variant.color) }}
                        title={variant.color}
                      />
                    ))}
                    {product.variants.length > 3 && (
                      <div className="w-4 h-4 rounded-full border-2 border-white shadow-sm bg-gray-300 flex items-center justify-center">
                        <span className="text-xs text-gray-600">+{product.variants.length - 3}</span>
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <button
                  onClick={() => handleWhatsAppOrder(product)}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
                  </svg>
                  <span>Consultar</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Product Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 bg-white/90 hover:bg-white text-gray-900 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors shadow-lg"
                  aria-label="Cerrar modal"
                >
                  ✕
                </button>

                <div className="aspect-square sm:aspect-[4/3] relative">
                  <ModalCarousel variants={selectedProduct.variants} alt={selectedProduct.name} />
                </div>
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
                  <span className="text-teal-600 font-medium text-sm sm:text-base">{selectedProduct.category}</span>
                  <div className="flex space-x-2">
                    {selectedProduct.variants.map((variant, index) => (
                      <div
                        key={index}
                        className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: getColorHex(variant.color) }}
                        title={variant.color}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{selectedProduct.name}</h3>
                <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">{selectedProduct.description}</p>

                <div className="space-y-4">
                  <div className="bg-teal-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">🎨 Colores Disponibles:</h4>
                    <p className="text-gray-600">{selectedProduct.variants.map((v) => v.color).join(", ")}</p>
                  </div>

                  <button
                    onClick={() => handleWhatsAppOrder(selectedProduct)}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 focus-visible"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
                    </svg>
                    <span>Consultar por WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function getColorHex(colorName: string): string {
  const colorMap: { [key: string]: string } = {
    Morado: "#9333ea",
    Rosa: "#ec4899",
    Azul: "#3b82f6",
    Negro: "#1f2937",
    Gris: "#6b7280",
    "Azul marino": "#1e40af",
    Verde: "#00ff40ff",
    Turquesa: "#06b6d4",
    Celeste: "#7dd3fc",
    Coral: "#fb7185",
    Dorado: "#f59e0b",
    Naranja: "#f97316",
    Amarillo: "#eab308",
    Rojo: "#ef4444",
    Perla: "#f8fcf9ff",
    Blanco: "#d6d1d1ff",
    Beige: "#d6d3d1",
    "Blanco y Negro": "#6b7280",
  }
  return colorMap[colorName] || "#6b7280"
}
