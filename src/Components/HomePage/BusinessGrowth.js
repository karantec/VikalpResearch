import React from "react";

const ZolvitWaySection = () => {
  const sectionData = {
    title: "Everything Your Business Needs to Grow, Right Here",
    subtitle: "Stop juggling and start expanding",
    oldWay: {
      title: "The Old Way",
      description:
        "Slow. Manual filing, error-prone, and full of paperwork. Deadlines are easy to miss, and expert help feels out of reach.",
      imageUrl: "https://assets.vakilsearch.com/ic-old-way-zpf.svg",
    },
    zolvitWay: {
      title: "The Zolvit Way",
      description:
        "Quick. AI-powered filing, precise, and automated. You get smart alerts, secure document storage, and expert support anytime you need it.",
      imageUrl: "https://assets.vakilsearch.com/ic-zolvit-way-zpf.svg",
      buttonText: "Signup for Zolvit 360",
    },
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* The Old Way Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:border-white/40">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              {sectionData.oldWay.title}
            </h3>
            <p className="text-gray-300 text-sm md:text-base mb-6 text-center leading-relaxed">
              {sectionData.oldWay.description}
            </p>
            <div className="flex justify-center items-center min-h-[300px]">
              <img
                src={sectionData.oldWay.imageUrl}
                alt="The Old Way"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>

          {/* The Zolvit Way Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-red-600 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              {sectionData.zolvitWay.title}
            </h3>
            <p className="text-gray-700 text-sm md:text-base mb-6 text-center leading-relaxed">
              {sectionData.zolvitWay.description}
            </p>
            <div className="flex justify-center items-center min-h-[300px] mb-6">
              <img
                src={sectionData.zolvitWay.imageUrl}
                alt="The Zolvit Way"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                {sectionData.zolvitWay.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZolvitWaySection;
