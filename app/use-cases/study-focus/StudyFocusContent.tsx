'use client'

import HeroSection from '@/components/seo-pages/HeroSection'
import BenefitsGrid from '@/components/seo-pages/BenefitsGrid'
import StepByStepGuide from '@/components/seo-pages/StepByStepGuide'
import KeywordExamples from '@/components/seo-pages/KeywordExamples'
import FAQAccordion from '@/components/seo-pages/FAQAccordion'
import CTASection from '@/components/seo-pages/CTASection'
import StructuredDataArticle from '@/components/seo-pages/StructuredDataArticle'
import { studyFocusMusicConfig } from '@/lib/seo-data'

export default function StudyFocusContent() {
  return (
    <>
      <StructuredDataArticle
        headline="Study Music Generator No Vocals - AI Focus Music"
        description="Create focus-enhancing study music with AI. Instrumental lo-fi, ambient. Boost productivity and concentration. Perfect for students."
        author="Ace-Step Team"
        datePublished="2026-03-05"
        dateModified="2026-03-05"
      />

      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <HeroSection
            badge={studyFocusMusicConfig.hero.badge}
            title={studyFocusMusicConfig.hero.title}
            subtitle={studyFocusMusicConfig.hero.subtitle}
            stats={studyFocusMusicConfig.hero.stats}
            ctaText={studyFocusMusicConfig.hero.ctaText}
            ctaHref={studyFocusMusicConfig.hero.ctaHref}
          />

          {/* Benefits Grid */}
          <BenefitsGrid benefits={studyFocusMusicConfig.benefits} />

          {/* How It Works */}
          <StepByStepGuide
            title="Create Your Study Music in 3 Steps"
            steps={studyFocusMusicConfig.steps}
          />

          {/* Prompt Examples */}
          <KeywordExamples
            title="Study Music Prompts That Work"
            examples={studyFocusMusicConfig.examples}
          />

          {/* FAQ */}
          <FAQAccordion items={studyFocusMusicConfig.faq} />

          {/* CTA */}
          <CTASection
            title="Ready to Boost Your Focus?"
            subtitle="Join students using AI study music"
            ctaText="Create Study Music Free →"
            ctaHref="/#waitlist"
          />
        </div>
      </main>
    </>
  )
}
