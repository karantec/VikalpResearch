import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      label: "Digital Marketing",
      icon: "📈",
      items: [
        { name: "Social Media Management", path: "/social-media" },
        {
          name: "Performance Marketing (Meta & Google Ads)",
          path: "/Performance",
        },
        { name: "Influencer Marketing", path: "/Influence" },
        { name: "WhatsApp API Marketing", path: "/WhatsappApi" },
        { name: "Google My Business Optimization", path: "/GoogleMyBusiness" },
        { name: "SEO (On-page & Local)", path: "/Seo" },
        { name: "Email Marketing", path: "/marketing" },
        { name: "Marketing Automation", path: "/marketing" },
      ],
    },
    {
      label: "Content Creation",
      icon: "🎬",
      items: [
        { name: "Reels Production", path: "/content-creation" },
        { name: "Photography & Videography", path: "/Photography" },
        { name: "Video Editing", path: "/VideoEditing" },
        { name: "Graphic Design", path: "/Graphic" },
        { name: "Scriptwriting & Storyboarding", path: "/Scripting" },
        { name: "Voiceover & Dubbing", path: "/voice" },
        { name: "Brand Films / Ad Films", path: "/Films" },
      ],
    },
    {
      label: "Web Design & IT",
      icon: "💻",
      items: [
        { name: "Personal Website", path: "/it-design" },
        { name: "Business / Corporate Website", path: "/business" },
        { name: "E-Commerce Website", path: "/ecommerce" },
        { name: "Mobile Application (iOS & Android)", path: "/mobile-app" },
        { name: "Landing Page / Funnel Design", path: "/landingPage" },
        { name: "Website Maintenance & Security", path: "/website-security" },
      ],
    },
    {
      label: "Publicity & PR",
      icon: "📰",
      items: [
        { name: "Personal Branding", path: "/publicity" },
        { name: "Media News & PR Coverage", path: "/media-coverage" },
        { name: "Podcast Production & Marketing", path: "/podcast" },
        { name: "Film / Event Publicity", path: "/film-activity" },
        { name: "Wikipedia / ORM", path: "/wikipedia" },
      ],
    },
    {
      label: "Others",
      icon: "⚙️",
      items: [
        { name: "Marketing Consultancy", path: "/Marketing" },
        { name: "Sales Consultancy", path: "/SalesConsult" },
        { name: "AI Tools Integration", path: "/AITool" },
        { name: "Training & Workshops", path: "/Training" },
        { name: "Live Classes / Webinars", path: "/Training" }, // if same component for now
        { name: "Free Learning Videos", path: "/FreeLearning" },
        { name: "Downloadable Resources", path: "/FreeLearning" }, // if same component for now
      ],
    },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-red-900/90 backdrop-blur-md
        shadow-md transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://cubemultimedia.in/wp-content/uploads/2023/03/cube-web-logo-home-10.png"
              alt="Cube Multimedia Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((menu, index) => (
              <div key={index} className="relative group">
                <button className="px-3 py-2 text-white hover:text-yellow-300 text-sm flex items-center gap-1 transition-colors">
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

                {/* Dropdown */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-lg shadow-xl z-50 w-[400px]">
                    <div className="p-4">
                      <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span>{menu.icon}</span>
                        {menu.label}
                      </h4>
                      <div className="space-y-1 max-h-96 overflow-y-auto">
                        {menu.items.map((item, i) => (
                          <Link
                            key={i}
                            to={item.path}
                            onClick={handleLinkClick}
                            className="block text-sm text-gray-700 py-2 px-3 hover:text-red-700 hover:bg-gray-50 rounded transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

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
        <div className="lg:hidden bg-red-950 text-white border-t border-red-800">
          {menuItems.map((menu, index) => (
            <div key={index} className="border-b border-red-800">
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === index ? null : index)
                }
                className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-red-800 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span>{menu.icon}</span>
                  {menu.label}
                </span>
                <span>{activeDropdown === index ? "▲" : "▼"}</span>
              </button>
              {activeDropdown === index && (
                <div className="px-6 py-2 space-y-2 bg-red-950">
                  {menu.items.map((item, i) => (
                    <Link
                      key={i}
                      to={item.path}
                      onClick={handleLinkClick}
                      className="block text-gray-200 hover:text-yellow-300 text-sm py-1 transition-colors"
                    >
                      ▸ {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="p-4">
            <button className="w-full px-4 py-2 border border-white text-white hover:bg-white/10 rounded text-sm transition-colors">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
