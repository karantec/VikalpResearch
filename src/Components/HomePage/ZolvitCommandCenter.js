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
        "https://res.cloudinary.com/de4ks8mkh/image/upload/v1761544106/cubemedia/Receive_Official_Proposal_a39puu.png",
    },
    {
      id: 2,
      icon: "📅",
      title: "4-5 Days Onboarding Period*",
      description:
        "Quick and efficient onboarding to get your project started without delays.",
      image:
        "https://res.cloudinary.com/de4ks8mkh/image/upload/v1761544102/cubemedia/4-5_Days_Onboarding_Period_naeccf.png",
    },
    {
      id: 3,
      icon: "👤",
      title: "Dedicated Account Manager",
      description: "Your point of contact for all updates",
      highlighted: true,
      image:
        "https://res.cloudinary.com/de4ks8mkh/image/upload/v1761544105/cubemedia/Dedicated_Account_Manager_hjf48q.png",
    },
    {
      id: 4,
      icon: "💬",
      title: "Internal Communication Group",
      description:
        "Stay connected with your team through a dedicated communication channel for seamless collaboration.",
      image:
        "https://res.cloudinary.com/de4ks8mkh/image/upload/v1761544106/cubemedia/Internal_Communication_Group_sx2de0.png",
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
    <div className="bg-gradient-to-b from-red-900 via-red-500 via-70% to-white to-100% py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-2 sm:mb-3 px-2 leading-tight">
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
                      ? "bg-red-800 border-2 border-white"
                      : "bg-red-900 border-2 border-white"
                    : "bg-red-950 hover:from-red-800/70 hover:to-red-900/70 border border-red-600 hover:border-red-500 bg-opacity-60"
                } p-4 sm:p-5 md:p-6`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">
                    {feature.icon}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-normal text-white">
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

{/* Top + Left padding only */}
<div className="pt-3 pl-3 sm:pt-4 sm:pl-4 lg:pt-5 lg:pl-5">

  {/* Force height so image can fill */}
  <div className="relative w-full" style={{ height: "400px" }}>

    <img
      src={features[activeFeature].image}
      alt={features[activeFeature].title}
      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-md"
    />

  </div>

</div>
</div>


        </div>
      </div>
    </div>
  );
};

export default HassleFreeProjectSection;
