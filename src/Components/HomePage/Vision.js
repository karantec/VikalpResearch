import React from "react";

const ValidatedVisionSection = () => {
  const sectionData = {
    title: "Validated Vision, Exceptional Results",
    description:
      "We combine expert-backed solutions with intelligent automation to deliver faster filings, smarter decisions, and zero compliance stress. With Zolvit360, results aren't promised, they're proven.",
  };

  const clientLogos = [
    { id: 1, name: "In.C.rp", text: "In.C.rp" },
    { id: 2, name: "M12", text: "M12", highlight: true },
    { id: 3, name: "Kalaari", text: "✦ kalaari" },
    { id: 4, name: "Maatrum", text: "M maatrum" },
    { id: 5, name: "CHUGH", text: "CHUGH" },
  ];

  const newsLogos = [
    { id: 1, name: "ET", text: "ET", bgColor: "bg-teal-900" },
    { id: 2, name: "Forbes", text: "Forbes" },
    { id: 3, name: "The Financial Express", text: "THE FINANCIAL EXPRESS" },
    { id: 4, name: "BusinessLine", text: "BusinessLine" },
    { id: 5, name: "Your Story", text: "YOUR STORY" },
  ];

  return (
    <div className="bg-gradient-to-br from-[#4a0e0e] via-[#2d0a0a] to-[#1a0505] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Blue Border */}
        <div className="w-full h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 mb-12"></div>

        {/* Validated Vision Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {sectionData.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
            {sectionData.description}
          </p>
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-20">
          {clientLogos.map((logo) => (
            <div
              key={logo.id}
              className="bg-white hover:bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 md:p-8 min-w-[140px] md:min-w-[160px] flex items-center justify-center border-2 border-gray-200 hover:border-red-500"
            >
              <span
                className={`font-bold text-lg md:text-xl ${
                  logo.highlight ? "text-red-600" : "text-gray-800"
                }`}
              >
                {logo.text}
              </span>
            </div>
          ))}
        </div>

        {/* Zolvit in News Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Zolvit in News
          </h2>
        </div>

        {/* News Logos */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {newsLogos.map((logo) => (
            <div
              key={logo.id}
              className={`${
                logo.bgColor || "bg-white"
              } hover:bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 md:p-8 min-w-[140px] md:min-w-[160px] flex items-center justify-center border-2 border-gray-200 hover:border-red-500`}
            >
              <span
                className={`font-bold text-base md:text-lg text-center ${
                  logo.bgColor
                    ? "text-white"
                    : logo.id === 3
                    ? "text-blue-800"
                    : logo.id === 4
                    ? "text-blue-600"
                    : logo.id === 5
                    ? "text-red-500"
                    : "text-gray-800"
                }`}
              >
                {logo.text}
              </span>
            </div>
          ))}
        </div>

        {/* Refer a Friend Button (Fixed position) */}
      </div>
    </div>
  );
};

export default ValidatedVisionSection;
