"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login submitted:", formData)
    alert("Login successful!")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-orange-100 to-yellow-100 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 rounded-3xl overflow-hidden shadow-2xl bg-white">
          {/* Left Side - Image and Text (1/4 width on desktop) */}
          <div className="lg:col-span-1 bg-gradient-to-br from-orange-200 to-yellow-200 p-6 md:p-8 flex flex-col items-center justify-center text-center lg:order-1 order-2">
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
                Login account and enjoy to order with coffee
              </h2>

              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl blur opacity-30"></div>
                <img
                  src="/images/green-cup.png"
                  alt="Green Coffee Cup"
                  className="relative rounded-2xl shadow-lg w-full max-w-[200px] mx-auto"
                />
              </div>

              <div className="space-y-2">
                <p className="text-gray-700 font-medium">Welcome back, coffee lover!</p>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">Your favorite coffee awaits</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form (3/4 width on desktop) */}
          <div className="lg:col-span-3 bg-white p-6 md:p-8 lg:p-12 lg:order-2 order-1">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Login Account</h1>
                <p className="text-gray-600">Welcome back to our coffee community</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                    Forgot password?
                  </Link>
                </div>

                <button type="submit" className="btn-primary w-full text-lg py-4">
                  Login Account
                </button>

                <div className="text-center">
                  <p className="text-gray-600">
                    Don't have an account?{" "}
                    <Link to="/registration" className="text-purple-600 hover:text-purple-700 font-semibold">
                      Register here
                    </Link>
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center px-4 py-3 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-blue-600 mr-2 text-xl">f</span>
                    <span className="font-medium">Facebook</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center px-4 py-3 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-red-600 mr-2 text-xl">G</span>
                    <span className="font-medium">Google</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
