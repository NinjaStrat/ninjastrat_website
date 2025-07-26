import ProductDetailTemplate from '@/components/templates/ProductDetailTemplate'

export default function StratPatternsPage() {
  const features = [
    {
      title: "Real-Time Pattern Identification",
      description: "Automatically identifies and marks 1, 2, and 3 patterns in real-time as they form on your charts."
    },
    {
      title: "Multi-Timeframe Analysis",
      description: "Analyzes patterns across multiple timeframes simultaneously for comprehensive market structure understanding."
    },
    {
      title: "Pattern Labeling System",
      description: "Clear, professional labels that mark each pattern with its classification and relevant information."
    },
    {
      title: "Trend Continuity Detection",
      description: "Identifies when patterns align across timeframes for high-probability trade setups."
    },
    {
      title: "Failed Pattern Recognition",
      description: "Detects when patterns fail to follow through, often leading to reversal opportunities."
    },
    {
      title: "Customizable Display Options",
      description: "Full control over label appearance, colors, and information displayed on your charts."
    }
  ]

  const quickStartSteps = [
    "Install StratPatterns.cs file in your NinjaTrader Indicators folder",
    "Restart NinjaTrader and add StratPatterns to your chart",
    "Configure which patterns to display and label",
    "Set up multi-timeframe analysis parameters",
    "Customize label appearance and information displayed",
    "Begin using enhanced pattern recognition for trading decisions"
  ]

  const configOptions = [
    {
      name: "Pattern Types",
      description: "Select which patterns to identify and display",
      defaultValue: "All patterns (1, 2U, 2D, 3)"
    },
    {
      name: "Timeframe Analysis",
      description: "Additional timeframes to analyze for pattern alignment",
      defaultValue: "Next 2 higher timeframes"
    },
    {
      name: "Label Display",
      description: "Information to show in pattern labels",
      defaultValue: "Pattern type + TFC status"
    },
    {
      name: "Failed Pattern Detection",
      description: "Highlight patterns that fail to follow through",
      defaultValue: "Enabled"
    },
    {
      name: "Label Colors",
      description: "Color scheme for different pattern types",
      defaultValue: "Green (2U), Red (2D), Yellow (1), Blue (3)"
    },
    {
      name: "Alert Integration",
      description: "Send alerts when specific patterns form",
      defaultValue: "2U/2D formations"
    }
  ]

  const requirements = [
    "NinjaTrader 8.0 or higher",
    "Windows 10/11 (64-bit)",
    "Minimum 8GB RAM (for multi-timeframe analysis)",
    "Real-time market data",
    "Valid NinjaStrat license"
  ]

  const compatibility = [
    "NinjaTrader 8.0+",
    "All timeframes (1m to 1D)",
    "NASDAQ, ES, YM futures",
    "Forex major pairs",
    "Works with multiple charts"
  ]

  const relatedProducts = [
    {
      name: "StratCandles",
      href: "/indicators/stratcandles",
      description: "Visual candle painting"
    },
    {
      name: "STRATENGINE",
      href: "/strategies/stratengine",
      description: "Automated pattern trading"
    },
    {
      name: "StratScanner",
      href: "/indicators/stratscanner",
      description: "Multi-instrument scanning"
    }
  ]

  const documentation = (
    <div>
      <h2>StratPatterns: Professional Pattern Recognition</h2>
      <p>
        StratPatterns is a comprehensive overlay indicator that provides real-time identification 
        and analysis of #TheStrat patterns with multi-timeframe context and professional labeling.
      </p>
      
      <h3>Pattern Recognition Engine</h3>
      <p>
        The indicator uses advanced algorithms to identify patterns in real-time:
      </p>
      <ul>
        <li><strong>1 Patterns:</strong> Inside bars indicating consolidation and potential breakout setups</li>
        <li><strong>2U Patterns:</strong> Bullish outside bars with continuation or reversal potential</li>
        <li><strong>2D Patterns:</strong> Bearish outside bars signaling downside momentum</li>
        <li><strong>3 Patterns:</strong> Directional bars showing trend continuation</li>
      </ul>
      
      <h3>Multi-Timeframe Context</h3>
      <p>
        StratPatterns analyzes higher timeframes to provide context:
      </p>
      <ul>
        <li><strong>Timeframe Continuity:</strong> Shows when patterns align across timeframes</li>
        <li><strong>Bias Indication:</strong> Displays higher timeframe directional bias</li>
        <li><strong>Confluence Detection:</strong> Identifies when multiple timeframes agree</li>
        <li><strong>Pattern Hierarchy:</strong> Shows relationship between timeframe patterns</li>
      </ul>
      
      <h3>Failed Pattern Detection</h3>
      <p>
        One of the most powerful features is the ability to detect pattern failures:
      </p>
      <ul>
        <li><strong>2U Failures:</strong> When bullish breakouts fail and reverse</li>
        <li><strong>2D Failures:</strong> When bearish breakdowns fail and reverse</li>
        <li><strong>Reversal Signals:</strong> Failed patterns often lead to strong moves opposite direction</li>
        <li><strong>Entry Opportunities:</strong> Pattern failures provide high-probability reversal entries</li>
      </ul>
      
      <h3>Professional Labeling</h3>
      <p>
        Clear, informative labels provide instant pattern analysis:
      </p>
      <ul>
        <li><strong>Pattern Classification:</strong> Immediate identification of pattern type</li>
        <li><strong>Timeframe Status:</strong> Higher timeframe alignment information</li>
        <li><strong>Failure Indication:</strong> Alerts when patterns fail to follow through</li>
        <li><strong>Customizable Display:</strong> Show only the information you need</li>
      </ul>
      
      <h3>Trading Applications</h3>
      <p>
        Professional traders use StratPatterns for:
      </p>
      <ul>
        <li>Real-time pattern recognition during live trading</li>
        <li>Multi-timeframe analysis for high-probability setups</li>
        <li>Educational purposes to learn pattern recognition</li>
        <li>Backtesting and strategy development</li>
      </ul>
    </div>
  )

  return (
    <ProductDetailTemplate
      name="StratPatterns"
      tagline="Real-Time Pattern Detection"
      description="Professional overlay indicator that identifies and marks 1, 2, and 3 patterns in real-time with multi-timeframe analysis and comprehensive pattern failure detection."
      category="indicator"
      heroImage="/images/stratpatterns.png"
      demoVideo="/videos/stratpatterns-demo.mp4"
      features={features}
      requirements={requirements}
      compatibility={compatibility}
      configOptions={configOptions}
      quickStartSteps={quickStartSteps}
      documentation={documentation}
      downloadLink="https://whop.com/ninjastrat/"
      version="2.8.1"
      lastUpdated="January 2025"
      relatedProducts={relatedProducts}
    />
  )
}