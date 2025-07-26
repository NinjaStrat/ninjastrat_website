import ProductDetailTemplate from '@/components/templates/ProductDetailTemplate'

export default function Failed2sPage() {
  const features = [
    {
      title: "Failed 2U/2D Detection",
      description: "Automatically identifies when 2U or 2D patterns fail, often leading to explosive moves in the opposite direction."
    },
    {
      title: "Open Cross Analysis",
      description: "Advanced detection of when price crosses back through the opening range of the failed pattern."
    },
    {
      title: "Percentage-Based Targets",
      description: "Dynamic target calculation based on percentage moves rather than fixed points for better adaptability."
    },
    {
      title: "Pattern Confirmation",
      description: "Multi-bar confirmation to ensure the pattern has truly failed before triggering entries."
    },
    {
      title: "Reversal Momentum",
      description: "Captures the explosive momentum that often follows failed patterns in trending markets."
    },
    {
      title: "Timeframe Flexibility",
      description: "Works across multiple timeframes to capture both intraday and swing reversal opportunities."
    }
  ]

  const quickStartSteps = [
    "Install Failed2s.cs file in your NinjaTrader Strategies folder",
    "Restart NinjaTrader and load the strategy",
    "Configure pattern detection sensitivity settings",
    "Set percentage-based target and stop parameters",
    "Define confirmation bar requirements",
    "Apply to your preferred timeframe and start trading"
  ]

  const configOptions = [
    {
      name: "Pattern Lookback",
      description: "Number of bars to look back for 2U/2D pattern identification",
      defaultValue: "20 bars"
    },
    {
      name: "Failure Confirmation",
      description: "Number of bars required to confirm pattern failure",
      defaultValue: "2 bars"
    },
    {
      name: "Target Percentage",
      description: "Percentage move target from entry point",
      defaultValue: "1.5%"
    },
    {
      name: "Stop Loss Percentage",
      description: "Percentage stop loss from entry point",
      defaultValue: "0.75%"
    },
    {
      name: "Open Cross Filter",
      description: "Require price to cross pattern open before entry",
      defaultValue: "Enabled"
    },
    {
      name: "Volume Confirmation",
      description: "Require volume confirmation on failure bar",
      defaultValue: "Disabled"
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
    "All major US equity indices",
    "Live and Simulation accounts",
    "Multiple timeframes (1m-1D)"
  ]

  const relatedProducts = [
    {
      name: "STRATENGINE",
      href: "/strategies/stratengine",
      description: "Complete pattern recognition suite"
    },
    {
      name: "Sniper",
      href: "/strategies/sniper",
      description: "Precision entry system"
    },
    {
      name: "StratPatterns",
      href: "/indicators/stratpatterns",
      description: "Visual pattern overlay"
    }
  ]

  const documentation = (
    <div>
      <h2>Understanding Failed 2s Strategy</h2>
      <p>
        The Failed 2s strategy specializes in one of the most powerful setups in #TheStrat methodology: 
        when 2U (bullish outside) or 2D (bearish outside) patterns fail to follow through, they often 
        create explosive moves in the opposite direction.
      </p>
      
      <h3>What Makes a 2 Pattern "Fail"?</h3>
      <p>
        A 2U pattern fails when price cannot sustain above the high of the 2U bar and instead breaks 
        below the 2U low. Conversely, a 2D pattern fails when price cannot sustain below the 2D low 
        and breaks above the 2D high.
      </p>
      
      <h3>The Power of Failed Patterns</h3>
      <p>
        Failed patterns are powerful because they represent:
      </p>
      <ul>
        <li><strong>Failed Breakouts:</strong> When momentum fails, it often reverses violently</li>
        <li><strong>Trapped Traders:</strong> Those who entered on the initial breakout get stopped out</li>
        <li><strong>Momentum Shift:</strong> The market shows its true directional bias</li>
        <li><strong>High Probability:</strong> Failed patterns have statistically high success rates</li>
      </ul>
      
      <h3>Entry and Exit Logic</h3>
      <p>
        The strategy enters when a confirmed pattern failure occurs, with targets based on percentage 
        moves rather than fixed points to adapt to different market conditions and volatility levels.
      </p>
    </div>
  )

  return (
    <ProductDetailTemplate
      name="Failed 2s"
      tagline="Reversal Specialist"
      description="Specialized strategy focusing exclusively on 2-going-3 reversal patterns with open cross detection and percentage-based targets. Captures explosive momentum when patterns fail to follow through."
      category="strategy"
      heroImage="/images/failed2s.png"
      demoVideo="/videos/failed2s-demo.mp4"
      features={features}
      requirements={requirements}
      compatibility={compatibility}
      configOptions={configOptions}
      quickStartSteps={quickStartSteps}
      documentation={documentation}
      downloadLink="https://whop.com/ninjastrat/"
      version="2.0.1"
      lastUpdated="January 2025"
      relatedProducts={relatedProducts}
    />
  )
}