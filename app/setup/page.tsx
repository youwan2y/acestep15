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
      setMessage('请输入 Service Role Key')
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
        setMessage('✅ 数据库表创建成功！Waitlist 功能已就绪！')
        setServiceKey('')
      } else {
        setStatus('error')
        setMessage(data.error || '创建失败，请检查 Service Role Key 是否正确')
      }
    } catch (error) {
      setStatus('error')
      setMessage('网络错误，请稍后重试')
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
            <h1 className="text-3xl font-bold text-gradient mb-2">数据库设置</h1>
            <p className="text-gray-400">自动创建 Waitlist 数据库表</p>
          </div>

          {/* Instructions */}
          <div className="bg-white/5 rounded-xl p-6 mb-6 border border-white/10">
            <div className="flex items-start gap-3 mb-4">
              <Key className="w-5 h-5 text-neon-blue mt-0.5" />
              <div>
                <h3 className="font-semibold text-white mb-2">获取 Service Role Key</h3>
                <ol className="text-sm text-gray-300 space-y-2">
                  <li>1. 访问 Supabase Dashboard API 设置页面</li>
                  <li>2. 找到 <code className="bg-white/10 px-2 py-0.5 rounded">service_role</code> key</li>
                  <li>3. 复制并粘贴到下方输入框</li>
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
              打开 Supabase API 设置
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
                正在创建数据库表...
              </>
            ) : (
              <>
                <Database className="w-5 h-5" />
                创建数据库表
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
              ⚠️ <strong>安全提示：</strong>Service Role Key 拥有完全权限，请勿分享或提交到公开代码库。
              此页面仅在设置时使用，设置完成后请删除此页面。
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
