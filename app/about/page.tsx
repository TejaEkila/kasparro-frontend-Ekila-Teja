
import { Navbar } from "@/src/components/layout/navbar";
import { Footer } from "@/src/components/layout/footer";
import { Target, Lightbulb, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-100 bg-[#020617] selection:bg-[#C4A496]/30 selection:text-[#C4A496] overflow-x-hidden">
      {/* Liquid Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#C4A496]/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main className="flex-1 py-20">
          <div className="max-w-3xl mx-auto px-6">

            {/* Header */}
            <div className="mb-12 text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
                About Kasparro
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed font-light">
                Building intelligence for the AI-first search era.
              </p>
            </div>

            <div className="space-y-12">
              {/* Mission */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                    <Target className="text-[#C4A496]" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Mission</h2>
                </div>
                <p className="text-lg text-slate-400 leading-relaxed font-light pl-0 sm:pl-16">
                  To help brands win visibility in the age of AI-powered search. Traditional SEO tools weren&apos;t built for ChatGPT, Gemini, or Perplexity. We&apos;re building the intelligence layer that bridges this gap.
                </p>
              </div>

              {/* Philosophy */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                    <Lightbulb className="text-[#C4A496]" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Philosophy</h2>
                </div>
                <p className="text-lg text-slate-400 leading-relaxed font-light pl-0 sm:pl-16">
                  We believe in data-driven clarity over vanity metrics. Every insight we surface is actionable. Every recommendation is prioritized by impact. We build tools that respect engineers&apos; time and deliver real value to brands.
                </p>
              </div>

              {/* Vision */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                    <Rocket className="text-[#C4A496]" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Vision</h2>
                </div>
                <p className="text-lg text-slate-400 leading-relaxed font-light pl-0 sm:pl-16">
                  A future where every brand has real-time visibility into how AI systems perceive and recommend them. Where optimizing for AI search is as intuitive as traditional SEO once was—but far more powerful.
                </p>
              </div>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
