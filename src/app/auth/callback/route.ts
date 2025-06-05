import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/dashboard'

  console.log('Auth callback received:', { code: !!code, origin, next })

  if (code) {
    try {
      // Create a new supabase client for server-side auth
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      )

      const { data, error } = await supabase.auth.exchangeCodeForSession(code)
      
      console.log('Exchange code result:', { 
        hasData: !!data, 
        hasSession: !!data?.session,
        hasUser: !!data?.user,
        error: error?.message 
      })

      if (!error && data?.session) {
        // Success - redirect to dashboard
        const redirectUrl = `${origin}${next}`
        console.log('Redirecting to:', redirectUrl)
        return NextResponse.redirect(redirectUrl)
      } else {
        console.error('Auth exchange failed:', error)
        return NextResponse.redirect(`${origin}/auth?error=${encodeURIComponent(error?.message || 'Authentication failed')}`)
      }
    } catch (err) {
      console.error('Auth callback error:', err)
      return NextResponse.redirect(`${origin}/auth?error=${encodeURIComponent('Authentication error occurred')}`)
    }
  }

  console.log('No code provided in callback')
  return NextResponse.redirect(`${origin}/auth?error=${encodeURIComponent('No authentication code provided')}`)
}
