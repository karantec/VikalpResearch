import React from "react";

const StartupToScaleJourney = () => {
  const sectionData = {
    title: "From Startup to Scale-Up — We Power Your Growth.",
  };

  const journeyStages = [
    {
      id: 1,
      stage: "Start a Business",
      icon: "🚀",
      services: [
        "Private Limited Company Registration",
        "Limited Liability Partnership Registration",
        "Sole Proprietorship Registration",
        "Nidhi Company Registration",
        "Producer Company Registration",
        "One Person Company",
        "Section 8 Registration",
        "Partnership Firm Registration",
      ],
      testimonial: {
        quote:
          "I would like to thank Mayank and Zolvit team for timely completion and registration of our company. They explained everything clearly and made the process smooth.",
        author: "Mayur Sharma",
        company: "Director, Durotech Tech Pvt. Ltd",
        image: "👨‍💼",
      },
      certificateIcon: "📜",
      theme: "blue",
    },
    {
      id: 2,
      stage: "Operate with Clarity",
      icon: "⚖️",
      services: [
        "GST Registration",
        "Accounting & Bookkeeping",
        "Payroll Management",
        "TDS Return Filing/Compliance",
        "Income Tax Returns",
        "Transfer Pricing",
        "International Tax",
      ],
      testimonial: {
        quote:
          "All business GST is filed without worries. Zolvit handles everything. The Zolvit platform is better than any CA. I highly recommend Zolvit to any business owner looking for hassle-free.",
        author: "Parikshit Agarwal",
        company: "CEO, M/s",
        image: "👨‍💼",
      },
      certificateIcon: "📊",
      theme: "blue",
    },
    {
      id: 3,
      stage: "Secure a Legacy",
      icon: "🛡️",
      services: [
        "Trademark Registration",
        "Copyright Registration",
        "Patent Registration",
        "MSME Registration",
        "Design Registration",
        "ISO Certification",
        "Startup India Registration",
      ],
      testimonial: {
        quote:
          "I want to let you know that my experience with the registration was pleasant and I'm grateful. Zolvit team did their best and I have successfully registered my Trademark.",
        author: "Nandhini M",
        company: "Founder, New Adventures",
        image: "👩‍💼",
      },
      certificateIcon: "✓",
      theme: "blue",
    },
  ];

  const stats = [
    { value: "350+", label: "Team Members" },
    { value: "500+", label: "Partner Experts" },
    { value: "5 Lakhs+", label: "Happy Customers" },
    { value: "1 Lakh+", label: "Filings in 2024" },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {sectionData.title}
          </h2>
        </div>

        {/* Journey Timeline */}
        <div className="space-y-8">
          {journeyStages.map((stage, index) => (
            <div key={stage.id} className="relative">
              {/* Timeline Connector */}
              {index < journeyStages.length - 1 && (
                <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-red-300 hidden md:block"></div>
              )}

              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-gray-200 hover:border-red-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                  {/* Left Side - Services */}
                  <div>
                    {/* Stage Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                        {stage.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {stage.stage}
                      </h3>
                    </div>

                    {/* Services List */}
                    <div className="space-y-2">
                      {stage.services.map((service, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-2 hover:bg-red-50 rounded transition-colors cursor-pointer group"
                        >
                          <span className="text-red-600 group-hover:text-red-700">
                            📄
                          </span>
                          <span className="text-sm text-gray-700 group-hover:text-gray-900">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Visual & Testimonial */}
                  <div className="flex flex-col gap-4">
                    {/* Certificate/Document Visual */}
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-4 flex items-center justify-center relative h-48 border-2 border-gray-300">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center border-2 border-red-500 mx-auto">
                          <span className="text-5xl">
                            {stage.certificateIcon}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                            Fast Approved
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Card */}
                    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-6 shadow-lg">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                          {stage.testimonial.image}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm mb-4 italic leading-relaxed">
                            "{stage.testimonial.quote}"
                          </p>
                        </div>
                      </div>
                      <div className="border-t border-red-400 pt-3">
                        <p className="font-bold text-sm">
                          {stage.testimonial.author}
                        </p>
                        <p className="text-xs text-red-200">
                          {stage.testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-red-500">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
              The Numbers Behind the Journey
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Refer a Friend Button (Fixed position) */}
      </div>
    </div>
  );
};

export default StartupToScaleJourney;
