import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Target,
  Zap,
  TrendingUp,
  Eye,
  ShieldCheck,
  Search,
  FileText,
  Code,
  BarChart2,
  MessageCircle
} from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Footer } from "@/src/components/layout/footer";
import { Navbar } from "@/src/components/layout/navbar";
import { landingPageData as landingData } from "@/src/data/mockData";

// Map string icon names to Lucide components
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconMap: { [key: string]: any } = {
  Sparkles,
  Target,
  Zap,
  TrendingUp,
  Eye,
  ShieldCheck,
  Search,
  FileText,
  Code,
  BarChart2,
  MessageCircle,
  ArrowRight
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-100 bg-[#020617] selection:bg-[#C4A496]/30 selection:text-[#C4A496] overflow-x-hidden">
      {/* Liquid Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#C4A496]/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main className="flex-1">
          {/* Hero Section - Liquid Glass */}
          <section className="relative flex flex-col justify-center min-h-[calc(100vh-5rem)] pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 -mt-16">
              {/* Badge - Glass */}
              <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 backdrop-blur-md text-[#C4A496] px-5 py-2 rounded-full text-sm font-medium mb-8">
                <Sparkles size={15} className="text-[#C4A496]" />
                <span>{landingData.hero.badge.text}</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1] drop-shadow-2xl">
                {landingData.hero.title.start}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A496] to-white">{landingData.hero.title.highlight}</span>{" "}
                {landingData.hero.title.end}
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                {landingData.hero.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
                <Link href="/app/audit">
                  <Button className="bg-[#C4A496] hover:bg-[#A88B7D] text-white border-0 shadow-[0_0_20px_rgba(196,164,150,0.3)] h-12 px-8 text-base font-bold rounded-xl transition-all hover:scale-105">
                    {landingData.hero.cta.primary} <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Link href="/platform">
                  <Button variant="outline" className="bg-white/5 backdrop-blur-sm text-white border-white/10 hover:bg-white/10 h-12 px-8 text-base font-bold rounded-xl transition-all hover:scale-105">
                    {landingData.hero.cta.secondary}
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Why AI-SEO Section - Glass Cards */}
          <section className="py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                  {landingData.features.title}
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed font-light">
                  {landingData.features.subtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {landingData.features.cards.map((card, idx) => {
                  const Icon = IconMap[card.icon];
                  return (
                    <div key={idx} className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-white/10 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-[#C4A496]/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C4A496]/30 transition-colors">
                        <Icon className="text-[#C4A496]" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-sm font-light">
                        {card.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 7 Audit Modules Section - Dark Glass */}
          <section className="py-24 sm:py-32">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                  {landingData.modules.title}
                </h2>
                <p className="text-base text-slate-400 font-light">
                  {landingData.modules.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {landingData.modules.items.map((item, idx) => {
                  const Icon = IconMap[item.icon];
                  return (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl h-full flex flex-col items-start border border-white/5 hover:border-[#C4A496]/50 hover:bg-white/10 transition-all duration-300">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 text-[#C4A496]">
                        <Icon size={22} />
                      </div>
                      <h3 className="font-bold text-slate-100 text-lg mb-1">{item.title}</h3>
                      <p className="text-xs font-semibold text-[#C4A496] mb-3">{item.subtitle}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Bottom CTA Section - Glow */}
          <section className="py-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#C4A496]/10 to-transparent pointer-events-none" />
            <div className="max-w-4xl mx-auto px-4 relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                {landingData.cta_banner.title}
              </h2>
              <p className="text-base text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
                {landingData.cta_banner.description}
              </p>
              <Link href="/app/dashboard">
                <Button size="lg" className="bg-[#C4A496] hover:bg-[#A88B7D] text-white border-0 shadow-[0_0_30px_rgba(196,164,150,0.4)] h-12 px-8 text-base font-semibold rounded-xl transition-all hover:scale-105">
                  {landingData.cta_banner.button} <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
