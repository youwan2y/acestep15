'use client'

import HeroSection from '@/components/seo-pages/HeroSection'
import BenefitsGrid from '@/components/seo-pages/BenefitsGrid'
import StepByStepGuide from '@/components/seo-pages/StepByStepGuide'
import KeywordExamples from '@/components/seo-pages/KeywordExamples'
import FAQAccordion from '@/components/seo-pages/FAQAccordion'
import CTASection from '@/components/seo-pages/CTASection'
import StructuredDataArticle from '@/components/seo-pages/StructuredDataArticle'
import ComparisonTable from '@/components/seo-pages/ComparisonTable'
import { vsAcestepVsSunoConfig } from '@/lib/seo-data'

export default function VsAcestepVsSunoContent() {
  return (
    <>
      <StructuredDataArticle
        headline="ACE-Step 1.5 vs Suno AI (2026): Which AI Music Generator Wins?"
        description="Detailed comparison of ACE-Step 1.5 and Suno AI on price, speed, audio quality, and features. Find out which is better for your use case."
        author="Ace-Step Team"
        datePublished="2026-03-06"
        dateModified="2026-03-06"
      />

      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <HeroSection
            badge={vsAcestepVsSunoConfig.hero.badge}
            title={vsAcestepVsSunoConfig.hero.title}
            subtitle={vsAcestepVsSunoConfig.hero.subtitle}
            stats={vsAcestepVsSunoConfig.hero.stats}
            ctaText={vsAcestepVsSunoConfig.hero.ctaText}
            ctaHref={vsAcestepVsSunoConfig.hero.ctaHref}
          />

          <ComparisonTable
            title="ACE-Step 1.5 vs Suno AI: Complete Feature Breakdown"
            tool1="ACE-Step 1.5"
            tool2="Suno AI"
            rows={[
              { feature: 'Price', tool1: 'Free (Open Source)', tool2: '$8–$24/month (Pro)', tool1Wins: true },
              { feature: 'Free Tier Limits', tool1: 'Unlimited (local)', tool2: '10 songs/day', tool1Wins: true },
              { feature: 'Commercial Rights', tool1: 'Apache 2.0 (always)', tool2: 'Paid plan required', tool1Wins: true },
              { feature: 'Generation Speed', tool1: '2s (A100) / 20s (RTX 3090)', tool2: '30–90 seconds', tool1Wins: true },
              { feature: 'Speed Advantage', tool1: '10–120× faster', tool2: 'Baseline', tool1Wins: true },
              { feature: 'Runs Locally', tool1: '✓ Full privacy', tool2: '✗ Cloud only', tool1Wins: true },
              { feature: 'Open Source', tool1: '✓ Apache 2.0', tool2: '✗ Proprietary', tool1Wins: true },
              { feature: 'Languages', tool1: '50+ languages', tool2: 'Primarily English', tool1Wins: true },
              { feature: 'Max Song Length', tool1: 'Up to 6 minutes', tool2: 'Up to 4 minutes (v4)', tool1Wins: true },
              { feature: 'Voice Cloning', tool1: '✓ LoRA fine-tuning', tool2: '✗ Not available', tool1Wins: true },
              { feature: 'Stem Separation', tool1: '✓ Free', tool2: '✗ Not available', tool1Wins: true },
              { feature: 'Section Repainting', tool1: '✓ Free', tool2: '✗ Limited', tool1Wins: true },
              { feature: 'Web UI', tool1: 'Coming Soon', tool2: '✓ Available now', tool1Wins: false },
              { feature: 'Ease of Use', tool1: 'Technical setup', tool2: '✓ Instant, browser-based', tool1Wins: false },
              { feature: 'Vocal Realism (English)', tool1: 'Excellent', tool2: 'Excellent (slight edge)', tool1Wins: false },
            ]}
          />

          <BenefitsGrid benefits={vsAcestepVsSunoConfig.benefits} />

          <StepByStepGuide
            title="How to Choose: ACE-Step or Suno?"
            steps={vsAcestepVsSunoConfig.steps}
          />

          <KeywordExamples
            title="Run These Prompts in Both — You'll See the Difference"
            examples={vsAcestepVsSunoConfig.examples}
          />

          <FAQAccordion items={vsAcestepVsSunoConfig.faq} />

          <CTASection
            title="Free, Faster, More Powerful — Try ACE-Step Now"
            subtitle="Why pay $8–$24/month for Suno when ACE-Step 1.5 does more for free?"
            ctaText="Get Early Access — It's Free →"
            ctaHref="/#waitlist"
          />
        </div>
      </main>
    </>
  )
}
