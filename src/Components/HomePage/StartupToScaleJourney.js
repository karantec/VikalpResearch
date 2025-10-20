import React from "react";

const StartupToScaleUp = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 font-sans">
      {/* Main Heading */}
      <h2 className="text-3xl font-semibold text-center mb-10">
        From Startup to Scale-Up — We Power Your Growth.
      </h2>

      {/* Start a Business Section */}
      <section className="mb-16">
        {/* Section Heading */}
        <h3 className="text-xl font-semibold mb-4">Start a Business</h3>

        {/* List of Services */}
        <ul className="space-y-2 mb-6">
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
              className="flex items-center text-blue-600 hover:underline cursor-pointer"
            >
              {/* Icon */}
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        {/* Document Image */}
        <div className="flex justify-center mb-4">
          <img
            src="https://assets.vakilsearch.com/ic-start-business-services-zpf.png"
            alt="Documents"
            className="rounded shadow"
          />
        </div>

        {/* Completed Filing Box */}

        {/* Testimonial Quote */}
        <div className="bg-blue-100 p-4 rounded-lg shadow relative">
          {/* Quote Icon */}
          <svg
            className="w-6 h-6 absolute top-2 left-2 text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6 3a1 1 0 00-1 1v4a1 1 0 001 1h2v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1h-2V4a1 1 0 00-1-1H6zm8 0a1 1 0 00-1 1v4a1 1 0 001 1h2v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1h-2V4a1 1 0 00-1-1h-4z" />
          </svg>
          <p className="ml-8 text-gray-700">
            <em>
              "Vignesh from Zolvit handled our PVT LTD company registration
              smoothly and on time. The entire process was professionally
              managed. I highly recommend their services for company
              registration"
            </em>
          </p>
          {/* Client Info */}
          <div className="mt-2 flex items-center space-x-2">
            <img
              src="https://assets.vakilsearch.com/ic-start-business-testimonials-01-zpf.png"
              alt="Client"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold mb-0">Shahri Sharma,</p>
              <p className="text-sm text-gray-600 mb-0">
                Swarag Elderly Care Pvt. Ltd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operate with Clarity Section */}
      <section className="mb-16">
        {/* Section Heading */}
        <h3 className="text-xl font-semibold mb-4">Operate with Clarity</h3>

        {/* List of Services */}
        <ul className="space-y-2 mb-6">
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
              className="flex items-center text-blue-600 hover:underline cursor-pointer"
            >
              {/* Icon */}
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        {/* Filing Process Images */}
        <div className="flex justify-center gap-4 mb-4">
          <img
            src="https://assets.vakilsearch.com/ic-manage-business-services-zpf.png"
            alt="Filing Process 1"
            className="rounded shadow"
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Filing Process 2"
            className="rounded shadow"
          />
        </div>

        {/* GST Filing Completed */}
        <div className="bg-gray-100 p-4 rounded shadow mb-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold">
              GST Filing Completed Successfully!
            </h4>
            {/* Check Icon */}
            <svg
              className="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M16.707 5.293a1 1 0 00-1.414 0L8 13.586 4.707 10.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
            </svg>
          </div>
          <p className="text-sm mb-2">Completed Filing before Due date</p>
        </div>

        {/* Testimonial Quote */}
        <div className="bg-blue-100 p-4 rounded-lg shadow relative">
          {/* Quote Icon */}
          <svg
            className="w-6 h-6 absolute top-2 left-2 text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6 3a1 1 0 00-1 1v4a1 1 0 001 1h2v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1h-2V4a1 1 0 00-1-1H6zm8 0a1 1 0 00-1 1v4a1 1 0 001 1h2v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1h-2V4a1 1 0 00-1-1h-4z" />
          </svg>
          <p className="ml-8 text-gray-700">
            <em>
              "Efficient and accurate tax filing process. Highly recommend for
              seamless service."
            </em>
          </p>
          {/* Client Info */}
          <div className="mt-2 flex items-center space-x-2">
            <img
              src="https://assets.vakilsearch.com/ic-start-business-testimonials-02-zpf.png"
              alt="Client"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold mb-0">Arun</p>
              <p className="text-sm text-gray-600 mb-0">
                Managing Director - Kala Curls
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secure a Legacy Section */}
      <section>
        {/* Section Heading */}
        <h3 className="text-xl font-semibold mb-4">Secure a Legacy</h3>

        {/* List of Services */}
        <ul className="space-y-2 mb-6">
          {[
            "Traditional Registration",
            "Copyright Registration",
            "Patent Registration",
            "Trademark Registration",
            "Pledged Loan",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center text-blue-600 hover:underline cursor-pointer"
            >
              {/* Icon */}
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        {/* Legacy Image */}
        <div className="flex justify-center mb-4">
          <img
            src="https://assets.vakilsearch.com/ic-protect-business-services-zpf.png"
            alt="Legacy"
            className="rounded shadow"
          />
        </div>

        {/* Legacy Testimonial */}
        <div className="bg-blue-100 p-4 rounded-lg shadow relative mb-4">
          {/* Quote Icon */}
          <svg
            className="w-6 h-6 absolute top-2 left-2 text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M6 3a1 1 0 00-1 1v4a1 1 0 001 1h2v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1h-2V4a1 1 0 00-1-1H6zm8 0a1 1 0 00-1 1v4a1 1 0 001 1h2v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1h-2V4a1 1 0 00-1-1h-4z" />
          </svg>
          <p className="ml-8 text-gray-700">
            <em>
              "The legacy registration process was smooth and reliable. Highly
              valued for securing our future."
            </em>
          </p>
          {/* Client Info */}
          <div className="mt-2 flex items-center space-x-2">
            <img
              src="https://assets.vakilsearch.com/ic-start-business-testimonials-03-zpf.png"
              alt="Client"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold mb-0">Sneha</p>
              <p className="text-sm text-gray-600 mb-0">Jain - Family Legacy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Stats */}
      <section className="mt-8 bg-gray-100 p-6 rounded shadow text-center">
        <h3 className="text-2xl font-semibold mb-4">
          The Numbers Behind the Journey
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { number: "350+", label: "Startups" },
            { number: "500+", label: "Projects" },
            { number: "5 Lakh+", label: "Clients" },
            { number: "1 Lakh+", label: "Registrations" },
          ].map((item, index) => (
            <div key={index}>
              <h4 className="text-xl font-bold">{item.number}</h4>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StartupToScaleUp;
