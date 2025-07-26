import { 
  CalendarIcon,
  CurrencyDollarIcon,
  CursorArrowRaysIcon,
  ArrowRightOnRectangleIcon,
  ChartBarIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/solid';

export default function StandardFeatures() {
  const features = [
    {
      icon: CalendarIcon,
      title: "Trading Windows",
      items: [
        "Set custom hours",
        "Daily P&L limits", 
        "Session tracking"
      ],
      gradient: "from-primary to-sky-blue"
    },
    {
      icon: CurrencyDollarIcon,
      title: "Risk Management",
      items: [
        "Smart sizing",
        "4 Martingale modes",
        "Safety caps"
      ],
      gradient: "from-secondary to-light-purple"
    },
    {
      icon: CursorArrowRaysIcon,
      title: "Profit Taking",
      items: [
        "R:R targets",
        "Fixed targets",
        "Cover Risk mode"
      ],
      gradient: "from-success to-bright-green"
    },
    {
      icon: ArrowRightOnRectangleIcon,
      title: "Exit Strategy",
      items: [
        "Breakeven mgmt",
        "Multiple stops",
        "Profit locking"
      ],
      gradient: "from-warning to-orange"
    },
    {
      icon: ChartBarIcon,
      title: "Trend Detection",
      items: [
        "Multi-timeframe",
        "200 SMA filters",
        "TFC analysis"
      ],
      gradient: "from-teal to-light-teal"
    },
    {
      icon: MagnifyingGlassIcon,
      title: "Entry Models",
      items: [
        "Patterns (STRATENGINE)",
        "Structure (FibStrike)",
        "Timing (Sniper)"
      ],
      gradient: "from-bright-pink to-magenta"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background-secondary to-surface">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Complete <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Algorithmic Framework</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Every NinjaStrat bot combines sophisticated entry models with institutional-grade risk management and intelligent market analysis.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-surface rounded-xl p-8 border border-surface-elevated hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                {feature.title}
              </h3>
              
              <ul className="space-y-2">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-text-secondary">
                    <span className="text-success mr-2">•</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-primary/10 rounded-xl p-8 max-w-4xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Choose Your Trading Style
            </h3>
            <p className="text-text-secondary mb-6">
              Each bot specializes in different entry methods while maintaining the same professional standards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/indicators" className="btn-primary">
                View All Indicators
              </a>
              <a href="/strategies" className="btn-secondary">
                Explore Strategies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}