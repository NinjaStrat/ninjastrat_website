import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <div className="flex-grow">
        <main className="container mx-auto px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">Lifetime Access</h1>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-text-secondary mb-12 text-lg">
              Get unlimited access to all NinjaStrat indicators and strategies with a one-time payment.
            </p>
            
            <div className="bg-surface-elevated rounded-lg shadow-lg p-12 border-2 border-primary/20">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">∞</span>
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-text-primary">NinjaStrat Lifetime</h2>
                <p className="text-text-secondary mb-8 text-lg">
                  One payment. Lifetime access. All current and future products included.
                </p>
              </div>
              
              <div className="space-y-4 mb-8 text-left max-w-sm mx-auto">
                <div className="flex items-start space-x-3 text-text-secondary">
                  <span className="text-success mt-1">✓</span>
                  <span>All production indicators and strategies</span>
                </div>
                <div className="flex items-start space-x-3 text-text-secondary">
                  <span className="text-success mt-1">✓</span>
                  <span>Future updates and new releases</span>
                </div>
                <div className="flex items-start space-x-3 text-text-secondary">
                  <span className="text-success mt-1">✓</span>
                  <span>Priority support access</span>
                </div>
                <div className="flex items-start space-x-3 text-text-secondary">
                  <span className="text-success mt-1">✓</span>
                  <span>No recurring fees ever</span>
                </div>
              </div>
              
              <a 
                href="https://whop.com/ninjastrat/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4 glow-primary"
              >
                <span>Get Lifetime Access</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </a>
              
              <p className="text-text-muted text-sm mt-6">
                Secure checkout via Whop.com
              </p>
            </div>
            
            <div className="mt-12 text-text-secondary">
              <p className="mb-4">Browse available products:</p>
              <div className="flex justify-center space-x-6">
                <a href="/indicators" className="text-primary hover:text-primary-hover transition-colors">
                  View Indicators →
                </a>
                <a href="/strategies" className="text-primary hover:text-primary-hover transition-colors">
                  View Strategies →
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
} 