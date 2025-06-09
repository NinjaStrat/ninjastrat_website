import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <div className="flex-grow">
        <main className="container mx-auto px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">
            Contact Us
          </h1>
          <div className="max-w-6xl mx-auto">
            <p className="text-text-secondary mb-12 text-center text-lg">
              Get in touch with our team for support, sales inquiries, or
              general questions about StratEngine.
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Support</h3>
                      <p className="text-text-secondary mb-2">
                        phaedostrades@gmail.com
                      </p>
                      <p className="text-gray-500 text-sm">
                        Response time: Within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-xl">💬</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Live Chat</h3>
                      <p className="text-text-secondary mb-2">
                        Available on our website
                      </p>
                      <p className="text-gray-500 text-sm">
                        Monday-Friday, 9 AM - 5 PM EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-xl">💼</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Sales Inquiries</h3>
                      <p className="text-text-secondary mb-2">
                        sales@ninjastrat.com
                      </p>
                      <p className="text-gray-500 text-sm">
                        For pricing and licensing questions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-xl">🤝</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Partnership</h3>
                      <p className="text-text-secondary mb-2">
                        partners@ninjastrat.com
                      </p>
                      <p className="text-gray-500 text-sm">
                        For business partnerships and integrations
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-primary mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-text-secondary">
                    <p>
                      <span className="font-semibold">Monday - Friday:</span>{" "}
                      9:00 AM - 5:00 PM EST
                    </p>
                    <p>
                      <span className="font-semibold">Saturday - Sunday:</span>{" "}
                      Closed
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                      Email support is available 24/7. We respond to all emails
                      within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">
                  Send us a Message
                </h2>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="support">Technical Support</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">Partnership</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Please describe your inquiry in detail..."
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label
                      htmlFor="privacy"
                      className="ml-3 text-sm text-text-secondary"
                    >
                      I agree to the{" "}
                      <a href="#" className="text-primary hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and
                      <a href="#" className="text-primary hover:underline ml-1">
                        Terms of Service
                      </a>{" "}
                      *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast Response</h3>
                <p className="text-text-secondary text-sm">
                  We respond to all inquiries within 24 hours during business
                  days
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
                <p className="text-text-secondary text-sm">
                  Our team includes experienced traders and technical experts
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Secure Communication
                </h3>
                <p className="text-text-secondary text-sm">
                  All communications are encrypted and handled with strict
                  confidentiality
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
