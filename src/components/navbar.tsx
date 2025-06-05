"use client";

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import { supabase } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js';

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Initialize to true since Hero section (first section) is dark
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const pathname = usePathname();

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
  // Improved background detection logic for dynamic navbar styling
  const detectBackgroundColor = useCallback(() => {
    // Check if we're on dashboard page - always use light theme
    if (pathname === '/dashboard') {
      setIsDarkBackground(false);
      return;
    }

    const navbarHeight = 80; // Approximate navbar height
    const detectionPoint = window.scrollY + navbarHeight;
      // Define sections with their backgrounds - matches the actual section IDs and backgrounds
    const sections = [
      { id: 'hero', isDark: true, className: 'bg-slate-900' },
      { id: 'features', isDark: false, className: 'bg-white' },
      { id: 'benefits', isDark: false, className: 'bg-slate-50/50' },
      { id: 'cta', isDark: true, className: 'bg-slate-950' },
      { id: 'contact', isDark: true, className: 'bg-slate-950' }
    ];
    
    // Find which section we're currently in
    let currentSection = sections[0]; // Default to hero
    
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        const absoluteBottom = absoluteTop + rect.height;
        
        // Check if detection point is within this section
        if (detectionPoint >= absoluteTop && detectionPoint < absoluteBottom) {
          currentSection = section;
          break;
        }
      }
    }
    
    setIsDarkBackground(currentSection.isDark);
  }, [pathname]);
  useEffect(() => {
    // Initial detection
    detectBackgroundColor();

    // If we're on dashboard, no need for scroll listeners
    if (pathname === '/dashboard') {
      return;
    }

    // Throttled scroll handler to improve performance
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(detectBackgroundColor, 16); // ~60fps
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', detectBackgroundColor);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', detectBackgroundColor);
      clearTimeout(scrollTimeout);
    };
  }, [detectBackgroundColor, pathname]);
  
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setMobileMenuOpen(false);
  };  // Dynamic styles based on background with navbar background and no drop shadows
  const navbarStyles = isDarkBackground ? {
    nav: "fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-xl border-b border-slate-800/50",
    navContainer: "relative",
    logo: "text-blue-400 group-hover:text-blue-300",
    logoGlow: "bg-blue-400/20",    brandText: "text-white group-hover:text-blue-300",
    navLink: "text-white hover:text-blue-300",
    userBadge: "bg-emerald-800/70 backdrop-blur-sm border-emerald-600/50 text-emerald-100",
    signOutBtn: "border-slate-600/40 bg-slate-800/60 backdrop-blur-sm text-slate-200 hover:bg-slate-700/70 hover:text-white hover:border-slate-500/60",
    signInBtn: "text-slate-300 hover:text-blue-300 hover:bg-slate-800/40 backdrop-blur-sm",
    getStartedBtn: "bg-blue-600 hover:bg-blue-700 text-white",
    mobileToggle: "text-slate-300 hover:text-blue-300 hover:bg-slate-800/40 backdrop-blur-sm",
    mobileMenu: "bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50 shadow-2xl"  } : {
    nav: "fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/50",
    navContainer: "relative",
    logo: "text-blue-600 group-hover:text-blue-700",
    logoGlow: "bg-blue-600/20",
    brandText: "text-slate-900 group-hover:text-blue-700",
    navLink: "text-slate-900 hover:text-blue-600",
    userBadge: "bg-emerald-100/80 backdrop-blur-sm border-emerald-300/60 text-emerald-800",
    signOutBtn: "border-slate-300/40 bg-white/60 backdrop-blur-sm text-slate-700 hover:bg-slate-100/70 hover:text-slate-900 hover:border-slate-400/60",
    signInBtn: "text-slate-700 hover:text-blue-600 hover:bg-white/40 backdrop-blur-sm",
    getStartedBtn: "bg-blue-600 hover:bg-blue-700 text-white",
    mobileToggle: "text-slate-700 hover:text-blue-600 hover:bg-white/40 backdrop-blur-sm",
    mobileMenu: "bg-white/95 backdrop-blur-xl border-t border-slate-200/50 shadow-2xl"
  };
  return (
    <nav className={navbarStyles.nav}>
      <div className={`mx-auto max-w-7xl px-6 lg:px-8 ${navbarStyles.navContainer}`}>
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Shield className={`w-8 h-8 ${navbarStyles.logo} transition-colors duration-200`} />
                <div className={`absolute -inset-1 ${navbarStyles.logoGlow} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 blur-sm`}></div>
              </div>
              <span className={`text-xl font-bold ${navbarStyles.brandText} transition-colors duration-200`}>
                EComply
              </span>
            </Link>            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/dashboard" 
                className={`text-sm ${navbarStyles.navLink} transition-colors duration-200 font-medium`}
              >
                Dashboard
              </Link>
              <Link 
                href="/#features" 
                className={`text-sm ${navbarStyles.navLink} transition-colors duration-200 font-medium`}
              >
                Features
              </Link>
              <Link 
                href="/#contact" 
                className={`text-sm ${navbarStyles.navLink} transition-colors duration-200 font-medium`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Auth Buttons or User Info */}
          <div className="flex items-center space-x-3">
            {user ? (
              // Authenticated state
              <>
                <div className="hidden md:flex items-center space-x-3">                  <div className={`flex items-center space-x-2 px-3 py-1.5 ${navbarStyles.userBadge} backdrop-blur-sm border rounded-lg`}>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm font-medium">
                      {user.email?.split('@')[0]}
                    </span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  onClick={handleSignOut} 
                  size="sm"
                  className={`hidden md:flex ${navbarStyles.signOutBtn} backdrop-blur-sm transition-all duration-200`}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              // Unauthenticated state
              <>
                <Link href="/auth" className="hidden md:block">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className={`${navbarStyles.signInBtn} backdrop-blur-sm transition-all duration-200 font-medium text-xs`}
                  >
                    Sign In
                  </Button>
                </Link>                <Link href="/auth" className="hidden md:block">
                  <Button 
                    size="sm"
                    className={`${navbarStyles.getStartedBtn} hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 font-medium text-xs backdrop-blur-sm`}
                  >
                    Get Started
                  </Button>
                </Link>
              </>
            )}
            
            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="sm"
              className={`md:hidden p-2 ${navbarStyles.mobileToggle} backdrop-blur-sm`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden ${navbarStyles.mobileMenu}`}>
          <div className="px-6 py-4 space-y-3">            {/* Mobile Navigation Links */}
            <Link 
              href="/dashboard" 
              className={`block text-sm ${navbarStyles.navLink} transition-colors duration-200 font-medium py-2`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              href="/#features" 
              className={`block text-sm ${navbarStyles.navLink} transition-colors duration-200 font-medium py-2`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/#contact" 
              className={`block text-sm ${navbarStyles.navLink} transition-colors duration-200 font-medium py-2`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>            
            <div className={`pt-3 ${isDarkBackground ? 'border-t border-slate-700/20' : 'border-t border-slate-200/20'}`}>
              {user ? (
                // Authenticated mobile state
                <>                  <div className={`flex items-center space-x-2 px-4 py-2 mb-3 ${navbarStyles.userBadge} backdrop-blur-sm border rounded-lg`}>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm font-medium">
                      {user.email?.split('@')[0]}
                    </span>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={handleSignOut} 
                    size="sm"
                    className={`w-full ${navbarStyles.signOutBtn} backdrop-blur-sm transition-all duration-200`}
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
                      size="sm"
                      className={`w-full ${navbarStyles.signInBtn} backdrop-blur-sm transition-all duration-200 font-medium text-xs`}
                    >
                      Sign In
                    </Button>
                  </Link>                  <Link href="/auth" className="block" onClick={() => setMobileMenuOpen(false)}>
                    <Button 
                      size="sm"
                      className={`w-full ${navbarStyles.getStartedBtn} hover:shadow-lg transition-all duration-200 font-medium text-xs backdrop-blur-sm`}
                    >
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
