import React, { useState } from "react";
import { Play, Globe } from "lucide-react";

export default function MarketingLandingPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-red-50 relative overflow-hidden">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255, 200, 200, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 200, 200, 0.3) 1px, transparent 1px)
        `,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-6 py-6 relative z-10">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gray-900 rounded-lg flex flex-col items-center justify-center">
              <span className="text-white font-black text-[10px] leading-tight">
                CUBE
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-gray-900 font-black text-xl">
                multimedia
              </span>
            </div>
          </div>

          {/* Website */}
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
            <Globe className="w-4 h-4 text-red-600" />
            <span className="text-sm font-semibold text-gray-900">
              www.cubemultimedia.in
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Left Side */}
          <div className="space-y-8 pt-8">
            {/* Yellow Banner */}
            <div className="bg-yellow-400 rounded-lg px-6 py-3 inline-block shadow-md">
              <h2 className="text-2xl font-bold leading-tight">
                <span className="text-red-600">ব্যবসায়</span>{" "}
                <span className="text-gray-900">হলে টেনশন</span>
              </h2>
            </div>

            {/* Main Headline */}
            <div className="leading-none">
              <h1 className="text-7xl font-black leading-[0.9]">
                <span className="text-red-600">মার্কেটিং</span>
                <span className="text-gray-900"> - ই</span>
              </h1>
              <h1 className="text-7xl font-black leading-[0.9] mt-2">
                <span className="text-gray-900">সলিউশন !</span>
              </h1>
            </div>

            {/* Service Boxes */}
            <div className="grid grid-cols-2 gap-4 max-w-lg">
              <div className="bg-white rounded-xl p-4 shadow-md border border-pink-200">
                <div className="flex items-start gap-2">
                  <span className="text-2xl">📱</span>
                  <p className="text-xs font-semibold text-gray-900 leading-tight mt-1">
                    ডিজিটাল মার্কেটিং
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-md border border-pink-200">
                <div className="flex items-start gap-2">
                  <span className="text-2xl">👨‍💼</span>
                  <p className="text-xs font-semibold text-gray-900 leading-tight mt-1">
                    কনটেন্ট ক্রিয়েশন
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-md border border-pink-200">
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🎨</span>
                  <p className="text-xs font-semibold text-gray-900 leading-tight mt-1">
                    নিউজ জেনারেশন ও<br />
                    অনলাইন সেলস
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-md border border-pink-200">
                <div className="flex items-start gap-2">
                  <span className="text-2xl">👔</span>
                  <p className="text-xs font-semibold text-gray-900 leading-tight mt-1">
                    পার্সোনালিটি ডিজাইন
                    <br />
                    এবং পার্সোনাল ব্রান্ডিং
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Red Button */}
            <div className="bg-red-600 rounded-xl px-6 py-3 inline-block shadow-lg">
              <p className="text-white font-black text-xl">আজই যোগাযোগ করুন</p>
            </div>

            {/* Phone Number */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <a
                href="tel:+919046965841"
                className="text-3xl font-black text-gray-900"
              >
                +91 90469 65841
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3 pt-2">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md cursor-pointer hover:scale-105 transition-transform">
                <span className="text-2xl">📘</span>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-pink-600 via-purple-600 to-orange-500 rounded-xl flex items-center justify-center shadow-md cursor-pointer hover:scale-105 transition-transform">
                <span className="text-2xl">📸</span>
              </div>
            </div>
          </div>

          {/* Right Side - Video/Image */}
          <div className="relative pt-8">
            {/* Blue thumbs up badge */}

            {/* Video Container */}
            <div className="relative w-[900px] h-[550px] rounded-3xl overflow-hidden shadow-2xl mx-auto">
              {isVideoPlaying ? (
                <div className="w-full h-full bg-black">
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
                <div className="relative w-full h-full">
                  <img
                    src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1762281342/%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%B8%E0%A6%BE%E0%A6%AF%E0%A6%BC_%E0%A6%B9%E0%A6%B2%E0%A7%87_%E0%A6%9F%E0%A7%87%E0%A6%A8%E0%A6%B6%E0%A6%A8_%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%95%E0%A7%87%E0%A6%9F%E0%A6%BF%E0%A6%82_-_%E0%A6%87_%E0%A6%B8%E0%A6%B2%E0%A6%BF%E0%A6%89%E0%A6%B6%E0%A6%A8_mh32hl.jpg"
                    alt="Cube Multimedia"
                    className="w-full h-full object-cover"
                  />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                    >
                      <Play className="w-10 h-10 text-red-600 fill-red-600 ml-1" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 100+ Badge at bottom center */}

            {/* Target Icon bottom right */}
            <div
              className="absolute -bottom-8 -right-4 z-20"
              style={{ width: "140px", height: "140px" }}
            >
              <div className="relative w-full h-full">
                {/* Red circle with rings */}

                {/* Arrow with yellow gradient */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-32 text-center max-w-5xl mx-auto">
          <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-3xl p-10 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">
              WE DON'T JUST DO MARKETING,
            </h2>
            <h2 className="text-4xl md:text-5xl font-black text-red-600 mb-6">
              WE BUILD BRANDS <span className="text-5xl">🎉</span>
            </h2>
            <p className="text-xl text-gray-700 font-semibold mb-8">
              Performance-driven digital marketing strategies crafted for
              businesses that are{" "}
              <span className="text-red-600 font-black">READY TO GROW</span>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="bg-red-600 text-white px-6 py-3 rounded-full font-bold shadow-md">
                ✨ 100% Results Oriented
              </div>
              <div className="bg-yellow-400 text-red-700 px-6 py-3 rounded-full font-bold shadow-md">
                🚀 Fast Growth
              </div>
              <div className="bg-red-600 text-white px-6 py-3 rounded-full font-bold shadow-md">
                💎 Premium Quality
              </div>
            </div>

            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-2xl px-12 py-5 rounded-full shadow-xl hover:scale-105 transition-transform">
              📞 Book Free Strategy Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
