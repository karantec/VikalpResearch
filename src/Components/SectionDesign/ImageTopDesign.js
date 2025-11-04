import React, { useState } from "react";
import { Play, Target, Users, TrendingUp, Award } from "lucide-react";

export default function MarketingLandingPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen mt-14 bg-gradient-to-b from-pink-200 via-pink-300 to-pink-400 relative overflow-hidden">
      {/* Wavy bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
        >
          <path
            d="M0,50 C150,80 350,0 600,50 C850,100 1050,20 1200,50 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.3)"
          />
          <path
            d="M0,70 C200,100 400,40 600,70 C800,100 1000,60 1200,80 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.2)"
          />
          <path
            d="M0,90 C250,110 450,70 600,90 C750,110 950,80 1200,100 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.1)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            WE DON'T JUST DO MARKETING,
            <br />
            <span className="inline-flex items-center gap-2">
              WE BUILD BRANDS
              <span className="text-5xl">🎉</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-800 font-medium mt-6 max-w-3xl mx-auto">
            Performance-driven digital marketing strategies crafted for
            businesses that are ready to grow.
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-red-600 to-red-700">
            {/* Video Thumbnail */}
            <div className="relative aspect-video bg-gradient-to-br from-red-500 via-red-600 to-red-700 flex items-center justify-center">
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-between p-8 md:p-12">
                {/* Left side - Text in Bengali */}
                <div className="flex-1 text-white">
                  <div className="bg-white rounded-full px-4 py-2 inline-flex items-center gap-2 mb-8">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      CUBE
                    </div>
                    <span className="text-gray-900 font-semibold text-sm">
                      multimedia
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    ব্যবসায় হলে টেনশন
                    <br />
                    মার্কেটিং - ই সলিউশন !
                  </h2>
                </div>

                {/* Right side - Person and badges */}
                <div className="relative flex-1 flex justify-end">
                  <div className="text-right">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 inline-block mb-4">
                      <div className="text-white font-bold text-2xl">100+</div>
                      <div className="text-white/90 text-sm">happy clients</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Play button */}
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
              >
                <Play className="w-12 h-12 md:w-16 md:h-16 text-red-600 fill-red-600 ml-2 group-hover:scale-110 transition-transform" />
              </button>

              {/* Service boxes */}
              <div className="absolute bottom-8 left-8 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-3 backdrop-blur-sm">
                  <span className="text-2xl">🎨</span>
                  <span className="text-sm font-semibold text-gray-900">
                    ডিজিটাল মার্কেটিং
                  </span>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-3 backdrop-blur-sm">
                  <span className="text-2xl">📝</span>
                  <span className="text-sm font-semibold text-gray-900">
                    কন্টেন্ট ক্রিয়েশন
                  </span>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-3 backdrop-blur-sm">
                  <span className="text-2xl">🧲</span>
                  <span className="text-sm font-semibold text-gray-900">
                    লিড জেনারেশন ও<br />
                    অ্যানালিটিক সেলস
                  </span>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg flex items-center gap-3 backdrop-blur-sm">
                  <span className="text-2xl">👤</span>
                  <span className="text-sm font-semibold text-gray-900">
                    পার্সোনালিটি ডিজাইন
                    <br />
                    এবং পার্সোনাল ব্র্যান্ডিং
                  </span>
                </div>
              </div>

              {/* Target icon */}
              <div className="absolute bottom-8 right-12">
                <div className="w-20 h-20 relative animate-pulse">
                  <Target
                    className="w-full h-full text-yellow-400 fill-yellow-400"
                    strokeWidth={1.5}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div className="absolute bottom-4 left-8 bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                আজই যোগাযোগ করুন
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-green-400">📞</span>
                  <span>+91 9046 965 841</span>
                </div>
              </div>

              {/* Website info */}
              <div className="absolute top-4 right-4 text-white text-right text-xs">
                <div className="mb-1">🌐 www.cubemultimedia.in</div>
                <div>
                  📍 68, Roy Mallick Colony, Dumdum Station (Near Trends)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-12">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-xl px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Book Free Strategy Call
          </button>
        </div>

        {/* Partner Badges */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {/* Meta Business Partner */}
              <div className="flex items-center gap-2 px-4 py-2">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <div className="text-xs text-gray-600">Meta</div>
                  <div className="text-sm font-semibold text-gray-900">
                    Business Partner
                  </div>
                </div>
              </div>

              {/* Google Partner */}
              <div className="flex items-center gap-2 px-4 py-2">
                <div className="w-12 h-12 flex items-center justify-center">
                  <div className="text-2xl font-bold">
                    <span className="text-blue-500">G</span>
                    <span className="text-red-500">o</span>
                    <span className="text-yellow-500">o</span>
                    <span className="text-blue-500">g</span>
                    <span className="text-green-500">l</span>
                    <span className="text-red-500">e</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Partner
                  </div>
                </div>
              </div>

              {/* Shopify Partner */}
              <div className="flex items-center gap-2 px-4 py-2">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <div>
                  <div className="text-xs text-gray-600">shopify</div>
                  <div className="text-sm font-semibold text-gray-900">
                    partner
                  </div>
                </div>
              </div>

              {/* AWS Partner */}
              <div className="flex items-center gap-2 px-4 py-2">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <div className="text-white font-bold text-xs">aws</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600">Partner</div>
                  <div className="text-sm font-semibold text-gray-900">
                    Network
                  </div>
                </div>
              </div>

              {/* YouTube Certified */}
              <div className="flex items-center gap-2 px-4 py-2">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-600">YouTube</div>
                  <div className="text-sm font-semibold text-gray-900">
                    CERTIFIED
                  </div>
                </div>
              </div>

              {/* HubSpot Expert */}
              <div className="flex items-center gap-2 px-4 py-2">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold">
                  H
                </div>
                <div>
                  <div className="text-xs text-gray-600">HubSpot</div>
                  <div className="text-sm font-semibold text-gray-900">
                    Expert
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
