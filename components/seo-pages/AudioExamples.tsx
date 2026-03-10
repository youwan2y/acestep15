'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Volume2, Music } from 'lucide-react'

interface AudioExample {
  title: string
  description: string
  prompt: string
  duration: string
  genre: string
  // 在实际应用中,这里应该是真实的音频文件 URL
  audioUrl?: string
}

interface AudioExamplesProps {
  examples: AudioExample[]
  title?: string
}

export default function AudioExamples({ examples, title = 'Listen to AI-Generated Examples' }: AudioExamplesProps) {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const togglePlay = (index: number) => {
    if (playingIndex === index) {
      setPlayingIndex(null)
    } else {
      setPlayingIndex(index)
      // 在实际应用中,这里会播放真实的音频
      // 模拟播放 5 秒后停止
      setTimeout(() => setPlayingIndex(null), 5000)
    }
  }

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">{title}</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Hear real examples of AI-generated music. Click play to listen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="p-6 neon-border rounded-xl bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all h-full flex flex-col">
                {/* Genre Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-neon-blue/20 text-neon-blue rounded-full">
                    {example.genre}
                  </span>
                  <span className="text-sm text-gray-500">{example.duration}</span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-2">{example.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{example.description}</p>

                {/* Prompt */}
                <div className="mb-4 p-3 bg-white/5 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Prompt used:</p>
                  <code className="text-xs text-neon-purple">&quot;{example.prompt}&quot;</code>
                </div>

                {/* Play Button */}
                <motion.button
                  onClick={() => togglePlay(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                    playingIndex === index
                      ? 'bg-neon-purple text-white'
                      : 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {playingIndex === index ? (
                      <motion.div
                        key="pause"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Pause className="w-5 h-5" />
                        <span>Playing...</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="play"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Play className="w-5 h-5" />
                        <span>Play Sample</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* Audio Visualization (Decorative) */}
                <AnimatePresence>
                  {playingIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 flex items-end justify-center gap-1 h-12"
                    >
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            height: [10, 30 + Math.random() * 20, 10],
                          }}
                          transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            delay: i * 0.05,
                          }}
                          className="w-1 bg-gradient-to-t from-neon-blue to-neon-purple rounded-full"
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Decorative Music Note */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0, rotate: 180 }}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-neon-purple rounded-full flex items-center justify-center"
                  >
                    <Music className="w-4 h-4 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-sm">
            🎵 Real audio samples coming soon. These are visual demos - actual AI-generated tracks will be available when Ace-Step 1.5 launches.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
