'use client'

import HeroSection from '@/components/seo-pages/HeroSection'
import BenefitsGrid from '@/components/seo-pages/BenefitsGrid'
import StepByStepGuide from '@/components/seo-pages/StepByStepGuide'
import KeywordExamples from '@/components/seo-pages/KeywordExamples'
import FAQAccordion from '@/components/seo-pages/FAQAccordion'
import CTASection from '@/components/seo-pages/CTASection'
import StructuredDataArticle from '@/components/seo-pages/StructuredDataArticle'
import ComparisonTable from '@/components/seo-pages/ComparisonTable'
import { vsAcestepVsMurekaConfig } from '@/lib/seo-data'

export default function VsAcestepVsMurekaContent() {
  return (
    <>
      <StructuredDataArticle
        headline="ACE-Step 1.5 vs Mureka AI (2026): Full Feature Comparison"
        description="The definitive comparison of ACE-Step 1.5 and Mureka AI. Compare price, speed, quality, and features to find the best AI music generator for your needs."
        author="Ace-Step Team"
        datePublished="2026-03-06"
        dateModified="2026-03-06"
      />

      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <HeroSection
            badge={vsAcestepVsMurekaConfig.hero.badge}
            title={vsAcestepVsMurekaConfig.hero.title}
            subtitle={vsAcestepVsMurekaConfig.hero.subtitle}
            stats={vsAcestepVsMurekaConfig.hero.stats}
            ctaText={vsAcestepVsMurekaConfig.hero.ctaText}
            ctaHref={vsAcestepVsMurekaConfig.hero.ctaHref}
          />

          <ComparisonTable
            title="Side-by-Side Feature Comparison"
            tool1="ACE-Step 1.5"
            tool2="Mureka AI"
            rows={[
              { feature: 'Starting Price', tool1: 'Free forever', tool2: '$10/month', tool1Wins: true },
              { feature: 'Open Source', tool1: '✓ Apache 2.0', tool2: '✗ Proprietary', tool1Wins: true },
              { feature: 'Runs Locally', tool1: '✓ Full privacy', tool2: '✗ Cloud only', tool1Wins: true },
              { feature: 'Generation Speed', tool1: '~20 sec (local GPU)', tool2: '1–3 min (cloud)', tool1Wins: true },
              { feature: 'Languages', tool1: '50+ languages', tool2: '10 languages', tool1Wins: true },
              { feature: 'Voice Cloning (LoRA)', tool1: '✓ Free', tool2: '✓ Paid tier', tool1Wins: true },
              { feature: 'Stem Separation', tool1: '✓ Free', tool2: '✓ Paid tier', tool1Wins: true },
              { feature: 'Commercial Rights', tool1: 'Always free (Apache 2.0)', tool2: 'Requires paid plan', tool1Wins: true },
              { feature: 'Generation Limits', tool1: 'Unlimited', tool2: '400 songs/month (paid)', tool1Wins: true },
              { feature: 'Web UI', tool1: 'Coming Soon', tool2: '✓ Available now', tool1Wins: false },
              { feature: 'DAW Integration', tool1: 'Via export', tool2: '✓ Direct MIDI export', tool1Wins: false },
              { feature: 'Audio Quality', tool1: 'Studio-grade', tool2: 'Studio-grade', tool1Wins: null },
            ]}
          />

          <BenefitsGrid benefits={vsAcestepVsMurekaConfig.benefits} />

          <StepByStepGuide
            title="How to Choose Between ACE-Step and Mureka"
            steps={vsAcestepVsMurekaConfig.steps}
          />

          <KeywordExamples
            title="Test These Prompts in Both Tools"
            examples={vsAcestepVsMurekaConfig.examples}
          />

          <FAQAccordion items={vsAcestepVsMurekaConfig.faq} />

          <CTASection
            title="ACE-Step Wins on Value — Try It Free"
            subtitle="No subscription. No credit limits. Just powerful AI music generation, free forever."
            ctaText="Start Creating Free with ACE-Step →"
            ctaHref="/#waitlist"
          />
        </div>
      </main>
    </>
  )
}
