import { NextRequest, NextResponse } from 'next/server'

const INDEXNOW_KEY = '3b57909572374345e27c74b08c224ccb'
const HOST = 'ace-step15.top'
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

// 网站的所有 URL
const URLS = [
  'https://ace-step15.top',
  'https://ace-step15.top/free',
  'https://ace-step15.top/tutorial/text-to-music',
  'https://ace-step15.top/#features',
  'https://ace-step15.top/#examples',
  'https://ace-step15.top/#pricing',
  'https://ace-step15.top/#faq',
]

export async function POST(request: NextRequest) {
  try {
    // 可选:验证请求来源(添加简单的认证)
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${INDEXNOW_KEY}`) {
      return NextResponse.json(
        { error: '未授权的请求' },
        { status: 401 }
      )
    }

    console.log('开始提交 URL 到 IndexNow...')

    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        urlList: URLS,
      }),
    })

    if (response.ok) {
      console.log('✅ IndexNow 提交成功')
      return NextResponse.json({
        success: true,
        status: response.status,
        message: 'URL 已成功提交到 IndexNow',
        submittedUrls: URLS,
        count: URLS.length,
      })
    } else {
      const errorText = await response.text()
      console.error('❌ IndexNow 提交失败:', errorText)
      return NextResponse.json(
        {
          success: false,
          status: response.status,
          error: errorText,
        },
        { status: response.status }
      )
    }
  } catch (error) {
    console.error('❌ IndexNow 提交出错:', error)
    return NextResponse.json(
      {
        success: false,
        error: '提交过程中发生错误',
        details: error instanceof Error ? error.message : '未知错误',
      },
      { status: 500 }
    )
  }
}

// GET 请求用于手动触发(不推荐在生产环境使用,仅用于测试)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const test = searchParams.get('test')

  if (test !== 'true') {
    return NextResponse.json({
      message: '请使用 POST 请求并包含 Authorization header',
      hint: 'Authorization: Bearer <your-indexnow-key>',
    })
  }

  // 测试模式
  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        urlList: URLS,
      }),
    })

    const result = {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
    }

    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : '未知错误' },
      { status: 500 }
    )
  }
}
