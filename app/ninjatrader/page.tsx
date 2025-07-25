import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function NinjaTraderPage() {
  return (
    <>
      <Navigation />
      <div className="flex-grow">
        <main className="container mx-auto px-8 py-20">
          <div className="max-w-7xl mx-auto">
            {/* Top Section - NinjaTrader */}
            <div className="mb-32">
              <h1 className="text-4xl font-bold text-center mb-16 text-primary">Our Recommended Trading Platform</h1>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Images */}
                <div className="text-center">
                  <Image 
                    src="/images/NinjaTrader_Wordmark_color_RGB.png" 
                    alt="NinjaTrader Wordmark" 
                    width={400}
                    height={100}
                    className="mx-auto mb-6 max-w-sm w-full h-auto"
                  />
                  <Image 
                    src="/images/NinjaTrader_Monitor_Image.png" 
                    alt="NinjaTrader Platform" 
                    width={600}
                    height={400}
                    className="mx-auto max-w-full w-full h-auto"
                  />
                </div>
                
                {/* Right side - Content */}
                <div>
                  <p className="text-text-secondary text-lg mb-8">
                    NinjaTrader® is our #1 recommended trading platform preferred by traders worldwide including our clients.
                  </p>
                  
                  <div className="bg-bg-secondary rounded-lg p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-primary">Download NinjaTrader & receive immediate FREE access to:</h2>
                    <ul className="space-y-3 text-text-secondary">
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>Simulated trading with real-time futures data</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>Advanced charting including ability to trade directly from your charts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>High performance backtesting engine to analyze your trading strategies on historical data</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span>Advanced Trade Management featuring automatically submitted stop orders, target orders, and trailing stops</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-text-secondary mb-8">
                    <p className="mb-4">
                      NinjaTrader's award-winning trading platform is consistently voted an industry leader by the trading community. 
                      Featuring 1000s of Apps & Add-Ons for unlimited customization, NinjaTrader is used by over 1.9 million traders 
                      for advanced market analysis, professional charting and fast order execution.
                    </p>
                    <p className="mb-6">
                      For new traders, start preparing for the live markets with a free trading simulator featuring real-time market data.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <button className="btn-primary text-xl px-8 py-4 rounded-lg font-semibold">
                      Get Started for FREE!
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Kinetick */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-16 text-primary">Our Recommended Market Data Feed</h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Content */}
                <div>
                  <div className="bg-bg-secondary rounded-lg p-6">
                    <p className="text-text-secondary mb-6">
                      Kinetick® delivers reliable, fast and cost-effective market data to help level the playing field for active traders. 
                      Take advantage of unfiltered, real time quotes for stocks, futures and forex that exceed the expectations of the 
                      world's most demanding traders, like us!
                    </p>
                    <p className="text-text-secondary mb-8">
                      Get started with FREE end-of-day historical market data directly through the NinjaTrader platform and learn how 
                      you can significantly reduce CME Group Globex exchange fees on real-time market data with Kinetick.
                    </p>
                    
                    <div className="text-center">
                      <button className="btn-primary text-xl px-8 py-4 rounded-lg font-semibold">
                        Get Started with Free EOD Data
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Images */}
                <div className="text-center">
                  <Image 
                    src="/images/Kinetick_Logo.png" 
                    alt="Kinetick Logo" 
                    width={300}
                    height={100}
                    className="mx-auto mb-6 max-w-sm w-full h-auto"
                  />
                  <Image 
                    src="/images/Kinetick_Badge.png" 
                    alt="Kinetick Badge" 
                    width={400}
                    height={400}
                    className="mx-auto max-w-md w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
} 