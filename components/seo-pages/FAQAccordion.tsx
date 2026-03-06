'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  title?: string
  items: FAQItem[]
}

export default function FAQAccordion({ title = 'Frequently Asked Questions', items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        <span className="text-gradient">{title}</span>
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="neon-border rounded-xl bg-black/30 backdrop-blur-sm overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <h3 className="text-lg font-bold text-white pr-4">{item.question}</h3>
              <ChevronDown
                className={`w-5 h-5 text-neon-blue flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="px-6 pb-6"
              >
                <p className="text-gray-400 leading-relaxed">{item.answer}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}
