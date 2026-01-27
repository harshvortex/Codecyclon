import dynamic from "next/dynamic"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"

const FeaturesSection = dynamic(() => import("@/components/sections/features").then((mod) => mod.FeaturesSection))
const LeadMagnetSection = dynamic(() => import("@/components/sections/lead-magnet").then((mod) => mod.LeadMagnetSection))
const CtaBannerSection = dynamic(() => import("@/components/sections/cta-banner").then((mod) => mod.CtaBannerSection))

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <LeadMagnetSection />
      <CtaBannerSection />
      <Footer />
    </main>
  )
}
