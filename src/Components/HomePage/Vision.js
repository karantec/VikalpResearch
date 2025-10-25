import React from "react";

const ValidatedVisionSection = () => {
  const sectionData = {
    title: "Trust By Growing Brands",
    description:
      "From startups to established companies-brands across industries trust Cube to drive real growth.",
  };

  const clientLogos = [
    {
      id: 1,
      name: "Preathers",
      image: "https://i.postimg.cc/RVDMQFvL/preathers-logo.png",
      alt: "Preathers Logo",
    },
    {
      id: 2,
      name: "Zee Music Co",
      image:
        "https://digiosmosis.com/wp-content/uploads/2019/10/1140x456_Zee_Music-768x307.jpg",
      alt: "Zee Music Co Logo",
    },
    {
      id: 3,
      name: "Tufcon XT",
      image:
        "https://th.bing.com/th/id/OIP.62dILNr-O8Tal7b72kzm4wHaCA?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      alt: "Tufcon XT Logo",
    },
    {
      id: 4,
      name: "Anant Raj Mahima",
      image: "https://i.postimg.cc/KjN8w1gj/anant-raj-logo.png",
      alt: "Anant Raj Mahima Logo",
    },
    {
      id: 5,
      name: "Lakme Academy",
      image:
        "https://www.newsvoir.com/images/user/logo/_LAKME_ACADEMY_new-logo.jpg",
      alt: "Lakme Academy Logo",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-red-950 via-red-900 to-red-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Validated Vision Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {sectionData.title}
          </h2>
          <p className="text-gray-200 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
            {sectionData.description}
          </p>
        </div>

        {/* Client Logos - Single Row */}
        <div className="overflow-x-auto mb-20">
          <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8 min-w-max px-4">
            {clientLogos.map((logo) => (
              <div
                key={logo.id}
                className="bg-white hover:bg-gray-50 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-4 md:p-6 w-[140px] md:w-[180px] lg:w-[200px] h-[90px] md:h-[100px] flex items-center justify-center border-2 border-gray-200 hover:border-red-600 hover:scale-105 flex-shrink-0"
              >
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Cube in News Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Cube in News
          </h2>
        </div>

        {/* News Logos Section - Placeholder */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {/* Add news outlet logos here if needed */}
        </div>
      </div>
    </div>
  );
};

export default ValidatedVisionSection;
