import React, { useState, useEffect } from "react";
import {
  Play,
  Target,
  Globe,
  Phone,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function MarketingLandingPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-700 via-rose-800 to-red-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden mt-16">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-60 right-20 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/3 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden opacity-30">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <path
            d="M0,50 C150,80 350,0 600,50 C850,100 1050,20 1200,50 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.2)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        {/* Header Section - Enhanced with animations */}
        <div className="text-center mb-12 md:mb-16">
          {/* Logo with animation */}

          {/* Main Headline with staggered animation */}
          <div className="space-y-8 pt-16 ">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight"
              style={{
                animation: "fadeInUp 1s ease-out 0.2s both",
                textShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              <span className="inline-block bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent animate-pulse">
                WE DON'T JUST DO
              </span>
              <br />
              <span className="inline-block mt-2 relative">
                <span className="relative z-10">MARKETING</span>
                <div className="absolute -inset-2 bg-white opacity-20 blur-xl rounded-full"></div>
              </span>
            </h1>

            <div
              className="flex items-center justify-center gap-4 flex-wrap"
              style={{
                animation: "fadeInUp 1s ease-out 0.4s both",
              }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight">
                WE BUILD
              </h2>
              <div className="relative">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent">
                  BRANDS
                </h2>
                <Zap className="absolute -top-8 -right-8 w-12 h-12 text-yellow-300 animate-bounce" />
              </div>
              <span className="text-5xl md:text-6xl animate-bounce">🎉</span>
            </div>

            {/* Subheadline with icons */}
            <div
              className="mt-8 max-w-4xl mx-auto"
              style={{
                animation: "fadeInUp 1s ease-out 0.6s both",
              }}
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl border border-white border-opacity-20">
                <div className="flex items-start md:items-center justify-center gap-4 flex-col md:flex-row">
                  <TrendingUp className="w-8 h-8 text-yellow-300 flex-shrink-0 animate-pulse" />
                  <p className="text-xl md:text-2xl lg:text-3xl text-white font-bold leading-relaxed">
                    Performance-driven digital marketing strategies crafted for
                    businesses that are
                    <span className="inline-block mx-2 px-4 py-1 bg-yellow-400 text-red-700 rounded-full text-lg md:text-xl font-black transform hover:scale-110 transition-transform">
                      READY TO GROW
                    </span>
                  </p>
                  <Target
                    className="w-8 h-8 text-yellow-300 flex-shrink-0 animate-spin"
                    style={{ animationDuration: "3s" }}
                  />
                </div>
              </div>
            </div>

            {/* Feature badges */}
            <div
              className="flex flex-wrap items-center justify-center gap-4 mt-8"
              style={{
                animation: "fadeInUp 1s ease-out 0.8s both",
              }}
            >
              <div className="bg-yellow-400 text-red-700 px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
                ✨ 100% Results Oriented
              </div>
              <div className="bg-white text-red-600 px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
                🚀 Fast Growth
              </div>
              <div className="bg-yellow-400 text-red-700 px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
                💎 Premium Quality
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div
          className="max-w-6xl mx-auto mb-8 md:mb-12"
          style={{
            animation: "fadeInUp 1s ease-out 1s both",
          }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
            {isVideoPlaying ? (
              <div className="w-full aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/2ovxeSQeaHo?autoplay=1&rel=0"
                  title="Marketing video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="relative aspect-video bg-gradient-to-br from-orange-50 to-pink-50">
                <img
                  src="https://i.postimg.cc/VvJh8MfK/cube-multimedia-thumbnail.jpg"
                  alt="Cube Multimedia Marketing"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black via-transparent to-transparent bg-opacity-40 hover:bg-opacity-50 transition-all duration-300">
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="relative z-10 group"
                  >
                    <div className="absolute inset-0 bg-yellow-400 rounded-full blur-2xl opacity-50 group-hover:opacity-75 animate-pulse"></div>
                    <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                      <Play className="w-12 h-12 md:w-16 md:h-16 text-white fill-white ml-2" />
                    </div>
                  </button>
                </div>

                <div className="absolute top-4 right-4 bg-white rounded-2xl px-4 py-2 shadow-xl flex items-center gap-2 transform hover:scale-105 transition-transform">
                  <Globe className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-bold text-gray-900">
                    www.cubemultimedia.in
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Services Grid */}
        <div
          className="max-w-5xl mx-auto mb-8 md:mb-12"
          style={{
            animation: "fadeInUp 1s ease-out 1.2s both",
          }}
        >
          <h3 className="text-3xl md:text-4xl font-black text-white text-center mb-8">
            আমাদের সার্ভিস সমূহ
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: "📱", text: "ডিজিটাল মার্কেটিং" },
              { emoji: "📝", text: "কনটেন্ট ক্রিয়েশন" },
              { emoji: "🎨", text: "নিউজ জেনারেশন ও অনলাইন সেলস" },
              { emoji: "👔", text: "পার্সোনাল ব্রান্ডিং এবং পার্সোনাল রাইটিং" },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 text-center border-2 border-white border-opacity-20 hover:border-yellow-400 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 shadow-xl cursor-pointer group"
                style={{
                  animation: `fadeInUp 1s ease-out ${1.3 + idx * 0.1}s both`,
                }}
              >
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {service.emoji}
                </div>
                <p className="text-white font-bold text-sm leading-snug">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="text-center mb-8 md:mb-12"
          style={{
            animation: "fadeInUp 1s ease-out 1.6s both",
          }}
        >
          <div className="bg-gradient-to-br from-white to-yellow-50 rounded-3xl p-8 md:p-10 max-w-2xl mx-auto shadow-2xl border-4 border-yellow-400 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl md:text-4xl font-black text-red-600 mb-6 animate-pulse">
              আজই যোগাযোগ করুন
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="tel:+919046965841"
                className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-6 h-6 animate-pulse" />
                <span className="text-lg">+91 90469 65841</span>
              </a>
            </div>
            <button className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 hover:from-yellow-500 hover:to-yellow-600 text-red-700 font-black text-xl md:text-2xl px-10 md:px-14 py-5 md:py-6 rounded-full shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto animate-pulse">
              📞 Book Free Strategy Call
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className="max-w-4xl mx-auto"
          style={{
            animation: "fadeInUp 1s ease-out 1.8s both",
          }}
        >
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-white border-opacity-20">
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
              {[
                { num: "100+", label: "Happy Clients", icon: "😊" },
                { num: "500+", label: "Projects Done", icon: "✅" },
                { num: "24/7", label: "Support", icon: "💬" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center transform hover:scale-110 transition-transform duration-300"
                >
                  <div className="text-6xl mb-2">{stat.icon}</div>
                  <div className="text-5xl md:text-6xl font-black text-yellow-300 mb-2">
                    {stat.num}
                  </div>
                  <div className="text-white font-bold text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div
          className="flex justify-center gap-6 mt-10"
          style={{
            animation: "fadeInUp 1s ease-out 2s both",
          }}
        >
          {["📘", "📸", "🎯"].map((icon, idx) => (
            <div
              key={idx}
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-125 transition-all duration-300 cursor-pointer transform hover:-rotate-12"
            >
              <span className="text-3xl">{icon}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
