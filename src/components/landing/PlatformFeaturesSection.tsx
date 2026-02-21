import React from 'react'
import { Link } from 'react-router-dom'

const FEATURES = [
  {
    title: "Project Showcase",
    description: "Explore innovative projects from alumni founders. Apply to work on real-world problems, gain industry experience, and build your portfolio.",
    link: "/projects",
    linkText: "Browse Projects →",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop",
    borderColor: "border-blue-100",
    accentColor: "text-blue-600",
  },
  {
    title: "Founder Connect",
    description: "Connect with successful alumni entrepreneurs and mentors. Get career guidance, mentorship, and find co-founders for your next venture.",
    link: "/alumni-connect",
    linkText: "Meet Founders →",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&auto=format&fit=crop",
    borderColor: "border-indigo-100",
    accentColor: "text-indigo-600",
  },
  {
    title: "Knowledge Hub",
    description: "Read thought-provoking articles and insights from our alumni community. Share your own experiences and learn from the best minds at IIT KGP.",
    link: "/blog",
    linkText: "Read Articles →",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&auto=format&fit=crop",
    borderColor: "border-cyan-100",
    accentColor: "text-cyan-600",
  },
  {
    title: "Events & Workshops",
    description: "Attend seminars, webinars, podcasts, and networking sessions led by industry leaders. Stay updated with the latest trends and opportunities.",
    link: "/events",
    linkText: "View Events →",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&auto=format&fit=crop",
    borderColor: "border-blue-100",
    accentColor: "text-blue-600",
  },
]

export const PlatformFeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            A comprehensive ecosystem designed to empower students and alumni alike.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl border ${feature.borderColor} overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}
            >
              {/* Card Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-5">{feature.description}</p>
                <Link
                  to={feature.link}
                  className={`inline-flex items-center text-sm font-semibold ${feature.accentColor} group-hover:gap-2 transition-all duration-300`}
                >
                  {feature.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
