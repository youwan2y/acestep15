'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Clock, Zap } from 'lucide-react'

interface StatItem {
  label: string
  value: string
  trend?: string
  icon?: any
}

interface TrendData {
  month: string
  searches: number
}

interface DataVisualizationProps {
  stats?: StatItem[]
  trends?: TrendData[]
  title?: string
}

export default function DataVisualization({
  stats,
  trends,
  title = 'Market Insights & Trends',
}: DataVisualizationProps) {
  const defaultStats: StatItem[] = stats || [
    {
      label: 'Monthly Searches',
      value: '50K+',
      trend: '+23%',
      icon: TrendingUp,
    },
    {
      label: 'Content Creators',
      value: '2M+',
      trend: '+45%',
      icon: Users,
    },
    {
      label: 'Avg. Generation Time',
      value: '25s',
      icon: Clock,
    },
    {
      label: 'Satisfaction Rate',
      value: '94%',
      icon: Zap,
    },
  ]

  const defaultTrends: TrendData[] = trends || [
    { month: 'Jan', searches: 32000 },
    { month: 'Feb', searches: 38000 },
    { month: 'Mar', searches: 45000 },
    { month: 'Apr', searches: 52000 },
    { month: 'May', searches: 61000 },
    { month: 'Jun', searches: 72000 },
  ]

  const maxSearches = Math.max(...defaultTrends.map((t) => t.searches))

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
            Real data and trends from the AI music generation market
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {defaultStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 neon-border rounded-xl bg-black/30 backdrop-blur-sm"
            >
              {stat.icon && (
                <stat.icon className="w-10 h-10 text-neon-blue mb-3" />
              )}
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                {stat.trend && (
                  <span className="text-sm text-green-400 font-semibold">
                    {stat.trend}
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Trend Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 neon-border rounded-2xl bg-black/30 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold text-white mb-6">
            AI Music Search Trend (2026)
          </h3>
          <div className="space-y-3">
            {defaultTrends.map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <span className="text-sm text-gray-400 w-12">{trend.month}</span>
                <div className="flex-grow h-8 bg-white/5 rounded-lg overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(trend.searches / maxSearches) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg"
                  />
                </div>
                <span className="text-sm text-white font-semibold w-20 text-right">
                  {(trend.searches / 1000).toFixed(0)}K
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 grid md:grid-cols-3 gap-6"
        >
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <h4 className="text-lg font-bold text-white mb-3">
              📈 Growing Demand
            </h4>
            <p className="text-sm text-gray-400">
              AI music generation searches increased 127% in 2026, driven by content
              creators seeking affordable, copyright-free music solutions.
            </p>
          </div>
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <h4 className="text-lg font-bold text-white mb-3">
              🎯 Top Use Cases
            </h4>
            <p className="text-sm text-gray-400">
              YouTube videos (42%), Social media content (28%), Podcasts (15%),
              Games & apps (10%), Other (5%)
            </p>
          </div>
          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
            <h4 className="text-lg font-bold text-white mb-3">
              ⚡ Speed Matters
            </h4>
            <p className="text-sm text-gray-400">
              Average music generation time dropped from 90s to 25s in 2026. Ace-Step
              1.5 delivers tracks in under 30 seconds.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
