'use client'

import { motion } from 'framer-motion'

interface OrbProps {
  /** 轨道颜色，0-360 色相值 */
  hue?: number
  /** 悬浮时的旋转速度 */
  rotateOnHover?: boolean
  /** 背景颜色 */
  backgroundColor?: string
}

export default function Orb({
  hue = 0,
  rotateOnHover = true,
  backgroundColor = 'transparent'
}: OrbProps) {
  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ backgroundColor }}
    >
      {/* 主能量球 */}
      <motion.div
        className="absolute w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 30%, 
            hsl(${hue + 30}, 100%, 70%), 
            hsl(${hue + 15}, 100%, 50%), 
            hsl(${hue}, 80%, 40%), 
            hsl(${hue - 15}, 60%, 30%))`,
          filter: 'blur(40px)',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          x: [0, 30, -20, 10, 0],
          y: [0, -20, 30, -10, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 第二个能量球 - 辅助色 */}
      <motion.div
        className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full"
        style={{
          background: `radial-gradient(circle at 40% 40%, 
            hsl(${hue + 180}, 70%, 65%), 
            hsl(${hue + 160}, 60%, 45%))`,
          filter: 'blur(50px)',
          left: '20%',
          top: '60%',
        }}
        animate={{
          x: [0, -40, 20, -10, 0],
          y: [0, 30, -40, 20, 0],
          scale: [1, 1.15, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* 第三个能量球 - 强调色 */}
      <motion.div
        className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            hsl(${hue + 60}, 80%, 60%), 
            hsl(${hue + 40}, 70%, 40%))`,
          filter: 'blur(35px)',
          right: '10%',
          top: '20%',
        }}
        animate={{
          x: [0, 25, -30, 15, 0],
          y: [0, -25, 35, -15, 0],
          scale: [1, 0.9, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
      />

      {/* 光晕层 */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 50%, transparent 0%, transparent 40%, ${backgroundColor} 100%)
          `,
        }}
      />
    </div>
  )
}
