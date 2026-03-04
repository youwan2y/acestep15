'use client'

import { motion } from 'framer-motion'
import MusicWaveAnimation from './MusicWaveAnimation'
import OrbBackground from './OrbBackground'
import EnhancedParticles from './EnhancedParticles'
import { Sparkles, Zap, Music } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden px-4">
      {/* Orb 能量球背景 */}
      <OrbBackground hue={240} backgroundColor="#0a0a0a" />
      
      {/* 增强粒子效果 */}
      <EnhancedParticles />

      <div className="relative z-10 max-w-6xl mx-auto text-center pt-28">
        {/* 徽章 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full neon-border mb-8"
        >
          <Sparkles className="w-4 h-4 text-neon-blue" />
          <span className="text-sm font-medium text-gray-300">Next-Gen AI Music Generation</span>
        </motion.div>

        {/* 标题 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black mb-6"
        >
          <span className="text-gradient">Ace-Step 1.5</span>
        </motion.h1>

        {/* 副标题 */}
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

        {/* 音乐波形动画 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <MusicWaveAnimation />
        </motion.div>

        {/* 输入框 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Describe the music you want: e.g., 'upbeat background music for YouTube video'..."
              className="w-full px-6 py-4 bg-black/50 backdrop-blur-sm neon-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
            />
            <motion.a
              href="#waitlist"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Waitlist
            </motion.a>
          </div>
        </motion.div>

        {/* 特性标签 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
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

      {/* 底部渐变 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
