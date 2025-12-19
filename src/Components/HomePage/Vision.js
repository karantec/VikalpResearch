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
      image: "/LOGO/1.png",
      alt: "Preathers Logo",
    },
    {
      id: 2,
      name: "Zee Music Co",
      image: "/LOGO/2.png",
      alt: "Zee Music Co Logo",
    },
    {
      id: 3,
      name: "Tufcon XT",
      image: "/LOGO/3.png",
      alt: "Tufcon XT Logo",
    },
    {
      id: 4,
      name: "Anant Raj Mahima",
      image: "/LOGO/4.png",
      alt: "Anant Raj Mahima Logo",
    },
    {
      id: 5,
      name: "Anant Raj Mahima",
      image: "/LOGO/5.png",
      alt: "Anant Raj Mahima Logo",
    },
    {
      id: 6,
      name: "Anant Raj Mahima",
      image: "/LOGO/6.png",
      alt: "Anant Raj Mahima Logo",
    },
    {
      id: 7,
      name: "Anant Raj Mahima",
      image: "/LOGO/7.png",
      alt: "Anant Raj Mahima Logo",
    },
    {
      id: 8,
      name: "Anant Raj Mahima",
      image: "/LOGO/8.png",
      alt: "Anant Raj Mahima Logo",
    },
    {
      id: 9,
      name: "Anant Raj Mahima",
      image: "/LOGO/9.png",
      alt: "Anant Raj Mahima Logo",
    },
    {
      id: 10,
      name: "Anant Raj Mahima",
      image: "/LOGO/10.png",
      alt: "Anant Raj Mahima Logo",
    },
    {
      id: 11,
      name: "Anant Raj Mahima",
      image: "/LOGO/11.png",
      alt: "Anant Raj Mahima Logo",
    },
    // {
    //   id: 5,
    //   name: "Lakme Academy",
    //   image:
    //     "https://www.newsvoir.com/images/user/logo/_LAKME_ACADEMY_new-logo.jpg",
    //   alt: "Lakme Academy Logo",
    // },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Validated Vision Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-grey-900 mb-4">
            {sectionData.title}
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
            {sectionData.description}
          </p>
        </div>

        {/* Client Logos - Single Row */}
        <div
          className="overflow-x-auto mb-20"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE and Edge
          }}
        >
          <div
            className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8 min-w-max px-4"
            style={{
              // Chrome, Safari and Opera
              scrollbarWidth: "none",
            }}
          >
            {clientLogos.map((logo) => (
              <div
                key={logo.id}
                className="bg-white hover:bg-gray-50 rounded-lg hover:shadow-2xl transition-all duration-300 p-4 md:p-6 w-[140px] md:w-[180px] lg:w-[200px] h-[90px] md:h-[100px] flex items-center justify-center border border-gray-400 hover:border-red-600 hover:scale-105 flex-shrink-0"
                // border reduced from 'border-2 border-gray-600' to 'border border-gray-400'
              >
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
          <style>
            {`
              /* Hide scrollbars for this section (Webkit browsers) */
              .overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
        </div>

        {/* Cube in News Section */}
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Cube in News
          </h2>
        </div> */}

        {/* News Logos Section - Placeholder */}
      </div>
    </div>
  );
};

export default ValidatedVisionSection;
