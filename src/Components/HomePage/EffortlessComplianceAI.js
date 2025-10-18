import React from "react";

const EffortlessComplianceAI = () => {
  const sectionData = {
    title: "Effortless Compliance Backed by Smart AI",
    subtitle:
      "Get AI-powered tools, smarter insights, draft, and search for all your business needs",
  };

  const tools = [
    {
      id: 1,
      title: "Business Name Generator",
      description: "Generate creative and unique business names that stand out",
      icon: "💼",
    },
    {
      id: 2,
      title: "Document Generator",
      description:
        "Automatically create legal documents, contracts, and agreements",
      icon: "📄",
    },
  ];

  const aiAssistant = {
    name: "Zenus AI",
    message:
      "Not sure where to begin with your legal, tax, or compliance journey?",
    subMessage:
      "Have a question? Just ask, and I'll guide you through every step!",
    badge: "Zenus Giga",
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            {sectionData.title}
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            {sectionData.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Tools */}
          <div className="space-y-6">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 border-gray-200 hover:border-red-500 group"
              >
                <div className="flex items-start gap-4">
                  {/* Mobile/Device Mockup */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-32 h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-4 border-gray-700 shadow-xl overflow-hidden">
                        {/* Phone Screen */}
                        <div className="w-full h-full bg-white p-2">
                          <div className="w-full h-full bg-gradient-to-br from-red-50 to-red-100 rounded flex flex-col items-center justify-center p-2">
                            <span className="text-3xl mb-2">{tool.icon}</span>
                            <div className="w-full space-y-1">
                              <div className="h-2 bg-red-300 rounded"></div>
                              <div className="h-2 bg-red-200 rounded w-3/4"></div>
                              <div className="h-2 bg-red-200 rounded w-1/2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Floating Label */}
                      <div className="absolute -left-6 top-4 bg-white px-3 py-2 rounded shadow-md border border-gray-200">
                        <p className="text-xs font-semibold text-gray-700">
                          {tool.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Click to generate
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-gray-600">{tool.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - AI Assistant */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 border-2 border-red-500">
              {/* Zenus AI Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full shadow-lg border-2 border-white">
                  <span className="font-bold">{aiAssistant.name}</span>
                </div>
              </div>

              {/* AI Character */}
              <div className="flex flex-col items-center mt-8">
                <div className="relative mb-6">
                  {/* Character Circle */}
                  <div className="w-32 h-32 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center border-4 border-red-500 shadow-lg">
                    <div className="text-6xl">🤖</div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-400 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-red-300 rounded-full animate-pulse delay-75"></div>
                </div>

                {/* Message */}
                <div className="text-center space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    {aiAssistant.message}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {aiAssistant.subMessage}
                  </p>

                  {/* Badge */}
                  <div className="inline-block">
                    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full shadow-md text-sm font-semibold">
                      {aiAssistant.badge}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                      Ask Zenus AI
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-red-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-red-300 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>

        {/* Refer a Friend Button (Fixed position) */}
      </div>
    </div>
  );
};

export default EffortlessComplianceAI;
