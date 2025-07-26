import PageLayout from '@/components/layout/PageLayout'
import { CardElevated } from '@/components/ui/Card'
import { BoltIcon, CheckIcon } from '@heroicons/react/24/outline'
import { SparklesIcon } from '@heroicons/react/24/solid'

export default function PricingPage() {
  return (
    <PageLayout>
          <h1 className="page-title">Lifetime Access</h1>
          <div className="max-w-2xl mx-auto text-center">
            <p className="page-subtitle">
              Get unlimited access to all NinjaStrat indicators and strategies with a one-time payment.
            </p>
            
            <CardElevated className="p-12 border-2 border-primary/20">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <SparklesIcon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-white">NinjaStrat Lifetime</h2>
                <p className="card-text mb-8 text-lg">
                  One payment. Lifetime access. All current and future products included.
                </p>
              </div>
              
              <div className="space-y-4 mb-8 text-left max-w-sm mx-auto">
                <div className="flex items-start space-x-3 card-text">
                  <CheckIcon className="w-5 h-5 text-success flex-shrink-0" />
                  <span>All production indicators and strategies</span>
                </div>
                <div className="flex items-start space-x-3 card-text">
                  <CheckIcon className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Future updates and new releases</span>
                </div>
                <div className="flex items-start space-x-3 card-text">
                  <CheckIcon className="w-5 h-5 text-success flex-shrink-0" />
                  <span>Priority support access</span>
                </div>
                <div className="flex items-start space-x-3 card-text">
                  <CheckIcon className="w-5 h-5 text-success flex-shrink-0" />
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
                <BoltIcon className="w-5 h-5" />
              </a>
              
              <p className="text-muted text-sm mt-6">
                Secure checkout via Whop.com
              </p>
            </CardElevated>
            
            <div className="mt-12 card-text">
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
    </PageLayout>
  )
} 