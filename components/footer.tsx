import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-card via-card/80 to-background border-t border-border/50 py-16 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-accent/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand - Enhanced */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/70 rounded-full relative flex items-center justify-center shadow-lg shadow-accent/20">
                <div className="w-5 h-5 bg-background rounded-full" />
              </div>
              <span className="text-xl font-bold text-accent">Codecyclon</span>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed mb-4">
              Custom websites that help you stand out and convert.
            </p>
          </div>

          {/* Quick Links - Enhanced */}
          <div>
            <h3 className="font-bold text-foreground mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {["Services", "Pricing", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-foreground/70 hover:text-accent transition-all duration-300 text-sm font-medium group flex items-center gap-2"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Enhanced */}
          <div>
            <h3 className="font-bold text-foreground mb-6 text-lg">Services</h3>
            <ul className="space-y-3">
              {["Custom Websites", "Landing Pages", "E-commerce", "Web Platforms"].map((item) => (
                <li key={item}>
                  <span className="text-foreground/70 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Enhanced */}
          <div>
            <h3 className="font-bold text-foreground mb-6 text-lg">Get In Touch</h3>
            <div className="space-y-4">
              <a
                href="mailto:codecyclon@gmail.com"
                className="flex items-center gap-3 text-foreground/70 hover:text-accent transition-all duration-300 text-sm font-medium group"
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">📧</span>
                <span>Email us</span>
              </a>
              <a
                href="https://wa.me/919520535135"
                className="flex items-center gap-3 text-foreground/70 hover:text-accent transition-all duration-300 text-sm font-medium group"
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">💬</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm">© 2025 Codecyclon. All rights reserved.</p>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Sitemap"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-foreground/60 hover:text-accent transition-colors duration-300 text-sm font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
