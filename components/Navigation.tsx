'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-surface/95 backdrop-blur-md border-b border-surface-elevated sticky top-0 z-50">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-xl text-background group-hover:scale-105 transition-transform duration-200 glow-primary">
              N
            </div>
            <span className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-200">
              NinjaStrat
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/pricing" className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
              Pricing
            </Link>
            <Link href="/downloads" className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
              Downloads
            </Link>
            <Link href="/support" className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
              Support
            </Link>
            <Link href="/faq" className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
              FAQ
            </Link>
            <Link href="/ninjatrader" className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
              NinjaTrader
            </Link>
            <Link href="/contact" className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
              Contact
            </Link>
            <Link href="/about" className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
              About
            </Link>
            <button className="btn-primary glow-primary">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-text-primary hover:text-primary transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-surface-elevated">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/pricing" 
                className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/downloads" 
                className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Downloads
              </Link>
              <Link 
                href="/support" 
                className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Support
              </Link>
              <Link 
                href="/faq" 
                className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="/ninjatrader" 
                className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                NinjaTrader
              </Link>
              <Link 
                href="/contact" 
                className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/about" 
                className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <button 
                className="btn-primary mt-4 text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 