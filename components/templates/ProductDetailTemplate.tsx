import PageLayout from '@/components/layout/PageLayout'
import { Card, CardElevated } from '@/components/ui/Card'
import Image from 'next/image'
import { getImagePath } from '@/lib/utils'
import { 
  CheckIcon,
  DocumentTextIcon,
  CogIcon,
  ArrowDownTrayIcon,
  PlayIcon
} from '@heroicons/react/24/solid'
import { ReactNode } from 'react'

interface Feature {
  title: string
  description: string
}

interface ProductDetailTemplateProps {
  // Basic info
  name: string
  tagline: string
  description: string
  category: 'indicator' | 'strategy'
  
  // Hero section
  heroImage?: string
  demoVideo?: string
  
  // Features
  features: Feature[]
  
  // Technical details
  requirements?: string[]
  compatibility?: string[]
  
  // Configuration
  configOptions?: {
    name: string
    description: string
    defaultValue?: string
  }[]
  
  // Documentation
  quickStartSteps?: string[]
  documentation?: ReactNode
  
  // Downloads
  downloadLink?: string
  version?: string
  lastUpdated?: string
  
  // Related products
  relatedProducts?: {
    name: string
    href: string
    description: string
  }[]
}

export default function ProductDetailTemplate({
  name,
  tagline,
  description,
  category,
  heroImage,
  demoVideo,
  features,
  requirements,
  compatibility,
  configOptions,
  quickStartSteps,
  documentation,
  downloadLink,
  version,
  lastUpdated,
  relatedProducts
}: ProductDetailTemplateProps) {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="text-sm text-primary mb-2">
              {category === 'indicator' ? 'Indicator' : 'Strategy'}
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">{name}</h1>
            <p className="text-2xl text-primary mb-6">{tagline}</p>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {downloadLink && (
                <a 
                  href={downloadLink}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <ArrowDownTrayIcon className="w-5 h-5" />
                  <span>Download {name}</span>
                </a>
              )}
              {demoVideo && (
                <button className="btn-secondary inline-flex items-center space-x-2">
                  <PlayIcon className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              )}
            </div>
            
            {version && (
              <div className="mt-6 text-sm text-text-muted">
                Version {version} • Updated {lastUpdated}
              </div>
            )}
          </div>
          
          {heroImage && (
            <div className="relative">
              <div className="bg-surface rounded-xl overflow-hidden shadow-2xl border border-surface-elevated">
                <Image
                  src={getImagePath(heroImage)}
                  alt={`${name} Screenshot`}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-16 border-t border-surface-elevated">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <CheckIcon className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      {quickStartSteps && quickStartSteps.length > 0 && (
        <section className="py-16 bg-surface/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <DocumentTextIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white">Quick Start Guide</h2>
            </div>
            
            <CardElevated className="p-8">
              <ol className="space-y-4">
                {quickStartSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold mr-4">
                      {index + 1}
                    </span>
                    <span className="text-text-primary">{step}</span>
                  </li>
                ))}
              </ol>
            </CardElevated>
          </div>
        </section>
      )}

      {/* Configuration Options */}
      {configOptions && configOptions.length > 0 && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <CogIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white">Configuration Options</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {configOptions.map((option, index) => (
                <Card key={index} className="p-6">
                  <h4 className="font-semibold text-white mb-2">{option.name}</h4>
                  <p className="text-text-secondary text-sm mb-2">{option.description}</p>
                  {option.defaultValue && (
                    <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                      Default: {option.defaultValue}
                    </code>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* System Requirements */}
      {(requirements || compatibility) && (
        <section className="py-16 bg-surface/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Technical Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {requirements && (
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">System Requirements</h3>
                  <ul className="space-y-2">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-success mr-2">•</span>
                        <span className="text-text-secondary text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
              
              {compatibility && (
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Compatibility</h3>
                  <ul className="space-y-2">
                    {compatibility.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="w-4 h-4 text-success mr-2 mt-0.5" />
                        <span className="text-text-secondary text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Documentation */}
      {documentation && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto prose prose-invert">
            {documentation}
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts && relatedProducts.length > 0 && (
        <section className="py-16 border-t border-surface-elevated">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Related Products
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((product, index) => (
                <a
                  key={index}
                  href={product.href}
                  className="bg-surface rounded-lg p-6 border border-surface-elevated hover:border-primary/50 transition-all hover:scale-105"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-text-secondary text-sm">{product.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  )
}