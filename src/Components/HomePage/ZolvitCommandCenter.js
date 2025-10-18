import React from "react";

const Zolvit360CommandCenter = () => {
  const sectionData = {
    title: "Zolvit 360 - Your Command Centre for Compliance",
    subtitle:
      "Effortless compliance, instant expert support, and smart insights all in one place",
  };

  const features = [
    {
      id: 1,
      icon: "📊",
      title: "Unified Dashboard",
      expanded: false,
    },
    {
      id: 2,
      icon: "⚙️",
      title: "Automated Compliance",
      description:
        "Stay ahead with smart alerts and automatically manage filings to avoid missed deadlines.",
      expanded: true,
    },
    {
      id: 3,
      icon: "🔒",
      title: "Secure Document Vault",
      expanded: false,
    },
    {
      id: 4,
      icon: "👥",
      title: "Expert Connect",
      expanded: false,
    },
  ];

  const complianceTasks = [
    {
      id: 1,
      text: "Display of director of the co.next to their...",
      status: "August 🔔",
    },
    {
      id: 2,
      text: "Direct Certification (Information from Company)...",
      status: "August 🔔",
    },
    { id: 3, text: "Payment of TDS...", status: "August 🔔" },
    { id: 4, text: "Payment of ESI from own salary...", status: "July 🔔" },
    { id: 5, text: "Payment of PDS from such payment...", status: "August 🔔" },
    {
      id: 6,
      text: "Maintenance of Wage Slip from 20th...",
      status: "August 🔔",
    },
    { id: 7, text: "Payment of Wages...", status: "July 🔔" },
    {
      id: 8,
      text: "Signed Partnership & body association...",
      status: "August 🔔",
    },
    { id: 9, text: "SQC 523 (Dealer Retention)...", status: "July 🔔" },
  ];

  const buttonText = "Signup for Zolvit 360";

  return (
    <div className="bg-gradient-to-br from-[#4a0e0e] via-[#2d0a0a] to-[#1a0505] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            {sectionData.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            {sectionData.subtitle}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left Side - Features */}
          <div className="space-y-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`rounded-lg transition-all duration-300 ${
                  feature.expanded
                    ? "bg-gradient-to-br from-red-900 to-red-950 border-2 border-red-500 shadow-lg shadow-red-900/50"
                    : "bg-gradient-to-br from-gray-800 to-gray-900 hover:from-red-900 hover:to-red-950 border border-gray-700 hover:border-red-500"
                } p-5 md:p-6`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{feature.icon}</span>
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
                {feature.expanded && feature.description && (
                  <p className="mt-3 text-sm text-gray-300 ml-11">
                    {feature.description}
                  </p>
                )}
              </div>
            ))}

            {/* Signup Button */}
            <div className="pt-4">
              <button className="w-full bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-base md:text-lg">
                {buttonText}
              </button>
            </div>
          </div>

          {/* Right Side - Dashboard Preview */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-lg shadow-2xl overflow-hidden border-4 border-gray-800">
            {/* Dashboard Frame */}
            <div className="p-4">
              {/* Dashboard Content */}
              <div className="bg-white rounded-lg overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-300 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 font-bold">⚡ zolvit</span>
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                      360
                    </span>
                  </div>
                  <div className="flex gap-4 text-xs">
                    <span className="font-semibold">Compliance Department</span>
                    <span className="font-semibold">Compliance Category</span>
                    <span className="font-semibold">Due Date</span>
                  </div>
                </div>

                {/* Sidebar Navigation */}
                <div className="flex">
                  <div className="w-48 bg-gray-900 text-white p-4 space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <span>🏠</span>
                      <span>Home</span>
                    </div>
                    <div className="flex items-center gap-2 bg-red-600 px-2 py-1 rounded">
                      <span>📋</span>
                      <span>Compliance</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <span>📅</span>
                      <span>Zolvit</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <span>📊</span>
                      <span>Calendar</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <span>📁</span>
                      <span>Documents</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <span>📈</span>
                      <span>Reports</span>
                    </div>
                    <div className="flex items-center gap-2 text-red-400">
                      <span>⭐</span>
                      <span>Best in MS</span>
                      <span className="text-xs">NEW</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <span>👥</span>
                      <span>Users & Roles</span>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 p-4 bg-white">
                    <div className="space-y-2">
                      {/* Stats */}
                      <div className="flex gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-red-600">
                            All india
                          </div>
                          <div className="text-xs text-gray-500">4 States</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold">
                            Needs action (61)
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold">
                            In-progress (40)
                          </div>
                        </div>
                      </div>

                      {/* Compliance List */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-semibold border-b pb-2">
                          <input type="checkbox" className="w-4 h-4" />
                          <span>Compliance</span>
                        </div>
                        {complianceTasks.map((task) => (
                          <div
                            key={task.id}
                            className="flex items-center gap-2 text-xs py-1 hover:bg-gray-50"
                          >
                            <input type="checkbox" className="w-3 h-3" />
                            <span className="flex-1 text-gray-700">
                              {task.text}
                            </span>
                            <span className="text-orange-500 text-xs">
                              {task.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Refer a Friend Button (Fixed position) */}
      </div>
    </div>
  );
};

export default Zolvit360CommandCenter;
