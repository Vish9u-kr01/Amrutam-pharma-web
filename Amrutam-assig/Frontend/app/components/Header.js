'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-br from-yellow-50 to-orange-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Nav */}
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl sm:text-3xl font-bold text-green-700 tracking-wide">
            AMRUTAM
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-green-700 transition-colors">About Us</Link>
            <a href="#onboarding" className="text-gray-700 hover:text-green-700 transition-colors">Onboarding</a>
            <Link href="/FAQ" className="text-gray-700 hover:text-green-700 transition-colors">FAQ</Link>
            <a href="#Testimonials" className="text-gray-700 hover:text-green-700 transition-colors">Testimonials</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-green-700 focus:outline-none"
            aria-label="Toggle Mobile Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-2 px-2 pb-4 space-y-2 bg-white rounded-lg shadow-sm transition-all">
            <Link href="/about" className="block text-gray-700 hover:text-green-700">About Us</Link>
            <a href="#onboarding" className="block text-gray-700 hover:text-green-700">Onboarding</a>
            <Link href="/FAQ" className="block text-gray-700 hover:text-green-700">FAQ</Link>
            <a href="#Testimonials" className="block text-gray-700 hover:text-green-700">Testimonials</a>
          </nav>
        )}
      </div>
    </header>
  );
}

