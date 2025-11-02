import React, { useState, useEffect } from "react";
import {
  Newspaper,
  PenTool,
  BarChart,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Check,
  FileText,
  Users,
  Video,
  Scissors,
  Camera,
  FileCheck,
} from "lucide-react";
import MarketingLandingPage from "../TopDesign";
import TestimonialCarousel from "../Testimonial";

export default function ContentCreating() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  // 🌟 Service Content
  const service = {
    id: 1,
    title: "Reels Production",
    description:
      "Short-form videos, long-lasting impressions. Cube produces reels that mix creativity, storytelling, and brand intent — crafted to engage and convert.",
    price: "₹1,999/reel",
    whyItMatters:
      "Reels are the new TV ads. They capture attention and emotions in seconds — driving your brand’s recall and reach.",
    processSteps: [
      { step: "Step 1", title: "Concept & Script", icon: FileText },
      { step: "Step 2", title: "Pre-production & location setup", icon: Users },
      { step: "Step 3", title: "Shoot with creative direction", icon: Camera },
      { step: "Step 4", title: "Edit & add sound design", icon: Scissors },
      {
        step: "Step 5",
        title: "Deliver for platform optimization",
        icon: FileCheck,
      },
    ],
    whyChoose: [
      "Experienced direction and shooting crew.",
      "Trend-based creative ideation.",
      "Fast delivery with premium finish.",
    ],
    caseStudy: {
      client: "Kritanjali Boutique",
      challenge: "Low visibility for new saree collection.",
      strategy: "Produced 5 reels featuring influencers and product stories.",
      result: "Increased engagement by 300% and 2.5L+ organic reach.",
    },
    faqs: [
      {
        q: "Can I shoot at my store?",
        a: "Yes, we handle both indoor and outdoor setups.",
      },
    ],
    cta: {
      icon: Sparkles,
      title: "Let’s Make Your Brand Go Viral",
      subtitle: "Professional Reels That Tell Your Story.",
      buttonText: "Start Your Project",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-rose-50">
      <MarketingLandingPage />

      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* HERO SECTION */}
      <div className="relative bg-gradient-to-br from-red-700 via-rose-800 to-red-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>

        <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 transition-all duration-1000">
          {/* Left */}
          <div
            className={`flex-1 space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm border border-white/30">
              <Sparkles className="w-4 h-4 text-rose-100" />
              <span>Cube Multimedia — Content Creation</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-rose-100">
              {service.title}
            </h1>

            <p className="text-lg md:text-xl text-rose-50">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-4 text-sm">
              {service.whyChoose.map((item, i) => (
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

          {/* Right */}
          <div className="flex-1">
            <div className="relative bg-white/95 backdrop-blur-lg text-gray-900 p-8 rounded-3xl shadow-2xl border border-white/20">
              <div className="absolute -top-3 right-8 bg-gradient-to-r from-red-500 via-rose-600 to-red-700 text-white px-6 py-2 rounded-b-xl shadow-lg font-bold text-sm animate-bounce-slow">
                💰 Starting at {service.price}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900 text-center">
                Start Your Project
              </h3>
              <p className="text-gray-600 text-sm text-center mb-6">
                Let's turn your content ideas into brand stories that convert.
              </p>

              <form className="space-y-4">
                {["Email", "Brand Name", "Project Type"].map((ph, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={ph}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                  />
                ))}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-rose-700 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* WHY IT MATTERS */}
      <div className="py-20 bg-gradient-to-b from-white to-rose-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700">
            Why It Matters
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {service.whyItMatters}
          </p>
        </div>
      </div>

      {/* PROCESS */}
      <div className="py-20 bg-gradient-to-br from-rose-50 via-white to-red-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700">
              Our Process
            </h2>
          </div>

          <div className="space-y-6">
            {service.processSteps.map((item, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-600 hover:shadow-2xl hover:-translate-x-2 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-all">
                    {i + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="w-6 h-6 text-red-600" />
                      <h3 className="text-2xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TestimonialCarousel />
      {/* CASE STUDY */}
      <div className="py-20 bg-gradient-to-b from-rose-50 via-white to-rose-100 text-center">
        <h2 className="text-4xl font-bold mb-10 text-red-700">
          Case Study Snapshot
        </h2>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-left">
          <p>
            <strong>Client:</strong> {service.caseStudy.client}
          </p>
          <p>
            <strong>Challenge:</strong> {service.caseStudy.challenge}
          </p>
          <p>
            <strong>Strategy:</strong> {service.caseStudy.strategy}
          </p>
          <p>
            <strong>Result:</strong> {service.caseStudy.result}
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-20 bg-gradient-to-br from-white to-rose-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-red-700">FAQs</h2>
          <div className="space-y-6 text-left">
            {service.faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 bg-gradient-to-br from-red-700 via-rose-800 to-red-900 text-center relative overflow-hidden">
        <service.cta.icon className="w-16 h-16 text-yellow-300 mx-auto mb-8 animate-bounce-slow" />
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          {service.cta.title}
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-rose-100">
          {service.cta.subtitle}
        </p>
        <button className="group bg-white text-red-700 px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-110 inline-flex items-center gap-3 transition-all">
          {service.cta.buttonText}
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
