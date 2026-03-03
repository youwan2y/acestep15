'use client'

import { motion } from 'framer-motion'
import MusicCard from './MusicCard'

const musicExamples = [
  {
    title: 'Energetic Electronic',
    genre: 'Electronic',
    duration: '3:24',
    coverImage: '/images/covers/electronic.webp',
  },
  {
    title: 'Jazz in the Night',
    genre: 'Jazz',
    duration: '4:12',
    coverImage: '/images/covers/jazz.webp',
  },
  {
    title: 'Orchestral Epic',
    genre: 'Classical',
    duration: '5:03',
    coverImage: '/images/covers/classical.webp',
  },
  {
    title: 'Lo-Fi Chill Beats',
    genre: 'Lo-Fi',
    duration: '2:58',
    coverImage: '/images/covers/lofi.webp',
  },
  {
    title: 'Rock Anthem',
    genre: 'Rock',
    duration: '3:45',
    coverImage: '/images/covers/rock.webp',
  },
  {
    title: 'Hip Hop Groove',
    genre: 'Hip Hop',
    duration: '3:31',
    coverImage: '/images/covers/hiphop.webp',
  },
]

export default function ShowcaseSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Real Music Examples</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Listen to tracks created with Ace-Step 1.5
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {musicExamples.map((music, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <MusicCard {...music} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
