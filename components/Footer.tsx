import Image from "next/image";
import { getImagePath } from "@/lib/utils";
import contacts from "../config/contacts.json";
import { XIcon } from "@/components/icons/XIcon";
import { DiscordIcon } from "@/components/icons/DiscordIcon";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-surface border-t border-surface-elevated">
      <div className="container mx-auto px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-10 h-10">
                  <Image
                    src={getImagePath("/images/NS_logo.png")}
                    alt="NinjaStrat Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-text-primary">
                  NinjaStrat
                </span>
              </div>
              <p className="text-text-muted mb-4 leading-relaxed">
                Professional trading algorithms and indicators built for
                NinjaTrader.
              </p>
              <div className="flex space-x-4">
                <a
                  href={contacts.social.twitter.company.url}
                  className="text-text-muted hover:text-primary transition-colors duration-200"
                >
                  <span className="sr-only">X</span>
                  <XIcon />
                </a>
                <a
                  href={contacts.social.discord}
                  className="text-text-muted hover:text-primary transition-colors duration-200"
                >
                  <span className="sr-only">Discord</span>
                  <DiscordIcon />
                </a>
                <a
                  href={contacts.social.github.company.url}
                  className="text-text-muted hover:text-primary transition-colors duration-200"
                >
                  <span className="sr-only">GitHub</span>
                  <GitHubIcon />
                </a>
                <a
                  href={contacts.social.linkedin}
                  className="text-text-muted hover:text-primary transition-colors duration-200"
                >
                  <span className="sr-only">LinkedIn</span>
                  <LinkedInIcon />
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
                  <h4 className="text-lg font-semibold text-text-primary mb-3">
                    Risk Disclosure:
                  </h4>
                  <p>
                    Futures and forex trading contains substantial risk and is
                    not for every investor. An investor could potentially lose
                    all or more than the initial investment. Risk capital is
                    money that can be lost without jeopardizing ones' financial
                    security or life style. Only risk capital should be used for
                    trading and only those with sufficient risk capital should
                    consider trading. Past performance is not necessarily
                    indicative of future results.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-3">
                    Hypothetical Performance Disclosure:
                  </h4>
                  <p>
                    Hypothetical performance results have many inherent
                    limitations, some of which are described below. No
                    representation is being made that any account will or is
                    likely to achieve profits or losses similar to those shown;
                    in fact, there are frequently sharp differences between
                    hypothetical performance results and the actual results
                    subsequently achieved by any particular trading program. One
                    of the limitations of hypothetical performance results is
                    that they are generally prepared with the benefit of
                    hindsight. In addition, hypothetical trading does not
                    involve financial risk, and no hypothetical trading record
                    can completely account for the impact of financial risk of
                    actual trading. for example, the ability to withstand losses
                    or to adhere to a particular trading program in spite of
                    trading losses are material points which can also adversely
                    affect actual trading results. There are numerous other
                    factors related to the markets in general or to the
                    implementation of any specific trading program which cannot
                    be fully accounted for in the preparation of hypothetical
                    performance results and all which can adversely affect
                    trading results.
                  </p>
                </div>

                <div className="text-center">
                  <a
                    href="#"
                    className="text-primary hover:text-primary-hover underline"
                  >
                    Full Risk Disclosure
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-surface-elevated pt-8 mt-8 text-center">
            <p className="text-text-muted text-sm">
              Copyright © {currentYear} Ninja Strat - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
