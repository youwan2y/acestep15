'use client'

import { motion } from 'framer-motion'
import MusicCard from './MusicCard'

const musicExamples = [
  {
    title: 'Energetic Electronic',
    genre: 'Electronic',
    duration: '3:46',
    coverImage: '/images/covers/electronic.jpg',
    audioSrc: '/audio/electronic.mp3',
  },
  {
    title: 'Jazz in the Night',
    genre: 'Jazz',
    duration: '1:50',
    coverImage: '/images/covers/jazz.jpg',
    audioSrc: '/audio/jazz.mp3',
  },
  {
    title: 'Orchestral Epic',
    genre: 'Classical',
    duration: '3:31',
    coverImage: '/images/covers/classical.jpg',
    audioSrc: '/audio/classical.mp3',
  },
  {
    title: 'Lo-Fi Chill Beats',
    genre: 'Lo-Fi',
    duration: '3:39',
    coverImage: '/images/covers/lofi.jpg',
    audioSrc: '/audio/lofi.mp3',
  },
  {
    title: 'Rock Anthem',
    genre: 'Rock',
    duration: '3:23',
    coverImage: '/images/covers/rock.jpg',
    audioSrc: '/audio/rock.mp3',
  },
  {
    title: 'Hip Hop Groove',
    genre: 'Hip Hop',
    duration: '2:01',
    coverImage: '/images/covers/hiphop.jpg',
    audioSrc: '/audio/hiphop.mp3',
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

        {/* Staggered grid layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {musicExamples.map((music, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`${
                index % 2 === 0 ? 'md:-mt-20' : 'md:mt-20'
              }`}
            >
              <MusicCard {...music} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
