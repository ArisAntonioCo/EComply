import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { User } from '@supabase/supabase-js';

interface NavbarProps {
  user?: User | null;
  onSignOut?: () => void;
}

export default function Navbar({ user, onSignOut }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600">📋</span>
              <span className="text-xl font-bold text-gray-900">Ecomply</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/dashboard" 
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Dashboard
            </Link>
          </div>          {/* Auth Buttons or User Info */}
          <div className="flex items-center space-x-4">
            {user ? (
              // Authenticated state
              <>
                <span className="text-sm text-gray-600 hidden md:block">
                  Welcome, {user.email}
                </span>
                <Button variant="outline" onClick={onSignOut} size="sm">
                  Sign Out
                </Button>
              </>
            ) : (
              // Unauthenticated state
              <>
                <Link href="/auth">
                  <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
