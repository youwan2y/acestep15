'use client'

import HeroSection from '@/components/seo-pages/HeroSection'
import BenefitsGrid from '@/components/seo-pages/BenefitsGrid'
import StepByStepGuide from '@/components/seo-pages/StepByStepGuide'
import KeywordExamples from '@/components/seo-pages/KeywordExamples'
import FAQAccordion from '@/components/seo-pages/FAQAccordion'
import CTASection from '@/components/seo-pages/CTASection'
import StructuredDataArticle from '@/components/seo-pages/StructuredDataArticle'
import ComparisonTable from '@/components/seo-pages/ComparisonTable'
import { murekaAlternativeConfig } from '@/lib/seo-data'

export default function MurekaAlternativeContent() {
  return (
    <>
      <StructuredDataArticle
        headline="Best Free Mureka AI Alternative 2026 — ACE-Step 1.5"
        description="Looking for a Mureka AI alternative? ACE-Step 1.5 is faster, free forever, and open-source. Compare features and make the switch today."
        author="Ace-Step Team"
        datePublished="2026-03-06"
        dateModified="2026-03-06"
      />

      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <HeroSection
            badge={murekaAlternativeConfig.hero.badge}
            title={murekaAlternativeConfig.hero.title}
            subtitle={murekaAlternativeConfig.hero.subtitle}
            stats={murekaAlternativeConfig.hero.stats}
            ctaText={murekaAlternativeConfig.hero.ctaText}
            ctaHref={murekaAlternativeConfig.hero.ctaHref}
          />

          <ComparisonTable
            title="ACE-Step 1.5 vs Mureka AI: Feature Comparison"
            tool1="ACE-Step 1.5"
            tool2="Mureka AI"
            rows={[
              { feature: 'Price', tool1: 'Free (Open Source)', tool2: 'From $10/month', tool1Wins: true },
              { feature: 'Generation Speed', tool1: '~20 seconds (local)', tool2: '1–3 minutes (cloud)', tool1Wins: true },
              { feature: 'Languages Supported', tool1: '50+ languages', tool2: '10 languages', tool1Wins: true },
              { feature: 'Runs Locally', tool1: '✓ Yes (private)', tool2: '✗ Cloud only', tool1Wins: true },
              { feature: 'LoRA Voice Cloning', tool1: '✓ Free', tool2: '✓ Paid only', tool1Wins: true },
              { feature: 'Stem Separation', tool1: '✓ Free', tool2: '✓ Paid only', tool1Wins: true },
              { feature: 'Commercial License', tool1: 'Apache 2.0 (always free)', tool2: 'Requires paid plan', tool1Wins: true },
              { feature: 'Lyric Editing', tool1: '✓ Yes', tool2: '✓ Yes', tool1Wins: false },
              { feature: 'Web UI', tool1: 'Coming Soon', tool2: '✓ Polished UI', tool1Wins: false },
              { feature: 'API Access', tool1: '✓ Open Source', tool2: '✓ Paid API', tool1Wins: true },
            ]}
          />

          <BenefitsGrid benefits={murekaAlternativeConfig.benefits} />

          <StepByStepGuide
            title="How to Switch from Mureka to ACE-Step"
            steps={murekaAlternativeConfig.steps}
          />

          <KeywordExamples
            title="Try These Prompts — Mureka Can't Beat These Results"
            examples={murekaAlternativeConfig.examples}
          />

          <FAQAccordion items={murekaAlternativeConfig.faq} />

          <CTASection
            title="Ready to Ditch Mureka's Subscription?"
            subtitle="ACE-Step 1.5 is free, faster, and more powerful. Join creators making the switch."
            ctaText="Try ACE-Step Free — No Credit Card →"
            ctaHref="/#waitlist"
          />
        </div>
      </main>
    </>
  )
}
