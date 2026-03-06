'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/seo-pages/HeroSection'
import BenefitsGrid from '@/components/seo-pages/BenefitsGrid'
import StepByStepGuide from '@/components/seo-pages/StepByStepGuide'
import KeywordExamples from '@/components/seo-pages/KeywordExamples'
import FAQAccordion from '@/components/seo-pages/FAQAccordion'
import CTASection from '@/components/seo-pages/CTASection'
import StructuredDataArticle from '@/components/seo-pages/StructuredDataArticle'
import { calmingClassroomMusicConfig } from '@/lib/seo-data'

export default function CalmingClassroomMusicContent() {
  const { hero, benefits, whenToUse, steps, examples, faq } = calmingClassroomMusicConfig

  return (
    <>
      <StructuredDataArticle
        headline="Calming Classroom Music Generator for Teachers"
        description="Generate free calming classroom music with AI. Calm music for classroom independent work, transitions, tests, and brain breaks."
        author="Ace-Step Team"
        datePublished="2026-03-06"
        dateModified="2026-03-06"
      />

      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <HeroSection
            badge={hero.badge}
            title={hero.title}
            subtitle={hero.subtitle}
            stats={hero.stats}
            ctaText={hero.ctaText}
            ctaHref={hero.ctaHref}
          />

          {/* Benefits */}
          <BenefitsGrid benefits={benefits} />

          {/* Science Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16 p-8 neon-border rounded-2xl bg-black/30 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Calming Classroom Music Actually Works
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              It&apos;s not just a feeling — it&apos;s neuroscience. When calm, instrumental music plays,
              the brain receives a signal to slow down. According to Harvard Health research,
              relaxing music can regulate breathing, lower heart rate, and even reduce blood
              pressure. For students, this translates directly into:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { stat: '↓ 65%', label: 'Reduction in anxiety', note: 'with the right calming music' },
                { stat: '↑ 40%', label: 'Improvement in focus', note: 'during independent tasks' },
                { stat: '↓ Outbursts', label: 'Fewer disruptions', note: 'when music signals calm time' },
              ].map((item, i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-neon-blue/10 border border-neon-blue/20">
                  <div className="text-3xl font-black text-neon-blue mb-1">{item.stat}</div>
                  <div className="text-white font-semibold">{item.label}</div>
                  <div className="text-gray-400 text-sm mt-1">{item.note}</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* When To Use Section — unique content competitors don't have */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-2 text-center">
              When to Use Calming Music in Your Classroom
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Match the right music to the right moment — and students self-regulate without being told.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whenToUse.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="p-6 neon-border rounded-xl bg-black/30 backdrop-blur-sm"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.moment}</h3>
                  <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-neon-blue font-semibold">Best type:</span>
                    <span className="text-xs text-gray-300">{item.musicType}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* How It Works */}
          <StepByStepGuide
            title="Generate Your Calming Classroom Music in 3 Steps"
            steps={steps}
          />

          {/* Prompt Examples */}
          <KeywordExamples
            title="Ready-to-Use Classroom Music Prompts"
            examples={examples}
          />

          {/* Music Types Comparison */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-2 text-center">
              Best Types of Calm Music for Classroom Settings
            </h2>
            <p className="text-gray-400 text-center mb-8">
              All of these work — you can generate any of them with Ace-Step.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 px-4 text-neon-blue font-semibold">Music Type</th>
                    <th className="py-3 px-4 text-neon-blue font-semibold">Best For</th>
                    <th className="py-3 px-4 text-neon-blue font-semibold">Tempo</th>
                    <th className="py-3 px-4 text-neon-blue font-semibold">Effect</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: 'Classical (Mozart, Beethoven)', bestFor: 'Independent work, tests', tempo: '60–80 BPM', effect: 'Boosts concentration' },
                    { type: 'Lo-fi Beats', bestFor: 'Group work, homework time', tempo: '70–85 BPM', effect: 'Relaxed focus' },
                    { type: 'Acoustic Guitar', bestFor: 'Morning entry, transitions', tempo: '50–70 BPM', effect: 'Welcoming, calming' },
                    { type: 'Nature Sounds', bestFor: 'Brain breaks, cool-down', tempo: 'N/A', effect: 'Reduces stress, grounds' },
                    { type: 'Soft Ambient', bestFor: 'Assessment / testing', tempo: 'Very slow', effect: 'Reduces test anxiety' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 text-white font-medium">{row.type}</td>
                      <td className="py-3 px-4 text-gray-300">{row.bestFor}</td>
                      <td className="py-3 px-4 text-gray-400">{row.tempo}</td>
                      <td className="py-3 px-4 text-neon-purple text-sm">{row.effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* FAQ */}
          <FAQAccordion items={faq} />

          {/* CTA */}
          <CTASection
            title="Ready to Transform Your Classroom Atmosphere?"
            subtitle="Generate calming classroom music for free — in seconds, not minutes."
            ctaText="Create Calming Classroom Music →"
            ctaHref="/#waitlist"
          />
        </div>
      </main>
    </>
  )
}
