import React from "react";
import { Sparkles } from "lucide-react";

const fallingMessages = [
  "How to file GST return?",
  "What is GST turnover?",
  "Is GST mandatory?",
  "GST compliance guide",
  "Business registration steps",
  "Tax filing simplified",
  "Legal documents made easy",
  "Domain name ideas",
];

export default function SmartIdeasSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-red-950 via-red-900 to-red-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Smart Ideas, Powered by Cube AI
          </h2>
          <p className="text-gray-200 text-base md:text-lg max-w-3xl mx-auto">
            From finding the perfect domain to generating unique business names
            — let AI do the heavy lifting for your brand.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="space-y-8">
            {/* Business Name Generator */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-gray-200 hover:border-red-500">
              <div className="mb-6">
                <div className="inline-block bg-red-50 rounded-lg p-3 mb-4">
                  <Sparkles className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Business Name Generator
                </h3>
                <p className="text-gray-600 text-sm md:text-base max-w-sm">
                  Find the perfect, MCA-compliant name for your business in just
                  a click.
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <img
                  src="https://vakilsearch.com/_next/image?url=https%3A%2F%2Fassets.vakilsearch.com%2Fic-zen-search.png&w=640&q=75"
                  alt="Business Name Generator"
                  className="w-64 md:w-80 rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Document Generator */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
              <div className="mb-6">
                <div className="inline-block bg-red-50 rounded-lg p-3 mb-4">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Document Generator
                </h3>
                <p className="text-gray-600 text-sm md:text-base max-w-sm">
                  Create expert-vetted legal documents instantly, tailored to
                  your needs — no legal jargon, no delays.
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <img
                  src="https://vakilsearch.com/_next/image?url=https%3A%2F%2Fassets.vakilsearch.com%2Fic-zen-doc.png&w=640&q=75"
                  alt="Document Generator"
                  className="w-64 md:w-80 rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Cube AI */}
          <div className="bg-gradient-to-br from-red-900 to-red-950 rounded-2xl shadow-md p-8 flex flex-col items-center justify-center relative overflow-hidden border-2 border-red-700">
            {/* Cube AI Badge */}
            <div className="inline-flex items-center gap-2 bg-white border-2 border-red-300 rounded-full px-5 py-2 shadow-md mb-6 relative z-20">
              <Sparkles className="w-5 h-5 text-red-500" />
              <span className="font-bold text-gray-800 text-lg">Cube Ai</span>
            </div>

            {/* Falling Messages */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              {Array.from({ length: 15 }).map((_, index) => (
                <div
                  key={index}
                  className="absolute text-xs md:text-sm px-3 py-1.5 bg-white/80 text-gray-700 rounded-full shadow-sm border border-gray-200 animate-fall-linear"
                  style={{
                    left: `${Math.random() * 80}%`,
                    top: `${Math.random() * 100}%`,
                    animationDuration: `${4 + Math.random() * 5}s`,
                    animationDelay: `${Math.random() * 3}s`,
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

            {/* Character Illustration */}
            <img
              src="https://vakilsearch.com/_next/image?url=https%3A%2F%2Fassets.vakilsearch.com%2Fic-zen-man.png&w=384&q=75"
              alt="Cube AI Assistant"
              className="w-48 md:w-64 mb-6 relative z-10"
            />

            <h3 className="text-lg md:text-xl font-bold text-white text-center mb-3 relative z-10 max-w-md">
              Not sure where to begin with your legal, tax, or compliance
              journey?
            </h3>
            <p className="text-gray-200 text-sm text-center max-w-sm mb-6 relative z-10">
              Zenius is your AI-powered legal assistant here to guide you
              through every step of your journey.
            </p>
            <div className="bg-white border-2 border-red-400 rounded-full px-6 py-2.5 text-sm font-bold shadow-md relative z-10 text-red-900">
              COMING SOON
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Animations */}
      <style>{`
        @keyframes fall-linear {
          0% { transform: translateY(-20%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(120%); opacity: 0; }
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
