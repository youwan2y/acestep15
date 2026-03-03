'use client'

import { motion } from 'framer-motion'

const trustedBy = [
  'TechCrunch',
  'The Verge',
  'Wired',
  'Forbes',
  'VentureBeat',
]

export default function TrustSection() {
  return (
    <section className="py-16 px-4 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mb-8"
        >
          Featured In
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {trustedBy.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-2xl font-bold text-gray-600 hover:text-gray-400 transition-colors cursor-pointer"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
