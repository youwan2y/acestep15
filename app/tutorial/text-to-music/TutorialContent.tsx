'use client'

import { motion } from 'framer-motion'
import { BookOpen, Sparkles, Zap, Music, Lightbulb, Check } from 'lucide-react'

const promptExamples = [
  {
    category: 'Background Music',
    examples: [
      'Calm ambient background music for meditation videos',
      'Upbeat electronic background music for YouTube tutorials',
      'Soft piano background music for storytelling',
    ],
  },
  {
    category: 'Genre-Specific',
    examples: [
      'Lo-fi hip hop beats for studying',
      'Energetic EDM track with synth melodies',
      'Acoustic guitar folk music with warm tones',
    ],
  },
  {
    category: 'Mood-Based',
    examples: [
      'Uplifting motivational music with orchestral elements',
      'Dark cinematic music for dramatic scenes',
      'Peaceful nature sounds with gentle melodies',
    ],
  },
]

const promptTips = [
  {
    title: 'Be Specific About Genre',
    description: 'Instead of "make music", try "upbeat electronic dance music with synth leads"',
  },
  {
    title: 'Include Tempo & Energy',
    description: 'Add descriptors like "fast-paced", "slow and mellow", "energetic", or "calm"',
  },
  {
    title: 'Specify Instruments',
    description: 'Mention specific instruments: "piano-based", "heavy drums", "synthesizer melodies"',
  },
  {
    title: 'Describe the Mood',
    description: 'Include emotional context: "happy", "melancholic", "epic", "peaceful"',
  },
  {
    title: 'Mention Use Case',
    description: 'Add context: "for YouTube intro", "for podcast background", "for gaming"',
  },
]

const steps = [
  {
    step: 1,
    title: 'Access Ace-Step 1.5',
    description: 'Go to ace-step15.top and navigate to the music generation interface. No sign-up required for basic generation.',
  },
  {
    step: 2,
    title: 'Write Your Text Prompt',
    description: 'Describe the music you want in natural language. Be specific about genre, mood, tempo, and instruments.',
  },
  {
    step: 3,
    title: 'Generate & Preview',
    description: 'Click generate and wait 20-30 seconds. Preview your track and see if it matches your vision.',
  },
  {
    step: 4,
    title: 'Refine & Regenerate',
    description: 'Not perfect? Adjust your prompt with more details or try different descriptors. Regenerate until satisfied.',
  },
  {
    step: 5,
    title: 'Download Your Track',
    description: 'Once happy with the result, download your track in MP3, WAV, or STEM format. No watermark!',
  },
]

export default function TutorialContent() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-neon-blue" />
            <span className="text-sm text-gray-400 uppercase tracking-wider">Tutorial</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-gradient">How to Make Music with AI</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Complete guide to text-to-music AI generation. Learn prompt engineering,
            best practices, and create professional tracks from text descriptions.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>10 min read</span>
            <span>•</span>
            <span>Beginner friendly</span>
            <span>•</span>
            <span>Updated March 2026</span>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-4">What is Text-to-Music AI?</h2>
          <p className="text-gray-300 mb-4">
            Text-to-music AI allows you to generate custom music by describing what you want in plain English.
            Instead of learning complex music production software, you simply type a description like
            &quot;upbeat electronic background music for YouTube videos&quot; and the AI creates a unique track for you.
          </p>
          <p className="text-gray-300">
            <span className="text-neon-blue font-semibold">Ace-Step 1.5</span> is a state-of-the-art
            AI music generation model that can create professional-quality tracks in seconds, completely
            free with no watermarks.
          </p>
        </motion.div>

        {/* Step-by-Step Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            <span className="text-gradient">Step-by-Step Guide</span>
          </h2>
          <div className="space-y-6">
            {steps.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                    <span className="text-lg font-bold text-white">{item.step}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Prompt Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            <span className="text-gradient">Text-to-Music Prompt Examples</span>
          </h2>
          <div className="space-y-6">
            {promptExamples.map((category, index) => (
              <div key={index} className="p-6 neon-border rounded-xl bg-black/30 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-neon-blue mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.examples.map((example, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-neon-purple flex-shrink-0 mt-1" />
                      <code className="text-sm text-gray-300 bg-white/5 px-2 py-1 rounded flex-grow">
                        &quot;{example}&quot;
                      </code>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Prompt Engineering Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            <span className="text-gradient">Prompt Engineering Tips</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {promptTips.map((tip, index) => (
              <div key={index} className="p-4 neon-border rounded-lg bg-black/30">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-neon-blue flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white mb-1">{tip.title}</h3>
                    <p className="text-sm text-gray-400">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Best Practices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            <span className="text-gradient">Best Practices</span>
          </h2>
          <div className="space-y-3">
            {[
              'Start with simple prompts and add detail progressively',
              'Use specific genre names (lo-fi, synthwave, orchestral) rather than vague terms',
              'Include emotional context (happy, dramatic, peaceful, energetic)',
              'Mention instruments you want (piano, guitar, synthesizer, drums)',
              'Specify the use case (background music, intro, outro, transition)',
              'Keep prompts between 10-30 words for best results',
              'Regenerate multiple times to explore variations',
              'Combine unexpected elements for unique sounds',
            ].map((tip, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-neon-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{tip}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Common Mistakes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            <span className="text-gradient">Common Mistakes to Avoid</span>
          </h2>
          <div className="p-6 neon-border rounded-xl bg-red-500/5 backdrop-blur-sm">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span><strong className="text-white">Too vague:</strong> &quot;Make good music&quot; → Be specific</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span><strong className="text-white">Overly long:</strong> Keep prompts concise and focused</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span><strong className="text-white">Conflicting terms:</strong> &quot;Sad happy music&quot; doesn&apos;t work well</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span><strong className="text-white">Expecting vocals:</strong> Ace-Step focuses on instrumental tracks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span><strong className="text-white">One-and-done:</strong> Always try multiple generations</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h2>
          <div className="space-y-4">
            <div className="p-6 neon-border rounded-xl bg-black/30">
              <h3 className="font-bold text-white mb-2">How long should my text prompt be?</h3>
              <p className="text-gray-400">
                Ideally 10-30 words. Long enough to include genre, mood, tempo, and instruments, but short enough to stay focused. Example: &quot;Energetic electronic dance music with synth melodies, fast tempo, perfect for workout videos&quot;
              </p>
            </div>
            <div className="p-6 neon-border rounded-xl bg-black/30">
              <h3 className="font-bold text-white mb-2">Can I generate music with lyrics?</h3>
              <p className="text-gray-400">
                Ace-Step 1.5 specializes in instrumental music. For vocal tracks, you might want to check out Suno or Udio. However, for background music, podcasts, and content creation, instrumental is usually preferred.
              </p>
            </div>
            <div className="p-6 neon-border rounded-xl bg-black/30">
              <h3 className="font-bold text-white mb-2">How do I get consistent results?</h3>
              <p className="text-gray-400">
                Save prompts that work well and use them as templates. Be consistent with your terminology and always include the same key elements: genre + mood + tempo + instruments + use case.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="p-8 neon-border rounded-2xl bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 backdrop-blur-sm text-center">
            <Music className="w-12 h-12 text-neon-blue mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Create Your First AI Track?
            </h2>
            <p className="text-gray-300 mb-6">
              Put your new knowledge into practice. Try these prompt examples now!
            </p>
            <a href="/#waitlist">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-bold text-white"
              >
                Start Creating Music →
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
