'use client'

import { useState, useEffect } from 'react'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import { supabase } from '@/lib/supabase'
import type { User } from '@supabase/supabase-js'

export default function Home() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Check if user is authenticated
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    
    getUser()
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setUser(null)
    window.location.href = '/'
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar user={user} onSignOut={handleSignOut} />
      {/* Hero Section */}
      <section className="relative px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Ecomply
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            E-Commerce Law Compliance Document Reviewer
          </p>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Ensure your e-commerce documents comply with <strong>RA No. 11967</strong> - 
            the E-Commerce Law of the Philippines
          </p>
          <div className="mt-10">
            <Link href={user ? "/dashboard" : "/auth"}>
              <Button size="lg" className="text-lg px-8 py-6">
                {user ? "Go to Dashboard" : "Get Started"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Compliance Matters
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stay compliant with Philippine e-commerce regulations and protect your business
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">⚡</span>
                    Instant Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Get immediate feedback on your Terms of Service and Privacy Policy compliance
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">📊</span>
                    Detailed Scoring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Receive section-by-section compliance scores and actionable recommendations
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🛡️</span>
                    Legal Protection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Ensure your business meets all requirements of RA No. 11967
                  </p>
                </CardContent>
              </Card>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Check Your Documents?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Paste your Terms of Service or Privacy Policy and get instant compliance feedback
            </p>
            <div className="mt-10">
              <Link href={user ? "/dashboard" : "/auth"}>
                <Button size="lg" className="text-lg px-8 py-6">
                  {user ? "Go to Dashboard" : "Analyze Your Document"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}
