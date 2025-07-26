import ProductDetailTemplate from '@/components/templates/ProductDetailTemplate'

export default function StrongClosePage() {
  const features = [
    {
      title: "Strong Close Detection",
      description: "Identifies candles that close near their highs (bullish) or lows (bearish) indicating strong directional commitment."
    },
    {
      title: "Return-to-Open Setups",
      description: "Focuses on price action that returns to the opening level after showing strong close characteristics."
    },
    {
      title: "Momentum Validation",
      description: "Validates strong close patterns with momentum indicators to confirm strength and sustainability."
    },
    {
      title: "Multiple Timeframe Analysis",
      description: "Analyzes strong close patterns across multiple timeframes for confluence and confirmation."
    },
    {
      title: "Volume Integration",
      description: "Incorporates volume analysis to distinguish between strong closes with conviction versus low-volume moves."
    },
    {
      title: "Adaptive Risk Management",
      description: "Dynamic position sizing and stop placement based on the strength of the close pattern."
    }
  ]

  const quickStartSteps = [
    "Install StrongClose.cs file in your NinjaTrader Strategies folder",
    "Restart NinjaTrader and load the strategy (Beta version)",
    "Configure strong close percentage thresholds",
    "Set return-to-open detection parameters",
    "Define volume and momentum confirmation filters",
    "Apply to your chart and monitor for beta testing feedback"
  ]

  const configOptions = [
    {
      name: "Strong Close Threshold",
      description: "Percentage of range required for a 'strong close' classification",
      defaultValue: "75% of range"
    },
    {
      name: "Return-to-Open Window",
      description: "Time window to look for return-to-open setups",
      defaultValue: "5 bars"
    },
    {
      name: "Volume Confirmation",
      description: "Minimum volume requirement relative to average",
      defaultValue: "1.2x average volume"
    },
    {
      name: "Momentum Filter",
      description: "Require momentum confirmation for entries",
      defaultValue: "Enabled"
    },
    {
      name: "Higher Timeframe Filter",
      description: "Require higher timeframe alignment",
      defaultValue: "15m and 1h alignment"
    },
    {
      name: "Maximum Positions",
      description: "Limit concurrent positions during beta testing",
      defaultValue: "1"
    }
  ]

  const requirements = [
    "NinjaTrader 8.0 or higher",
    "Windows 10/11 (64-bit)",
    "Minimum 8GB RAM",
    "Real-time market data",
    "Valid NinjaStrat license",
    "Beta testing agreement"
  ]

  const compatibility = [
    "NinjaTrader 8.0+",
    "NASDAQ Futures (NQ, MNQ)",
    "ES futures (primary testing)",
    "Simulation accounts recommended",
    "Multiple timeframes (5m-1h)"
  ]

  const relatedProducts = [
    {
      name: "STRATENGINE",
      href: "/strategies/stratengine",
      description: "Production pattern suite"
    },
    {
      name: "StratPatterns",
      href: "/indicators/stratpatterns",
      description: "Visual pattern overlay"
    }
  ]

  const documentation = (
    <div>
      <h2>StrongClose: Beta Strategy Development</h2>
      <p>
        <strong>⚠️ BETA VERSION:</strong> StrongClose is currently in beta testing phase. 
        Early results are showing promise, but the strategy is still being refined and optimized. 
        Use with caution and preferably in simulation mode.
      </p>
      
      <h3>Strong Close Concept</h3>
      <p>
        A "strong close" occurs when a candle closes near its extreme (high for bullish, low for bearish), 
        indicating strong directional commitment from market participants. This concept is based on 
        the principle that where price closes relative to its range reveals sentiment.
      </p>
      
      <h3>Return-to-Open Strategy</h3>
      <p>
        The core logic focuses on scenarios where:
      </p>
      <ul>
        <li><strong>Strong Close Formation:</strong> Price closes in the top 25% (bullish) or bottom 25% (bearish) of the range</li>
        <li><strong>Subsequent Retracement:</strong> Price returns to or near the opening level of the strong close bar</li>
        <li><strong>Continuation Setup:</strong> This return-to-open often provides a low-risk entry for continuation</li>
      </ul>
      
      <h3>Beta Testing Focus Areas</h3>
      <p>
        Current development is focusing on:
      </p>
      <ul>
        <li><strong>Threshold Optimization:</strong> Finding optimal strong close percentage thresholds</li>
        <li><strong>Time Decay:</strong> How long return-to-open setups remain valid</li>
        <li><strong>Volume Integration:</strong> Role of volume in confirming pattern strength</li>
        <li><strong>Market Condition Adaptation:</strong> Performance in different market environments</li>
      </ul>
      
      <h3>Preliminary Results</h3>
      <p>
        Early backtesting and limited live testing show:
      </p>
      <ul>
        <li>Win rate: 58-62% (target: 65%+)</li>
        <li>Average R:R: 1.8:1 (target: 2:1)</li>
        <li>Best performance during trend days</li>
        <li>Requires refinement for choppy markets</li>
      </ul>
      
      <h3>Beta Participation</h3>
      <p>
        If you're interested in beta testing StrongClose, please ensure you:
      </p>
      <ul>
        <li>Use simulation mode initially</li>
        <li>Keep detailed performance logs</li>
        <li>Report any issues or observations</li>
        <li>Understand the experimental nature</li>
      </ul>
    </div>
  )

  return (
    <ProductDetailTemplate
      name="StrongClose"
      tagline="Beta: Strong Close Patterns"
      description="BETA STRATEGY: Focuses on strong close patterns with return-to-open setups. Early results showing promise but still in development and testing phase."
      category="strategy"
      heroImage="/images/strongclose.png"
      demoVideo="/videos/strongclose-demo.mp4"
      features={features}
      requirements={requirements}
      compatibility={compatibility}
      configOptions={configOptions}
      quickStartSteps={quickStartSteps}
      documentation={documentation}
      downloadLink="https://whop.com/ninjastrat/"
      version="0.9.2-beta"
      lastUpdated="January 2025"
      relatedProducts={relatedProducts}
    />
  )
}