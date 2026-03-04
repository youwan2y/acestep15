import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { serviceKey } = body

    // 验证 service key 是否提供
    if (!serviceKey) {
      return NextResponse.json({
        success: false,
        error: '请提供 Service Role Key'
      }, { status: 400 })
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!

    // 使用 service role key 创建客户端
    const supabase = createClient(supabaseUrl, serviceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })

    // 创建 waitlist 表的 SQL
    const sql = `
      -- 创建 uuid-ossp 扩展（如果不存在）
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

      -- 创建 waitlist 表
      CREATE TABLE IF NOT EXISTS waitlist (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      -- 创建索引
      CREATE INDEX IF NOT EXISTS waitlist_email_idx ON waitlist(email);
      CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON waitlist(created_at);

      -- 启用 RLS
      ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

      -- 删除已存在的策略（如果有）
      DROP POLICY IF EXISTS "Allow anonymous insert" ON waitlist;
      DROP POLICY IF EXISTS "Deny anonymous select" ON waitlist;
      DROP POLICY IF EXISTS "Allow service role select" ON waitlist;

      -- 创建新策略
      CREATE POLICY "Allow anonymous insert" ON waitlist
        FOR INSERT TO anon WITH CHECK (true);

      CREATE POLICY "Deny anonymous select" ON waitlist
        FOR SELECT TO anon USING (false);

      CREATE POLICY "Allow service role select" ON waitlist
        FOR SELECT TO service_role USING (true);
    `

    // 使用 Management API 执行 SQL
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': serviceKey,
        'Authorization': `Bearer ${serviceKey}`,
      },
      body: JSON.stringify({ sql })
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('执行 SQL 失败:', errorText)

      // 如果 RPC 方法不可用，尝试直接使用 Supabase 客户端
      // 测试表是否已存在
      const { error: testError } = await supabase
        .from('waitlist')
        .select('id')
        .limit(1)

      if (testError && testError.code === '42P01') {
        // 表不存在，返回手动执行的说明
        return NextResponse.json({
          success: false,
          error: '自动创建失败，需要手动执行 SQL',
          sql: sql,
          instructions: '请在 Supabase SQL Editor 中手动执行 SQL'
        }, { status: 500 })
      } else if (testError) {
        // 其他错误
        return NextResponse.json({
          success: false,
          error: `数据库错误: ${testError.message}`
        }, { status: 500 })
      }

      // 表已存在
      return NextResponse.json({
        success: true,
        message: '数据库表已存在！'
      })
    }

    return NextResponse.json({
      success: true,
      message: '数据库表创建成功！'
    })

  } catch (error) {
    console.error('设置错误:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '未知错误'
    }, { status: 500 })
  }
}
