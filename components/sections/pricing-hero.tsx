export function PricingHero() {
  return (
    <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-accent/30 rounded-full mb-6 w-fit mx-auto">
          <span className="text-lg">💰</span>
          <span className="text-sm font-medium text-accent">Simple & Transparent</span>
        </div>

        <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-balance">
          Pricing for <span className="text-accent">Build & Care</span>
        </h1>
        <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
          Clear, transparent pricing for new builds and ongoing maintenance—no hidden costs, no surprises.
        </p>
      </div>
    </section>
  )
}
