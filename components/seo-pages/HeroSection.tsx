'use client'

import { motion } from 'framer-motion'

interface HeroSectionProps {
  badge?: string
  title: string
  subtitle: string
  stats?: {
    value: string
    label: string
  }[]
  ctaText: string
  ctaHref: string
}

export default function HeroSection({
  badge,
  title,
  subtitle,
  stats,
  ctaText,
  ctaHref,
}: HeroSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      {badge && (
        <div className="inline-block px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30">
          <span className="text-sm font-semibold text-neon-blue">{badge}</span>
        </div>
      )}

      <h1 className="text-5xl md:text-7xl font-black mb-6">
        <span className="text-gradient">{title}</span>
      </h1>

      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
        {subtitle}
      </p>

      {stats && stats.length > 0 && (
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-neon-blue mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      <a href={ctaHref}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-bold text-lg text-white neon-border"
        >
          {ctaText}
        </motion.button>
      </a>
    </motion.div>
  )
}
