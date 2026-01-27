import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/sections/pricing-hero"
import { PricingTable } from "@/components/sections/pricing-table"
import { CtaBannerSection } from "@/components/sections/cta-banner"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PricingHero />
      <PricingTable />
      <CtaBannerSection />
      <Footer />
    </main>
  )
}
