'use client'

import HeroSection from '@/components/seo-pages/HeroSection'
import BenefitsGrid from '@/components/seo-pages/BenefitsGrid'
import StepByStepGuide from '@/components/seo-pages/StepByStepGuide'
import KeywordExamples from '@/components/seo-pages/KeywordExamples'
import FAQAccordion from '@/components/seo-pages/FAQAccordion'
import CTASection from '@/components/seo-pages/CTASection'
import StructuredDataArticle from '@/components/seo-pages/StructuredDataArticle'
import { beginnersGuideConfig } from '@/lib/seo-data'

export default function GuideContent() {
  return (
    <>
      <StructuredDataArticle
        headline="AI Music Generator for Complete Beginners - No Experience Required"
        description="Start creating music with AI - no experience needed. Complete beginner's guide to AI music generation. Make your first track in 5 minutes."
        author="Ace-Step Team"
        datePublished="2026-03-05"
        dateModified="2026-03-05"
      />

      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <HeroSection
            badge={beginnersGuideConfig.hero.badge}
            title={beginnersGuideConfig.hero.title}
            subtitle={beginnersGuideConfig.hero.subtitle}
            stats={beginnersGuideConfig.hero.stats}
            ctaText={beginnersGuideConfig.hero.ctaText}
            ctaHref={beginnersGuideConfig.hero.ctaHref}
          />

          {/* Benefits Grid */}
          <BenefitsGrid benefits={beginnersGuideConfig.benefits} />

          {/* How It Works */}
          <StepByStepGuide
            title="How to Create Your First Music Track"
            steps={beginnersGuideConfig.steps}
          />

          {/* Prompt Examples */}
          <KeywordExamples
            title="Try These Beginner-Friendly Prompts"
            examples={beginnersGuideConfig.examples}
          />

          {/* FAQ */}
          <FAQAccordion items={beginnersGuideConfig.faq} />

          {/* CTA */}
          <CTASection
            title="Ready to Create Your First Track?"
            subtitle="Join thousands of beginners making music with AI"
            ctaText="Start Your First Track Free →"
            ctaHref="/#waitlist"
          />
        </div>
      </main>
    </>
  )
}
