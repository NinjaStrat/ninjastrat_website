import ProductDetailTemplate from '@/components/templates/ProductDetailTemplate'

export default function TapsORBsPage() {
  const features = [
    {
      title: "Prior-Day Range Breakouts",
      description: "Identifies and trades breakouts from the previous day's high and low levels."
    },
    {
      title: "Opening Range Breakouts",
      description: "Captures momentum from current-day opening range breakouts during key market hours."
    },
    {
      title: "Morning Session Focus",
      description: "Optimized for capturing morning momentum during the most active trading hours."
    },
    {
      title: "Multi-Timeframe Analysis",
      description: "Analyzes multiple timeframes to confirm breakout validity and strength."
    },
    {
      title: "Volume Confirmation",
      description: "Optional volume filters to ensure breakouts have sufficient momentum behind them."
    },
    {
      title: "Time-Based Filters",
      description: "Configurable time windows to focus on the most profitable trading hours."
    }
  ]

  const quickStartSteps = [
    "Install TapsORBs.cs file in your NinjaTrader Strategies folder",
    "Restart NinjaTrader and load the strategy",
    "Configure opening range calculation parameters",
    "Set breakout confirmation requirements",
    "Define active trading time windows",
    "Apply to your chart and monitor for range breakouts"
  ]

  const configOptions = [
    {
      name: "Opening Range Period",
      description: "Time period for calculating the opening range",
      defaultValue: "First 30 minutes"
    },
    {
      name: "Prior Day Levels",
      description: "Use previous day's high/low as breakout levels",
      defaultValue: "Enabled"
    },
    {
      name: "Breakout Confirmation",
      description: "Price movement required to confirm a valid breakout",
      defaultValue: "2 ticks beyond level"
    },
    {
      name: "Trading Hours",
      description: "Active hours for taking new positions",
      defaultValue: "9:30 AM - 11:30 AM ET"
    },
    {
      name: "Volume Filter",
      description: "Minimum volume requirement for breakout confirmation",
      defaultValue: "Above average"
    },
    {
      name: "Maximum Positions",
      description: "Limit on concurrent positions",
      defaultValue: "2"
    }
  ]

  const requirements = [
    "NinjaTrader 8.0 or higher",
    "Windows 10/11 (64-bit)",
    "Minimum 8GB RAM",
    "Real-time market data feed",
    "Valid NinjaStrat license"
  ]

  const compatibility = [
    "NinjaTrader 8.0+",
    "NASDAQ Futures (NQ, MNQ)",
    "ES, YM futures contracts",
    "Live and Sim accounts",
    "Intraday timeframes"
  ]

  const relatedProducts = [
    {
      name: "STRATENGINE",
      href: "/strategies/stratengine",
      description: "Complete automation suite"
    },
    {
      name: "Hourly Stats",
      href: "/strategies/hourlystats",
      description: "Statistical time-based trading"
    },
    {
      name: "StratScanner",
      href: "/indicators/stratscanner",
      description: "Multi-timeframe scanner"
    }
  ]

  const documentation = (
    <div>
      <h2>TapsORBs: Range Breakout System</h2>
      <p>
        TapsORBs (Taps Opening Range Breakouts) is designed to capture momentum moves during the 
        most active trading hours by identifying and trading breakouts from established ranges.
      </p>
      
      <h3>Opening Range Concept</h3>
      <p>
        The opening range is typically defined as the high and low established during the first 
        15-60 minutes of the trading session. This range often acts as support and resistance 
        throughout the day.
      </p>
      
      <h3>Prior Day Levels</h3>
      <p>
        In addition to current-day opening ranges, TapsORBs also monitors breakouts from:
      </p>
      <ul>
        <li><strong>Previous Day High:</strong> Often acts as resistance that, when broken, can lead to strong upward moves</li>
        <li><strong>Previous Day Low:</strong> Similarly acts as support, with breaks often leading to continued selling</li>
        <li><strong>Previous Close:</strong> Important psychological level for market participants</li>
      </ul>
      
      <h3>Optimal Trading Times</h3>
      <p>
        TapsORBs is most effective during:
      </p>
      <ul>
        <li><strong>Market Open:</strong> 9:30-10:30 AM ET when volume and volatility are highest</li>
        <li><strong>Late Morning:</strong> 10:30-11:30 AM ET for continuation moves</li>
        <li><strong>Lunch Hour:</strong> 12:00-1:00 PM ET for range expansion</li>
      </ul>
      
      <h3>Risk Management</h3>
      <p>
        The strategy uses tight stops just inside the breakout level and targets based on 
        average daily range or key technical levels.
      </p>
    </div>
  )

  return (
    <ProductDetailTemplate
      name="TapsORBs"
      tagline="Range Breakout System"
      description="Specialized strategy for trading prior-day and current-day opening range breakouts. Perfect for capturing morning momentum during peak trading hours."
      category="strategy"
      heroImage="/images/tapsorbs.png"
      demoVideo="/videos/tapsorbs-demo.mp4"
      features={features}
      requirements={requirements}
      compatibility={compatibility}
      configOptions={configOptions}
      quickStartSteps={quickStartSteps}
      documentation={documentation}
      downloadLink="https://whop.com/ninjastrat/"
      version="1.9.1"
      lastUpdated="January 2025"
      relatedProducts={relatedProducts}
    />
  )
}