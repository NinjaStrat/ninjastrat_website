import ProductDetailTemplate from '@/components/templates/ProductDetailTemplate'

export default function StratAlertsPage() {
  const features = [
    {
      title: "Advanced Pattern Alerts",
      description: "Intelligent notification system for pattern formations, breakouts, and setup confirmations with customizable filters."
    },
    {
      title: "Multi-Channel Notifications",
      description: "Send alerts via email, SMS, audio, pop-up windows, and third-party platforms like Discord or Telegram."
    },
    {
      title: "Smart Filtering System",
      description: "Advanced filters to reduce noise and focus only on high-probability setups that meet your criteria."
    },
    {
      title: "Timeframe-Specific Alerts",
      description: "Different alert configurations for different timeframes to match your trading style."
    },
    {
      title: "Pattern Confirmation Alerts",
      description: "Get notified not just when patterns form, but when they confirm and follow through."
    },
    {
      title: "Custom Alert Templates",
      description: "Create and save custom alert templates for different trading strategies and market conditions."
    }
  ]

  const quickStartSteps = [
    "Install StratAlerts.cs file in your NinjaTrader Indicators folder",
    "Add StratAlerts to your charts for each timeframe you want to monitor",
    "Configure alert types and notification methods",
    "Set up filtering criteria to reduce false signals",
    "Test notification delivery methods (email, SMS, audio)",
    "Fine-tune settings based on your trading schedule and preferences"
  ]

  const configOptions = [
    {
      name: "Alert Types",
      description: "Which pattern events trigger alerts",
      defaultValue: "2U/2D formations, Failed patterns"
    },
    {
      name: "Notification Methods",
      description: "How alerts are delivered",
      defaultValue: "Audio + Email"
    },
    {
      name: "Time Filters",
      description: "Active hours for sending alerts",
      defaultValue: "Market hours only"
    },
    {
      name: "Confirmation Requirements",
      description: "Bars required to confirm pattern before alerting",
      defaultValue: "1 bar confirmation"
    },
    {
      name: "Frequency Limits",
      description: "Maximum alerts per instrument per timeframe",
      defaultValue: "1 per hour"
    },
    {
      name: "Priority Levels",
      description: "Different alert urgency for different patterns",
      defaultValue: "High (TFC aligned), Medium (single TF)"
    }
  ]

  const requirements = [
    "NinjaTrader 8.0 or higher",
    "Windows 10/11 (64-bit)",
    "Email account (for email alerts)",
    "SMS service (for text alerts)",
    "Valid NinjaStrat license"
  ]

  const compatibility = [
    "NinjaTrader 8.0+",
    "All timeframes and instruments",
    "Works with other NinjaStrat tools",
    "Third-party notification services",
    "Mobile alert integration"
  ]

  const relatedProducts = [
    {
      name: "StratScanner",
      href: "/indicators/stratscanner",
      description: "Multi-instrument pattern scanning"
    },
    {
      name: "StratPatterns",
      href: "/indicators/stratpatterns",
      description: "Visual pattern recognition"
    },
    {
      name: "STRATENGINE",
      href: "/strategies/stratengine",
      description: "Automated pattern trading"
    }
  ]

  const documentation = (
    <div>
      <h2>StratAlerts: Intelligent Notification System</h2>
      <p>
        StratAlerts is a comprehensive alert system designed to keep you informed of important 
        pattern developments across all your monitored timeframes and instruments, without 
        overwhelming you with false signals.
      </p>
      
      <h3>Smart Alert Logic</h3>
      <p>
        StratAlerts goes beyond simple pattern detection by incorporating intelligent filtering:
      </p>
      <ul>
        <li><strong>Pattern Quality:</strong> Only alerts on well-formed, clear patterns</li>
        <li><strong>Market Context:</strong> Considers overall market conditions and volatility</li>
        <li><strong>Timeframe Alignment:</strong> Prioritizes alerts when multiple timeframes agree</li>
        <li><strong>Historical Performance:</strong> Weighs patterns based on historical success rates</li>
      </ul>
      
      <h3>Multi-Channel Delivery</h3>
      <p>
        Receive alerts through your preferred communication channels:
      </p>
      <ul>
        <li><strong>Audio Alerts:</strong> Customizable sounds for different pattern types</li>
        <li><strong>Visual Pop-ups:</strong> On-screen notifications with pattern details</li>
        <li><strong>Email Notifications:</strong> Detailed alerts sent to your email address</li>
        <li><strong>SMS Text Messages:</strong> Critical alerts sent to your mobile device</li>
        <li><strong>Third-Party Integration:</strong> Discord, Telegram, or custom webhooks</li>
      </ul>
      
      <h3>Alert Categories</h3>
      <p>
        Different types of alerts for different trading needs:
      </p>
      <ul>
        <li><strong>Formation Alerts:</strong> When patterns initially form</li>
        <li><strong>Confirmation Alerts:</strong> When patterns confirm with follow-through</li>
        <li><strong>Failure Alerts:</strong> When patterns fail and create reversal opportunities</li>
        <li><strong>Breakout Alerts:</strong> When price breaks key pattern levels</li>
        <li><strong>TFC Alerts:</strong> When timeframe continuity is achieved</li>
      </ul>
      
      <h3>Customization and Control</h3>
      <p>
        Fine-tune your alert experience:
      </p>
      <ul>
        <li><strong>Pattern Selection:</strong> Choose exactly which patterns to monitor</li>
        <li><strong>Time Windows:</strong> Set active hours to match your trading schedule</li>
        <li><strong>Frequency Control:</strong> Prevent alert spam with intelligent throttling</li>
        <li><strong>Priority Levels:</strong> Different urgency levels for different setups</li>
        <li><strong>Custom Templates:</strong> Save different configurations for different strategies</li>
      </ul>
    </div>
  )

  return (
    <ProductDetailTemplate
      name="StratAlerts"
      tagline="Intelligent Notification System"
      description="Advanced alert system for pattern formations, breakouts, and setup confirmations with customizable filters and multi-channel delivery options."
      category="indicator"
      heroImage="/images/stratalerts.png"
      demoVideo="/videos/stratalerts-demo.mp4"
      features={features}
      requirements={requirements}
      compatibility={compatibility}
      configOptions={configOptions}
      quickStartSteps={quickStartSteps}
      documentation={documentation}
      downloadLink="https://whop.com/ninjastrat/"
      version="2.3.1"
      lastUpdated="January 2025"
      relatedProducts={relatedProducts}
    />
  )
}