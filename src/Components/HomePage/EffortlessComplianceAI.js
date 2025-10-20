import React from "react";
import { Sparkles } from "lucide-react";

export default function ComplianceSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4a0e0e] via-[#2d0a0a] to-[#1a0505] py-8 sm:py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 leading-tight">
            Effortless Compliance Backed by Smart AI
          </h1>
          <p className="text-white text-base sm:text-lg px-4">
            Our AI-powered tools makes Compliance simple, swift, and seamless
            for all your business needs.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 items-start">
          {/* Left Column - Business Name & Document Generator */}
          <div className="space-y-4 sm:space-y-6">
            {/* Business Name Generator */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative flex flex-col justify-between min-h-[400px] sm:min-h-[450px] lg:aspect-square">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 mb-2 sm:mb-3" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                    Business Name
                    <br />
                    Generator
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Find the perfect MCA-compliant name for your business in
                    just a click.
                  </p>
                </div>
                <div className="flex justify-center mt-4 sm:mt-6">
                  <img
                    src="https://vakilsearch.com/_next/image?url=https%3A%2F%2Fassets.vakilsearch.com%2Fic-zen-search.png&w=640&q=75"
                    alt="Business Name Generator"
                    className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[384px] rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Document Generator */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 relative flex flex-col justify-between min-h-[400px] sm:min-h-[450px] lg:aspect-square">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 mb-2 sm:mb-3" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                    Document
                    <br />
                    Generator
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Create expert-vetted legal documents instantly tailored to
                    your needs, no legal jargon, no delays.
                  </p>
                </div>
                <div className="flex justify-center mt-4 sm:mt-6">
                  <img
                    src="https://vakilsearch.com/_next/image?url=https%3A%2F%2Fassets.vakilsearch.com%2Fic-zen-doc.png&w=640&q=75"
                    alt="Document Generator"
                    className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[384px] rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Zenius AI */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col justify-between min-h-[400px] lg:h-full">
            <div>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-md mb-3 sm:mb-4">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" />
                <span className="font-semibold text-gray-900 text-xs sm:text-sm">
                  Zenius Ai
                </span>
              </div>

              <div className="mb-4 sm:mb-6 space-y-1 sm:space-y-2">
                <p className="text-xs sm:text-sm text-gray-600">
                  How to claim GST input credit?
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Penalty for late ITR filing?
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  How to file GST returns online?
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center mt-4 sm:mt-6">
              <img
                src="https://vakilsearch.com/_next/image?url=https%3A%2F%2Fassets.vakilsearch.com%2Fic-zen-man.png&w=384&q=75"
                alt="Zenius AI Assistant"
                className="w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] mb-3 sm:mb-4"
              />

              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 text-center leading-tight mb-2 sm:mb-3 px-2">
                Not sure where to begin with your
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                legal, tax, or compliance journey?
              </h3>

              <p className="text-gray-600 text-xs sm:text-sm text-center leading-snug mb-3 sm:mb-4 px-2 max-w-md">
                Zenius is your AI-powered legal assistant here to guide you
                through
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                every step of your journey.
              </p>

              <div className="inline-flex items-center gap-1.5 bg-white rounded-full px-4 sm:px-5 py-2 sm:py-2.5 shadow-md border border-cyan-400">
                <span className="font-semibold text-gray-900 text-xs sm:text-sm leading-tight text-center">
                  COMING SOON
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
