'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface Benefit {
  icon: LucideIcon
  title: string
  description: string
}

interface BenefitsGridProps {
  benefits: Benefit[]
}

export default function BenefitsGrid({ benefits }: BenefitsGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
    >
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="p-6 neon-border rounded-xl bg-black/30 backdrop-blur-sm"
        >
          <benefit.icon className="w-12 h-12 text-neon-blue mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
          <p className="text-gray-400">{benefit.description}</p>
        </div>
      ))}
    </motion.div>
  )
}
