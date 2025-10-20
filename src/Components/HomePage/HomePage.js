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

  // Typing animation
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

  // Menu Items
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
        {
          title: "International Business Setup",
          items: [
            "Import Export Code (IEC)",
            "Foreign Company Registration",
            "Branch Office Setup",
          ],
        },
        {
          title: "Licenses & Registrations",
          items: [
            "MSME Registration",
            "Shop and Establishment Act",
            "Udyam Registration",
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
        {
          title: "Tax Filings",
          items: ["TDS Filing", "Income Tax Filing", "Professional Tax"],
        },
        {
          title: "Compliance",
          items: ["Annual Compliance", "ROC Filing", "Board Meetings"],
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
        {
          title: "IP Protection",
          items: ["Patent Filing", "Copyright Registration", "Design Filing"],
        },
        {
          title: "IP Management",
          items: ["IP Renewal", "IP Portfolio", "IP Consultation"],
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
        {
          title: "Contracts",
          items: [
            "Employment Agreement",
            "Service Agreement",
            "Non-Disclosure Agreement",
          ],
        },
        {
          title: "Business Documents",
          items: ["MOU", "Sale Deed", "Lease Agreement"],
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
        {
          title: "Legal Support",
          items: ["Lawyer Consultation", "Legal Notice", "Dispute Resolution"],
        },
        {
          title: "Accounting",
          items: ["Bookkeeping", "Payroll", "Financial Statements"],
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
      rotation: "-8deg",
    },
    {
      id: 2,
      title: "Manage Your Business",
      description:
        "Stay compliant and in control with automated tax filings, smart dashboards, and real-time alerts.",
      icon: "📊",
      rotation: "0deg",
    },
    {
      id: 3,
      title: "Protect Your Business",
      description:
        "Secure your brand with trademark registration, contracts, and legal support from trusted experts.",
      icon: "🛡️",
      rotation: "6deg",
    },
  ];

  const testimonial = {
    quote: '"Registration, Filing, and Legal help in one app just makes sense"',
    author: "Sanjivani Awale",
    platform: "Google",
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

            {/* Desktop Navbar */}
            <nav className="hidden md:flex items-center space-x-6 relative">
              {menuItems.map((menu, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="text-white hover:text-red-400 text-sm flex items-center gap-1">
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

                  {/* Mega Dropdown */}
                  {activeDropdown === index && (
                    <div className="absolute left-0 top-full mt-2 bg-white rounded-xl shadow-2xl z-50 w-[500px] transition-all duration-300 ease-in-out opacity-100 overflow-hidden">
                      <div className="flex">
                        {/* Left Sidebar - Categories */}
                        <div className="w-2/5 bg-gray-50 border-r border-gray-200 py-4">
                          {menu.categories.map((cat, i) => (
                            <button
                              key={i}
                              className="w-full text-left px-6 py-3 text-sm text-gray-700 hover:bg-white hover:text-red-600 transition-all flex items-center justify-between group"
                            >
                              <span className="flex items-center gap-2">
                                <span className="text-gray-400 group-hover:text-red-600">
                                  📄
                                </span>
                                {cat.title}
                              </span>
                              <span className="text-gray-400">›</span>
                            </button>
                          ))}
                        </div>

                        {/* Right Content - Items */}
                        <div className="w-3/5 p-6">
                          <h3 className="font-bold text-gray-900 text-lg mb-4">
                            {menu.categories[0]?.title}
                          </h3>
                          <ul className="space-y-2">
                            {menu.categories[0]?.items.map((item, j) => (
                              <li key={j}>
                                <a
                                  href="#"
                                  className="block text-sm text-gray-700 hover:text-red-600 py-1 transition-all"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>

                          {/* Bottom CTA */}
                          <div className="mt-6 pt-4 border-t border-gray-200">
                            <div className="flex items-center gap-2 text-sm text-blue-600">
                              <span className="text-lg">💬</span>
                              <span>
                                Prefer to talk to a business advisor first?
                              </span>
                            </div>
                            <a
                              href="#"
                              className="text-blue-600 text-sm underline hover:text-blue-700 ml-7"
                            >
                              Book a call back
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
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
                    {menu.categories.flatMap((cat) =>
                      cat.items.map((item, i) => (
                        <a
                          key={i}
                          href="#"
                          className="block text-gray-200 hover:text-red-400 text-sm"
                        >
                          {item}
                        </a>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 text-center">
        <div className="flex justify-center items-center gap-3 mb-6">
          <div className="flex text-yellow-400 text-sm sm:text-base">★★★★★</div>
          <span className="text-white font-semibold text-sm sm:text-base">
            {heroData.rating}
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
          {heroData.mainTitle}
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          {heroData.subTitle}
        </h2>
        <p className="text-gray-300 text-lg">
          {heroData.description1}{" "}
          <span className="bg-white text-gray-900 px-3 py-1 rounded-full font-semibold text-sm">
            {heroData.highlight}
          </span>{" "}
          {heroData.description2}
        </p>
        <p className="text-gray-300 text-lg mt-2">{heroData.description3}</p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto my-8 relative">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder={`Try ${currentText}`}
            className="w-full px-6 py-4 pr-14 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100">
            🔍
          </button>
        </div>

        {/* Quick Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {quickActions.map((action, i) => (
            <button
              key={i}
              className="px-4 py-2 rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-red-500 transition"
            >
              {action}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 mt-10">
          {businessCards.map((card) => (
            <div
              key={card.id}
              onClick={() =>
                setClickedCard(clickedCard === card.id ? null : card.id)
              }
              className={`bg-white rounded-2xl shadow-xl p-8 cursor-pointer transition-all duration-500 hover:scale-105 w-full sm:w-72`}
              style={{
                transform:
                  clickedCard === card.id
                    ? `rotate(0deg) translateY(-30px)`
                    : `rotate(${card.rotation}) translateY(0)`,
                zIndex: clickedCard === card.id ? 20 : 10,
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-gray-900">
                  {card.title}
                </h3>
                <span className="text-xl">▸</span>
              </div>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black pt-20 pb-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <p className="italic mb-2">{testimonial.quote}</p>
          <p className="text-sm text-gray-400">– {testimonial.author}</p>
          <div className="flex justify-center items-center mt-6">
            <span className="text-yellow-400">★★★★★</span>
            <span className="ml-2 font-semibold">
              {googleReview.rating} ({googleReview.totalReviews})
            </span>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="w-full bg-gray-800 py-6 overflow-hidden mt-10">
          <div className="flex gap-12 animate-marquee items-center">
            {[...partners, ...partners].map((p, i) => (
              <img
                key={i}
                src={p}
                alt="partner"
                className="h-8 opacity-80 hover:opacity-100"
              />
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
              animation: marquee 20s linear infinite;
              display: flex;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default ZolvitHeroSection;
