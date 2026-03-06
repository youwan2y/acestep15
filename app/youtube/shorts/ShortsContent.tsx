'use client'

import HeroSection from '@/components/seo-pages/HeroSection'
import BenefitsGrid from '@/components/seo-pages/BenefitsGrid'
import StepByStepGuide from '@/components/seo-pages/StepByStepGuide'
import KeywordExamples from '@/components/seo-pages/KeywordExamples'
import FAQAccordion from '@/components/seo-pages/FAQAccordion'
import CTASection from '@/components/seo-pages/CTASection'
import StructuredDataArticle from '@/components/seo-pages/StructuredDataArticle'
import { youTubeShortsConfig } from '@/lib/seo-data'

export default function ShortsContent() {
  return (
    <>
      <StructuredDataArticle
        headline="Free Background Music for YouTube Shorts - AI Music Generator"
        description="Create viral YouTube Shorts with free AI background music. No copyright, trending sounds, perfect for 15-60 second videos."
        author="Ace-Step Team"
        datePublished="2026-03-05"
        dateModified="2026-03-05"
      />

      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <HeroSection
            badge={youTubeShortsConfig.hero.badge}
            title={youTubeShortsConfig.hero.title}
            subtitle={youTubeShortsConfig.hero.subtitle}
            stats={youTubeShortsConfig.hero.stats}
            ctaText={youTubeShortsConfig.hero.ctaText}
            ctaHref={youTubeShortsConfig.hero.ctaHref}
          />

          {/* Benefits Grid */}
          <BenefitsGrid benefits={youTubeShortsConfig.benefits} />

          {/* How It Works */}
          <StepByStepGuide title="How to Create Shorts Music" steps={youTubeShortsConfig.steps} />

          {/* Prompt Examples */}
          <KeywordExamples title="Try These Viral Shorts Prompts" examples={youTubeShortsConfig.examples} />

          {/* FAQ */}
          <FAQAccordion items={youTubeShortsConfig.faq} />

          {/* CTA */}
          <CTASection
            title="Ready to Create Viral Shorts Music?"
            subtitle="Join thousands of creators using AI music for their YouTube Shorts"
            ctaText="Start Creating Free →"
            ctaHref="/#waitlist"
          />
        </div>
      </main>
    </>
  )
}
