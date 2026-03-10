# AI 配图系统使用指南

## 📸 系统概述

为 SEO 页面添加 AI 生成的配图，增加页面内容的独特性和视觉吸引力，解决 Google 认为页面内容质量不足的问题。

## 🎯 核心价值

1. **增加内容独特性** - 每个页面都有独特的配图，不再只是模板化内容
2. **提升视觉吸引力** - 图片让页面更生动，提高用户停留时间
3. **改善 SEO** - 独特的视觉内容是 Google 评估页面质量的重要因素
4. **增强用户体验** - 图片帮助用户更好地理解内容

## 🚀 快速开始

### 方案 1: 使用占位图片（推荐新手）

无需 API Token，快速预览效果：

```bash
# 生成占位图片（SVG 格式）
node scripts/generate-placeholders.js

# 查看生成的图片
ls public/images/seo/
```

**优点**: 免费、快速、无需配置
**缺点**: 只是占位图，不是真实的 AI 生成图片

### 方案 2: 生成真实 AI 图片

使用 Replicate API 生成高质量图片：

```bash
# 1. 设置 API Token
export REPLICATE_API_TOKEN=r8_xxx...

# 2. 生成图片
node scripts/generate-images.js

# 3. 压缩图片（需要安装 sharp）
npm install sharp --save-dev
node scripts/compress-images.js

# 或者一键完成
node scripts/generate-images.js && node scripts/compress-images.js
```

**优点**: 真实的 AI 生成图片，质量高
**缺点**: 需要付费 API（~$0.01/张）

## 📁 文件结构

```
acestep/
├── scripts/
│   ├── generate-placeholders.js    # 生成占位图片
│   ├── generate-images.js          # 生成 AI 图片
│   └── compress-images.js          # 压缩图片
│
├── public/images/seo/
│   ├── youtube/                     # YouTube 相关配图
│   │   ├── youtube-creator-studio.svg
│   │   ├── youtube-editing-timeline.svg
│   │   └── youtube-vlog-recording.svg
│   ├── audio/                       # 音频相关配图
│   ├── case-studies/                # 案例研究配图
│   ├── data/                        # 数据可视化配图
│   ├── tutorial/                    # 教程配图
│   ├── meditation/                  # 冥想配图
│   ├── shorts/                      # Shorts 配图
│   └── comparison/                  # 对比页面配图
│
├── components/seo-pages/
│   ├── ImageGallery.tsx             # 图片画廊组件
│   └── HeroWithImage.tsx            # 带图片的 Hero 组件
│
├── lib/
│   ├── seo-images.ts                # 图片配置数据
│   └── seo-enhanced-data.ts         # 增强内容数据
│
└── IMAGE_API.md                     # API 详细文档
```

## 🎨 在页面中使用

### 1. 图片画廊

展示多张配图：

```typescript
import ImageGallery from '@/components/seo-pages/ImageGallery'
import { seoImages } from '@/lib/seo-images'

export default function YouTubePage() {
  return (
    <div>
      <ImageGallery
        images={seoImages.youtube.gallery}
        title="YouTube Creator Examples"
        columns={3}
        showCaptions={true}
      />
    </div>
  )
}
```

### 2. 带 Hero 图片

在 Hero 区域展示配图：

```typescript
import HeroWithImage from '@/components/seo-pages/HeroWithImage'
import { seoImages } from '@/lib/seo-images'

export default function YouTubePage() {
  return (
    <HeroWithImage
      badge="YouTube Creators"
      title="YouTube Background Music"
      subtitle="Create amazing content with AI-generated music"
      imageSrc={seoImages.youtube.creatorStudio}
      imageAlt="YouTube Creator Studio"
      ctaText="Start Creating →"
      ctaHref="/#waitlist"
      stats={[
        { value: '50K+', label: 'Monthly Searches' },
        { value: '0', label: 'Copyright Claims' },
        { value: '100%', label: 'Revenue Yours' },
      ]}
    />
  )
}
```

### 3. 单张图片

在任意位置使用单张图片：

```typescript
import Image from 'next/image'
import { seoImages } from '@/lib/seo-images'

export default function MyComponent() {
  return (
    <div className="relative w-full h-64">
      <Image
        src={seoImages.youtube.creatorStudio}
        alt="YouTube Creator Studio"
        fill
        className="object-cover"
      />
    </div>
  )
}
```

## 📋 已生成图片清单

### YouTube 页面（3张）
- ✅ `youtube-creator-studio.svg` - YouTube 创作者工作室
- ✅ `youtube-editing-timeline.svg` - 视频编辑时间线
- ✅ `youtube-vlog-recording.svg` - Vlog 录制场景

### 音频示例（3张）
- ✅ `audio-visualization.svg` - 音频可视化
- ✅ `music-studio.svg` - 音乐制作工作室
- ✅ `dj-mixer.svg` - DJ 混音台

### 案例研究（3张）
- ✅ `youtube-success-story.svg` - YouTube 成功案例
- ✅ `podcast-recording.svg` - 播客录制
- ✅ `meditation-teacher.svg` - 冥想老师

### 数据可视化（2张）
- ✅ `analytics-dashboard.svg` - 数据分析仪表板
- ✅ `growth-chart.svg` - 增长图表

### 教程（2张）
- ✅ `tutorial-guide.svg` - 教程指南
- ✅ `learning-music-production.svg` - 学习音乐制作

### 冥想（3张）
- ✅ `meditation-peaceful.svg` - 宁静冥想
- ✅ `yoga-studio.svg` - 瑜伽工作室
- ✅ `sleep-relaxation.svg` - 睡眠放松

### YouTube Shorts（2张）
- ✅ `shorts-recording.svg` - Shorts 录制
- ✅ `viral-content.svg` - 病毒式传播内容

### 对比页面（2张）
- ✅ `comparison-versus.svg` - 对比展示
- ✅ `feature-comparison.svg` - 功能对比

**总计**: 20 张配图

## 🔧 自定义配置

### 添加新图片

1. 编辑 `scripts/generate-placeholders.js` 或 `scripts/generate-images.js`
2. 在配置数组中添加新项：

```javascript
const placeholderImages = [
  // 添加新图片
  {
    filename: 'my-new-image.svg',
    width: 1024,
    height: 768,
    text: 'My New Image',
    color: '#4F46E5', // 使用十六进制颜色
  },
]
```

3. 重新运行脚本：

```bash
node scripts/generate-placeholders.js
```

4. 更新 `lib/seo-images.ts`：

```typescript
export const seoImages = {
  // ...existing code...
  myCategory: {
    myImage: '/images/seo/my-new-image.svg',
  },
}
```

### 修改图片尺寸

根据 UI 容器选择合适的尺寸：

| 用途 | 推荐尺寸 | API 支持 |
|------|---------|----------|
| Hero 背景 | 1024x768 | ✅ |
| 卡片封面 | 1024x768 | ✅ |
| 竖版内容 | 768x1024 | ✅ |
| 正方形 | 512x512 | ✅ |
| 详细展示 | 1024x1024 | ✅ |

## 📊 性能优化

### 1. 使用 WebP 格式

```bash
# 压缩为 WebP（80% 质量）
node scripts/compress-images.js
```

**效果**:
- JPEG → WebP: 减少 25-35%
- PNG → WebP: 减少 80%+

### 2. 懒加载

```typescript
<Image
  src="/images/seo/..."
  alt="..."
  loading="lazy" // 非首屏使用
/>
```

### 3. 响应式图片

```typescript
<Image
  src="/images/seo/..."
  sizes="(max-width: 768px) 480px, 1024px"
/>
```

## 🎯 最佳实践

### 1. 内容相关性
- ✅ 图片内容要与页面主题匹配
- ✅ Prompt 描述要具体，包含场景、风格、氛围
- ❌ 避免使用通用、模糊的描述

### 2. 视觉一致性
- ✅ 同一页面使用相似的色调和风格
- ✅ 保持暗色主题与网站整体设计一致
- ❌ 避免风格跳跃，影响用户体验

### 3. 性能优先
- ✅ 使用 WebP 格式
- ✅ 首屏图片使用 `priority`
- ✅ 其他图片使用 `loading="lazy"`
- ❌ 避免图片过大（>500KB）

### 4. SEO 优化
- ✅ 使用描述性的 `alt` 文本
- ✅ 图片文件名包含关键词
- ✅ 图片周围添加相关文本内容

## 📈 效果监控

### Google Search Console

1. **索引覆盖率**
   - 目标: 从低覆盖率提升到 80%+
   - 监控: 每周检查

2. **页面状态**
   - 目标: "Indexed" 而不是 "Crawled - currently not indexed"
   - 监控: 每周检查

3. **搜索表现**
   - 目标: 印象数和点击数增加
   - 监控: 每月分析

### 用户体验指标

1. **页面停留时间**
   - 目标: > 2 分钟
   - 工具: Google Analytics

2. **跳出率**
   - 目标: < 60%
   - 工具: Google Analytics

3. **滚动深度**
   - 目标: > 70%
   - 工具: Google Analytics 事件追踪

## 🚨 故障排查

### 问题: 图片不显示

```bash
# 检查文件是否存在
ls public/images/seo/

# 检查文件路径是否正确
# 在浏览器中打开: http://localhost:3000/images/seo/youtube-creator-studio.svg
```

### 问题: API 调用失败

```bash
# 检查 API Token
echo $REPLICATE_API_TOKEN

# 测试 API 连接
curl -H "Authorization: Token $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/predictions
```

### 问题: 图片质量不佳

1. **优化 Prompt**
   - 添加更多细节描述
   - 明确风格和氛围
   - 参考成功的案例

2. **调整参数**
   - 尝试不同的模型
   - 调整图片尺寸
   - 生成多次选择最佳

## 📚 相关资源

- **API 文档**: [IMAGE_API.md](IMAGE_API.md)
- **SEO 改进**: [SEO_IMPROVEMENTS.md](SEO_IMPROVEMENTS.md)
- **Replicate API**: https://replicate.com/docs
- **Next.js Image**: https://nextjs.org/docs/app/building-your-application/optimizing/images

## 🎉 下一步

1. **为所有页面添加图片**
   - `/free` - 免费页面
   - `/tutorial/text-to-music` - 教程页面
   - `/youtube/shorts` - Shorts 页面
   - `/beginners/guide` - 新手指南
   - `/use-cases/meditation` - 冥想用例

2. **生成真实 AI 图片**
   - 设置 Replicate API Token
   - 运行生成脚本
   - 压缩优化

3. **监控效果**
   - 每周检查 Google Search Console
   - 分析用户行为数据
   - 持续优化

---

**创建日期**: 2026-03-10
**最后更新**: 2026-03-10
**状态**: ✅ 占位图片已生成，可随时替换为真实 AI 图片
