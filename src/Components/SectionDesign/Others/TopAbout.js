import React from "react";

export default function HeroSection() {
  return (
    <div className="min-h-screen mt-12 bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-red-900 via-red-800 to-red-700 text-white overflow-hidden min-h-screen flex flex-col justify-between py-16">
        {/* Floating Images - Top Row */}
        <div className="container mx-auto px-4 relative z-20 animate-fade-in">
          <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
            {/* Image 1 - Animate from top left */}
            <div
              className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-110 hover:rotate-3 transition-all duration-500 border-4 border-white animate-float"
              style={{ animationDelay: "0s" }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400"
                alt="Team 1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 2 */}
            <div
              className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-110 hover:rotate-3 transition-all duration-500 border-4 border-white animate-float"
              style={{ animationDelay: "0.2s" }}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400"
                alt="Team 2"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 3 */}
            <div
              className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-110 hover:rotate-3 transition-all duration-500 border-4 border-white animate-float"
              style={{ animationDelay: "0.4s" }}
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400"
                alt="Team 3"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 4 */}
            <div
              className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-110 hover:rotate-3 transition-all duration-500 border-4 border-white animate-float"
              style={{ animationDelay: "0.6s" }}
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
                alt="Team 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mb-24 mt-14 mx-auto px-4 relative z-10 flex-grow flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-slide-up">
              Simplifying Legal, Tax &
              <br />
              Compliance
            </h1>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              for Growing Businesses
            </h2>

            <p
              className="text-base md:text-lg text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              At Zakir, we're on a mission to simplify the legal landscape for
              businesses and individuals. Come be part of a team that's
              redefining the future of business services in India.
            </p>

            <div
              className="flex justify-center items-center animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <button className="bg-transparent mt-5 border-2 border-white text-white px-10 py-3 rounded-lg font-semibold text-base hover:bg-white hover:text-red-700 transition-all duration-300 hover:scale-105 shadow-lg">
                Join us today!
              </button>
            </div>
          </div>
        </div>

        {/* Floating Images - Bottom Row */}
        <div className="container mx-auto  px-4 relative z-20 animate-fade-in">
          <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
            {/* Image 5 */}
            <div
              className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-110 hover:rotate-3 transition-all duration-500 border-4 border-white animate-float"
              style={{ animationDelay: "0.8s" }}
            >
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400"
                alt="Team 5"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 6 */}
            <div
              className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-110 hover:rotate-3 transition-all duration-500 border-4 border-white animate-float"
              style={{ animationDelay: "1s" }}
            >
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
                alt="Team 6"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 7 */}
            <div
              className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-110 hover:rotate-3 transition-all duration-500 border-4 border-white animate-float"
              style={{ animationDelay: "1.2s" }}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400"
                alt="Team 7"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image 8 */}
            <div
              className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-110 hover:rotate-3 transition-all duration-500 border-4 border-white animate-float"
              style={{ animationDelay: "1.4s" }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
                alt="Team 8"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Wave Shape at Bottom */}

        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes wave {
            0%, 100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(-10px);
            }
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          .animate-slide-up {
            animation: slide-up 0.8s ease-out forwards;
            opacity: 0;
          }

          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }

          .animate-wave {
            animation: wave 8s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  );
}
