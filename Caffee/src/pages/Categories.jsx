"use client"

import { useCart } from "../components/CartContext"

export default function Categories() {
  const { addToCart } = useCart()

  const categories = [
    {
      id: 1,
      title: "Hot Coffee",
      description: "Premium coffee blends served hot and fresh",
      items: [
        { id: 1, name: "Premium Espresso", image: "/images/coffee-cup-1.png", price: "$4.99" },
        { id: 2, name: "Cappuccino Delight", image: "/images/coffee-cup-2.png", price: "$5.49" },
        { id: 3, name: "Latte Supreme", image: "/images/coffee-cup-3.png", price: "$5.99" },
      ],
    },
    {
      id: 2,
      title: "Cold Beverages",
      description: "Refreshing cold drinks and milkshakes",
      items: [
        { id: 4, name: "Chocolate Shake", image: "/images/milkshake-1.png", price: "$6.99" },
        { id: 5, name: "Vanilla Dream", image: "/images/milkshake-2.png", price: "$6.49" },
        { id: 6, name: "Strawberry Bliss", image: "/images/milkshake-3.png", price: "$6.79" },
      ],
    },
    {
      id: 3,
      title: "Sweet Treats",
      description: "Delicious cakes and desserts",
      items: [
        { id: 7, name: "Chocolate Cake", image: "/images/cake-1.png", price: "$4.99" },
        { id: 8, name: "Red Velvet", image: "/images/cake-2.png", price: "$5.49" },
        { id: 9, name: "Cheesecake", image: "/images/cake-3.png", price: "$5.99" },
      ],
    },
  ]

  return (
    <div className="bg-teal-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 gradient-text">Our Categories</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of premium coffee, refreshing beverages, and delightful desserts.
          </p>
        </div>

        {categories.map((category) => (
          <section key={category.id} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{category.title}</h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-green-500 rounded-full mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
                >
                  <div className="relative overflow-hidden group">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold gradient-text">Premium</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-gray-800 text-lg group-hover:text-purple-600 transition-colors duration-300">
                        {item.name}
                      </h3>
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
          </section>
        ))}

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-green-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-xl mb-8 opacity-90">
            Contact us for custom orders or special requests. We're here to make your coffee dreams come true!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
