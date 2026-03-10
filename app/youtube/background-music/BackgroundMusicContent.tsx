'use client'

import HeroSection from '@/components/seo-pages/HeroSection'
import BenefitsGrid from '@/components/seo-pages/BenefitsGrid'
import StepByStepGuide from '@/components/seo-pages/StepByStepGuide'
import KeywordExamples from '@/components/seo-pages/KeywordExamples'
import FAQAccordion from '@/components/seo-pages/FAQAccordion'
import CTASection from '@/components/seo-pages/CTASection'
import StructuredDataArticle from '@/components/seo-pages/StructuredDataArticle'
import AudioExamples from '@/components/seo-pages/AudioExamples'
import CaseStudies from '@/components/seo-pages/CaseStudies'
import DataVisualization from '@/components/seo-pages/DataVisualization'
import ImageGallery from '@/components/seo-pages/ImageGallery'
import { youTubeBackgroundMusicConfig } from '@/lib/seo-data'
import { audioExamplesData, caseStudiesData, dataVisualizationData } from '@/lib/seo-enhanced-data'
import { seoImages } from '@/lib/seo-images'

export default function BackgroundMusicContent() {
  return (
    <>
      <StructuredDataArticle
        headline="Free YouTube Background Music No Copyright - AI Music Generator"
        description="Download free AI-generated background music for YouTube videos. No copyright claims, royalty-free, monetization-safe."
        author="Ace-Step Team"
        datePublished="2026-03-05"
        dateModified="2026-03-05"
      />

      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <HeroSection
            badge={youTubeBackgroundMusicConfig.hero.badge}
            title={youTubeBackgroundMusicConfig.hero.title}
            subtitle={youTubeBackgroundMusicConfig.hero.subtitle}
            stats={youTubeBackgroundMusicConfig.hero.stats}
            ctaText={youTubeBackgroundMusicConfig.hero.ctaText}
            ctaHref={youTubeBackgroundMusicConfig.hero.ctaHref}
          />

          {/* Benefits Grid */}
          <BenefitsGrid benefits={youTubeBackgroundMusicConfig.benefits} />

          {/* Visual Examples - NEW! */}
          <ImageGallery
            images={seoImages.youtube.gallery}
            title="YouTube Creator Visual Examples"
            columns={3}
          />

          {/* Audio Examples - NEW! */}
          <AudioExamples
            examples={audioExamplesData.youtube}
            title="Listen to Real AI-Generated YouTube Music"
          />

          {/* Data Visualization - NEW! */}
          <DataVisualization
            stats={dataVisualizationData.youtube.stats}
            trends={dataVisualizationData.youtube.trends}
            title="YouTube AI Music Market Insights"
          />

          {/* How It Works */}
          <StepByStepGuide
            title="How to Generate Background Music"
            steps={youTubeBackgroundMusicConfig.steps}
          />

          {/* Case Studies - NEW! */}
          <CaseStudies
            studies={caseStudiesData.youtube}
            title="YouTube Creator Success Stories"
          />

          {/* Prompt Examples */}
          <KeywordExamples
            title="Try These YouTube Music Prompts"
            examples={youTubeBackgroundMusicConfig.examples}
          />

          {/* FAQ */}
          <FAQAccordion items={youTubeBackgroundMusicConfig.faq} />

          {/* CTA */}
          <CTASection
            title="Ready to Create Your YouTube Music?"
            subtitle="Join thousands of YouTubers using AI background music"
            ctaText="Start Creating Free →"
            ctaHref="/#waitlist"
          />
        </div>
      </main>
    </>
  )
}
