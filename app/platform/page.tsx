
import Link from "next/link";
import {
  ArrowRight,
  Database,
  Cpu,
  BarChart,
  Layers
} from "lucide-react";
import { Navbar } from "@/src/components/layout/navbar";
import { Button } from "@/src/components/ui/button";
import { Footer } from "@/src/components/layout/footer";

const AUDIT_PIPELINE = [
  {
    title: "Input Assembly",
    desc: "Crawl, API data, brand signals",
    icon: Database
  },
  {
    title: "Context Pack",
    desc: "Unified brand intelligence",
    icon: Cpu
  },
  {
    title: "7 Modules",
    desc: "Deep multi-dimensional analysis",
    icon: BarChart
  },
  {
    title: "Outputs",
    desc: "Dashboard, reports, API, alerts",
    icon: Layers
  }
];

const DATA_SOURCES = [
  { title: "Website Crawler", desc: "Full-site crawl and content extraction" },
  { title: "Search Console API", desc: "Google Search performance data" },
  { title: "AI Response Monitor", desc: "Real-time LLM response tracking" },
  { title: "Competitor Tracker", desc: "Automated competitor monitoring" },
  { title: "Brand Mention Listener", desc: "Social and web mention aggregation" }
];

const AUDIT_MODULES = [
  { title: "AI Visibility", desc: "Track and optimize how your brand appears across ChatGPT, Gemini, Perplexity, and other AI search interfaces." },
  { title: "Trust & E-E-A-T", desc: "Strengthen Experience, Expertise, Authoritativeness, and Trustworthiness signals that AI systems prioritize." },
  { title: "Keyword Coverage", desc: "Identify and fill content gaps to dominate non-branded queries in your market." },
  { title: "Content Quality", desc: "Measure depth, freshness, and originality to ensure your content meets AI-era standards." },
  { title: "Technical SEO", desc: "Audit crawlability, performance, and technical elements that affect AI discoverability." },
  { title: "Competitive Intelligence", desc: "Monitor competitor AI visibility and strategies to identify opportunities." },
  { title: "Brand Perception", desc: "Track how AI systems describe and recommend your brand in conversations." }
];

export default function PlatformPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-100 bg-[#020617] selection:bg-[#C4A496]/30 selection:text-[#C4A496] overflow-x-hidden">
      {/* Liquid Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#C4A496]/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main className="flex-1 py-20 pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">The Kasparro Platform</h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                A complete AI-SEO intelligence system that transforms raw data into actionable insights.
              </p>
            </div>

            {/* Audit Pipeline Section */}
            <section className="mb-24">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Audit Pipeline</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {AUDIT_PIPELINE.map((step, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 flex flex-col h-full relative group hover:bg-white/10 transition-all duration-300">
                    <div className="w-10 h-10 bg-[#C4A496]/20 rounded-lg flex items-center justify-center mb-4 text-[#C4A496]">
                      <step.icon size={20} />
                    </div>
                    <h3 className="font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-slate-400">{step.desc}</p>

                    {/* Connector Arrow (Desktop only, except last item) */}
                    {idx < AUDIT_PIPELINE.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 text-[#C4A496]/50">
                        <ArrowRight size={20} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Data Consumption Section */}
            <section className="mb-24">
              <h2 className="text-2xl font-bold text-white mb-8">What Data We Consume</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {DATA_SOURCES.map((source, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                    <h3 className="font-semibold text-white mb-2">{source.title}</h3>
                    <p className="text-sm text-slate-400">{source.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Audit Modules Section */}
            <section className="mb-20">
              <h2 className="text-2xl font-bold text-white mb-8">Audit Modules</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {AUDIT_MODULES.map((module, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-[#C4A496]/50 transition-colors group">
                    <h3 className="font-semibold text-white text-lg mb-2 group-hover:text-[#C4A496] transition-colors">{module.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{module.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="text-center">
              <Link href="/app/audit">
                <Button size="lg" className="bg-[#C4A496] hover:bg-[#A88B7D] text-white border-0 shadow-[0_0_20px_rgba(196,164,150,0.3)] h-12 px-8 font-semibold rounded-xl transition-all hover:scale-105">
                  See It In Action <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
