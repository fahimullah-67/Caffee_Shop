"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { useCart } from "./CartContext"

export default function ProductSlider({ products, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { addToCart } = useCart()

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  // For mobile: show 1 item, for tablet: show 2 items, for desktop: show 3 items
  const getVisibleProducts = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768
    const isTablet = typeof window !== "undefined" && window.innerWidth < 1024

    if (isMobile) {
      return [products[currentIndex]]
    } else if (isTablet) {
      return products
        .slice(currentIndex, currentIndex + 2)
        .concat(products.slice(0, Math.max(0, currentIndex + 2 - products.length)))
    } else {
      return products
        .slice(currentIndex, currentIndex + 3)
        .concat(products.slice(0, Math.max(0, currentIndex + 3 - products.length)))
    }
  }

  const visibleProducts = getVisibleProducts()

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-teal-50 via-green-50 to-blue-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-green-500 rounded-full mx-auto"></div>
        </div>

        <div className="relative">
          {/* Navigation Buttons - Only show if more than 1 item on mobile or more than 3 on desktop */}
          {products.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-green-500 shadow-xl rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-green-500 shadow-xl rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </button>
            </>
          )}

          {/* Products Grid - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-8">
            {visibleProducts.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 overflow-hidden group w-full max-w-sm mx-auto"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">
                      Premium
                    </span>
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white font-semibold py-2.5 md:py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-sm md:text-base"
                  >
                    <Plus className="h-4 w-4 md:h-5 md:w-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-purple-500 to-green-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
