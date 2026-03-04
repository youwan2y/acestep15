import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

    // 创建 waitlist 表的 SQL
    const createTableSQL = `
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

-- 创建策略
DROP POLICY IF EXISTS "Allow anonymous insert" ON waitlist;
CREATE POLICY "Allow anonymous insert" ON waitlist
  FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS "Deny anonymous select" ON waitlist;
CREATE POLICY "Deny anonymous select" ON waitlist
  FOR SELECT TO anon USING (false);

DROP POLICY IF EXISTS "Allow service role select" ON waitlist;
CREATE POLICY "Allow service role select" ON waitlist
  FOR SELECT TO service_role USING (true);
`

    // 尝试使用 Supabase REST API 执行 SQL
    // 注意：这需要 postgres 权限，通常 anon key 没有这个权限
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`,
      },
      body: JSON.stringify({
        sql: createTableSQL
      })
    })

    if (!response.ok) {
      // 如果失败，返回需要手动执行的提示
      return NextResponse.json({
        success: false,
        needsManualSetup: true,
        message: '需要手动执行 SQL 来创建数据库表',
        sql: createTableSQL,
        instructions: [
          '1. 访问 Supabase SQL Editor:',
          `   ${supabaseUrl.replace('/rest/v1', '')}/project/nfmdyerjomsrwxijlhpf/sql`,
          '2. 复制上面的 SQL 语句',
          '3. 粘贴到编辑器中并点击 Run'
        ]
      }, { status: 200 })
    }

    return NextResponse.json({
      success: true,
      message: '数据库表创建成功！'
    })
  } catch (error) {
    console.error('初始化错误:', error)
    return NextResponse.json({
      success: false,
      needsManualSetup: true,
      message: '需要手动执行 SQL 来创建数据库表',
      error: error instanceof Error ? error.message : '未知错误'
    }, { status: 200 })
  }
}
