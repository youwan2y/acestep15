'use client'

import HeroSection from '@/components/seo-pages/HeroSection'
import BenefitsGrid from '@/components/seo-pages/BenefitsGrid'
import StepByStepGuide from '@/components/seo-pages/StepByStepGuide'
import KeywordExamples from '@/components/seo-pages/KeywordExamples'
import FAQAccordion from '@/components/seo-pages/FAQAccordion'
import CTASection from '@/components/seo-pages/CTASection'
import StructuredDataArticle from '@/components/seo-pages/StructuredDataArticle'
import { youTubeMonetizationConfig } from '@/lib/seo-data'

export default function MonetizationContent() {
  return (
    <>
      <StructuredDataArticle
        headline="No Copyright Music for YouTube Monetization - 100% Revenue Yours"
        description="Monetize your YouTube channel with AI-generated music. No copyright claims, 100% revenue yours. Complete guide to copyright-safe content creation."
        author="Ace-Step Team"
        datePublished="2026-03-05"
        dateModified="2026-03-05"
      />

      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <HeroSection
            badge={youTubeMonetizationConfig.hero.badge}
            title={youTubeMonetizationConfig.hero.title}
            subtitle={youTubeMonetizationConfig.hero.subtitle}
            stats={youTubeMonetizationConfig.hero.stats}
            ctaText={youTubeMonetizationConfig.hero.ctaText}
            ctaHref={youTubeMonetizationConfig.hero.ctaHref}
          />

          {/* Benefits Grid */}
          <BenefitsGrid benefits={youTubeMonetizationConfig.benefits} />

          {/* How It Works */}
          <StepByStepGuide
            title="How to Monetize Your YouTube Music"
            steps={youTubeMonetizationConfig.steps}
          />

          {/* Prompt Examples */}
          <KeywordExamples
            title="Monetization-Safe Music Prompts"
            examples={youTubeMonetizationConfig.examples}
          />

          {/* FAQ */}
          <FAQAccordion items={youTubeMonetizationConfig.faq} />

          {/* CTA */}
          <CTASection
            title="Ready to Keep 100% of Your Revenue?"
            subtitle="Join monetized YouTubers using AI music"
            ctaText="Get Monetization-Safe Music →"
            ctaHref="/#waitlist"
          />
        </div>
      </main>
    </>
  )
}
