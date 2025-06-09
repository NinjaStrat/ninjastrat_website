export default function IntroSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background-secondary to-surface">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">
            Meet <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">StratEngine</span>
          </h2>
          <p className="text-xl text-text-secondary mb-8 leading-relaxed">
            Professional #TheStrat automation engineered for NinjaTrader 8
          </p>
          
          <div className="card-elevated p-8 md:p-12 text-left">
            <p className="text-lg text-text-primary mb-6 leading-relaxed">
              NinjaStrat's <span className="text-primary font-semibold">StratEngine</span> is the most comprehensive automation of Rob Smith's #TheStrat methodology available. Unlike generic trading algorithms, StratEngine implements the complete #TheStrat framework with precise bar categorization, timeframe continuity analysis, and professional-grade pattern recognition.
            </p>
            
            <p className="text-lg text-text-primary mb-6 leading-relaxed">
              From 1, 2U, 2D, and 3 bar patterns to advanced Hammer/Shooter momentum signals, StratEngine captures every nuance of #TheStrat. The system analyzes up to 4 higher timeframes for TFC (Timeframe Continuity) bias, automatically detects failed 2s reversals, and manages positions with institutional-level risk controls.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary mb-4">#TheStrat Implementation</h3>
                <div className="flex items-start space-x-3">
                  <span className="text-success text-lg">✓</span>
                  <span className="text-text-primary">Complete Rob Smith methodology automation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-success text-lg">✓</span>
                  <span className="text-text-primary">1, 2U, 2D, 3, Hammer, Shooter patterns</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-success text-lg">✓</span>
                  <span className="text-text-primary">Multi-timeframe TFC analysis (4 HTFs)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-success text-lg">✓</span>
                  <span className="text-text-primary">Inside/Outside bar recognition</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-secondary mb-4">Advanced Features</h3>
                <div className="flex items-start space-x-3">
                  <span className="text-success text-lg">✓</span>
                  <span className="text-text-primary">Failed 2s reversal detection (3 modes)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-success text-lg">✓</span>
                  <span className="text-text-primary">Broadening formation analysis</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-success text-lg">✓</span>
                  <span className="text-text-primary">Professional position sizing</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-success text-lg">✓</span>
                  <span className="text-text-primary">R-multiple and Cover Risk exits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 