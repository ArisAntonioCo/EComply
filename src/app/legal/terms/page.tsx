'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Scale, Shield, AlertTriangle, Mail, FileText, Users, Eye, UserCheck, Ban, Gavel } from 'lucide-react'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Header */}
      <div className="border-b border-gray-200/60 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium text-gray-900">Legal Document</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-100 text-gray-700 text-xs font-medium mb-4">
            <Shield className="w-3 h-3" />
            Legal Terms
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Terms of Service</h1>
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>        {/* Terms Content */}
        <Card className="bg-white border border-gray-200/60 mb-8 rounded-xl">
          <CardContent className="p-8">
            <div className="prose prose-slate max-w-none">
                {/* Section 1 */}              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  Acceptance of Terms
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing and using Ecomply (&quot;Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Ecomply is a compliance analysis platform that helps e-commerce businesses ensure their documents comply with 
                  RA No. 11967 (Internet Transactions Act) and related Philippine e-commerce regulations.
                </p>
              </section>              {/* Section 2 */}              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                    <Scale className="w-5 h-5 text-blue-600" />
                  </div>
                  Description of Service
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ecomply provides AI-powered document analysis services specifically for:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Terms of Service compliance analysis</li>
                  <li>Privacy Policy compliance review</li>
                  <li>RA No. 11967 compliance scoring</li>
                  <li>Automated compliance recommendations</li>
                  <li>Document improvement suggestions</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Our service is designed to assist, not replace, professional legal advice. All analysis results should be 
                  reviewed by qualified legal professionals before implementation.
                </p>
              </section>              {/* Section 3 */}              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  User Accounts and Responsibilities
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To use certain features of Ecomply, you must create an account. You are responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Ensuring the accuracy of information you provide</li>
                  <li>Notifying us immediately of any unauthorized use of your account</li>
                  <li>Using the service only for lawful purposes</li>
                </ul>
              </section>              {/* Section 4 */}              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  Data and Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We take your privacy seriously. When you upload documents to Ecomply:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Documents are processed securely using industry-standard encryption</li>
                  <li>We do not store your document content permanently</li>
                  <li>Analysis results may be stored temporarily for service functionality</li>
                  <li>We comply with applicable Philippine data protection laws</li>
                  <li>Your personal information is handled according to our Privacy Policy</li>
                </ul>
              </section>              {/* Section 5 */}              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                    <AlertTriangle className="w-5 h-5 text-blue-600" />
                  </div>
                  Limitation of Liability
                </h2>                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/60 rounded-xl p-4 mb-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-amber-900 font-medium mb-2">Important Legal Disclaimer</p>
                      <p className="text-amber-800 text-sm leading-relaxed">
                        Ecomply provides automated analysis tools and suggestions, but does not provide legal advice. 
                        Our service is for informational purposes only and should not be considered a substitute for 
                        professional legal consultation.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To the maximum extent permitted by law, Ecomply shall not be liable for any indirect, incidental, 
                  special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred 
                  directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                </p>
              </section>              {/* Section 6 */}              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                    <Ban className="w-5 h-5 text-blue-600" />
                  </div>
                  Prohibited Uses
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may not use Ecomply to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Upload malicious content or attempt to compromise our systems</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights of others</li>
                  <li>Attempt to reverse engineer or extract our AI models</li>
                  <li>Use the service for illegal activities or fraud</li>
                  <li>Share your account credentials with unauthorized parties</li>
                </ul>
              </section>              {/* Section 7 */}              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                    <Eye className="w-5 h-5 text-blue-600" />
                  </div>
                  Service Availability
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  While we strive to maintain high service availability, we do not guarantee uninterrupted access to Ecomply. 
                  The service may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control. 
                  We reserve the right to modify, suspend, or discontinue the service at any time with appropriate notice.
                </p>
              </section>              {/* Section 8 */}              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                    <UserCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  Modifications to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately 
                  upon posting on this page. Your continued use of Ecomply after any changes constitutes your acceptance 
                  of the modified terms. We encourage you to review this page periodically for updates.
                </p>
              </section>              {/* Section 9 */}              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                    <Gavel className="w-5 h-5 text-blue-600" />
                  </div>
                  Governing Law
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the Philippines. 
                  Any disputes arising from these terms or your use of Ecomply shall be subject to the exclusive jurisdiction 
                  of the courts of the Philippines.
                </p>
              </section>              {/* Section 10 */}              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  Contact Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>                <div className="bg-gradient-to-r from-blue-50 to-blue-50 border border-blue-200/60 rounded-xl p-4 flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-gray-900 font-medium">Email Support</p>
                    <p className="text-gray-700">arisantonioco@gmail.com</p>
                  </div>
                </div>
              </section>

            </div>
          </CardContent>
        </Card>        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link href="/legal/privacy">
            <Button variant="outline" className="text-blue-600 hover:bg-blue-50 bg-white hover:border-blue-300 transition-all duration-200">
              View Privacy Policy
            </Button>
          </Link>
          <Link href="/auth">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-200">
              Get Started with Ecomply
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
