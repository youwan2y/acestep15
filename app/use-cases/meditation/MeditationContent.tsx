'use client'

import HeroSection from '@/components/seo-pages/HeroSection'
import BenefitsGrid from '@/components/seo-pages/BenefitsGrid'
import StepByStepGuide from '@/components/seo-pages/StepByStepGuide'
import KeywordExamples from '@/components/seo-pages/KeywordExamples'
import FAQAccordion from '@/components/seo-pages/FAQAccordion'
import CTASection from '@/components/seo-pages/CTASection'
import StructuredDataArticle from '@/components/seo-pages/StructuredDataArticle'
import { meditationMusicConfig } from '@/lib/seo-data'

export default function MeditationContent() {
  return (
    <>
      <StructuredDataArticle
        headline="Free Background Music for Meditation - AI Music Generator"
        description="Generate custom meditation music with AI. Relaxing ambient sounds, binaural beats, Perfect for meditation apps."
        author="Ace-Step Team"
        datePublished="2026-03-05"
        dateModified="2026-03-05"
      />

      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <HeroSection
            badge={meditationMusicConfig.hero.badge}
            title={meditationMusicConfig.hero.title}
            subtitle={meditationMusicConfig.hero.subtitle}
            stats={meditationMusicConfig.hero.stats}
            ctaText={meditationMusicConfig.hero.ctaText}
            ctaHref={meditationMusicConfig.hero.ctaHref}
          />

          {/* Benefits Grid */}
          <BenefitsGrid benefits={meditationMusicConfig.benefits} />

          {/* How It Works */}
          <StepByStepGuide
            title="How to Create Meditation Music"
            steps={meditationMusicConfig.steps}
          />

          {/* Prompt Examples */}
          <KeywordExamples
            title="Meditation Music Prompts to Try"
            examples={meditationMusicConfig.examples}
          />

          {/* FAQ */}
          <FAQAccordion items={meditationMusicConfig.faq} />

          {/* CTA */}
          <CTASection
            title="Ready to Create Your Meditation Music?"
            subtitle="Join wellness creators using AI meditation music"
            ctaText="Create Meditation Music Free →"
            ctaHref="/#waitlist"
          />
        </div>
      </main>
    </>
  )
}
