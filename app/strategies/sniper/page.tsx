import ProductDetailTemplate from '@/components/templates/ProductDetailTemplate'

export default function SniperPage() {
  const features = [
    {
      title: "Multi-Timeframe Alignment",
      description: "Waits for multiple timeframes to align before triggering entries, ensuring high-probability setups."
    },
    {
      title: "Configurable HTF Requirements",
      description: "Customize which higher timeframes must be in agreement before the strategy takes a position."
    },
    {
      title: "Momentum Pattern Confirmation",
      description: "Optional momentum filters to confirm pattern strength before entry execution."
    },
    {
      title: "Precision Entry Timing",
      description: "Advanced algorithms identify the optimal entry point within confirmed patterns."
    },
    {
      title: "Risk Management Integration",
      description: "Built-in position sizing and stop-loss management based on pattern characteristics."
    },
    {
      title: "Alert System",
      description: "Real-time notifications when alignment conditions are met and entries are triggered."
    }
  ]

  const quickStartSteps = [
    "Install Sniper.cs file in your NinjaTrader Strategies folder",
    "Restart NinjaTrader and navigate to the Strategies section",
    "Configure your timeframe alignment requirements",
    "Set position sizing and risk management parameters",
    "Enable momentum confirmation filters if desired",
    "Apply the strategy to your chart and begin monitoring"
  ]

  const configOptions = [
    {
      name: "Primary Timeframe",
      description: "The main timeframe for pattern identification and entry signals",
      defaultValue: "5 minutes"
    },
    {
      name: "Higher Timeframe 1",
      description: "First higher timeframe that must be in alignment",
      defaultValue: "15 minutes"
    },
    {
      name: "Higher Timeframe 2",
      description: "Second higher timeframe for additional confirmation",
      defaultValue: "1 hour"
    },
    {
      name: "Momentum Filter",
      description: "Enable/disable momentum confirmation before entries",
      defaultValue: "Enabled"
    },
    {
      name: "Position Size",
      description: "Account percentage or fixed dollar amount per trade",
      defaultValue: "2% of account"
    },
    {
      name: "Stop Loss Method",
      description: "How stop losses are calculated (ATR, Fixed, Pattern-based)",
      defaultValue: "Pattern-based"
    }
  ]

  const requirements = [
    "NinjaTrader 8.0 or higher",
    "Windows 10/11 (64-bit)",
    "Minimum 8GB RAM (16GB recommended)",
    "Active market data feed",
    "Valid NinjaStrat license"
  ]

  const compatibility = [
    "NinjaTrader 8.0+",
    "NASDAQ Futures (NQ, MNQ)",
    "Live and Sim trading accounts",
    "Multiple chart configurations",
    "All major data providers"
  ]

  const relatedProducts = [
    {
      name: "STRATENGINE",
      href: "/strategies/stratengine",
      description: "Complete automated trading suite"
    },
    {
      name: "Failed 2s",
      href: "/strategies/failed2s",
      description: "Reversal pattern specialist"
    },
    {
      name: "StratPatterns",
      href: "/indicators/stratpatterns",
      description: "Visual pattern recognition"
    }
  ]

  const documentation = (
    <div>
      <h2>How Sniper Works</h2>
      <p>
        Sniper is a precision entry system designed for traders who want to maximize their win rate by waiting 
        for optimal market conditions. The strategy implements a multi-timeframe approach that ensures all 
        selected timeframes are in alignment before taking any positions.
      </p>
      
      <h3>Multi-Timeframe Alignment Logic</h3>
      <p>
        The core principle behind Sniper is timeframe continuity. The strategy monitors your selected timeframes 
        and only triggers entries when they all show agreement in direction and pattern formation.
      </p>
      
      <h3>Entry Criteria</h3>
      <p>
        For a long entry, Sniper requires:
      </p>
      <ul>
        <li>Primary timeframe showing a valid #TheStrat pattern (2U or 3 continuation)</li>
        <li>All higher timeframes in bullish alignment</li>
        <li>Optional momentum confirmation if enabled</li>
        <li>Risk-reward ratio meeting minimum requirements</li>
      </ul>
      
      <h3>Risk Management</h3>
      <p>
        Every Sniper trade includes professional risk management with predetermined stops and targets 
        based on the pattern characteristics and market volatility.
      </p>
    </div>
  )

  return (
    <ProductDetailTemplate
      name="Sniper"
      tagline="Precision Entry System"
      description="Advanced multi-timeframe alignment strategy that waits for optimal market conditions before entry. Configurable HTF requirements with optional momentum pattern confirmation for maximum precision trading."
      category="strategy"
      heroImage="/images/sniper.png"
      demoVideo="/videos/sniper-demo.mp4"
      features={features}
      requirements={requirements}
      compatibility={compatibility}
      configOptions={configOptions}
      quickStartSteps={quickStartSteps}
      documentation={documentation}
      downloadLink="https://whop.com/ninjastrat/"
      version="1.8.2"
      lastUpdated="January 2025"
      relatedProducts={relatedProducts}
    />
  )
}