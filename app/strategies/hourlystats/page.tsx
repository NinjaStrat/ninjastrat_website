import ProductDetailTemplate from '@/components/templates/ProductDetailTemplate'

export default function HourlyStatsPage() {
  const features = [
    {
      title: "Statistical Edge Analysis",
      description: "Trades based on historical probability analysis of hourly market patterns and behaviors."
    },
    {
      title: "Time-Based Pattern Recognition",
      description: "Identifies recurring patterns that occur at specific times of the trading day."
    },
    {
      title: "Historical Backtesting Data",
      description: "Leverages years of historical data to identify the most profitable trading windows."
    },
    {
      title: "Probability-Based Entries",
      description: "Only takes trades when historical probability exceeds configurable thresholds."
    },
    {
      title: "Session-Specific Logic",
      description: "Different trading logic for pre-market, regular hours, and after-hours sessions."
    },
    {
      title: "Statistical Reporting",
      description: "Comprehensive reporting on win rates, average moves, and time-based performance."
    }
  ]

  const quickStartSteps = [
    "Install HourlyStats.cs file in your NinjaTrader Strategies folder",
    "Restart NinjaTrader and load the strategy",
    "Configure minimum probability thresholds for trades",
    "Set active trading hours and session preferences",
    "Define position sizing based on statistical confidence",
    "Enable the strategy and monitor statistical edge opportunities"
  ]

  const configOptions = [
    {
      name: "Minimum Win Probability",
      description: "Minimum historical win rate required to trigger a trade",
      defaultValue: "65%"
    },
    {
      name: "Lookback Period",
      description: "Number of days of historical data to analyze",
      defaultValue: "252 days (1 year)"
    },
    {
      name: "Active Sessions",
      description: "Which trading sessions to include in analysis",
      defaultValue: "Regular hours only"
    },
    {
      name: "Pattern Confidence",
      description: "Statistical confidence level required for pattern recognition",
      defaultValue: "95%"
    },
    {
      name: "Position Scaling",
      description: "Scale position size based on statistical confidence",
      defaultValue: "Enabled"
    },
    {
      name: "Weekend Gap Filter",
      description: "Exclude patterns that span weekend gaps",
      defaultValue: "Enabled"
    }
  ]

  const requirements = [
    "NinjaTrader 8.0 or higher",
    "Windows 10/11 (64-bit)",
    "Minimum 16GB RAM (for statistical calculations)",
    "Historical market data (1+ years)",
    "Valid NinjaStrat license"
  ]

  const compatibility = [
    "NinjaTrader 8.0+",
    "NASDAQ Futures (NQ, MNQ)",
    "ES, YM, RTY futures",
    "Major ETFs (SPY, QQQ, IWM)",
    "Historical data required"
  ]

  const relatedProducts = [
    {
      name: "TapsORBs",
      href: "/strategies/tapsorbs",
      description: "Range breakout system"
    },
    {
      name: "StratScanner",
      href: "/indicators/stratscanner",
      description: "Multi-timeframe analysis"
    }
  ]

  const documentation = (
    <div>
      <h2>Hourly Stats: Statistical Edge Trading (Beta)</h2>
      <p>
        <strong>⚠️ BETA VERSION:</strong> Hourly Stats is a quantitative trading strategy currently in beta testing. 
        It leverages statistical analysis of historical market behavior to identify high-probability trading 
        opportunities based on time-of-day patterns.
      </p>
      
      <h3>Statistical Foundation</h3>
      <p>
        The strategy analyzes historical price action to identify patterns such as:
      </p>
      <ul>
        <li><strong>Opening Bias:</strong> Tendency for markets to move in specific directions at market open</li>
        <li><strong>Lunch Hour Patterns:</strong> Statistical behavior during low-volume periods</li>
        <li><strong>Close Bias:</strong> End-of-day positioning and rebalancing effects</li>
        <li><strong>Weekly Patterns:</strong> Different behavior on different days of the week</li>
      </ul>
      
      <h3>Probability-Based Trading</h3>
      <p>
        Rather than relying on technical indicators, Hourly Stats uses pure statistical analysis:
      </p>
      <ul>
        <li>Calculates win rates for specific time periods</li>
        <li>Measures average move sizes during different hours</li>
        <li>Identifies statistically significant patterns</li>
        <li>Only trades when probability exceeds your threshold</li>
      </ul>
      
      <h3>Edge Identification</h3>
      <p>
        The strategy continuously monitors for statistical edges by analyzing:
      </p>
      <ul>
        <li><strong>Time Windows:</strong> Specific hours with consistent directional bias</li>
        <li><strong>Market Conditions:</strong> How patterns perform in different market environments</li>
        <li><strong>Volatility Impact:</strong> How volatility affects pattern reliability</li>
        <li><strong>Volume Correlation:</strong> Relationship between volume and pattern success</li>
      </ul>
      
      <h3>Risk Management</h3>
      <p>
        Position sizing is dynamically adjusted based on statistical confidence levels, 
        with higher confidence patterns receiving larger allocations.
      </p>
    </div>
  )

  return (
    <ProductDetailTemplate
      name="Hourly Stats"
      tagline="Statistical Edge Trading (Beta)"
      description="BETA: Quantitative strategy that trades based on statistical analysis of hourly market patterns and historical probability edges. Uses pure data-driven approach for high-probability opportunities."
      category="strategy"
      heroImage="/images/hourlystats.png"
      demoVideo="/videos/hourlystats-demo.mp4"
      features={features}
      requirements={requirements}
      compatibility={compatibility}
      configOptions={configOptions}
      quickStartSteps={quickStartSteps}
      documentation={documentation}
      downloadLink="https://whop.com/ninjastrat/"
      version="1.2.0-beta"
      lastUpdated="January 2025"
      relatedProducts={relatedProducts}
    />
  )
}