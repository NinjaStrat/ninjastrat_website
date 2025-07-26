import { 
  ChartBarIcon,
  BuildingOfficeIcon,
  ClockIcon,
  ShieldCheckIcon,
  CheckIcon
} from '@heroicons/react/24/solid';

export default function IntroSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background-secondary to-surface">
      <div className="container mx-auto px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">
            The{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NinjaStrat Advantage
            </span>
          </h2>
          <p className="text-xl text-text-secondary mb-12 leading-relaxed">
            Systematic trading done right - combining multiple proven methodologies for consistent results
          </p>

          {/* Key Advantages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-surface-elevated rounded-xl p-6 border border-surface-higher hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-sky-blue rounded-lg flex items-center justify-center mb-4 mx-auto">
                <ChartBarIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Pattern Recognition</h3>
              <p className="text-sm text-text-secondary">
                #TheStrat, Failed 2s, Fibonacci patterns - multiple methodologies in one suite
              </p>
            </div>

            <div className="bg-surface-elevated rounded-xl p-6 border border-surface-higher hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-light-purple rounded-lg flex items-center justify-center mb-4 mx-auto">
                <BuildingOfficeIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Market Structure</h3>
              <p className="text-sm text-text-secondary">
                Support/resistance, break of structure, and opening range analysis
              </p>
            </div>

            <div className="bg-surface-elevated rounded-xl p-6 border border-surface-higher hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-success to-bright-green rounded-lg flex items-center justify-center mb-4 mx-auto">
                <ClockIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Timing & Momentum</h3>
              <p className="text-sm text-text-secondary">
                Multi-timeframe alignment and momentum confirmation
              </p>
            </div>

            <div className="bg-surface-elevated rounded-xl p-6 border border-surface-higher hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-warning to-orange rounded-lg flex items-center justify-center mb-4 mx-auto">
                <ShieldCheckIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Risk-First Approach</h3>
              <p className="text-sm text-text-secondary">
                Never compromise on protection - institutional-grade risk management
              </p>
            </div>
          </div>

          {/* What Makes Us Different */}
          <div className="card-elevated p-8 md:p-10">
            <h3 className="text-2xl font-semibold text-text-primary mb-6 text-center">
              What Makes Our Bots Different
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 text-success flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Real Trading Logic</h4>
                    <p className="text-sm text-text-secondary">
                      Not curve-fitted backtests - strategies proven in live markets
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 text-success flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Multiple Strategies</h4>
                    <p className="text-sm text-text-secondary">
                      Find opportunities in any market condition
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 text-success flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Professional Features</h4>
                    <p className="text-sm text-text-secondary">
                      Institutional-grade risk management in every bot
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckIcon className="w-5 h-5 text-success flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">Lifetime Updates</h4>
                    <p className="text-sm text-text-secondary">
                      Your bots evolve with markets and community feedback
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
