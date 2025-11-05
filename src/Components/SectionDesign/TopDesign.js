import React, { useState, useEffect, useRef } from "react";
import { Play, Globe } from "lucide-react";

export default function MarketingLandingPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.baseSize = this.size;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.scale = 1;
        this.scaleSpeed = Math.random() * 0.02 + 0.01;
        this.scaleDirection = Math.random() > 0.5 ? 1 : -1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Zoom in/out animation
        this.scale += this.scaleSpeed * this.scaleDirection;
        if (this.scale > 1.5 || this.scale < 0.5) {
          this.scaleDirection *= -1;
        }
        this.size = this.baseSize * this.scale;

        // Wrap around screen
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = "rgba(200, 200, 200, 0.6)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Connect particles
    const connectParticles = () => {
      const maxDistance = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3;
            ctx.strokeStyle = `rgba(200, 200, 200, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connectParticles();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="h-[90%] bg-gradient-to-br from-orange-50 via-pink-50 to-red-50 relative overflow-hidden mt-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/de4ks8mkh/image/upload/v1762335033/BG_pluthr.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      ></div>

      {/* Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255, 200, 200, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 200, 200, 0.3) 1px, transparent 1px)
        `,
          backgroundSize: "40px 40px",
          zIndex: 0,
        }}
      ></div>

      <div className="mx-auto px-4 sm:px-6  sm:py-6 relative z-10">
        {/* Top Bar */}

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-7xl mx-auto pt-12 sm:pt-20 lg:pt-20">
          {/* Left Side */}
          <div className="space-y-2 sm:space-y-6 lg:space-y-6 pt-2 sm:pt-8 mb-4">
            {/* Yellow Banner */}
            <div className="bg-yellow-400 rounded-lg -mb-2 px-4 sm:px-6 py-2 sm:py-3 inline-block shadow-md">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight whitespace-nowrap">
                <span className="text-red-600 italic">ব্যবসায় </span>হলে টেনশন
              </h2>
            </div>

            {/* Main Headline */}
            <div className="leading-none">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9]">
                <span className="text-red-600 italic">মার্কেটিং</span>
                <span className="text-gray-900 italic"> -ই</span>
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] mt-2">
                <span className="text-gray-900 italic">সলিউশন !</span>
              </h1>
            </div>

            {/* Service Boxes */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-lg">
              <div className="bg-red-50 rounded-xl p-3 sm:p-4 shadow-md border border-red-300">
                <div className="flex items-start gap-2">
                  <span className="text-xl sm:text-2xl">📱</span>
                  <p className="text-xs sm:text-sm md:text-md font-semibold text-gray-900 leading-tight mt-1 sm:mt-2">
                    ডিজিটাল মার্কেটিং
                  </p>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-3 sm:p-4 shadow-md border border-red-300">
                <div className="flex items-start gap-2">
                  <span className="text-xl sm:text-2xl">👨‍💼</span>
                  <p className="text-xs font-semibold  text-gray-900 leading-tight mt-1 sm:mt-2">
                    কনটেন্ট ক্রিয়েশন
                  </p>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-3 sm:p-4 shadow-md border border-red-300">
                <div className="flex items-start gap-2">
                  <span className="text-xl sm:text-2xl">🎨</span>
                  <p className="text-xs font-semibold text-gray-900 leading-tight mt-1 sm:mt-2">
                    নিউজ জেনারেশন ও<br />
                    অনলাইন সেলস
                  </p>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-3 sm:p-4 shadow-md border border-red-300">
                <div className="flex items-start gap-2">
                  <span className="text-xl sm:text-2xl">👔</span>
                  <p className="text-xs  font-semibold text-gray-900 leading-tight mt-1 sm:mt-2">
                    পার্সোনালিটি ডিজাইন
                    <br />
                    এবং পার্সোনাল ব্রান্ডিং
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Red Button */}
            <div className="bg-red-600 px-4 sm:px-6 py-2 sm:py-3 inline-block shadow-lg">
              <p className="text-white font-black text-base sm:text-lg md:text-xl">
                আজই যোগাযোগ করুন
              </p>
            </div>

            {/* Phone Number */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <a
                href="tel:+919046965841"
                className="text-lg sm:text-xl md:text-2xl font-bold text-black"
              >
                +91 90469 65841
              </a>
            </div>

            {/* Social Media Icons */}
          </div>

          {/* Right Side - Video/Image */}
          <div className="relative pt-4 sm:pt-8">
            {/* Blue thumbs up badge */}

            {/* Video Container */}
            <div className="relative w-full mb-5 max-w-[900px] aspect-video sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl  mt-10 mx-auto">
              {isVideoPlaying ? (
                <div className="w-full h-full bg-black">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/2ovxeSQeaHo?autoplay=1&rel=0"
                    title="Marketing video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1762285721/maxresdefault_fvnawk.jpg"
                    alt="Cube Multimedia"
                    className="w-full h-full object-cover"
                  />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                    >
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 text-red-600 fill-red-600 ml-1" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 100+ Badge at bottom center */}

            {/* Target Icon bottom right */}
            <div
              className="absolute -bottom-4 -right-2 sm:-bottom-8 sm:-right-4 z-20"
              style={{ width: "80px", height: "80px" }}
            >
              <div className="relative w-full h-full sm:w-[140px] sm:h-[140px]">
                {/* Red circle with rings */}

                {/* Arrow with yellow gradient */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
      </div>
    </div>
  );
}
