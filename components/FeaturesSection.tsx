'use client'

import { motion } from 'framer-motion'
import { Wand2, Sliders, Download, Share2 } from 'lucide-react'

const features = [
  {
    icon: Wand2,
    title: 'AI-Powered Generation',
    description: 'Advanced neural networks create unique, high-quality music based on your descriptions.',
    gradient: 'from-neon-blue to-neon-purple',
  },
  {
    icon: Sliders,
    title: 'Full Customization',
    description: 'Control tempo, mood, instruments, and style with intuitive parameters.',
    gradient: 'from-neon-purple to-neon-pink',
  },
  {
    icon: Download,
    title: 'Studio-Quality Export',
    description: 'Download your tracks in multiple formats including WAV, MP3, and STEM files.',
    gradient: 'from-neon-pink to-neon-blue',
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description: 'Share your creations instantly to social media or collaborate with others.',
    gradient: 'from-neon-blue to-neon-purple',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Powerful Features</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to create professional music
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 neon-border rounded-2xl bg-black/30 backdrop-blur-sm glow-box"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>

              {/* 动画装饰 */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className={`h-1 w-20 bg-gradient-to-r ${feature.gradient} rounded-full`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
