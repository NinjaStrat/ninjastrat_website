import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function FAQPage() {
  return (
    <>
      <Navigation />
      <div className="flex-grow">
        <main className="container mx-auto px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">Frequently Asked Questions</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-text-secondary mb-12 text-center text-lg">
              Find answers to common questions about NinjaStrat's StratEngine.
            </p>
            
            <div className="space-y-8">
              <div className="bg-surface-elevated rounded-lg shadow-lg p-6 border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-primary mb-3">What is StratEngine?</h3>
                <p className="text-text-secondary">
                  StratEngine is NinjaStrat's proprietary trading algorithm designed specifically for NASDAQ futures (NQ/MNQ). 
                  It uses advanced market structure analysis, volume patterns, and moving averages to identify high-probability 
                  trading opportunities with automated entry and exit management.
                </p>
              </div>

              <div className="bg-surface-elevated rounded-lg shadow-lg p-6 border-l-4 border-sky-blue">
                <h3 className="text-xl font-semibold text-sky-blue mb-3">How does StratEngine work?</h3>
                <p className="text-text-secondary">
                  StratEngine analyzes real-time market data to identify optimal entry points by waiting for price to come to 
                  predetermined levels rather than chasing the market. It incorporates dynamic risk management, news event protection, 
                  and chop detection to maximize profitability while minimizing drawdown.
                </p>
              </div>

              <div className="bg-surface-elevated rounded-lg shadow-lg p-6 border-l-4 border-success">
                <h3 className="text-xl font-semibold text-success mb-3">What platforms does StratEngine support?</h3>
                <p className="text-text-secondary">
                  StratEngine is currently available as a NinjaTrader 8 addon. It requires NinjaTrader 8.0 or higher and is 
                  compatible with Windows 10/11 (64-bit). We recommend having at least 8GB of RAM for optimal performance.
                </p>
              </div>

              <div className="bg-surface-elevated rounded-lg shadow-lg p-6 border-l-4 border-warning">
                <h3 className="text-xl font-semibold text-warning mb-3">Can I use StratEngine with my existing broker?</h3>
                <p className="text-text-secondary">
                  StratEngine works with any broker that's supported by NinjaTrader 8. This includes most major futures brokers. 
                  You'll need to have your broker account connected to NinjaTrader for StratEngine to place trades automatically.
                </p>
              </div>

              <div className="bg-surface-elevated rounded-lg shadow-lg p-6 border-l-4 border-secondary">
                <h3 className="text-xl font-semibold text-secondary mb-3">What is the minimum account size required?</h3>
                <p className="text-text-secondary">
                  We recommend a minimum account size of $10,000 for NQ trading and $2,500 for MNQ trading. However, you can 
                  start testing with smaller amounts or demo accounts to familiarize yourself with the system before scaling up.
                </p>
              </div>

              <div className="bg-surface-elevated rounded-lg shadow-lg p-6 border-l-4 border-error">
                <h3 className="text-xl font-semibold text-error mb-3">Does StratEngine guarantee profits?</h3>
                <p className="text-text-secondary">
                  No trading system can guarantee profits. While StratEngine is designed to identify high-probability opportunities 
                  and manage risk effectively, all trading involves risk and potential for loss. Past performance does not guarantee 
                  future results. Only trade with risk capital you can afford to lose.
                </p>
              </div>

              <div className="bg-surface-elevated rounded-lg shadow-lg p-6 border-l-4 border-light-purple">
                <h3 className="text-xl font-semibold text-light-purple mb-3">How often does StratEngine trade?</h3>
                <p className="text-text-secondary">
                  StratEngine's trading frequency depends on market conditions. It may execute several trades per day during 
                  volatile periods or remain inactive during choppy, sideways markets. The algorithm prioritizes quality 
                  opportunities over quantity to maintain optimal risk-reward ratios.
                </p>
              </div>

              <div className="bg-surface-elevated rounded-lg shadow-lg p-6 border-l-4 border-bright-pink">
                <h3 className="text-xl font-semibold text-bright-pink mb-3">Can I customize StratEngine's settings?</h3>
                <p className="text-text-secondary">
                  Yes, StratEngine offers several customizable parameters including position size, risk tolerance, and trading hours. 
                  However, we recommend using the default settings initially, as they have been optimized through extensive backtesting 
                  and live trading.
                </p>
              </div>

              <div className="bg-surface-elevated rounded-lg shadow-lg p-6 border-l-4 border-teal">
                <h3 className="text-xl font-semibold text-teal mb-3">What kind of support is available?</h3>
                <p className="text-text-secondary">
                  NinjaStrat provides comprehensive support including email assistance, detailed documentation, 
                  video tutorials, and a knowledge base. Our support team is available Monday-Friday, 
                  9 AM - 5 PM EST.
                </p>
              </div>

              <div className="bg-surface-elevated rounded-lg shadow-lg p-6 border-l-4 border-orange">
                <h3 className="text-xl font-semibold text-orange mb-3">How do I get started with StratEngine?</h3>
                <p className="text-text-secondary">
                  To get started: 1) Ensure you have NinjaTrader 8 installed, 2) Download StratEngine from our Downloads page, 
                  3) Follow the installation guide, 4) Configure your broker connection, 5) Start with a demo account to 
                  familiarize yourself with the system, 6) Contact our support team if you need assistance.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-primary mb-4">Still have questions?</h3>
              <p className="text-text-secondary mb-6">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Contact Support
                </button>
                <button className="bg-surface-higher hover:bg-dark-quaternary text-text-primary px-8 py-3 rounded-lg font-semibold transition-colors">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
} 