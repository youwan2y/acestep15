'use client'

import { motion } from 'framer-motion'
import { PenTool, Settings, Rocket } from 'lucide-react'

const steps = [
  {
    icon: PenTool,
    step: '01',
    title: 'Describe Your Vision',
    description: 'Simply describe the music you want to create using natural language. Specify genre, mood, tempo, and instruments.',
  },
  {
    icon: Settings,
    step: '02',
    title: 'Fine-Tune Parameters',
    description: 'Adjust advanced settings like duration, key, BPM, and production style to perfect your track.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Generate & Download',
    description: 'Click generate and let our AI create your music in seconds. Download in high-quality formats.',
  },
]

export default function HowToUseSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent via-black/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">How It Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Create professional music in three simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* 连接线 */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-neon-blue/50 to-transparent" />
              )}

              <div className="text-center">
                {/* 步骤编号 */}
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 rounded-full neon-border flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <item.icon className="w-12 h-12 text-neon-blue" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-white font-bold text-sm">
                    {item.step}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
