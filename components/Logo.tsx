'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  size?: number
  showText?: boolean
}

export default function Logo({ size = 40, showText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      {/* SVG Logo */}
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="cursor-pointer"
      >
        <defs>
          {/* 主渐变 */}
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a5b4fc">
              <animate
                attributeName="stop-color"
                values="#a5b4fc;#c4b5fd;#f9a8d4;#a5b4fc"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#c4b5fd">
              <animate
                attributeName="stop-color"
                values="#c4b5fd;#f9a8d4;#a5b4fc;#c4b5fd"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#f9a8d4">
              <animate
                attributeName="stop-color"
                values="#f9a8d4;#a5b4fc;#c4b5fd;#f9a8d4"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>

          {/* 辉光效果 */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* 外圈 - 音波圆环 */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
          filter="url(#glow)"
        >
          <animate
            attributeName="r"
            values="45;48;45"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>

        {/* 中圈 */}
        <circle
          cx="50"
          cy="50"
          r="35"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />

        {/* A 字母 - 主形状 */}
        <g filter="url(#glow)">
          {/* 左侧竖线 */}
          <path
            d="M 35 70 L 50 30 L 50 30"
            stroke="url(#logoGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />

          {/* 右侧竖线 */}
          <path
            d="M 65 70 L 50 30"
            stroke="url(#logoGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />

          {/* 横线 */}
          <path
            d="M 40 55 L 60 55"
            stroke="url(#logoGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* 音符装饰 - 小圆点 */}
        <circle cx="30" cy="35" r="3" fill="url(#logoGradient)" opacity="0.8">
          <animate
            attributeName="cy"
            values="35;30;35"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="70" cy="35" r="3" fill="url(#logoGradient)" opacity="0.8">
          <animate
            attributeName="cy"
            values="35;30;35"
            dur="1.5s"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </circle>

        <circle cx="50" cy="20" r="3" fill="url(#logoGradient)" opacity="0.8">
          <animate
            attributeName="cy"
            values="20;15;20"
            dur="1.5s"
            repeatCount="indefinite"
            begin="0.25s"
          />
        </circle>

        {/* 音波线 */}
        <g opacity="0.6">
          <line
            x1="20"
            y1="50"
            x2="20"
            y2="60"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <animate
              attributeName="y1"
              values="50;45;50"
              dur="0.8s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y2"
              values="60;55;60"
              dur="0.8s"
              repeatCount="indefinite"
            />
          </line>

          <line
            x1="80"
            y1="50"
            x2="80"
            y2="60"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <animate
              attributeName="y1"
              values="50;45;50"
              dur="0.8s"
              repeatCount="indefinite"
              begin="0.4s"
            />
            <animate
              attributeName="y2"
              values="60;55;60"
              dur="0.8s"
              repeatCount="indefinite"
              begin="0.4s"
            />
          </line>
        </g>
      </motion.svg>

      {/* Logo 文字 */}
      {showText && (
        <div className="flex flex-col">
          <motion.span
            className="font-black text-2xl bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink"
            whileHover={{ scale: 1.05 }}
          >
            Ace-Step 1.5
          </motion.span>
        </div>
      )}
    </div>
  )
}
