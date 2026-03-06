'use client'

import HeroSection from '@/components/seo-pages/HeroSection'
import BenefitsGrid from '@/components/seo-pages/BenefitsGrid'
import StepByStepGuide from '@/components/seo-pages/StepByStepGuide'
import KeywordExamples from '@/components/seo-pages/KeywordExamples'
import FAQAccordion from '@/components/seo-pages/FAQAccordion'
import CTASection from '@/components/seo-pages/CTASection'
import StructuredDataArticle from '@/components/seo-pages/StructuredDataArticle'
import { capcutMusicConfig } from '@/lib/seo-data'

export default function CapcutMusicContent() {
  return (
    <>
      <StructuredDataArticle
        headline="AI Music Generator for CapCut Videos — Free, Unique & Royalty-Free"
        description="Generate unique AI music for your CapCut videos in seconds. No copyright claims on TikTok, YouTube, or Instagram. Stand out from creators using the same CapCut library tracks."
        author="Ace-Step Team"
        datePublished="2026-03-06"
        dateModified="2026-03-06"
      />

      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <HeroSection
            badge={capcutMusicConfig.hero.badge}
            title={capcutMusicConfig.hero.title}
            subtitle={capcutMusicConfig.hero.subtitle}
            stats={capcutMusicConfig.hero.stats}
            ctaText={capcutMusicConfig.hero.ctaText}
            ctaHref={capcutMusicConfig.hero.ctaHref}
          />

          <BenefitsGrid benefits={capcutMusicConfig.benefits} />

          <StepByStepGuide
            title="How to Add AI Music to Your CapCut Videos"
            steps={capcutMusicConfig.steps}
          />

          <KeywordExamples
            title="CapCut Music Prompts by Video Style"
            examples={capcutMusicConfig.examples}
          />

          <FAQAccordion items={capcutMusicConfig.faq} />

          <CTASection
            title="Stop Using the Same Tracks as Everyone Else"
            subtitle="Millions of CapCut creators use the same library. Generate music that's uniquely yours."
            ctaText="Create Your Unique CapCut Music →"
            ctaHref="/#waitlist"
          />
        </div>
      </main>
    </>
  )
}
