'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Check if user is already authenticated
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        // Redirect to dashboard if already logged in
        window.location.href = '/dashboard'
      }
    }
    
    checkAuth()
  }, [])

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error
        setMessage('Login successful! Redirecting...')
        // Redirect to dashboard
        window.location.href = '/dashboard'      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`
          }
        })
        if (error) throw error
        setMessage('Account created! Please check your email to confirm your account. If you don\'t receive an email, please check your spam folder or contact support.')
      }
    } catch (error: any) {
      setMessage(`Error: ${error.message}`)    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="flex items-center justify-center px-6 pt-16 pb-8">
        <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Ecomply
          </Link>
          <p className="mt-2 text-gray-600">
            {isLogin ? 'Sign in to your account' : 'Create a new account'}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {isLogin ? 'Sign In' : 'Sign Up'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAuth} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Sign Up')}
              </Button>

              {message && (
                <div className={`text-sm text-center ${
                  message.includes('Error') ? 'text-red-600' : 'text-green-600'
                }`}>
                  {message}
                </div>
              )}
            </form>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
              </button>            </div>
          </CardContent>        </Card>
        </div>
      </div>
    </div>
  )
}
