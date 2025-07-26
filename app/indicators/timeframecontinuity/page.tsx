import ProductDetailTemplate from '@/components/templates/ProductDetailTemplate'

export default function TimeframeContinuityPage() {
  const features = [
    {
      title: "Multi-Timeframe Alignment Analysis",
      description: "Shows alignment across different timeframes for optimal entry timing with visual bias confirmation."
    },
    {
      title: "Bias Indication System",
      description: "Clear visual indicators showing bullish, bearish, or neutral bias across selected timeframes."
    },
    {
      title: "Configurable Timeframe Selection",
      description: "Choose which timeframes to analyze based on your trading style and strategy requirements."
    },
    {
      title: "Real-Time Updates",
      description: "Continuously monitors and updates timeframe alignment as market conditions change."
    },
    {
      title: "Visual Clarity",
      description: "Clean, easy-to-read display that shows timeframe status at a glance without cluttering charts."
    },
    {
      title: "Alert Integration",
      description: "Optional alerts when timeframe alignment occurs or changes significantly."
    }
  ]

  const quickStartSteps = [
    "Install TimeframeContinuity.cs in your NinjaTrader Indicators folder",
    "Add the indicator to your primary trading chart",
    "Configure which timeframes to monitor for alignment",
    "Set bias detection sensitivity and display preferences",
    "Customize colors and visual elements for your setup",
    "Use alignment information to time entries and exits"
  ]

  const configOptions = [
    {
      name: "Monitored Timeframes",
      description: "Select which timeframes to include in analysis",
      defaultValue: "15m, 1h, 4h"
    },
    {
      name: "Bias Calculation Method",
      description: "How directional bias is determined",
      defaultValue: "Pattern-based with momentum"
    },
    {
      name: "Alignment Threshold",
      description: "How many timeframes must agree for 'aligned' status",
      defaultValue: "2 out of 3"
    },
    {
      name: "Display Position",
      description: "Where to show the timeframe analysis on chart",
      defaultValue: "Top-left corner"
    },
    {
      name: "Update Frequency",
      description: "How often to refresh the analysis",
      defaultValue: "Real-time"
    },
    {
      name: "Color Scheme",
      description: "Colors for bullish, bearish, and neutral states",
      defaultValue: "Green, Red, Yellow"
    }
  ]

  const requirements = [
    "NinjaTrader 8.0 or higher",
    "Windows 10/11 (64-bit)",
    "Multi-timeframe data access",
    "Real-time market data",
    "Valid NinjaStrat license"
  ]

  const compatibility = [
    "NinjaTrader 8.0+",
    "All instrument types",
    "Multiple timeframe combinations",
    "Works with other indicators",
    "Compatible with automated strategies"
  ]

  const relatedProducts = [
    {
      name: "StratPatterns",
      href: "/indicators/stratpatterns",
      description: "Pattern recognition with TFC"
    },
    {
      name: "STRATENGINE",
      href: "/strategies/stratengine",
      description: "Automated TFC-based trading"
    },
    {
      name: "Sniper",
      href: "/strategies/sniper",
      description: "Precision entries with alignment"
    }
  ]

  const documentation = (
    <div>
      <h2>TimeframeContinuity: Multi-TF Alignment Analysis</h2>
      <p>
        TimeframeContinuity provides essential multi-timeframe analysis to help traders identify 
        when different timeframes are aligned, creating high-probability trading opportunities.
      </p>
      
      <h3>The Power of Timeframe Alignment</h3>
      <p>
        Trading with timeframe continuity significantly improves win rates:
      </p>
      <ul>
        <li><strong>Higher Probability:</strong> When multiple timeframes agree, setups have better odds</li>
        <li><strong>Stronger Moves:</strong> Aligned timeframes often produce more significant price movements</li>
        <li><strong>Better Timing:</strong> Entry timing improves when you wait for alignment</li>
        <li><strong>Risk Management:</strong> Alignment helps identify when NOT to trade</li>
      </ul>
      
      <h3>Bias Detection Methods</h3>
      <p>
        The indicator uses multiple methods to determine timeframe bias:
      </p>
      <ul>
        <li><strong>Pattern Analysis:</strong> Based on current #TheStrat patterns</li>
        <li><strong>Trend Direction:</strong> Overall price movement direction</li>
        <li><strong>Momentum Indicators:</strong> Rate of change and momentum factors</li>
        <li><strong>Support/Resistance:</strong> Key level breaks and holds</li>
      </ul>
      
      <h3>Visual Display System</h3>
      <p>
        Clean, intuitive display shows:
      </p>
      <ul>
        <li><strong>Individual TF Status:</strong> Each timeframe's current bias</li>
        <li><strong>Overall Alignment:</strong> Whether timeframes are in agreement</li>
        <li><strong>Strength Indication:</strong> How strong the alignment is</li>
        <li><strong>Change Alerts:</strong> When alignment status changes</li>
      </ul>
      
      <h3>Trading Applications</h3>
      <p>
        Use TimeframeContinuity for:
      </p>
      <ul>
        <li><strong>Entry Timing:</strong> Wait for alignment before entering trades</li>
        <li><strong>Trade Direction:</strong> Trade in the direction of timeframe alignment</li>
        <li><strong>Risk Assessment:</strong> Avoid trades when timeframes conflict</li>
        <li><strong>Exit Timing:</strong> Consider exits when alignment breaks down</li>
      </ul>
    </div>
  )

  return (
    <ProductDetailTemplate
      name="TimeframeContinuity"
      tagline="Multi-TF Alignment Analysis"
      description="Essential indicator showing alignment across different timeframes for optimal entry timing with visual bias confirmation and real-time updates."
      category="indicator"
      heroImage="/images/timeframecontinuity.png"
      demoVideo="/videos/timeframecontinuity-demo.mp4"
      features={features}
      requirements={requirements}
      compatibility={compatibility}
      configOptions={configOptions}
      quickStartSteps={quickStartSteps}
      documentation={documentation}
      downloadLink="https://whop.com/ninjastrat/"
      version="1.9.2"
      lastUpdated="January 2025"
      relatedProducts={relatedProducts}
    />
  )
}