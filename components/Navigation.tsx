'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImagePath } from '@/lib/utils'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavigationDropdown } from '@/components/ui/NavigationDropdown'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const indicatorItems = [
    { name: 'View All Indicators', href: '/indicators', description: 'Browse complete indicator gallery' },
    { name: 'StratCandles', href: '/indicators/stratcandles', description: 'Visual candle painting' },
    { name: 'StratPatterns', href: '/indicators/stratpatterns', description: 'Pattern recognition overlay' },
    { name: 'StratScanner', href: '/indicators/stratscanner', description: 'Multi-timeframe scanner' },
    { name: 'StratAlerts', href: '/indicators/stratalerts', description: 'Real-time notifications' },
  ]

  const strategyItems = [
    { name: 'View All Strategies', href: '/strategies', description: 'Browse complete strategy gallery' },
    { name: 'STRATENGINE', href: '/strategies/stratengine', description: 'Complete automation suite' },
    { name: 'Sniper', href: '/strategies/sniper', description: 'Precision entries' },
    { name: 'Failed 2s', href: '/strategies/failed2s', description: 'Reversal specialist' },
    { name: 'FibStrike', href: '/strategies/fibstrike', description: 'Fibonacci patterns' },
    { name: 'TapsORBs', href: '/strategies/tapsorbs', description: 'Range breakouts' },
    { name: 'Hourly Stats', href: '/strategies/hourlystats', description: 'Statistical edge (beta)' },
    { name: 'StrongClose', href: '/strategies/strongclose', description: 'Strength based (beta)' },
  ]

  return (
    <nav className="bg-surface-elevated/95 backdrop-blur-md border-b border-surface-higher sticky top-0 z-50">
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
            <NavigationDropdown label="Indicators" items={indicatorItems} />
            <NavigationDropdown label="Strategies" items={strategyItems} />
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
            <Link href="/pricing" className="btn-primary glow-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-text-primary hover:text-primary transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
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