import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    description: "Perfect for simple web presence",
    features: [
      "1 Page Landing Website",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "3-Day Delivery",
      "Basic Email Support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Business Website",
    price: "₹14,999",
    description: "Ideal for growing businesses",
    features: [
      "5-7 Page Website",
      "Custom Design",
      "Mobile Responsive",
      "WhatsApp Integration",
      "1 Revision Round",
      "Email & Chat Support",
      "Basic Analytics",
    ],
    cta: "Start Project",
    highlighted: true,
  },
  {
    name: "Scale & Maintain",
    price: "From ₹7,999 / mo",
    description: "For growing products that need ongoing development & support",
    features: [
      "Dedicated developer time each month",
      "Roadmap & feature planning",
      "Bug fixes & small improvements",
      "Priority support (WhatsApp + email)",
      "Performance & security checks",
      "Quarterly strategy call",
    ],
    cta: "Book a Call",
    highlighted: false,
  },
]

export function PricingTable() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border transition-all duration-300 p-8 flex flex-col ${
                plan.highlighted
                  ? "border-accent bg-gradient-to-br from-accent/10 to-background ring-2 ring-accent/30 scale-105 md:scale-100"
                  : "border-border bg-card hover:border-accent/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 bg-accent text-background text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-foreground/60 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold text-accent">{plan.price}</div>
                {plan.price !== "Custom" && <p className="text-foreground/60 text-sm mt-1">one-time investment</p>}
              </div>

              <div className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <span className="text-lg">✓</span>
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={`flex items-center justify-center gap-2 group rounded-lg font-semibold transition-all duration-200 px-6 py-3 ${
                  plan.highlighted ? "btn-primary" : "btn-secondary"
                }`}
              >
                {plan.cta}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
