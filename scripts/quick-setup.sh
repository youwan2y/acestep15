#!/bin/bash

# SQL 创建表语句
SQL=$(cat <<'EOF'
-- 创建 uuid-ossp 扩展
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
EOF
)

echo "🚀 正在设置数据库..."
echo ""
echo "📋 SQL 已复制到剪贴板！"
echo ""

# 复制 SQL 到剪贴板
if command -v pbcopy &> /dev/null; then
  echo "$SQL" | pbcopy
  echo "✅ SQL 已复制到剪贴板（macOS）"
elif command -v xclip &> /dev/null; then
  echo "$SQL" | xclip -selection clipboard
  echo "✅ SQL 已复制到剪贴板（Linux）"
elif command -v clip.exe &> /dev/null; then
  echo "$SQL" | clip.exe
  echo "✅ SQL 已复制到剪贴板（Windows）"
else
  echo "⚠️  无法自动复制到剪贴板，请手动复制下面的 SQL"
fi

echo ""
echo "🌐 正在打开 Supabase SQL Editor..."
echo ""

# 打开 Supabase SQL Editor
if command -v open &> /dev/null; then
  open "https://supabase.com/dashboard/project/nfmdyerjomsrwxijlhpf/sql/new"
elif command -v xdg-open &> /dev/null; then
  xdg-open "https://supabase.com/dashboard/project/nfmdyerjomsrwxijlhpf/sql/new"
elif command -v start &> /dev/null; then
  start "https://supabase.com/dashboard/project/nfmdyerjomsrwxijlhpf/sql/new"
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "操作步骤："
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. ✅ SQL 已复制到剪贴板"
echo "2. ✅ Supabase SQL Editor 已打开"
echo "3. 👉 在编辑器中粘贴（Cmd+V 或 Ctrl+V）"
echo "4. 👉 点击 'Run' 按钮执行"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "如果剪贴板复制失败，请手动复制以下 SQL:"
echo ""
echo "$SQL"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
