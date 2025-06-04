'use client'

import BrandingSection from '@/sections/auth/BrandingSection';
import AuthFormSection from '@/sections/auth/AuthFormSection';

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex">
      <BrandingSection />
      <AuthFormSection />
    </div>
  );
}
