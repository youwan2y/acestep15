#!/bin/bash

echo "🚀 自动设置 Supabase 数据库"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "我需要你的数据库密码来自动创建表。"
echo ""
echo "📋 步骤 1: 获取数据库密码"
echo ""
echo "1. 正在打开 Supabase Database Settings..."
echo "2. 找到 'Connection string' 部分"
echo "3. 复制方括号中的密码部分"
echo ""

# 打开 Supabase Database Settings
open "https://supabase.com/dashboard/project/nfmdyerjomsrwxijlhpf/settings/database"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "⏳ 请在打开的页面中找到数据库密码，然后输入："
echo ""
echo "提示：密码在 'Connection string' 中，格式如下："
echo "postgresql://postgres.[project]:[密码]@..."
echo "                              ^^^^"
echo "                              复制这部分"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 等待用户输入密码
read -s -p "请粘贴数据库密码（不会显示）: " DB_PASSWORD
echo ""
echo ""

if [ -z "$DB_PASSWORD" ]; then
    echo "❌ 密码不能为空"
    exit 1
fi

echo "✅ 密码已接收"
echo ""
echo "🔐 正在连接数据库并创建表..."
echo ""

# 使用 Node.js 脚本连接数据库
node -e "
const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://postgres.nfmdyerjomsrwxijlhpf:${DB_PASSWORD}@aws-0-us-east-1.pooler.supabase.com:6543/postgres'
});

async function setup() {
  try {
    await client.connect();
    console.log('✅ 已连接到数据库');
    console.log('');

    const sql = \`
-- 创建 uuid-ossp 扩展
CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";

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
DROP POLICY IF EXISTS \"Allow anonymous insert\" ON waitlist;
CREATE POLICY \"Allow anonymous insert\" ON waitlist
  FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS \"Deny anonymous select\" ON waitlist;
CREATE POLICY \"Deny anonymous select\" ON waitlist
  FOR SELECT TO anon USING (false);

DROP POLICY IF EXISTS \"Allow service role select\" ON waitlist;
CREATE POLICY \"Allow service role select\" ON waitlist
  FOR SELECT TO service_role USING (true);
\`;

    await client.query(sql);
    console.log('✅ 数据库表创建成功！');
    console.log('');
    console.log('🎉 Waitlist 功能已完全就绪！');
    console.log('');
    console.log('现在你可以运行: npm run dev');

  } catch (error) {
    console.error('❌ 错误:', error.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

setup();
"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
