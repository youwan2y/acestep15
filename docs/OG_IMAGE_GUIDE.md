# OG & Social Media 图片创建指南

## 需要创建的图片

### 1. Open Graph 图片 (og-image.png)
- **尺寸**: 1200 x 630 像素
- **格式**: PNG 或 JPG
- **用途**: Facebook, LinkedIn, 其他社交媒体
- **路径**: `/public/og-image.png`

### 2. Twitter 卡片图片 (twitter-image.png)
- **尺寸**: 1200 x 600 像素
- **格式**: PNG 或 JPG
- **用途**: Twitter 卡片
- **路径**: `/public/twitter-image.png`

## 设计建议

### OG 图片应包含:
1. **Logo** - Ace-Step 1.5 标志
2. **标题** - "Ace-Step 1.5 | Free AI Music Generator"
3. **副标题** - "Create Professional Music in Seconds"
4. **视觉元素**:
   - 音波/音乐波形图案
   - 霓虹渐变效果 (蓝、紫、粉)
   - 暗色背景
5. **CTA** - "Try Free Now" 或 "Join Waitlist"

### 配色方案
```css
背景: #0a0a0a (暗黑)
主色: #a5b4fc (柔和淡蓝)
次色: #c4b5fd (柔和淡紫)
强调: #f9a8d4 (柔和淡粉)
文字: #ffffff (白色)
```

## 使用在线工具创建

### Canva (推荐)
1. 访问: https://www.canva.com/
2. 创建自定义尺寸设计 (1200x630)
3. 使用模板或从头开始
4. 导出为 PNG

### Figma
1. 访问: https://www.figma.com/
2. 创建新文件
3. 设置画布为 1200x630
4. 设计并导出

### Adobe Express
1. 访问: https://www.adobe.com/express/
2. 选择自定义尺寸
3. 创建设计
4. 下载为 PNG

## 使用代码生成 (可选)

如果你想用代码生成 OG 图片，可以使用:

```bash
# 安装 Puppeteer
npm install puppeteer

# 创建生成脚本
node scripts/generate-og-image.js
```

## 图片优化

生成图片后，使用以下工具优化:

### TinyPNG
- https://tinypng.com/
- 压缩 PNG 文件

### Squoosh
- https://squoosh.app/
- Google 的图片优化工具

## 测试图片

### Facebook Sharing Debugger
- https://developers.facebook.com/tools/debug/

### Twitter Card Validator
- https://cards-dev.twitter.com/validator

### LinkedIn Post Inspector
- https://www.linkedin.com/post-inspector/

## 文件放置

创建完成后，将文件放在:
```
public/
  ├── og-image.png        (1200x630)
  ├── twitter-image.png   (1200x600)
  ├── icon-192.png        (192x192)
  ├── icon-512.png        (512x512)
  ├── apple-touch-icon.png (180x180)
  └── favicon.ico         (32x32)
```

## 更新代码

创建图片后，需要在 `app/layout.tsx` 中添加:

```typescript
openGraph: {
  // ... 现有配置
  images: [
    {
      url: 'https://ace-step15.top/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Ace-Step 1.5 - AI Music Generator',
    },
  ],
},
twitter: {
  // ... 现有配置
  images: ['https://ace-step15.top/twitter-image.png'],
},
```

## 设计模板示例

```
┌─────────────────────────────────────────────┐
│                                             │
│         [Logo]  Ace-Step 1.5                │
│                                             │
│     Free AI Music Generator                 │
│     Create Professional Music in Seconds    │
│                                             │
│         [音波动画/渐变背景]                  │
│                                             │
│         🎵 Try Free Now →                   │
│                                             │
└─────────────────────────────────────────────┘
```

## 临时占位图

如果暂时没有设计资源，可以:

1. 使用截图工具截取网站首页
2. 裁剪为 1200x630
3. 添加标题文字
4. 作为临时 OG 图片使用

## 注意事项

- ✅ 图片文件大小控制在 1MB 以内
- ✅ 使用高质量图片 (至少 72 DPI)
- ✅ 避免过多文字
- ✅ 确保在缩略图尺寸下仍然清晰
- ✅ 测试在深色和浅色背景下的显示效果
- ❌ 不要使用透明背景
- ❌ 不要使用过小的字体
- ❌ 不要堆砌太多元素

---

创建完成后，记得:
1. 提交到 Git 仓库
2. 部署到生产环境
3. 在社交媒体测试分享效果
4. 使用调试工具验证
