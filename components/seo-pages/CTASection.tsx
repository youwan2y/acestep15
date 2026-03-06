'use client'

import { motion } from 'framer-motion'

interface CTASectionProps {
  title: string
  subtitle: string
  ctaText: string
  ctaHref: string
}

export default function CTASection({ title, subtitle, ctaText, ctaHref }: CTASectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="text-center"
    >
      <div className="p-12 neon-border rounded-2xl bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 backdrop-blur-sm">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-xl text-gray-300 mb-8">{subtitle}</p>
        <a href={ctaHref}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-bold text-lg text-white"
          >
            {ctaText}
          </motion.button>
        </a>
      </div>
    </motion.div>
  )
}
