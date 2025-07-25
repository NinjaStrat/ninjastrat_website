import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function IndicatorsPage() {
  return (
    <>
      <Navigation />
      <div className="flex-grow">
        <main className="container mx-auto px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">Indicators</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-text-secondary mb-12 text-center text-lg">
              Download our custom NinjaTrader indicators for enhanced market analysis.
            </p>
            
            <div className="space-y-8">
              {/* Production Indicators */}
              <div>
                <h2 className="text-2xl font-semibold text-primary mb-6">Production Indicators</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-surface-elevated rounded-lg shadow-lg p-6 border border-primary/20 hover:border-primary/40 transition-colors">
                    <h3 className="text-xl font-semibold text-primary mb-3">Timeframe Continuity</h3>
                    <p className="text-text-secondary mb-4">
                      Multi-timeframe analysis indicator showing alignment across different time periods for optimal entry timing.
                    </p>
                    <button className="btn-primary w-full">
                      Download TimeframeContinuity.cs
                    </button>
                  </div>

                  <div className="bg-surface-elevated rounded-lg shadow-lg p-6 border border-primary/20 hover:border-primary/40 transition-colors">
                    <h3 className="text-xl font-semibold text-primary mb-3">StratEngine Sniper Indicator</h3>
                    <p className="text-text-secondary mb-4">
                      Precision entry indicator designed to identify high-probability sniper setups using #TheStrat methodology.
                    </p>
                    <button className="btn-primary w-full">
                      Download StratEngineSniperIndicator.cs
                    </button>
                  </div>

                  <div className="bg-surface-elevated rounded-lg shadow-lg p-6 border border-primary/20 hover:border-primary/40 transition-colors">
                    <h3 className="text-xl font-semibold text-primary mb-3">StratEngine Failed 2s Indicator</h3>
                    <p className="text-text-secondary mb-4">
                      Identifies failed 2 bar patterns (2U/2D) that often lead to powerful reversals and continuation moves.
                    </p>
                    <button className="btn-primary w-full">
                      Download StratEngineFailed2sIndicator.cs
                    </button>
                  </div>

                  <div className="bg-surface-elevated rounded-lg shadow-lg p-6 border border-primary/20 hover:border-primary/40 transition-colors">
                    <h3 className="text-xl font-semibold text-primary mb-3">ATR Trail</h3>
                    <p className="text-text-secondary mb-4">
                      Advanced trailing stop indicator using Average True Range for dynamic position management.
                    </p>
                    <button className="btn-primary w-full">
                      Download ATRtrail.cs
                    </button>
                  </div>

                  <div className="bg-surface-elevated rounded-lg shadow-lg p-6 border border-primary/20 hover:border-primary/40 transition-colors">
                    <h3 className="text-xl font-semibold text-primary mb-3">Supertrend</h3>
                    <p className="text-text-secondary mb-4">
                      Popular trend following indicator that helps identify the overall market direction and potential reversals.
                    </p>
                    <button className="btn-primary w-full">
                      Download Supertrend.cs
                    </button>
                  </div>

                  <div className="bg-surface-elevated rounded-lg shadow-lg p-6 border border-primary/20 hover:border-primary/40 transition-colors">
                    <h3 className="text-xl font-semibold text-primary mb-3">Labeler</h3>
                    <p className="text-text-secondary mb-4">
                      Chart labeling tool for marking important levels, patterns, and trade setups directly on your charts.
                    </p>
                    <button className="btn-primary w-full">
                      Download Labeler.cs
                    </button>
                  </div>
                </div>
              </div>

              {/* Development Indicators */}
              <div>
                <h2 className="text-2xl font-semibold text-warning mb-6">Development Indicators (Beta)</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-surface-elevated rounded-lg shadow-lg p-6 border border-warning/20 hover:border-warning/40 transition-colors">
                    <h3 className="text-xl font-semibold text-warning mb-3">BeeEfs</h3>
                    <p className="text-text-secondary mb-4">
                      Experimental indicator in development. Pattern recognition system focusing on specific market formations.
                    </p>
                    <span className="text-sm text-warning">Beta Version</span>
                    <button className="btn-primary w-full mt-4">
                      Download BeeEfs.cs
                    </button>
                  </div>

                  <div className="bg-surface-elevated rounded-lg shadow-lg p-6 border border-warning/20 hover:border-warning/40 transition-colors">
                    <h3 className="text-xl font-semibold text-warning mb-3">BeeOhEs</h3>
                    <p className="text-text-secondary mb-4">
                      Experimental indicator in development. Advanced pattern detection algorithm for market structure analysis.
                    </p>
                    <span className="text-sm text-warning">Beta Version</span>
                    <button className="btn-primary w-full mt-4">
                      Download BeeOhEs.cs
                    </button>
                  </div>

                  <div className="bg-surface-elevated rounded-lg shadow-lg p-6 border border-warning/20 hover:border-warning/40 transition-colors">
                    <h3 className="text-xl font-semibold text-warning mb-3">Trend Momentum</h3>
                    <p className="text-text-secondary mb-4">
                      Experimental trend and momentum analysis indicator combining multiple factors for market direction.
                    </p>
                    <span className="text-sm text-warning">Beta Version</span>
                    <button className="btn-primary w-full mt-4">
                      Download TrendMomentum.cs
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-primary mb-4">Installation Guide</h3>
              <p className="text-text-secondary mb-6">
                Need help installing indicators? Check our step-by-step guide or contact support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  View Installation Guide
                </button>
                <button className="bg-surface-higher hover:bg-dark-quaternary text-text-primary px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Support
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