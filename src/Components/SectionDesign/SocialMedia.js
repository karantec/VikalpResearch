import React, { useState, useEffect } from "react";
import {
  Shield,
  Globe2,
  Check,
  FileText,
  BarChart,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import MarketingLandingPage from "./TopDesign";
import TestimonialCarousel from "./Testimonial";

export default function SocialMediaManagement() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  // HERO SECTION CONTENT
  const heroContent = {
    tag: "Engage. Influence. Grow.",
    title: "Social Media Management",
    subtitle:
      "Your audience scrolls fast — we make them stop, notice, and engage. Cube Multimedia builds your brand’s online presence through creativity, strategy, and storytelling.",
    description:
      "From content creation to analytics, we manage every aspect of your social identity to turn followers into loyal customers.",
    features: [
      "Content Strategy & Scheduling",
      "Visual + Written Content Creation",
      "Audience Engagement & Insights",
    ],
    price: "₹5,999/month",
  };

  const whyItMatters = {
    tag: "Why It Matters",
    title: "Social Presence Builds Trust",
    description:
      "In today’s digital landscape, visibility is credibility. We help brands connect authentically with their audience, build reputation, and grow meaningful engagement across platforms.",
  };

  const processSteps = [
    {
      step: "01",
      title: "Research & Audit",
      description:
        "We begin with a deep understanding of your brand, competitors, and audience to identify growth opportunities.",
      icon: BarChart,
    },
    {
      step: "02",
      title: "Strategy Planning",
      description:
        "Our team develops customized content calendars, tone guidelines, and posting strategies for your platforms.",
      icon: FileText,
    },
    {
      step: "03",
      title: "Execution",
      description:
        "We design and post consistent, high-quality visual and written content aligned with your brand voice.",
      icon: Sparkles,
    },
    {
      step: "04",
      title: "Optimization",
      description:
        "Performance insights guide our optimizations — we fine-tune timing, content type, and audience targeting.",
      icon: Check,
    },
    {
      step: "05",
      title: "Reporting",
      description:
        "Receive monthly performance reports with engagement metrics, growth analysis, and improvement strategies.",
      icon: BarChart,
    },
  ];

  const whyChooseUs = {
    tag: "Why Choose Cube Multimedia",
    points: [
      "Expert content planning and execution team.",
      "Real-time engagement tracking and analytics.",
      "Creative storytelling backed by marketing logic.",
      "Trusted by 100+ businesses across industries.",
    ],
  };

  const caseStudy = {
    tag: "Case Study Snapshot",
    client: "P Leathers",
    challenge: "Low digital engagement despite premium products.",
    strategy:
      "Repositioned brand using visual storytelling and lifestyle-focused content strategy.",
    result:
      "Achieved 200% engagement boost and 2x website traffic in just 60 days.",
  };

  const faqs = [
    {
      q: "Which platforms do you manage?",
      a: "We manage Facebook, Instagram, YouTube, LinkedIn, Threads, and Twitter/X — ensuring consistent presence and engagement.",
    },
    {
      q: "Can I approve posts before publishing?",
      a: "Absolutely — every content piece is shared with you for approval prior to publishing.",
    },
    {
      q: "When will I start seeing results?",
      a: "Initial improvements in reach and engagement are visible within 3–4 weeks of consistent posting and optimization.",
    },
  ];

  const cta = {
    icon: Sparkles,
    title: "Grow Your Social Presence",
    subtitle:
      "Build a powerful and engaging online identity with Cube Multimedia — your brand deserves to be seen.",
    buttonText: "Start My Social Media Plan",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-rose-50">
      <MarketingLandingPage />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* HERO SECTION */}
      <div className="relative bg-gradient-to-br from-red-700 via-rose-800 to-red-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>

        <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* LEFT SIDE */}
          <div
            className={`flex-1 space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm border border-white/30">
              <Sparkles className="w-4 h-4 text-rose-100" />
              <span>{heroContent.tag}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-rose-100">
              {heroContent.title}
            </h1>

            <p className="text-lg md:text-xl text-rose-50">
              {heroContent.subtitle}
            </p>

            <p className="text-base text-rose-100">{heroContent.description}</p>

            <div className="flex flex-wrap gap-4 text-sm">
              {heroContent.features.map((item, i) => (
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

          {/* RIGHT FORM */}
          <div className="flex-1">
            <div className="relative bg-white/95 backdrop-blur-lg text-gray-900 p-8 rounded-3xl shadow-2xl border border-white/20 hover:shadow-rose-500/20 transition-all duration-500">
              <div className="absolute -top-3 right-8 bg-gradient-to-r from-red-500 via-rose-600 to-red-700 text-white px-6 py-2 rounded-b-xl shadow-lg font-bold text-sm animate-bounce-slow">
                💰 Starting at {heroContent.price}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-center">
                Wikipedia / ORM Service
              </h3>
              <p className="text-gray-600 text-sm text-center mb-6">
                Build, protect, and enhance your online identity.
              </p>

              <form className="space-y-4">
                {["Email", "Service Type", "Public Figure / Brand Name"].map(
                  (ph, i) => (
                    <input
                      key={i}
                      type="text"
                      placeholder={ph}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    />
                  )
                )}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-rose-700 text-white py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  <span>Request ORM Service</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* WHY IT MATTERS */}
      <div className="py-20 bg-gradient-to-b from-white to-rose-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold mb-4">
            {whyItMatters.tag}
          </span>
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700">
            {whyItMatters.title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {whyItMatters.description}
          </p>
        </div>
      </div>

      {/* PROCESS */}
      <div className="py-20 bg-gradient-to-br from-rose-50 via-white to-red-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold mb-4">
              Our Process
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700">
              How We Protect & Build Your Reputation
            </h2>
          </div>

          <div className="space-y-6">
            {processSteps.map((item, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-600 hover:shadow-2xl hover:-translate-x-2 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-all">
                    {item.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="w-6 h-6 text-red-600" />
                      <h3 className="text-2xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TestimonialCarousel />
      {/* WHY CHOOSE US */}
      <div className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold mb-8 text-red-700">
          {whyChooseUs.tag}
        </h2>
        <ul className="max-w-2xl mx-auto space-y-3 text-gray-700 text-lg">
          {whyChooseUs.points.map((point, i) => (
            <li key={i} className="flex items-center justify-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* CASE STUDY */}
      <div className="py-20 bg-gradient-to-b from-rose-50 via-white to-rose-100 text-center">
        <h2 className="text-4xl font-bold mb-10 text-red-700">
          {caseStudy.tag}
        </h2>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-left">
          <p>
            <strong>Client:</strong> {caseStudy.client}
          </p>
          <p>
            <strong>Challenge:</strong> {caseStudy.challenge}
          </p>
          <p>
            <strong>Strategy:</strong> {caseStudy.strategy}
          </p>
          <p>
            <strong>Result:</strong> {caseStudy.result}
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-20 bg-gradient-to-br from-white to-rose-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-red-700">FAQs</h2>
          <div className="space-y-6 text-left">
            {faqs.map((faq, i) => (
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
        <cta.icon className="w-16 h-16 text-yellow-300 mx-auto mb-8 animate-bounce-slow" />
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          {cta.title}
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-rose-100">
          {cta.subtitle}
        </p>
        <button className="group bg-white text-red-700 px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-110 inline-flex items-center gap-3 transition-all">
          {cta.buttonText}
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>

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
