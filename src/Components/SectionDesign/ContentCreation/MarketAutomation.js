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
  Search,
  Workflow,
  Plug,
  CheckCircle,
  Zap,
} from "lucide-react";
import MarketingLandingPage from "../TopDesign";
import TestimonialCarousel from "../Testimonial";
export default function MarketAuto() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  // 🌟 Hero content
  const heroContent = {
    tag: "Automate. Analyze. Accelerate.",
    title: "Marketing Automation",
    subtitle:
      "Automate, analyze, and grow — we integrate AI and automation tools to streamline your marketing flow and save hours every week.",
    description:
      "Cube Multimedia helps businesses implement intelligent automation systems — from CRM to WhatsApp — making every customer interaction faster and smarter.",
    features: [
      "End-to-end automation setup",
      "AI-powered workflows",
      "Integrated CRM & communication tools",
    ],
    price: "₹4,999/project",
  };

  const whyItMatters = {
    tag: "Why It Matters",
    title: "Automation Builds Efficiency",
    description:
      "Marketing automation ensures consistent follow-ups, faster responses, and smarter insights — giving you more control while reducing manual workload.",
  };

  const processSteps = [
    {
      step: "01",
      title: "Audit Existing Systems",
      description:
        "We assess your current marketing tools and identify automation opportunities.",
      icon: Search,
    },
    {
      step: "02",
      title: "Workflow Mapping",
      description:
        "We design an efficient automation flow tailored to your customer journey.",
      icon: Workflow,
    },
    {
      step: "03",
      title: "Integration Setup",
      description:
        "We connect CRM, WhatsApp, and Mail tools for seamless automated operations.",
      icon: Plug,
    },
    {
      step: "04",
      title: "Testing & Launch",
      description:
        "We ensure smooth execution and error-free automation before deployment.",
      icon: CheckCircle,
    },
    {
      step: "05",
      title: "Performance Tracking & Support",
      description:
        "We monitor automation performance and provide continuous optimization.",
      icon: BarChart,
    },
  ];

  const whyChooseUs = {
    tag: "Why Choose Cube Multimedia",
    points: [
      "Automated workflows built for real business challenges.",
      "Enhanced lead nurturing and faster customer response.",
      "End-to-end technical integration handled by our expert team.",
    ],
  };

  const caseStudy = {
    tag: "Case Study Snapshot",
    client: "Mandhan Projects",
    challenge: "Manual follow-ups were reducing sales efficiency.",
    strategy:
      "Integrated WhatsApp and CRM automation for instant lead handling and tracking.",
    result: "Response time reduced by 70% and conversions improved by 35%.",
  };

  const faqs = [
    {
      q: "Do you use AI tools?",
      a: "Yes, Cube integrates AI-powered CRMs and chat automation to improve customer engagement and response times.",
    },
    {
      q: "Can this work for small businesses?",
      a: "Absolutely — automation saves time, reduces errors, and enhances customer experience for any business size.",
    },
  ];

  const cta = {
    icon: Zap,
    title: "Streamline Your Business with Automation",
    subtitle:
      "Upgrade your marketing system with smart automation powered by Cube Multimedia.",
    buttonText: "Get Started with Automation",
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

          {/* Right - Quote Card */}
          <div className="flex-1">
            <div className="relative bg-white/95 backdrop-blur-lg text-gray-900 p-8 rounded-3xl shadow-2xl border border-white/20 hover:shadow-rose-500/20 transition-all duration-500">
              <div className="absolute -top-3 right-8 bg-gradient-to-r from-red-500 via-rose-600 to-red-700 text-white px-6 py-2 rounded-b-xl shadow-lg font-bold text-sm animate-bounce-slow">
                💰 Starting at {heroContent.price}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900 text-center">
                Media Coverage
              </h3>
              <p className="text-gray-600 text-sm text-center mb-6">
                Get featured on verified media channels and build a reputation
                that lasts.
              </p>

              <form className="space-y-4">
                {["Email", "Brand Name", "Business Type"].map((ph, i) => (
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
                  <span>Request Media Coverage</span>
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
              How We Deliver Trusted Media Coverage
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
      <TestimonialCarousel />
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
