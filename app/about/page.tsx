import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { 
  BeakerIcon,
  BoltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CheckIcon
} from '@heroicons/react/24/solid'

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <div className="flex-grow">
        <main className="container mx-auto px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">About NinjaStrat</h1>
          <div className="max-w-6xl mx-auto">
            <p className="text-text-secondary mb-16 text-center text-lg">
              Pioneering the future of automated trading with cutting-edge technology and proven strategies.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-semibold mb-6 text-primary">Our Mission</h2>
                <p className="text-text-secondary mb-6 text-lg">
                  At NinjaStrat, we believe that sophisticated trading technology should be accessible to all traders. 
                  Our mission is to democratize institutional-grade trading algorithms and empower individuals with 
                  the tools needed to navigate today's complex financial markets.
                </p>
                <p className="text-text-secondary mb-6">
                  We've developed StratEngine, our proprietary trading algorithm, to bring precision, discipline, 
                  and consistency to NASDAQ futures trading. By removing emotional decision-making and implementing 
                  systematic risk management, we help traders achieve their financial goals with confidence.
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h3 className="font-semibold text-primary mb-2">Why We Started NinjaStrat</h3>
                  <p className="text-text-secondary text-sm">
                    Founded by experienced traders and technologists who witnessed firsthand how emotional trading 
                    decisions and inconsistent strategies led to unnecessary losses. We created StratEngine to solve 
                    these fundamental challenges.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6">Our Core Values</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-primary mb-2">Transparency</h4>
                    <p className="text-text-secondary text-sm">
                      We believe in complete transparency about our algorithms, risk management, and performance metrics.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-500 mb-2">Innovation</h4>
                    <p className="text-text-secondary text-sm">
                      Continuously improving our technology to stay ahead of evolving market conditions.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-500 mb-2">Reliability</h4>
                    <p className="text-text-secondary text-sm">
                      Building robust, tested systems that traders can depend on in all market conditions.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-yellow-500 mb-2">Support</h4>
                    <p className="text-text-secondary text-sm">
                      Providing exceptional customer service and education to ensure trader success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-blue-50 rounded-lg p-12 mb-16">
              <h2 className="text-3xl font-semibold text-center mb-8">The StratEngine Advantage</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    5+
                  </div>
                  <h4 className="font-semibold mb-2">Years of Development</h4>
                  <p className="text-text-secondary text-sm">Rigorous testing and refinement across multiple market cycles</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    1M+
                  </div>
                  <h4 className="font-semibold mb-2">Trades Analyzed</h4>
                  <p className="text-text-secondary text-sm">Extensive backtesting and live trading validation</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    24/7
                  </div>
                  <h4 className="font-semibold mb-2">Market Monitoring</h4>
                  <p className="text-text-secondary text-sm">Continuous analysis during all trading hours</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6">Technology Behind StratEngine</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <BeakerIcon className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Advanced Analytics</h4>
                      <p className="text-text-secondary text-sm">Machine learning algorithms analyze market microstructure and volume patterns</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <BoltIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Ultra-Low Latency</h4>
                      <p className="text-text-secondary text-sm">Optimized code and infrastructure for millisecond trade execution</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <ShieldCheckIcon className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Risk Protection</h4>
                      <p className="text-text-secondary text-sm">Multi-layered risk management with real-time position monitoring</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <ChartBarIcon className="w-6 h-6 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Market Adaptation</h4>
                      <p className="text-text-secondary text-sm">Dynamic parameter adjustment based on current market volatility</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Our Commitment</h3>
                <p className="text-text-secondary mb-6">
                  We're committed to the long-term success of our users. This means continuous improvement 
                  of our algorithms, transparent communication about performance, and unwavering support 
                  for our trading community.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Regular algorithm updates and improvements</span>
                  </div>
                  <div className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Comprehensive performance reporting</span>
                  </div>
                  <div className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Dedicated customer support team</span>
                  </div>
                  <div className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Educational resources and training</span>
                  </div>
                  <div className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Community of successful traders</span>
                  </div>
                </div>
                
                <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h4 className="font-semibold text-yellow-800 mb-2">Our Promise</h4>
                  <p className="text-yellow-700 text-sm">
                    We will never compromise on the quality and integrity of our trading systems. 
                    Every update, every feature, and every decision is made with our users' success in mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center bg-primary/5 border border-primary/20 rounded-lg p-12">
              <h2 className="text-3xl font-semibold text-primary mb-6">Ready to Experience StratEngine?</h2>
              <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                Join thousands of traders who have transformed their trading with StratEngine's 
                precision and reliability. Take the first step towards consistent, disciplined trading.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Free Trial
                </button>
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Schedule Demo
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