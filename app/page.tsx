import HeroSection from '@/components/HeroSection'
import TrustSection from '@/components/TrustSection'
import FeaturesSection from '@/components/FeaturesSection'
import HowToUseSection from '@/components/HowToUseSection'
import ShowcaseSection from '@/components/ShowcaseSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <TrustSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <HowToUseSection />
      <div id="examples">
        <ShowcaseSection />
      </div>
      <TestimonialsSection />
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <CTASection />
      <Footer />
    </main>
  )
}
