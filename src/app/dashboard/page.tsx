'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import DocumentAnalysisWorkflow from '@/components/document-analysis-workflow'

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
      throw error
    } finally {
      setLoading(false)
    }
  }
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-6 py-8">
        <DocumentAnalysisWorkflow 
          onAnalyze={handleAnalyze} 
          loading={loading} 
          onRestartAnalysis={handleRestartAnalysis}
        />
      </div>
    </div>
  )
}
