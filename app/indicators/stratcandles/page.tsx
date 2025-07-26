import ProductDetailTemplate from '@/components/templates/ProductDetailTemplate'

export default function StratCandlesPage() {
  const features = [
    {
      title: "Real-Time Pattern Painting",
      description: "Automatically colors candles based on #TheStrat patterns (1, 2U, 2D, 3) for instant visual recognition."
    },
    {
      title: "Customizable Color Schemes",
      description: "Full customization of colors for each pattern type to match your trading style and preferences."
    },
    {
      title: "Multi-Timeframe Support",
      description: "Works across all timeframes from tick charts to monthly charts for comprehensive analysis."
    },
    {
      title: "Pattern Alerts",
      description: "Optional audio and visual alerts when specific patterns form on your charts."
    },
    {
      title: "Historical Pattern Review",
      description: "Easily review historical patterns and their outcomes for strategy development."
    },
    {
      title: "Integration Ready",
      description: "Designed to work seamlessly with other NinjaStrat indicators and strategies."
    }
  ]

  const quickStartSteps = [
    "Install StratCandles.cs file in your NinjaTrader Indicators folder",
    "Restart NinjaTrader and navigate to Indicators",
    "Add StratCandles to your chart from the indicator list",
    "Configure color preferences for each pattern type",
    "Set up alerts for patterns you want to monitor",
    "Begin trading with enhanced visual pattern recognition"
  ]

  const configOptions = [
    {
      name: "1 Bar Color",
      description: "Color for inside bars (consolidation patterns)",
      defaultValue: "Yellow"
    },
    {
      name: "2U Bar Color",
      description: "Color for bullish outside bars (up breakouts)",
      defaultValue: "Green"
    },
    {
      name: "2D Bar Color",
      description: "Color for bearish outside bars (down breakouts)",
      defaultValue: "Red"
    },
    {
      name: "3 Bar Color",
      description: "Color for directional continuation bars",
      defaultValue: "Blue"
    },
    {
      name: "Alert Settings",
      description: "Enable/disable alerts for specific pattern formations",
      defaultValue: "2U/2D alerts enabled"
    },
    {
      name: "Transparency",
      description: "Opacity level for pattern coloring",
      defaultValue: "75%"
    }
  ]

  const requirements = [
    "NinjaTrader 8.0 or higher",
    "Windows 10/11 (64-bit)",
    "Minimum 4GB RAM",
    "Real-time or historical data",
    "Valid NinjaStrat license"
  ]

  const compatibility = [
    "NinjaTrader 8.0+",
    "All timeframes (tick to monthly)",
    "All instrument types",
    "Multiple chart windows",
    "Works with other indicators"
  ]

  const relatedProducts = [
    {
      name: "StratPatterns",
      href: "/indicators/stratpatterns",
      description: "Pattern recognition overlay"
    },
    {
      name: "STRATENGINE",
      href: "/strategies/stratengine",
      description: "Complete automation suite"
    },
    {
      name: "StratAlerts",
      href: "/indicators/stratalerts",
      description: "Advanced alert system"
    }
  ]

  const documentation = (
    <div>
      <h2>StratCandles: Visual Pattern Recognition</h2>
      <p>
        StratCandles transforms your regular candlestick charts into a powerful visual pattern 
        recognition system by automatically coloring candles based on their #TheStrat classification.
      </p>
      
      <h3>Pattern Color Coding</h3>
      <p>
        Each candle is automatically colored based on its relationship to the previous candle:
      </p>
      <ul>
        <li><strong>1 Bars (Inside):</strong> High is lower than previous high AND low is higher than previous low</li>
        <li><strong>2U Bars (Outside Up):</strong> High is higher than previous high AND low is lower than previous low, closes green</li>
        <li><strong>2D Bars (Outside Down):</strong> High is higher than previous high AND low is lower than previous low, closes red</li>
        <li><strong>3 Bars (Directional):</strong> All other bars that don't fit the above criteria</li>
      </ul>
      
      <h3>Visual Trading Advantages</h3>
      <p>
        Colored candles provide immediate visual feedback:
      </p>
      <ul>
        <li><strong>Pattern Recognition:</strong> Instantly spot consolidations, breakouts, and continuations</li>
        <li><strong>Trend Analysis:</strong> See the flow of patterns to understand market character</li>
        <li><strong>Entry Timing:</strong> Identify optimal entry points based on pattern sequences</li>
        <li><strong>Historical Review:</strong> Quickly review past patterns and their outcomes</li>
      </ul>
      
      <h3>Customization Options</h3>
      <p>
        StratCandles offers extensive customization:
      </p>
      <ul>
        <li><strong>Color Selection:</strong> Choose any colors that work best for your eyes and monitor</li>
        <li><strong>Transparency Levels:</strong> Adjust opacity to see underlying price action</li>
        <li><strong>Alert Integration:</strong> Get notified when specific patterns form</li>
        <li><strong>Multiple Timeframes:</strong> Use different color schemes on different timeframes</li>
      </ul>
      
      <h3>Professional Trading Application</h3>
      <p>
        StratCandles is used by professional traders to:
      </p>
      <ul>
        <li>Quickly assess market structure and pattern development</li>
        <li>Identify high-probability entry and exit points</li>
        <li>Train pattern recognition skills through visual reinforcement</li>
        <li>Enhance decision-making speed during live trading</li>
      </ul>
    </div>
  )

  return (
    <ProductDetailTemplate
      name="StratCandles"
      tagline="Visual Pattern Recognition"
      description="Advanced candle painting system that visually highlights #TheStrat patterns with customizable colors and alerts. Transform your charts into a powerful pattern recognition tool."
      category="indicator"
      heroImage="/images/stratcandles.png"
      demoVideo="/videos/stratcandles-demo.mp4"
      features={features}
      requirements={requirements}
      compatibility={compatibility}
      configOptions={configOptions}
      quickStartSteps={quickStartSteps}
      documentation={documentation}
      downloadLink="https://whop.com/ninjastrat/"
      version="3.1.2"
      lastUpdated="January 2025"
      relatedProducts={relatedProducts}
    />
  )
}