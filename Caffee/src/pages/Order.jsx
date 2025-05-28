"use client"

import { Link } from "react-router-dom"
import { useCart } from "../components/CartContext"

export default function Order() {
  const { addToCart } = useCart()

  const coffeeItems = [
    { id: 1, name: "Premium Espresso", image: "/images/coffee-cup-1.png", price: "$4.99" },
    { id: 2, name: "Cappuccino Delight", image: "/images/coffee-cup-2.png", price: "$5.49" },
    { id: 3, name: "Latte Supreme", image: "/images/coffee-cup-3.png", price: "$5.99" },
    { id: 4, name: "Mocha Bliss", image: "/images/coffee-cup-1.png", price: "$6.49" },
    { id: 5, name: "Americano Classic", image: "/images/coffee-cup-2.png", price: "$3.99" },
    { id: 6, name: "Macchiato Magic", image: "/images/coffee-cup-3.png", price: "$5.79" },
  ]

  const milkshakeItems = [
    { id: 7, name: "Chocolate Shake", image: "/images/milkshake-1.png", price: "$6.99" },
    { id: 8, name: "Vanilla Dream", image: "/images/milkshake-2.png", price: "$6.49" },
    { id: 9, name: "Strawberry Bliss", image: "/images/milkshake-3.png", price: "$6.79" },
    { id: 10, name: "Caramel Swirl", image: "/images/milkshake-1.png", price: "$7.29" },
    { id: 11, name: "Oreo Crunch", image: "/images/milkshake-2.png", price: "$7.49" },
    { id: 12, name: "Peanut Butter Cup", image: "/images/milkshake-3.png", price: "$7.99" },
  ]

  const sweetItems = [
    { id: 13, name: "Chocolate Cake", image: "/images/cake-1.png", price: "$4.99" },
    { id: 14, name: "Red Velvet", image: "/images/cake-2.png", price: "$5.49" },
    { id: 15, name: "Cheesecake", image: "/images/cake-3.png", price: "$5.99" },
    { id: 16, name: "Tiramisu", image: "/images/cake-1.png", price: "$6.49" },
    { id: 17, name: "Black Forest", image: "/images/cake-2.png", price: "$6.99" },
    { id: 18, name: "Carrot Cake", image: "/images/cake-3.png", price: "$5.79" },
  ]

  return (
    <div className="bg-teal-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 gradient-text">Order Your Favorites</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of coffee, milkshakes, and sweet treats. Each item is crafted with love and
            the finest ingredients.
          </p>
        </div>

        {/* Milky Coffee Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Milky Coffee For Special</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-green-500 rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coffeeItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold gradient-text">Premium</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                    <span className="text-xl font-bold text-green-600">{item.price}</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/categories">
              <button className="btn-secondary">Like More Order Now!</button>
            </Link>
          </div>
        </section>

        {/* Top Milk Shake Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Top Milk Shake</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-green-500 rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milkshakeItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold gradient-text">Fresh</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                    <span className="text-xl font-bold text-green-600">{item.price}</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/categories">
              <button className="btn-secondary">Like More Order Now!</button>
            </Link>
          </div>
        </section>

        {/* Top Sweet Recipes Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Top Sweet Recipes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-green-500 rounded-full mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sweetItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold gradient-text">Sweet</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                    <span className="text-xl font-bold text-green-600">{item.price}</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/categories">
              <button className="btn-secondary">Like More Order Now!</button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
