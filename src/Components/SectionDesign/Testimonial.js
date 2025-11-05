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
      id: 5,
      url: "https://youtu.be/2ovxeSQeaHo",
      name: "Lisa Anderson",
      role: "Product Manager",
    },
    {
      id: 6,
      url: "https://youtu.be/QuvPBMIpQZY?si=h1EGWegnQ5qGSbxT",
      name: "James Taylor",
      role: "Founder & CEO",
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
    <div className="min-h-screen w-full bg-gradient-to-br from-red-900 via-red-800 to-red-900 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Real results from real people. See how we've helped transform
            businesses.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="relative px-12 md:px-16">
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
              className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform"
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
              className="w-6 h-6 group-hover:translate-x-0.5 transition-transform"
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
          <div
            ref={trackRef}
            className="overflow-x-auto scrollbar-hide flex gap-6 pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-[300px] md:w-[340px] group"
              >
                {/* Card */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2">
                  {/* Video Container */}
                  <div className="relative aspect-[9/16] overflow-hidden bg-slate-900">
                    {playingVideos[testimonial.id] ? (
                      <iframe
                        ref={(el) => (iframeRefs.current[testimonial.id] = el)}
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
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        {/* Play Button */}
                        <button
                          onClick={() => handlePlayVideo(testimonial.id)}
                          className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        >
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-red-500 transition-all duration-300 shadow-2xl">
                            <svg
                              className="w-7 h-7 text-white ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </button>

                        {/* Video Label */}
                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium flex items-center gap-1.5">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          VIDEO
                        </div>
                      </>
                    )}

                    {/* Now Playing Indicator */}
                    {playingVideos[testimonial.id] && (
                      <div className="absolute top-4 left-4 bg-red-600 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-bold flex items-center gap-1.5 shadow-lg">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        NOW PLAYING
                      </div>
                    )}
                  </div>

                  {/* Card Footer */}
                  <div className="p-5">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-8">
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

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="group relative bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-red-500/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Book Your Free Consultation
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <p className="text-slate-400 text-sm mt-4">
            Join 100+ satisfied clients • No credit card required
          </p>
        </div>

        {/* Modal */}
        {selectedVideo && (
          <div
            onClick={closeModal}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn"
          >
            <div
              className="relative w-full max-w-5xl animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 hover:rotate-90 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6"
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
              <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src={`${getEmbedUrl(selectedVideo)}?autoplay=1`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Video Testimonial"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>
  );
};

export default TestimonialCarousel;
