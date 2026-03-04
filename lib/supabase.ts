import { createClient } from '@supabase/supabase-js'

const supabaseUrl =
  process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey =
  process.env.SUPABASE_ANON_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  const missing = [
    !supabaseUrl ? 'SUPABASE_URL/NEXT_PUBLIC_SUPABASE_URL' : null,
    !supabaseAnonKey ? 'SUPABASE_ANON_KEY/NEXT_PUBLIC_SUPABASE_ANON_KEY' : null,
  ]
    .filter(Boolean)
    .join(', ')

  console.warn(
    `Missing Supabase environment variables: ${missing}. API routes may not work correctly.`
  )
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null as any
