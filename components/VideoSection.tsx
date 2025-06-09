export default function VideoSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background-secondary to-surface">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            See <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">StratEngine</span> in Action
          </h2>
          
          <p className="text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            Watch live #TheStrat pattern recognition, TFC analysis, and automated trade execution in real market conditions
          </p>
          
          <div className="card-elevated p-8 md:p-12">
            {/* Video placeholder */}
            <div className="relative bg-surface rounded-xl overflow-hidden shadow-2xl border border-surface-higher group hover:border-primary/50 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-background to-surface-elevated flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 glow-primary">
                    <svg className="w-10 h-10 text-background" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-text-primary mb-2">
                    #TheStrat StratEngine Demo
                  </h3>
                  <p className="text-text-secondary">
                    Live demonstration of automated bar categorization, TFC analysis, and pattern-based trade execution
                  </p>
                </div>
              </div>
              
              {/* YouTube embed placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-background/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="btn-primary glow-primary text-lg px-8 py-4">
                  Play Demo Video
                </button>
              </div>
            </div>
            
            {/* Video features */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-sky-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-background">📊</span>
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Live Pattern Recognition</h4>
                <p className="text-text-secondary text-sm">
                  See StratEngine identify 1, 2U, 2D, 3 patterns in real-time with precise bar categorization and TFC bias
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-light-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-background">⚡</span>
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Failed 2s Reversals</h4>
                <p className="text-text-secondary text-sm">
                  Watch automated detection of failed 2s patterns with multi-mode reversal confirmation and entry timing
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-success to-bright-green rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-background">🎯</span>
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Professional Risk Control</h4>
                <p className="text-text-secondary text-sm">
                  Observe account-based position sizing, R-multiple targets, and Cover Risk exit strategies in action
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 