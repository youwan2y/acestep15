import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { serviceKey } = body

    // Validate service key is provided
    if (!serviceKey) {
      return NextResponse.json({
        success: false,
        error: 'Please provide Service Role Key'
      }, { status: 400 })
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!

    // Create client using service role key
    const supabase = createClient(supabaseUrl, serviceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })

    // SQL to create waitlist table
    const sql = `
      -- Create uuid-ossp extension (if not exists)
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

      -- Create waitlist table
      CREATE TABLE IF NOT EXISTS waitlist (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );

      -- Create indexes
      CREATE INDEX IF NOT EXISTS waitlist_email_idx ON waitlist(email);
      CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON waitlist(created_at);

      -- Enable RLS
      ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

      -- Drop existing policies (if any)
      DROP POLICY IF EXISTS "Allow anonymous insert" ON waitlist;
      DROP POLICY IF EXISTS "Deny anonymous select" ON waitlist;
      DROP POLICY IF EXISTS "Allow service role select" ON waitlist;

      -- Create new policies
      CREATE POLICY "Allow anonymous insert" ON waitlist
        FOR INSERT TO anon WITH CHECK (true);

      CREATE POLICY "Deny anonymous select" ON waitlist
        FOR SELECT TO anon USING (false);

      CREATE POLICY "Allow service role select" ON waitlist
        FOR SELECT TO service_role USING (true);
    `

    // Execute SQL using Management API
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': serviceKey,
        'Authorization': `Bearer ${serviceKey}`,
      },
      body: JSON.stringify({ sql })
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Failed to execute SQL:', errorText)

      // If RPC method is unavailable, try using Supabase client directly
      // Test if table already exists
      const { error: testError } = await supabase
        .from('waitlist')
        .select('id')
        .limit(1)

      if (testError && testError.code === '42P01') {
        // Table doesn't exist, return instructions for manual execution
        return NextResponse.json({
          success: false,
          error: 'Auto-creation failed, need to execute SQL manually',
          sql: sql,
          instructions: 'Please execute SQL manually in Supabase SQL Editor'
        }, { status: 500 })
      } else if (testError) {
        // Other errors
        return NextResponse.json({
          success: false,
          error: `Database error: ${testError.message}`
        }, { status: 500 })
      }

      // Table already exists
      return NextResponse.json({
        success: true,
        message: 'Database table already exists!'
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Database table created successfully!'
    })

  } catch (error) {
    console.error('Setup error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
