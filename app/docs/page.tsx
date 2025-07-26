import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  WrenchIcon
} from '@heroicons/react/24/solid'

export default function DocsPage() {
  const guides = [
    {
      title: "Getting Started with StratEngine",
      description: "Complete setup guide for NinjaTrader 8 and initial configuration",
      href: "/docs/getting-started",
      icon: RocketLaunchIcon
    },
    {
      title: "Risk Management Settings",
      description: "Configure position sizing, stop losses, and account protection",
      href: "/docs/risk-management",
      icon: ShieldCheckIcon
    },
    {
      title: "Pattern Recognition Guide",
      description: "Understanding #TheStrat patterns and how StratEngine identifies them",
      href: "/docs/patterns",
      icon: ChartBarIcon
    },
    {
      title: "Troubleshooting",
      description: "Common issues and solutions for optimal performance",
      href: "/docs/troubleshooting",
      icon: WrenchIcon
    }
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-primary">Documentation</h1>
          <p className="text-xl text-center text-text-secondary mb-12 max-w-3xl mx-auto">
            Everything you need to master NinjaStrat indicators and strategies
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {guides.map((guide, index) => (
              <Link 
                key={index}
                href={guide.href}
                className="bg-surface-elevated rounded-lg p-8 border border-surface-higher hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <guide.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-text-secondary">
                      {guide.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="bg-surface-elevated rounded-lg p-8 border border-surface-higher">
            <h2 className="text-2xl font-semibold mb-4 text-text-primary">Quick Links</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="/docs/api" className="text-primary hover:text-primary-hover transition-colors">
                API Reference →
              </a>
              <a href="/docs/changelog" className="text-primary hover:text-primary-hover transition-colors">
                Changelog →
              </a>
              <a href="/docs/videos" className="text-primary hover:text-primary-hover transition-colors">
                Video Tutorials →
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}