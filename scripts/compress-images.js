/**
 * 图片压缩脚本
 * 将图片转换为 WebP 格式并压缩
 */

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

// 配置
const CONFIG = {
  inputDir: 'public/images/seo',
  quality: 80, // WebP 质量 (0-100)
  maxSize: 1920, // 最大宽度
  supportedFormats: ['.jpg', '.jpeg', '.png', '.webp'],
}

// 检查是否安装了必要的工具
function checkDependencies() {
  try {
    // 检查 sharp 或 imagemagick
    execSync('which convert', { stdio: 'ignore' })
    return 'imagemagick'
  } catch {
    try {
      require('sharp')
      return 'sharp'
    } catch {
      console.log('⚠️  需要安装 sharp: npm install sharp')
      console.log('   或安装 ImageMagick: brew install imagemagick')
      return null
    }
  }
}

// 使用 sharp 压缩图片
async function compressWithSharp(inputPath, outputPath) {
  const sharp = require('sharp')

  await sharp(inputPath)
    .resize(CONFIG.maxSize, null, {
      fit: 'inside',
      withoutEnlargement: true,
    })
    .webp({ quality: CONFIG.quality })
    .toFile(outputPath)

  return outputPath
}

// 使用 ImageMagick 压缩图片
function compressWithImageMagick(inputPath, outputPath) {
  const cmd = `convert "${inputPath}" -resize ${CONFIG.maxSize}x -quality ${CONFIG.quality} "${outputPath}"`
  execSync(cmd, { stdio: 'inherit' })
  return outputPath
}

// 压缩单张图片
async function compressImage(inputPath) {
  const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp')

  // 如果已经是 WebP 且不需要调整大小，跳过
  if (inputPath.endsWith('.webp')) {
    console.log(`⏭️  跳过 WebP: ${inputPath}`)
    return null
  }

  // 如果输出文件已存在且比输入文件新，跳过
  if (fs.existsSync(outputPath)) {
    const inputStat = fs.statSync(inputPath)
    const outputStat = fs.statSync(outputPath)
    if (outputStat.mtime > inputStat.mtime) {
      console.log(`⏭️  跳过已压缩: ${outputPath}`)
      return null
    }
  }

  console.log(`🗜️  压缩: ${inputPath}`)

  try {
    const method = checkDependencies()

    if (method === 'sharp') {
      await compressWithSharp(inputPath, outputPath)
    } else if (method === 'imagemagick') {
      compressWithImageMagick(inputPath, outputPath)
    } else {
      throw new Error('没有可用的图片处理工具')
    }

    // 计算压缩率
    const inputSize = fs.statSync(inputPath).size
    const outputSize = fs.statSync(outputPath).size
    const savings = ((1 - outputSize / inputSize) * 100).toFixed(1)

    console.log(`✅ 完成: ${outputPath}`)
    console.log(`   原始大小: ${(inputSize / 1024).toFixed(2)} KB`)
    console.log(`   压缩后: ${(outputSize / 1024).toFixed(2)} KB`)
    console.log(`   节省: ${savings}%\n`)

    return outputPath
  } catch (error) {
    console.error(`❌ 压缩失败: ${error.message}`)
    return null
  }
}

// 递归处理目录
async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const results = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      // 递归处理子目录
      const subResults = await processDirectory(fullPath)
      results.push(...subResults)
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase()
      if (CONFIG.supportedFormats.includes(ext)) {
        const result = await compressImage(fullPath)
        if (result) results.push(result)
      }
    }
  }

  return results
}

// 主函数
async function main() {
  console.log('🚀 开始压缩图片...\n')
  console.log(`📁 输入目录: ${CONFIG.inputDir}`)
  console.log(`🎯 质量: ${CONFIG.quality}%`)
  console.log(`📐 最大宽度: ${CONFIG.maxSize}px\n`)

  if (!fs.existsSync(CONFIG.inputDir)) {
    console.log(`❌ 目录不存在: ${CONFIG.inputDir}`)
    console.log('   请先运行 generate-images.js 生成图片')
    return
  }

  const method = checkDependencies()
  if (!method) {
    return
  }
  console.log(`✅ 使用工具: ${method}\n`)

  const results = await processDirectory(CONFIG.inputDir)

  console.log('\n✨ 压缩完成!')
  console.log(`   处理文件: ${results.length}`)

  if (results.length > 0) {
    console.log('\n📝 压缩后的文件:')
    results.forEach(file => console.log(`   - ${file}`))
  }
}

main().catch(console.error)
