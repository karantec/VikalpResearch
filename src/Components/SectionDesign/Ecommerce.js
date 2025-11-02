import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  CreditCard,
  Award,
  Shield,
  Star,
  ArrowRight,
  Check,
  Sparkles,
  Zap,
  Target,
} from "lucide-react";
import TestimonialCarousel from "./Testimonial";
import MarketingLandingPage from "./TopDesign";

export default function EcommerceWebsiteDevelopment() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50">
      <MarketingLandingPage />

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
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
      <div className="relative bg-gradient-to-br from-pink-600 via-rose-700 to-pink-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div
            className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-medium border border-white/30 animate-fade-in">
                <Sparkles className="w-4 h-4 animate-spin-slow" />
                <span>Start Selling Smarter, Scale Faster</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-100 animate-fade-in-up">
                E-Commerce Website Development
              </h1>

              <p
                className="text-lg md:text-xl leading-relaxed text-pink-50 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Sell smart, scale fast. We build eCommerce websites that make
                shopping simple, secure, and seamless—empowering your business
                to reach customers worldwide.
              </p>

              <div
                className="flex flex-wrap gap-4 text-sm animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                {[
                  "Secure Payments",
                  "Mobile-Friendly Design",
                  "Easy Product Management",
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

            {/* Right Form Card */}
            <div
              className="flex-1 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="relative bg-white/95 backdrop-blur-lg text-gray-900 p-8 rounded-3xl shadow-2xl border border-white/20 hover:shadow-pink-500/20 transition-all duration-500 overflow-hidden">
                <div className="absolute -top-3 right-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 text-white px-6 py-2 rounded-b-xl shadow-lg font-bold text-sm animate-bounce-slow">
                  💥 Launch Offer – Starting at ₹7,999
                </div>

                <div className="relative mt-6 space-y-6">
                  <div className="text-center">
                    <div className="text-5xl mb-3">🛍️</div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      Start Your Online Store
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Get your full-featured eCommerce site from{" "}
                      <span className="text-pink-600 font-bold">₹7,999</span>
                    </p>
                  </div>

                  {/* Contact Form */}
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                    />
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                    />
                    <input
                      type="text"
                      placeholder="City/Pincode"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                    />

                    {/* WhatsApp toggle */}
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
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2 group"
                    >
                      <span>Get a Free Demo</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold mb-4">
            Why It Matters
          </span>
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-600">
            Empower Your Business to Sell Globally
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            An eCommerce website helps you reach more customers and increase
            revenue through automation and smart shopping experiences. From
            secure payments to easy product management, we create systems that
            work while you sleep.
          </p>
        </div>
      </div>

      {/* PROCESS */}
      <div className="py-20 bg-gradient-to-br from-pink-50 via-white to-rose-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold mb-4">
              Our Process
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-600">
              How We Build Your Online Store
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Requirement Gathering",
                description:
                  "We start by understanding your business model, product range, and customer needs to plan the ideal eCommerce experience.",
                icon: Target,
              },
              {
                step: "02",
                title: "UI/UX and Product Layout Planning",
                description:
                  "We design intuitive and beautiful product pages, ensuring smooth navigation and a delightful user journey.",
                icon: Sparkles,
              },
              {
                step: "03",
                title: "Development & Payment Integration",
                description:
                  "We implement your online store with a secure payment gateway (Razorpay, Stripe, etc.) and backend automation for efficiency.",
                icon: CreditCard,
              },
              {
                step: "04",
                title: "Product Uploads & Testing",
                description:
                  "All products are uploaded, tested, and optimized for speed, ensuring flawless checkout and order processing.",
                icon: Shield,
              },
              {
                step: "05",
                title: "Final Deployment & Training",
                description:
                  "We launch your store and provide easy-to-follow training so you can manage orders, inventory, and offers effortlessly.",
                icon: Award,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg border-l-4 border-pink-600 hover:shadow-2xl hover:-translate-x-2 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-all">
                    {item.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="w-6 h-6 text-pink-600" />
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
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold mb-4">
              Case Study
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-600">
              Success Story: P Leathers
            </h2>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-pink-600 mb-2">Client</h3>
                <p className="text-gray-700">P Leathers</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-pink-600 mb-2">
                  Challenge
                </h3>
                <p className="text-gray-700">
                  Needed an online store for premium leather goods with easy
                  navigation and integrated offers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-pink-600 mb-2">
                  Strategy
                </h3>
                <p className="text-gray-700">
                  Developed a Shopify-based store with product categorization,
                  dynamic offers, and smooth checkout integration.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-pink-600 mb-2">Result</h3>
                <p className="text-gray-700">
                  Online sales grew by 250% within two months, significantly
                  boosting brand recognition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="py-20 bg-gradient-to-br from-white to-pink-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold mb-4">
              FAQs
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-600">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Do you integrate payment gateways?",
                a: "Yes, we integrate Razorpay, PayU, Stripe, and many more based on your region and preferences.",
              },
              {
                q: "Can I manage products myself?",
                a: "Absolutely! You’ll get a user-friendly dashboard to manage products, categories, discounts, and orders easily.",
              },
              {
                q: "Can you build custom features?",
                a: "Yes, our developers can add custom modules like advanced search, multi-vendor setup, or subscription systems.",
              },
              {
                q: "Do you provide training?",
                a: "Yes, we offer hands-on training sessions and documentation for your team to handle updates independently.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
              >
                <summary className="p-6 cursor-pointer font-semibold text-lg hover:bg-pink-50 flex items-center justify-between">
                  <span>{faq.q}</span>
                  <ArrowRight className="w-5 h-5 text-pink-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 bg-gradient-to-br from-pink-600 via-rose-700 to-pink-900 text-center relative overflow-hidden">
        <Sparkles className="w-16 h-16 text-yellow-300 mx-auto mb-8 animate-bounce-slow" />
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Launch Your Store with Cube Multimedia
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-pink-100">
          Build a modern, scalable eCommerce website and start selling globally.
        </p>
        <button className="group bg-white text-pink-600 px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-110 inline-flex items-center gap-3 transition-all">
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
