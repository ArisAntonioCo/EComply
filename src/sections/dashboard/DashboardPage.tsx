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
  }

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
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
