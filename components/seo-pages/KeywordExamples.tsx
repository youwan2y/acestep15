'use client'

import { motion } from 'framer-motion'
import { Sparkles, Copy, Check } from 'lucide-react'
import { useState } from 'react'

interface KeywordExample {
  keyword: string
  prompt: string
  difficulty: 'easy' | 'medium' | 'advanced'
}

interface KeywordExamplesProps {
  title: string
  examples: KeywordExample[]
}

const difficultyColors = {
  easy: 'bg-green-500/20 text-green-400 border-green-500/30',
  medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  advanced: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
}

export default function KeywordExamples({ title, examples }: KeywordExamplesProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = async (prompt: string, index: number) => {
    await navigator.clipboard.writeText(prompt)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        <span className="text-gradient">{title}</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map((example, index) => (
          <div
            key={index}
            className="p-6 neon-border rounded-xl bg-black/30 backdrop-blur-sm hover:border-neon-blue/50 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-neon-purple" />
                <span className="text-sm font-semibold text-gray-300">
                  {example.keyword}
                </span>
              </div>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full border ${
                  difficultyColors[example.difficulty]
                }`}
              >
                {example.difficulty}
              </span>
            </div>

            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              &quot;{example.prompt}&quot;
            </p>

            <button
              onClick={() => handleCopy(example.prompt, index)}
              className="flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors text-sm font-medium"
            >
              {copiedIndex === index ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Prompt</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
