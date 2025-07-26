import PageLayout from '@/components/layout/PageLayout'

export default function DevCTAPage() {
  return (
    <PageLayout>
      <h1 className="page-title">CTA Button Styles</h1>
      <p className="page-subtitle">Development reference for button styles</p>
      
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Primary CTAs */}
        <section>
          <h2 className="section-header">Primary CTAs</h2>
          <div className="bg-surface rounded-lg p-8 space-y-6">
            <div>
              <p className="text-text-muted text-sm mb-3">Standard Primary Button</p>
              <button className="btn-primary">
                Get Started
              </button>
            </div>
            <div>
              <p className="text-text-muted text-sm mb-3">Primary with Glow Effect</p>
              <button className="btn-primary glow-primary">
                Launch App
              </button>
            </div>
            <div>
              <p className="text-text-muted text-sm mb-3">Primary with Icon</p>
              <button className="btn-primary inline-flex items-center space-x-2">
                <span>Download Now</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Secondary CTAs */}
        <section>
          <h2 className="section-header">Secondary CTAs</h2>
          <div className="bg-surface rounded-lg p-8 space-y-6">
            <div>
              <p className="text-text-muted text-sm mb-3">Standard Secondary Button</p>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Ghost/Tertiary CTAs */}
        <section>
          <h2 className="section-header">Ghost/Tertiary CTAs</h2>
          <div className="bg-surface rounded-lg p-8 space-y-6">
            <div>
              <p className="text-text-muted text-sm mb-3">Ghost Button (Primary Color)</p>
              <button className="bg-transparent hover:bg-primary/10 text-text-primary border border-primary/30 hover:border-primary/50 px-8 py-3 rounded-lg font-semibold transition-all">
                Email Support
              </button>
            </div>
            <div>
              <p className="text-text-muted text-sm mb-3">Ghost Button (Secondary Color)</p>
              <button className="bg-transparent hover:bg-secondary/10 text-secondary border border-secondary/30 hover:border-secondary/50 px-6 py-2 rounded-lg font-semibold transition-all">
                View Details
              </button>
            </div>
          </div>
        </section>

        {/* Special CTAs */}
        <section>
          <h2 className="section-header">Special CTAs</h2>
          <div className="bg-surface rounded-lg p-8 space-y-6">
            <div>
              <p className="text-text-muted text-sm mb-3">Large Primary CTA</p>
              <button className="btn-primary text-lg px-8 py-4 glow-primary">
                Get Lifetime Access
              </button>
            </div>
            <div>
              <p className="text-text-muted text-sm mb-3">Full Width CTA</p>
              <button className="w-full btn-primary">
                Download Strategy
              </button>
            </div>
            <div>
              <p className="text-text-muted text-sm mb-3">Link Styled as Button</p>
              <a href="#" className="text-primary hover:text-primary-hover transition-colors">
                View Indicators →
              </a>
            </div>
          </div>
        </section>

        {/* Button Groups */}
        <section>
          <h2 className="section-header">Button Groups</h2>
          <div className="bg-surface rounded-lg p-8 space-y-6">
            <div>
              <p className="text-text-muted text-sm mb-3">Side by Side (Desktop)</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">
                  Primary Action
                </button>
                <button className="bg-transparent hover:bg-primary/10 text-text-primary border border-primary/30 hover:border-primary/50 px-8 py-3 rounded-lg font-semibold transition-all">
                  Secondary Action
                </button>
              </div>
            </div>
            <div>
              <p className="text-text-muted text-sm mb-3">Centered Group</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Open Discord Ticket
                </button>
                <button className="bg-transparent hover:bg-primary/10 text-text-primary border border-primary/30 hover:border-primary/50 px-8 py-3 rounded-lg font-semibold transition-all">
                  Email Support Team
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CSS Classes Reference */}
        <section>
          <h2 className="section-header">CSS Classes Reference</h2>
          <div className="bg-surface rounded-lg p-8">
            <div className="space-y-4 font-mono text-sm">
              <div>
                <p className="text-text-primary mb-1">Primary Button:</p>
                <code className="text-sky-blue">btn-primary</code>
              </div>
              <div>
                <p className="text-text-primary mb-1">Secondary Button:</p>
                <code className="text-sky-blue">btn-secondary</code>
              </div>
              <div>
                <p className="text-text-primary mb-1">Ghost Button (Primary):</p>
                <code className="text-sky-blue">bg-transparent hover:bg-primary/10 text-text-primary border border-primary/30 hover:border-primary/50 px-8 py-3 rounded-lg font-semibold transition-all</code>
              </div>
              <div>
                <p className="text-text-primary mb-1">Glow Effect:</p>
                <code className="text-sky-blue">glow-primary</code> or <code className="text-sky-blue">glow-secondary</code>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}