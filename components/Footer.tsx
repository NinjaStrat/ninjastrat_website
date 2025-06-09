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
                  href="#"
                  className="text-text-muted hover:text-primary transition-colors duration-200"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
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
                  href="#"
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
                <p>phaedostrades@gmail.com</p>
                <p>Monday-Friday, 9 AM - 5 PM EST</p>
                <button className="btn-primary mt-4">Get Started Today</button>
              </div>
            </div>
          </div>

          {/* Risk Disclosure */}
          <div className="border-t border-surface-elevated pt-8">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-warning mb-4">
                ⚠️ Risk Disclosure
              </h4>
              <div className="text-sm text-text-muted leading-relaxed space-y-3">
                <p>
                  <strong className="text-text-secondary">
                    COMMODITY FUTURES TRADING COMMISSION REQUIRED DISCLAIMER:
                  </strong>
                  Futures and forex trading contains substantial risk and is not
                  for every investor. An investor could potentially lose all or
                  more than the initial investment.
                </p>

                <p>
                  <strong className="text-text-secondary">
                    HYPOTHETICAL OR SIMULATED PERFORMANCE RESULTS:
                  </strong>
                  Hypothetical or simulated performance results have certain
                  limitations. Unlike an actual performance record, simulated
                  results do not represent actual trading. Also, since the
                  trades have not been executed, the results may have
                  under-or-over compensated for the impact, if any, of certain
                  market factors, such as lack of liquidity.
                </p>

                <p>
                  <strong className="text-text-secondary">
                    NO REPRESENTATION OF FUTURE RESULTS:
                  </strong>
                  Past performance is not necessarily indicative of future
                  results. No representation is being made that any account will
                  or is likely to achieve profits or losses similar to those
                  shown.
                </p>

                <p>
                  <strong className="text-text-secondary">RISK OF LOSS:</strong>
                  Trading futures and forex involves substantial risk of loss
                  and is not suitable for all investors. You should carefully
                  consider whether trading is suitable for you in light of your
                  circumstances, knowledge, and financial resources.
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-surface-elevated pt-8 mt-8 text-center">
            <p className="text-text-muted text-sm">
              © 2024 NinjaStrat. All rights reserved. StratEngine is a
              proprietary trading system.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
