import React, { useEffect, useRef } from "react";

const SuccessPrioritySection = () => {
  const scrollContainer1Ref = useRef(null);
  const scrollContainer2Ref = useRef(null);

  const sectionData = {
    title: "Your success is our\n priority",
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
      text: "Amazing work on our social media pages! The creativity, consistency, and strategy have boosted our engagement massively. Truly impressed with the dedication!",
      avatar: "👤",
    },
    {
      id: 2,
      name: "Rishman Enterprises",
      text: "We ran Google Ads campaigns with them, and the results were outstanding. Their flexibility, prompt updates, and constant optimisation made a huge difference. Highly grateful for the support! ❤️😍",
    },
    {
      id: 3,
      name: "Shilesh Bhattacharya",
      text: "Exceptional digital marketing service! The team explained the entire strategy clearly, from content planning to ad optimisation. Very efficient and reliable—highly recommended!",
    },
    {
      id: 4,
      name: "Rajan Dhirvi",
      text: "Big shoutout for managing our social media and ad campaigns so seamlessly! Their dedication, detailed analytics, and creative execution made everything effortless for us. Excellent service!",
    },
    {
      id: 5,
      name: "abxxxxxx25@gmail.com",
      text: "We scaled our business online with their guidance. From running high-ROI Google Ads to handling our social media content professionally—they managed everything smoothly. Communication was clear and timely throughout. Wonderful experience!",
    },
    {
      id: 6,
      name: "Shirey Shah",
      text: "Great experience working with the team for social media management! Their content quality, regular updates, and understanding of brand voice stood out. Definitely recommend!",
    },
    {
      id: 7,
      text: "Overall, the digital marketing support has been fantastic. Truly appreciate the consistent results and teamwork.",
    },
    {
      id: 8,
      text: "Fast, efficient, and extremely helpful! Their Google Ads and social media strategies simplified everything for us.",
    },
  ];

  // Split testimonials into two columns
  const column1 = testimonials.filter((_, index) => index % 2 === 0);
  const column2 = testimonials.filter((_, index) => index % 2 === 1);

  // Duplicate for seamless loop
  const duplicatedColumn1 = [...column1, ...column1, ...column1];
  const duplicatedColumn2 = [...column2, ...column2, ...column2];

  useEffect(() => {
    const scrollContainer1 = scrollContainer1Ref.current;
    const scrollContainer2 = scrollContainer2Ref.current;
    if (!scrollContainer1 || !scrollContainer2) return;

    let scrollInterval1, scrollInterval2;
    let isPaused1 = false;
    let isPaused2 = false;

    // Initialize column 2 to start from bottom
    scrollContainer2.scrollTop = scrollContainer2.scrollHeight / 3;

    // Column 1: Scroll down (top to bottom)
    const startScrolling1 = () => {
      scrollInterval1 = setInterval(() => {
        if (!isPaused1 && scrollContainer1) {
          scrollContainer1.scrollTop += 1;

          // Reset when reached 2/3 point
          if (
            scrollContainer1.scrollTop >=
            (scrollContainer1.scrollHeight * 2) / 3
          ) {
            scrollContainer1.scrollTop = scrollContainer1.scrollHeight / 3;
          }
        }
      }, 30);
    };

    // Column 2: Scroll up (bottom to top)
    const startScrolling2 = () => {
      scrollInterval2 = setInterval(() => {
        if (!isPaused2 && scrollContainer2) {
          scrollContainer2.scrollTop -= 1;

          // Reset when reached top
          if (scrollContainer2.scrollTop <= 0) {
            scrollContainer2.scrollTop = scrollContainer2.scrollHeight / 3;
          }
        }
      }, 30);
    };

    startScrolling1();
    startScrolling2();

    // Pause handlers for column 1
    const handleMouseEnter1 = () => {
      isPaused1 = true;
    };
    const handleMouseLeave1 = () => {
      isPaused1 = false;
    };

    // Pause handlers for column 2
    const handleMouseEnter2 = () => {
      isPaused2 = true;
    };
    const handleMouseLeave2 = () => {
      isPaused2 = false;
    };

    scrollContainer1.addEventListener("mouseenter", handleMouseEnter1);
    scrollContainer1.addEventListener("mouseleave", handleMouseLeave1);
    scrollContainer2.addEventListener("mouseenter", handleMouseEnter2);
    scrollContainer2.addEventListener("mouseleave", handleMouseLeave2);

    return () => {
      clearInterval(scrollInterval1);
      clearInterval(scrollInterval2);
      if (scrollContainer1) {
        scrollContainer1.removeEventListener("mouseenter", handleMouseEnter1);
        scrollContainer1.removeEventListener("mouseleave", handleMouseLeave1);
      }
      if (scrollContainer2) {
        scrollContainer2.removeEventListener("mouseenter", handleMouseEnter2);
        scrollContainer2.removeEventListener("mouseleave", handleMouseLeave2);
      }
    };
  }, []);

  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-red-500 mb-4">
      {testimonial.name && (
        <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-200">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold">
            {testimonial.avatar || testimonial.name.charAt(0).toUpperCase()}
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
  );

  return (
    <div className="bg-gradient-to-br from-red-900 via-red-700 to-red-500 py-0 md:py-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section - Main Content */}
          <div className="text-white flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 whitespace-pre-line">
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

          {/* Right Section - Dual Direction Scrolling Testimonials */}
          <div className="relative overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Column 1: Scrolls Down (Top to Bottom) */}
              <div
                ref={scrollContainer1Ref}
                className="max-h-[600px] overflow-hidden"
                style={{ scrollBehavior: "auto" }}
              >
                {duplicatedColumn1.map((testimonial, index) => (
                  <TestimonialCard
                    key={`col1-${testimonial.id}-${index}`}
                    testimonial={testimonial}
                  />
                ))}
              </div>

              {/* Column 2: Scrolls Up (Bottom to Top) */}
              <div
                ref={scrollContainer2Ref}
                className="max-h-[600px] overflow-hidden"
                style={{ scrollBehavior: "auto" }}
              >
                {duplicatedColumn2.map((testimonial, index) => (
                  <TestimonialCard
                    key={`col2-${testimonial.id}-${index}`}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPrioritySection;
