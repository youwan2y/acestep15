/**
 * IndexNow 提交脚本
 * 用于将网站 URL 提交到 IndexNow 协议支持的搜索引擎
 */

const INDEXNOW_KEY = '3b57909572374345e27c74b08c224ccb'
const HOST = 'ace-step15.top'
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

// 网站的所有 URL
const urlList = [
  'https://ace-step15.top',
  'https://ace-step15.top/free',
  'https://ace-step15.top/tutorial/text-to-music',
  'https://ace-step15.top/#features',
  'https://ace-step15.top/#examples',
  'https://ace-step15.top/#pricing',
  'https://ace-step15.top/#faq',
]

async function submitToIndexNow() {
  try {
    console.log(`准备提交 ${urlList.length} 个 URL 到 IndexNow...`)

    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        urlList: urlList,
      }),
    })

    if (response.ok) {
      console.log('✅ 提交成功!')
      console.log(`状态码: ${response.status}`)
      console.log('已提交的 URL:')
      urlList.forEach(url => console.log(`  - ${url}`))
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
