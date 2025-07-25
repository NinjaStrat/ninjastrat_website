'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImagePath } from '@/lib/utils'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-surface/95 backdrop-blur-md border-b border-surface-elevated sticky top-0 z-50">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 group-hover:scale-105 transition-transform duration-200">
              <Image 
                src={getImagePath('/images/NS_logo.png')}
                alt="NinjaStrat Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
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
            <Link href="/indicators" className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
              Indicators
            </Link>
            <Link href="/strategies" className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium">
              Strategies
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
                href="/indicators" 
                className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Indicators
              </Link>
              <Link 
                href="/strategies" 
                className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Strategies
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