"use client";

import React, { useState } from 'react';
import { Menu, User, X } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-[var(--primary)]">
              VarsityHub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/notices" className="text-slate-600 hover:text-[var(--primary)] px-3 py-2 rounded-md text-sm font-medium">
              Notices
            </Link>
            <Link href="/routines" className="text-slate-600 hover:text-[var(--primary)] px-3 py-2 rounded-md text-sm font-medium">
              Routines
            </Link>
            <Link href="/resources" className="text-slate-600 hover:text-[var(--primary)] px-3 py-2 rounded-md text-sm font-medium">
              Resources
            </Link>
            <Link href="/forum" className="text-slate-600 hover:text-[var(--primary)] px-3 py-2 rounded-md text-sm font-medium">
              Forum
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 relative">
            <button 
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="p-2 rounded-full text-slate-600 hover:bg-slate-100 hover:text-[var(--primary)]"
            >
              <User className="h-6 w-6" />
            </button>
            
            {/* User Dropdown */}
            {isUserMenuOpen && (
              <div className="absolute top-12 right-0 w-48 bg-white rounded-md shadow-lg py-1 border border-slate-100 z-50">
                <Link href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                  Profile (My Info)
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">
                  Logout (Log Out)
                </Link>
              </div>
            )}

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-slate-600 hover:bg-slate-100 hover:text-[var(--primary)]"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-50 border-b border-slate-200 p-4">
          <nav className="space-y-2">
            <Link href="/notices" className="block text-slate-600 hover:text-[var(--primary)] px-3 py-2 rounded-md text-sm font-medium">
              Notices
            </Link>
            <Link href="/routines" className="block text-slate-600 hover:text-[var(--primary)] px-3 py-2 rounded-md text-sm font-medium">
              Routines
            </Link>
            <Link href="/resources" className="block text-slate-600 hover:text-[var(--primary)] px-3 py-2 rounded-md text-sm font-medium">
              Resources
            </Link>
            <Link href="/forum" className="block text-slate-600 hover:text-[var(--primary)] px-3 py-2 rounded-md text-sm font-medium">
              Forum
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
