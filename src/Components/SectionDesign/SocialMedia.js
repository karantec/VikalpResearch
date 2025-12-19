import React, { useState, useEffect } from "react";
import {
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

  /* ================= CONTENT ================= */

  const heroContent = {
    tag: "Engage. Influence. Grow.",
    title: "Social Media Management",
    subtitle:
      "Your audience scrolls fast — we make them stop, notice, and engage.",
    description:
      "From content creation to analytics, we manage every aspect of your social identity.",
    features: [
      "Content Strategy & Scheduling",
      "Visual + Written Content Creation",
      "Audience Engagement & Insights",
    ],
    price: "₹5,999/month",
  };

  const processSteps = [
    {
      step: "01",
      title: "Research & Audit",
      description: "Deep brand & competitor analysis.",
      icon: BarChart,
    },
    {
      step: "02",
      title: "Strategy Planning",
      description: "Custom calendars & posting strategy.",
      icon: FileText,
    },
    {
      step: "03",
      title: "Execution",
      description: "Consistent high-quality content.",
      icon: Sparkles,
    },
    {
      step: "04",
      title: "Optimization",
      description: "Insights-driven improvements.",
      icon: Check,
    },
  ];

  const faqs = [
    {
      q: "Which platforms do you manage?",
      a: "Instagram, Facebook, LinkedIn, YouTube, Threads & Twitter/X.",
    },
    {
      q: "Can I approve posts before publishing?",
      a: "Yes, every post is shared before publishing.",
    },
    {
      q: "When will I see results?",
      a: "Typically within 3–4 weeks.",
    },
  ];

  const cta = {
    icon: Sparkles,
    title: "Grow Your Social Presence",
    subtitle: "Build a powerful online identity with Cube Multimedia.",
    buttonText: "Start My Social Media Plan",
  };

  const CtaIcon = cta.icon;

  /* ================= JSX ================= */

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-rose-50">
      <MarketingLandingPage />

      {/* HERO */}
      <section className="bg-gradient-to-br from-red-700 via-rose-800 to-red-900 text-white pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-flex items-center gap-2 bg-white/20 px-5 py-2 rounded-full">
              <Sparkles size={16} />
              {heroContent.tag}
            </span>

            <h1 className="text-5xl font-bold">{heroContent.title}</h1>
            <p className="text-xl text-rose-100">{heroContent.subtitle}</p>
            <p className="text-rose-200">{heroContent.description}</p>

            <div className="flex flex-wrap gap-3">
              {heroContent.features.map((f, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"
                >
                  <Check className="text-green-300" size={18} />
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* FULL FORM (UNCHANGED INPUTS) */}
          <div className="bg-white/95 text-gray-900 p-8 rounded-3xl shadow-xl relative">
            <div className="absolute -top-4 right-6 bg-red-600 text-white px-5 py-2 rounded-lg font-bold text-sm">
              Starting at {heroContent.price}
            </div>

            <h3 className="text-2xl font-bold mb-2 text-center">
              Lead Capture Form
            </h3>
            <p className="text-sm text-gray-600 text-center mb-6">
              Tell us your requirement and we’ll get back to you.
            </p>

            <form className="space-y-4">
              {/* Full Name */}
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-lg"
                required
              />

              {/* Contact */}
              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full px-4 py-3 border rounded-lg"
                required
              />

              {/* WhatsApp */}
              <div className="space-y-2">
                <input
                  type="tel"
                  placeholder="WhatsApp Number (optional)"
                  className="w-full px-4 py-3 border rounded-lg"
                />
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="accent-red-600" />
                  Same as Contact Number
                </label>
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address (optional)"
                className="w-full px-4 py-3 border rounded-lg"
              />

              {/* Purpose */}
              <select className="w-full px-4 py-3 border rounded-lg">
                <option value="">Purpose of Contact</option>
                <option>Digital Marketing</option>
                <option>Social Media Management</option>
                <option>Performance Marketing</option>
                <option>Content Creation</option>
                <option>Reels Production</option>
                <option>Graphic Design</option>
                <option>Website Design</option>
                <option>E-commerce Website</option>
                <option>App Development</option>
                <option>Publicity & PR</option>
                <option>Influencer Marketing</option>
                <option>Consultancy</option>
                <option>Others</option>
              </select>

              {/* Requirement */}
              <textarea
                rows="2"
                maxLength={200}
                placeholder="Describe your requirement (optional)"
                className="w-full px-4 py-3 border rounded-lg resize-none"
              />

              {/* Preferred Contact */}
              <div>
                <p className="text-sm font-medium mb-2">
                  Preferred Contact Method
                </p>
                <div className="flex gap-4 text-sm">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="contactMethod" />
                    Phone Call
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="contactMethod" />
                    WhatsApp
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="contactMethod" />
                    Email
                  </label>
                </div>
              </div>

              {/* Best Time */}
              <select className="w-full px-4 py-3 border rounded-lg">
                <option value="">Best Time to Contact</option>
                <option>Morning (9 AM – 12 PM)</option>
                <option>Afternoon (12 PM – 4 PM)</option>
                <option>Evening (4 PM – 8 PM)</option>
                <option>Anytime</option>
              </select>

              {/* Submit */}
              <button className="w-full bg-gradient-to-r from-red-600 to-rose-700 text-white py-4 rounded-lg font-semibold hover:scale-105 transition">
                Submit & Get a Call Back
              </button>
            </form>
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="bg-white rounded-xl shadow mb-4">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center p-6"
                >
                  <span className="font-semibold">{faq.q}</span>
                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </button>
                {isOpen && <p className="px-6 pb-6 text-gray-600">{faq.a}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-red-700 via-rose-800 to-red-900 text-center text-white">
        <CtaIcon className="mx-auto mb-6 text-yellow-300" size={64} />
        <h2 className="text-3xl font-bold mb-4">{cta.title}</h2>
        <p className="text-xl mb-8 text-rose-100">{cta.subtitle}</p>
        <button className="bg-white text-red-700 px-10 py-4 rounded-full text-lg font-bold inline-flex items-center gap-3">
          {cta.buttonText}
          <ArrowRight />
        </button>
      </section>
    </div>
  );
}
