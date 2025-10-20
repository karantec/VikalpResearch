import React, { useState, useEffect } from "react";

const Zolvit360CommandCenter = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  const sectionData = {
    title: "Zolvit 360 - Your Command Centre for Compliance",
    subtitle:
      "Effortless compliance, instant expert support, and smart insights all in one place",
  };

  const features = [
    {
      id: 1,
      icon: "📊",
      title: "Unified Dashboard",
      description:
        "Get a comprehensive view of all your compliance activities in one centralized location.",
      image: "https://assets.vakilsearch.com/ic-platform-benefits-md-1.png",
    },
    {
      id: 2,
      icon: "⚙️",
      title: "Automated Compliance",
      description:
        "Stay ahead with smart alerts and automatically manage filings to avoid missed deadlines.",
      image: "https://assets.vakilsearch.com/ic-platform-benefits-md-2.png",
    },
    {
      id: 3,
      icon: "🔒",
      title: "Secure Document Vault",
      description:
        "Store and organize all your compliance documents safely with enterprise-grade security.",
      image: "https://assets.vakilsearch.com/ic-platform-benefits-md-3.png",
    },
    {
      id: 4,
      icon: "👥",
      title: "Expert Connect",
      description:
        "Get instant access to compliance experts for guidance and support whenever you need it.",
      image: "https://assets.vakilsearch.com/ic-platform-benefits-md-4.png",
    },
  ];

  const buttonText = "Signup for Zolvit 360";

  // Auto-progress effect
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Move to next feature
          setActiveFeature((current) => (current + 1) % features.length);
          return 0;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [features.length]);

  const handleFeatureClick = (index) => {
    setActiveFeature(index);
    setProgress(0);
  };

  return (
    <div className="bg-gradient-to-br from-[#4a0e0e] via-[#2d0a0a] to-[#1a0505] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 px-2 leading-tight">
            {sectionData.title}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base px-4">
            {sectionData.subtitle}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Left Side - Features */}
          <div className="space-y-3 sm:space-y-4">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                onClick={() => handleFeatureClick(index)}
                className={`rounded-lg transition-all duration-300 cursor-pointer overflow-hidden ${
                  activeFeature === index
                    ? "bg-gradient-to-br from-red-900 to-red-950 border-2 border-red-500 shadow-lg shadow-red-900/50"
                    : "bg-gradient-to-br from-gray-800 to-gray-900 hover:from-red-900 hover:to-red-950 border border-gray-700 hover:border-red-500"
                } p-4 sm:p-5 md:p-6`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">
                    {feature.icon}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
                {activeFeature === index && (
                  <>
                    <p className="mt-3 text-xs sm:text-sm text-gray-300 ml-8 sm:ml-11">
                      {feature.description}
                    </p>
                    {/* Progress Bar */}
                    <div className="mt-3 ml-8 sm:ml-11">
                      <div className="w-full bg-red-950 rounded-full h-1 overflow-hidden">
                        <div
                          className="bg-red-500 h-1 transition-all duration-100 ease-linear"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* Signup Button */}
            <div className="pt-2 sm:pt-4">
              <button className="w-full bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg">
                {buttonText}
              </button>
            </div>
          </div>

          {/* Right Side - Dashboard Preview */}
          <div className="bg-gradient-to-br from-red-900 to-red-950 rounded-lg shadow-2xl overflow-hidden border-2 sm:border-4 border-red-800/50">
            {/* Dashboard Frame */}
            <div className="p-3 sm:p-4 lg:p-5">
              {/* Dashboard Content */}
              <div className="bg-white rounded-lg overflow-hidden shadow-inner">
                {/* Main Image Display */}
                <div className="relative w-full bg-gray-50 overflow-hidden flex items-center justify-center p-4 sm:p-6 lg:p-8">
                  <img
                    src={features[activeFeature].image}
                    alt={features[activeFeature].title}
                    className="w-full h-auto object-contain transition-opacity duration-500 max-w-full"
                    style={{ maxHeight: "400px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zolvit360CommandCenter;
