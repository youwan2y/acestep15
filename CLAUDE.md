# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
## supabse
Project URL
https://nfmdyerjomsrwxijlhpf.supabase.co

Copy
Publishable Key
sb_publishable_4pW9p_S-msM2K58xqDLZ_g_kGUnYNXJ

Copy
Anon Key (Legacy)
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mbWR5ZXJqb21zcnd4aWpsaHBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1OTA0MTgsImV4cCI6MjA4ODE2NjQxOH0.EIL2IvIkFGuE6LVzrJTTgjWt5qcKI7qhHHzzQw-Od7I

Copy
For secret keys, see API settings.


## 项目概述

Ace-Step 1.5 是一个 AI 音乐生成模型的 SEO 落地页项目，部署在 ace-step15.top 域名。这是一个纯营销落地页，不提供实际功能，所有功能标记为 "Coming Soon"。

## 常用命令

```bash
# 安装依赖
npm install

# 开发模式（需要在用户许可后运行）
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **部署**: Vercel

## 项目架构

### 目录结构

- `app/`: Next.js App Router 页面
  - `layout.tsx`: 根布局，包含全局 metadata、SEO 配置、Navbar 和 StructuredData
  - `page.tsx`: 首页，按顺序组合各个 Section 组件
  - `sitemap.ts`: 动态生成 sitemap
  - `robots.ts`: 配置搜索引擎爬虫规则

- `components/`: React 组件库
  - **页面 Section 组件**: HeroSection, TrustSection, FeaturesSection, HowToUseSection, ShowcaseSection, TestimonialsSection, PricingSection, FAQSection, CTASection
  - **导航组件**: Navbar, Footer
  - **视觉特效组件**: ParticleBackground, EnhancedParticles, OrbBackground, MusicWaveAnimation
  - **UI 组件**: Logo, MusicCard, StructuredData

- `public/`: 静态资源（图片、图标等）

### 页面结构

首页按照以下顺序组织：
1. Hero Section - 首屏吸引力区
2. Trust Section - 信任背书
3. Features Section (`#features`) - 核心功能
4. How To Use Section - 使用方法
5. Showcase Section (`#examples`) - 案例展示
6. Testimonials Section - 用户评价
7. Pricing Section (`#pricing`) - 定价计划
8. FAQ Section (`#faq`) - 常见问题
9. CTA Section - 最终号召
10. Footer - 页脚

### 设计系统

- **主题**: 暗色模式 (`dark` class 在 html 元素上)
- **配色**: 霓虹风格，使用柔和的淡蓝、淡紫、淡粉 (`neon.blue`, `neon.purple`, `neon.pink`)
- **视觉效果**: 粒子背景、音乐波形动画、渐变效果
- **响应式**: 使用 Tailwind CSS 的响应式类

### SEO 配置

项目已完整配置 SEO：
- 全局 metadata 在 `app/layout.tsx` 中
- Open Graph 和 Twitter Card 配置完整
- 结构化数据 (JSON-LD) 在 `components/StructuredData.tsx`
- 自动生成 sitemap 和 robots.txt

### 部署

项目配置为 Vercel 自动部署，配置文件在 `vercel.json`。部署区域设置为 `iad1` (美国东部)。

## 开发注意事项

1. **动画性能**: 使用 Framer Motion 时注意性能，避免过多同时运行的动画
2. **SEO 优化**: 所有新增内容应考虑关键词密度和语义化标签
3. **暗色主题**: 所有组件必须适配暗色主题
4. **响应式设计**: 所有组件必须是移动端友好的
5. **图片优化**: 使用 Next.js Image 组件优化图片加载
6. **TypeScript**: 严格类型检查，避免 `any` 类型

## 域名和环境

- 生产域名: https://ace-step15.top
- 本地开发: http://localhost:3000
- Node.js 版本要求: 查看 `.nvmrc` 或 package.json engines 字段（如有）
