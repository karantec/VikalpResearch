import React, { useState, useEffect } from "react";

const ZolvitHeroSection = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(0);
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
      label: "Content Creation",
      categories: [
        {
          title: "Graphic Design",
          items: [
            "Logo Design",
            "Music Video Poster",
            "Music Video Branding",
            "Movie Poster",
          ],
        },
        {
          title: "Video Editing",
          items: [
            "Music Video Editing",
            "Short Form Content",
            "Long Form Content",
            "Color Grading",
          ],
        },
        {
          title: "Content Creation Subscription",
          items: [
            "Monthly Design Package",
            "Weekly Video Package",
            "Social Media Bundle",
            "Complete Creator Suite",
          ],
        },
      ],
    },
    {
      label: "Digital Marketing",
      categories: [
        {
          title: "Social Media Starter Subscription",
          items: [
            "GST Registration",
            "GST Filing",
            "HSN Code Finder",
            "GST Cancellation and Revocation",
            "GST Cancellation",
          ],
        },

        {
          title: "Social Media Growth Subscription",
          items: [
            "Change in Partners",
            "Change in LLP Agreement",
            "Change in Contribution",
          ],
        },
        {
          title: "Meta Ads Subscription",
          items: [
            "Annual Return Filing",
            "Income Tax Return",
            "TDS Return Filing",
          ],
        },
        {
          title: "YouTube Growth SubscriptionNew",
          items: [
            "PF Registration",
            "ESI Registration",
            "Professional Tax Registration",
          ],
        },
      ],
    },
    {
      label: "Web Designing",
      categories: [
        {
          title: "Web Designing",
          items: ["Personal Website", "Company Website", "E-Commerce Website"],
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
      icon: "https://vakilsearch.com/_next/image?url=https%3A%2F%2Fassets.vakilsearch.com%2Fic-start-business.png&w=128&q=75",
      rotation: "-8deg",
    },
    {
      id: 2,
      title: "Manage Your Business",
      description:
        "Stay compliant and in control with automated tax filings, smart dashboards, and real-time alerts.",
      icon: "https://assets.vakilsearch.com/ic-manage-business-zpf.svg",
      rotation: "0deg",
    },
    {
      id: 3,
      title: "Protect Your Business",
      description:
        "Secure your brand with trademark registration, contracts, and legal support from trusted experts.",
      icon: "https://assets.vakilsearch.com/ic-protect-business-zpf.svg",
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
      <header className="relative z-20 bg-[#191919] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://cubemultimedia.in/wp-content/uploads/2023/03/cube-web-logo-home-10.png"
                alt="Cube Multimedia Logo"
                className="h-10 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {/* Consult Expert Button */}
              <button className="px-4 py-2 bg-[#ffc107] hover:bg-[#ffcd38] text-gray-900 font-semibold rounded text-sm mr-2 transition-colors">
                Consult an Expert ▾
              </button>

              {menuItems.map((menu, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => {
                    setActiveDropdown(index);
                    setHoveredCategory(0);
                  }}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setHoveredCategory(0);
                  }}
                >
                  <button className="px-3 py-2 text-white hover:text-[#ffc107] text-sm flex items-center gap-1 transition-colors">
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
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl z-50 w-[600px]">
                      <div className="flex">
                        {/* Left Column - Categories */}
                        <div className="w-1/2 border-r border-gray-200 p-4">
                          {menu.categories.map((category, catIndex) => (
                            <button
                              key={catIndex}
                              onMouseEnter={() => setHoveredCategory(catIndex)}
                              className={`w-full flex items-center justify-between py-3 px-3 hover:bg-gray-50 rounded-lg transition-colors group text-left ${
                                hoveredCategory === catIndex ? "bg-gray-50" : ""
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-gray-400 text-lg">
                                  📄
                                </span>
                                <span className="text-sm font-medium text-gray-700 group-hover:text-[#003d66]">
                                  {category.title}
                                </span>
                              </div>
                              <svg
                                className="w-4 h-4 text-gray-400 group-hover:text-[#003d66]"
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
                            </button>
                          ))}
                        </div>

                        {/* Right Column - Items */}
                        <div className="w-1/2 p-4">
                          <h4 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                            {menu.categories[hoveredCategory].title}
                          </h4>
                          <div className="space-y-1 max-h-80 overflow-y-auto">
                            {menu.categories[hoveredCategory].items.length >
                            0 ? (
                              menu.categories[hoveredCategory].items.map(
                                (item, i) => (
                                  <a
                                    key={i}
                                    href="#"
                                    className="block text-sm text-gray-700 py-2 px-3 hover:text-[#003d66] hover:bg-gray-50 rounded transition-colors"
                                  >
                                    {item}
                                  </a>
                                )
                              )
                            ) : (
                              <p className="text-sm text-gray-500 italic">
                                No items available
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Bottom CTA */}
                      <div className="border-t border-gray-200 p-4">
                        <div className="flex items-center justify-between bg-blue-50 rounded-lg p-3"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Login Button */}
              <button className="ml-4 px-4 py-2 border border-white text-white hover:bg-white/10 rounded text-sm transition-colors">
                Login
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white text-2xl p-2"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#002d4d] text-white border-t border-[#004d7a]">
            {/* Consult Expert - Mobile */}
            <div className="border-b border-[#004d7a]">
              <button className="w-full text-left px-4 py-3 bg-[#ffc107] text-gray-900 font-semibold">
                Consult an Expert
              </button>
            </div>

            {menuItems.map((menu, index) => (
              <div key={index} className="border-b border-[#004d7a]">
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === index ? null : index)
                  }
                  className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-[#004d7a] transition-colors"
                >
                  {menu.label}
                  <span>{activeDropdown === index ? "▲" : "▼"}</span>
                </button>
                {activeDropdown === index && (
                  <div className="px-6 py-2 space-y-2 bg-[#002440]">
                    {menu.categories[0].items.map((item, i) => (
                      <a
                        key={i}
                        href="#"
                        className="block text-gray-200 hover:text-[#ffc107] text-sm py-1 transition-colors"
                      >
                        ▸ {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Login - Mobile */}
            <div className="p-4">
              <button className="w-full px-4 py-2 border border-white text-white hover:bg-white/10 rounded text-sm transition-colors">
                Login
              </button>
            </div>
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
              className={`bg-white rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:scale-105 hover:shadow-red-500/30 cursor-pointer w-full sm:w-[450px] md:w-[480px] lg:w-[460px] min-h-[360px]`}
              style={{
                transform:
                  clickedCard === card.id
                    ? `rotate(0deg) translateY(-90px)`
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
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-16 h-16 object-contain opacity-80"
                />
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
