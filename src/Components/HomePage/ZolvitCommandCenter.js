import React, { useState, useEffect } from "react";

const HassleFreeProjectSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  const sectionData = {
    title: "Start Your Project Hassle-Free with Cube",
    subtitle:
      "From proposal to dedicated support, our onboarding process is designed to get your project running smoothly fast, clear, and completely transparent.",
  };

  const features = [
    {
      id: 1,
      icon: "📋",
      title: "Receive Official Proposal",
      description:
        "Get a detailed, customized proposal outlining project scope, timeline, and deliverables.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      icon: "📅",
      title: "4-5 Days Onboarding Period*",
      description:
        "Quick and efficient onboarding to get your project started without delays.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      icon: "👤",
      title: "Dedicated Account Manager",
      description: "Your point of contact for all updates",
      highlighted: true,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      icon: "💬",
      title: "Internal Communication Group",
      description:
        "Stay connected with your team through a dedicated communication channel for seamless collaboration.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    },
  ];

  const buttonText = "Signup for Cube 2.0";

  // Auto-progress effect
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
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
    <div className="bg-gradient-to-br from-red-950 via-red-900 to-red-950 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 px-2 leading-tight">
            {sectionData.title}
          </h2>
          <p className="text-gray-200 text-sm sm:text-base px-4 max-w-4xl mx-auto">
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
                    ? feature.highlighted
                      ? "bg-gradient-to-br from-red-700 to-red-800 border-2 border-red-400 shadow-lg shadow-red-900/50"
                      : "bg-gradient-to-br from-red-800 to-red-900 border-2 border-red-500 shadow-lg shadow-red-900/50"
                    : "bg-gradient-to-br from-gray-800 to-gray-900 hover:from-red-800 hover:to-red-900 border border-gray-700 hover:border-red-500"
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
                    <p className="mt-3 text-xs sm:text-sm text-gray-200 ml-8 sm:ml-11">
                      {feature.description}
                    </p>
                    {/* Progress Bar */}
                    <div className="mt-3 ml-8 sm:ml-11">
                      <div className="w-full bg-red-950 rounded-full h-1 overflow-hidden">
                        <div
                          className="bg-red-400 h-1 transition-all duration-100 ease-linear"
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
              <button className="w-full bg-white hover:bg-gray-100 text-red-900 font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg">
                {buttonText}
              </button>
            </div>
          </div>

          {/* Right Side - Dashboard Preview */}
          <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-lg shadow-2xl overflow-hidden border-2 sm:border-4 border-red-700/50">
            {/* Dashboard Frame */}
            <div className="p-3 sm:p-4 lg:p-5">
              {/* Dashboard Content */}
              <div className="bg-white rounded-lg overflow-hidden shadow-inner">
                {/* Main Image Display */}
                <div className="relative w-full bg-gradient-to-br from-red-50 to-gray-50 overflow-hidden flex items-center justify-center p-4 sm:p-6 lg:p-8">
                  <img
                    src={features[activeFeature].image}
                    alt={features[activeFeature].title}
                    className="w-full h-auto object-cover transition-opacity duration-500 rounded-lg shadow-md"
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

export default HassleFreeProjectSection;
