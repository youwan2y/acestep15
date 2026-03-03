'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is Ace-Step 1.5?',
    answer: 'Ace-Step 1.5 is an advanced AI music generation model that creates professional-quality music based on your descriptions. It uses cutting-edge neural networks to compose unique tracks in seconds.',
  },
  {
    question: 'How does it work?',
    answer: 'Simply describe the music you want to create using natural language, specify parameters like genre, mood, and tempo, and our AI will generate a unique track for you. You can then customize and download it in various formats.',
  },
  {
    question: 'What music genres can I create?',
    answer: 'Ace-Step 1.5 supports a wide range of genres including electronic, jazz, classical, rock, hip-hop, lo-fi, and many more. You can also blend genres to create unique sounds.',
  },
  {
    question: 'Can I use the generated music commercially?',
    answer: 'Commercial usage rights depend on your subscription plan. Free plan users can use music for personal projects only, while Pro and Enterprise plans include full commercial licenses.',
  },
  {
    question: 'When will Ace-Step 1.5 be available?',
    answer: "We're currently in final development stages. Sign up for our newsletter to be notified when we launch and get early access to the platform.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent via-black/50 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about Ace-Step 1.5
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="neon-border rounded-xl bg-black/30 backdrop-blur-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-neon-blue" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-400">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
