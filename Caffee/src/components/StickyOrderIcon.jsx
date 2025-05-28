"use client"

import { useState } from "react"
import { ShoppingCart, Coffee, X } from "lucide-react"
import { Link } from "react-router-dom"
import { useCart } from "./CartContext"

export default function StickyOrderIcon() {
  const [isExpanded, setIsExpanded] = useState(false)
  const { cartItems } = useCart()

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Main Order Button */}
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-16 h-16 bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 animate-bounce"
        >
          {isExpanded ? <X className="h-8 w-8" /> : <Coffee className="h-8 w-8" />}
        </button>

        {/* Cart Badge */}
        {totalItems > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-pulse">
            {totalItems}
          </div>
        )}
      </div>

      {/* Expanded Menu */}
      {isExpanded && (
        <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-4 min-w-[200px] border border-gray-200">
          <div className="space-y-3">
            <Link to="/order">
              <button
                onClick={() => setIsExpanded(false)}
                className="w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Coffee className="h-5 w-5" />
                <span>Order Now</span>
              </button>
            </Link>

            <Link to="/categories">
              <button
                onClick={() => setIsExpanded(false)}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Browse Menu</span>
              </button>
            </Link>

            {totalItems > 0 && (
              <div className="text-center p-2 bg-gradient-to-r from-purple-50 to-green-50 rounded-xl">
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-purple-600">{totalItems}</span> items in cart
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
