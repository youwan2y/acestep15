'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Is Ace-Step 1.5 free to use?',
    answer: 'Yes! Ace-Step 1.5 offers a free tier that lets you generate AI music at no cost. You can create professional-quality tracks from text descriptions without watermarks. Our free plan is perfect for content creators, YouTubers, and musicians exploring AI music generation.',
  },
  {
    question: 'How does text to music AI work?',
    answer: 'Simply describe the music you want using natural language (e.g., "upbeat electronic background music for YouTube videos"), specify parameters like genre, mood, and tempo, and our AI will generate a unique track. You can then customize and download it in various formats including WAV, MP3, and STEM files.',
  },
  {
    question: 'Can I use Ace-Step music for YouTube and commercial projects?',
    answer: 'Yes! All music generated with Ace-Step 1.5 is royalty-free. Free tier users can use music for personal projects and YouTube (with attribution), while Pro and Enterprise plans include full commercial licenses for monetized content, client work, and business use.',
  },
  {
    question: 'What music genres can I create?',
    answer: 'Ace-Step 1.5 supports a wide range of genres including electronic, jazz, classical, rock, hip-hop, lo-fi, ambient, background music, and many more. You can also blend genres to create unique sounds. Perfect for videos, podcasts, games, and any content that needs custom music.',
  },
  {
    question: 'Ace-Step vs Suno vs Udio - How does it compare?',
    answer: 'Ace-Step 1.5 stands out with its text-to-music accuracy, free tier with no watermarks, and faster generation times. While Suno and Udio focus on vocal tracks, Ace-Step excels at instrumental background music perfect for content creators. Our open-source model also means continuous community improvements.',
  },
  {
    question: 'When will Ace-Step 1.5 be available?',
    answer: "We're currently in final development stages. Sign up for our newsletter to be notified when we launch and get early access to the platform. Early subscribers will receive extended free credits and priority access to new features.",
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
