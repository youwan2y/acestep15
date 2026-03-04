'use client'

import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import React from 'react'

interface MusicCardProps {
  title: string
  genre: string
  duration: string
  coverImage?: string
  audioSrc?: string
}

export default function MusicCard({ title, genre, duration, coverImage, audioSrc }: MusicCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleEnded = () => setIsPlaying(false)
    audio.addEventListener('ended', handleEnded)
    return () => audio.removeEventListener('ended', handleEnded)
  }, [])

  return (
    <motion.div
      className="group relative neon-border rounded-xl overflow-hidden bg-black/50 backdrop-blur-sm p-4 glow-box"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {audioSrc && <audio ref={audioRef} src={audioSrc} preload="metadata" />}
      {/* Cover */}
      <div className="relative aspect-square mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-pink/20">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={`${title} cover`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
            priority={false}
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/20 to-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (audioRef.current) {
                if (isPlaying) {
                  audioRef.current.pause()
                } else {
                  audioRef.current.play()
                }
                setIsPlaying(!isPlaying)
              }
            }}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white ml-1" />
            )}
          </motion.div>
        </div>

        {/* Music wave indicator */}
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

      {/* Info */}
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
