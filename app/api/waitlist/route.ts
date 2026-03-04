import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    // Check Supabase client
    if (!supabase) {
      return NextResponse.json(
        { error: 'Service configuration error, please contact administrator' },
        { status: 503 }
      )
    }

    const body = await request.json()
    const { email, name } = body

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Insert directly, rely on database unique constraint to handle duplicate emails
    // Note: Current RLS prohibits anonymous select, so don't chain .select() here
    const { error } = await supabase
      .from('waitlist')
      .insert([
        {
          email,
          name: name || null,
          created_at: new Date().toISOString(),
        },
      ])

    if (error) {
      // Postgres unique_violation
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already on the waitlist' },
          { status: 409 }
        )
      }

      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Submission failed, please try again later' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        message: 'Successfully joined the waitlist!',
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Server error, please try again later' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Check Supabase client
    if (!supabase) {
      return NextResponse.json(
        { error: 'Service configuration error' },
        { status: 503 }
      )
    }

    const { count, error } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch data' },
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
      { error: 'Server error' },
      { status: 500 }
    )
  }
}
