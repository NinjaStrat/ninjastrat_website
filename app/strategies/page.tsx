import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function StrategiesPage() {
  return (
    <>
      <Navigation />
      <div className="flex-grow">
        <main className="container mx-auto px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">
            Strategies
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-text-secondary mb-12 text-center text-lg">
              Download our automated trading strategies powered by #TheStrat
              methodology.
            </p>
            <div className="space-y-8">
              {/* Production Strategies */}
              <div>
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Production Strategies
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-surface-elevated rounded-lg shadow-lg p-8 border border-primary/20 hover:border-primary/40 transition-colors">
                    <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                      STRATENGINE
                    </h2>
                    <p className="text-text-secondary mb-6">
                      The flagship automated trading system implementing
                      complete #TheStrat methodology with advanced risk
                      management and multi-timeframe analysis.
                    </p>
                    <ul className="text-text-secondary mb-6 space-y-2">
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Full #TheStrat pattern recognition
                      </li>
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Timeframe continuity analysis
                      </li>
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Professional risk management
                      </li>
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Automated trade execution
                      </li>
                    </ul>
                    <button className="w-full btn-primary">
                      Download STRATENGINE.cs
                    </button>
                  </div>

                  <div className="bg-surface-elevated rounded-lg shadow-lg p-8 border border-primary/20 hover:border-primary/40 transition-colors">
                    <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                      StratEngine Sniper
                    </h2>
                    <p className="text-text-secondary mb-6">
                      Precision trading strategy focused on high-probability
                      sniper entries with tight risk control for maximum
                      R-multiple returns.
                    </p>
                    <ul className="text-text-secondary mb-6 space-y-2">
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Sniper entry precision
                      </li>
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Tight stop management
                      </li>
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        High R-multiple targets
                      </li>
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Pattern confirmation filters
                      </li>
                    </ul>
                    <button className="w-full btn-primary">
                      Download StratEngineSniper.cs
                    </button>
                  </div>

                  <div className="bg-surface-elevated rounded-lg shadow-lg p-8 border border-primary/20 hover:border-primary/40 transition-colors">
                    <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                      StratEngine Failed 2s
                    </h2>
                    <p className="text-text-secondary mb-6">
                      Specialized strategy that capitalizes on failed 2U/2D
                      patterns which often lead to explosive moves in the
                      opposite direction.
                    </p>
                    <ul className="text-text-secondary mb-6 space-y-2">
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Failed pattern detection
                      </li>
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Reversal confirmation
                      </li>
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Momentum analysis
                      </li>
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Quick profit targets
                      </li>
                    </ul>
                    <button className="w-full btn-primary">
                      Download StratEngineFailed2s.cs
                    </button>
                  </div>

                  <div className="bg-surface-elevated rounded-lg shadow-lg p-8 border border-primary/20 hover:border-primary/40 transition-colors">
                    <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                      FibStrike
                    </h2>
                    <p className="text-text-secondary mb-6">
                      Advanced Fibonacci-based strategy that combines key
                      retracement levels with #TheStrat patterns for
                      high-precision entries.
                    </p>
                    <ul className="text-text-secondary mb-6 space-y-2">
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Fibonacci level analysis
                      </li>
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Pattern confluence detection
                      </li>
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Multi-level targets
                      </li>
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Dynamic position sizing
                      </li>
                    </ul>
                    <button className="w-full btn-primary">
                      Download FibStrike.cs
                    </button>
                  </div>

                  <div className="bg-surface-elevated rounded-lg shadow-lg p-8 border border-primary/20 hover:border-primary/40 transition-colors">
                    <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                      Hourly Stats
                    </h2>
                    <p className="text-text-secondary mb-6">
                      Statistical analysis strategy that trades based on hourly
                      market patterns and historical probability edges.
                    </p>
                    <ul className="text-text-secondary mb-6 space-y-2">
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Hourly pattern analysis
                      </li>
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Statistical edge trading
                      </li>
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Time-based entries
                      </li>
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Probability filters
                      </li>
                    </ul>
                    <button className="w-full btn-primary">
                      Download HourlyStats.cs
                    </button>
                  </div>

                  <div className="bg-surface-elevated rounded-lg shadow-lg p-8 border border-primary/20 hover:border-primary/40 transition-colors">
                    <h2 className="text-2xl font-semibold mb-4 text-text-primary">
                      Hourly Closes
                    </h2>
                    <p className="text-text-secondary mb-6">
                      Systematic strategy focused on trading hourly close
                      patterns with specific setups that have shown consistent
                      profitability.
                    </p>
                    <ul className="text-text-secondary mb-6 space-y-2">
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Hourly close analysis
                      </li>
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Pattern recognition
                      </li>
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Systematic entries
                      </li>
                      <li className="flex items-center">
                        <span className="text-success mr-2">✓</span>
                        Time-tested setups
                      </li>
                    </ul>
                    <button className="w-full btn-primary">
                      Download HourlyCloses.cs
                    </button>
                  </div>
                </div>
              </div>

              {/* Development Strategies */}
              <div>
                <h2 className="text-2xl font-semibold text-warning mb-6">
                  Development Strategies (Beta)
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-surface-elevated rounded-lg shadow-lg p-8 border border-warning/20 hover:border-warning/40 transition-colors">
                    <h2 className="text-2xl font-semibold mb-4 text-warning">
                      FibStrike Experiments
                    </h2>
                    <p className="text-text-secondary mb-6">
                      Experimental variations of the FibStrike strategy testing
                      new Fibonacci combinations and advanced pattern filters.
                    </p>
                    <ul className="text-text-secondary mb-6 space-y-2">
                      <li className="flex items-center">
                        <span className="text-warning mr-2">⚡</span>
                        Experimental features
                      </li>
                      <li className="flex items-center">
                        <span className="text-warning mr-2">⚡</span>
                        Advanced Fib combinations
                      </li>
                      <li className="flex items-center">
                        <span className="text-warning mr-2">⚡</span>
                        New pattern filters
                      </li>
                    </ul>
                    <span className="text-sm text-warning">
                      Beta Version - Use with caution
                    </span>
                    <button className="w-full btn-primary mt-4">
                      Download FibStrike_Experiments.cs
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-warning/10 border border-warning/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-warning mb-2">
                System Requirements
              </h3>
              <ul className="text-text-secondary space-y-1">
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
