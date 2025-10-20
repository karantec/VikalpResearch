import React from "react";
import { Sparkles } from "lucide-react";

const fallingMessages = [
  "How to claim GST input credit?",
  "Penalty for late ITR filing?",
  "How to file GST returns online?",
  "MCA annual compliance checklist",
  "Startup legal documents made easy",
  "Filing GST returns simplified",
  "Corporate tax queries answered",
  "Labour law compliance guide",
  "Company registration made simple",
];

export default function ComplianceSection() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-3">
            Effortless Compliance Backed by Smart AI
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Our AI-powered tools make compliance simple, swift, and seamless for
            all your business needs.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="space-y-8">
            {/* Business Name Generator */}
            <div className="bg-[#f8faff] rounded-2xl shadow-sm p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Business Name Generator
                </h3>
                <p className="text-gray-600 text-sm max-w-sm mb-6">
                  Find the perfect, MCA-compliant name for your business in just
                  a click.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://vakilsearch.com/_next/image?url=https%3A%2F%2Fassets.vakilsearch.com%2Fic-zen-search.png&w=640&q=75"
                  alt="Business Name Generator"
                  className="w-64 md:w-80 rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Document Generator */}
            <div className="bg-[#f8faff] rounded-2xl shadow-sm p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Document Generator
                </h3>
                <p className="text-gray-600 text-sm max-w-sm mb-6">
                  Create expert-vetted legal documents instantly, tailored to
                  your needs — no legal jargon, no delays.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://vakilsearch.com/_next/image?url=https%3A%2F%2Fassets.vakilsearch.com%2Fic-zen-doc.png&w=640&q=75"
                  alt="Document Generator"
                  className="w-64 md:w-80 rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Zenius AI */}
          <div className="bg-[#f8faff] rounded-2xl shadow-sm p-8 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm mb-8 relative z-20">
              <Sparkles className="w-4 h-4 text-purple-500" />
            </div>
            <span className="px-4 py-2 text-2xl font-semibold text-gray-800 bg-white border border-blue-300 rounded-lg shadow-sm inline-flex items-center">
              <span className="mr-2 text-purple-500">✨</span> Zenius Ai
            </span>
            {/* Zenius AI Tag */} {/* Falling Messages */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              {Array.from({ length: 20 }).map((_, index) => (
                <div
                  key={index}
                  className="absolute text-xs md:text-sm px-3 py-1 bg-white/70 text-gray-600 rounded-full shadow animate-fall-linear"
                  style={{
                    left: `${Math.random() * 85}%`,
                    top: `${Math.random() * 100}%`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                  }}
                >
                  {
                    fallingMessages[
                      Math.floor(Math.random() * fallingMessages.length)
                    ]
                  }
                </div>
              ))}
            </div>
            <img
              src="https://vakilsearch.com/_next/image?url=https%3A%2F%2Fassets.vakilsearch.com%2Fic-zen-man.png&w=384&q=75"
              alt="Zenius AI Assistant"
              className="w-48 md:w-64 mt-24 mb-6 relative z-10"
            />
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 text-center mb-3 relative z-10">
              Not sure where to begin with your legal, tax, or compliance
              journey?
            </h3>
            <p className="text-gray-600 text-sm text-center max-w-xs mb-5 relative z-10">
              Zenius is your AI-powered legal assistant here to guide you
              through every step of your journey.
            </p>
            <div className="bg-white border border-gray-300 rounded-full px-5 py-2 text-sm font-semibold shadow relative z-10">
              COMING SOON
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Animations */}
      <style>{`
        @keyframes fall-linear {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-fall-linear {
          animation-name: fall-linear;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  );
}
