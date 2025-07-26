import PageLayout from '@/components/layout/PageLayout'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'
import { 
  ChartBarIcon,
  PaintBrushIcon,
  MagnifyingGlassIcon,
  BellIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  TagIcon,
  BeakerIcon,
  CpuChipIcon,
  ChartPieIcon
} from '@heroicons/react/24/solid'

export default function IndicatorsPage() {
  const indicators = [
    {
      name: "StratCandles",
      tagline: "Visual Pattern Recognition",
      description: "Advanced candle painting system that visually highlights #TheStrat patterns with customizable colors and alerts.",
      icon: PaintBrushIcon,
      href: "/indicators/stratcandles",
      status: "production",
      gradient: "from-primary to-sky-blue"
    },
    {
      name: "StratPatterns",
      tagline: "Real-Time Pattern Detection",
      description: "Overlay indicator that identifies and marks 1, 2, and 3 patterns in real-time with multi-timeframe analysis.",
      icon: ChartBarIcon,
      href: "/indicators/stratpatterns",
      status: "production",
      gradient: "from-secondary to-light-purple"
    },
    {
      name: "StratScanner",
      tagline: "Multi-Timeframe Scanner",
      description: "Comprehensive scanner that identifies pattern opportunities across multiple timeframes and instruments simultaneously.",
      icon: MagnifyingGlassIcon,
      href: "/indicators/stratscanner",
      status: "production",
      gradient: "from-teal to-light-teal"
    },
    {
      name: "StratAlerts",
      tagline: "Intelligent Notification System",
      description: "Advanced alert system for pattern formations, breakouts, and setup confirmations with customizable filters.",
      icon: BellIcon,
      href: "/indicators/stratalerts",
      status: "production",
      gradient: "from-warning to-orange"
    },
    {
      name: "TimeframeContinuity",
      tagline: "Multi-TF Analysis",
      description: "Shows alignment across different timeframes for optimal entry timing with bias confirmation.",
      icon: ClockIcon,
      href: "/indicators/timeframecontinuity",
      status: "production",
      gradient: "from-success to-bright-green"
    },
    {
      name: "ATRTrail",
      tagline: "Dynamic Trailing Stops",
      description: "Advanced trailing stop indicator using Average True Range for adaptive position management.",
      icon: ArrowTrendingUpIcon,
      href: "/indicators/atrtrail",
      status: "production",
      gradient: "from-bright-blue to-sky-blue"
    },
    {
      name: "Supertrend",
      tagline: "Trend Direction Filter",
      description: "Popular trend following indicator that identifies market direction and potential reversal points.",
      icon: ChartPieIcon,
      href: "/indicators/supertrend",
      status: "production",
      gradient: "from-light-purple to-medium-purple"
    },
    {
      name: "Labeler",
      tagline: "Chart Annotation Tool",
      description: "Professional chart labeling system for marking key levels, patterns, and trade setups.",
      icon: TagIcon,
      href: "/indicators/labeler",
      status: "production",
      gradient: "from-bright-pink to-magenta"
    },
    {
      name: "BeeEfs",
      tagline: "Pattern Recognition Beta",
      description: "Experimental pattern recognition system focusing on specific market formations and structure analysis.",
      icon: BeakerIcon,
      href: "/indicators/beeefs",
      status: "beta",
      gradient: "from-warning to-bright-yellow"
    },
    {
      name: "BeeOhEs",
      tagline: "Structure Analysis Beta",
      description: "Advanced pattern detection algorithm for comprehensive market structure and formation analysis.",
      icon: CpuChipIcon,
      href: "/indicators/beeohes",
      status: "beta",
      gradient: "from-danger to-bright-red"
    }
  ]

  const productionIndicators = indicators.filter(i => i.status === "production")
  const betaIndicators = indicators.filter(i => i.status === "beta")

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Trading Indicators
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Professional NinjaTrader indicators for enhanced market analysis. From pattern recognition 
            to multi-timeframe scanning, our tools provide the edge you need for successful trading.
          </p>
        </div>

        {/* Production Indicators */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Production Indicators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productionIndicators.map((indicator) => (
              <Link key={indicator.name} href={indicator.href}>
                <Card className="p-8 h-full hover:scale-105 transition-all duration-300 hover:border-primary/50 group cursor-pointer">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${indicator.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <indicator.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {indicator.name}
                  </h3>
                  
                  <p className="text-sm text-primary mb-4">{indicator.tagline}</p>

                  <p className="text-text-secondary text-sm leading-relaxed">
                    {indicator.description}
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

        {/* Beta Indicators */}
        {betaIndicators.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Beta Indicators</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {betaIndicators.map((indicator) => (
                <Link key={indicator.name} href={indicator.href}>
                  <Card className="p-8 h-full hover:scale-105 transition-all duration-300 hover:border-warning/50 group cursor-pointer">
                    {/* Beta Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-warning/20 text-warning text-xs font-medium px-2 py-1 rounded">
                        BETA
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${indicator.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <indicator.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                      {indicator.name}
                    </h3>
                    
                    <p className="text-sm text-primary mb-4">{indicator.tagline}</p>

                    <p className="text-text-secondary text-sm leading-relaxed">
                      {indicator.description}
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
              Ready to Enhance Your Analysis?
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Get lifetime access to all current and future indicators with professional documentation and support.
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