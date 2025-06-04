"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Menu, X } from "lucide-react";
import { supabase } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js';

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Get initial user session
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setMobileMenuOpen(false);
  };  return (
    <nav className="sticky top-0 z-50 bg-slate-900 backdrop-blur-md border-b border-slate-700/50 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">              <div className="relative">
                <ClipboardCheck className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" />
                <div className="absolute -inset-1 bg-blue-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 blur-sm"></div>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-200">
                Ecomply
              </span>
            </Link>
          </div>

          {/* Navigation Links */}          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className="px-4 py-2 rounded-lg text-slate-300 hover:text-blue-300 hover:bg-slate-800 transition-all duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              href="/dashboard" 
              className="px-4 py-2 rounded-lg text-slate-300 hover:text-blue-300 hover:bg-slate-800 transition-all duration-200 font-medium"
            >
              Dashboard
            </Link>
            <Link 
              href="/#features" 
              className="px-4 py-2 rounded-lg text-slate-300 hover:text-blue-300 hover:bg-slate-800 transition-all duration-200 font-medium"
            >
              Features
            </Link>
            <Link 
              href="/#contact" 
              className="px-4 py-2 rounded-lg text-slate-300 hover:text-blue-300 hover:bg-slate-800 transition-all duration-200 font-medium"
            >
              Contact
            </Link>
          </div>{/* Auth Buttons or User Info */}
          <div className="flex items-center space-x-3">
            {user ? (
              // Authenticated state
              <>                <div className="hidden md:flex items-center space-x-3">
                  <div className="flex items-center space-x-2 px-3 py-1.5 bg-green-900/50 border border-green-600 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-green-200 font-medium">
                      {user.email?.split('@')[0]}
                    </span>
                  </div>
                </div>                <Button 
                  variant="outline" 
                  onClick={handleSignOut} 
                  size="sm"
                  className="hidden md:flex border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white hover:border-slate-600 transition-all duration-200"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              // Unauthenticated state
              <>                <Link href="/auth" className="hidden md:block">
                  <Button 
                    variant="ghost" 
                    className="text-slate-300 hover:text-blue-300 hover:bg-slate-800 transition-all duration-200 font-medium"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth" className="hidden md:block">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 font-medium">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
            
            {/* Mobile menu toggle */}            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2 text-slate-300 hover:text-blue-300 hover:bg-slate-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>        </div>
      </div>
        {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700/50 shadow-lg">
          <div className="px-6 py-4 space-y-3">
            {/* Mobile Navigation Links */}
            <Link 
              href="/" 
              className="block px-4 py-2 rounded-lg text-slate-300 hover:text-blue-300 hover:bg-slate-800 transition-all duration-200 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/dashboard" 
              className="block px-4 py-2 rounded-lg text-slate-300 hover:text-blue-300 hover:bg-slate-800 transition-all duration-200 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              href="/#features" 
              className="block px-4 py-2 rounded-lg text-slate-300 hover:text-blue-300 hover:bg-slate-800 transition-all duration-200 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/#contact" 
              className="block px-4 py-2 rounded-lg text-slate-300 hover:text-blue-300 hover:bg-slate-800 transition-all duration-200 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="pt-3 border-t border-slate-700">              {user ? (
                // Authenticated mobile state
                <>
                  <div className="flex items-center space-x-2 px-4 py-2 mb-3 bg-green-900/50 border border-green-600 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-green-200 font-medium">
                      {user.email?.split('@')[0]}
                    </span>
                  </div>                  <Button 
                    variant="outline" 
                    onClick={handleSignOut} 
                    size="sm"
                    className="w-full border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white hover:border-slate-600 transition-all duration-200"
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                // Unauthenticated mobile state
                <div className="space-y-3">
                  <Link href="/auth" className="block" onClick={() => setMobileMenuOpen(false)}>
                    <Button 
                      variant="ghost" 
                      className="w-full text-slate-300 hover:text-blue-300 hover:bg-slate-800 transition-all duration-200 font-medium"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/auth" className="block" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 font-medium">
                      Get Started
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
