import React, { useState, useEffect } from "react";

const ZolvitHeroSection = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [clickedCard, setClickedCard] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const heroData = {
    rating: "4.5/5 (19k+ Reviews)",
    mainTitle: "Build Your Business with Passion.",
    subTitle: "Run It Smarter with Zolvit.",
    description1: "Simplifying Legal, Tax, and Compliance, the",
    highlight: "AI-Driven",
    description2: "Way. Trusted by millions.",
    description3: "Backed by real experts.",
    searchPlaceholder: "Try GST Registration",
  };

  const typingPhrases = [
    "GST Registration",
    "Company Registration",
    "Trademark Registration",
    "Legal Consultation",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const currentPhrase = typingPhrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
      } else {
        setCurrentText(
          isDeleting
            ? currentPhrase.substring(0, currentText.length - 1)
            : currentPhrase.substring(0, currentText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex]);

  const menuItems = [
    {
      label: "Business Registration",
      categories: [
        {
          title: "Company Registration",
          items: [
            "Private Limited Company",
            "Limited Liability Partnership",
            "One Person Company",
            "Sole Proprietorship",
            "Nidhi Company",
            "Producer Company",
            "Partnership Firm",
            "Startup India Registration",
          ],
        },
      ],
    },
    {
      label: "Tax & Compliance",
      categories: [
        {
          title: "GST Services",
          items: ["GST Registration", "GST Return Filing", "GST Annual Return"],
        },
      ],
    },
    {
      label: "Trademark & IP",
      categories: [
        {
          title: "Trademark Services",
          items: [
            "Trademark Registration",
            "Trademark Search",
            "Trademark Objection",
          ],
        },
      ],
    },
    {
      label: "Documentation",
      categories: [
        {
          title: "Legal Agreements",
          items: [
            "Partnership Deed",
            "Founders Agreement",
            "Shareholder Agreement",
          ],
        },
      ],
    },
    {
      label: "Others",
      categories: [
        {
          title: "Certifications",
          items: ["ISO Certification", "FSSAI License", "BIS Certification"],
        },
      ],
    },
  ];

  const quickActions = [
    "Trademark Registration",
    "GST Registration",
    "Company Registration",
    "Lawyer Consultation",
  ];

  const businessCards = [
    {
      id: 1,
      title: "Start Your Business",
      description:
        "Launch your business effortlessly with expert-guided incorporation, registrations, and licensing.",
      icon: "🚀",
      // illustration:
      //   "https://assets.vakilsearch.com/live-images/ic-start-your-business.svg",
      rotation: "-8deg",
    },
    {
      id: 2,
      title: "Manage Your Business",
      description:
        "Stay compliant and in control with automated tax filings, smart dashboards, and real-time alerts.",
      icon: "📊",
      // illustration:
      //   "https://assets.vakilsearch.com/live-images/ic-manage-your-business.svg",
      rotation: "0deg",
    },
    {
      id: 3,
      title: "Protect Your Business",
      description:
        "Secure your brand with trademark registration, contracts, and legal support from trusted experts.",
      icon: "🛡️",
      // illustration:
      //   "https://assets.vakilsearch.com/live-images/ic-protect-your-business.svg",
      rotation: "6deg",
    },
  ];

  const testimonial = {
    quote: '"Registration, Filing, and Legal help in one app just makes sense"',
    author: "Sanjivani Awale",
    platform: "Google",
    avatar:
      "https://assets.vakilsearch.com/live-images/user-avatar-placeholder.svg",
    link: "#",
  };

  const googleReview = {
    rating: "4.5/5",
    totalReviews: "19k+ Happy Reviews",
  };

  const partners = [
    "https://assets.vakilsearch.com/live-images/ic-amazon.svg",
    "https://assets.vakilsearch.com/live-images/ic-oyo.svg",
    "https://assets.vakilsearch.com/live-images/ic-small-swiggy.svg",
    "https://assets.vakilsearch.com/live-images/ic-bigbasket.svg",
    "https://assets.vakilsearch.com/live-images/ic-hdfc.svg",
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#4a0e0e] via-[#2d0a0a] to-[#1a0505] overflow-hidden">
      {/* Header */}
      <header className="relative z-20 bg-gradient-to-r from-[#1a0505] to-[#2d0a0a] border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold text-white">⚡ zolvit</span>
            <nav className="hidden md:flex items-center space-x-6">
              {menuItems.map((menu, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === index ? null : index)
                    }
                    className="text-white hover:text-red-400 text-sm flex items-center gap-1"
                  >
                    {menu.label}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {activeDropdown === index && (
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-2xl z-50 overflow-hidden min-w-[200px]">
                      <div className="p-4">
                        {menu.categories[0].items.map((item, i) => (
                          <a
                            key={i}
                            href="#"
                            className="block text-sm text-gray-700 py-2 hover:text-red-600"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white text-2xl"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 text-white">
            {menuItems.map((menu, index) => (
              <div key={index} className="border-b border-gray-700">
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === index ? null : index)
                  }
                  className="w-full text-left px-4 py-3 flex justify-between items-center"
                >
                  {menu.label}
                  <span>{activeDropdown === index ? "▲" : "▼"}</span>
                </button>
                {activeDropdown === index && (
                  <div className="px-6 py-2 space-y-2">
                    {menu.categories[0].items.map((item, i) => (
                      <a
                        key={i}
                        href="#"
                        className="block text-gray-200 hover:text-red-400 text-sm"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <div className="flex justify-center items-center gap-3 mb-6">
          <div className="flex text-yellow-400 text-sm sm:text-base">★★★★★</div>
          <span className="text-white font-semibold text-sm sm:text-base">
            {heroData.rating}
          </span>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {heroData.mainTitle}
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {heroData.subTitle}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg">
            {heroData.description1}{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-white text-gray-900 px-3 py-1 rounded-full font-semibold text-xs sm:text-sm">
                {heroData.highlight}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 rounded-full blur-sm opacity-75 animate-pulse"></span>
            </span>{" "}
            {heroData.description2}
          </p>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-2">
            {heroData.description3}
          </p>
        </div>

        {/* Search Bar with Typing Animation */}
        <div className="max-w-full sm:max-w-2xl mx-auto mb-6 relative">
          <div className="relative">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder={`Try ${currentText}`}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 pr-14 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-all"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-gray-900 p-2 sm:p-3 rounded-full hover:bg-gray-100 transition-all">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="px-3 sm:px-4 py-2 rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-red-500 transition-all text-xs sm:text-sm"
            >
              {action}
            </button>
          ))}
        </div>

        {/* Business Cards with Tilt */}
        <div className="relative w-full flex flex-col md:flex-row justify-center items-center md:items-end gap-2 md:gap-8 lg:gap-2 mt-10 md:mt-20 px-4">
          {businessCards.map((card, index) => (
            <div
              key={card.id}
              onClick={() =>
                setClickedCard(clickedCard === card.id ? null : card.id)
              }
              className={`bg-white rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-105 hover:shadow-red-500/30 cursor-pointer w-full sm:w-72 md:w-80 lg:w-72`}
              style={{
                transform:
                  clickedCard === card.id
                    ? `rotate(0deg) translateY(-30px)`
                    : `rotate(${card.rotation}) translateY(0)`,
                zIndex: clickedCard === card.id ? 20 : 10,
              }}
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {card.title}
                  </h3>
                  <span className="text-2xl">▸</span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>
              <div className="flex justify-end">
                {/* <img
                  src={card.illustration}
                  alt={card.title}
                  className="w-24 h-24 sm:w-32 sm:h-32 object-contain opacity-90"
                /> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave & Bottom Section */}
      <div className="relative -mt-32 sm:-mt-48">
        <svg
          className="w-full h-24 absolute bottom-0 left-0 right-0"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0 0C480 120 960 120 1440 0V120H0V0Z" fill="#000000" />
        </svg>

        <div className="bg-black pt-24 pb-12 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
              {/* Testimonial with Avatar */}
              <div className="text-white text-center md:text-left">
                <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold">
                    SA
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-gray-400">
                      on {testimonial.platform}
                    </p>
                  </div>
                </div>
                <p className="text-sm sm:text-base italic">
                  {testimonial.quote}
                </p>
              </div>

              {/* Award */}
              <div className="text-center">
                <img
                  src="https://assets.vakilsearch.com/ic-zolvit-reviews-light-zpf.svg"
                  alt="Zolvit Reviews"
                  className="w-48 sm:w-64 mx-auto"
                />
              </div>

              {/* Google Reviews */}
              <div className="flex items-center justify-center md:justify-end gap-4">
                <div className="text-white text-center md:text-right">
                  <img
                    src="https://assets.vakilsearch.com/googleimg-white.svg"
                    alt="Google"
                    className="inline-block w-12 sm:w-16 mb-1"
                  />
                  <div className="flex items-center justify-center md:justify-end gap-2 text-sm sm:text-base">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="font-bold">{googleReview.rating}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {googleReview.totalReviews}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Logos Marquee */}
          <div className="w-full bg-gray-800 py-6 overflow-hidden">
            <div className="flex gap-12 animate-marquee items-center">
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={partner}
                    alt={`Partner ${index + 1}`}
                    className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>

            <style jsx>{`
              @keyframes marquee {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-marquee {
                display: flex;
                animation: marquee 20s linear infinite;
              }
              .animate-marquee:hover {
                animation-play-state: paused;
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZolvitHeroSection;
