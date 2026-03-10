'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Music, Volume2, Mic, Guitar, Piano, Drum } from 'lucide-react'

const musicIcons = [Music, Volume2, Mic, Guitar, Piano, Drum]

// 播放音符音效
const playNoteSound = (index: number) => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()
  
  // 音符频率 (C大调音阶)
  const frequencies = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25]
  oscillator.frequency.value = frequencies[index % frequencies.length]
  oscillator.type = 'sine'
  
  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5)
  
  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)
  
  oscillator.start()
  oscillator.stop(audioContext.currentTime + 0.5)
}

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  icon: React.ElementType
  speed: number
  wobble: number
  wobbleSpeed: number
  opacity: number
}

function Bubble({ bubble, onPop }: { bubble: Bubble; onPop: (id: number, x: number, y: number, size: number) => void }) {
  const Icon = bubble.icon

  return (
    <motion.div
      className="absolute cursor-pointer pointer-events-auto"
      style={{
        left: bubble.x,
        top: bubble.y,
        width: bubble.size,
        height: bubble.size,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        y: -100,
        x: bubble.x + Math.sin(bubble.wobble) * bubble.wobble,
      }}
      transition={{ 
        duration: bubble.speed, 
        repeat: Infinity,
        ease: 'linear',
      }}
      onClick={(e) => {
        e.stopPropagation()
        const rect = (e.target as HTMLElement).getBoundingClientRect()
        onPop(bubble.id, rect.left + rect.width / 2, rect.top + rect.height / 2, bubble.size)
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* 气泡主体 */}
      <div
        className="w-full h-full rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4), rgba(139, 92, 246, 0.2) 50%, rgba(59, 130, 246, 0.1))`,
          border: '2px solid rgba(255, 255, 255, 0.3)',
          boxShadow: `
            0 0 15px rgba(139, 92, 246, 0.3),
            inset 0 -10px 20px rgba(139, 92, 246, 0.1),
            inset 0 10px 20px rgba(255, 255, 255, 0.2)
          `,
          backdropFilter: 'blur(2px)',
        }}
      >
        {/* 高光 */}
        <div 
          className="absolute rounded-full"
          style={{
            top: '15%',
            left: '20%',
            width: '25%',
            height: '15%',
            background: 'rgba(255, 255, 255, 0.6)',
            transform: 'rotate(-30deg)',
          }}
        />
        
        {/* 音符图标 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon 
            className="text-white/70" 
            style={{ width: '45%', height: '45%' }} 
          />
        </div>
      </div>
    </motion.div>
  )
}

interface PopEffect {
  id: number
  x: number
  y: number
  size: number
}

function PopEffect({ effect }: { effect: PopEffect }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: effect.x, top: effect.y }}
      initial={{ scale: 0, opacity: 1 }}
      animate={{ scale: 3, opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* 破裂圆环 */}
      <div 
        className="absolute rounded-full border-2 border-white/80"
        style={{
          width: effect.size,
          height: effect.size,
          left: -effect.size / 2,
          top: -effect.size / 2,
        }}
      />
      {/* 粒子 */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white"
            style={{
              left: 0,
              top: 0,
            }}
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{ 
              x: Math.cos(angle) * 40, 
              y: Math.sin(angle) * 40,
              opacity: 0
            }}
            transition={{ duration: 0.3 }}
          />
        )
      })}
    </motion.div>
  )
}

interface BubbleGameProps {
  isActive?: boolean
}

export default function BubbleGame({ isActive = true }: BubbleGameProps) {
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const [popEffects, setPopEffects] = useState<PopEffect[]>([])
  const [score, setScore] = useState(0)
  const bubbleIdRef = useRef(0)

  // 自然界气泡生成算法
  const createBubble = useCallback(() => {
    const id = ++bubbleIdRef.current
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1000
    
    // 随机大小：大气泡上升慢，小气泡上升快
    // 气泡大小范围 60px - 150px，更明显可见
    const size = 60 + Math.random() * 90
    
    // 起始位置：底部随机位置
    const x = Math.random() * (screenWidth - size)
    
    // 上升速度：大气泡慢，小气泡快
    // 大气泡 15-25秒到达顶部，小气泡 8-15秒
    const speed = 12 + (150 - size) / 90 * 12
    
    // 摆动参数：模拟水的阻力导致的气泡摆动
    const wobble = Math.random() * Math.PI * 2
    const wobbleSpeed = 1 + Math.random() * 2
    
    // 随机选择音符图标
    const icon = musicIcons[Math.floor(Math.random() * musicIcons.length)]
    
    // 透明度：有些气泡更透明
    const opacity = 0.6 + Math.random() * 0.4

    setBubbles(prev => [...prev, { 
      id, 
      x, 
      y: window.innerHeight + 50,
      size, 
      icon, 
      speed, 
      wobble,
      wobbleSpeed,
      opacity
    }])
  }, [])

  // 同步 ref 和 state
  useEffect(() => {
    bubblesRef.current = bubbles
  }, [bubbles])

  // 生成气泡
  const bubblesRef = useRef<Bubble[]>([])
  
  useEffect(() => {
    if (!isActive) return

    // 初始生成几个大气泡
    for (let i = 0; i < 3; i++) {
      setTimeout(() => createBubble(), i * 200)
    }

    // 定期生成新气泡
    const interval = setInterval(() => {
      if (bubblesRef.current.length < 8) {
        createBubble()
      }
    }, 800)

    return () => clearInterval(interval)
  }, [createBubble, isActive])

  // 清理超出屏幕的气泡
  useEffect(() => {
    if (!isActive) return

    const cleanup = setInterval(() => {
      setBubbles(prev => prev.filter(bubble => bubble.y > -150))
    }, 1000)

    return () => clearInterval(cleanup)
  }, [isActive])

  // 更新气泡位置（模拟上升）
  useEffect(() => {
    if (!isActive) return

    const updatePositions = setInterval(() => {
      setBubbles(prev => {
        const screenHeight = window.innerHeight
        return prev.map(bubble => {
          const newY = bubble.y - (screenHeight / bubble.speed / 60)
          return { ...bubble, y: newY }
        }).filter(bubble => bubble.y > -150)
      })
    }, 16) // 约60fps

    return () => clearInterval(updatePositions)
  }, [isActive])

  const handlePop = useCallback((id: number, x: number, y: number, size: number) => {
    // 播放音效
    const iconIndex = bubbles.find(b => b.id === id)
    if (iconIndex) {
      const idx = musicIcons.findIndex(icon => icon === iconIndex.icon)
      playNoteSound(idx >= 0 ? idx : 0)
    }

    // 添加破裂效果
    setPopEffects(prev => [...prev, { id, x, y, size }])
    
    // 增加分数
    setScore(prev => prev + 1)
    
    // 移除气泡
    setBubbles(prev => prev.filter(b => b.id !== id))
    
    // 清理破裂效果
    setTimeout(() => {
      setPopEffects(prev => prev.filter(e => e.id !== id))
    }, 500)
  }, [bubbles])

  if (!isActive) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <AnimatePresence>
        {bubbles.map(bubble => (
          <Bubble key={bubble.id} bubble={bubble} onPop={handlePop} />
        ))}
      </AnimatePresence>
      
      <AnimatePresence>
        {popEffects.map(effect => (
          <PopEffect key={effect.id} effect={effect} />
        ))}
      </AnimatePresence>
    </div>
  )
}
