'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import DocumentAnalysisWorkflow from '@/components/document-analysis-workflow'
import { Shield, ClipboardCheck } from 'lucide-react'

export default function Dashboard() {
  const [loading, setLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        window.location.href = '/auth'
        return
      }
      setIsAuthenticated(true)
    }
    
    checkAuth()
  }, [])

  const handleRestartAnalysis = () => {
    // Reset any state if needed
    setLoading(false)
    // Could add additional reset logic here
  }
  const handleAnalyze = async (document: string, documentType: "terms" | "privacy") => {
    if (!document.trim()) {
      throw new Error('Please provide document content first.')
    }

    setLoading(true)

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          document: document.trim(),
          documentType: documentType 
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to analyze document')
      }

      const result = await response.json()
      return result
    } catch (error) {
      console.error('Analysis error:', error)
      throw error    } finally {
      setLoading(false)
    }
  }

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          <div className="relative text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-slate-300">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8">        {/* Dashboard Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium mb-4">
            <ClipboardCheck className="w-4 h-4" />
            Compliance Dashboard
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            RA No. 11967 Compliance Analysis
          </h1>
          <p className="text-slate-300">
            Analyze your Terms of Service and Privacy Policy documents for Philippine e-commerce compliance
          </p>
        </div>

        {/* Main Content */}
        <DocumentAnalysisWorkflow 
          onAnalyze={handleAnalyze} 
          loading={loading} 
          onRestartAnalysis={handleRestartAnalysis}
        />
      </div>
    </div>
  )
}
