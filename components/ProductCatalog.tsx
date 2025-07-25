"use client"
import { useState } from "react"
import Image from "next/image"

interface Product {
  id: number
  name: string
  description: string
  image: string
  category: string
  colors: string[]
  whatsappMessage: string
}

const products: Product[] = [
  {
    id: 1,
    name: "Aretes de Medusas Moradas",
    description: "Aros colgantes con mucho movimiento, elaborados en porcelana fría",
    image: "/placeholder.svg?height=400&width=400&text=Medusas+Moradas",
    category: "Medusas",
    colors: ["Morado", "Rosa", "Azul"],
    whatsappMessage: "Me interesan los aretes de Medusas Moradas 🪼💜",
  },
  {
    id: 2,
    name: "Aretes de Pulpo Negro",
    description: "Diseño elegante de pulpo en color negro mate",
    image: "/placeholder.svg?height=400&width=400&text=Pulpo+Negro",
    category: "Pulpos",
    colors: ["Negro", "Gris", "Azul marino"],
    whatsappMessage: "Me interesan los aretes de Pulpo Negro 🐙",
  },
  {
    id: 3,
    name: "Aretes de Delfines Azules",
    description: "Hermosos delfines saltando en tonos azules del océano",
    image: "/placeholder.svg?height=400&width=400&text=Delfines+Azules",
    category: "Delfines",
    colors: ["Azul", "Turquesa", "Celeste"],
    whatsappMessage: "Me interesan los aretes de Delfines Azules 🐬💙",
  },
  {
    id: 4,
    name: "Aretes de Caballitos de Mar",
    description: "Delicados caballitos de mar en colores vibrantes",
    image: "/placeholder.svg?height=400&width=400&text=Caballitos+Mar",
    category: "Caballitos de Mar",
    colors: ["Rosa", "Coral", "Dorado"],
    whatsappMessage: "Me interesan los aretes de Caballitos de Mar 🌊",
  },
  {
    id: 5,
    name: "Aretes de Estrellas de Mar",
    description: "Estrellas marinas con textura realista y acabado brillante",
    image: "/placeholder.svg?height=400&width=400&text=Estrellas+Mar",
    category: "Estrellas de Mar",
    colors: ["Naranja", "Amarillo", "Rojo"],
    whatsappMessage: "Me interesan los aretes de Estrellas de Mar ⭐",
  },
  {
    id: 6,
    name: "Aretes de Conchas Marinas",
    description: "Elegantes conchas con detalles naturales y perlados",
    image: "/placeholder.svg?height=400&width=400&text=Conchas+Marinas",
    category: "Conchas",
    colors: ["Perla", "Blanco", "Beige"],
    whatsappMessage: "Me interesan los aretes de Conchas Marinas 🐚",
  },
]

export default function ProductCatalog() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos")

  const categories = ["Todos", ...Array.from(new Set(products.map((p) => p.category)))]

  const filteredProducts =
    selectedCategory === "Todos" ? products : products.filter((p) => p.category === selectedCategory)

  const handleWhatsAppOrder = (product: Product) => {
    const message = encodeURIComponent(
      `¡Hola! ${product.whatsappMessage}\n\n¿Podrías darme más información sobre disponibilidad y precios?`,
    )
    window.open(`https://wa.me/56949473122?text=${message}`, "_blank")
  }

  return (
    <section id="productos" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Mobile First */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Nuestro Catálogo
            <span className="block text-teal-600">Marino</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra colección completa de accesorios inspirados en la vida marina, cada pieza única y hecha con
            amor 🌊
          </p>
        </div>

        {/* Category Filter - Mobile Optimized */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-2 sm:px-6 sm:py-3 rounded-full font-medium transition-all text-sm sm:text-base focus-visible ${
                selectedCategory === category
                  ? "bg-teal-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-teal-50 hover:text-teal-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid - Mobile First */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
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

              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm text-teal-600 font-medium">{product.category}</span>
                  <div className="flex space-x-1">
                    {product.colors.slice(0, 3).map((color, index) => (
                      <div
                        key={index}
                        className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: getColorHex(color) }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">{product.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{product.description}</p>

                <button
                  onClick={() => handleWhatsAppOrder(product)}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base focus-visible"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700" />
                  </svg>
                  <span>Consultar</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Product Modal - Mobile Optimized */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-white/90 hover:bg-white text-gray-900 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors focus-visible"
                  aria-label="Cerrar modal"
                >
                  ✕
                </button>
                <div className="aspect-square relative">
                  <Image
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-teal-600 font-medium text-sm sm:text-base">{selectedProduct.category}</span>
                  <div className="flex space-x-2">
                    {selectedProduct.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: getColorHex(color) }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{selectedProduct.name}</h3>
                <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">{selectedProduct.description}</p>

                <div className="space-y-4">
                  <div className="bg-teal-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">🎨 Colores Disponibles:</h4>
                    <p className="text-gray-600">{selectedProduct.colors.join(", ")}</p>
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
    Turquesa: "#06b6d4",
    Celeste: "#7dd3fc",
    Coral: "#fb7185",
    Dorado: "#f59e0b",
    Naranja: "#f97316",
    Amarillo: "#eab308",
    Rojo: "#ef4444",
    Perla: "#f8fafc",
    Blanco: "#ffffff",
    Beige: "#d6d3d1",
  }
  return colorMap[colorName] || "#6b7280"
}
