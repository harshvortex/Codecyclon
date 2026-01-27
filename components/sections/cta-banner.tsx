import Link from "next/link"

export function CtaBannerSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-primary/10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Ready to Launch?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's build something extraordinary together. Start your journey today.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            Start Project <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
