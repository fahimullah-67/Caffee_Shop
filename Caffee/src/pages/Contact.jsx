"use client"

import { useState, useEffect, useRef } from "react"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Github,
  Linkedin,
  Instagram,
  X,
  Users,
  UserPlus,
  FileText,
  GitFork,
} from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [selectedSocial, setSelectedSocial] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
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
    console.log("Contact form submitted:", formData)
    alert("Message sent successfully!")
    setFormData({ name: "", email: "", message: "" })
  }

  const socialMediaData = {
    github: {
      platform: "GitHub",
      username: "fahimullah-67",
      followers: "1.2K",
      following: "234",
      repositories: "45",
      stars: "892",
      profileImage: "https://github.com/fahimullah-67.png",
      url: "https://github.com/fahimullah-67",
      icon: Github,
      color: "from-gray-700 to-gray-900",
      stats: [
        { label: "Repositories", value: "45", icon: FileText },
        { label: "Followers", value: "1.2K", icon: Users },
        { label: "Following", value: "234", icon: UserPlus },
        { label: "Stars", value: "892", icon: GitFork },
      ],
    },
    linkedin: {
      platform: "LinkedIn",
      username: "fahim-ullah-93157828a",
      followers: "2.5K",
      following: "1.8K",
      posts: "127",
      connections: "500+",
      profileImage: "https://avatars.githubusercontent.com/u/fahimullah-67?v=4",
      url: "https://linkedin.com/in/fahim-ullah-93157828a",
      icon: Linkedin,
      color: "from-blue-600 to-blue-800",
      stats: [
        { label: "Connections", value: "500+", icon: Users },
        { label: "Followers", value: "2.5K", icon: UserPlus },
        { label: "Posts", value: "127", icon: FileText },
        { label: "Following", value: "1.8K", icon: UserPlus },
      ],
    },
    instagram: {
      platform: "Instagram",
      username: "fahim_ullah_67",
      followers: "3.4K",
      following: "892",
      posts: "156",
      stories: "24",
      profileImage: "/placeholder.svg?height=150&width=150",
      url: "https://instagram.com/fahim_ullah_67",
      icon: Instagram,
      color: "from-pink-500 to-purple-600",
      stats: [
        { label: "Posts", value: "156", icon: FileText },
        { label: "Followers", value: "3.4K", icon: Users },
        { label: "Following", value: "892", icon: UserPlus },
        { label: "Stories", value: "24", icon: Clock },
      ],
    },
  }

  const handleSocialClick = (platform) => {
    setSelectedSocial(socialMediaData[platform])
    setIsModalOpen(true)
  }

  const developers = [
    {
      name: "Fahim Ullah",
      role: "Lead Developer",
      email: "fahimullah446@gmail.com",
      phone: "+923199036170",
      image: "https://avatars.githubusercontent.com/u/fahimullah-67?v=4",
      skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      name: "Mudassir Mushtaq",
      role: "UI/UX Designer & Developer",
      email: "mudassir@coffeeshop.com",
      phone: "+923260488617",
      image: "/placeholder.svg?height=150&width=150",
      skills: ["UI Design", "Tailwind CSS", "React", "Figma"],
    },
  ]

  return (
    <>
      <div className="bg-gradient-to-br from-teal-50 to-green-50 min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-16 scroll-animate opacity-0 translate-y-10">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you! Get in touch with our team or reach out to our developers directly.
            </p>
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
            {/* Contact Information */}
            <div className="xl:col-span-1 space-y-6 scroll-animate opacity-0 translate-y-10">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-green-500 rounded-full mr-3"></div>
                  Get In Touch
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Address",
                      content: "123 Coffee Street\nBean City, BC 12345",
                      color: "from-purple-50 to-green-50",
                      iconBg: "bg-purple-100",
                      iconColor: "text-purple-600",
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      content: "(555) 123-BREW",
                      color: "from-green-50 to-blue-50",
                      iconBg: "bg-green-100",
                      iconColor: "text-green-600",
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      content: "hello@coffeeshop.com",
                      color: "from-blue-50 to-purple-50",
                      iconBg: "bg-blue-100",
                      iconColor: "text-blue-600",
                    },
                    {
                      icon: Clock,
                      title: "Hours",
                      content: "Monday - Friday: 6:00 AM - 8:00 PM\nSaturday - Sunday: 7:00 AM - 9:00 PM",
                      color: "from-orange-50 to-red-50",
                      iconBg: "bg-orange-100",
                      iconColor: "text-orange-600",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-4 p-4 bg-gradient-to-r ${item.color} rounded-xl hover:from-purple-100 hover:to-green-100 transition-all duration-300 scroll-animate opacity-0 translate-y-10`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className={`${item.iconBg} p-3 rounded-full`}>
                        <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                        <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="xl:col-span-2 scroll-animate opacity-0 translate-y-10">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                  <Send className="h-8 w-8 text-purple-600 mr-3" />
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="input-field resize-none"
                      placeholder="Tell us how we can help you..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full text-lg py-4 flex items-center justify-center space-x-3"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Developer Team Section */}
          <div className="mb-16 scroll-animate opacity-0 translate-y-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">
                Meet Our Development Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get in touch with our talented developers who built this amazing coffee shop experience
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {developers.map((developer, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 scroll-animate opacity-0 translate-y-10`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-green-400 rounded-full p-1">
                        <img
                          src={developer.image || "/placeholder.svg"}
                          alt={developer.name}
                          className="w-full h-full rounded-full object-cover bg-white"
                        />
                      </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{developer.name}</h3>
                      <p className="text-purple-600 font-semibold mb-4 text-lg">{developer.role}</p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-center md:justify-start space-x-2">
                          <Mail className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-600 text-sm">{developer.email}</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start space-x-2">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <span className="text-gray-600 text-sm">{developer.phone}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                        {developer.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-gradient-to-r from-purple-100 to-green-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium border border-purple-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-center md:justify-start space-x-4">
                        <button
                          onClick={() => handleSocialClick("github")}
                          className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                        >
                          <Github className="h-5 w-5 text-gray-600" />
                        </button>
                        <button
                          onClick={() => handleSocialClick("linkedin")}
                          className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                        >
                          <Linkedin className="h-5 w-5 text-blue-600" />
                        </button>
                        <button
                          onClick={() => handleSocialClick("instagram")}
                          className="bg-pink-100 hover:bg-pink-200 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                        >
                          <Instagram className="h-5 w-5 text-pink-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-green-600 rounded-2xl p-12 text-white scroll-animate opacity-0 translate-y-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Coffee Journey?</h3>
            <p className="text-xl mb-8 opacity-90">Contact us today and let's create something amazing together!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                Order Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Modal */}
      {isModalOpen && selectedSocial && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selectedSocial.color} p-6 rounded-t-3xl text-white relative`}>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-all duration-300"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full p-3">
                  <selectedSocial.icon className="h-full w-full text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{selectedSocial.platform}</h3>
                  <p className="text-white/90">@{selectedSocial.username}</p>
                </div>
              </div>
            </div>

            {/* Profile Section */}
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-200">
                  <img
                    src={selectedSocial.profileImage || "/placeholder.svg"}
                    alt={`${selectedSocial.platform} Profile`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">Fahim Ullah</h4>
                  <p className="text-gray-600">Full Stack Developer</p>
                  <p className="text-sm text-gray-500">Coffee & Code Enthusiast</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {selectedSocial.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl text-center border border-gray-200"
                  >
                    <stat.icon className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={selectedSocial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-gradient-to-r ${selectedSocial.color} hover:opacity-90 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}
                >
                  <selectedSocial.icon className="h-5 w-5" />
                  <span>Visit {selectedSocial.platform}</span>
                </a>

                <button
                  onClick={() => navigator.clipboard.writeText(selectedSocial.url)}
                  className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-6 rounded-xl transition-all duration-300"
                >
                  Copy Profile Link
                </button>
              </div>

              {/* Bio Section */}
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-green-50 rounded-xl">
                <h5 className="font-semibold text-gray-800 mb-2">About</h5>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Passionate full-stack developer specializing in React, Next.js, and modern web technologies. Coffee
                  enthusiast who believes great code is like great coffee - it takes time, skill, and passion to
                  perfect.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
