'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import DashboardLoadingSection from '@/sections/dashboard/DashboardLoadingSection';
import DashboardHeaderSection from '@/sections/dashboard/DashboardHeaderSection';
import DashboardContentSection from '@/sections/dashboard/DashboardContentSection';

export default function DashboardPage() {
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
    return <DashboardLoadingSection />;
  }  return (
    <div className="min-h-screen bg-gray-50">
      {/* Add top padding to account for fixed navbar height (approximately 64px) */}
      <div className="max-w-5xl mx-auto px-4 pt-20 pb-6 sm:px-6 lg:px-8">
        <DashboardHeaderSection />
        <DashboardContentSection 
          onAnalyze={handleAnalyze} 
          loading={loading} 
          onRestartAnalysis={handleRestartAnalysis}
        />
      </div>
    </div>
  );
}
