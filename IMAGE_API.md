# 图片生成 API 文档

本文档介绍如何为 SEO 页面生成配图。

## 🎨 支持的图片生成 API

### 1. Replicate API (推荐)

**模型**: Kwai-Kolors/Kolors
**优点**: 稳定、质量高、速度快
**支持的尺寸**:
- `512x512` - 正方形，适合图标、头像
- `768x1024` - 竖版，适合手机屏幕、竖版内容
- `1024x768` - 横版，适合桌面、横版内容
- `1024x1024` - 大正方形，适合详细展示

**配置**:
```bash
export REPLICATE_API_TOKEN=your_token_here
```

**API 调用示例**:
```javascript
const response = await fetch('https://api.replicate.com/v1/predictions', {
  method: 'POST',
  headers: {
    'Authorization': `Token ${process.env.REPLICATE_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    version: 'kwai-kolors/kolors:latest',
    input: {
      prompt: 'your prompt here',
      image_size: '1024x768',
      num_outputs: 1,
    },
  }),
})
```

### 2. Stability AI (Stable Diffusion)

**模型**: Stable Diffusion XL
**优点**: 开源、可自托管
**支持的尺寸**:
- `1024x1024` - 推荐
- `512x512` - 快速生成
- `768x768` - 中等尺寸
- 自定义尺寸（需要是 64 的倍数）

**配置**:
```bash
export STABILITY_API_KEY=your_key_here
```

### 3. OpenAI DALL-E 3

**模型**: dall-e-3
**优点**: 理解能力强、创意性好
**支持的尺寸**:
- `1024x1024` - 正方形
- `1792x1024` - 横版
- `1024x1792` - 竖版

**配置**:
```bash
export OPENAI_API_KEY=your_key_here
```

## 📐 尺寸选择指南

### 根据 UI 容器选择

1. **检查 CSS**
   - `object-cover`: 图片会被裁剪，选择接近的尺寸即可
   - `object-contain`: 需要精确匹配宽高比

2. **常见容器尺寸**
   - Hero 背景: `1920x1080` → API 生成 `1024x768` 然后拉伸
   - 卡片封面: `400x300` → API 生成 `1024x768` 然后缩放
   - 竖版卡片: `300x400` → API 生成 `768x1024`
   - 正方形: `400x400` → API 生成 `512x512` 或 `1024x1024`

3. **就近原则**
   - API 没有精确尺寸时，选择最接近的
   - 让 CSS 的 `object-fit` 处理裁剪

## 🎯 Prompt 编写技巧

### 好的 Prompt 示例

```javascript
// ✅ 具体描述场景、风格、氛围
"YouTube creator workspace with professional microphone, camera, and editing setup, modern studio lighting, neon blue and purple accents, dark theme, cinematic style"

// ✅ 包含关键元素和视觉风格
"Abstract music visualization with colorful sound waves, neon blue and purple gradients, digital audio waveform, futuristic style, dark background"

// ✅ 明确主体和背景
"Person learning music production on laptop, online tutorial video playing, notes and headphones, focused learning atmosphere"
```

### 不好的 Prompt 示例

```javascript
// ❌ 太模糊
"music"

// ❌ 缺少视觉细节
"YouTube video"

// ❌ 没有风格描述
"someone making music"
```

### Prompt 模板

```
[主体] + [场景/环境] + [动作/状态] + [视觉元素] + [风格/氛围] + [色调]
```

示例:
```
"Content creator [主体]
 recording vlog [动作]
 with ring light, smartphone on tripod, home studio setup [场景]
 cozy atmosphere [氛围]
 warm lighting [色调]"
```

## 🚀 使用流程

### 1. 生成图片

```bash
# 设置 API Token
export REPLICATE_API_TOKEN=r8_xxx...

# 运行生成脚本
node scripts/generate-images.js
```

### 2. 压缩图片

```bash
# 安装依赖（首次使用）
npm install sharp

# 运行压缩脚本
node scripts/compress-images.js
```

### 3. 一键生成

```bash
# 生成 + 压缩
node scripts/generate-images.js && node scripts/compress-images.js
```

## 📁 文件组织

```
public/images/seo/
├── youtube/           # YouTube 相关页面配图
│   ├── youtube-creator-studio.webp
│   ├── youtube-editing-timeline.webp
│   └── youtube-vlog-recording.webp
├── audio/             # 音频示例配图
│   ├── audio-visualization.webp
│   ├── music-studio.webp
│   └── dj-mixer.webp
├── case-studies/      # 案例研究配图
│   ├── youtube-success-story.webp
│   ├── podcast-recording.webp
│   └── meditation-teacher.webp
├── data/              # 数据可视化配图
│   ├── analytics-dashboard.webp
│   └── growth-chart.webp
├── tutorial/          # 教程页面配图
│   ├── tutorial-guide.webp
│   └── learning-music-production.webp
├── meditation/        # 冥想页面配图
│   ├── meditation-peaceful.webp
│   ├── yoga-studio.webp
│   └── sleep-relaxation.webp
├── shorts/            # Shorts 页面配图
│   ├── shorts-recording.webp
│   └── viral-content.webp
└── comparison/        # 对比页面配图
    ├── comparison-versus.webp
    └── feature-comparison.webp
```

## 🎨 在组件中使用

```typescript
import Image from 'next/image'

export default function MyComponent() {
  return (
    <div className="relative w-full h-64">
      <Image
        src="/images/seo/youtube/youtube-creator-studio.webp"
        alt="YouTube Creator Studio"
        fill
        className="object-cover"
        priority // 重要图片使用 priority
      />
    </div>
  )
}
```

## ⚡ 性能优化

### 1. 使用 WebP 格式
- 比 JPEG 小 25-35%
- 比 PNG 小 80%+
- 支持透明度

### 2. 合适的质量设置
- **80%**: 推荐，视觉无损
- **70%**: 可接受，明显更小
- **90%**: 高质量，文件较大

### 3. 懒加载
```typescript
<Image
  src="/images/seo/..."
  alt="..."
  loading="lazy" // 非首屏图片使用懒加载
/>
```

### 4. 响应式图片
```typescript
<Image
  src="/images/seo/..."
  srcSet="
    /images/seo/...-480w.webp 480w,
    /images/seo/...-768w.webp 768w,
    /images/seo/...-1024w.webp 1024w
  "
  sizes="(max-width: 768px) 480px, (max-width: 1024px) 768px, 1024px"
/>
```

## 🔧 故障排查

### 问题: API Token 无效
```bash
# 检查 token 是否设置
echo $REPLICATE_API_TOKEN

# 重新设置
export REPLICATE_API_TOKEN=r8_xxx...
```

### 问题: 图片生成失败
```bash
# 检查 API 配额
curl -H "Authorization: Token $REPLICATE_API_TOKEN" \
  https://api.replicate.com/v1/predictions
```

### 问题: 压缩脚本报错
```bash
# 安装 sharp
npm install sharp --save-dev

# 或使用 ImageMagick
brew install imagemagick
```

## 📊 成本估算

### Replicate API
- **Kolors**: ~$0.01/张 (1024x768)
- **生成 20 张**: ~$0.20
- **每月 100 张**: ~$1.00

### 优化建议
1. 批量生成，减少 API 调用次数
2. 使用缓存，避免重复生成
3. 选择合适的尺寸，避免浪费

## 🎯 最佳实践

1. **Prompt 质量 > 数量**
   - 写详细的 prompt，减少重复生成
   - 参考成功的案例

2. **尺寸选择**
   - 优先考虑内容符合度
   - 让 CSS 处理尺寸差异

3. **批量处理**
   - 一次生成所有需要的图片
   - 统一压缩和管理

4. **版本控制**
   - 将生成脚本纳入 Git
   - 记录每个 prompt 的效果

5. **性能优先**
   - WebP 格式 + 80% 质量
   - 懒加载非首屏图片
   - 使用 CDN 加速

---

**相关脚本**:
- 生成脚本: `scripts/generate-images.js`
- 压缩脚本: `scripts/compress-images.js`
- 输出目录: `public/images/seo/`

**需要帮助?**
- Replicate 文档: https://replicate.com/docs
- Stable Diffusion 指南: https://stability.ai
- Next.js Image 优化: https://nextjs.org/docs/app/building-your-application/optimizing/images
