import Link from "next/link"

const services = [
  {
    icon: "🌐",
    title: "Business Websites",
    description: "Professional 5-7 page websites with custom design, mobile responsive, and SEO optimized.",
    features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "WhatsApp Integration"],
    price: "₹14,999",
  },
  {
    icon: "⚡",
    title: "Landing Pages",
    description: "High-converting single-page websites designed to capture leads and drive sales.",
    features: ["Fast Loading", "Mobile Optimized", "Built-in CTA", "3-Day Delivery"],
    price: "₹4,999",
  },
  {
    icon: "🛒",
    title: "E-commerce Platforms",
    description: "Full-featured online stores with product management, payments, and inventory tracking.",
    features: ["Product Management", "Payment Gateway", "Inventory System", "Analytics"],
    price: "Custom",
  },
  {
    icon: "💻",
    title: "Web Applications",
    description: "Custom web platforms and applications with advanced features and scalable architecture.",
    features: ["Custom Features", "User Authentication", "Real-time Data", "Scalable"],
    price: "Custom",
  },
  {
    icon: "🛟",
    title: "Care & Maintenance",
    description: "Ongoing updates, monitoring, backups, and technical support for your existing website or product.",
    features: ["Monthly Updates", "Security Monitoring", "Performance Checks", "Priority Support"],
    price: "From ₹3,999 / month",
  },
  {
    icon: "🎨",
    title: "Personal Portfolio",
    description: "Showcase your work with a stunning portfolio website that impresses clients.",
    features: ["Gallery Display", "Project Showcase", "Contact Form", "Modern Design"],
    price: "₹7,999",
  },
  {
    icon: "🔄",
    title: "Website Redesign",
    description: "Refresh your existing website with modern design and improved performance.",
    features: ["Design Refresh", "Performance Boost", "SEO Improvement", "Mobile Optimization"],
    price: "Custom",
  },
]

export function ServiceCards() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-background border border-border rounded-xl p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 flex flex-col"
            >
              <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent/20 transition-colors text-2xl">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              <p className="text-foreground/60 text-sm mb-4">{service.description}</p>

              <div className="space-y-2 mb-6 flex-grow">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    <span className="text-sm text-foreground/70">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="text-2xl font-bold text-accent">{service.price}</div>
                <Link href="/contact" className="btn-primary flex items-center justify-center gap-2 group/btn w-full">
                  Request a Quote
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
