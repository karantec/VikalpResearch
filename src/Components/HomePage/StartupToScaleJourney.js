import React from "react";

const StartupToScaleUp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            From Startup to Scale-Up
          </h1>
          <p className="text-lg sm:text-xl text-red-600 font-semibold">
            We Power Your Growth
          </p>
        </div>

        {/* Start a Business Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border-t-4 border-red-600">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mr-3 sm:mr-4 text-sm sm:text-base flex-shrink-0">
                1
              </span>
              <span className="leading-tight">Start a Business</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Private Limited Company Registration",
                    "Limited Liability Partnership Registration",
                    "One Person Company Registration",
                    "Producer Company Registration",
                    "Sole Proprietorship Registration",
                    "Partnership Firm Registration",
                    "Startup India Registration",
                    "NGO Registration",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start text-sm sm:text-base text-gray-700 hover:text-red-600 transition-colors cursor-pointer group"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 text-red-500 group-hover:text-red-700 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="group-hover:underline">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-center order-first md:order-last">
                <img
                  src="https://assets.vakilsearch.com/ic-start-business-services-zpf.png"
                  alt="Business Registration Documents"
                  className="rounded-lg shadow-lg max-w-full h-auto w-full sm:w-auto"
                />
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-red-50 to-rose-50 p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-red-600">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                {/* Left Side - Image */}
                <div className="w-full sm:w-2/5 flex justify-center flex-shrink-0">
                  <img
                    src="https://assets.vakilsearch.com/ic-start-business-testimonials-01-zpf.png"
                    alt="Client"
                    className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border-2 border-red-300 object-cover"
                  />
                </div>

                {/* Right Side - Text */}
                <div className="w-full sm:w-3/5">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mb-2 mx-auto sm:mx-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 leading-relaxed text-center sm:text-left">
                    "Vignesh from Zolvit handled our PVT LTD company
                    registration smoothly and on time. The entire process was
                    professionally managed. I highly recommend their services
                    for company registration"
                  </p>

                  <div className="text-center sm:text-right">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">
                      Shahri Sharma,
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Swarag Elderly Care Pvt. Ltd.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operate with Clarity Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border-t-4 border-red-600">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mr-3 sm:mr-4 text-sm sm:text-base flex-shrink-0">
                2
              </span>
              <span className="leading-tight">Operate with Clarity</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div>
                <ul className="space-y-2 sm:space-y-3">
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
                      className="flex items-start text-sm sm:text-base text-gray-700 hover:text-red-600 transition-colors cursor-pointer group"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 text-red-500 group-hover:text-red-700 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="group-hover:underline text-1xl">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-center order-first md:order-last">
                <img
                  src="https://assets.vakilsearch.com/ic-manage-business-services-zpf.png"
                  alt="Business Management Services"
                  className="rounded-lg shadow-lg max-w-full h-auto w-full sm:w-auto"
                />
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-red-50 to-rose-50 p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-red-600">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                {/* Left Side - Image */}
                <div className="w-full sm:w-2/5 flex justify-center flex-shrink-0">
                  <img
                    src="https://assets.vakilsearch.com/ic-start-business-testimonials-02-zpf.png"
                    alt="Client"
                    className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border-2 border-red-300 object-cover"
                  />
                </div>

                {/* Right Side - Text */}
                <div className="w-full sm:w-3/5">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mb-2 mx-auto sm:mx-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 leading-relaxed text-center sm:text-left">
                    "I've been using Zolvit for annual accounting, and
                    Muhammad's support was exceptional. He quickly resolved
                    missed filings, streamlined the process, and kept everything
                    on track with clear communication.."
                  </p>

                  <div className="text-center sm:text-right">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">
                      Anis,
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Managing Director - Bella Code
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secure a Legacy Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border-t-4 border-red-600">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mr-3 sm:mr-4 text-sm sm:text-base flex-shrink-0">
                3
              </span>
              <span className="leading-tight">Secure a Legacy</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Traditional Registration",
                    "Copyright Registration",
                    "Patent Registration",
                    "Trademark Registration",
                    "Pledged Loan",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start text-sm sm:text-base text-gray-700 hover:text-red-600 transition-colors cursor-pointer group"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 text-red-500 group-hover:text-red-700 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="group-hover:underline">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-center order-first md:order-last">
                <img
                  src="https://assets.vakilsearch.com/ic-protect-business-services-zpf.png"
                  alt="Business Protection Services"
                  className="rounded-lg shadow-lg max-w-full h-auto w-full sm:w-auto"
                />
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-red-50 to-rose-50 p-4 sm:p-6 rounded-xl shadow-md border-l-4 border-red-600">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                {/* Left Side - Image */}
                <div className="w-full sm:w-2/5 flex justify-center flex-shrink-0">
                  <img
                    src="https://assets.vakilsearch.com/ic-start-business-testimonials-03-zpf.png"
                    alt="Client"
                    className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border-2 border-red-300 object-cover"
                  />
                </div>

                {/* Right Side - Text */}
                <div className="w-full sm:w-3/5">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mb-2 mx-auto sm:mx-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 leading-relaxed text-center sm:text-left">
                    "I reached out to Sourav for help with trademark
                    registration, and he guided me through every step smoothly.
                    His ongoing support has been invaluable, making the entire
                    process seamless."
                  </p>

                  <div className="text-center sm:text-right">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">
                      Sneha Jain
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Founder - Jaat Matrimony
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Stats */}
        <section className="bg-gradient-to-r from-red-600 to-rose-600 rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-10 px-2">
            The Numbers Behind the Journey
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { number: "350+", label: "Startups" },
              { number: "500+", label: "Projects" },
              { number: "5 Lakh+", label: "Clients" },
              { number: "1 Lakh+", label: "Registrations" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2">
                  {item.number}
                </h3>
                <p className="text-red-100 text-sm sm:text-base lg:text-lg">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default StartupToScaleUp;
