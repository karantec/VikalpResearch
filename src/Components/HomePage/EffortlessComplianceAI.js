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
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-3">
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
            <div className="bg-white rounded-2xl shadow-md p-8 pt-8 pb-0 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-gray-200 hover:border-red-500" style={{ maxHeight: 600 }}>
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-normal text-gray-900 mb-3">
                  Business Name Generator
                </h3>
                <p className="text-gray-600 text-sm md:text-base max-w-sm">
                  Find the perfect, MCA-compliant name for your business in just
                  a click.
                </p>
              </div>
              <div className="flex flex-grow items-end mt-0">
                <img
                  src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1761544103/cubemedia/AI_name_rlnnec.svg"
                  alt="Business Name Generator"
                  className="w-full"
                  style={{ objectFit: 'cover'}}
                />
              </div>
            </div>

            {/* Document Generator */}
            <div className="bg-white rounded-2xl shadow-md p-8 pt-8 pb-0 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-2 border-gray-200 hover:border-red-500" style={{ maxHeight: 600, overflow: 'hidden' }}>
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-normal text-gray-900 mb-3">
                  Document Generator
                </h3>
                <p className="text-gray-600 text-sm md:text-base max-w-sm">
                  Create expert-vetted legal documents instantly, tailored to
                  your needs — no legal jargon, no delays.
                </p>
              </div>
              <div className="flex flex-grow items-end mt-0">
                <img
                  src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1761544102/cubemedia/AI_Document_brqbn8.webp"
                  alt="Document Generator"
                  className="w-full"
                  style={{ objectFit: 'contain' }}
                />  
              </div>
            </div>
          </div>

          {/* Right Side - Cube AI */}
          <div className="bg-gradient-to-br from-red-900 to-red-950 rounded-2xl shadow-md p-8 flex flex-col items-center justify-center relative overflow-hidden border-2 border-red-700">
            {/* Cube AI Badge */}
            <img
              src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1761544103/cubemedia/AI_Line_jr8op2.webp"
              alt="AI Line Background"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />

            {/* Improved Falling Messages (Slower & better edge handling) */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
              {fallingMessages.map((msg, i) => {
                // To avoid clutter/collision, alternate horizontal % and vertical start offset per message
                const minPercent = 5, maxPercent = 95;
                // Space them more evenly by adding extra gap so they're not too close
                const total = fallingMessages.length;
                const spacing = (maxPercent - minPercent) / (total > 1 ? total - 1 : 1);

                // Add a small random/sinusoidal offset for realistic spread
                const jitter = 3 * Math.sin(i * 1.7); // up to ±3%
                const leftPercent = minPercent + spacing * i + jitter;

                // For vertical staggering: alternate additional top offset for each message
                // So they start falling not all from exactly the same line
                const baseTop = -50;
                const vertStagger = (i % 2 === 0 ? 0 : 26 * (i % 3)); // 0px, 26px, 52px, repeat
                const top = baseTop + vertStagger;

                // Spread out the animation duration and delay to avoid overlap
                const minDuration = 25, maxDuration = 25;
                const minDelay = 0, maxDelay = 2.5 + i * 0.35; // linearly increases with i

                // Make duration slightly vary with index to prevent continuous overlaps
                const animDuration = minDuration + ((i % 2 === 0 ? 1 : -1) * 0.7 * i) + (Math.sin(i) * 1.6);
                const animDelay = minDelay + ((i % 2 === 0 ? 0.6 : 0.2) * i) + (Math.abs(Math.cos(i * 1.2)) * 0.8);

                // Edge detection for cut end
                let borderRadiusClass = "rounded-full";
                let extraStyle = {};
                if (i === 0) {
                  borderRadiusClass = "rounded-r-full";
                  extraStyle = { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 };
                }
                if (i === fallingMessages.length - 1) {
                  borderRadiusClass = "rounded-l-full";
                  extraStyle = { borderTopRightRadius: 0, borderBottomRightRadius: 0 };
                }

                return (
                  <div
                    key={i}
                    className={`absolute text-xs md:text-sm px-3 py-1.5 bg-white/90 text-gray-700 shadow-sm border border-gray-200 animate-fall-linear ${borderRadiusClass}`}
                    style={{
                      left: `${leftPercent}%`,
                      top: `${top}px`,
                      animationDuration: `${animDuration}s`,
                      animationDelay: `${animDelay}s`,
                      ...extraStyle,
                      maxWidth: "170px",
                      minWidth: "80px",
                      // Prevent horizontal overflow at the edges
                      ...(i === 0 ? { transform: "translateX(-5%)" } : {}),
                      ...(i === fallingMessages.length - 1 ? { transform: "translateX(-95%)" } : {}),
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      zIndex: 2 + i, // subtle z-index stacking so later messages are behind for less clutter
                    }}
                  >
                    {msg}
                  </div>
                );
              })}
            </div>

            {/* Moved image to the middle */}
            <div className="flex flex-col items-center justify-center w-full">
              <div className="inline-flex items-center gap-2 bg-white border-2 border-red-300 rounded-lg px-5 py-2 shadow-md mb-4 mt-6 relative z-20">
                <Sparkles className="w-5 h-5 text-red-500" />
                <span className="font-bold text-gray-800 text-2xl ">Cube Ai</span>
              </div>
              <img
                src="https://vakilsearch.com/_next/image?url=https%3A%2F%2Fassets.vakilsearch.com%2Fic-zen-man.png&w=384&q=75"
                alt="Cube AI Assistant"
                className="w-96 md:w-128 mb-6 relative z-10"
              />
            </div>

            <h3 className="text-lg md:text-2xl font-normal text-white text-center mb-3 relative z-10 max-w-md">
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
          0% { transform: translateY(-60px); opacity: 0; }
          5% { opacity: 1; }
          70% { opacity: 0.9; }
          80% { opacity: 0.7; }
          90% { opacity: 0.6; }
          100% { transform: translateY(700px); opacity: 0; } /* fall full div height */
        }
        .animate-fall-linear {
          animation-name: fall-linear;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          /* Will be properly spaced with staggered delay/durations from JS */
        }
      `}</style>
    </section>
  );
}
