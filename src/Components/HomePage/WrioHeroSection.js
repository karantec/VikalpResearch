import React, { useState, useEffect } from "react";

const WrioHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "⚡",
      title: "Instant Booking",
      description: "Place orders in seconds",
    },
    {
      icon: "🌐",
      title: "Multi-Language",
      description: "Works in your language",
    },
    {
      icon: "📊",
      title: "Real-Time Updates",
      description: "Track orders live",
    },
  ];

  const screenshots = [
    {
      title: "Order Dashboard",
      description: "Manage all your orders in one place",
    },
    {
      title: "Multi-Language Interface",
      description: "Switch between languages instantly",
    },
    {
      title: "Analytics & Reports",
      description: "Track your business performance",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                🚀 Now Available
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                WRIO
              </span>
              <br />
              Smarter Order Booking Platform
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Unlike most order booking apps that work only in English, WRIO
              stands out with its
              <span className="font-semibold text-emerald-600">
                {" "}
                multilingual, locally customized interface
              </span>
              , making it simple for users to understand and operate in their
              preferred language.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {feature.title}
                    </p>
                    <p className="text-xs text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Get Started Free
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              <button className="px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 border-2 border-emerald-200 hover:border-emerald-400 flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600">10K+</p>
                <p className="text-sm text-gray-600">Active Users</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600">50K+</p>
                <p className="text-sm text-gray-600">Orders/Day</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600">15+</p>
                <p className="text-sm text-gray-600">Languages</p>
              </div>
            </div>
          </div>

          {/* Right Content - App Mockup */}
          <div
            className={`relative transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* Phone Mockup */}
            <div className="relative mx-auto max-w-md">
              {/* Floating Elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-emerald-400 rounded-2xl shadow-xl animate-float opacity-80 flex items-center justify-center text-3xl">
                📱
              </div>
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-teal-400 rounded-2xl shadow-xl animate-float animation-delay-2000 opacity-80 flex items-center justify-center text-3xl">
                ✅
              </div>

              {/* Main Phone Frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10"></div>

                {/* Screen */}
                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-inner">
                  {/* Status Bar */}
                  <div className="bg-gradient-to-br from-emerald-400 to-teal-500 px-6 py-3 flex justify-between items-center text-white text-xs">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-4">📶</div>
                      <div className="w-4 h-4">🔋</div>
                    </div>
                  </div>

                  {/* App Content Slider */}
                  <div className="relative h-[600px] bg-gradient-to-br from-emerald-50 to-teal-50">
                    <div className="absolute inset-0 p-6">
                      <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {screenshots[currentSlide].title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {screenshots[currentSlide].description}
                          </p>
                        </div>

                        {/* Mock Content */}
                        <div className="flex-1 space-y-3">
                          {[1, 2, 3, 4].map((item) => (
                            <div
                              key={item}
                              className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 flex items-center gap-3 transform hover:scale-102 transition-transform"
                            >
                              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold">
                                #{item}
                              </div>
                              <div className="flex-1">
                                <div className="h-3 bg-emerald-200 rounded w-3/4 mb-2"></div>
                                <div className="h-2 bg-teal-200 rounded w-1/2"></div>
                              </div>
                              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
                                ✓
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Bottom Action Button */}
                        <button className="w-full mt-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold shadow-lg">
                          Place Order Now
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Slider Dots */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                    {[0, 1, 2].map((index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentSlide === index
                            ? "bg-emerald-500 w-6"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-500 mb-6">
            Trusted by leading businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-32 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 font-semibold"
              >
                Brand {i}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default WrioHeroSection;
