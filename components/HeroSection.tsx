export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background-secondary">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10"></div>
        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-blue/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white">
            <span className="bg-gradient-to-r from-primary via-sky-blue to-secondary bg-clip-text text-transparent">
              Algorithms. Strategy. Consistency.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-text-secondary mb-6 font-medium">
            Algorithmic Trading featuring #TheStrat
          </p>

          <p className="text-lg text-text-primary mb-12 max-w-2xl mx-auto leading-relaxed">
            StratEngine brings complete Strat methodology automation to
            NinjaTrader. From bar categorization and timeframe continuity to
            advanced pattern recognition and professional risk management –
            trade like the pros with full automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <button className="btn-primary glow-primary text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200">
              See Live Demo
            </button>
            <a href="/pricing" className="btn-secondary text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200">
              View Pricing
            </a>
          </div>
          
          <p className="text-text-muted text-sm">
            Lifetime access • No monthly fees • All future updates included
          </p>
        </div>
      </div>
    </section>
  );
}
