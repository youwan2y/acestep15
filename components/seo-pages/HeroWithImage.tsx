'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface HeroWithImageProps {
  badge?: string
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
  ctaText?: string
  ctaHref?: string
  stats?: Array<{
    value: string
    label: string
  }>
  reversed?: boolean
}

export default function HeroWithImage({
  badge,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  ctaText = 'Get Started',
  ctaHref = '/#waitlist',
  stats,
  reversed = false,
}: HeroWithImageProps) {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:grid-flow-dense' : ''}`}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`${reversed ? 'lg:col-start-2' : ''}`}
          >
            {badge && (
              <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-neon-blue bg-neon-blue/10 rounded-full">
                {badge}
              </span>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="text-gradient">{title}</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {subtitle}
            </p>

            {stats && stats.length > 0 && (
              <div className="grid grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl md:text-3xl font-bold text-neon-blue mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            <motion.a
              href={ctaHref}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-bold text-white neon-border"
            >
              {ctaText}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`relative ${reversed ? 'lg:col-start-1' : ''}`}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden neon-border">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-purple/20 opacity-50" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-neon-blue/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-neon-purple/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
