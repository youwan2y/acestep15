-- 在 Supabase SQL Editor 中执行以下脚本

-- 创建 waitlist 表
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 创建索引以提高查询性能
CREATE INDEX IF NOT EXISTS waitlist_email_idx ON waitlist(email);
CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON waitlist(created_at);

-- 启用 Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- 创建策略：允许匿名插入（用于公开的 waitlist 注册）
CREATE POLICY "Allow anonymous insert" ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- 创建策略：禁止匿名读取（保护用户隐私）
CREATE POLICY "Deny anonymous select" ON waitlist
  FOR SELECT
  TO anon
  USING (false);

-- 创建策略：允许服务端读取（用于管理员查看）
CREATE POLICY "Allow service role select" ON waitlist
  FOR SELECT
  TO service_role
  USING (true);

-- 创建更新时间触发器函数
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 创建触发器
DROP TRIGGER IF EXISTS update_waitlist_updated_at ON waitlist;
CREATE TRIGGER update_waitlist_updated_at
  BEFORE UPDATE ON waitlist
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 注释
COMMENT ON TABLE waitlist IS '等待列表用户信息';
COMMENT ON COLUMN waitlist.email IS '用户邮箱地址';
COMMENT ON COLUMN waitlist.name IS '用户姓名（可选）';
COMMENT ON COLUMN waitlist.created_at IS '创建时间';
COMMENT ON COLUMN waitlist.updated_at IS '更新时间';
