'use client'

import { motion } from 'framer-motion'
import { Check, Zap, Music, Sparkles, Download, Share2 } from 'lucide-react'
import Link from 'next/link'

const freeFeatures = [
  {
    icon: Zap,
    title: 'Instant Generation',
    description: 'Create AI music from text descriptions in seconds',
  },
  {
    icon: Music,
    title: 'Any Genre',
    description: 'Electronic, lo-fi, ambient, rock, classical, and more',
  },
  {
    icon: Sparkles,
    title: 'No Watermark',
    description: 'Download clean tracks without any watermarks',
  },
  {
    icon: Download,
    title: 'Multiple Formats',
    description: 'Export in MP3, WAV, and STEM files',
  },
]

const useCases = [
  'YouTube videos',
  'Podcasts',
  'Social media content',
  'Presentations',
  'Games',
  'Background music',
]

const benefits = [
  '100% free to start',
  'No credit card required',
  'No watermarks on downloads',
  'Royalty-free for personal use',
  'Commercial license available',
  'Unlimited regenerations',
  'High-quality audio (320kbps)',
  'Fast generation (under 30 seconds)',
]

export default function FreePageContent() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-gradient">Free AI Music Generator</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create professional-quality music from text in seconds.
            <br />
            <span className="text-neon-blue font-semibold">No watermark. Royalty-free. No credit card required.</span>
          </p>

          <Link href="/#demo">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-bold text-lg text-white neon-border"
            >
              Start Creating Free Music →
            </motion.button>
          </Link>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {freeFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 neon-border rounded-xl bg-black/30 backdrop-blur-sm"
            >
              <feature.icon className="w-12 h-12 text-neon-blue mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="text-gradient">Perfect for Content Creators</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full neon-border"
              >
                <span className="text-gray-300">{useCase}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="text-gradient">What You Get for Free</span>
          </h2>
          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-neon-blue flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">How to Generate Free AI Music</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Describe Your Music</h3>
              <p className="text-gray-400">Type what you want: &quot;upbeat electronic background music for YouTube videos&quot;</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Generates in Seconds</h3>
              <p className="text-gray-400">Our AI creates a unique track based on your description in under 30 seconds</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-pink to-neon-blue flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Download & Use</h3>
              <p className="text-gray-400">Download your track without watermarks and use it in your projects</p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="p-6 neon-border rounded-xl bg-black/30 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-2">
                Is Ace-Step really free?
              </h3>
              <p className="text-gray-400">
                Yes! Our free tier lets you generate unlimited AI music tracks with no watermarks. You can use them for personal projects, YouTube videos (with attribution), and social media content at no cost.
              </p>
            </div>
            <div className="p-6 neon-border rounded-xl bg-black/30 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-2">
                Can I use free music for YouTube monetization?
              </h3>
              <p className="text-gray-400">
                Free tier music can be used on YouTube with attribution. For monetized channels and commercial use, we offer affordable Pro and Enterprise plans with full commercial licenses.
              </p>
            </div>
            <div className="p-6 neon-border rounded-xl bg-black/30 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-2">
                What&apos;s the catch?
              </h3>
              <p className="text-gray-400">
                No catch! We believe in making AI music accessible to everyone. Free users get high-quality 320kbps MP3 downloads. Pro users get additional formats (WAV, STEM) and commercial licenses.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <div className="p-12 neon-border rounded-2xl bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Create Your First Track?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of content creators using free AI music
            </p>
            <Link href="/#demo">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-bold text-lg text-white"
              >
                Start Creating Free →
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
