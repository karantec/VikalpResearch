import React from "react";

const BusinessGrowthSection = () => {
  const sectionData = {
    title: "Everything Your Business Needs to Grow, Right Here",
    subtitle: "Stop juggling and start expanding",
  };

  const oldWayData = {
    title: "The Old Way",
    description:
      "Slow. Manual filing, error-prone, and full of paperwork. Deadlines are easy to miss, and expert help feels out of reach.",
    features: [
      { icon: "📄", label: "Manual", position: "top-0 left-12" },
      { icon: "⏰", label: "Slow", position: "top-12 left-0" },
      { icon: "🔍", label: "Error-prone", position: "top-12 right-0" },
      { icon: "📋", label: "Paperwork", position: "top-24 left-6" },
      { icon: "📅", label: "Deadlines", position: "top-24 right-6" },
      { icon: "❌", label: "Hard to reach", position: "bottom-12 left-12" },
      { icon: "🔒", label: "Limited", position: "bottom-0 left-24" },
      { icon: "📝", label: "Complex", position: "bottom-0 right-24" },
    ],
  };

  const zolvitWayData = {
    title: "The Zolvit Way",
    description:
      "Quick. AI-powered filing, precise, and automated. You get smart alerts, secure document storage, and expert support anytime you need it.",
    features: [
      { icon: "🤖", label: "AI-Powered", position: "top-0 left-12" },
      { icon: "📊", label: "Analytics", position: "top-12 left-0" },
      { icon: "🔐", label: "Secure", position: "top-12 right-0" },
      { icon: "📁", label: "Storage", position: "top-24 left-6" },
      { icon: "🔔", label: "Alerts", position: "top-24 right-6" },
      { icon: "🎯", label: "Precise", position: "bottom-12 left-12" },
      { icon: "⚡", label: "Fast", position: "bottom-0 left-24" },
      { icon: "👨‍💼", label: "Expert Support", position: "bottom-0 right-24" },
    ],
    buttonText: "Signup for Zolvit 360",
  };

  return (
    <div className="bg-gradient-to-br from-[#4a0e0e] via-[#2d0a0a] to-[#1a0505] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            {sectionData.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {sectionData.subtitle}
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* The Old Way */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-6 md:p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {oldWayData.title}
              </h3>
              <p className="text-sm text-gray-600">{oldWayData.description}</p>
            </div>

            {/* Center Circle Diagram */}
            <div className="relative h-80 flex items-center justify-center my-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-3xl">❌</span>
                </div>
              </div>

              {/* Orbiting Icons */}
              {oldWayData.features.map((feature, index) => (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    top: `${
                      Math.sin(
                        (index * Math.PI * 2) / oldWayData.features.length
                      ) *
                        120 +
                      40
                    }%`,
                    left: `${
                      Math.cos(
                        (index * Math.PI * 2) / oldWayData.features.length
                      ) *
                        120 +
                      40
                    }%`,
                  }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-gray-300">
                      <span className="text-xl">{feature.icon}</span>
                    </div>
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <span className="text-xs text-gray-600 font-semibold">
                        {feature.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The Zolvit Way */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg shadow-lg p-6 md:p-8 border-2 border-red-500">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {zolvitWayData.title}
              </h3>
              <p className="text-sm text-gray-700">
                {zolvitWayData.description}
              </p>
            </div>

            {/* Center Circle Diagram */}
            <div className="relative h-80 flex items-center justify-center my-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg border-4 border-yellow-400">
                  <span className="text-3xl">⚡</span>
                </div>
              </div>

              {/* Orbiting Icons */}
              {zolvitWayData.features.map((feature, index) => (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    top: `${
                      Math.sin(
                        (index * Math.PI * 2) / zolvitWayData.features.length
                      ) *
                        120 +
                      40
                    }%`,
                    left: `${
                      Math.cos(
                        (index * Math.PI * 2) / zolvitWayData.features.length
                      ) *
                        120 +
                      40
                    }%`,
                  }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-red-400 hover:border-red-600 transition-all">
                      <span className="text-xl">{feature.icon}</span>
                    </div>
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <span className="text-xs text-gray-700 font-semibold">
                        {feature.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button className="w-full bg-gradient-to-r from-[#1a0505] to-[#4a0e0e] hover:from-[#2d0a0a] hover:to-[#5a1111] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-base md:text-lg">
                {zolvitWayData.buttonText}
              </button>
            </div>
          </div>
        </div>

        {/* Refer a Friend Button (Fixed position) */}
      </div>
    </div>
  );
};

export default BusinessGrowthSection;
