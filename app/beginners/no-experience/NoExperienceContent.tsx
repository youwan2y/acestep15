'use client'

import HeroSection from '@/components/seo-pages/HeroSection'
import BenefitsGrid from '@/components/seo-pages/BenefitsGrid'
import StepByStepGuide from '@/components/seo-pages/StepByStepGuide'
import KeywordExamples from '@/components/seo-pages/KeywordExamples'
import FAQAccordion from '@/components/seo-pages/FAQAccordion'
import CTASection from '@/components/seo-pages/CTASection'
import StructuredDataArticle from '@/components/seo-pages/StructuredDataArticle'
import { beginnersNoExperienceConfig } from '@/lib/seo-data'

export default function NoExperienceContent() {
  return (
    <>
      <StructuredDataArticle
        headline="How to Create Music with No Experience - AI Music Generation"
        description="Create professional music without any experience. AI-powered music generation for absolute beginners. From idea to track in 30 seconds."
        author="Ace-Step Team"
        datePublished="2026-03-05"
        dateModified="2026-03-05"
      />

      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <HeroSection
            badge={beginnersNoExperienceConfig.hero.badge}
            title={beginnersNoExperienceConfig.hero.title}
            subtitle={beginnersNoExperienceConfig.hero.subtitle}
            stats={beginnersNoExperienceConfig.hero.stats}
            ctaText={beginnersNoExperienceConfig.hero.ctaText}
            ctaHref={beginnersNoExperienceConfig.hero.ctaHref}
          />

          {/* Benefits Grid */}
          <BenefitsGrid benefits={beginnersNoExperienceConfig.benefits} />

          {/* How It Works */}
          <StepByStepGuide
            title="From Idea to Music in 3 Steps"
            steps={beginnersNoExperienceConfig.steps}
          />

          {/* Prompt Examples */}
          <KeywordExamples
            title="Simple Prompts That Work Magic"
            examples={beginnersNoExperienceConfig.examples}
          />

          {/* FAQ */}
          <FAQAccordion items={beginnersNoExperienceConfig.faq} />

          {/* CTA */}
          <CTASection
            title="No Experience? No Problem!"
            subtitle="Join thousands of beginners creating music with AI"
            ctaText="Create Music Now →"
            ctaHref="/#waitlist"
          />
        </div>
      </main>
    </>
  )
}
