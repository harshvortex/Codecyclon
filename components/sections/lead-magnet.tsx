"use client"

import type React from "react"
import { useState } from "react"

export function LeadMagnetSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
    }, 1500)
  }

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-primary/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass-card p-12 md:p-16 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

          <div className="text-center space-y-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Get Your Free Website Audit
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unlock the potential of your digital presence. Get a comprehensive analysis of your website's performance, SEO, and user experience.
            </p>

            {submitted ? (
              <div className="p-6 bg-green-500/20 border border-green-500/50 rounded-xl text-green-600 dark:text-green-400 animate-fade-in">
                ✓ Check your inbox! Your audit is on its way.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="w-full px-6 py-4 bg-background/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all shadow-inner"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all hover:shadow-lg disabled:opacity-50"
                >
                  {loading ? "Processing..." : "Claim Free Audit"}
                </button>
              </form>
            )}

            <p className="text-xs text-gray-500">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
