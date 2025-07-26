import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from 'next/link';
import contacts from '../../config/contacts.json';
import { 
  EnvelopeIcon,
  BookOpenIcon,
  DocumentTextIcon,
  CogIcon,
  WrenchIcon
} from '@heroicons/react/24/solid';
import { DiscordIcon } from '@/components/icons/DiscordIcon';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-8 py-20">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Support Center
        </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-text-primary mb-12 text-center text-lg">
              Get help with StratEngine installation, configuration, and
              troubleshooting.
            </p>

            <div className="bg-surface rounded-lg shadow-lg p-8 mb-8 border border-sky-blue/20 hover:border-sky-blue/40 transition-colors">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-sky-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpenIcon className="w-8 h-8 text-sky-blue" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Documentation & Guides</h3>
                <p className="text-text-primary mb-6">
                  Complete setup guides, configuration options, and best practices for all NinjaStrat products
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <DocumentTextIcon className="w-8 h-8 text-sky-blue mb-2 mx-auto" />
                  <h4 className="font-semibold text-white mb-1">Installation Guides</h4>
                  <p className="text-sm text-text-primary">Step-by-step setup instructions</p>
                </div>
                <div className="text-center">
                  <CogIcon className="w-8 h-8 text-sky-blue mb-2 mx-auto" />
                  <h4 className="font-semibold text-white mb-1">Configuration Manual</h4>
                  <p className="text-sm text-text-primary">Optimize your settings</p>
                </div>
                <div className="text-center">
                  <WrenchIcon className="w-8 h-8 text-sky-blue mb-2 mx-auto" />
                  <h4 className="font-semibold text-white mb-1">Troubleshooting</h4>
                  <p className="text-sm text-text-primary">Common issues and solutions</p>
                </div>
              </div>
              <div className="text-center mt-6">
                <Link href="/docs" className="btn-primary inline-block">
                  Browse Documentation
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-surface rounded-lg shadow-lg p-6 text-center border border-secondary/20 hover:border-secondary/40 transition-colors">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.942 4.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-8.662zM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Discord Community</h3>
                <p className="text-text-primary mb-4">
                  Join our community for instant help
                </p>
                <a 
                  href={contacts.social.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent hover:bg-secondary/10 text-secondary border border-secondary/30 hover:border-secondary/50 px-6 py-2 rounded-lg font-semibold transition-all inline-block"
                >
                  Join Discord
                </a>
              </div>

              <div className="bg-surface rounded-lg shadow-lg p-6 text-center border border-primary/20 hover:border-primary/40 transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EnvelopeIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Email Support</h3>
                <p className="text-text-primary mb-4">
                  Get personalized help via email
                </p>
                <a 
                  href={`mailto:${contacts.support.email}`}
                  className="bg-transparent hover:bg-primary/10 text-text-primary border border-primary/30 hover:border-primary/50 px-6 py-2 rounded-lg font-semibold transition-all inline-block"
                >
                  Contact Support
                </a>
              </div>
            </div>

            <div className="bg-surface rounded-lg shadow-lg p-8 border border-primary/10">
              <h2 className="text-2xl font-semibold mb-6 text-white">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="border-b border-surface-higher pb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    How do I install StratEngine?
                  </h3>
                  <p className="text-text-primary">
                    Download the StratEngine installer from our Downloads page
                    and follow the step-by-step installation guide. Make sure
                    you have NinjaTrader 8.0 or higher installed first.
                  </p>
                </div>

                <div className="border-b border-surface-higher pb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    What are the system requirements?
                  </h3>
                  <p className="text-text-primary">
                    StratEngine requires Windows 10/11 (64-bit), NinjaTrader
                    8.0+, minimum 8GB RAM, and an active internet connection for
                    real-time data feeds.
                  </p>
                </div>

                <div className="border-b border-surface-higher pb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Can I use StratEngine with demo accounts?
                  </h3>
                  <p className="text-text-primary">
                    Yes, StratEngine works with both live and demo accounts. We
                    recommend testing with a demo account first to familiarize
                    yourself with the system.
                  </p>
                </div>

                <div className="border-b border-surface-higher pb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    What markets does StratEngine support?
                  </h3>
                  <p className="text-text-primary">
                    StratEngine is specifically designed and optimized for
                    NASDAQ futures (NQ and MNQ). It focuses on these markets to
                    provide the highest performance and accuracy.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    How do I update StratEngine?
                  </h3>
                  <p className="text-text-primary">
                    Updates are automatically delivered through NinjaTrader's
                    addon manager. You'll receive notifications when new
                    versions are available.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Still need help?
              </h3>
              <p className="text-text-primary mb-6">
                Our support team is available {contacts.support.hours}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={contacts.social.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Open Discord Ticket
                </a>
                <a 
                  href={`mailto:${contacts.support.email}`}
                  className="btn-secondary"
                >
                  Email Support Team
                </a>
              </div>
            </div>
          </div>
        </main>
      <Footer />
    </div>
  );
}
