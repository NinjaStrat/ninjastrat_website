import PageLayout from '@/components/layout/PageLayout'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'
import { 
  ChartBarIcon,
  CursorArrowRaysIcon,
  ArrowPathIcon,
  CalculatorIcon,
  ArrowTrendingUpIcon,
  RocketLaunchIcon,
  ClockIcon,
  BeakerIcon
} from '@heroicons/react/24/solid'

export default function StrategiesPage() {
  const strategies = [
    {
      name: "STRATENGINE",
      tagline: "The Complete #TheStrat Suite",
      description: "Our flagship automated trading system implementing complete #TheStrat methodology with advanced risk management and multi-timeframe analysis.",
      icon: ChartBarIcon,
      href: "/strategies/stratengine",
      status: "production",
      gradient: "from-primary to-sky-blue"
    },
    {
      name: "Sniper",
      tagline: "Precision Entry System",
      description: "Waits for multiple timeframes to align before entry. Configurable HTF requirements with optional momentum pattern confirmation.",
      icon: CursorArrowRaysIcon,
      href: "/strategies/sniper",
      status: "production",
      gradient: "from-secondary to-light-purple"
    },
    {
      name: "Failed 2s",
      tagline: "Reversal Specialist",
      description: "Focuses exclusively on 2-going-3 reversal patterns with open cross detection and percentage-based targets.",
      icon: ArrowPathIcon,
      href: "/strategies/failed2s",
      status: "production",
      gradient: "from-warning to-orange"
    },
    {
      name: "FibStrike",
      tagline: "Structure + Fibonacci",
      description: "Break of Structure (BOS) detection with Fibonacci retracement levels. Independently configurable long/short settings.",
      icon: CalculatorIcon,
      href: "/strategies/fibstrike",
      status: "production",
      gradient: "from-success to-bright-green"
    },
    {
      name: "TapsORBs",
      tagline: "Range Breakout System",
      description: "Prior-day and current-day opening range breakout strategies. Perfect for capturing morning momentum.",
      icon: ArrowTrendingUpIcon,
      href: "/strategies/tapsorbs",
      status: "production",
      gradient: "from-teal to-light-teal"
    },
    {
      name: "Hourly Stats",
      tagline: "Statistical Edge Trading",
      description: "Beta strategy that trades based on statistical analysis of hourly market patterns and historical probability edges.",
      icon: ClockIcon,
      href: "/strategies/hourlystats",
      status: "beta",
      gradient: "from-bright-blue to-sky-blue"
    },
    {
      name: "StrongClose",
      tagline: "Coming Soon",
      description: "Beta strategy focusing on strong close patterns with return-to-open setups. Early results showing promise.",
      icon: RocketLaunchIcon,
      href: "/strategies/strongclose",
      status: "beta",
      gradient: "from-bright-pink to-magenta"
    }
  ]

  const productionStrategies = strategies.filter(s => s.status === "production")
  const betaStrategies = strategies.filter(s => s.status === "beta")

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Trading Strategies
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Automated trading strategies powered by #TheStrat methodology. Each strategy specializes 
            in different market conditions while maintaining professional risk management standards.
          </p>
        </div>

        {/* Production Strategies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Production Strategies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productionStrategies.map((strategy) => (
              <Link key={strategy.name} href={strategy.href}>
                <Card className="p-8 h-full hover:scale-105 transition-all duration-300 hover:border-primary/50 group cursor-pointer">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${strategy.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <strategy.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {strategy.name}
                  </h3>
                  
                  <p className="text-sm text-primary mb-4">{strategy.tagline}</p>

                  <p className="text-text-secondary text-sm leading-relaxed">
                    {strategy.description}
                  </p>

                  {/* Learn More Arrow */}
                  <div className="mt-6 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More →
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Beta Strategies */}
        {betaStrategies.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Beta Strategies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {betaStrategies.map((strategy) => (
                <Link key={strategy.name} href={strategy.href}>
                  <Card className="p-8 h-full hover:scale-105 transition-all duration-300 hover:border-warning/50 group cursor-pointer">
                    {/* Beta Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-warning/20 text-warning text-xs font-medium px-2 py-1 rounded">
                        BETA
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${strategy.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <strategy.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                      {strategy.name}
                    </h3>
                    
                    <p className="text-sm text-primary mb-4">{strategy.tagline}</p>

                    <p className="text-text-secondary text-sm leading-relaxed">
                      {strategy.description}
                    </p>

                    {/* Learn More Arrow */}
                    <div className="mt-6 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More →
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="text-center py-16 border-t border-surface-elevated">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Automated Trading?
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Get lifetime access to all current and future strategies with our professional framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="btn-primary">
                View Pricing
              </Link>
              <Link href="/support" className="btn-secondary">
                Get Support
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}