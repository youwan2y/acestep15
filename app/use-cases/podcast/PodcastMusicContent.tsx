'use client'

import HeroSection from '@/components/seo-pages/HeroSection'
import BenefitsGrid from '@/components/seo-pages/BenefitsGrid'
import StepByStepGuide from '@/components/seo-pages/StepByStepGuide'
import KeywordExamples from '@/components/seo-pages/KeywordExamples'
import FAQAccordion from '@/components/seo-pages/FAQAccordion'
import CTASection from '@/components/seo-pages/CTASection'
import StructuredDataArticle from '@/components/seo-pages/StructuredDataArticle'
import { podcastMusicConfig } from '@/lib/seo-data'

export default function PodcastMusicContent() {
  return (
    <>
      <StructuredDataArticle
        headline="AI Music Generator for Podcasts — Free Royalty-Free Intro & Background Music"
        description="Create custom podcast intro music, outro tracks, and episode background music with AI in seconds. Royalty-free, unique to your show, zero licensing fees."
        author="Ace-Step Team"
        datePublished="2026-03-06"
        dateModified="2026-03-06"
      />

      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <HeroSection
            badge={podcastMusicConfig.hero.badge}
            title={podcastMusicConfig.hero.title}
            subtitle={podcastMusicConfig.hero.subtitle}
            stats={podcastMusicConfig.hero.stats}
            ctaText={podcastMusicConfig.hero.ctaText}
            ctaHref={podcastMusicConfig.hero.ctaHref}
          />

          <BenefitsGrid benefits={podcastMusicConfig.benefits} />

          <StepByStepGuide
            title="How to Create Your Podcast Music"
            steps={podcastMusicConfig.steps}
          />

          <KeywordExamples
            title="Podcast Music Prompts by Genre"
            examples={podcastMusicConfig.examples}
          />

          <FAQAccordion items={podcastMusicConfig.faq} />

          <CTASection
            title="Your Podcast Deserves a Signature Sound"
            subtitle="Stop using generic stock music. Create a unique theme that makes your show unforgettable."
            ctaText="Generate Podcast Music Free →"
            ctaHref="/#waitlist"
          />
        </div>
      </main>
    </>
  )
}
