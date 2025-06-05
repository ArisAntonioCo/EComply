'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { ClipboardCheck, Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react'
import InfiniteScroll from '@/components/infinite-scroll'
import RadialGlow from '@/components/radial-glow'

export default function AuthFormSection() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  // Password strength calculation
  const getPasswordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[a-z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++
    return strength
  }

  const passwordStrength = getPasswordStrength(password)
  const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong']
  const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500']
  useEffect(() => {
    // Check if user is already authenticated
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        // Redirect to dashboard if already logged in
        window.location.href = '/dashboard'
      }
    }
    
    // Check for error messages in URL params
    const urlParams = new URLSearchParams(window.location.search)
    const error = urlParams.get('error')
    if (error) {
      setMessage(`Error: ${error}`)
    }
    
    checkAuth()
  }, [])

  // Real-time validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email) {
      setEmailError('Email is required')
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address')
    } else {
      setEmailError('')
    }
  }

  const validatePassword = (password: string) => {
    if (!password) {
      setPasswordError('Password is required')
    } else if (!isLogin && password.length < 8) {
      setPasswordError('Password must be at least 8 characters long')
    } else {
      setPasswordError('')
    }
  }
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate inputs
    validateEmail(email)
    validatePassword(password)
    
    if (emailError || passwordError) {
      return
    }
    
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
        setTimeout(() => {
          window.location.href = '/dashboard'
        }, 1000)      } else {
        // Use production URL for email confirmation redirect
        const baseUrl = process.env.NODE_ENV === 'production' 
          ? 'https://e-comply.vercel.app' 
          : (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000')
        
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${baseUrl}/auth/callback`,
          },
        })
        
        if (error) throw error
        
        if (data.user && !data.session) {
          // Email confirmation required
          setMessage('Account created! Please check your email and click the confirmation link to complete your registration.')
        } else if (data.session) {
          // No email confirmation required, user is automatically signed in
          setMessage('Account created and logged in successfully! Redirecting...')
          setTimeout(() => {
            window.location.href = '/dashboard'
          }, 1000)
        }
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred'
      setMessage(`Error: ${errorMessage}`)
    } finally {
      setLoading(false)
    }
  }
  return (    <section className="py-24 sm:py-32 bg-slate-950 min-h-screen flex items-center relative overflow-hidden">      {/* Radial glow effect component */}
      <RadialGlow />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full relative z-10">
        <div className="mx-auto max-w-md">

          {/* Form Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-600 bg-slate-800 text-slate-300 text-xs font-medium mb-4">
              <ClipboardCheck className="w-3 h-3" />
              {isLogin ? 'Welcome Back' : 'Get Started'}
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              {isLogin ? 'Sign In' : 'Create Account'}
            </h2>
            <p className="text-slate-400 text-sm">
              {isLogin 
                ? 'Access your compliance dashboard' 
                : 'Start your compliance analysis journey'
              }
            </p>
          </div>

          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-8">
              <form onSubmit={handleAuth} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        validateEmail(e.target.value)
                      }}
                      className={`pl-4 pr-4 py-3 text-base bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 ${emailError ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500 focus:border-blue-500'}`}
                      placeholder="your@email.com"
                      required
                    />
                    {emailError && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                      </div>
                    )}
                  </div>
                  {emailError && (
                    <p className="mt-2 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {emailError}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                        validatePassword(e.target.value)
                      }}
                      className={`pl-4 pr-12 py-3 text-base bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 ${passwordError ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500 focus:border-blue-500'}`}
                      placeholder="••••••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-200"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {passwordError && (
                    <p className="mt-2 text-sm text-red-400 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {passwordError}
                    </p>
                  )}

                  {/* Password Strength Indicator (only for signup) */}
                  {!isLogin && password && (
                    <div className="mt-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-400">Password strength:</span>
                        <span className={`text-sm font-medium ${passwordStrength >= 3 ? 'text-green-400' : passwordStrength >= 2 ? 'text-yellow-400' : 'text-red-400'}`}>
                          {strengthLabels[passwordStrength - 1] || 'Very Weak'}
                        </span>
                      </div>
                      <div className="grid grid-cols-5 gap-1">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <div
                            key={level}
                            className={`h-2 rounded ${
                              level <= passwordStrength 
                                ? strengthColors[passwordStrength - 1] || 'bg-slate-600'
                                : 'bg-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full py-3 text-base font-medium bg-blue-600 hover:bg-blue-700 text-white" 
                  disabled={loading || !!emailError || !!passwordError}
                >
                  {loading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <ClipboardCheck className="w-4 h-4" />
                      <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                    </div>
                  )}
                </Button>

                {/* Message Display */}
                {message && (
                  <div className={`p-4 rounded-lg border text-sm ${
                    message.includes('Error') 
                      ? 'bg-red-900/50 border-red-600 text-red-300' 
                      : 'bg-green-900/50 border-green-600 text-green-300'
                  }`}>
                    <div className="flex items-start space-x-2">
                      {message.includes('Error') ? (
                        <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      ) : (
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      )}
                      <p>{message}</p>
                    </div>
                  </div>
                )}
              </form>

              {/* Toggle Between Login/Signup */}              <div className="mt-8 pt-6 border-t border-slate-700 text-center">
                <p className="text-slate-400 mb-3 text-sm">
                  {isLogin ? "Don't have an account?" : 'Already have an account?'}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(!isLogin)
                    setMessage('')
                    setEmailError('')
                    setPasswordError('')
                  }}
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 cursor-pointer text-xs"
                >
                  {isLogin ? 'Create new account' : 'Sign in to existing account'}
                </button>
              </div>

              {/* Back to Home */}
              <div className="mt-6 text-center">
                <Link 
                  href="/" 
                  className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200"
                >
                  ← Back to Home
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Infinite Scroll at the bottom */}
          <div className="mt-12">
            {/* Fade line with end-to-end fade */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
              </div>
            </div>
            <InfiniteScroll />
          </div>
        </div>
      </div>
    </section>
  );
}
