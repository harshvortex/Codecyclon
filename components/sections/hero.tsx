"use client"

import Link from "next/link"

export function HeroSection() {
  // Main stats - update these based on actual project count
  const completedProjects = "35+"  // Keep this updated as we complete more
  const satisfactionRate = "100%"

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects - gradient + floating orbs for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-float opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] animate-float opacity-50" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block animate-fade-in">
              <span className="px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
                Web Development & Design
              </span>
            </div>

            {/* Main heading - keep it punchy */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground animate-slide-in-up">
              Building Websites <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                That Actually Work
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 animate-slide-in-up delay-100">
              Professional web development for businesses ready to grow online. Clean code, fast performance, real results.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-in-up delay-200">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg hover:shadow-primary/25 shine-effect text-center">
                Let's Talk
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 border border-border/50 bg-card/30 backdrop-blur-md rounded-lg hover:bg-card/50 transition-all hover:border-primary/50 text-foreground font-medium text-center">
                Our Work
              </Link>
            </div>

            {/* Quick stats */}
            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 opacity-80">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">{completedProjects}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Projects Done</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">{satisfactionRate}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Visual cards stack - makes the hero more interesting on desktop */}
          <div className="relative h-[600px] w-full hidden lg:block perspective-1000">
            {/* Back card - code mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-gradient-to-br from-card to-background border border-border rounded-2xl shadow-2xl rotate-[-6deg] z-10 glass-card flex flex-col p-6 hover:rotate-[-8deg] transition-all duration-500">
              <div className="h-4 w-4 rounded-full bg-red-500 mb-4" />
              <div className="space-y-3 opacity-50">
                <div className="h-2 w-3/4 bg-muted-foreground/20 rounded" />
                <div className="h-2 w-1/2 bg-muted-foreground/20 rounded" />
              </div>
              <div className="mt-auto h-32 bg-gradient-to-t from-primary/10 to-transparent rounded-lg" />
            </div>

            {/* Side card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-gradient-to-br from-card/80 to-background border border-border rounded-2xl shadow-2xl rotate-[6deg] z-0 glass-card flex flex-col p-6 hover:rotate-[8deg] transition-all duration-500">
              <div className="self-end h-8 w-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                ⚡
              </div>
              <div className="mt-8 text-6xl font-black text-foreground/5">CODE</div>
            </div>

            {/* Front card - main focus */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 glass border border-primary/30 rounded-2xl shadow-[0_0_50px_rgba(var(--primary),0.3)] z-20 hover:scale-105 transition-all duration-500 flex flex-col justify-between p-8 group shine-effect">
              <div className="flex justify-between items-start">
                <div className="bg-primary/20 p-3 rounded-full text-primary text-xl">🚀</div>
                <div className="text-xs font-mono text-primary/50">2024</div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">Scale</h3>
                <p className="text-sm text-muted-foreground">Modern websites built for business growth</p>
              </div>
              <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-primary group-hover:w-full transition-all duration-1000" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
