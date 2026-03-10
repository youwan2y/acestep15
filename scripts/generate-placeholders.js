/**
 * 快速生成示例图片（SVG 占位图）
 * 用于快速预览效果，无需 API Token
 */

import fs from 'fs'
import path from 'path'

// 图片配置
const placeholderImages = [
  // YouTube 页面
  { filename: 'youtube-creator-studio.svg', width: 1024, height: 768, text: 'YouTube Creator Studio', color: '#4F46E5' },
  { filename: 'youtube-editing-timeline.svg', width: 1024, height: 768, text: 'Video Editing Timeline', color: '#7C3AED' },
  { filename: 'youtube-vlog-recording.svg', width: 768, height: 1024, text: 'Vlog Recording', color: '#EC4899' },

  // Audio 页面
  { filename: 'audio-visualization.svg', width: 1024, height: 768, text: 'Audio Visualization', color: '#06B6D4' },
  { filename: 'music-studio.svg', width: 1024, height: 768, text: 'Music Production Studio', color: '#8B5CF6' },
  { filename: 'dj-mixer.svg', width: 1024, height: 768, text: 'DJ Mixer Setup', color: '#EC4899' },

  // Case Studies 页面
  { filename: 'youtube-success-story.svg', width: 768, height: 1024, text: 'Success Story', color: '#10B981' },
  { filename: 'podcast-recording.svg', width: 1024, height: 768, text: 'Podcast Recording', color: '#6366F1' },
  { filename: 'meditation-teacher.svg', width: 768, height: 1024, text: 'Meditation Teacher', color: '#8B5CF6' },

  // Data 页面
  { filename: 'analytics-dashboard.svg', width: 1024, height: 768, text: 'Analytics Dashboard', color: '#3B82F6' },
  { filename: 'growth-chart.svg', width: 1024, height: 768, text: 'Growth Chart', color: '#10B981' },

  // Tutorial 页面
  { filename: 'tutorial-guide.svg', width: 768, height: 1024, text: 'Step by Step Tutorial', color: '#6366F1' },
  { filename: 'learning-music-production.svg', width: 1024, height: 768, text: 'Learning Music Production', color: '#7C3AED' },

  // Meditation 页面
  { filename: 'meditation-peaceful.svg', width: 768, height: 1024, text: 'Peaceful Meditation', color: '#8B5CF6' },
  { filename: 'yoga-studio.svg', width: 1024, height: 768, text: 'Yoga Studio', color: '#EC4899' },
  { filename: 'sleep-relaxation.svg', width: 768, height: 1024, text: 'Sleep & Relaxation', color: '#6366F1' },

  // Shorts 页面
  { filename: 'shorts-recording.svg', width: 768, height: 1024, text: 'YouTube Shorts Recording', color: '#EC4899' },
  { filename: 'viral-content.svg', width: 768, height: 1024, text: 'Viral Content Creation', color: '#F59E0B' },

  // Comparison 页面
  { filename: 'comparison-versus.svg', width: 1024, height: 768, text: 'Feature Comparison', color: '#3B82F6' },
  { filename: 'feature-comparison.svg', width: 1024, height: 768, text: 'Side by Side Comparison', color: '#7C3AED' },
]

// 生成 SVG 占位图
function createPlaceholderSVG(config) {
  const { filename, width, height, text, color } = config

  // 计算渐变色
  const colorDark = adjustColor(color, -30)
  const colorLight = adjustColor(color, 30)

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${colorDark};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${colorLight};stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="#0a0a1a"/>

  <!-- Gradient overlay -->
  <rect width="100%" height="100%" fill="url(#gradient)" opacity="0.3"/>

  <!-- Decorative circles -->
  <circle cx="${width * 0.2}" cy="${height * 0.3}" r="${width * 0.15}" fill="${color}" opacity="0.1" filter="url(#glow)"/>
  <circle cx="${width * 0.8}" cy="${height * 0.7}" r="${width * 0.2}" fill="${colorLight}" opacity="0.1" filter="url(#glow)"/>

  <!-- Grid pattern -->
  <g opacity="0.05">
    ${generateGrid(width, height)}
  </g>

  <!-- Icon placeholder -->
  <g transform="translate(${width / 2 - 60}, ${height / 2 - 100})">
    <rect x="20" y="20" width="80" height="60" rx="8" fill="none" stroke="${color}" stroke-width="2" opacity="0.3"/>
    <circle cx="60" cy="50" r="15" fill="none" stroke="${color}" stroke-width="2" opacity="0.3"/>
    <path d="M 55 45 L 65 50 L 55 55 Z" fill="${color}" opacity="0.5"/>
  </g>

  <!-- Text -->
  <text x="50%" y="${height / 2 + 40}" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle" filter="url(#glow)">
    ${text}
  </text>

  <!-- Subtitle -->
  <text x="50%" y="${height / 2 + 80}" font-family="Arial, sans-serif" font-size="16" fill="#999" text-anchor="middle" dominant-baseline="middle">
    AI-Generated Placeholder Image
  </text>

  <!-- Size badge -->
  <rect x="${width - 150}" y="20" width="130" height="30" rx="15" fill="${color}" opacity="0.2"/>
  <text x="${width - 85}" y="35" font-family="Arial, sans-serif" font-size="12" fill="white" text-anchor="middle" dominant-baseline="middle">
    ${width} × ${height}
  </text>
</svg>`

  return svg
}

// 生成网格图案
function generateGrid(width, height) {
  const gridSize = 50
  let grid = ''

  for (let x = 0; x < width; x += gridSize) {
    grid += `<line x1="${x}" y1="0" x2="${x}" y2="${height}" stroke="white" stroke-width="0.5"/>`
  }

  for (let y = 0; y < height; y += gridSize) {
    grid += `<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="white" stroke-width="0.5"/>`
  }

  return grid
}

// 调整颜色亮度
function adjustColor(color, amount) {
  const hex = color.replace('#', '')
  const num = parseInt(hex, 16)

  let r = (num >> 16) + amount
  let g = ((num >> 8) & 0x00FF) + amount
  let b = (num & 0x0000FF) + amount

  r = Math.min(255, Math.max(0, r))
  g = Math.min(255, Math.max(0, g))
  b = Math.min(255, Math.max(0, b))

  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}

// 主函数
function main() {
  console.log('🎨 生成示例占位图片...\n')

  // 创建输出目录
  const outputDir = 'public/images/seo'
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // 生成所有占位图
  placeholderImages.forEach(config => {
    const outputPath = path.join(outputDir, config.filename)
    const svg = createPlaceholderSVG(config)

    fs.writeFileSync(outputPath, svg, 'utf-8')
    console.log(`✅ 生成: ${config.filename} (${config.width}x${config.height})`)
  })

  console.log(`\n✨ 完成! 共生成 ${placeholderImages.length} 张占位图片`)
  console.log(`📁 输出目录: ${outputDir}`)
  console.log('\n💡 提示:')
  console.log('   - 这些是占位图片，用于快速预览效果')
  console.log('   - 要生成真实图片，请运行: node scripts/generate-images.js')
  console.log('   - 需要设置 REPLICATE_API_TOKEN 环境变量')
}

main()
