"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"

export default function Registration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      if (observerRef.current) {
        elements.forEach((el) => observerRef.current?.unobserve(el))
      }
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!")
      return
    }
    console.log("Form submitted:", formData)
    alert("Account created successfully!")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-orange-100 to-yellow-100 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-6xl scroll-animate opacity-0 translate-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 rounded-3xl overflow-hidden shadow-2xl bg-white">
          {/* Left Side - Form (3/4 width on desktop) */}
          <div className="lg:col-span-3 bg-white p-6 md:p-8 lg:p-12">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Create Account</h1>
                <p className="text-gray-600">Join our coffee community today</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter first name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    />
                  </div>
                </div>

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
                    placeholder="Create password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                    minLength="6"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                    minLength="6"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I agree to the{" "}
                    <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button type="submit" className="btn-primary w-full text-lg py-4">
                  Create Account
                </button>

                <div className="text-center">
                  <p className="text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-purple-600 hover:text-purple-700 font-semibold">
                      Login here
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

          {/* Right Side - Image and Text (1/4 width on desktop) */}
          <div className="lg:col-span-1 bg-gradient-to-br from-orange-200 to-yellow-200 p-6 md:p-8 flex flex-col items-center justify-center text-center">
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
                Create an account and enjoy to order with coffee
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
                <p className="text-gray-700 font-medium">Join thousands of coffee lovers</p>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">Rated 4.9/5 by our customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
