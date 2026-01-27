import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/sections/services-hero"
import { ServiceCards } from "@/components/sections/service-cards"
import { CtaBannerSection } from "@/components/sections/cta-banner"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServicesHero />
      <ServiceCards />
      <CtaBannerSection />
      <Footer />
    </main>
  )
}
