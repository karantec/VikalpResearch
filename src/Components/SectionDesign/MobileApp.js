import React, { useState, useEffect } from "react";
import {
  Smartphone,
  Code,
  Cloud,
  Check,
  Target,
  Sparkles,
  ArrowRight,
  Rocket,
  Shield,
  Award,
} from "lucide-react";
import MarketingLandingPage from "./TopDesign";
import TestimonialCarousel from "./Testimonial";

export default function MobileAppDevelopmentRed() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50">
      <MarketingLandingPage />

      {/* Animated Gradient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* HERO SECTION */}
      <div className="relative bg-gradient-to-br from-red-600 via-rose-700 to-orange-700 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div
            className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Left Side */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-medium border border-white/30">
                <Rocket className="w-4 h-4 text-yellow-300 animate-bounce-slow" />
                <span>Transform Your Business Into an App</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-red-100">
                Mobile App Development (iOS & Android)
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-rose-50">
                Turn your business into an app. Cube develops fast, functional,
                and scalable mobile apps that connect your brand directly to
                your customers.
              </p>

              <div className="flex flex-wrap gap-4 text-sm">
                {[
                  "Cross-Platform Apps",
                  "Scalable Backend",
                  "Beautiful UI/UX",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <Check className="w-5 h-5 text-green-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Form */}
            <div className="flex-1">
              <div className="relative bg-white/95 backdrop-blur-lg text-gray-900 p-8 rounded-3xl shadow-2xl border border-white/20 hover:shadow-red-500/20 transition-all duration-500 overflow-hidden">
                <div className="absolute -top-3 right-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 text-white px-6 py-2 rounded-b-xl shadow-lg font-bold text-sm animate-bounce-slow">
                  💥 Starting at ₹9,999
                </div>

                <div className="relative mt-6 space-y-6">
                  <div className="text-center">
                    <div className="text-5xl mb-3">📱</div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      Build Your Mobile App Today
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Get your custom app developed from{" "}
                      <span className="text-red-600 font-bold">₹9,999</span>
                    </p>
                  </div>

                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    />
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    />
                    <input
                      type="text"
                      placeholder="City/Pincode"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    />

                    {/* WhatsApp Toggle */}
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>Get updates via</span>
                      <span className="text-green-600 font-semibold">
                        WhatsApp
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked
                        />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-rose-700 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2 group"
                    >
                      <span>Get a Free Consultation</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WHY IT MATTERS */}
      <div className="py-20 bg-gradient-to-b from-white to-rose-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-rose-100 text-red-600 rounded-full text-sm font-semibold mb-4">
            Why It Matters
          </span>
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-600">
            Bring Your Business Closer to Customers
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Mobile apps enhance engagement, loyalty, and brand growth. We build
            user-friendly, high-performance apps that help your customers stay
            connected, informed, and satisfied.
          </p>
        </div>
      </div>

      {/* PROCESS */}
      <div className="py-20 bg-gradient-to-br from-rose-50 via-white to-red-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-rose-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Our Process
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-600">
              How We Develop Your App
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "App Idea & Wireframe Design",
                description:
                  "We start with your idea, design initial wireframes, and define app flow and goals.",
                icon: Target,
              },
              {
                step: "02",
                title: "UI/UX Planning & Feature Setup",
                description:
                  "We craft visually stunning and user-friendly interfaces that improve retention.",
                icon: Sparkles,
              },
              {
                step: "03",
                title: "Development & Backend Integration",
                description:
                  "Our team codes your app and integrates secure APIs, databases, and cloud systems.",
                icon: Code,
              },
              {
                step: "04",
                title: "Testing & Deployment",
                description:
                  "We test across devices for speed and reliability before publishing to app stores.",
                icon: Shield,
              },
              {
                step: "05",
                title: "Support & Updates",
                description:
                  "Post-launch, we provide continuous support and feature updates to keep your app top-tier.",
                icon: Award,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-600 hover:shadow-2xl hover:-translate-x-2 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-all">
                    {item.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="w-6 h-6 text-red-600" />
                      <h3 className="text-2xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TestimonialCarousel />
      {/* CASE STUDY */}
      <div className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-rose-100 text-red-600 rounded-full text-sm font-semibold mb-4">
            Case Study Snapshot
          </span>
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-600">
            Success Story: Cube Multimedia
          </h2>

          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 text-left">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-2">Client</h3>
                <p className="text-gray-700">Cube Multimedia</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-2">
                  Challenge
                </h3>
                <p className="text-gray-700">
                  Needed an internal mobile app for tracking projects and
                  streamlining communication.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-2">
                  Strategy
                </h3>
                <p className="text-gray-700">
                  Built a mobile dashboard app for real-time updates, team chat,
                  and project tracking.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-2">Result</h3>
                <p className="text-gray-700">
                  Improved efficiency by 40% across workflows and enhanced
                  transparency for teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="py-20 bg-gradient-to-br from-white to-rose-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-rose-100 text-red-600 rounded-full text-sm font-semibold mb-4">
            FAQs
          </span>
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-600">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 text-left">
            {[
              {
                q: "Do you develop native or hybrid apps?",
                a: "We do both — depending on your goals, we choose the best technology (React Native, Flutter, Swift, Kotlin, etc.).",
              },
              {
                q: "Can you publish it on the Play Store or App Store?",
                a: "Yes, we handle complete deployment and app store optimization for both Android and iOS.",
              },
              {
                q: "Do you provide ongoing support?",
                a: "Absolutely. We offer post-launch maintenance, updates, and performance tracking to ensure long-term success.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
              >
                <summary className="p-6 cursor-pointer font-semibold text-lg hover:bg-rose-50 flex items-center justify-between">
                  <span>{faq.q}</span>
                  <ArrowRight className="w-5 h-5 text-red-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="py-24 bg-gradient-to-br from-red-600 via-rose-700 to-orange-700 text-center relative overflow-hidden">
        <Smartphone className="w-16 h-16 text-yellow-300 mx-auto mb-8 animate-bounce-slow" />
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Turn Your Business Into an App
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-rose-100">
          Build your mobile application with Cube Multimedia — fast, modern, and
          built to scale.
        </p>
        <button className="group bg-white text-red-600 px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-110 inline-flex items-center gap-3 transition-all">
          Get Started Now
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer { animation: shimmer 3s infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        @keyframes bounce-slow {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}
