import React from "react";

const StartupToScaleUp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        {/* MAIN HEADING */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            From Startup to Scale-Up
          </h1>
          <p className="text-lg sm:text-xl text-red-600 font-semibold">
            We Power Your Growth
          </p>
        </div>

        {/* 1️⃣ START YOUR BUSINESS */}
        <section className="mb-14 mt-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-red-600">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                1
              </span>
              Start Your Business
            </h2>

            <div className="grid md:grid-cols-2 gap-10 mb-10">
              <div>
                <ul className="space-y-3">
                  {[
                    "Private Limited Company",
                    "Limited Liability Partnership",
                    "One Person Company",
                    "Sole Proprietorship",
                    "Partnership Firm",
                    "Nidhi Company",
                    "Section 8 Company",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start text-gray-700 hover:text-red-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 mr-3 mt-0.5 text-red-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Image positioned above testimonial */}
              <div className="flex justify-center items-start">
                <div className="relative -mb-64 z-10">
                  <img
                    src="https://assets.vakilsearch.com/ic-start-business-services-zpf.png"
                    alt="Start your business"
                    className="rounded-xl shadow-lg w-full sm:w-auto max-w-sm object-contain pt-16 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Testimonial Card 1 */}
            <div
              className="relative z-0 -mb-18
            "
            >
              <div className="bg-gradient-to-r from-red-600 to-rose-600 p-8 mb-4 rounded-2xl shadow-lg transform rotate-1 mt-32">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src="https://assets.vakilsearch.com/ic-start-business-testimonials-01-zpf.png"
                      alt="Client"
                      className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-xl object-cover"
                    />
                  </div>
                  <div className="text-white flex-1">
                    <div className="mb-6">
                      <svg
                        className="w-10 h-20 text-white/30"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-base sm:text-lg leading-relaxed mb-6">
                      Vignesh from Zolvit handled our PVT LTD company
                      registration smoothly and on time. The entire process was
                      professionally managed. I highly recommend their services
                      for company registration
                    </p>
                    <p className="font-semibold text-lg">Shahri Sharma,</p>
                    <p className="text-red-100 text-sm">
                      Swarag Elderly Care Pvt. Ltd.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2️⃣ OPERATE WITH CLARITY */}
        <section className="mb-14 mt-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-red-600">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                2
              </span>
              Operate with Clarity
            </h2>

            <div className="grid md:grid-cols-2 gap-10 mb-10">
              <div>
                <ul className="space-y-3">
                  {[
                    "GST Registration",
                    "Change Company Address",
                    "Director Replacement",
                    "Mandatory Annual Filing",
                    "Labour Compliance",
                    "Shop and Establishment License",
                    "Accounting & Tax",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start text-gray-700 hover:text-red-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 mr-3 mt-0.5 text-red-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Image positioned above testimonial */}
              <div className="flex justify-center items-start">
                <div className="relative -mb-64 z-10">
                  <img
                    src="https://assets.vakilsearch.com/ic-manage-business-services-zpf.png"
                    alt="Operate with clarity"
                    className="rounded-xl shadow-lg w-full sm:w-auto max-w-sm object-contain p-2 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="relative z-0">
              <div className="bg-gradient-to-r from-red-600 to-rose-600 p-8 rounded-2xl shadow-lg transform rotate-1 mt-32">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src="https://assets.vakilsearch.com/ic-start-business-testimonials-02-zpf.png"
                      alt="Client"
                      className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-xl object-cover"
                    />
                  </div>
                  <div className="text-white flex-1">
                    <div className="mb-6">
                      <svg
                        className="w-10 h-20 text-white/30"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-base sm:text-lg leading-relaxed mb-6">
                      I've been using Zolvit for annual accounting, and
                      Muhammad's support was exceptional. He quickly resolved
                      missed filings and ensured everything was on track.
                    </p>
                    <p className="font-semibold text-lg">Anis</p>
                    <p className="text-red-100 text-sm">
                      Managing Director – Bella Code
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3️⃣ SCALE UP WITH STRATEGY */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-red-600">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4">
                3
              </span>
              Scale Up with Strategy
            </h2>

            <div className="grid md:grid-cols-2 gap-10 mb-10">
              <div>
                <ul className="space-y-3">
                  {[
                    "Trademark Registration",
                    "Patent Filing",
                    "MSME & ISO Certification",
                    "Data Protection Advisory",
                    "Tax Planning",
                    "Legal Consultancy",
                    "Startup Valuation",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start text-gray-700 hover:text-red-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 mr-3 mt-0.5 text-red-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Image positioned above testimonial */}
              <div className="flex justify-center items-start">
                <div className="relative -mb-64 z-10">
                  <img
                    src="https://assets.vakilsearch.com/ic-protect-business-services-zpf.png"
                    alt="Scale up with strategy"
                    className="rounded-xl shadow-lg w-full sm:w-auto max-w-sm object-contain p-2 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="relative z-0 mb-9">
              <div className="bg-gradient-to-r from-red-600 to-rose-600 p-8 rounded-2xl shadow-lg transform rotate-1 mt-32">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src="https://assets.vakilsearch.com/ic-start-business-testimonials-03-zpf.png"
                      alt="Client"
                      className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-xl object-cover"
                    />
                  </div>
                  <div className="text-white flex-1">
                    <div className="mb-6">
                      <svg
                        className="w-10 h-20 text-white/30"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-base sm:text-lg leading-relaxed mb-6">
                      I reached out to Sourav for help with trademark
                      registration, and he guided me through every step
                      smoothly. His ongoing support has been invaluable, making
                      the entire process seamless.
                    </p>
                    <p className="font-semibold text-lg">Parmjeet Singh</p>
                    <p className="text-red-100 text-sm">
                      Founder - Jaat Matrimony
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🔢 The Numbers Behind the Journey */}
        <section className="bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl shadow-2xl p-10 text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
            The Numbers Behind the Journey
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "350+", label: "Startups" },
              { number: "500+", label: "Projects" },
              { number: "5 Lakh+", label: "Clients" },
              { number: "1 Lakh+", label: "Registrations" },
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-4xl sm:text-5xl font-bold mb-2">
                  {item.number}
                </h3>
                <p className="text-red-100 text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default StartupToScaleUp;
