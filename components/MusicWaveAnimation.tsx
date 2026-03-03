'use client'

import { motion } from 'framer-motion'

export default function MusicWaveAnimation() {
  const bars = 40

  return (
    <div className="flex items-center justify-center gap-1 h-32 w-full max-w-3xl mx-auto">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-1.5 bg-gradient-to-t from-neon-blue via-neon-purple to-neon-pink rounded-full"
          animate={{
            height: [20, 80, 40, 100, 30, 60, 20],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: i * 0.05,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
