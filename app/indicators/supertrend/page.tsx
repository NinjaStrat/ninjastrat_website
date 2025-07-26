import ProductDetailTemplate from '@/components/templates/ProductDetailTemplate'

export default function SupertrendPage() {
  const features = [
    {
      title: "Trend Direction Filter",
      description: "Popular trend following indicator that identifies market direction and potential reversal points with high accuracy."
    },
    {
      title: "Dynamic Support/Resistance",
      description: "Provides dynamic support and resistance levels that adapt to current market volatility."
    },
    {
      title: "Clear Trend Signals",
      description: "Unambiguous bullish and bearish signals with minimal lag and false signals."
    },
    {
      title: "Volatility-Based Calculation",
      description: "Uses ATR-based calculations to adapt to different market conditions and instruments."
    },
    {
      title: "Visual Clarity",
      description: "Clean visual representation with color-coded trend direction and support/resistance levels."
    },
    {
      title: "Alert Integration",
      description: "Built-in alerts for trend changes and key level interactions."
    }
  ]

  const configOptions = [
    {
      name: "ATR Period",
      description: "Period for Average True Range calculation",
      defaultValue: "10"
    },
    {
      name: "Multiplier",
      description: "ATR multiplier for trend line calculation",
      defaultValue: "3.0"
    },
    {
      name: "Trend Colors",
      description: "Colors for bullish and bearish trend states",
      defaultValue: "Green (bull), Red (bear)"
    }
  ]

  const requirements = [
    "NinjaTrader 8.0 or higher",
    "Windows 10/11 (64-bit)",
    "Historical price data",
    "Valid NinjaStrat license"
  ]

  const compatibility = [
    "NinjaTrader 8.0+",
    "All timeframes and instruments",
    "Works with automated strategies"
  ]

  const relatedProducts = [
    {
      name: "ATRTrail",
      href: "/indicators/atrtrail",
      description: "Dynamic trailing stops"
    },
    {
      name: "STRATENGINE",
      href: "/strategies/stratengine",
      description: "Complete automation suite"
    }
  ]

  return (
    <ProductDetailTemplate
      name="Supertrend"
      tagline="Trend Direction Filter"
      description="Popular trend following indicator that identifies market direction and potential reversal points. Uses volatility-based calculations for reliable trend signals."
      category="indicator"
      heroImage="/images/supertrend.png"
      features={features}
      requirements={requirements}
      compatibility={compatibility}
      configOptions={configOptions}
      downloadLink="https://whop.com/ninjastrat/"
      version="1.5.0"
      lastUpdated="January 2025"
      relatedProducts={relatedProducts}
    />
  )
}