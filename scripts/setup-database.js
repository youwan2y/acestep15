#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

// 加载环境变量
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') })

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

async function setupDatabase() {
  console.log('🚀 开始设置 Supabase 数据库...\n')

  if (!SUPABASE_URL) {
    console.error('❌ 错误: 未找到 NEXT_PUBLIC_SUPABASE_URL')
    process.exit(1)
  }

  // 检查是否有 service role key
  if (!SERVICE_ROLE_KEY) {
    console.log('⚠️  需要 Supabase Service Role Key 来创建数据库表')
    console.log('\n📋 请按照以下步骤获取 Service Role Key:')
    console.log('\n1. 访问 Supabase Dashboard:')
    console.log('   👉 https://supabase.com/dashboard/project/nfmdyerjomsrwxijlhpf/settings/api')
    console.log('\n2. 找到 "service_role" key（注意：这个 key 是保密的！）')
    console.log('\n3. 复制 service_role key')
    console.log('\n4. 添加到 .env.local 文件中:')
    console.log('   SUPABASE_SERVICE_ROLE_KEY=你的service_role_key')
    console.log('\n⚠️  重要: service_role key 拥有完全权限，请妥善保管，不要提交到 Git！\n')
    process.exit(1)
  }

  try {
    // 使用 service role key 创建客户端
    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })

    console.log('✅ 已连接到 Supabase\n')

    // 读取 SQL 文件
    const sqlPath = path.join(__dirname, '..', 'supabase', 'waitlist.sql')
    const sql = fs.readFileSync(sqlPath, 'utf8')

    console.log('📝 正在执行 SQL...\n')
    console.log(sql)
    console.log('\n')

    // 使用 Management API 执行 SQL
    const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/exec`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
      },
      body: JSON.stringify({ sql })
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('❌ 执行 SQL 失败:', error)
      console.log('\n💡 尝试使用备用方法...\n')

      // 备用方法：直接创建表
      console.log('请在 Supabase SQL Editor 中手动执行以下 SQL:')
      console.log('👉 https://supabase.com/dashboard/project/nfmdyerjomsrwxijlhpf/sql/new\n')
      console.log(sql)
      process.exit(1)
    }

    console.log('✅ 数据库表创建成功！\n')
    console.log('🎉 Waitlist 功能已准备就绪！')

  } catch (error) {
    console.error('❌ 错误:', error.message)
    console.log('\n请手动在 Supabase SQL Editor 中执行 SQL:')
    console.log('👉 https://supabase.com/dashboard/project/nfmdyerjomsrwxijlhpf/sql/new\n')

    const sqlPath = path.join(__dirname, '..', 'supabase', 'waitlist.sql')
    const sql = fs.readFileSync(sqlPath, 'utf8')
    console.log(sql)

    process.exit(1)
  }
}

setupDatabase()
