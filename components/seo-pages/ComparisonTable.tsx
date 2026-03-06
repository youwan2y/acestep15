'use client'

import { motion } from 'framer-motion'
import { CheckCircle, XCircle, Minus } from 'lucide-react'

interface ComparisonRow {
  feature: string
  tool1: string
  tool2: string
  tool1Wins: boolean | null
}

interface ComparisonTableProps {
  title: string
  tool1: string
  tool2: string
  rows: ComparisonRow[]
}

export default function ComparisonTable({ title, tool1, tool2, rows }: ComparisonTableProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold text-white text-center mb-8">{title}</h2>
      <div className="overflow-x-auto rounded-xl neon-border bg-black/30 backdrop-blur-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-4 text-gray-400 font-semibold w-1/3">Feature</th>
              <th className="text-center p-4 w-1/3">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-bold bg-neon-blue/20 text-neon-blue border border-neon-blue/30">
                  {tool1}
                </span>
              </th>
              <th className="text-center p-4 w-1/3">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-bold bg-white/10 text-gray-300 border border-white/20">
                  {tool2}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className={`border-b border-white/5 transition-colors hover:bg-white/5 ${
                  row.tool1Wins === true ? 'bg-neon-blue/5' : ''
                }`}
              >
                <td className="p-4 text-gray-300 font-medium">{row.feature}</td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    {row.tool1Wins === true ? (
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    ) : row.tool1Wins === false ? (
                      <Minus className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    ) : null}
                    <span
                      className={`text-sm ${
                        row.tool1Wins === true
                          ? 'text-green-300 font-semibold'
                          : 'text-gray-400'
                      }`}
                    >
                      {row.tool1}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    {row.tool1Wins === false ? (
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    ) : row.tool1Wins === true ? (
                      <XCircle className="w-4 h-4 text-red-400/60 flex-shrink-0" />
                    ) : null}
                    <span
                      className={`text-sm ${
                        row.tool1Wins === false ? 'text-green-300 font-semibold' : 'text-gray-500'
                      }`}
                    >
                      {row.tool2}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center text-sm text-gray-500 mt-3">
        Data based on public information as of March 2026. Features subject to change.
      </p>
    </motion.section>
  )
}
