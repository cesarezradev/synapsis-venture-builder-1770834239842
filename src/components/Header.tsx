"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">
            VentureBuilder
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-purple-600 transition">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-purple-600 transition">
              Portfolio
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition">
              About
            </Link>
            <a href="mailto:contact@venture-builder.com" className="gradient-bg text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-purple-600 transition">
              Home
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-purple-600 transition">
              Services
            </Link>
            <Link href="/portfolio" className="block text-gray-700 hover:text-purple-600 transition">
              Portfolio
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-purple-600 transition">
              About
            </Link>
            <a href="mailto:contact@venture-builder.com" className="block gradient-bg text-white px-6 py-2 rounded-lg font-semibold text-center hover:opacity-90 transition">
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}