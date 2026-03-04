'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function EnhancedParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 8,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `hsl(${200 + Math.random() * 60}, 80%, 70%)`,
            boxShadow: `0 0 ${particle.size * 2}px hsl(${200 + Math.random() * 60}, 80%, 70%)`,
          }}
          animate={{
            y: [0, -1500],
            x: [0, Math.sin(particle.id) * 50],
            opacity: [0, 0.8, 0.4, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
        />
      ))}

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-neon-blue/20 to-transparent" />
    </div>
  )
}
