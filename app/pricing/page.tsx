import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <div className="flex-grow">
        <main className="container mx-auto px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">Pricing</h1>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-text-secondary mb-8">
              This is a placeholder for the pricing page. In the real implementation, 
              this would contain pricing tiers, subscription options, and payment information.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-primary/20">
              <h2 className="text-2xl font-semibold mb-4">NinjaStrat StratEngine</h2>
              <p className="text-text-secondary mb-6">
                Advanced automated trading system for NASDAQ futures
              </p>
              <div className="text-3xl font-bold text-primary mb-6">Contact for Pricing</div>
              <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
} 