import React from "react";

const InfoCards = () => {
  const cardsData = [
    {
      id: 1,
      badge: "WWW.SEARCH",
      title: "Trademark Registration Fees",
      subtitle: "TM filing starts at just ₹4999 + Govt fees",
      image: "TM",
      description:
        "The official trademark registration fees in India vary depending on the applicant",
      link: "Read Details",
      bgColor: "from-red-900 to-red-950",
      mainColor: "red",
    },
    {
      id: 2,
      badge: "GOLD SCHEME",
      title: "GST on Gold",
      subtitle: "GST Rates on Gold, Jewellery, Ornaments, ETFs and Coin",
      description:
        "Under the current GST regime in India, all gold transactions—whether for jewellery,",
      link: "Read Details",
      bgColor: "from-[#4a0e0e] to-[#2d0a0a]",
      mainColor: "red",
    },
    {
      id: 3,
      badge: "WWW.SEARCH",
      title: "Eway Bill Limit",
      subtitle: "Basic, Max, List & Threshold",
      description:
        "The e-way bill system mandates an electronic document for transporting goods over",
      link: "Read Details",
      bgColor: "from-red-800 to-red-900",
      mainColor: "red",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#4a0e0e] via-[#2d0a0a] to-[#1a0505] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-br from-red-950 to-black rounded-lg shadow-lg hover:shadow-2xl hover:shadow-red-900/50 transition-all duration-300 overflow-hidden border border-red-900/30"
            >
              {/* Card Image/Header Section */}
              <div
                className={`relative h-48 bg-gradient-to-br ${card.bgColor} p-6 flex flex-col justify-between`}
              >
                {/* Badge */}
                <div className="flex justify-between items-start">
                  <span className="inline-block px-3 py-1 text-xs font-bold bg-red-500 text-white rounded-full">
                    {card.badge}
                  </span>
                </div>

                {/* Title Section */}
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                  <p className="text-sm opacity-90">{card.subtitle}</p>

                  {/* Decorative dots for card 2 */}
                  {card.id === 2 && (
                    <div className="flex gap-1 mt-4">
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full ${
                            i === 3 ? "bg-red-500" : "bg-white"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Icon/Image placeholder */}
                {card.id === 1 && (
                  <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                    <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center border-4 border-white">
                      <span className="text-3xl font-bold text-white">
                        {card.image}
                      </span>
                    </div>
                  </div>
                )}

                {card.id === 2 && (
                  <div className="absolute right-6 top-6">
                    <div className="w-32 h-32 relative">
                      {/* Decorative jewelry image placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 border-8 border-red-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                )}

                {card.id === 3 && (
                  <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                    <div className="relative">
                      <div className="text-6xl">📦</div>
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white font-bold text-xs px-2 py-1 rounded">
                        E-Way Bill Limit
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 bg-gradient-to-br from-red-950/50 to-black/80">
                <h4 className="text-lg font-bold text-white mb-2">
                  {card.title}: {card.subtitle.split(":")[0]}
                </h4>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {card.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-semibold text-red-400 hover:text-red-300 transition-colors"
                >
                  {card.link}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Refer a Friend Button (Fixed position) */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50"></div>
    </div>
  );
};

export default InfoCards;
