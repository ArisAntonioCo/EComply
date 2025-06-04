'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ClipboardCheck, Shield, Users, TrendingUp, Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react'

export default function AuthPage() {
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
        }, 1000)
      } else {
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
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred'
      setMessage(`Error: ${errorMessage}`)    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Branding & Visual */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.02)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
        
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          {/* Logo */}
          <div className="flex items-center mb-12">
            <ClipboardCheck className="w-10 h-10 text-blue-400 mr-3" />
            <span className="text-3xl font-bold">Ecomply</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Ensure Your E-Commerce 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Legal Compliance
            </span>
          </h1>

          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            AI-powered analysis for Philippine E-Commerce Law RA No. 11967 compliance. 
            Join thousands of businesses ensuring legal compliance.
          </p>

          {/* Trust Indicators */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Secure & Compliant</h3>
                <p className="text-blue-200">Enterprise-grade security with data protection</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Trusted by 1000+ Businesses</h3>
                <p className="text-blue-200">Filipino e-commerce leaders choose Ecomply</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">99% Accuracy Rate</h3>
                <p className="text-blue-200">AI-powered compliance analysis you can trust</p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <p className="text-blue-100 italic mb-3">
              "Ecomply saved us countless hours of legal review. The AI analysis is incredibly accurate and actionable."
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">MR</span>
              </div>
              <div>
                <p className="font-semibold text-sm">Maria Rodriguez</p>
                <p className="text-blue-200 text-xs">CEO, TechStore Philippines</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Authentication Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <Link href="/" className="flex items-center justify-center space-x-3">
              <ClipboardCheck className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Ecomply</span>
            </Link>
          </div>

          {/* Form Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? 'Welcome back' : 'Create your account'}
            </h2>
            <p className="text-gray-600">
              {isLogin 
                ? 'Sign in to access your compliance dashboard' 
                : 'Start your compliance journey today'
              }
            </p>
          </div>

          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <form onSubmit={handleAuth} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className={`pl-4 pr-4 py-3 text-base ${emailError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                      placeholder="Enter your email"
                      required
                    />
                    {emailError && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                      </div>
                    )}
                  </div>
                  {emailError && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {emailError}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className={`pl-4 pr-12 py-3 text-base ${passwordError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  
                  {passwordError && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {passwordError}
                    </p>
                  )}

                  {/* Password Strength Indicator (only for signup) */}
                  {!isLogin && password && (
                    <div className="mt-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Password strength:</span>
                        <span className={`text-sm font-medium ${passwordStrength >= 3 ? 'text-green-600' : passwordStrength >= 2 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {strengthLabels[passwordStrength - 1] || 'Very Weak'}
                        </span>
                      </div>
                      <div className="grid grid-cols-5 gap-1">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <div
                            key={level}
                            className={`h-2 rounded-full ${
                              level <= passwordStrength 
                                ? strengthColors[passwordStrength - 1] || 'bg-gray-200'
                                : 'bg-gray-200'
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
                  className="w-full py-3 text-base font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5" 
                  disabled={loading || !!emailError || !!passwordError}
                >
                  {loading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                      <CheckCircle className="w-4 h-4" />
                    </div>
                  )}
                </Button>

                {/* Message Display */}
                {message && (
                  <div className={`p-4 rounded-lg ${
                    message.includes('Error') 
                      ? 'bg-red-50 border border-red-200 text-red-700' 
                      : 'bg-green-50 border border-green-200 text-green-700'
                  }`}>
                    <div className="flex items-start space-x-2">
                      {message.includes('Error') ? (
                        <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      ) : (
                        <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      )}
                      <p className="text-sm">{message}</p>
                    </div>
                  </div>
                )}
              </form>

              {/* Toggle Between Login/Signup */}
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-3">
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
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  {isLogin ? 'Create a free account' : 'Sign in instead'}
                </button>
              </div>

              {/* Back to Home */}
              <div className="mt-6 text-center">
                <Link 
                  href="/" 
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  ← Back to homepage
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
