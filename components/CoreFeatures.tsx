import Image from "next/image";
import { getImagePath } from "@/lib/utils";
import { 
  ChartBarIcon,
  CursorArrowRaysIcon,
  ArrowPathIcon,
  CalculatorIcon,
  ArrowTrendingUpIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/solid';

export default function CoreFeatures() {
  const features = [
    {
      title: "STRATENGINE",
      subtitle: "The Complete Suite",
      description:
        "All #TheStrat patterns (1, 2U, 2D, 3), Failed 2s modes, 3→2 setups, and broadening formations. Our most comprehensive pattern recognition system.",
      icon: ChartBarIcon,
      gradient: "from-primary to-sky-blue",
      gif: "giphy (1).gif",
    },
    {
      title: "Sniper",
      subtitle: "Perfect Alignment",
      description:
        "Waits for multiple timeframes to align before entry. Configurable HTF requirements with optional momentum pattern confirmation.",
      icon: CursorArrowRaysIcon,
      gradient: "from-secondary to-light-purple",
      gif: "giphy (2).gif",
    },
    {
      title: "Failed 2s",
      subtitle: "Reversal Specialist",
      description:
        "Focuses exclusively on 2-going-3 reversal patterns with open cross detection. Includes percentage-based previous candle targets.",
      icon: ArrowPathIcon,
      gradient: "from-warning to-orange",
      gif: "giphy (3).gif",
    },
    {
      title: "FibStrike",
      subtitle: "Structure + Fibonacci",
      description:
        "Break of Structure (BOS) detection with Fibonacci retracement levels. Independently configurable long/short settings.",
      icon: CalculatorIcon,
      gradient: "from-success to-bright-green",
      gif: "giphy (4).gif",
    },
    {
      title: "TapsORBs",
      subtitle: "Range Breakouts",
      description:
        "Prior-day and current-day opening range breakout strategies. Perfect for capturing morning momentum with time-based entries.",
      icon: ArrowTrendingUpIcon,
      gradient: "from-teal to-light-teal",
      gif: "giphy (5).gif",
    },
    {
      title: "StrongClose",
      subtitle: "Coming Soon",
      description:
        "Beta strategy focusing on strong close patterns with return-to-open setups. Early results showing promise.",
      icon: RocketLaunchIcon,
      gradient: "from-bright-pink to-magenta",
      gif: "giphy (6).gif",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-surface to-background-secondary">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Trading Style
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Each bot specializes in finding trades differently, while maintaining our professional standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-8 group hover:scale-105 transition-all duration-300 hover:glow-primary"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-sm text-primary mb-4">{feature.subtitle}</p>

              <p className="text-text-secondary leading-relaxed text-sm">
                {feature.description}
              </p>

              {/* Demo GIF */}
              <div className="mt-6 bg-surface rounded-lg overflow-hidden border border-surface-elevated group-hover:border-primary/50 transition-colors duration-300">
                <div className="relative aspect-video">
                  <Image
                    src={getImagePath(`/images/${feature.gif}`)}
                    alt={`${feature.title} Demo`}
                    fill
                    className="object-cover"
                    unoptimized // Important for GIFs
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="card-elevated p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Start Trading?
            </h3>
            <p className="text-text-secondary mb-6">
              Get lifetime access to all current and future NinjaStrat bots with our professional framework
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/pricing" className="btn-primary glow-primary">
                View Pricing
              </a>
              <a href="/support" className="btn-secondary">Get Support</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
