# Supabase 数据库配置经验总结

## 📋 需要准备的东西

### 1. Supabase 项目信息
从 Supabase Dashboard 获取：

```
Project URL: https://xxx.supabase.co
Project Ref: xxx (URL 中 supabase.co 前面的部分)
Anon Key: eyJhbGci... (公开的客户端密钥)
Secret Key: sb_secret_xxx (服务端密钥，保密！)
Database Password: xxx (数据库密码)
```

### 2. 获取这些信息的步骤

#### A. Project URL 和 Keys
1. 打开 https://supabase.com/dashboard
2. 选择你的项目
3. 点击左侧 "Settings" > "API"
4. 复制：
   - Project URL
   - anon public key
   - service_role key（保密！）

#### B. 数据库密码
1. 在项目中点击 "Settings" > "Database"
2. 找到 "Connection string" 部分
3. 如果显示 `[YOUR-PASSWORD]`，点击 "Reset database password" 设置新密码
4. 复制密码保存好

---

## 🛠️ 配置步骤

### 步骤 1: 安装依赖

```bash
npm install @supabase/supabase-js
npm install --save-dev pg  # 用于数据库操作
```

### 步骤 2: 创建环境变量文件

创建 `.env.local` 文件：

```env
# Supabase 配置
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...

# 数据库连接（仅服务端使用）
DATABASE_URL=postgresql://postgres:密码@db.xxx.supabase.co:5432/postgres
```

**重要：** 确保 `.env.local` 在 `.gitignore` 中！

### 步骤 3: 创建 Supabase 客户端

创建 `lib/supabase.ts`：

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### 步骤 4: 创建数据库表

#### 方法 A: 使用 SQL 脚本自动创建（推荐）

创建脚本 `scripts/create-table.js`：

```javascript
const { Client } = require('pg')

const client = new Client({
  host: 'db.xxx.supabase.co',  // 替换为你的 project ref
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: '你的数据库密码',  // 替换为你的密码
})

async function createTable() {
  await client.connect()

  const sql = `
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE TABLE IF NOT EXISTS your_table (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    ALTER TABLE your_table ENABLE ROW LEVEL SECURITY;

    CREATE POLICY "Allow anonymous insert" ON your_table
      FOR INSERT TO anon WITH CHECK (true);
  `

  await client.query(sql)
  await client.end()
}

createTable()
```

运行：
```bash
node scripts/create-table.js
```

#### 方法 B: 使用 Supabase SQL Editor（手动）

1. 打开 https://supabase.com/dashboard/project/xxx/sql
2. 粘贴 SQL 并点击 "Run"

---

## 🔐 安全配置（RLS）

### Row Level Security 最佳实践

```sql
-- 1. 启用 RLS
ALTER TABLE your_table ENABLE ROW LEVEL SECURITY;

-- 2. 允许匿名插入（公开注册）
CREATE POLICY "Allow anonymous insert" ON your_table
  FOR INSERT TO anon WITH CHECK (true);

-- 3. 禁止匿名读取（保护隐私）
CREATE POLICY "Deny anonymous select" ON your_table
  FOR SELECT TO anon USING (false);

-- 4. 允许服务端读取（管理员）
CREATE POLICY "Allow service role select" ON your_table
  FOR SELECT TO service_role USING (true);
```

---


## 📚 参考资源

- [Supabase 官方文档](https://supabase.com/docs)
- [Supabase Management API](https://supabase.com/docs/guides/integrations/supabase-for-platforms)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [PostgreSQL 连接](https://supabase.com/docs/guides/database/connecting-to-postgres)

---

## 💡 经验总结

1. **自动化的关键：** 使用数据库直接连接（`pg` 库）比 API 更可靠
2. **安全配置：** RLS 是必须的，不要跳过
3. **环境变量：** 分离公开和私有配置
4. **错误处理：** 完善的错误提示能节省大量调试时间
5. **测试验证：** 创建表后立即验证，确保成功

---

**最后更新：** 2026-03-04
**适用版本：** Next.js 14, Supabase v2
