#!/bin/bash

# Supabase 配置
SUPABASE_URL="https://nfmdyerjomsrwxijlhpf.supabase.co"
SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mbWR5ZXJqb21zcnd4aWpsaHBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1OTA0MTgsImV4cCI6MjA4ODE2NjQxOH0.EIL2IvIkFGuE6LVzrJTTgjWt5qcKI7qhHHzzQw-Od7I"

# SQL 创建表语句
SQL=$(cat <<EOF
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS waitlist_email_idx ON waitlist(email);
CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON waitlist(created_at);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow anonymous insert" ON waitlist;
CREATE POLICY "Allow anonymous insert" ON waitlist
  FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS "Deny anonymous select" ON waitlist;
CREATE POLICY "Deny anonymous select" ON waitlist
  FOR SELECT TO anon USING (false);

DROP POLICY IF EXISTS "Allow service role select" ON waitlist;
CREATE POLICY "Allow service role select" ON waitlist
  FOR SELECT TO service_role USING (true);
EOF
)

echo "🚀 正在创建 Supabase 数据库表..."
echo ""
echo "⚠️  注意：由于权限限制，需要手动在 Supabase Dashboard 中执行 SQL"
echo ""
echo "📋 请按照以下步骤操作："
echo ""
echo "1. 打开 Supabase SQL Editor:"
echo "   👉 ${SUPABASE_URL}/project/nfmdyerjomsrwxijlhpf/sql"
echo ""
echo "2. 复制以下 SQL 并粘贴到编辑器中："
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "$SQL"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "3. 点击 'Run' 按钮执行 SQL"
echo ""
echo "✅ 完成后，waitlist 功能就可以使用了！"
