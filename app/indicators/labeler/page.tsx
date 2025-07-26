import ProductDetailTemplate from '@/components/templates/ProductDetailTemplate'

export default function LabelerPage() {
  const features = [
    {
      title: "Professional Chart Annotation",
      description: "Chart labeling tool for marking important levels, patterns, and trade setups directly on your charts with professional appearance."
    },
    {
      title: "Multiple Label Types",
      description: "Support for text labels, arrows, boxes, lines, and custom shapes for comprehensive chart markup."
    },
    {
      title: "Persistent Labels",
      description: "Labels remain on charts across sessions and timeframe changes for consistent analysis."
    },
    {
      title: "Customizable Styling",
      description: "Full control over colors, fonts, sizes, and positioning for professional chart presentation."
    },
    {
      title: "Template System",
      description: "Save and reuse label templates for consistent marking across different charts and timeframes."
    },
    {
      title: "Export Capability",
      description: "Export labeled charts for reporting, education, or sharing with other traders."
    }
  ]

  const configOptions = [
    {
      name: "Label Types",
      description: "Available label formats and shapes",
      defaultValue: "Text, Arrows, Boxes, Lines"
    },
    {
      name: "Default Styling",
      description: "Default colors, fonts, and sizes for new labels",
      defaultValue: "White text, black background"
    },
    {
      name: "Persistence Settings",
      description: "How long labels remain on charts",
      defaultValue: "Until manually removed"
    }
  ]

  const requirements = [
    "NinjaTrader 8.0 or higher",
    "Windows 10/11 (64-bit)",
    "Valid NinjaStrat license"
  ]

  const compatibility = [
    "NinjaTrader 8.0+",
    "All chart types and timeframes",
    "Export to image formats"
  ]

  const relatedProducts = [
    {
      name: "StratPatterns",
      href: "/indicators/stratpatterns",
      description: "Automated pattern labeling"
    }
  ]

  return (
    <ProductDetailTemplate
      name="Labeler"
      tagline="Chart Annotation Tool"
      description="Professional chart labeling system for marking key levels, patterns, and trade setups. Create clear, persistent annotations for analysis and education."
      category="indicator"
      heroImage="/images/labeler.png"
      features={features}
      requirements={requirements}
      compatibility={compatibility}
      configOptions={configOptions}
      downloadLink="https://whop.com/ninjastrat/"
      version="1.3.1"
      lastUpdated="January 2025"
      relatedProducts={relatedProducts}
    />
  )
}