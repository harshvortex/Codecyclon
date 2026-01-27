"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "E-commerce Fashion Store",
    category: "E-commerce",
    description: "High-converting online store with product filtering and secure checkout.",
    image: "/modern-e-commerce-fashion-website.jpg",
    tags: ["React", "Next.js", "Stripe", "Database"],
  },
  {
    id: 2,
    title: "SaaS Dashboard Platform",
    category: "Web App",
    description: "Advanced analytics dashboard with real-time data visualization.",
    image: "/modern-saas-analytics-dashboard-ui.jpg",
    tags: ["Next.js", "TypeScript", "Charts", "Auth"],
  },
  {
    id: 3,
    title: "Digital Agency Portfolio",
    category: "Portfolio",
    description: "Stunning portfolio site showcasing creative projects and case studies.",
    image: "/creative-agency-portfolio.png",
    tags: ["Next.js", "Animation", "CMS", "SEO"],
  },
  {
    id: 4,
    title: "Corporate Business Site",
    category: "Business",
    description: "Professional website for B2B services with lead capture forms.",
    image: "/professional-corporate-business-website.jpg",
    tags: ["Next.js", "Lead Forms", "CRM", "Analytics"],
  },
  {
    id: 5,
    title: "Startup Landing Page",
    category: "Landing Page",
    description: "Conversion-optimized landing page that generates 200+ leads monthly.",
    image: "/modern-startup-landing-page-design.jpg",
    tags: ["React", "Conversion", "Animation", "Optimization"],
  },
  {
    id: 6,
    title: "Restaurant Booking Platform",
    category: "Platform",
    description: "Full-featured reservation system with calendar and payment integration.",
    image: "/modern-restaurant-booking-app-interface.jpg",
    tags: ["Next.js", "Booking System", "Payments", "Calendar"],
  },
]

export function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]

  const filteredProjects =
    selectedCategory && selectedCategory !== "All" ? projects.filter((p) => p.category === selectedCategory) : projects

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Category filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === "All" ? null : category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                (category === "All" && !selectedCategory) || selectedCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "bg-background border border-border text-foreground hover:border-accent/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-background border border-border rounded-xl overflow-hidden hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-background/50">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="inline-block px-2 py-1 bg-accent/10 rounded text-sm font-medium text-accent mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-foreground/60 text-sm">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-card border border-border rounded text-foreground/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all duration-200 group/link">
                  View Project
                  <span className="group-hover/link:translate-x-1 transition-transform">↗</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-6 text-lg">Want to see your project in our portfolio?</p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2 group">
            Start Your Project
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
