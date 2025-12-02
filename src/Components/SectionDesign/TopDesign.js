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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto pt-20 sm:pt-20 lg:pt-20">
          {/* Left Side */}
          <div className="space-y-2 sm:space-y-6 lg:space-y-6 pt-2 sm:pt-8 mb-4">
            {/* Yellow Banner (optional - kept removed to match your last snippet) */}

            {/* Main Headline (English) */}
            <div className="leading-none">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9]">
                <span className="text-red-600 italic">Grow With</span>
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] mt-2">
                <span className="text-gray-900 italic"> CubeMultimedia</span>
              </h1>
            </div>

            {/* Service Boxes (you can re-add them if needed) */}

            {/* CTA Red Button */}
            <div className="bg-red-600 px-4 sm:px-6 py-2 sm:py-3 inline-block shadow-lg">
              <p className="text-white font-black text-base sm:text-lg md:text-xl">
                Contact With Us
              </p>
            </div>

            {/* Phone Number */}
          </div>

          {/* Right Side - Video/Image */}
          <div className="relative pt-4 sm:pt-8 flex items-center">
            <div className="relative w-full mb-5 max-w-[900px] aspect-video sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mx-auto">
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

            {/* Decorative element bottom right */}
            <div
              className="absolute -bottom-4 -right-2 sm:-bottom-8 sm:-right-4 z-20"
              style={{ width: "80px", height: "80px" }}
            >
              <div className="relative w-full h-full sm:w-[140px] sm:h-[140px]">
                {/* Add decorative SVGs or shapes here if needed */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
      </div>
    </div>
  );
}
