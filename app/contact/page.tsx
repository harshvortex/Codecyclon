import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/sections/contact-hero"
import { ContactForm } from "@/components/sections/contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  )
}
