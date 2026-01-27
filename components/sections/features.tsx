"use client"

export function FeaturesSection() {
  const features = [
    {
      icon: "⚡",
      title: "Custom Design",
      description: "Tailored to your brand identity with pixel-perfect precision.",
    },
    {
      icon: "📱",
      title: "Mobile First",
      description: "Seamless experience across all devices and screen sizes.",
    },
    {
      icon: "🚀",
      title: "Rapid Delivery",
      description: "Get your project launched in record time without compromising quality.",
    },
    {
      icon: "⚙️",
      title: "Scalable Tech",
      description: "Built on robust foundations ready to grow with your business.",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground mb-6">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We combine aesthetic excellence with technical innovation to deliver superior results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-8 group shine-effect relative"
            >
              <div className="mb-6 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
