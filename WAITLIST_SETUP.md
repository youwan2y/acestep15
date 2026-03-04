# Waitlist 功能设置指南

## 1. 设置 Supabase 数据库

1. 登录 [Supabase Dashboard](https://supabase.com/dashboard)
2. 选择你的项目：`https://nfmdyerjomsrwxijlhpf.supabase.co`
3. 进入 SQL Editor
4. 复制 `supabase/waitlist.sql` 文件中的内容并执行

或者直接执行以下 SQL：

```sql
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

CREATE POLICY "Allow anonymous insert" ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Deny anonymous select" ON waitlist
  FOR SELECT
  TO anon
  USING (false);

CREATE POLICY "Allow service role select" ON waitlist
  FOR SELECT
  TO service_role
  USING (true);
```

## 2. 环境变量配置

环境变量已经配置在 `.env.local` 文件中：

```env
NEXT_PUBLIC_SUPABASE_URL=https://nfmdyerjomsrwxijlhpf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mbWR5ZXJqb21zcnd4aWpsaHBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1OTA0MTgsImV4cCI6MjA4ODE2NjQxOH0.EIL2IvIkFGuE6LVzrJTTgjWt5qcKI7qhHHzzQw-Od7I
```

## 3. 功能说明

### 已实现的功能

- ✅ 用户可以通过 CTA Section 的表单提交邮箱加入等待列表
- ✅ 自动验证邮箱格式
- ✅ 防止重复邮箱提交
- ✅ 实时显示提交状态（加载中、成功、错误）
- ✅ 数据存储在 Supabase 数据库中
- ✅ Row Level Security 保护数据安全

### API 端点

- `POST /api/waitlist` - 提交邮箱到等待列表
  - Body: `{ "email": "user@example.com", "name": "用户名（可选）" }`

- `GET /api/waitlist` - 获取等待列表人数
  - Response: `{ "count": 123 }`

## 4. 测试功能

1. 启动开发服务器（需要用户许可）
2. 访问首页，滚动到 CTA Section
3. 输入邮箱并点击 "Join Waitlist" 按钮
4. 检查 Supabase Dashboard 中的数据

## 5. 查看数据

在 Supabase Dashboard 中：
1. 进入 Table Editor
2. 选择 `waitlist` 表
3. 查看所有注册的用户信息

## 文件结构

```
acestep/
├── lib/
│   └── supabase.ts          # Supabase 客户端配置
├── app/
│   └── api/
│       └── waitlist/
│           └── route.ts     # Waitlist API 端点
├── components/
│   └── CTASection.tsx       # 包含 waitlist 表单的组件
├── supabase/
│   └── waitlist.sql         # 数据库创建脚本
└── .env.local               # 环境变量
```

## 安全说明

- ✅ 使用 Row Level Security (RLS) 保护数据
- ✅ 匿名用户只能插入数据，不能读取
- ✅ 邮箱地址唯一索引，防止重复
- ✅ 服务端 API 验证和错误处理
