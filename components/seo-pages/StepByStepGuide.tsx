'use client'

import { motion } from 'framer-motion'

interface Step {
  title: string
  description: string
}

interface StepByStepGuideProps {
  title: string
  steps: Step[]
}

export default function StepByStepGuide({ title, steps }: StepByStepGuideProps) {
  const gradients = [
    'from-neon-blue to-neon-purple',
    'from-neon-purple to-neon-pink',
    'from-neon-pink to-neon-blue',
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="text-gradient">{title}</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div
              className={`w-16 h-16 rounded-full bg-gradient-to-br ${
                gradients[index % gradients.length]
              } flex items-center justify-center mx-auto mb-4`}
            >
              <span className="text-2xl font-bold text-white">{index + 1}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
            <p className="text-gray-400">{step.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
