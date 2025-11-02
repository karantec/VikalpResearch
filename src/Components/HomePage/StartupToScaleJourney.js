import React from "react";

const StartupToScaleUp = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 relative">
        {/* Vertical timeline image spanning all three sections */}
        {/* <div
          className="absolute left-1 sm:left-2 top-64 sm:top-72 hidden md:block z-20"
          style={{ height: "calc(100% - 28rem)" }}
        >
          <img
            src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1761738543/cubemedia/Copilot_20251029_171739-removebg-preview_n8c0fy.png"
            alt="Timeline"
            className="h-full w-16 sm:w-20 lg:w-24 object-fill"
            style={{ minHeight: "300px" }}
          />
        </div> */}
     <div
  className="absolute left-[70px] sm:left-[76px] top-72 sm:top-80 hidden md:flex flex-col items-center z-20"
  style={{ height: "calc(100% - 26rem)" }}
>
  <div className="w-[3px] bg-red-600 h-full relative">
    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-2 border-white"></span>
  </div>
</div>




        {/* MAIN HEADING */}
        <div className="text-center mb-12 sm:mb-16 relative z-10 px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">
            From Content Creation to Performance Marketing,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Cube Manages It All
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-normal max-w-full px-4 sm:px-0">
            All your brand needs under one roof-creative, social and growth
            strategies delivered seamlessly.
          </p>
        </div>

        {/* 1️⃣ CONTENT CREATION */}
        <section className="mb-10 sm:mb-14 mt-12 sm:mt-20 relative z-10">
          <div className="bg-gradient-to-br from-red-100 via-red-50 to-rose-100 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-t-4 border-red-600">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center ">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mr-3 sm:mr-4 text-sm sm:text-base flex-shrink-0">
                1
              </span>
              Content Creation
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-10">
              <div>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Scriptwriting & Storyboarding",
                    "Video Production & Shooting",
                    "Photography & Cinematic Captures",
                    "Video Editing & Post Production",
                    "Graphic Design & Visual Assets",
                    "Motion Graphics & Animation",
                    "Reels & Short-form Video Creation",
                    "Brand-focused Creative Campaigns",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start text-sm sm:text-base text-gray-700 hover:text-red-600 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 text-red-500 flex-shrink-0"
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
              <div className="flex justify-center items-start mt-4 md:mt-0">
                <div className="relative -mb-32 sm:-mb-48 md:-mb-64 z-10 w-full">
                  <img
                    src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1761544106/cubemedia/Script_Final_Draft_Locked_bkedbm.png"
                    alt="Start your business"
                    className="w-full max-w-xs sm:max-w-sm mx-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Testimonial Image 1 */}
            <div className="relative z-0 mt-16 sm:mt-20">
              <img
                src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1761737872/cubemedia/Testimonials_1_a5qcky.png"
                alt="Client Testimonial"
                className="w-full rounded-xl sm:rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* 3️⃣ PERFORMANCE MARKETING */}
        <section className="mb-12 sm:mb-20 relative z-10">
          <div className="bg-gradient-to-br from-red-100 via-red-50 to-rose-100 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-t-4 border-red-600">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mr-3 sm:mr-4 text-sm sm:text-base flex-shrink-0">
                3
              </span>
              Performance Marketing
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-10">
              <div>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Meta Ads & Google Ads Campaigns",
                    "Dedicated & Proven Sales Funnels",
                    "High ROI Growth Strategies",
                    "Retargeting & Lead Nurturing",
                    "Conversion Rate Optimization",
                    "Audience Segmentation & AI Targeting",
                    "Budget-efficient Paid Campaigns",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start text-sm sm:text-base text-gray-700 hover:text-red-600 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 text-red-500 flex-shrink-0"
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


              <div className="flex justify-center items-start mt-4 md:mt-0">
                <div className="relative -mb-32 sm:-mb-48 md:-mb-64 z-10 w-full">
                  <img
                    src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1761544106/cubemedia/Upload_Done_on_All_Social_Media_Handles_s73wbp.png"
                    alt="Start your business"
                    className="w-full max-w-xs sm:max-w-sm mx-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Testimonial Image 3 */}
            <div className="relative z-0 mt-24 sm:mt-32 mb-6 sm:mb-9">
              <img
                src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1761737872/cubemedia/Testimonials_2_kpxfuk.png"
                alt="Client Testimonial"
                className="w-full rounded-xl sm:rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* 2️⃣ SOCIAL MEDIA MANAGEMENT */}
        <section className="mb-10 sm:mb-14 mt-12 sm:mt-20 relative z-10">
          <div className="bg-gradient-to-br from-red-100 via-red-50 to-rose-100 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-t-4 border-red-600">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mr-3 sm:mr-4 text-sm sm:text-base flex-shrink-0">
                2
              </span>
              Social Media Management
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-10">
              <div>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Facebook, Instagram, YouTube, LinkedIn, Twitter",
                    "Follower Growth & Engagement Boost",
                    "Increasing Views & Audience Reach",
                    "Daily Posting on All Channels",
                    "Creative Storytelling & Content Strategy",
                    "Trend-based Campaigns & Hashtag Strategy",
                    "Community Engagement & Moderation",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start text-sm sm:text-base text-gray-700 hover:text-red-600 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-0.5 text-red-500 flex-shrink-0"
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
              <div className="flex justify-center items-start mt-4 md:mt-0">
                <div className="relative -mb-32 sm:-mb-48 md:-mb-64 z-10 w-full">
                  <img
                    src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1761544106/cubemedia/Your_Ads_are_LIVE_now_li9t0z.png"
                    alt="Start your business"
                    className="w-full max-w-xs sm:max-w-sm mx-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Testimonial Image 2 */}
            <div className="relative z-0 mt-24 sm:mt-32">
              <img
                src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1761737872/cubemedia/Testimonials_3_cuzxtt.png"
                alt="Client Testimonial"
                className="w-full rounded-xl sm:rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>



        {/* 🔢 The Numbers Behind the Journey */}
        <section
          className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-red-800 relative z-10"
          style={{
            boxShadow:
              "0 12px 40px 0 rgba(220,38,38,0.13), 0 2px 12px 0 rgba(220,38,38,0.08)",
          }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8 sm:mb-10 px-2 text-red-700">
            Cube Multimedia's Journey So Far
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            {[
              { number: "100+", label: "Happy Clients" },
              { number: "5CR+", label: "Revenue Generated for Clients" },
              { number: "25+", label: "Cities Served" },
              { number: "500+", label: "Projects Delivered" },
            ].map((item, index) => (
              <div key={index} className="px-2">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2 text-red-700">
                  {item.number}
                </h3>
                <p className="text-red-700 text-sm sm:text-base md:text-lg">
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
