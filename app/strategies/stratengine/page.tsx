import ProductDetailTemplate from '@/components/templates/ProductDetailTemplate'

export default function StratEnginePage() {
  const features = [
    {
      title: "Complete #TheStrat Implementation",
      description: "Full pattern recognition for 1, 2U, 2D, and 3 candles with precise bar categorization and timeframe continuity analysis."
    },
    {
      title: "Failed 2s Detection",
      description: "Automatic identification of failed 2U/2D patterns that often lead to explosive moves in the opposite direction."
    },
    {
      title: "Multi-Timeframe Analysis",
      description: "Analyzes multiple timeframes simultaneously to ensure pattern alignment and optimal entry timing."
    },
    {
      title: "Professional Risk Management",
      description: "Account-based position sizing, R-multiple targets, and Cover Risk exit strategies for institutional-grade protection."
    },
    {
      title: "Broadening Formation Detection",
      description: "Identifies expanding price patterns that often precede significant directional moves."
    },
    {
      title: "3→2 Setup Recognition",
      description: "Automatically detects 3-going-2 reversal patterns with momentum confirmation filters."
    },
    {
      title: "Dynamic Stop Management",
      description: "Intelligent stop loss adjustment based on pattern development and market volatility."
    },
    {
      title: "Real-Time Alerts",
      description: "Instant notifications for pattern formations, entries, exits, and risk management events."
    }
  ]

  const quickStartSteps = [
    "Install STRATENGINE.cs file in your NinjaTrader Strategies folder",
    "Restart NinjaTrader and navigate to Strategies",
    "Configure your account-based position sizing and risk limits", 
    "Set your preferred timeframes for pattern analysis",
    "Enable the strategy on your chart and begin live trading",
    "Monitor real-time alerts and performance metrics"
  ]

  const configOptions = [
    {
      name: "Position Size Mode",
      description: "Choose between Account Percentage, Fixed Dollar, or Custom sizing methods",
      defaultValue: "Account Percentage (2%)"
    },
    {
      name: "Risk-Reward Ratio",
      description: "Set your target profit multiple relative to initial risk",
      defaultValue: "2:1"
    },
    {
      name: "Timeframe Filter",
      description: "Select which timeframes must align for pattern confirmation",
      defaultValue: "15m, 1h, 4h"
    },
    {
      name: "Pattern Types",
      description: "Enable/disable specific pattern types (1s, 2s, 3s, Failed 2s)",
      defaultValue: "All enabled"
    },
    {
      name: "Trading Hours",
      description: "Define when the strategy is allowed to take new positions",
      defaultValue: "9:30 AM - 4:00 PM ET"
    },
    {
      name: "Maximum Positions",
      description: "Limit the number of concurrent positions",
      defaultValue: "3"
    }
  ]

  const requirements = [
    "NinjaTrader 8.0 or higher",
    "Windows 10/11 (64-bit)",
    "Minimum 8GB RAM (16GB recommended)",
    "Active market data feed (Kinetick recommended)",
    "Valid NinjaStrat license"
  ]

  const compatibility = [
    "NinjaTrader 8.0+",
    "NASDAQ Futures (NQ, MNQ)",
    "Live and Sim trading accounts",
    "Multiple chart types",
    "All major data providers"
  ]

  const relatedProducts = [
    {
      name: "Sniper",
      href: "/strategies/sniper",
      description: "Precision entries with multi-timeframe alignment"
    },
    {
      name: "Failed 2s",
      href: "/strategies/failed2s", 
      description: "Specialized reversal pattern strategy"
    },
    {
      name: "StratPatterns",
      href: "/indicators/stratpatterns",
      description: "Visual pattern recognition indicator"
    }
  ]

  const documentation = (
    <div>
      <h2>How STRATENGINE Works</h2>
      <p>
        STRATENGINE is our flagship automated trading strategy that implements the complete #TheStrat methodology
        developed by Rob Smith. The strategy combines pattern recognition, timeframe continuity analysis, and 
        professional risk management into a fully automated system.
      </p>
      
      <h3>Pattern Recognition Engine</h3>
      <p>
        The core of STRATENGINE is its sophisticated pattern recognition system that identifies:
      </p>
      <ul>
        <li><strong>1 Candles:</strong> Inside bars that indicate consolidation</li>
        <li><strong>2U Candles:</strong> Bullish outside bars breaking above previous high</li>
        <li><strong>2D Candles:</strong> Bearish outside bars breaking below previous low</li>
        <li><strong>3 Candles:</strong> Directional bars continuing the trend</li>
      </ul>

      <h3>Timeframe Continuity (TFC)</h3>
      <p>
        STRATENGINE analyzes multiple timeframes to ensure pattern alignment. This TFC bias helps filter
        out low-probability setups and focuses on high-conviction trades where multiple timeframes agree.
      </p>

      <h3>Risk Management</h3>
      <p>
        Every trade includes professional risk management with:
      </p>
      <ul>
        <li>Dynamic position sizing based on account equity</li>
        <li>Predetermined risk-reward ratios</li>
        <li>Cover Risk exit strategy to lock in profits</li>
        <li>Maximum position limits to prevent overexposure</li>
      </ul>
    </div>
  )

  return (
    <ProductDetailTemplate
      name="STRATENGINE"
      tagline="The Complete #TheStrat Automation Suite"
      description="Our flagship automated trading strategy implementing complete #TheStrat methodology with advanced risk management and multi-timeframe analysis. The most comprehensive pattern recognition system available for NinjaTrader."
      category="strategy"
      heroImage="/images/stratengine.png"
      demoVideo="/videos/stratengine-demo.mp4"
      features={features}
      requirements={requirements}
      compatibility={compatibility}
      configOptions={configOptions}
      quickStartSteps={quickStartSteps}
      documentation={documentation}
      downloadLink="https://whop.com/ninjastrat/"
      version="2.1.3"
      lastUpdated="January 2025"
      relatedProducts={relatedProducts}
    />
  )
}