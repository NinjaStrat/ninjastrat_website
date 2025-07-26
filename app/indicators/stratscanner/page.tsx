import ProductDetailTemplate from '@/components/templates/ProductDetailTemplate'

export default function StratScannerPage() {
  const features = [
    {
      title: "Multi-Instrument Scanning",
      description: "Simultaneously scans multiple instruments and timeframes for pattern opportunities across your entire watchlist."
    },
    {
      title: "Real-Time Pattern Detection",
      description: "Identifies #TheStrat patterns as they form across all monitored instruments with instant notifications."
    },
    {
      title: "Customizable Watchlists",
      description: "Create and manage multiple watchlists for different trading strategies and market sectors."
    },
    {
      title: "Multi-Timeframe Analysis",
      description: "Scans from 1-minute to daily timeframes simultaneously to find the best opportunities."
    },
    {
      title: "Pattern Filtering",
      description: "Advanced filters to focus on specific pattern types, timeframe combinations, and market conditions."
    },
    {
      title: "Opportunity Ranking",
      description: "Ranks detected patterns by probability and strength to help prioritize trading opportunities."
    }
  ]

  const quickStartSteps = [
    "Install StratScanner.cs file in your NinjaTrader Indicators folder",
    "Restart NinjaTrader and open the StratScanner window",
    "Configure your instrument watchlists and timeframes",
    "Set pattern detection filters and preferences",
    "Configure alert settings for different pattern types",
    "Start scanning and monitor the results for trading opportunities"
  ]

  const configOptions = [
    {
      name: "Instrument Lists",
      description: "Configure which instruments to monitor",
      defaultValue: "NQ, ES, YM, RTY"
    },
    {
      name: "Timeframe Selection",
      description: "Choose which timeframes to scan simultaneously",
      defaultValue: "1m, 5m, 15m, 1h"
    },
    {
      name: "Pattern Filters",
      description: "Select which patterns to detect and report",
      defaultValue: "2U, 2D, Failed patterns"
    },
    {
      name: "TFC Requirements",
      description: "Timeframe continuity requirements for alerts",
      defaultValue: "2 timeframes aligned"
    },
    {
      name: "Scan Frequency",
      description: "How often to update scan results",
      defaultValue: "Every 5 seconds"
    },
    {
      name: "Alert Priorities",
      description: "Set priority levels for different pattern types",
      defaultValue: "High (2U/2D), Medium (Failed), Low (3s)"
    }
  ]

  const requirements = [
    "NinjaTrader 8.0 or higher",
    "Windows 10/11 (64-bit)",
    "Minimum 16GB RAM (for multi-instrument scanning)",
    "Real-time market data feeds",
    "Valid NinjaStrat license"
  ]

  const compatibility = [
    "NinjaTrader 8.0+",
    "All NinjaTrader supported instruments",
    "Multiple data providers",
    "Futures, Forex, Stocks, ETFs",
    "Custom instrument lists"
  ]

  const relatedProducts = [
    {
      name: "StratPatterns",
      href: "/indicators/stratpatterns",
      description: "Single-chart pattern recognition"
    },
    {
      name: "StratAlerts",
      href: "/indicators/stratalerts",
      description: "Advanced notification system"
    },
    {
      name: "STRATENGINE",
      href: "/strategies/stratengine",
      description: "Automated pattern trading"
    }
  ]

  const documentation = (
    <div>
      <h2>StratScanner: Multi-Timeframe Market Scanner</h2>
      <p>
        StratScanner is a powerful market scanning tool that monitors multiple instruments and 
        timeframes simultaneously to identify #TheStrat pattern opportunities across your entire 
        trading universe.
      </p>
      
      <h3>Comprehensive Market Coverage</h3>
      <p>
        Rather than watching individual charts, StratScanner provides a bird's-eye view of 
        pattern opportunities:
      </p>
      <ul>
        <li><strong>Multi-Instrument:</strong> Monitor dozens of instruments simultaneously</li>
        <li><strong>Multi-Timeframe:</strong> Scan from 1-minute to daily charts at once</li>
        <li><strong>Real-Time Updates:</strong> Continuous scanning with instant notifications</li>
        <li><strong>Pattern Prioritization:</strong> Focus on the highest probability setups</li>
      </ul>
      
      <h3>Pattern Detection System</h3>
      <p>
        StratScanner uses the same robust pattern recognition as our other tools:
      </p>
      <ul>
        <li><strong>1 Patterns:</strong> Inside bars setting up for breakouts</li>
        <li><strong>2U/2D Patterns:</strong> Outside bars with directional momentum</li>
        <li><strong>3 Patterns:</strong> Continuation signals in trending markets</li>
        <li><strong>Failed Patterns:</strong> Reversal opportunities when patterns fail</li>
      </ul>
      
      <h3>Timeframe Continuity Analysis</h3>
      <p>
        One of StratScanner's most powerful features is its ability to identify timeframe alignment:
      </p>
      <ul>
        <li><strong>TFC Detection:</strong> Automatically identifies when multiple timeframes align</li>
        <li><strong>Confluence Scoring:</strong> Ranks opportunities based on timeframe agreement</li>
        <li><strong>Bias Indication:</strong> Shows overall directional bias across timeframes</li>
        <li><strong>Pattern Hierarchy:</strong> Understands higher timeframe context</li>
      </ul>
      
      <h3>Opportunity Management</h3>
      <p>
        StratScanner helps you manage multiple opportunities efficiently:
      </p>
      <ul>
        <li><strong>Priority Ranking:</strong> Opportunities sorted by probability and strength</li>
        <li><strong>Custom Alerts:</strong> Different notification types for different patterns</li>
        <li><strong>Quick Navigation:</strong> One-click access to full charts for detailed analysis</li>
        <li><strong>Historical Tracking:</strong> Review past opportunities and their outcomes</li>
      </ul>
      
      <h3>Professional Applications</h3>
      <p>
        StratScanner is essential for:
      </p>
      <ul>
        <li><strong>Active Traders:</strong> Monitor multiple markets without missing opportunities</li>
        <li><strong>Swing Traders:</strong> Identify daily and weekly pattern setups</li>
        <li><strong>Educators:</strong> Demonstrate pattern concepts across different instruments</li>
        <li><strong>Strategy Development:</strong> Research pattern behavior across various markets</li>
      </ul>
    </div>
  )

  return (
    <ProductDetailTemplate
      name="StratScanner"
      tagline="Multi-Timeframe Market Scanner"
      description="Comprehensive scanner that identifies pattern opportunities across multiple timeframes and instruments simultaneously. Monitor your entire trading universe for #TheStrat setups."
      category="indicator"
      heroImage="/images/stratscanner.png"
      demoVideo="/videos/stratscanner-demo.mp4"
      features={features}
      requirements={requirements}
      compatibility={compatibility}
      configOptions={configOptions}
      quickStartSteps={quickStartSteps}
      documentation={documentation}
      downloadLink="https://whop.com/ninjastrat/"
      version="1.6.3"
      lastUpdated="January 2025"
      relatedProducts={relatedProducts}
    />
  )
}