import React, { useState, useEffect, useRef } from "react";

const TestimonialCarousel = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [playingVideos, setPlayingVideos] = useState({ 1: true }); // Auto-play first video
  const trackRef = useRef(null);
  const autoPlayTimerRef = useRef(null);
  const iframeRefs = useRef({});

  const getEmbedUrl = (url) => {
    if (url.includes("youtube.com/shorts/")) {
      const videoId = url.split("/shorts/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes("vimeo.com/")) {
      const videoId = url.split("vimeo.com/")[1].split("?")[0];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return url;
  };

  const getThumbnail = (url) => {
    if (url.includes("youtube.com/shorts/")) {
      const videoId = url.split("/shorts/")[1].split("?")[0];
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"%3E%3Crect fill="%2318181b" width="320" height="180"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" font-family="Arial"%3EClick to Play%3C/text%3E%3C/svg%3E';
  };

  const testimonials = [
    {
      id: 1,
      url: "https://youtube.com/shorts/EPEENx-7fXY?si=4jhiDOZMk8rp4UU1",
      name: "Sarah Johnson",
      role: "Marketing Director",
    },
    {
      id: 2,
      url: "https://youtu.be/CiRQaYXh598?si=4sMQbDcKlDOi6fbI",
      name: "Michael Chen",
      role: "CEO, Tech Startup",
    },
    {
      id: 3,
      url: "https://youtu.be/2ovxeSQeaHo",
      name: "Lisa Anderson",
      role: "Product Manager",
    },
    {
      id: 4,
      url: "https://youtu.be/QuvPBMIpQZY?si=h1EGWegnQ5qGSbxT",
      name: "James Taylor",
      role: "Founder & CEO",
    },
    {
      id: 5,
      url: "https://youtu.be/TYtrE9tCuuA",
      name: "Emma Williams",
      role: "Business Owner",
    },
    {
      id: 6,
      url: "https://youtu.be/v3tof1iXBLA",
      name: "David Martinez",
      role: "Operations Manager",
    },
    {
      id: 7,
      url: "https://youtu.be/gjG6h3s1NGQ",
      name: "Rachel Thompson",
      role: "Creative Director",
    },
    {
      id: 8,
      url: "https://youtu.be/omePoqoNEfA",
      name: "Kevin Brown",
      role: "Entrepreneur",
    },
    {
      id: 9,
      url: "https://youtu.be/4OSdjAJ8hHM",
      name: "Amanda Davis",
      role: "Sales Director",
    },
    {
      id: 10,
      url: "https://youtube.com/shorts/VeguCX70Woc?feature=share",
      name: "Robert Wilson",
      role: "Tech Lead",
    },
    {
      id: 11,
      url: "https://youtube.com/shorts/CS_jVsaxKT8?feature=share",
      name: "Jennifer Lee",
      role: "Marketing Manager",
    },
    {
      id: 12,
      url: "https://youtube.com/shorts/tHzQRM9XOLY?feature=share",
      name: "Thomas Garcia",
      role: "Product Designer",
    },
    {
      id: 13,
      url: "https://youtube.com/shorts/A1DqCDNyfYM?feature=share",
      name: "Nicole Rodriguez",
      role: "Brand Strategist",
    },
    {
      id: 14,
      url: "https://youtube.com/shorts/JAUUqqwXONk?feature=share",
      name: "Christopher Smith",
      role: "Digital Consultant",
    },
    {
      id: 15,
      url: "https://youtube.com/shorts/DA3S-LvY6iI?feature=share",
      name: "Michelle Clark",
      role: "Growth Manager",
    },
    {
      id: 16,
      url: "https://youtube.com/shorts/6HW0qMymQzc?feature=share",
      name: "Daniel White",
      role: "Innovation Director",
    },
  ];

  const openModal = (url) => {
    setSelectedVideo(url);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = "auto";
  };

  const scrollCarousel = (direction) => {
    if (trackRef.current) {
      const cardWidth = 340;
      const newIndex =
        direction === "left"
          ? Math.max(0, currentIndex - 1)
          : Math.min(testimonials.length - 1, currentIndex + 1);

      setCurrentIndex(newIndex);
      trackRef.current.scrollTo({
        left: newIndex * (cardWidth + 24),
        behavior: "smooth",
      });
    }
  };

  // Play next video when current video ends
  const playNextVideo = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    const nextTestimonial = testimonials[nextIndex];

    // Stop current video
    setPlayingVideos({});

    // Scroll to next
    setCurrentIndex(nextIndex);
    if (trackRef.current) {
      trackRef.current.scrollTo({
        left: nextIndex * (340 + 24),
        behavior: "smooth",
      });
    }

    // Start next video after a brief delay
    setTimeout(() => {
      setPlayingVideos({ [nextTestimonial.id]: true });
    }, 500);
  };

  // Auto-swipe functionality
  useEffect(() => {
    if (isAutoPlaying && !selectedVideo) {
      // Check if current video is playing, wait for it to end (estimated 30 seconds per video)
      const currentTestimonial = testimonials[currentIndex];
      if (playingVideos[currentTestimonial.id]) {
        // Wait for video duration (approximate 30 seconds for shorts)
        autoPlayTimerRef.current = setTimeout(() => {
          playNextVideo();
        }, 30000); // 30 seconds
      }

      return () => {
        if (autoPlayTimerRef.current) {
          clearTimeout(autoPlayTimerRef.current);
        }
      };
    }
  }, [isAutoPlaying, selectedVideo, currentIndex, playingVideos, testimonials]);

  // Pause autoplay when user interacts
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current);
    }
  };

  // Handle manual video play
  const handlePlayVideo = (testimonialId) => {
    handleUserInteraction();
    setPlayingVideos({ [testimonialId]: true });
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // YouTube API message listener for video end detection
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin === "https://www.youtube.com") {
        try {
          const data = JSON.parse(event.data);
          // YouTube player state: 0 = ended
          if (data.event === "onStateChange" && data.info === 0) {
            if (isAutoPlaying) {
              playNextVideo();
            }
          }
        } catch (e) {
          // Ignore parse errors
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [isAutoPlaying, currentIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-700 to-red-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Real results from real people. See how we've helped transform
            businesses.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative px-12">
          {/* Navigation Buttons */}
          <button
            onClick={() => {
              handleUserInteraction();
              scrollCarousel("left");
            }}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md text-white w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center group"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => {
              handleUserInteraction();
              scrollCarousel("right");
            }}
            disabled={currentIndex === testimonials.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md text-white w-10 h-10 md:w-12 md:h-12 rounded-full hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center group"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-[340px] transition-all duration-500"
                  style={{
                    opacity: index === currentIndex ? 1 : 0.5,
                    transform:
                      index === currentIndex ? "scale(1)" : "scale(0.9)",
                  }}
                >
                  {/* Card */}
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                    {/* Video Container */}
                    <div className="relative aspect-[9/16] bg-slate-950">
                      {playingVideos[testimonial.id] ? (
                        <iframe
                          ref={(el) =>
                            (iframeRefs.current[testimonial.id] = el)
                          }
                          src={`${getEmbedUrl(
                            testimonial.url
                          )}?autoplay=1&mute=1&enablejsapi=1&playsinline=1`}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                          title={testimonial.name}
                        ></iframe>
                      ) : (
                        <>
                          <img
                            src={getThumbnail(testimonial.url)}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                          {/* Play Button */}
                          <div
                            onClick={() => handlePlayVideo(testimonial.id)}
                            className="absolute inset-0 flex items-center justify-center cursor-pointer"
                          >
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-300 hover:scale-110 shadow-2xl">
                              <svg
                                className="w-8 h-8 text-white ml-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>

                          {/* Video Label */}
                          <div className="absolute top-4 left-4 px-3 py-1 bg-red-600 rounded-full text-white text-xs font-bold uppercase tracking-wider">
                            VIDEO
                          </div>
                        </>
                      )}

                      {/* Now Playing Indicator */}
                      {playingVideos[testimonial.id] && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 rounded-full text-white text-xs font-bold uppercase tracking-wider animate-pulse">
                          NOW PLAYING
                        </div>
                      )}
                    </div>

                    {/* Card Footer */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-purple-300 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  handleUserInteraction();
                  setCurrentIndex(index);
                  if (trackRef.current) {
                    trackRef.current.scrollTo({
                      left: index * (340 + 24),
                      behavior: "smooth",
                    });
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-red-500"
                    : "w-2 bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 hover:scale-105">
            Book Your Free Consultation
          </button>
          <p className="text-slate-400 mt-4 text-sm">
            Join 100+ satisfied clients • No credit card required
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div
            className="w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`${getEmbedUrl(selectedVideo)}?autoplay=1`}
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Video player"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel;
