"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        elements.forEach((el) => observerRef.current?.unobserve(el));
      }
    };
  }, []);

  const developers = [
    {
      name: "Fahim Ullah",
      role: "Lead Developer & Coffee Enthusiast",
      image:
        "https://avatars.githubusercontent.com/u/179002904?s=400&u=3cf22803165ac0c1b176c298e7b0698ecdc21e8b&v=4",
      description:
        "Passionate about creating amazing user experiences and brewing the perfect cup of coffee. With expertise in modern web technologies, I bring ideas to life through clean, efficient code.",
      skills: ["React", "Next.js", "TypeScript", "Coffee Brewing"],
      experience: "5+ Years",
      projects: "50+ Projects",
    },
    {
      name: "Mudassir Mushtaq",
      role: "UI/UX Designer & Barista",
      image: "/placeholder.svg?height=200&width=200",
      description:
        "Combines design expertise with hands-on coffee knowledge to create intuitive interfaces. I believe great design is like great coffee - it should be both beautiful and functional.",
      skills: ["UI Design", "UX Research", "Figma", "Latte Art"],
      experience: "4+ Years",
      projects: "40+ Projects",
    },
  ];

  return (
    <div className="bg-teal-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 scroll-animate opacity-0 translate-y-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 gradient-text">
            About Coffee Shop
          </h1>
          <div className="w-33 h-1 bg-gradient-to-r from-purple-500 to-green-500 rounded-full mx-auto"></div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 scroll-animate opacity-0 translate-y-10">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Welcome to Coffee Shop, where passion meets perfection in every
              cup. Since our founding, we've been dedicated to bringing you the
              finest coffee experience, sourced from the best coffee farms
              around the world.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Our expert baristas craft each drink with care, ensuring that
              every sip delivers the rich, bold flavors that coffee lovers
              crave. From our signature espresso blends to our creative seasonal
              specialties, we're committed to excellence.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Learn More
            </button>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-green-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <img
                src="/images/coffee-hero.png"
                alt="About Coffee Shop"
                className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 w-full max-w-md lg:max-w-lg"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20 scroll-animate opacity-0 translate-y-10">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 gradient-text">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "☕",
                title: "Premium Quality",
                description:
                  "We source only the finest coffee beans from sustainable farms worldwide.",
                color: "from-purple-100 to-purple-200",
              },
              {
                icon: "👨‍🍳",
                title: "Expert Baristas",
                description:
                  "Our skilled baristas are passionate about creating the perfect cup every time.",
                color: "from-green-100 to-green-200",
              },
              {
                icon: "🌱",
                title: "Sustainable",
                description:
                  "We're committed to environmental responsibility and fair trade practices.",
                color: "from-blue-100 to-blue-200",
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${value.color} rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 scroll-animate opacity-0 translate-y-10`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Team Section */}
        <div className="mb-16 scroll-animate opacity-0 translate-y-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 gradient-text">
              Meet Our Development Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The talented minds behind this amazing coffee shop experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {developers.map((developer, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 scroll-animate opacity-0 translate-y-10`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="text-center mb-8">
                  <div className="relative inline-block">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-green-400 rounded-full blur opacity-30"></div>
                    <img
                      src={developer.image || "/placeholder.svg"}
                      alt={developer.name}
                      className="relative w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-2">
                    {developer.name}
                  </h3>
                  <p className="text-purple-600 font-semibold text-lg mb-4">
                    {developer.role}
                  </p>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-center">
                  {developer.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-purple-50 to-green-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {developer.experience}
                    </div>
                    <div className="text-sm text-gray-600">Experience</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {developer.projects}
                    </div>
                    <div className="text-sm text-gray-600">Completed</div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  {developer.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gradient-to-r from-purple-100 to-green-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium border border-purple-200 hover:scale-105 transition-transform duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-r from-purple-600 to-green-600 rounded-3xl p-12 text-white text-center scroll-animate opacity-0 translate-y-10">
          <h3 className="text-4xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            To create a community where coffee lovers can gather, connect, and
            enjoy the finest coffee experience while supporting sustainable
            practices and fair trade partnerships around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Join Our Community
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
