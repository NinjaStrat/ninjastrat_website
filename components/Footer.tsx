import contacts from '../config/contacts.json';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-surface-elevated">
      <div className="container mx-auto px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-xl text-background">
                  N
                </div>
                <span className="text-xl font-bold text-text-primary">
                  NinjaStrat
                </span>
              </div>
              <p className="text-text-muted mb-4 leading-relaxed">
                Revolutionizing futures trading with our proprietary StratEngine
                algorithm. Precision, automation, and consistent results.
              </p>
              <div className="flex space-x-4">
                <a
                  href={contacts.social.twitter.company.url}
                  className="text-text-muted hover:text-primary transition-colors duration-200"
                >
                  <span className="sr-only">X</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={contacts.social.discord}
                  className="text-text-muted hover:text-primary transition-colors duration-200"
                >
                  <span className="sr-only">Discord</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.942 4.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-8.662zM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045z"/>
                  </svg>
                </a>
                <a
                  href={contacts.social.github.company.url}
                  className="text-text-muted hover:text-primary transition-colors duration-200"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href={contacts.social.linkedin}
                  className="text-text-muted hover:text-primary transition-colors duration-200"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href={contacts.social.youtube}
                  className="text-text-muted hover:text-primary transition-colors duration-200"
                >
                  <span className="sr-only">YouTube</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/pricing"
                    className="text-text-muted hover:text-primary transition-colors duration-200"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/downloads"
                    className="text-text-muted hover:text-primary transition-colors duration-200"
                  >
                    Downloads
                  </a>
                </li>
                <li>
                  <a
                    href="/support"
                    className="text-text-muted hover:text-primary transition-colors duration-200"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="text-text-muted hover:text-primary transition-colors duration-200"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/ninjatrader"
                    className="text-text-muted hover:text-primary transition-colors duration-200"
                  >
                    NinjaTrader
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-text-muted hover:text-primary transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-text-muted hover:text-primary transition-colors duration-200"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Contact
              </h3>
              <div className="space-y-3 text-text-muted">
                <p>{contacts.support.email}</p>
                <p>{contacts.support.hours}</p>
                <button className="btn-primary mt-4">Get Started Today</button>
              </div>
            </div>
          </div>

          {/* Risk Disclosure */}
          <div className="border-t border-surface-elevated pt-8">
            <div className="card p-6">
              <div className="text-sm text-text-muted leading-relaxed space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-warning mb-3">
                    Risk Disclosure:
                  </h4>
                  <p>
                    Futures and forex trading contains substantial risk and is not for every investor. An investor could potentially lose all or more than the initial investment. Risk capital is money that can be lost without jeopardizing ones' financial security or life style. Only risk capital should be used for trading and only those with sufficient risk capital should consider trading. Past performance is not necessarily indicative of future results.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-warning mb-3">
                    Hypothetical Performance Disclosure:
                  </h4>
                  <p>
                    Hypothetical performance results have many inherent limitations, some of which are described below. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown; in fact, there are frequently sharp differences between hypothetical performance results and the actual results subsequently achieved by any particular trading program. One of the limitations of hypothetical performance results is that they are generally prepared with the benefit of hindsight. In addition, hypothetical trading does not involve financial risk, and no hypothetical trading record can completely account for the impact of financial risk of actual trading. for example, the ability to withstand losses or to adhere to a particular trading program in spite of trading losses are material points which can also adversely affect actual trading results. There are numerous other factors related to the markets in general or to the implementation of any specific trading program which cannot be fully accounted for in the preparation of hypothetical performance results and all which can adversely affect trading results.
                  </p>
                </div>

                <div className="text-center">
                  <a href="#" className="text-primary hover:text-primary-hover underline">
                    Full Risk Disclosure
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-surface-elevated pt-8 mt-8 text-center">
            <p className="text-text-muted text-sm">
              Copyright © 2024 Ninja Strat - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
