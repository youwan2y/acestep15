'use client'

import { motion } from 'framer-motion'
import MusicWaveAnimation from './MusicWaveAnimation'
import OrbBackground from './OrbBackground'
import EnhancedParticles from './EnhancedParticles'
import BubbleGame from './BubbleGame'
import { Sparkles, Zap, Music } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden px-4">
      {/* Bubble Game - Interactive music note bubbles */}
      <BubbleGame />
      
      {/* Enhanced particle effects */}
      <EnhancedParticles />

      <div className="relative z-10 max-w-6xl mx-auto text-center pt-28">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full neon-border mb-8"
        >
          <Sparkles className="w-4 h-4 text-neon-blue" />
          <span className="text-sm font-medium text-gray-300">Next-Gen AI Music Generation</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black mb-6"
        >
          <span className="text-gradient">Ace-Step 1.5</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          <span className="text-white font-semibold">Free AI music generator</span> - Create professional-quality music from text in seconds.
          <br />
          Royalty-free tracks for videos, YouTube, and content creators. No watermark.
        </motion.p>

        {/* Music wave animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <MusicWaveAnimation />
        </motion.div>

        {/* Feature tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: Zap, text: 'Generate in Seconds' },
            { icon: Music, text: 'Any Genre' },
            { icon: Sparkles, text: 'Free & No Watermark' },
            { icon: Zap, text: 'Royalty-Free' },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full"
            >
              <item.icon className="w-4 h-4 text-neon-blue" />
              <span className="text-sm text-gray-300">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
