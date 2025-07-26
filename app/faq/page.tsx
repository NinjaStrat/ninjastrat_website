import PageLayout from '@/components/layout/PageLayout';
import { FAQCard } from '@/components/ui/FAQCard';

export default function FAQPage() {
  const faqs = [
    {
      question: "What is StratEngine?",
      answer: "StratEngine is NinjaStrat's proprietary trading algorithm designed specifically for NASDAQ futures (NQ/MNQ). It uses advanced market structure analysis, volume patterns, and moving averages to identify high-probability trading opportunities with automated entry and exit management.",
      accentColor: "border-primary"
    },
    {
      question: "How does StratEngine work?",
      answer: "StratEngine analyzes real-time market data to identify optimal entry points by waiting for price to come to predetermined levels rather than chasing the market. It incorporates dynamic risk management, news event protection, and chop detection to maximize profitability while minimizing drawdown.",
      accentColor: "border-sky-blue"
    },
    {
      question: "What platforms does StratEngine support?",
      answer: "StratEngine is currently available as a NinjaTrader 8 addon. It requires NinjaTrader 8.0 or higher and is compatible with Windows 10/11 (64-bit). We recommend having at least 8GB of RAM for optimal performance.",
      accentColor: "border-success"
    },
    {
      question: "Can I use StratEngine with my existing broker?",
      answer: "StratEngine works with any broker that's supported by NinjaTrader 8. This includes most major futures brokers. You'll need to have your broker account connected to NinjaTrader for StratEngine to place trades automatically.",
      accentColor: "border-warning"
    },
    {
      question: "What is the minimum account size required?",
      answer: "We recommend a minimum account size of $10,000 for NQ trading and $2,500 for MNQ trading. However, you can start testing with smaller amounts or demo accounts to familiarize yourself with the system before scaling up.",
      accentColor: "border-secondary"
    },
    {
      question: "Does StratEngine guarantee profits?",
      answer: "No trading system can guarantee profits. While StratEngine is designed to identify high-probability opportunities and manage risk effectively, all trading involves risk and potential for loss. Past performance does not guarantee future results. Only trade with risk capital you can afford to lose.",
      accentColor: "border-error"
    },
    {
      question: "How often does StratEngine trade?",
      answer: "StratEngine's trading frequency depends on market conditions. It may execute several trades per day during volatile periods or remain inactive during choppy, sideways markets. The algorithm prioritizes quality opportunities over quantity to maintain optimal risk-reward ratios.",
      accentColor: "border-light-purple"
    },
    {
      question: "Can I customize StratEngine's settings?",
      answer: "Yes, StratEngine offers several customizable parameters including position size, risk tolerance, and trading hours. However, we recommend using the default settings initially, as they have been optimized through extensive backtesting and live trading.",
      accentColor: "border-bright-pink"
    },
    {
      question: "What kind of support is available?",
      answer: "NinjaStrat provides comprehensive support including email assistance, detailed documentation, video tutorials, and a knowledge base. Our support team is available Monday-Friday, 9 AM - 5 PM EST.",
      accentColor: "border-teal"
    },
    {
      question: "How do I get started with StratEngine?",
      answer: "To get started: 1) Ensure you have NinjaTrader 8 installed, 2) Download StratEngine from our Downloads page, 3) Follow the installation guide, 4) Configure your broker connection, 5) Start with a demo account to familiarize yourself with the system, 6) Contact our support team if you need assistance.",
      accentColor: "border-orange"
    }
  ];

  return (
    <PageLayout>
      <h1 className="page-title">Frequently Asked Questions</h1>
      <div className="max-w-4xl mx-auto">
        <p className="page-subtitle">
          Find answers to common questions about NinjaStrat's StratEngine.
        </p>
        
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <FAQCard 
              key={index}
              question={faq.question}
              answer={faq.answer}
              accentColor={faq.accentColor}
            />
          ))}
        </div>

        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Still have questions?</h3>
          <p className="text-text-primary mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Contact Support
            </button>
            <button className="bg-surface-higher hover:bg-surface-higher/80 text-text-primary px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}