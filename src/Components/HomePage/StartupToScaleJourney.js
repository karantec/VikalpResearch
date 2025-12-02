import React, { useEffect, useRef, useState } from "react";

const StartupToScaleUp = () => {
  // Stats: use numeric values for animation; mark `isCr` where we want CR formatting.
  const stats = [
    { value: 100, label: "Happy Clients" },
    { value: 5_00_00_000, label: "Revenue Generated for Clients", isCr: true }, // 5 Crore -> 50,000,000
    { value: 25, label: "Cities Served" },
    { value: 500, label: "Projects Delivered" },
  ];

  // Observer ref — will be attached to numbers section
  const numbersRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (!numbersRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          obs.unobserve(numbersRef.current); // animate only once
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(numbersRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 relative">
        <div
          className="absolute left-[70px] sm:left-[75px] top-72 sm:top-80 hidden md:flex flex-col items-center z-20"
          style={{ height: "calc(100% - 26rem)" }}
        >
          <div className="w-[2px] bg-red-600 h-full relative">
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-2 border-white"></span>
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 mb-6 sm:mb-8 flex items-center ">
              <span className="bg-red-600 text-white rounded-full w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center mr-3 sm:mr-4 text-sm sm:text-base flex-shrink-0"></span>
              Content Creation
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-10 ml-6">
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
                    src="12.png"
                    alt="Start your business"
                    className="w-full max-w-xs sm:max-w-sm mx-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="relative z-0 mt-24 sm:mt-32 px-4 sm:px-8 flex justify-center">
              <img
                src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1761737872/cubemedia/Testimonials_1_a5qcky.png"
                alt="Client Testimonial"
                className="w-full max-w-[960px] rounded-xl sm:rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* 3️⃣ PERFORMANCE MARKETING */}
        <section className="mb-12 sm:mb-20 relative z-10">
          <div className="bg-gradient-to-br from-red-100 via-red-50 to-rose-100 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-t-4 border-red-600">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 mb-6 sm:mb-8 flex items-center">
              <span className="bg-red-600 text-white rounded-full w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center mr-3 sm:mr-4 text-sm sm:text-base flex-shrink-0"></span>
              Performance Marketing
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-10 ml-6">
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
                    src="14.png"
                    alt="Start your business"
                    className="w-full max-w-xs sm:max-w-sm mx-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="relative z-0 mt-24 sm:mt-32 px-4 sm:px-8 flex justify-center">
              <img
                src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1761737872/cubemedia/Testimonials_2_kpxfuk.png"
                alt="Client Testimonial"
                className="w-full max-w-[960px] rounded-xl sm:rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* 2️⃣ SOCIAL MEDIA MANAGEMENT */}
        <section className="mb-10 sm:mb-14 mt-12 sm:mt-20 relative z-10">
          <div className="bg-gradient-to-br from-red-100 via-red-50 to-rose-100 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border-t-4 border-red-600">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 mb-6 sm:mb-8 flex items-center">
              <span className="bg-red-600 text-white rounded-full w-4 h-4 sm:w-6 sm:h-6 flex items-center justify-center mr-3 sm:mr-4 text-sm sm:text-base flex-shrink-0"></span>
              Social Media Management
            </h2>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-10 ml-6">
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
                    src="13.png"
                    alt="Start your business"
                    className="w-full max-w-xs sm:max-w-sm mx-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="relative z-0 mt-24 sm:mt-32 px-4 sm:px-8 flex justify-center">
              <img
                src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1761737872/cubemedia/Testimonials_3_cuzxtt.png"
                alt="Client Testimonial"
                className="w-full max-w-[960px] rounded-xl sm:rounded-2xl shadow-lg"
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

          <div
            ref={numbersRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center"
          >
            {stats.map((item, index) => (
              <CounterCard
                key={index}
                value={item.value}
                label={item.label}
                isCr={item.isCr}
                active={startCount}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// CounterCard component: animates from 0 to `value` when `active` becomes true
function CounterCard({ value = 0, label = "", isCr = false, active = false }) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  // Choose duration (ms). Larger numbers get longer duration but capped.
  const duration = Math.min(1600 + Math.log10(Math.max(value, 1)) * 300, 2200);

  useEffect(() => {
    if (!active) return;
    const startTime = performance.now();
    const start = 0;
    const end = Number(value);

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic timing for smooth finish
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * eased);
      setCount(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setCount(end); // ensure exact final value
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, value]);

  // Format displayed number
  const formatDisplay = () => {
    if (isCr) {
      // Convert absolute number back to crores (1 crore = 10,000,000)
      const crores = Math.round(count / 10_000_000); // integer crores
      return `${crores}CR+`;
    }
    // For smaller numbers, show simple `N+`. For thousands, show commas.
    if (count >= 1000) {
      return `${count.toLocaleString()}+`;
    }
    return `${count}+`;
  };

  return (
    <div className="px-2">
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-2 text-red-700">
        {formatDisplay()}
      </h3>
      <p className="text-red-700 text-sm sm:text-base md:text-lg">{label}</p>
    </div>
  );
}

export default StartupToScaleUp;
