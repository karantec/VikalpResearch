import React, { useEffect, useRef } from "react";

const SuccessPrioritySection = () => {
  const scrollContainerRef = useRef(null);

  const sectionData = {
    title: "Your success is our priority",
    quote:
      '"We started Zolvit because we saw brilliant entrepreneurs being held back by overwhelming compliance. Our mission is to be the partner you can always count on.',
    description:
      'We combine technology with a team of over 1,000 experts to handle these complexities for you. Your success is our priority, because when you thrive, India thrives"',
    founder: "Hrishikesh Datar",
    position: "Founder & CEO, Zolvit",
  };

  const testimonials = [
    {
      id: 1,
      name: "Divya Trivedi",
      text: "Authit Jshah has done wonderful job. He has given his 100 % to my work. Thank you so much!",
      avatar: "👤",
    },
    {
      id: 2,
      name: "Rishman Enterprises",
      text: "Hi, Mr. Authit. I applied for Trade Mark and I sincerely appreciate your flexibility and willingness to help. I wished to express my personal gratitude for the effort and extra attention you have provided. Thank you for your confidence and support ❤️😍😍",
    },
    {
      id: 3,
      name: "Shilesh Bhattacharya",
      text: "I am amazed and efficient... That is what I have to say about the service given. Mr. N Aume. Authit, who explained me the process in an easier to the organization. Wish him well!",
    },
    {
      id: 4,
      name: "Rajan Dhirvi",
      text: "Big shoutout to Vaddletech and Adity shrey manghere for their stellar support in getting our trademark accepted! Their dedication and determination throughout the process truly made the process seamless. Grateful for their exceptional service!",
    },
    {
      id: 5,
      name: "abxxxxxx25@gmail.com",
      text: "I had a great experience with Krishan Wadhwa for my company registration and GST acquisition. The service for nidhi and TAN was professional and hassle-free. Very happy with the support and guidance provided throughout the process. I truly appreciate the responsiveness and clear communication at every step. She went above and beyond to ensure everything was handled perfectly highly recommended!",
    },
    {
      id: 6,
      name: "Shirey Shah",
      text: "I wish to express my sincere gratitude to Mr. Krishan Wadhwa and the team at Zolvit Chain from Vaddletech were really helpful for filing trademark registration form. Will surely recommend!",
    },
    {
      id: 7,
      text: "Overall, it has been a very good experience so far. Thanks to the team.",
    },
    {
      id: 8,
      text: "Fast, efficient, and effective. Multiple words at a single point. Always there and help so much.",
    },
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollInterval;
    let isPaused = false;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && scrollContainer) {
          scrollContainer.scrollTop += 1;

          // Reset to top when reached halfway (seamless loop)
          if (scrollContainer.scrollTop >= scrollContainer.scrollHeight / 2) {
            scrollContainer.scrollTop = 0;
          }
        }
      }, 30);
    };

    startScrolling();

    // Pause on hover
    const handleMouseEnter = () => {
      isPaused = true;
    };

    const handleMouseLeave = () => {
      isPaused = false;
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(scrollInterval);
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#4a0e0e] via-[#2d0a0a] to-[#1a0505] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section - Main Content */}
          <div className="text-white flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {sectionData.title}
            </h2>

            <div className="mb-6">
              <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-200">
                {sectionData.quote}
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-200">
                {sectionData.description}
              </p>
            </div>

            <div className="mt-4">
              <p className="font-bold text-lg text-white">
                {sectionData.founder}
              </p>
              <p className="text-sm text-gray-300">{sectionData.position}</p>
            </div>
          </div>

          {/* Right Section - Auto-Scrolling Testimonials */}
          <div className="relative overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[600px] overflow-hidden"
              style={{ scrollBehavior: "auto" }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-red-500"
                >
                  {testimonial.name && (
                    <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-200">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.avatar ||
                          testimonial.name.charAt(0).toUpperCase()}
                      </div>
                      <p className="font-semibold text-gray-800 text-sm">
                        {testimonial.name}
                      </p>
                    </div>
                  )}
                  <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ef4444;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #dc2626;
        }
      `}</style>
    </div>
  );
};

export default SuccessPrioritySection;
