'use client'

import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'
import { useState } from 'react'

interface MusicCardProps {
  title: string
  genre: string
  duration: string
  coverImage?: string
}

export default function MusicCard({ title, genre, duration, coverImage }: MusicCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <motion.div
      className="group relative neon-border rounded-xl overflow-hidden bg-black/50 backdrop-blur-sm p-4 glow-box"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* 封面 */}
      <div className="relative aspect-square mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-pink/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white ml-1" />
            )}
          </motion.div>
        </div>

        {/* 音乐波形指示器 */}
        {isPlaying && (
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-0.5">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="flex-1 h-8 bg-neon-blue/50 rounded-full"
                animate={{
                  scaleY: [1, 2, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: i * 0.05,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* 信息 */}
      <div>
        <h3 className="font-bold text-white mb-1 truncate">{title}</h3>
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span className="text-neon-blue">{genre}</span>
          <span>{duration}</span>
        </div>
      </div>
    </motion.div>
  )
}
