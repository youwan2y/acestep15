'use client'

import { motion } from 'framer-motion'
import { Quote, Star, TrendingUp, Video, Music, Mic } from 'lucide-react'

interface CaseStudy {
  name: string
  role: string
  avatar?: string
  platform: string
  stats: {
    label: string
    value: string
  }[]
  quote: string
  beforeAfter?: {
    before: string
    after: string
  }
  icon?: any
}

interface CaseStudiesProps {
  studies: CaseStudy[]
  title?: string
}

export default function CaseStudies({ studies, title = 'Success Stories' }: CaseStudiesProps) {
  const iconMap: { [key: string]: any } = {
    video: Video,
    music: Music,
    podcast: Mic,
  }

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">{title}</span>
          </h2>
          <p className="text-gray-400 text-lg">
            See how creators are using Ace-Step to grow their channels
          </p>
        </motion.div>

        <div className="space-y-8">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="p-8 neon-border rounded-2xl bg-gradient-to-br from-black/40 via-black/30 to-black/40 backdrop-blur-sm"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* User Info & Quote */}
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    {study.icon && (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center flex-shrink-0">
                        <study.icon className="w-6 h-6 text-white" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-white">{study.name}</h3>
                      <p className="text-gray-400">{study.role}</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-neon-blue/20" />
                    <blockquote className="text-gray-300 text-lg pl-6 italic">
                      &quot;{study.quote}&quot;
                    </blockquote>
                  </div>

                  {study.beforeAfter && (
                    <div className="mt-6 grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                        <p className="text-sm text-red-400 font-semibold mb-1">Before Ace-Step:</p>
                        <p className="text-sm text-gray-300">{study.beforeAfter.before}</p>
                      </div>
                      <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <p className="text-sm text-green-400 font-semibold mb-1">After Ace-Step:</p>
                        <p className="text-sm text-gray-300">{study.beforeAfter.after}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Stats */}
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <p className="text-xs text-gray-500 mb-1">Platform</p>
                    <p className="text-lg font-bold text-white">{study.platform}</p>
                  </div>
                  {study.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <p className="text-xs text-gray-500">{stat.label}</p>
                      </div>
                      <p className="text-2xl font-bold text-neon-blue">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">
            Join thousands of creators already using Ace-Step
          </p>
          <a href="/#waitlist">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-bold text-white"
            >
              Start Your Success Story →
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
