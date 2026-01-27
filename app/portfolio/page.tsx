import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/sections/portfolio-hero"
import { PortfolioGallery } from "@/components/sections/portfolio-gallery"
import { CtaBannerSection } from "@/components/sections/cta-banner"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PortfolioHero />
      <PortfolioGallery />
      <CtaBannerSection />
      <Footer />
    </main>
  )
}
