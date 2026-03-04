import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    // 检查 Supabase 客户端
    if (!supabase) {
      return NextResponse.json(
        { error: '服务配置错误，请联系管理员' },
        { status: 503 }
      )
    }

    const body = await request.json()
    const { email, name } = body

    // 验证邮箱
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: '请提供有效的邮箱地址' },
        { status: 400 }
      )
    }

    // 检查邮箱是否已存在
    const { data: existingUser, error: checkError } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .single()

    if (existingUser) {
      return NextResponse.json(
        { error: '该邮箱已在等待列表中' },
        { status: 400 }
      )
    }

    // 插入新记录
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          email,
          name: name || null,
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: '提交失败，请稍后重试' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        message: '成功加入等待列表！',
        data: data[0],
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: '服务器错误，请稍后重试' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // 检查 Supabase 客户端
    if (!supabase) {
      return NextResponse.json(
        { error: '服务配置错误' },
        { status: 503 }
      )
    }

    const { count, error } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: '获取数据失败' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { count },
      { status: 200 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: '服务器错误' },
      { status: 500 }
    )
  }
}
