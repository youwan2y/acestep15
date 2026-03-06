/**
 * IndexNow 提交脚本
 * 用于将网站 URL 提交到 IndexNow 协议支持的搜索引擎
 */

const INDEXNOW_KEY = '3b57909572374345e27c74b08c224ccb'
const HOST = 'ace-step15.top'
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

// 要提交的 URL 列表
const urls = [
  'https://ace-step15.top',
  'https://ace-step15.top/free',
  'https://ace-step15.top/youtube/shorts',
  'https://ace-step15.top/youtube/background-music',
  'https://ace-step15.top/youtube/monetization',
  'https://ace-step15.top/beginners/guide',
  'https://ace-step15.top/beginners/no-experience',
  'https://ace-step15.top/use-cases/meditation',
  'https://ace-step15.top/use-cases/study-focus',
  'https://ace-step15.top/tutorial/text-to-music',
]

async function submitToIndexNow() {
  try {
    console.log('开始提交 URL 到 IndexNow...')
    console.log(`提交的 URL 数量: ${urls.length}`)
    console.log('URL 列表:')
    urls.forEach((url, index) => {
      console.log(`  ${index + 1}. ${url}`)
    })

    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        urlList: urls,
      }),
    })

    if (response.ok) {
      console.log('✅ 提交成功')
      console.log(`状态码: ${response.status}`)
      console.log(`状态文本: ${response.statusText}`)
      console.log('\n已成功提交以下 URL 到 IndexNow:')
      urls.forEach((url, index) => {
        console.log(`  ${index + 1}. ${url}`)
      })
      console.log('\n搜索引擎将在几分钟内开始爬取这些页面')
    } else {
      console.error('❌ 提交失败')
      console.error(`状态码: ${response.status}`)
      console.error(`错误信息: ${await response.text()}`)
    }
  } catch (error) {
    console.error('❌ 提交过程中出错:', error)
  }
}

// 执行提交
submitToIndexNow()
