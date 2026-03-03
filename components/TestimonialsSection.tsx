'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Alex Thompson',
    role: 'Music Producer',
    content: 'Ace-Step 1.5 has completely transformed my workflow. The quality of generated music is incredible!',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Content Creator',
    content: 'Finally, an AI music tool that understands creative vision. Perfect for my YouTube videos.',
    rating: 5,
  },
  {
    name: 'Marcus Williams',
    role: 'Indie Artist',
    content: 'The customization options are amazing. I can create unique sounds that match my style perfectly.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
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
            <span className="text-gradient">What Creators Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied musicians and creators
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 neon-border rounded-2xl bg-black/30 backdrop-blur-sm"
            >
              {/* 引号图标 */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-neon-blue/20" />

              {/* 评分 */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* 内容 */}
              <p className="text-gray-300 mb-6">{testimonial.content}</p>

              {/* 用户信息 */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple" />
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
