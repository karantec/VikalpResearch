import React from "react";

const ExpertHelpSection = () => {
  const sectionData = {
    title: "Expert Help, Whenever You Need It",
    subtitle:
      "Connect with experts — marketing, performance, and sales — for results that matter.",
  };

  const experts = [
    {
      id: 1,
      title: "Marketing Consultant",
      description: "Expert guidance on social media, branding & campaigns.",
      count: "200+ Lawyers",
      buttonText: "Consult Now",
      bgGradient: "from-gray-100 to-gray-200",
      imageUrl:
        "https://res.cloudinary.com/de4ks8mkh/image/upload/v1766141786/cubemedia/12_ntxl9i.jpg",
    },
    {
      id: 2,
      title: "Performance Marketer",
      description: "Optimize ads, funnels & ROI for growth.",
      count: "256+ CAs",
      buttonText: "Consult Now",
      bgGradient: "from-gray-100 to-gray-200",
      imageUrl:
        "https://res.cloudinary.com/de4ks8mkh/image/upload/v1766141786/cubemedia/13_zpnmhz.jpg",
    },
    {
      id: 3,
      title: "Sales Specialist",
      description: "Boost sales and conversions with proven strategies.",
      count: "200+ CS",
      buttonText: "Consult Now",
      bgGradient: "from-gray-100 to-gray-200",
      imageUrl:
        "https://res.cloudinary.com/de4ks8mkh/image/upload/v1766141786/cubemedia/414_tyw4r4.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-br bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-3 ">
            {sectionData.title}
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            {sectionData.subtitle}
          </p>
        </div>

        {/* Expert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-white rounded-xl transition-all duration-300 overflow-hidden border-2 border-black hover:border-red-900 hover:scale-105"
            >
              {/* Card Header */}
              <div className="p-6 text-center">
                <h3 className="text-xl md:text-2xl font-normal text-gray-900 mb-2">
                  {expert.title}
                </h3>
                <p className="text-sm text-gray-600">{expert.description}</p>
              </div>

              {/* Consult Button */}
              <div className="px-6">
                <button className="w-full bg-red-900 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                  {expert.buttonText}
                </button>
              </div>

              {/* Expert Image Section */}
              <div className="relative p-6">
                <div
                  className={`bg-gradient-to-br ${expert.bgGradient} rounded-lg overflow-hidden h-48 flex items-center justify-center relative`}
                >
                  {/* Expert Image */}
                  <img
                    src={expert.imageUrl}
                    alt={expert.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Count Badge */}
                  <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 shadow-md">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    {expert.count}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertHelpSection;
