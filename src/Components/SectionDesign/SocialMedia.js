import React, { useState, useEffect } from "react";
import {
  Shield,
  Globe2,
  Check,
  FileText,
  BarChart,
  Sparkles,
  ArrowRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import MarketingLandingPage from "./TopDesign";
import TestimonialCarousel from "./Testimonial";

export default function SocialMediaManagement() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
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
      <div className="py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-red-600 rounded-3xl blur-2xl opacity-20"></div>
                <img
                  src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1762287865/Why_Choose_Cube_Multimedia_b7fpsr.png"
                  alt="Why it matters"
                  className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 md:order-2 text-center md:text-left">
              <span className="inline-block px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold mb-4">
                {whyItMatters.tag}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700">
                {whyItMatters.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {whyItMatters.description}
              </p>

              {/* Optional: Add decorative elements */}
              <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-rose-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">
                    Trusted by thousands
                  </span>
                </div>
              </div>
            </div>
          </div>
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
      <div className="py-20 bg-gradient-to-br from-white via-rose-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700">
              {whyChooseUs.tag}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-rose-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side with Decorative Elements */}
            <div className="relative">
              {/* Background decorative circles */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-rose-200 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-red-200 rounded-full blur-3xl opacity-60"></div>

              {/* Main Image */}
              <div className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-rose-600 rounded-3xl transform rotate-3"></div>
                <img
                  src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1762287865/Why_Choose_Cube_Multimedia_b7fpsr.png"
                  alt="Why Choose Us"
                  className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 transform hover:scale-105 transition-transform">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-700">100+</div>
                  <div className="text-sm text-gray-600 font-semibold">
                    Happy Clients
                  </div>
                </div>
              </div>
            </div>

            {/* Points Side with Cards */}
            <div className="space-y-4">
              {whyChooseUs.points.map((point, i) => (
                <div
                  key={i}
                  className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border-l-4 border-transparent hover:border-red-600 transition-all duration-300 hover:-translate-x-2"
                >
                  <div className="flex items-start gap-4">
                    {/* Animated Check Icon */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Check className="w-6 h-6 text-white" />
                    </div>

                    {/* Point Text */}
                    <div className="flex-1 pt-2">
                      <p className="text-gray-800 text-lg font-medium leading-relaxed">
                        {point}
                      </p>
                    </div>

                    {/* Number Badge */}
                    <div className="flex-shrink-0 w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-red-700 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      {i + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stats Row (Optional) */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "⚡", label: "Fast Results", value: "24hrs" },
              { icon: "🎯", label: "Success Rate", value: "99%" },
              { icon: "🔒", label: "Secure Process", value: "100%" },
              { icon: "💼", label: "Experience", value: "10+ yrs" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-red-700 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CASE STUDY */}
      <div className="py-20 bg-gradient-to-b from-rose-50 via-white to-rose-100">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold mb-4">
              Success Stories
            </span>
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700">
              {caseStudy.tag}
            </h2>
          </div>

          {/* Case Study Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Image */}
              <div className="relative h-[400px] lg:h-auto">
                <img
                  src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1762288756/Case_Study_jiuart.png"
                  alt="Case Study"
                  className="w-full h-full object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 text-red-600">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/20">
                      <div>
                        <div className="text-3xl text-red-600 font-bold">
                          98%
                        </div>
                        <div className="text-sm opacity-90">Success Rate</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">30d</div>
                        <div className="text-sm opacity-90">Timeline</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">5★</div>
                        <div className="text-sm opacity-90">Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="p-8 lg:p-12">
                {/* Challenge */}
                <div className="mb-8 group">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-rose-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-7 h-7 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        The Challenge
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {caseStudy.challenge}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Strategy */}
                <div className="mb-8 group">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-7 h-7 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Our Strategy
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {caseStudy.strategy}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Result */}
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-7 h-7 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        The Result
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {caseStudy.result}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <button className="w-full bg-gradient-to-r from-red-600 to-rose-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all">
                    See More Success Stories →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Testimonial Quote */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-8 border-l-4 border-red-600">
              <div className="flex items-start gap-4">
                <svg
                  className="w-10 h-10 text-red-300 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div>
                  <p className="text-gray-700 text-lg italic mb-3">
                    "Working with this team transformed our online presence
                    completely. The results exceeded our expectations!"
                  </p>
                  <p className="text-gray-900 font-semibold">
                    — {caseStudy.client}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-20 bg-gradient-to-br from-rose-50 via-white to-rose-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-red-700">
            Frequently Asked Questions 💬
          </h2>

          <div className="space-y-4 text-left">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md border border-transparent hover:border-red-200 transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex justify-between items-center p-6 text-left"
                  >
                    <h3 className="font-semibold text-lg md:text-xl text-gray-900">
                      {faq.q}
                    </h3>
                    {isOpen ? (
                      <ChevronUp className="text-red-600 transition-transform" />
                    ) : (
                      <ChevronDown className="text-red-600 transition-transform" />
                    )}
                  </button>

                  <div
                    className={`px-6 pb-4 overflow-hidden transition-all duration-500 ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-gray-800 text-lg">
            Still have questions?{" "}
            <span className="text-red-600 font-semibold hover:underline cursor-pointer">
              Contact our team →
            </span>
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
