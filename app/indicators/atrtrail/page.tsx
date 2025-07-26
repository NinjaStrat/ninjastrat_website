import ProductDetailTemplate from '@/components/templates/ProductDetailTemplate'

export default function ATRTrailPage() {
  const features = [
    {
      title: "Dynamic Trailing Stops",
      description: "Advanced trailing stop indicator using Average True Range for adaptive position management based on market volatility."
    },
    {
      title: "Volatility-Based Adjustments",
      description: "Automatically adjusts stop distances based on current market volatility using ATR calculations."
    },
    {
      title: "Configurable Multipliers",
      description: "Customize ATR multipliers for different risk tolerances and trading styles."
    },
    {
      title: "Visual Stop Levels",
      description: "Clear visual representation of current stop levels directly on your charts."
    },
    {
      title: "Trend Following Optimization",
      description: "Designed to maximize profits in trending markets while protecting against reversals."
    },
    {
      title: "Multi-Timeframe Support",
      description: "Works across all timeframes with appropriate ATR calculations for each."
    }
  ]

  const quickStartSteps = [
    "Install ATRTrail.cs file in your NinjaTrader Indicators folder",
    "Add ATRTrail to your trading charts",
    "Configure ATR period and multiplier settings",
    "Set visual display preferences for stop levels",
    "Test on historical data to validate settings",
    "Use for live position management and trailing stops"
  ]

  const configOptions = [
    {
      name: "ATR Period",
      description: "Number of bars used to calculate Average True Range",
      defaultValue: "14 bars"
    },
    {
      name: "ATR Multiplier",
      description: "Multiple of ATR to use for stop distance",
      defaultValue: "2.0x"
    },
    {
      name: "Trailing Method",
      description: "How the trailing stop adjusts (close-based, high/low)",
      defaultValue: "High/Low based"
    },
    {
      name: "Visual Style",
      description: "How stop levels are displayed on chart",
      defaultValue: "Line with dots"
    },
    {
      name: "Color Scheme",
      description: "Colors for bullish and bearish trailing stops",
      defaultValue: "Green (bull), Red (bear)"
    },
    {
      name: "Alert Options",
      description: "Notifications when price hits trailing stop",
      defaultValue: "Audio + visual"
    }
  ]

  const requirements = [
    "NinjaTrader 8.0 or higher",
    "Windows 10/11 (64-bit)",
    "Historical price data for ATR calculation",
    "Real-time data for live trailing",
    "Valid NinjaStrat license"
  ]

  const compatibility = [
    "NinjaTrader 8.0+",
    "All instrument types",
    "All timeframes",
    "Works with automated strategies",
    "Compatible with order management"
  ]

  const relatedProducts = [
    {
      name: "STRATENGINE",
      href: "/strategies/stratengine",
      description: "Automated trading with trailing stops"
    },
    {
      name: "Supertrend",
      href: "/indicators/supertrend",
      description: "Trend direction indicator"
    },
    {
      name: "StratPatterns",
      href: "/indicators/stratpatterns",
      description: "Pattern-based entries"
    }
  ]

  const documentation = (
    <div>
      <h2>ATRTrail: Dynamic Trailing Stops</h2>
      <p>
        ATRTrail provides sophisticated trailing stop functionality using Average True Range (ATR) 
        to automatically adjust stop distances based on current market volatility conditions.
      </p>
      
      <h3>ATR-Based Trailing Logic</h3>
      <p>
        Traditional fixed-point trailing stops don't adapt to changing market conditions. ATRTrail solves this by:
      </p>
      <ul>
        <li><strong>Volatility Adaptation:</strong> Wider stops in volatile markets, tighter in calm markets</li>
        <li><strong>Market-Appropriate Distances:</strong> Stop distances that make sense for each instrument</li>
        <li><strong>Trend Protection:</strong> Allows trends to breathe while protecting against reversals</li>
        <li><strong>Reduced Whipsaws:</strong> Less likely to be stopped out by normal market noise</li>
      </ul>
      
      <h3>Professional Applications</h3>
      <p>
        ATRTrail is essential for:
      </p>
      <ul>
        <li><strong>Trend Following:</strong> Maximize profits in trending markets</li>
        <li><strong>Swing Trading:</strong> Appropriate stops for multi-day holds</li>
        <li><strong>Position Management:</strong> Professional-grade risk management</li>
        <li><strong>Strategy Integration:</strong> Works with automated trading systems</li>
      </ul>
    </div>
  )

  return (
    <ProductDetailTemplate
      name="ATRTrail"
      tagline="Dynamic Trailing Stops"
      description="Advanced trailing stop indicator using Average True Range for adaptive position management. Automatically adjusts to market volatility for optimal risk management."
      category="indicator"
      heroImage="/images/atrtrail.png"
      demoVideo="/videos/atrtrail-demo.mp4"
      features={features}
      requirements={requirements}
      compatibility={compatibility}
      configOptions={configOptions}
      quickStartSteps={quickStartSteps}
      documentation={documentation}
      downloadLink="https://whop.com/ninjastrat/"
      version="2.4.1"
      lastUpdated="January 2025"
      relatedProducts={relatedProducts}
    />
  )
}