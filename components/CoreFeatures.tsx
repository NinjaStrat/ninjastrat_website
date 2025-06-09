export default function CoreFeatures() {
  const features = [
    {
      title: "#TheStrat Pattern Recognition",
      description: "Complete automation of Rob Smith's methodology with 1, 2U, 2D, 3 bar categorization, plus Hammer and Shooter momentum patterns. Includes Inside/Outside bar detection and multi-timeframe trend analysis.",
      icon: "📊",
      gradient: "from-primary to-sky-blue"
    },
    {
      title: "Multi-Timeframe Analysis", 
      description: "Advanced TFC (Timeframe Continuity) calculations across up to 4 higher timeframes. Dual trend methods with ATR trail and broadening formation detection for comprehensive bias analysis.",
      icon: "⏰",
      gradient: "from-secondary to-light-purple"
    },
    {
      title: "Advanced Entry Signals",
      description: "Failed 2s reversal detection with 3 modes (None/Both/Only), optional 3-bar pattern setups (3→2U, 3→2D), momentum patterns, and pullback filters requiring SMA touch within 3 bars.",
      icon: "🎯",
      gradient: "from-warning to-orange"
    },
    {
      title: "Professional Risk Management",
      description: "Account percentage-based position sizing, fixed dollar risk controls, drawdown-adjusted calculations, multiple stop types (Fixed/Previous/Current Bar), and smart auto-adjusting stop placement.",
      icon: "🛡️",
      gradient: "from-success to-bright-green"
    },
    {
      title: "Smart Exit Management",
      description: "R-multiple reward targets, Cover Risk mode (1:1 R/R + custom target), break-even stop management, first reversal exits, and daily profit/loss limits with automatic position management.",
      icon: "📈",
      gradient: "from-teal to-light-teal"
    },
    {
      title: "Visual Trading Interface",
      description: "Trend-based candle coloring, 20-period SMA display, ATR trail indicators, broadening formation trendlines, swing pivot markers, and customizable chart management controls.",
      icon: "🎨",
      gradient: "from-bright-pink to-magenta"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-surface to-background-secondary">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Core <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Six powerful modules delivering complete #TheStrat automation for professional trading
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card p-8 group hover:scale-105 transition-all duration-300 hover:glow-primary"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{feature.icon}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
              
              {/* Placeholder for video/demo */}
              <div className="mt-6 bg-surface-elevated rounded-lg h-32 flex items-center justify-center border border-surface-higher group-hover:border-primary/50 transition-colors duration-300">
                <span className="text-text-secondary">Demo Video</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="card-elevated p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Experience the Full Power of StratEngine
            </h3>
            <p className="text-text-secondary mb-6">
              Ready to automate your #TheStrat trading with professional-grade precision?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary glow-primary">
                Start Free Trial
              </button>
              <button className="btn-secondary">
                Watch Full Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 