import ProductDetailTemplate from '@/components/templates/ProductDetailTemplate'

export default function BeeEfsPage() {
  const features = [
    {
      title: "Experimental Pattern Recognition",
      description: "BETA: Pattern recognition system focusing on specific market formations and structure analysis. Currently in development."
    },
    {
      title: "Advanced Algorithm Testing",
      description: "Testing cutting-edge pattern detection algorithms for future integration into production tools."
    },
    {
      title: "Market Formation Analysis",
      description: "Experimental analysis of complex market formations beyond traditional #TheStrat patterns."
    },
    {
      title: "Beta Feedback Integration",
      description: "Continuous improvement based on user feedback and performance analysis."
    }
  ]

  const configOptions = [
    {
      name: "Detection Sensitivity",
      description: "How sensitive the pattern detection algorithm is",
      defaultValue: "Medium (Beta setting)"
    },
    {
      name: "Pattern Types",
      description: "Which experimental patterns to detect",
      defaultValue: "All beta patterns"
    }
  ]

  const requirements = [
    "NinjaTrader 8.0 or higher",
    "Windows 10/11 (64-bit)",
    "Beta testing agreement",
    "Valid NinjaStrat license"
  ]

  const compatibility = [
    "NinjaTrader 8.0+",
    "Simulation recommended for testing",
    "Multiple timeframes"
  ]

  const documentation = (
    <div>
      <h2>BeeEfs: Beta Pattern Recognition</h2>
      <p>
        <strong>⚠️ BETA VERSION:</strong> BeeEfs is an experimental indicator currently in development. 
        Use with caution and preferably in simulation mode for testing purposes.
      </p>
    </div>
  )

  return (
    <ProductDetailTemplate
      name="BeeEfs"
      tagline="Pattern Recognition Beta"
      description="BETA: Experimental pattern recognition system focusing on specific market formations and structure analysis. Currently in development and testing phase."
      category="indicator"
      heroImage="/images/beeefs.png"
      features={features}
      requirements={requirements}
      compatibility={compatibility}
      configOptions={configOptions}
      documentation={documentation}
      downloadLink="https://whop.com/ninjastrat/"
      version="0.7.1-beta"
      lastUpdated="January 2025"
      relatedProducts={[]}
    />
  )
}