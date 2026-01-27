"use client"

import type React from "react"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessIdea: "",
    budgetRange: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [shareMethod, setShareMethod] = useState<"email" | "whatsapp" | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          businessIdea: formData.businessIdea,
          budgetRange: formData.budgetRange,
          message: formData.message,
        }),
      })

      if (response.ok) {
        const data = await response.json()

        if (shareMethod === "email") {
          window.location.href = `mailto:codecyclon@gmail.com?subject=New Project Inquiry from ${formData.name}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nBusiness: ${formData.businessIdea}\nBudget: ${formData.budgetRange}\nMessage: ${formData.message}`,
          )}`
        } else if (shareMethod === "whatsapp") {
          const whatsappText = `Hi! I'm ${formData.name}. I'm interested in building a website for my ${formData.businessIdea}. My budget is around ${formData.budgetRange}. ${formData.message}`
          window.location.href = `https://wa.me/919520535135?text=${encodeURIComponent(whatsappText)}`
        }

        setSubmitted(true)
        setTimeout(() => {
          setFormData({ name: "", email: "", businessIdea: "", budgetRange: "", message: "" })
          setSubmitted(false)
          setShareMethod(null)
        }, 3000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">Quick Contacts</h2>
              <p className="text-foreground/70">Prefer to reach out directly? Use any of these methods.</p>
            </div>

            {[
              {
                label: "Email",
                value: "codecyclon@gmail.com",
                href: "mailto:codecyclon@gmail.com",
                icon: "📧",
              },
              { label: "WhatsApp", value: "+91 9520535135", href: "https://wa.me/919520535135", icon: "💬" },
            ].map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="block p-4 bg-card border border-border rounded-lg hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{contact.icon}</span>
                  <div>
                    <p className="text-sm text-foreground/60">{contact.label}</p>
                    <p className="text-lg font-semibold text-accent group-hover:translate-x-1 transition-transform">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}

            {/* Process */}
            <div className="space-y-4 pt-4">
              <h3 className="font-semibold text-foreground">Our Process</h3>
              {[
                "1. Submit Your Details",
                "2. We Review & Propose",
                "3. Finalize Requirements",
                "4. Development Starts",
                "5. Launch & Support",
              ].map((step) => (
                <div key={step} className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <p className="text-foreground/70">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8 animate-slide-in-right">
            {submitted ? (
              <div className="flex flex-col items-center justify-center min-h-96 text-center space-y-4 animate-slide-in-up">
                <div className="p-4 bg-accent/10 rounded-full text-4xl">✅</div>
                <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
                <p className="text-foreground/70">We've received your message and will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Business / Idea</label>
                  <input
                    type="text"
                    name="businessIdea"
                    value={formData.businessIdea}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="Describe your business"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Budget Range</label>
                  <select
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all disabled:opacity-50"
                  >
                    <option value="">Select a range</option>
                    <option value="under-5k">Under ₹5,000</option>
                    <option value="5k-15k">₹5,000 - ₹15,000</option>
                    <option value="15k-50k">₹15,000 - ₹50,000</option>
                    <option value="50k-plus">₹50,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none disabled:opacity-50"
                    placeholder="Tell us more about your project..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Send Details Via:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setShareMethod(shareMethod === "email" ? null : "email")}
                      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-all ${shareMethod === "email"
                        ? "bg-accent text-accent-foreground border-accent"
                        : "bg-background border-border hover:border-accent/50"
                        }`}
                    >
                      📧 Email
                    </button>
                    <button
                      type="button"
                      onClick={() => setShareMethod(shareMethod === "whatsapp" ? null : "whatsapp")}
                      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-all ${shareMethod === "whatsapp"
                        ? "bg-accent text-accent-foreground border-accent"
                        : "bg-background border-border hover:border-accent/50"
                        }`}
                    >
                      💬 WhatsApp
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading || !shareMethod}
                  className="btn-primary w-full flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? <>⏳ Sending...</> : <>Send Message →</>}
                </button>

                <p className="text-xs text-foreground/50 text-center">
                  We respect your privacy. Your information is safe with us.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
