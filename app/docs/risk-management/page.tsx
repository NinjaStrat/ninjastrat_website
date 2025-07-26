import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'

export default function RiskManagementPage() {
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
            <span className="text-text-primary">Risk Management</span>
          </nav>

          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-8 text-primary">Risk Management Settings</h1>
            
            <div className="bg-warning/10 rounded-lg p-6 mb-8 border border-warning/20">
              <div className="flex items-start">
                <ExclamationTriangleIcon className="w-6 h-6 text-warning mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-text-primary mb-0 font-semibold">
                  Important: Proper risk management is critical for long-term trading success. 
                  Configure these settings carefully before live trading.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-6 text-text-primary">Position Sizing Methods</h2>
            
            <div className="space-y-6 mb-12">
              <div className="bg-surface rounded-lg p-6 border border-surface-elevated">
                <h3 className="text-xl font-semibold mb-3 text-primary">Account Percentage</h3>
                <p className="text-text-secondary mb-4">
                  Risk a fixed percentage of your account on each trade. This method automatically adjusts 
                  position size as your account grows or shrinks.
                </p>
                <div className="bg-surface-elevated rounded p-4">
                  <code className="text-sm text-secondary">
                    Risk Per Trade: 1-2% (recommended)<br/>
                    Example: $10,000 account × 2% = $200 risk per trade
                  </code>
                </div>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-surface-elevated">
                <h3 className="text-xl font-semibold mb-3 text-primary">Fixed Dollar Risk</h3>
                <p className="text-text-secondary mb-4">
                  Risk a specific dollar amount on each trade, regardless of account size. 
                  Best for experienced traders with consistent strategies.
                </p>
                <div className="bg-surface-elevated rounded p-4">
                  <code className="text-sm text-secondary">
                    Fixed Risk: $100-$500 per trade<br/>
                    Adjust based on your comfort level
                  </code>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-6 text-text-primary">Stop Loss Configuration</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-surface rounded-lg p-6 border border-surface-elevated">
                <h4 className="font-semibold text-text-primary mb-3">Fixed Stop</h4>
                <p className="text-text-secondary text-sm">
                  Set a specific number of ticks for your stop loss. 
                  Consistent but may not adapt to market volatility.
                </p>
              </div>
              
              <div className="bg-surface rounded-lg p-6 border border-surface-elevated">
                <h4 className="font-semibold text-text-primary mb-3">Previous Bar Stop</h4>
                <p className="text-text-secondary text-sm">
                  Place stop below/above the previous bar's low/high. 
                  Adapts to market structure.
                </p>
              </div>
              
              <div className="bg-surface rounded-lg p-6 border border-surface-elevated">
                <h4 className="font-semibold text-text-primary mb-3">Current Bar Stop</h4>
                <p className="text-text-secondary text-sm">
                  Use the entry bar's opposite extreme. 
                  Tighter stops but higher risk of premature exit.
                </p>
              </div>
              
              <div className="bg-surface rounded-lg p-6 border border-surface-elevated">
                <h4 className="font-semibold text-text-primary mb-3">ATR-Based Stop</h4>
                <p className="text-text-secondary text-sm">
                  Dynamic stops based on Average True Range. 
                  Best adaptation to market volatility.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-6 text-text-primary">Daily Limits</h2>
            
            <div className="bg-surface rounded-lg p-6 mb-8 border border-surface-elevated">
              <p className="text-text-secondary mb-4">
                Protect your account with daily trading limits:
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-error mr-2">•</span>
                  <span><strong className="text-text-primary">Daily Loss Limit:</strong> Stop trading after losing 3-5% of account</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">•</span>
                  <span><strong className="text-text-primary">Daily Profit Target:</strong> Consider stopping after 5-10% gain</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warning mr-2">•</span>
                  <span><strong className="text-text-primary">Max Trades:</strong> Limit to 3-5 trades per day to avoid overtrading</span>
                </li>
              </ul>
            </div>

            {/* Configuration Example */}
            <div className="bg-surface-elevated rounded-lg p-8 mt-12 border border-primary/20">
              <h3 className="text-xl font-semibold mb-4 text-primary">Recommended Starting Configuration</h3>
              <div className="bg-background rounded p-4 font-mono text-sm">
                <pre className="text-text-secondary">
{`Account Size: $10,000
Risk Per Trade: 1.5% ($150)
Stop Type: Previous Bar
Daily Loss Limit: $300 (2 losses)
Daily Profit Target: $500
Max Daily Trades: 4`}
                </pre>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-surface-elevated">
              <Link 
                href="/docs/getting-started" 
                className="text-primary hover:text-primary-hover transition-colors flex items-center"
              >
                ← Getting Started
              </Link>
              <Link 
                href="/docs/patterns" 
                className="text-primary hover:text-primary-hover transition-colors flex items-center"
              >
                Pattern Recognition →
              </Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}