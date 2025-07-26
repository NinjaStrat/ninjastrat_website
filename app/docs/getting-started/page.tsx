import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/24/solid'

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-8 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <Link href="/support" className="text-text-muted hover:text-primary transition-colors">
              Support
            </Link>
            <span className="mx-2 text-text-muted">/</span>
            <Link href="/docs" className="text-text-muted hover:text-primary transition-colors">
              Documentation
            </Link>
            <span className="mx-2 text-text-muted">/</span>
            <span className="text-text-primary">Getting Started</span>
          </nav>

          {/* Main Content */}
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-8 text-primary">Getting Started with StratEngine</h1>
            
            <div className="bg-surface-elevated rounded-lg p-6 mb-8 border border-surface-higher">
              <p className="text-text-secondary mb-0">
                This guide will walk you through installing and configuring StratEngine for NinjaTrader 8.
                Estimated time: 15 minutes
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-6 text-text-primary">Prerequisites</h2>
            <ul className="space-y-2 text-text-secondary mb-8">
              <li className="flex items-start">
                <CheckIcon className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                <span>NinjaTrader 8 installed and configured</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                <span>Valid NinjaTrader license (Free or Paid)</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                <span>Market data connection (Kinetick recommended)</span>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-6 text-text-primary">Step 1: Download StratEngine</h2>
            <div className="bg-surface rounded-lg p-6 mb-8 border border-surface-elevated">
              <ol className="space-y-4 text-text-secondary">
                <li>
                  <strong className="text-text-primary">1.1</strong> Log into your NinjaStrat account at{' '}
                  <a href="https://whop.com/ninjastrat/" className="text-primary hover:text-primary-hover">
                    whop.com/ninjastrat
                  </a>
                </li>
                <li>
                  <strong className="text-text-primary">1.2</strong> Navigate to the Downloads section
                </li>
                <li>
                  <strong className="text-text-primary">1.3</strong> Download the latest StratEngine.zip file
                </li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-6 text-text-primary">Step 2: Import into NinjaTrader</h2>
            <div className="bg-surface rounded-lg p-6 mb-8 border border-surface-elevated">
              <ol className="space-y-4 text-text-secondary">
                <li>
                  <strong className="text-text-primary">2.1</strong> Open NinjaTrader 8
                </li>
                <li>
                  <strong className="text-text-primary">2.2</strong> Go to Tools → Import → NinjaScript Add-On
                </li>
                <li>
                  <strong className="text-text-primary">2.3</strong> Select the downloaded StratEngine.zip file
                </li>
                <li>
                  <strong className="text-text-primary">2.4</strong> Click "Import" and wait for completion
                </li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-6 text-text-primary">Step 3: Initial Configuration</h2>
            <div className="bg-surface rounded-lg p-6 mb-8 border border-surface-elevated">
              <p className="text-text-secondary mb-4">
                After importing, you'll need to configure your risk parameters:
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li>• Account size for position sizing</li>
                <li>• Risk per trade (recommended: 1-2%)</li>
                <li>• Default stop loss settings</li>
                <li>• Timeframe continuity preferences</li>
              </ul>
            </div>

            {/* Next Steps */}
            <div className="bg-primary/10 rounded-lg p-8 mt-12 border border-primary/20">
              <h3 className="text-xl font-semibold mb-4 text-text-primary">Next Steps</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link 
                  href="/docs/risk-management" 
                  className="bg-surface-elevated rounded-lg p-4 border border-surface-higher hover:border-primary/50 transition-all"
                >
                  <h4 className="font-semibold text-primary mb-2">Risk Management →</h4>
                  <p className="text-sm text-text-secondary">Configure position sizing and protection</p>
                </Link>
                <Link 
                  href="/docs/patterns" 
                  className="bg-surface-elevated rounded-lg p-4 border border-surface-higher hover:border-primary/50 transition-all"
                >
                  <h4 className="font-semibold text-primary mb-2">Pattern Recognition →</h4>
                  <p className="text-sm text-text-secondary">Understanding #TheStrat patterns</p>
                </Link>
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-12 text-center text-text-secondary">
              <p className="mb-4">Need help? Check our <Link href="/faq" className="text-primary hover:text-primary-hover">FAQ</Link> or contact support.</p>
              <Link href="/support" className="btn-primary inline-block">
                Contact Support
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}