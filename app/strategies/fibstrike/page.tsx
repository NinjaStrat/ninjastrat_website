import ProductDetailTemplate from '@/components/templates/ProductDetailTemplate'

export default function FibStrikePage() {
  const features = [
    {
      title: "Break of Structure Detection",
      description: "Advanced algorithms identify when market structure is broken, signaling potential trend changes."
    },
    {
      title: "Fibonacci Retracement Levels",
      description: "Automatically calculates and trades from key Fibonacci levels (38.2%, 50%, 61.8%) for optimal entries."
    },
    {
      title: "Independent Long/Short Settings",
      description: "Separately configurable parameters for long and short trades to optimize for different market conditions."
    },
    {
      title: "Structure-Based Entries",
      description: "Combines classical technical analysis with #TheStrat methodology for high-probability setups."
    },
    {
      title: "Dynamic Fibonacci Calculation",
      description: "Real-time calculation of Fibonacci levels based on recent swing highs and lows."
    },
    {
      title: "Risk-Reward Optimization",
      description: "Built-in risk management that factors in both structure and Fibonacci-based targets."
    }
  ]

  const quickStartSteps = [
    "Install FibStrike.cs file in your NinjaTrader Strategies folder",
    "Restart NinjaTrader and navigate to Strategies",
    "Configure swing high/low detection parameters",
    "Set Fibonacci retracement levels to trade from",
    "Define long and short entry conditions separately",
    "Enable the strategy on your chart and monitor structure breaks"
  ]

  const configOptions = [
    {
      name: "Swing Detection Period",
      description: "Number of bars to look back for swing high/low identification",
      defaultValue: "20 bars"
    },
    {
      name: "Fibonacci Levels",
      description: "Which Fibonacci retracement levels to use for entries",
      defaultValue: "38.2%, 50%, 61.8%"
    },
    {
      name: "Structure Break Confirmation",
      description: "Bars required to confirm a break of structure",
      defaultValue: "2 bars"
    },
    {
      name: "Long Entry Filter",
      description: "Additional filters for long position entries",
      defaultValue: "Above 50% retracement"
    },
    {
      name: "Short Entry Filter",
      description: "Additional filters for short position entries",
      defaultValue: "Below 50% retracement"
    },
    {
      name: "Target Method",
      description: "How profit targets are calculated (Fibonacci extension, fixed R:R)",
      defaultValue: "1.618 Fibonacci extension"
    }
  ]

  const requirements = [
    "NinjaTrader 8.0 or higher",
    "Windows 10/11 (64-bit)",
    "Minimum 8GB RAM",
    "Real-time market data",
    "Valid NinjaStrat license"
  ]

  const compatibility = [
    "NinjaTrader 8.0+",
    "NASDAQ Futures (NQ, MNQ)",
    "Major currency pairs (Forex)",
    "US equity indices",
    "Commodities and bonds"
  ]

  const relatedProducts = [
    {
      name: "STRATENGINE",
      href: "/strategies/stratengine",
      description: "Complete automated suite"
    },
    {
      name: "TapsORBs",
      href: "/strategies/tapsorbs",
      description: "Range breakout system"
    },
    {
      name: "StratPatterns",
      href: "/indicators/stratpatterns",
      description: "Pattern recognition indicator"
    }
  ]

  const documentation = (
    <div>
      <h2>FibStrike: Structure + Fibonacci Trading</h2>
      <p>
        FibStrike combines the power of market structure analysis with classical Fibonacci retracement 
        trading. The strategy identifies when market structure is broken and then looks for retracement 
        entries at key Fibonacci levels.
      </p>
      
      <h3>Break of Structure (BOS)</h3>
      <p>
        A Break of Structure occurs when price violates a significant swing high (in a downtrend) or 
        swing low (in an uptrend). This signals a potential change in market character and trend direction.
      </p>
      
      <h3>Fibonacci Integration</h3>
      <p>
        After identifying a structure break, FibStrike calculates Fibonacci retracement levels from 
        the recent swing points and waits for price to retrace to these key levels before entering:
      </p>
      <ul>
        <li><strong>38.2% Retracement:</strong> Shallow pullback in strong trends</li>
        <li><strong>50% Retracement:</strong> Common retracement level</li>
        <li><strong>61.8% Retracement:</strong> Golden ratio, often strong support/resistance</li>
      </ul>
      
      <h3>Independent Long/Short Logic</h3>
      <p>
        FibStrike allows you to configure different parameters for long and short trades, recognizing 
        that markets often behave differently in uptrends versus downtrends.
      </p>
      
      <h3>Risk Management</h3>
      <p>
        Stops are typically placed beyond the Fibonacci level that provided the entry, while targets 
        are set using Fibonacci extensions (127.2%, 161.8%) or predetermined risk-reward ratios.
      </p>
    </div>
  )

  return (
    <ProductDetailTemplate
      name="FibStrike"
      tagline="Structure + Fibonacci Trading"
      description="Advanced strategy combining Break of Structure (BOS) detection with Fibonacci retracement trading. Features independently configurable long/short settings for optimal market adaptation."
      category="strategy"
      heroImage="/images/fibstrike.png"
      demoVideo="/videos/fibstrike-demo.mp4"
      features={features}
      requirements={requirements}
      compatibility={compatibility}
      configOptions={configOptions}
      quickStartSteps={quickStartSteps}
      documentation={documentation}
      downloadLink="https://whop.com/ninjastrat/"
      version="1.5.3"
      lastUpdated="January 2025"
      relatedProducts={relatedProducts}
    />
  )
}