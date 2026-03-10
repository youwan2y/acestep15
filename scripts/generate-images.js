/**
 * AI 图片生成脚本
 * 用于为 SEO 页面生成配图
 */

import fs from 'fs'
import path from 'path'

// 图片生成配置
const imagePrompts = [
  // YouTube Background Music 页面配图
  {
    prompt: "YouTube creator workspace with professional microphone, camera, and editing setup, modern studio lighting, neon blue and purple accents, dark theme, cinematic style",
    filename: "youtube-creator-studio.webp",
    size: "1024x768",
    category: "youtube",
  },
  {
    prompt: "Video editing timeline interface with music waveform visualization, colorful audio tracks, professional editing software UI, dark mode, modern design",
    filename: "youtube-editing-timeline.webp",
    size: "1024x768",
    category: "youtube",
  },
  {
    prompt: "Content creator recording vlog with ring light, smartphone on tripod, home studio setup, cozy atmosphere, warm lighting",
    filename: "youtube-vlog-recording.webp",
    size: "768x1024",
    category: "youtube",
  },

  // Audio Examples 配图
  {
    prompt: "Abstract music visualization with colorful sound waves, neon blue and purple gradients, digital audio waveform, futuristic style, dark background",
    filename: "audio-visualization.webp",
    size: "1024x768",
    category: "audio",
  },
  {
    prompt: "Music production studio with synthesizers, MIDI controllers, speakers, professional audio equipment, dark atmospheric lighting",
    filename: "music-studio.webp",
    size: "1024x768",
    category: "audio",
  },
  {
    prompt: "DJ mixer with colorful LED lights, turntables, headphones, club atmosphere, neon lighting, electronic music vibes",
    filename: "dj-mixer.webp",
    size: "1024x768",
    category: "audio",
  },

  // Case Studies 配图
  {
    prompt: "Successful YouTuber celebrating milestone, laptop showing subscriber growth chart, confetti, achievement celebration, happy expression",
    filename: "youtube-success-story.webp",
    size: "768x1024",
    category: "case-studies",
  },
  {
    prompt: "Podcast host recording in professional studio, microphone with pop filter, soundproofing panels, warm lighting, engaging conversation",
    filename: "podcast-recording.webp",
    size: "1024x768",
    category: "case-studies",
  },
  {
    prompt: "Meditation teacher guiding class, peaceful yoga studio, soft natural light, zen atmosphere, wellness and mindfulness",
    filename: "meditation-teacher.webp",
    size: "768x1024",
    category: "case-studies",
  },

  // Data Visualization 配图
  {
    prompt: "Business analytics dashboard with growth charts, statistics graphs, data visualization, dark theme with blue and purple accents, modern UI design",
    filename: "analytics-dashboard.webp",
    size: "1024x768",
    category: "data",
  },
  {
    prompt: "Trending upward graph with financial growth, market analysis, stock chart, blue and green colors, professional business style",
    filename: "growth-chart.webp",
    size: "1024x768",
    category: "data",
  },

  // Tutorial 页面配图
  {
    prompt: "Step-by-step tutorial interface with numbered instructions, clean modern design, educational content layout, user-friendly UI",
    filename: "tutorial-guide.webp",
    size: "768x1024",
    category: "tutorial",
  },
  {
    prompt: "Person learning music production on laptop, online tutorial video playing, notes and headphones, focused learning atmosphere",
    filename: "learning-music-production.webp",
    size: "1024x768",
    category: "tutorial",
  },

  // Meditation & Wellness 配图
  {
    prompt: "Peaceful meditation scene with person sitting in lotus position, soft morning light, serene nature background, zen garden, calming atmosphere",
    filename: "meditation-peaceful.webp",
    size: "768x1024",
    category: "meditation",
  },
  {
    prompt: "Yoga practice in modern studio, natural light from large windows, plants, wooden floor, wellness and mindfulness atmosphere",
    filename: "yoga-studio.webp",
    size: "1024x768",
    category: "meditation",
  },
  {
    prompt: "Sleep and relaxation scene, cozy bedroom with soft lighting, peaceful sleeping person, dreamy atmosphere, calming colors",
    filename: "sleep-relaxation.webp",
    size: "768x1024",
    category: "meditation",
  },

  // YouTube Shorts 配图
  {
    prompt: "Smartphone recording vertical video, person creating TikTok or YouTube Short, dynamic pose, vertical format, modern content creation",
    filename: "shorts-recording.webp",
    size: "768x1024",
    category: "shorts",
  },
  {
    prompt: "Viral social media content creation, trending dance moves, colorful background, energetic atmosphere, youth culture",
    filename: "viral-content.webp",
    size: "768x1024",
    category: "shorts",
  },

  // Comparison 页面配图
  {
    prompt: "Side by side comparison split screen, versus comparison concept, blue vs purple theme, competitive analysis visualization",
    filename: "comparison-versus.webp",
    size: "1024x768",
    category: "comparison",
  },
  {
    prompt: "Feature comparison checklist with checkmarks and X marks, pros and cons evaluation, decision making visualization, clean design",
    filename: "feature-comparison.webp",
    size: "1024x768",
    category: "comparison",
  },
]

// API 配置 - 使用 Replicate API 或其他图片生成 API
const API_CONFIG = {
  // 使用 Replicate API 的 Kolors 模型
  url: 'https://api.replicate.com/v1/predictions',
  model: 'kwai-kolors/kolors:5f0c4a2e-7f0e-4c3e-8e0e-6f0e4c3e8e0e', // 示例模型版本
  // 或者使用其他图片生成 API
  // 例如: Stable Diffusion, DALL-E, Midjourney 等
}

// 生成单张图片
async function generateImage(prompt, size, outputPath) {
  console.log(`🎨 生成图片: ${outputPath}`)
  console.log(`   提示词: ${prompt}`)
  console.log(`   尺寸: ${size}`)

  try {
    // 这里需要替换为实际的 API 调用
    // 示例使用 Replicate API
    const response = await fetch(API_CONFIG.url, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${process.env.REPLICATE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        version: API_CONFIG.model,
        input: {
          prompt: prompt,
          image_size: size,
          num_outputs: 1,
          // 其他模型参数
        },
      }),
    })

    if (!response.ok) {
      throw new Error(`API 请求失败: ${response.statusText}`)
    }

    const prediction = await response.json()

    // 等待图片生成完成
    let result = prediction
    while (result.status !== 'succeeded' && result.status !== 'failed') {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const statusResponse = await fetch(result.urls.get, {
        headers: {
          'Authorization': `Token ${process.env.REPLICATE_API_TOKEN}`,
        },
      })
      result = await statusResponse.json()
    }

    if (result.status === 'failed') {
      throw new Error('图片生成失败')
    }

    // 下载图片
    const imageResponse = await fetch(result.output[0])
    const arrayBuffer = await imageResponse.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // 保存图片
    fs.writeFileSync(outputPath, buffer)
    console.log(`✅ 图片已保存: ${outputPath}`)

    return outputPath
  } catch (error) {
    console.error(`❌ 生成失败: ${error.message}`)
    // 创建占位图片
    createPlaceholderImage(outputPath, prompt)
    return outputPath
  }
}

// 创建占位图片（当 API 不可用时）
function createPlaceholderImage(outputPath, prompt) {
  // 这里可以创建一个简单的占位 SVG
  const svg = `
    <svg width="1024" height="768" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1a1a2e"/>
      <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#666" text-anchor="middle" dominant-baseline="middle">
        ${prompt.substring(0, 50)}...
      </text>
    </svg>
  `
  fs.writeFileSync(outputPath.replace('.webp', '.svg'), svg)
  console.log(`⚠️  创建占位图片: ${outputPath}`)
}

// 主函数
async function main() {
  console.log('🚀 开始生成 SEO 页面配图...\n')

  // 创建输出目录
  const outputDir = 'public/images/seo'
  const categories = [...new Set(imagePrompts.map(p => p.category))]

  categories.forEach(category => {
    const dir = path.join(outputDir, category)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
  })

  // 检查 API Token
  if (!process.env.REPLICATE_API_TOKEN) {
    console.log('⚠️  未设置 REPLICATE_API_TOKEN 环境变量')
    console.log('   将创建占位图片代替\n')
  }

  // 生成所有图片
  let successCount = 0
  let failCount = 0

  for (const config of imagePrompts) {
    const outputPath = path.join(outputDir, config.category, config.filename)

    // 如果文件已存在，跳过
    if (fs.existsSync(outputPath)) {
      console.log(`⏭️  跳过已存在: ${outputPath}`)
      continue
    }

    try {
      await generateImage(config.prompt, config.size, outputPath)
      successCount++
    } catch (error) {
      console.error(`❌ 生成失败: ${config.filename}`)
      failCount++
    }

    // 避免API限流
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  console.log('\n✨ 图片生成完成!')
  console.log(`   成功: ${successCount}`)
  console.log(`   失败: ${failCount}`)
  console.log(`   输出目录: ${outputDir}`)
}

main().catch(console.error)
