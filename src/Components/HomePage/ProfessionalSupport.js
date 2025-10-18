import React from "react";

const ProfessionalSupportSection = () => {
  const sectionData = {
    title: "Professional Support on Demand",
    subtitle:
      "We guide you through legal, financial, and compliance challenges",
  };

  const professionals = [
    {
      id: 1,
      title: "Lawyers",
      description: "For contracts, notices, and litigation support",
      count: "205+ Lawyers",
      icon: "⚖️",
      buttonText: "Consult Now",
    },
    {
      id: 2,
      title: "Chartered Accountants (CAs)",
      description: "For tax filings, audits, and financial planning",
      count: "256+ CAs",
      icon: "💼",
      buttonText: "Consult Now",
    },
    {
      id: 3,
      title: "Company Secretaries (CSs)",
      description: "For regulatory compliance, and corporate governance",
      count: "200+ CS",
      icon: "📋",
      buttonText: "Consult Now",
    },
  ];

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

        {/* Professional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {professionals.map((professional) => (
            <div
              key={professional.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-200 hover:border-red-500 hover:scale-105"
            >
              {/* Card Header */}
              <div className="p-6 text-center border-b border-gray-200">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {professional.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {professional.description}
                </p>
              </div>

              {/* Consult Button */}
              <div className="px-6 pt-4">
                <button className="w-full bg-gradient-to-r from-[#1a0505] to-[#4a0e0e] hover:from-[#2d0a0a] hover:to-[#5a1111] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                  {professional.buttonText}
                </button>
              </div>

              {/* Professional Image Section */}
              <div className="relative p-6">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden h-48 flex items-center justify-center relative">
                  {/* Placeholder for professional image */}
                  <div className="text-center">
                    <div className="text-6xl mb-2">{professional.icon}</div>
                    <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      {professional.count}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Border Line */}

        {/* Refer a Friend Button (Fixed position) */}
      </div>
    </div>
  );
};

export default ProfessionalSupportSection;
