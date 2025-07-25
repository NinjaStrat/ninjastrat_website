import Image from 'next/image'
import { getImagePath } from '@/lib/utils'

export default function VideoSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background-secondary to-surface">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            See <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">StratEngine</span> in Action
          </h2>
          
          <p className="text-xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            Watch live #TheStrat pattern recognition, TFC analysis, and automated trade execution in real market conditions
          </p>
          
          <div className="card-elevated p-8 md:p-12">
            {/* Demo GIF */}
            <div className="relative bg-surface rounded-xl overflow-hidden shadow-2xl border border-surface-higher group hover:border-primary/50 transition-all duration-300">
              <div className="aspect-video relative">
                <Image
                  src={getImagePath('/images/giphy.gif')}
                  alt="StratEngine Demo"
                  fill
                  className="object-cover"
                  unoptimized // Important for GIFs to animate
                  priority
                />
                
                {/* Optional overlay for play button or text */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      #TheStrat StratEngine in Action
                    </h3>
                    <p className="text-text-secondary text-sm">
                      Live pattern recognition and automated trading
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video features */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-sky-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-background">📊</span>
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Live Pattern Recognition</h4>
                <p className="text-text-secondary text-sm">
                  See StratEngine identify 1, 2U, 2D, 3 patterns in real-time with precise bar categorization and TFC bias
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-light-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-background">⚡</span>
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Failed 2s Reversals</h4>
                <p className="text-text-secondary text-sm">
                  Watch automated detection of failed 2s patterns with multi-mode reversal confirmation and entry timing
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-success to-bright-green rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-background">🎯</span>
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-2">Professional Risk Control</h4>
                <p className="text-text-secondary text-sm">
                  Observe account-based position sizing, R-multiple targets, and Cover Risk exit strategies in action
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 