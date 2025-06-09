import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function DownloadsPage() {
  return (
    <>
      <Navigation />
      <div className="flex-grow">
        <main className="container mx-auto px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">
            Downloads
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-text-secondary mb-12 text-center text-lg">
              Download StratEngine and get started with automated futures
              trading.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray rounded-lg shadow-lg p-8 border-2 border-gray-200">
                <h2 className="text-2xl font-semibold mb-4">
                  StratEngine for NinjaTrader
                </h2>
                <p className="text-text-secondary mb-6">
                  Complete NinjaTrader addon with StratEngine algorithm
                </p>
                <ul className="text-text-secondary mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Automated entry and exit signals
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Dynamic risk management
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Real-time market analysis
                  </li>
                </ul>
                <button className="w-full bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Download StratEngine
                </button>
              </div>

              <div className="bg-gray rounded-lg shadow-lg p-8 border-2 border-gray-200">
                <h2 className="text-2xl font-semibold mb-4">
                  Documentation & Guides
                </h2>
                <p className="text-text-secondary mb-6">
                  Complete setup guides, configuration options, and best
                  practices for StratEngine.
                </p>
                <ul className="text-text-secondary mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">📋</span>
                    Installation Guide
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">⚙️</span>
                    Configuration Manual
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">🛠️</span>
                    Troubleshooting Guide
                  </li>
                </ul>
                <button className="w-full bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  View Documentation
                </button>
              </div>
            </div>

            <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                System Requirements
              </h3>
              <ul className="text-yellow-700 space-y-1">
                <li>• NinjaTrader 8.0 or higher</li>
                <li>• Windows 10/11 (64-bit)</li>
                <li>• Minimum 8GB RAM recommended</li>
                <li>• Active internet connection for real-time data</li>
                <li>• Valid NinjaStrat license</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
