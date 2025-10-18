import React from "react";

const ZolvitHeroSection = () => {
  const [activeDropdown, setActiveDropdown] = React.useState(null);

  const heroData = {
    rating: "4.5/5 (19k+ Reviews)",
    mainTitle: "Build Your Business with Passion.",
    subTitle: "Run It Smarter with Zolvit.",
    description1: "Simplifying Legal, Tax, and Compliance, the",
    highlight: "AI-Driven",
    description2: "Way. Trusted by millions.",
    description3: "Backed by real experts.",
    searchPlaceholder: "Try #GSAI Registration",
  };

  const menuItems = [
    {
      label: "Business Registration",
      icon: "📄",
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
            "US Company Formation",
            "UK Company Formation",
            "Dubai Company Formation",
            "Singapore Company Formation",
          ],
        },
        {
          title: "Company Name Search",
          items: ["Check Name Availability", "Reserve Company Name"],
        },
        {
          title: "Licenses & Registrations",
          items: [
            "GST Registration",
            "FSSAI License",
            "Import Export Code",
            "MSME Registration",
          ],
        },
        {
          title: "Web Development",
          items: ["Business Website", "E-commerce Website", "Mobile App"],
        },
      ],
    },
    {
      label: "Tax & Compliance",
      icon: "📊",
      categories: [
        {
          title: "GST Services",
          items: [
            "GST Registration",
            "GST Return Filing",
            "GST Annual Return",
            "GST Cancellation",
          ],
        },
        {
          title: "Income Tax",
          items: [
            "Income Tax Filing",
            "TDS Return Filing",
            "Tax Planning",
            "Tax Notice Reply",
          ],
        },
        {
          title: "Annual Compliance",
          items: [
            "ROC Annual Filing",
            "Annual Return",
            "Board Meeting",
            "AGM Compliance",
          ],
        },
      ],
    },
    {
      label: "Trademark & IP",
      icon: "™️",
      categories: [
        {
          title: "Trademark Services",
          items: [
            "Trademark Registration",
            "Trademark Search",
            "Trademark Objection",
            "Trademark Renewal",
          ],
        },
        {
          title: "Intellectual Property",
          items: [
            "Copyright Registration",
            "Patent Registration",
            "Design Registration",
            "IP Consultation",
          ],
        },
      ],
    },
    {
      label: "Documentation",
      icon: "📝",
      categories: [
        {
          title: "Legal Agreements",
          items: [
            "Partnership Deed",
            "Founders Agreement",
            "Shareholder Agreement",
            "Joint Venture Agreement",
          ],
        },
        {
          title: "Business Contracts",
          items: [
            "Service Agreement",
            "Vendor Agreement",
            "NDA Templates",
            "Employment Contract",
          ],
        },
      ],
    },
    {
      label: "Others",
      icon: "⚙️",
      categories: [
        {
          title: "Certifications",
          items: [
            "ISO Certification",
            "FSSAI License",
            "BIS Certification",
            "Halal Certification",
          ],
        },
        {
          title: "Digital Services",
          items: [
            "Digital Signature",
            "Accounting Services",
            "Payroll Services",
            "Virtual CFO",
          ],
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
    },
    {
      id: 2,
      title: "Manage Your Business",
      description:
        "Stay compliant and in control with automated tax filings, smart dashboards, and real-time alerts.",
      icon: "📊",
    },
    {
      id: 3,
      title: "Protect Your Business",
      description:
        "Secure your brand with trademark registration, contracts, and legal support from trusted experts.",
      icon: "🛡️",
    },
  ];

  const testimonial = {
    quote: '"Registration, Filing, and Legal help in one app just makes sense"',
    author: "Sanjivani Awale on Google",
    link: "#",
  };

  const award = {
    title: "VOTED NO 1 LEGAL PLATFORM IN INDIA",
    year: "2025",
  };

  const googleReview = {
    rating: "4.5/5",
    totalReviews: "19k+ Happy Reviews",
  };

  const partners = ["amazon", "OYO", "SWIGGY", "bigbasket", "HDFC BANK"];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#4a0e0e] via-[#2d0a0a] to-[#1a0505] overflow-hidden">
      {/* Header Navigation */}
      <header className="relative z-20 bg-gradient-to-r from-[#1a0505] to-[#2d0a0a] border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">⚡ zolvit</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {menuItems.map((menu, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === index ? null : index)
                    }
                    className="text-white hover:text-red-400 text-sm transition-colors flex items-center gap-1"
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
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setActiveDropdown(null)}
                      ></div>
                      <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-2xl z-50 overflow-hidden">
                        <div className="flex">
                          {/* Left Sidebar */}
                          <div className="w-56 bg-gray-50 border-r border-gray-200 py-4">
                            {menu.categories.map((category, catIndex) => (
                              <button
                                key={catIndex}
                                className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-white hover:text-red-600 transition-colors flex items-center justify-between group"
                              >
                                <span className="flex items-center gap-2">
                                  <span className="text-lg">{menu.icon}</span>
                                  {category.title}
                                </span>
                                <svg
                                  className="w-4 h-4 text-gray-400 group-hover:text-red-600"
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

                          {/* Right Content */}
                          <div className="w-64 py-4 px-2">
                            <div className="mb-3 px-3">
                              <h3 className="text-base font-bold text-gray-900">
                                {menu.categories[0]?.title}
                              </h3>
                            </div>
                            {menu.categories[0]?.items.map(
                              (item, itemIndex) => (
                                <a
                                  key={itemIndex}
                                  href="#"
                                  className="block px-3 py-2 text-sm text-gray-700 hover:text-red-600 transition-colors"
                                >
                                  {item}
                                </a>
                              )
                            )}

                            {/* Bottom CTA */}
                            <div className="mt-4 mx-3 pt-4 border-t border-gray-200">
                              <div className="bg-blue-50 rounded-lg p-3 flex items-start gap-2">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                  <span className="text-lg">👨‍💼</span>
                                </div>
                                <div>
                                  <p className="text-xs text-gray-600 mb-1">
                                    Prefer to talk to a business advisor first?
                                  </p>
                                  <a
                                    href="#"
                                    className="text-xs text-blue-600 hover:underline font-semibold"
                                  >
                                    Book a call back
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-4 py-2 rounded-lg text-sm transition-all">
                Consult an Expert
              </button>
              <button className="text-white hover:text-red-400 font-semibold text-sm transition-colors">
                Login
              </button>
              <button className="text-white hover:text-red-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-lg rotate-12 blur-xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-red-400/10 rounded-lg -rotate-12 blur-xl"></div>
        <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-red-600/10 rounded-lg rotate-45 blur-xl"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        {/* Rating */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-sm">
              👤
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-sm">
              👤
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-sm">
              👤
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-sm">
              👤
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex text-yellow-400">
              {"★★★★★".split("").map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
            <span className="text-white font-semibold text-sm ml-2">
              {heroData.rating}
            </span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {heroData.mainTitle}
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {heroData.subTitle}
          </h2>
          <p className="text-gray-300 text-lg md:text-xl">
            {heroData.description1}{" "}
            <span className="bg-white text-gray-900 px-3 py-1 rounded-full font-semibold">
              {heroData.highlight}
            </span>{" "}
            {heroData.description2}
          </p>
          <p className="text-gray-300 text-lg md:text-xl mt-2">
            {heroData.description3}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder={heroData.searchPlaceholder}
              className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-900 p-3 rounded-full transition-all">
              <svg
                className="w-5 h-5"
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
              className="px-4 py-2 rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-red-500 transition-all text-sm"
            >
              {action}
            </button>
          ))}
        </div>

        {/* Business Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {businessCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-red-500/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{card.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">
                  {card.title} ▸
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section with Wave */}
      <div className="relative">
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-24"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0 0C480 120 960 120 1440 0V120H0V0Z" fill="#000000" />
          </svg>
        </div>

        {/* Bottom Content on Black Background */}
        <div className="bg-black pt-32 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
              {/* Testimonial */}
              <div className="text-white">
                <p className="text-lg italic mb-2">{testimonial.quote}</p>
                <p className="text-sm text-gray-400">
                  Review By{" "}
                  <a
                    href={testimonial.link}
                    className="underline hover:text-red-400"
                  >
                    {testimonial.author}
                  </a>
                </p>
              </div>

              {/* Award */}
              <div className="text-center">
                <div className="inline-block">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-400 text-3xl">★</span>
                    <span className="text-yellow-400 text-4xl">★</span>
                    <span className="text-yellow-400 text-3xl">★</span>
                  </div>
                  <div className="border-4 border-yellow-400 rounded-lg p-4">
                    <p className="text-white font-bold text-sm mb-1">
                      {award.title}
                    </p>
                    <p className="text-yellow-400 font-bold text-xl">
                      {award.year}
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Reviews */}
              <div className="flex items-center justify-center md:justify-end gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl">G</span>
                </div>
                <div className="text-white">
                  <p className="font-semibold mb-1">Google Reviews</p>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="font-bold">{googleReview.rating}</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    {googleReview.totalReviews}
                  </p>
                </div>
              </div>
            </div>

            {/* Partner Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {partners.map((partner, index) => (
                <div key={index} className="text-white font-bold text-lg">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Refer a Friend Button */}
    </div>
  );
};

export default ZolvitHeroSection;
