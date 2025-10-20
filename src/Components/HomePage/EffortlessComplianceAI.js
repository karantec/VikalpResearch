import React from "react";
import { Sparkles } from "lucide-react";

export default function ComplianceSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4a0e0e] via-[#2d0a0a] to-[#1a0505] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Effortless Compliance Backed by Smart AI
          </h1>
          <p className="text-white text-lg">
            Our AI-powered tools makes Compliance simple, swift, and seamless
            for all your business needs.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Left Column - Business Name & Document Generator */}
          <div className="space-y-4">
            {/* Business Name Generator */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 relative aspect-square flex flex-col justify-between">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <Sparkles className="w-6 h-6 text-amber-400 mb-3" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Business Name
                    <br />
                    Generator
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Find the perfect MCA-compliant name for your business in
                    just a click.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://vakilsearch.com/_next/image?url=https%3A%2F%2Fassets.vakilsearch.com%2Fic-zen-search.png&w=640&q=75"
                    alt="Business Name Generator"
                    className="w-96 rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Document Generator */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 relative aspect-square flex flex-col justify-between">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <Sparkles className="w-6 h-6 text-amber-400 mb-3" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Document
                    <br />
                    Generator
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Create expert-vetted legal documents instantly tailored to
                    your needs, no legal jargon, no delays.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://vakilsearch.com/_next/image?url=https%3A%2F%2Fassets.vakilsearch.com%2Fic-zen-doc.png&w=640&q=75"
                    alt="Document Generator"
                    className="w-96 rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Zenius AI */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 h-full flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md mb-2">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span className="font-semibold text-gray-900 text-sm">
                  Zenius Ai
                </span>
              </div>

              <div className="mb-2">
                <p className="text-xs text-gray-600 mb-1">
                  How to claim GST input credit?
                </p>
                <p className="text-xs text-gray-600 mb-1">
                  Penalty for late ITR filing?
                </p>
                <p className="text-xs text-gray-600 mb-0">
                  How to file GST returns online?
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="https://vakilsearch.com/_next/image?url=https%3A%2F%2Fassets.vakilsearch.com%2Fic-zen-man.png&w=384&q=75"
                alt="Zenius AI Assistant"
                className="w-96 mb-1"
              />

              <h3 className="text-lg font-bold text-gray-900 text-center leading-tight mb-1">
                Not sure where to begin with your
                <br />
                legal, tax, or compliance journey?
              </h3>

              <p className="text-gray-600 text-xs text-center leading-snug mb-2">
                Zenius is your AI-powered legal assistant here to guide you
                through
                <br />
                every step of your journey.
              </p>

              <div className="inline-flex items-center gap-1 bg-white rounded-full px-4 py-1.5 shadow-md border border-cyan-400">
                <span className="font-semibold text-gray-900 text-[10px] leading-tight text-center">
                  COMING
                  <br />
                  SOON
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
