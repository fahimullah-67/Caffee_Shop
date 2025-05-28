import { Link } from "react-router-dom"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Order", href: "/order" },
    { name: "Categories", href: "/categories" },
    { name: "Contact", href: "/contact" },
  ]

  const categories = [
    { name: "Hot Coffee", href: "/categories" },
    { name: "Cold Coffee", href: "/categories" },
    { name: "Milkshakes", href: "/categories" },
    { name: "Desserts", href: "/categories" },
  ]

  return (
    <footer className="bg-gradient-to-br from-red-800 via-red-700 to-orange-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-coffee-pattern opacity-10"></div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-lg">☕</span>
              </div>
              <span className="text-2xl font-bold text-white">Coffee Shop</span>
            </div>
            <p className="text-red-100 leading-relaxed">
              Premium coffee experience with the finest blends and delicious treats. Crafted with passion, served with
              love.
            </p>
            <div className="flex space-x-4">
              {["facebook", "instagram", "twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 backdrop-blur-sm"
                >
                  <span className="text-white font-bold text-sm capitalize">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-red-100 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block relative group"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative">
              Categories
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.href}
                    className="text-red-100 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block relative group"
                  >
                    <span className="relative z-10">{category.name}</span>
                    <div className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative">
              Contact
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mt-1">
                  <span className="text-white text-xs">📍</span>
                </div>
                <div className="text-red-100 text-sm leading-relaxed">
                  123 Coffee Street
                  <br />
                  City, State 12345
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">📞</span>
                </div>
                <span className="text-red-100 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">✉️</span>
                </div>
                <span className="text-red-100 text-sm">info@coffeeshop.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-600/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-red-100 text-sm">
              © 2024 Coffee Shop. All rights reserved. Made with ❤️ and lots of coffee.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-red-100 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-red-100 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-red-100 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
