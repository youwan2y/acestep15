'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, AlertCircle, Loader2, Database, Key, ExternalLink } from 'lucide-react'

export default function SetupPage() {
  const [serviceKey, setServiceKey] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSetup = async () => {
    if (!serviceKey.trim()) {
      setStatus('error')
      setMessage('Please enter Service Role Key')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/setup-database', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ serviceKey }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
        setMessage('✅ Database table created successfully! Waitlist feature is ready!')
        setServiceKey('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Creation failed, please check if Service Role Key is correct')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Network error, please try again later')
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full"
      >
        <div className="neon-border rounded-3xl bg-gradient-to-br from-black/80 via-black/60 to-black/80 backdrop-blur-xl p-12 glow-box">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple mb-4"
            >
              <Database className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-gradient mb-2">Database Setup</h1>
            <p className="text-gray-400">Automatically create Waitlist database table</p>
          </div>

          {/* Instructions */}
          <div className="bg-white/5 rounded-xl p-6 mb-6 border border-white/10">
            <div className="flex items-start gap-3 mb-4">
              <Key className="w-5 h-5 text-neon-blue mt-0.5" />
              <div>
                <h3 className="font-semibold text-white mb-2">Get Service Role Key</h3>
                <ol className="text-sm text-gray-300 space-y-2">
                  <li>1. Visit Supabase Dashboard API settings page</li>
                  <li>2. Find the <code className="bg-white/10 px-2 py-0.5 rounded">service_role</code> key</li>
                  <li>3. Copy and paste it into the input box below</li>
                </ol>
              </div>
            </div>

            <a
              href="https://supabase.com/dashboard/project/nfmdyerjomsrwxijlhpf/settings/api"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Open Supabase API Settings
            </a>
          </div>

          {/* Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Service Role Key
            </label>
            <input
              type="password"
              value={serviceKey}
              onChange={(e) => setServiceKey(e.target.value)}
              placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
              disabled={status === 'loading'}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue/50 focus:ring-2 focus:ring-neon-blue/20 transition-all disabled:opacity-50 font-mono text-sm"
            />
          </div>

          {/* Button */}
          <motion.button
            onClick={handleSetup}
            disabled={status === 'loading'}
            whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
            whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
            className="w-full px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Creating database table...
              </>
            ) : (
              <>
                <Database className="w-5 h-5" />
                Create Database Table
              </>
            )}
          </motion.button>

          {/* Status Message */}
          {status !== 'idle' && status !== 'loading' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 flex items-center justify-center gap-2 ${
                status === 'success' ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {status === 'success' ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              <span className="text-sm">{message}</span>
            </motion.div>
          )}

          {/* Warning */}
          <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <p className="text-xs text-yellow-400">
              ⚠️ <strong>Security Warning:</strong> Service Role Key has full permissions. Do not share or commit it to public repositories.
              This page is for setup only, please delete it after completion.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
