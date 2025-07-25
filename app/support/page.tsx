import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import contacts from '../../config/contacts.json';

export default function SupportPage() {
  return (
    <>
      <Navigation />
      <div className="flex-grow">
        <main className="container mx-auto px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">
            Support Center
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-text-secondary mb-12 text-center text-lg">
              Get help with StratEngine installation, configuration, and
              troubleshooting.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray rounded-lg shadow-lg p-6 text-center border-2 border-primary/20">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                <p className="text-text-secondary mb-4">
                  Get personalized help via email
                </p>
                <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Contact Support
                </button>
              </div>


              <div className="bg-gray rounded-lg shadow-lg p-6 text-center border-2 border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Knowledge Base</h3>
                <p className="text-text-secondary mb-4">
                  Browse articles and tutorials
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Browse Articles
                </button>
              </div>
            </div>

            <div className="bg-gray rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    How do I install StratEngine?
                  </h3>
                  <p className="text-text-secondary">
                    Download the StratEngine installer from our Downloads page
                    and follow the step-by-step installation guide. Make sure
                    you have NinjaTrader 8.0 or higher installed first.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    What are the system requirements?
                  </h3>
                  <p className="text-text-secondary">
                    StratEngine requires Windows 10/11 (64-bit), NinjaTrader
                    8.0+, minimum 8GB RAM, and an active internet connection for
                    real-time data feeds.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Can I use StratEngine with demo accounts?
                  </h3>
                  <p className="text-text-secondary">
                    Yes, StratEngine works with both live and demo accounts. We
                    recommend testing with a demo account first to familiarize
                    yourself with the system.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    What markets does StratEngine support?
                  </h3>
                  <p className="text-text-secondary">
                    StratEngine is specifically designed and optimized for
                    NASDAQ futures (NQ and MNQ). It focuses on these markets to
                    provide the highest performance and accuracy.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    How do I update StratEngine?
                  </h3>
                  <p className="text-text-secondary">
                    Updates are automatically delivered through NinjaTrader's
                    addon manager. You'll receive notifications when new
                    versions are available.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                Still need help?
              </h3>
              <p className="text-blue-700 mb-4">
                Our support team is available {contacts.support.hours}
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Support Team
              </button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
