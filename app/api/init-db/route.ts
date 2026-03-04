import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

    // SQL to create waitlist table
    const createTableSQL = `
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

-- Create policies
DROP POLICY IF EXISTS "Allow anonymous insert" ON waitlist;
CREATE POLICY "Allow anonymous insert" ON waitlist
  FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS "Deny anonymous select" ON waitlist;
CREATE POLICY "Deny anonymous select" ON waitlist
  FOR SELECT TO anon USING (false);

DROP POLICY IF EXISTS "Allow service role select" ON waitlist;
CREATE POLICY "Allow service role select" ON waitlist
  FOR SELECT TO service_role USING (true);
`

    // Try to execute SQL using Supabase REST API
    // Note: This requires postgres permissions, usually anon key doesn't have this permission
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`,
      },
      body: JSON.stringify({
        sql: createTableSQL
      })
    })

    if (!response.ok) {
      // If failed, return instructions for manual execution
      return NextResponse.json({
        success: false,
        needsManualSetup: true,
        message: 'Need to manually execute SQL to create database table',
        sql: createTableSQL,
        instructions: [
          '1. Visit Supabase SQL Editor:',
          `   ${supabaseUrl.replace('/rest/v1', '')}/project/nfmdyerjomsrwxijlhpf/sql`,
          '2. Copy the SQL statement above',
          '3. Paste it into the editor and click Run'
        ]
      }, { status: 200 })
    }

    return NextResponse.json({
      success: true,
      message: 'Database table created successfully!'
    })
  } catch (error) {
    console.error('Initialization error:', error)
    return NextResponse.json({
      success: false,
      needsManualSetup: true,
      message: 'Need to manually execute SQL to create database table',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 200 })
  }
}
