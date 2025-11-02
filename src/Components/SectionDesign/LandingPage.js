import React, { useState, useEffect } from "react";
import {
  Target,
  Sparkles,
  CreditCard,
  Shield,
  Award,
  ArrowRight,
  Check,
} from "lucide-react";
import MarketingLandingPage from "./TopDesign";
import TestimonialCarousel from "./Testimonial";

export default function LandingPageFunnelDesign() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      <MarketingLandingPage />

      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* HERO SECTION */}
      <div className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div
            className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* LEFT TEXT */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-medium border border-white/30">
                <Sparkles className="w-4 h-4 animate-spin-slow" />
                <span>Convert Visitors into Customers</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-red-100">
                Landing Page & Funnel Design
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-red-50">
                Cube designs conversion-focused landing pages that turn clicks
                into customers. Optimized for engagement, analytics, and lead
                generation.
              </p>

              <div className="flex flex-wrap gap-4 text-sm">
                {[
                  "High Conversion Rate",
                  "CRM & WhatsApp Integration",
                  "Optimized for Ads & SEO",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
                  >
                    <Check className="w-5 h-5 text-green-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="flex-1">
              <div className="relative bg-white/95 text-gray-900 p-8 rounded-3xl shadow-2xl border border-white/20 hover:shadow-red-500/20 transition-all overflow-hidden">
                <div className="absolute -top-3 right-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white px-6 py-2 rounded-b-xl shadow-lg font-bold text-sm animate-bounce-slow">
                  🚀 Starting at ₹4,999
                </div>

                <div className="relative mt-6 space-y-6">
                  <div className="text-center">
                    <div className="text-5xl mb-3">💰</div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      Get Your High-Converting Funnel
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Conversion-focused landing pages from{" "}
                      <span className="text-red-600 font-bold">₹4,999</span>
                    </p>
                  </div>

                  {/* FORM */}
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
                      placeholder="Business Name or Campaign"
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
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2 group"
                    >
                      <span>Get Free Consultation</span>
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
      <div className="py-20 bg-gradient-to-b from-white to-red-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
            Why It Matters
          </span>
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-600">
            Landing Pages That Drive Action
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Landing pages are mini-websites built for one goal — conversion.
            Whether you’re running ads, collecting leads, or promoting an event,
            Cube designs pages that inspire clicks and close deals.
          </p>
        </div>
      </div>

      {/* PROCESS */}
      <div className="py-20 bg-gradient-to-br from-red-50 via-white to-rose-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Our Process
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-600">
              How We Build Your Funnel
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Understand Your Campaign Goal",
                description:
                  "We start by defining your funnel objective — sales, leads, or event registrations — ensuring every element aligns with your goal.",
                icon: Target,
              },
              {
                step: "02",
                title: "Wireframe & Layout Planning",
                description:
                  "We map out your funnel journey to guide users naturally toward conversion.",
                icon: Sparkles,
              },
              {
                step: "03",
                title: "Design & Content Creation",
                description:
                  "Our creative team designs persuasive copy, visuals, and CTAs that drive immediate engagement.",
                icon: CreditCard,
              },
              {
                step: "04",
                title: "Form & Integration Setup",
                description:
                  "We connect your funnel with WhatsApp API, email tools, or CRMs for real-time lead capture.",
                icon: Shield,
              },
              {
                step: "05",
                title: "Testing & Analytics Setup",
                description:
                  "Before launch, we A/B test elements and set up analytics for tracking conversions accurately.",
                icon: Award,
              },
            ].map((item, i) => (
              <div
                key={i}
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
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Case Study
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-600">
              Success Story: Mandhan Projects
            </h2>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-2">Client</h3>
                <p className="text-gray-700">Mandhan Projects</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-2">
                  Challenge
                </h3>
                <p className="text-gray-700">
                  Needed a conversion-optimized landing page for ad campaigns.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-2">
                  Strategy
                </h3>
                <p className="text-gray-700">
                  Designed a localized funnel page with strong CTAs and form
                  integrations to capture high-quality leads.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-2">Result</h3>
                <p className="text-gray-700">
                  Generated 300+ quality leads in the first campaign with 40%
                  lower CPL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-20 bg-gradient-to-br from-white to-red-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              FAQs
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-600">
              Frequently Asked Questions
            </h2>
          </div>

          {[
            {
              q: "Do you integrate with WhatsApp or Email?",
              a: "Yes! All our funnels connect seamlessly with WhatsApp, Email, or CRM tools like HubSpot or Zoho.",
            },
            {
              q: "How long does it take to deliver?",
              a: "Typically 3–4 working days depending on your content readiness and campaign complexity.",
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="group bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl overflow-hidden mb-4"
            >
              <summary className="p-6 cursor-pointer font-semibold text-lg hover:bg-red-50 flex items-center justify-between">
                <span>{faq.q}</span>
                <ArrowRight className="w-5 h-5 text-red-600 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-gray-700 border-t border-gray-100 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-center relative overflow-hidden">
        <Sparkles className="w-16 h-16 text-yellow-300 mx-auto mb-8 animate-bounce-slow" />
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Boost Your Ad Results with Cube
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-red-100">
          Get a high-converting funnel and turn your traffic into real leads.
        </p>
        <button className="group bg-white text-red-600 px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-110 inline-flex items-center gap-3 transition-all">
          Get Started Now
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        .animate-shimmer { animation: shimmer 3s infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        @keyframes bounce-slow { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      `}</style>
    </div>
  );
}
