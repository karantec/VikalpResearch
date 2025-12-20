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
  ];

  return (
    <div className="w-full bg-white py-16">
      {/* Validated Vision Section */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          {sectionData.title}
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {sectionData.description}
        </p>
      </div>

      {/* Client Logos - Animated Slider */}
      <div className="relative overflow-hidden">
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="flex animate-scroll">
          {/* First set of logos */}
          {clientLogos.map((logo) => (
            <div
              key={`first-${logo.id}`}
              className="flex items-center justify-center px-8 flex-shrink-0  transition-all duration-300"
            >
              <img
                src={logo.image}
                alt={logo.alt}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clientLogos.map((logo) => (
            <div
              key={`second-${logo.id}`}
              className="flex items-center justify-center px-8 flex-shrink-0  transition-all duration-300"
            >
              <img
                src={logo.image}
                alt={logo.alt}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Cube in News Section */}
      {/*
      <div className="max-w-6xl mx-auto px-4 text-center mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Cube in News
        </h2>
      </div>
      */}

      {/* News Logos Section - Placeholder */}
    </div>
  );
};

export default ValidatedVisionSection;
