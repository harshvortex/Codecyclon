export function ContactHero() {
  return (
    <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-accent/30 rounded-full mb-6 w-fit mx-auto">
          <span className="text-lg">📧</span>
          <span className="text-sm font-medium text-accent">Let's Connect</span>
        </div>

        <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-balance">
          Get Your Website <span className="text-accent">Today</span>
        </h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          Tell us about your project and we'll get back to you within 24 hours with a personalized proposal.
        </p>
      </div>
    </section>
  )
}
