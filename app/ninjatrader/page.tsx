import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function NinjaTraderPage() {
  return (
    <>
      <Navigation />
      <div className="flex-grow">
        <main className="container mx-auto px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">NinjaTrader Integration</h1>
          <div className="max-w-6xl mx-auto">
            <p className="text-text-secondary mb-12 text-center text-lg">
              StratEngine seamlessly integrates with NinjaTrader 8 to provide automated NASDAQ futures trading.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-semibold mb-6 text-primary">Why NinjaTrader?</h2>
                <p className="text-text-secondary mb-6">
                  NinjaTrader is the world's leading futures trading platform, providing advanced charting, 
                  market analysis, and automated trading capabilities. StratEngine leverages NinjaTrader's 
                  robust infrastructure to deliver institutional-grade trading automation.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold">Real-time Market Data</h4>
                      <p className="text-text-secondary">Access to live futures data and advanced charting tools</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold">Automated Execution</h4>
                      <p className="text-text-secondary">Lightning-fast order placement and management</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold">Risk Management</h4>
                      <p className="text-text-secondary">Built-in position sizing and stop loss controls</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <h4 className="font-semibold">Broker Connectivity</h4>
                      <p className="text-text-secondary">Connect to major futures brokers worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6">StratEngine Features in NinjaTrader</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-primary mb-2">Smart Order Management</h4>
                    <p className="text-text-secondary text-sm">
                      Automatically manages entry, stop loss, and profit targets based on market conditions
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-500 mb-2">Real-time Analysis</h4>
                    <p className="text-text-secondary text-sm">
                      Continuously analyzes market structure and price action for optimal timing
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-500 mb-2">News Event Protection</h4>
                    <p className="text-text-secondary text-sm">
                      Automatically adjusts trading behavior around high-impact news events
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-yellow-500 mb-2">Performance Tracking</h4>
                    <p className="text-text-secondary text-sm">
                      Detailed analytics and reporting integrated with NinjaTrader's tools
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-blue-50 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-semibold text-center mb-8">Installation Process</h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    1
                  </div>
                  <h4 className="font-semibold mb-2">Download</h4>
                  <p className="text-text-secondary text-sm">Get StratEngine from our Downloads page</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    2
                  </div>
                  <h4 className="font-semibold mb-2">Install</h4>
                  <p className="text-text-secondary text-sm">Run the installer and follow the setup wizard</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    3
                  </div>
                  <h4 className="font-semibold mb-2">Configure</h4>
                  <p className="text-text-secondary text-sm">Set up your trading parameters and broker connection</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    4
                  </div>
                  <h4 className="font-semibold mb-2">Trade</h4>
                  <p className="text-text-secondary text-sm">Start automated trading with StratEngine</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">System Requirements</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    NinjaTrader 8.0 or higher
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    Windows 10/11 (64-bit)
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    Minimum 8GB RAM
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    Active internet connection
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    Valid NinjaStrat license
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Supported Brokers</h3>
                <p className="text-text-secondary mb-4">
                  StratEngine works with any NinjaTrader-compatible broker, including:
                </p>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    NinjaTrader Brokerage
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Interactive Brokers
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    TD Ameritrade
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    And many more...
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-primary mb-4">Ready to Get Started?</h3>
              <p className="text-text-secondary mb-6">
                Download StratEngine and start automated trading with NinjaTrader today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Download StratEngine
                </button>
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Documentation
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