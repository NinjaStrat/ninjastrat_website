import ProductDetailTemplate from '@/components/templates/ProductDetailTemplate'

export default function BeeOhEsPage() {
  const features = [
    {
      title: "Advanced Structure Analysis",
      description: "BETA: Advanced pattern detection algorithm for comprehensive market structure and formation analysis."
    },
    {
      title: "Experimental Algorithms",
      description: "Testing next-generation pattern recognition technology for future production releases."
    },
    {
      title: "Complex Formation Detection",
      description: "Identifies sophisticated market structures beyond traditional pattern analysis."
    },
    {
      title: "Research and Development",
      description: "Continuous algorithm refinement based on market testing and user feedback."
    }
  ]

  const configOptions = [
    {
      name: "Analysis Depth",
      description: "How deep to analyze market structure",
      defaultValue: "Standard (Beta level)"
    },
    {
      name: "Formation Types",
      description: "Which experimental formations to detect",
      defaultValue: "All beta formations"
    }
  ]

  const requirements = [
    "NinjaTrader 8.0 or higher",
    "Windows 10/11 (64-bit)",
    "Beta testing participation",
    "Valid NinjaStrat license"
  ]

  const compatibility = [
    "NinjaTrader 8.0+",
    "Testing environment recommended",
    "Multiple timeframes"
  ]

  const documentation = (
    <div>
      <h2>BeeOhEs: Structure Analysis Beta</h2>
      <p>
        <strong>⚠️ BETA VERSION:</strong> BeeOhEs is an experimental indicator for advanced 
        market structure analysis. Currently in development with limited testing availability.
      </p>
    </div>
  )

  return (
    <ProductDetailTemplate
      name="BeeOhEs"
      tagline="Structure Analysis Beta"
      description="BETA: Advanced pattern detection algorithm for comprehensive market structure and formation analysis. Experimental technology in development."
      category="indicator"
      heroImage="/images/beeohes.png"
      features={features}
      requirements={requirements}
      compatibility={compatibility}
      configOptions={configOptions}
      documentation={documentation}
      downloadLink="https://whop.com/ninjastrat/"
      version="0.5.3-beta"
      lastUpdated="January 2025"
      relatedProducts={[]}
    />
  )
}