import PageLayout from "@/components/layout/PageLayout";
import { Card } from "@/components/ui/Card";
import contacts from "../../config/contacts.json";
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { DiscordIcon } from '@/components/icons/DiscordIcon';

export default function ContactPage() {
  const socialLinks = [
    {
      name: "Phaedos X",
      handle: "@PhaedosTrades",
      url: contacts.social.twitter.personal.url,
      bgColor: "bg-dark-primary",
      hoverBg: "group-hover:bg-primary/20",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Discord",
      handle: "Community Chat",
      url: contacts.social.discord,
      bgColor: "bg-secondary/20",
      hoverBg: "group-hover:bg-secondary/30",
      iconColor: "text-secondary",
      icon: (
        <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M16.942 4.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-8.662zM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      handle: "Tutorials & Demos",
      url: contacts.social.youtube,
      bgColor: "bg-error/20",
      hoverBg: "group-hover:bg-error/30",
      iconColor: "text-error",
      icon: (
        <svg className="w-6 h-6 text-error" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      handle: "@NINJASTRAT",
      url: contacts.social.instagram,
      bgColor: "bg-bright-pink/20",
      hoverBg: "group-hover:bg-bright-pink/30",
      iconColor: "text-bright-pink",
      icon: (
        <svg className="w-6 h-6 text-bright-pink" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 0C7.284 0 6.944.012 5.877.06 4.814.107 4.086.277 3.45.525a4.902 4.902 0 00-1.772 1.153A4.902 4.902 0 00.525 3.45C.277 4.086.107 4.814.06 5.877.012 6.944 0 7.284 0 10s.012 3.056.06 4.123c.047 1.063.217 1.791.465 2.427a4.902 4.902 0 001.153 1.772 4.902 4.902 0 001.772 1.153c.636.248 1.364.418 2.427.465C6.944 19.988 7.284 20 10 20s3.056-.012 4.123-.06c1.063-.047 1.791-.217 2.427-.465a4.902 4.902 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.248-.636.418-1.364.465-2.427C19.988 13.056 20 12.716 20 10s-.012-3.056-.06-4.123c-.047-1.063-.217-1.791-.465-2.427a4.902 4.902 0 00-1.153-1.772A4.902 4.902 0 0016.55.525C15.914.277 15.186.107 14.123.06 13.056.012 12.716 0 10 0zm0 1.802c2.67 0 2.987.01 4.042.059.976.045 1.505.207 1.858.344.467.182.8.399 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.04 0 2.672-.01 2.988-.058 4.042-.045.976-.207 1.505-.344 1.858-.182.466-.399.8-.748 1.15-.35.35-.683.566-1.15.748-.353.137-.882.3-1.857.344-1.055.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344a3.097 3.097 0 01-1.15-.748 3.098 3.098 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.182-.466.399-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.857-.344C7.014 1.812 7.33 1.802 10 1.802zM10 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zM16.538 4.662a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      handle: "@ninjastrat",
      url: contacts.social.tiktok,
      bgColor: "bg-dark-primary",
      hoverBg: "group-hover:bg-primary/20",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.5 9.1C8.24 9.1 9.7 7.6 9.7 5.9V0h2.4c0 .4.1.8.2 1.2.2.8.6 1.5 1.2 2 .6.5 1.4.8 2.2.8v2.4c-.8 0-1.5-.2-2.2-.5-.4-.2-.8-.4-1.1-.7v4.7c0 2.3-1.9 4.2-4.2 4.2S3.9 12.2 3.9 9.9s1.9-4.2 4.2-4.2c.4 0 .8.1 1.2.2v2.5c-.4-.2-.8-.3-1.2-.3-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4 2.4-1.1 2.4-2.4V0h2.4v5.9c0 .4-.1.8-.2 1.2-.2.8-.6 1.5-1.2 2-.6.5-1.4.8-2.2.8v2.4c.8 0 1.5-.2 2.2-.5.4-.2.8-.4 1.1-.7v4.7c0 2.3-1.9 4.2-4.2 4.2s-4.2-1.9-4.2-4.2 1.9-4.2 4.2-4.2z" />
        </svg>
      ),
    },
    {
      name: "Company GitHub",
      handle: "NinjaStrat",
      url: contacts.social.github.company.url,
      bgColor: "bg-muted-blue/20",
      hoverBg: "group-hover:bg-muted-blue/30",
      iconColor: "text-light-lavender",
      icon: (
        <svg className="w-6 h-6 text-light-lavender" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "Personal GitHub",
      handle: "spencerduran",
      url: contacts.social.github.personal.url,
      bgColor: "bg-muted-blue/20",
      hoverBg: "group-hover:bg-muted-blue/30",
      iconColor: "text-light-lavender",
      icon: (
        <svg className="w-6 h-6 text-light-lavender" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "Ninjastrat X",
      handle: "@TheNinjaStrat",
      url: contacts.social.twitter.company.url,
      bgColor: "bg-dark-primary",
      hoverBg: "group-hover:bg-primary/20",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto">
        {/* Primary Contact Section - Centered */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <Card className="p-8">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <DiscordIcon className="w-10 h-10 text-secondary" />
            </div>
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Contact Us
            </h2>
            <p className="text-text-primary text-lg mb-6">
              Have questions about StratEngine? Need technical support?
              We're here to help.
            </p>

            <div className="mb-8">
              <a
                href={contacts.social.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2 text-lg px-8 py-4"
              >
                <DiscordIcon className="w-5 h-5" />
                <span>Join Discord Community</span>
              </a>
              <p className="text-text-muted mt-2">Real-time chat with our team and community</p>
            </div>

            <div className="border-t border-surface-elevated pt-6">
              <p className="text-text-secondary mb-3">Or reach us via email:</p>
              <a
                href={`mailto:${contacts.support.email}`}
                className="text-lg font-medium text-primary hover:text-primary-hover transition-colors"
              >
                {contacts.support.email}
              </a>
              <p className="text-text-muted text-sm mt-2">
                Available {contacts.support.hours} • Response within 24 hours
              </p>
            </div>
          </Card>
        </div>

        {/* Connect With Us Section - Centered */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="section-header">Connect With Us</h2>
            <p className="text-text-primary">
              Join our community and stay updated with the latest news,
              tips, and discussions about StratEngine.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="flex flex-col items-center p-6 bg-surface rounded-lg hover:bg-surface-elevated border border-primary/10 hover:border-primary/30 transition-all duration-200 group"
              >
                <div className={`w-12 h-12 ${link.bgColor} rounded-full flex items-center justify-center mb-3 ${link.hoverBg} transition-colors`}>
                  {link.icon}
                </div>
                <h3 className="font-semibold text-text-primary mb-1">
                  {link.name}
                </h3>
                <p className="text-sm text-text-muted text-center">
                  {link.handle}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}