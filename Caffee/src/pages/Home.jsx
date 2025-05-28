import { Link } from "react-router-dom"
import ProductSlider from "../components/ProductSlider"

export default function Home() {
  const coffeeItems = [
    { id: 1, name: "Premium Espresso", image: "/images/coffee-cup-1.png" },
    { id: 2, name: "Cappuccino Delight", image: "/images/coffee-cup-2.png" },
    { id: 3, name: "Latte Supreme", image: "/images/coffee-cup-3.png" },
    { id: 4, name: "Mocha Bliss", image: "/images/coffee-cup-1.png" },
    { id: 5, name: "Americano Classic", image: "/images/coffee-cup-2.png" },
  ]

  const milkshakeItems = [
    { id: 6, name: "Chocolate Shake", image: "/images/milkshake-1.png" },
    { id: 7, name: "Vanilla Dream", image: "/images/milkshake-2.png" },
    { id: 8, name: "Strawberry Bliss", image: "/images/milkshake-3.png" },
    { id: 9, name: "Caramel Swirl", image: "/images/milkshake-1.png" },
    { id: 10, name: "Oreo Crunch", image: "/images/milkshake-2.png" },
  ]

  const sweetItems = [
    { id: 11, name: "Chocolate Cake", image: "/images/cake-1.png" },
    { id: 12, name: "Red Velvet", image: "/images/cake-2.png" },
    { id: 13, name: "Cheesecake", image: "/images/cake-3.png" },
    { id: 14, name: "Tiramisu", image: "/images/cake-1.png" },
    { id: 15, name: "Black Forest", image: "/images/cake-2.png" },
  ]

  return (
    <div className="bg-gradient-to-br from-teal-50 via-green-50 to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-white via-gray-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-coffee-pattern opacity-5"></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 animate-fade-in text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight">
                  Special Coffee
                  <span className="block bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent text-shadow">
                    For You!
                  </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-green-500 rounded-full mx-auto lg:mx-0"></div>
              </div>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Being a coffee lover means you are part of a community that appreciates the finer things in life. Our
                carefully selected beans and expert brewing methods ensure every cup is perfect.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/order">
                  <button className="btn-secondary flex items-center justify-center space-x-2 w-full sm:w-auto">
                    <span>Order Now</span>
                    <span className="text-xl">☕</span>
                  </button>
                </Link>
                <Link to="/about">
                  <button className="border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center animate-bounce-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-green-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <img
                  src="/images/coffee-hero.png"
                  alt="Special Coffee"
                  className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 w-full max-w-md lg:max-w-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milky Coffee Slider */}
      <ProductSlider products={coffeeItems} title="Milky Coffee For Special" />

      <div className="text-center pb-8">
        <Link to="/categories">
          <button className="btn-secondary flex items-center justify-center space-x-2 mx-auto">
            <span>Like More Order Now!</span>
            <span className="text-xl">🚀</span>
          </button>
        </Link>
      </div>

      {/* Black Coffee Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-700 via-red-600 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-coffee-pattern opacity-10"></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white space-y-6 lg:space-y-8 animate-fade-in text-center lg:text-left">
              <div className="inline-block">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-2xl font-bold text-base md:text-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  Black Coffee, Bold Mood
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-shadow">Pure Energy In Every Sip</h2>

              <p className="text-lg md:text-xl text-red-100 leading-relaxed">
                Experience the bold and intense flavor of our premium black coffee. Perfect for those who appreciate the
                pure essence of coffee beans.
              </p>

              <Link to="/order">
                <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-2 mx-auto lg:mx-0">
                  <span>Order Now</span>
                  <span className="text-xl">⚡</span>
                </button>
              </Link>
            </div>

            <div className="flex justify-center animate-bounce-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
                <img
                  src="/images/black-coffee.png"
                  alt="Black Coffee"
                  className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 w-full max-w-sm lg:max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Milk Shake Slider */}
      <ProductSlider products={milkshakeItems} title="Top Milk Shake" />

      <div className="text-center pb-8">
        <Link to="/categories">
          <button className="btn-secondary flex items-center justify-center space-x-2 mx-auto">
            <span>Like More Order Now!</span>
            <span className="text-xl">🥤</span>
          </button>
        </Link>
      </div>

      {/* Sweet Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-700 via-purple-700 to-pink-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-coffee-pattern opacity-10"></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white space-y-6 lg:space-y-8 animate-fade-in text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-shadow">Most Famous Sweet In Shop</h2>

              <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Pure Sweet
              </h3>

              <p className="text-lg md:text-xl text-red-100 leading-relaxed">
                Indulge in our most popular desserts. Each sweet treat is carefully crafted to complement your coffee
                experience perfectly.
              </p>

              <Link to="/order">
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-2 mx-auto lg:mx-0">
                  <span>Order Now</span>
                  <span className="text-xl">🍰</span>
                </button>
              </Link>
            </div>

            <div className="flex justify-center animate-bounce-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>
                <img
                  src="/images/cake-1.png"
                  alt="Sweet Dessert"
                  className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 w-full max-w-sm lg:max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Sweet Recipes Slider */}
      <ProductSlider products={sweetItems} title="Top Sweet Recipes" />

      <div className="text-center pb-16">
        <Link to="/categories">
          <button className="btn-secondary flex items-center justify-center space-x-2 mx-auto">
            <span>Like More Order Now!</span>
            <span className="text-xl">🎂</span>
          </button>
        </Link>
      </div>
    </div>
  )
}
