import React from "react";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 left-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-in-left">
              <div className="inline-block">
                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
                  🚀 Join Our Creative Team
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Elevate Your
                <span className="block text-red-600 mt-1 sm:mt-2">
                  Brand Story
                </span>
                <span className="block mt-1 sm:mt-2">With Us</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                At CubeMedia, we craft compelling marketing campaigns that drive
                results. Join a team of creative minds reshaping how brands
                connect with audiences in the digital age.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <button className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto">
                  Join Us Today
                </button>
                <button className="bg-white text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg border-2 border-gray-200 hover:border-red-600 hover:text-red-600 transition-all duration-300 hover:shadow-lg w-full sm:w-auto">
                  Learn More
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                    500+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Team Members
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                    50K+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Clients Served
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                    99%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Satisfaction
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Team Grid */}
            <div className="relative animate-slide-in-right mt-8 lg:mt-0">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {/* Card 1 */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400"
                      alt="Team member"
                      className="w-full h-48 sm:h-56 md:h-64 object-cover"
                    />
                    <div className="p-3 sm:p-4 bg-gradient-to-br from-red-50 to-white">
                      <div className="w-8 sm:w-12 h-1 bg-red-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400"
                      alt="Team member"
                      className="w-full h-36 sm:h-40 md:h-48 object-cover"
                    />
                    <div className="p-3 sm:p-4 bg-gradient-to-br from-orange-50 to-white">
                      <div className="w-8 sm:w-12 h-1 bg-orange-600 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-12">
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400"
                      alt="Team member"
                      className="w-full h-36 sm:h-40 md:h-48 object-cover"
                    />
                    <div className="p-3 sm:p-4 bg-gradient-to-br from-purple-50 to-white">
                      <div className="w-8 sm:w-12 h-1 bg-purple-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <img
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400"
                      alt="Team member"
                      className="w-full h-48 sm:h-56 md:h-64 object-cover"
                    />
                    <div className="p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-white">
                      <div className="w-8 sm:w-12 h-1 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 animate-float">
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl mb-1 sm:mb-2">⭐</div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">
                    4.9
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(3deg);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
