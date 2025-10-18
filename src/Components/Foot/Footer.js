import React from "react";

const Footer = () => {
  const footerData = {
    trademark: {
      title: "TRADEMARK",
      links: [
        "Trademark Search",
        "Trademark Registration",
        "Trademark Objection",
        "Trademark Infringement",
        "Well-known Trademark",
        "International Trademark Registration",
        "Trademark Class List",
      ],
    },
    gst: {
      title: "GST",
      links: [
        "HSN Code Finder",
        "Online GST Registration",
        "GST Return filing",
        "GST Cancellation",
        "GST Revocation",
      ],
    },
    company: {
      title: "COMPANY REGISTRATION",
      links: [
        "Company Name Search",
        "Company Registration",
        "PVT LTD Company Registration",
        "LLP Registration",
        "Sole Proprietorship Registration",
        "OPC Registration",
        "Partnership Firm Registration",
        "Start-up India Registration",
      ],
    },
    itr: {
      title: "ITR",
      links: ["IT Return Filing"],
    },
    patent: {
      title: "PATENT",
      links: [
        "Patent Search",
        "Patent Registration",
        "Provisional Patent Application",
        "Patent Infringement",
      ],
    },
    bns: {
      title: "BNS",
      links: ["BNS Sections"],
    },
    copyright: {
      title: "COPYRIGHT",
      links: [
        "Copyright Registration",
        "Copyright Music Protection",
        "Copyright Infringement",
      ],
    },
  };

  const expertServices = [
    "Online Lawyer Consultation",
    "Online CA Consultation",
    "Company Secretary Services",
    "Consumer Complaints",
    "Lawyer Services",
    "Intellectual Property Lawyers",
  ];

  const calculators = [
    "GST Calculator",
    "TDS Calculator",
    "HRA Calculator",
    "Gratuity Calculator",
    "SIP Calculator",
    "NPS Calculator",
    "EPF Calculator",
    "Business Set-up Calculator",
    "PPF Calculator",
    "Income Tax Calculator",
    "Simple Compound Interest Calculator",
    "Salary Calculator",
    "Retirement Planning Calculator",
    "RD Calculator",
    "Mutual Fund Calculator",
    "FD Calculator",
    "Home Loan EMI Calculator",
    "EMI Calculator",
    "Lumpsum Calculator",
  ];

  const downloads = [
    "Rental Agreement Format",
    "GST Invoice Format",
    "Income Certificate Format",
    "Power of Attorney Format",
    "Affidavit Format",
    "Salary Slip Sample",
    "Appointment Letter Format",
    "Relieving Letter Format",
    "Legal Heir Certificate Format",
    "Cigarette Free Rent Receipt",
    "Commercial Rental Agreement",
    "Consent Letter for GST Registration Format",
    "No-Objection Certificate (NOC) Format",
    "Partnership Deed Format",
    "Experience Letter Format",
    "Resignation Letter Format",
    "Offer Letter Format",
    "Bonafide Certificate Format",
    "Delivery Challan Format",
    "Authorised Signatory in GST",
  ];

  const bottomLinks = [
    "About Us",
    "Media",
    "Press Release",
    "Contact Us",
    "Partner with us",
    "Satisfaction Guarantee",
    "Article",
    "News",
    "Sitemap",
  ];

  return (
    <footer className="bg-gradient-to-br from-[#4a0e0e] via-[#2d0a0a] to-[#1a0505] text-white py-8 md:py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-start">
          <h2 className="text-2xl md:text-3xl font-bold text-red-500">
            zolvit
          </h2>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Trademark */}
          <div>
            <h3 className="text-xs md:text-sm font-bold mb-3 md:mb-4 border-b-2 border-red-500 pb-2 inline-block">
              {footerData.trademark.title}
            </h3>
            <ul className="space-y-1.5 md:space-y-2">
              {footerData.trademark.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-red-400 text-xs transition-colors block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* GST */}
          <div>
            <h3 className="text-xs md:text-sm font-bold mb-3 md:mb-4 border-b-2 border-red-500 pb-2 inline-block">
              {footerData.gst.title}
            </h3>
            <ul className="space-y-1.5 md:space-y-2">
              {footerData.gst.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-red-400 text-xs transition-colors block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Registration */}
          <div>
            <h3 className="text-xs md:text-sm font-bold mb-3 md:mb-4 border-b-2 border-red-500 pb-2 inline-block">
              {footerData.company.title}
            </h3>
            <ul className="space-y-1.5 md:space-y-2">
              {footerData.company.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-red-400 text-xs transition-colors block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ITR */}
          <div>
            <h3 className="text-xs md:text-sm font-bold mb-3 md:mb-4 border-b-2 border-red-500 pb-2 inline-block">
              {footerData.itr.title}
            </h3>
            <ul className="space-y-1.5 md:space-y-2">
              {footerData.itr.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-red-400 text-xs transition-colors block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-xs md:text-sm font-bold mb-3 md:mb-4 mt-6 md:mt-8 border-b-2 border-red-500 pb-2 inline-block">
              {footerData.patent.title}
            </h3>
            <ul className="space-y-1.5 md:space-y-2">
              {footerData.patent.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-red-400 text-xs transition-colors block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* BNS */}
          <div>
            <h3 className="text-xs md:text-sm font-bold mb-3 md:mb-4 border-b-2 border-red-500 pb-2 inline-block">
              {footerData.bns.title}
            </h3>
            <ul className="space-y-1.5 md:space-y-2">
              {footerData.bns.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-red-400 text-xs transition-colors block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          <div>
            <h3 className="text-xs md:text-sm font-bold mb-3 md:mb-4 border-b-2 border-red-500 pb-2 inline-block">
              {footerData.copyright.title}
            </h3>
            <ul className="space-y-1.5 md:space-y-2">
              {footerData.copyright.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-red-400 text-xs transition-colors block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Talk to Experts */}
        <div className="mb-6 md:mb-8">
          <h3 className="text-xs md:text-sm font-bold mb-3 md:mb-4 border-b-2 border-red-500 pb-2 inline-block">
            TALK TO EXPERTS
          </h3>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {expertServices.map((service, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-300 hover:text-red-400 text-xs transition-colors"
              >
                {service}
              </a>
            ))}
          </div>
        </div>

        {/* Calculators */}
        <div className="mb-6 md:mb-8">
          <h3 className="text-xs md:text-sm font-bold mb-3 md:mb-4 border-b-2 border-red-500 pb-2 inline-block">
            CALCULATORS
          </h3>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {calculators.map((calculator, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-300 hover:text-red-400 text-xs transition-colors"
              >
                {calculator}
              </a>
            ))}
          </div>
        </div>

        {/* Downloads */}
        <div className="mb-6 md:mb-8">
          <h3 className="text-xs md:text-sm font-bold mb-3 md:mb-4 border-b-2 border-red-500 pb-2 inline-block">
            DOWNLOADS
          </h3>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {downloads.map((download, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-300 hover:text-red-400 text-xs transition-colors"
              >
                {download}
              </a>
            ))}
          </div>
        </div>

        {/* Legal Text */}
        <div className="mb-4 md:mb-6 text-xs text-gray-400 leading-relaxed">
          <p className="mb-3 md:mb-4">
            By continuing past this page, you agree to our{" "}
            <a href="#" className="text-red-400 hover:underline">
              Terms of Service
            </a>
            ,{" "}
            <a href="#" className="text-red-400 hover:underline">
              Cookie Policy
            </a>
            ,{" "}
            <a href="#" className="text-red-400 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-red-400 hover:underline">
              Refund Policy
            </a>
            . © UberVI Business Process Services Private Limited. All rights
            reserved.
          </p>
          <p className="mb-3 md:mb-4">
            UberVI Business Process Services Private Limited. CIN -
            U74900TG2018PTC128144, GSTIN - 36AABCU2420C1ZM, Registered Office
            Address - F-27, Neway Shunya Apartments Anna Nagar East, Chennai,
            Tamil Nadu 600102, India.
          </p>
          <p>
            Please note that we are a facilitating platform enabling access to
            reliable professionals. We are not a law firm and do not provide
            legal services ourselves. The information on this website is for the
            purpose of knowledge only and should not be relied upon as legal
            advice or opinion.
          </p>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-700 pt-4 md:pt-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
            <div className="flex flex-wrap gap-3 md:gap-6">
              {bottomLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-red-400 text-xs transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3 md:gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
