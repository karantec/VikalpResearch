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

// Placeholder components - replace with your actual imports
const MarketingLandingPage = () => <div />;
const TestimonialCarousel = () => <div />;

export default function SocialMediaManagement() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    whatsapp: "",
    email: "",
    purpose: "",
    requirement: "",
    contactMethod: "",
    bestTime: "",
    sameAsContact: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

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

  /* ================= FORM HANDLERS ================= */

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus("");

    // Google Form submission URL
    const GOOGLE_FORM_URL =
      "https://docs.google.com/forms/d/e/1FAIpQLScC6JeTpOvm4yKxNARd6VYuEyG8ig67V2yUf_SJ51OiijJvYw/formResponse";

    try {
      const formDataToSubmit = new FormData();

      /* ========================================================
         ✅ ENTRY IDs CORRECTLY CONFIGURED
         All entry IDs have been extracted from your Google Form
      ======================================================== */

      // Field 1: Full Name
      formDataToSubmit.append("entry.1926683633", formData.fullName);

      // Field 2: Contact Number (First field)
      formDataToSubmit.append("entry.244648312", formData.contact);

      // Field 3: Contact Number (Second field - DUPLICATE)
      // Sending the same contact number to both Contact Number fields
      formDataToSubmit.append("entry.1427615509", formData.contact);

      // Field 4: WhatsApp Number
      formDataToSubmit.append(
        "entry.538438623",
        formData.sameAsContact ? formData.contact : formData.whatsapp
      );

      // Field 5: Email Address
      formDataToSubmit.append("entry.1460390854", formData.email);

      // Field 6: Purpose of Contact (Radio buttons - uses hidden field)
      formDataToSubmit.append("entry.2092743132", formData.purpose);

      // Field 7: Describe Your Requirement
      formDataToSubmit.append("entry.140728096", formData.requirement);

      // Field 8: Preferred Contact Method (First field - uses hidden field)
      formDataToSubmit.append("entry.2146762518", formData.contactMethod);

      // Field 9: Preferred Contact Method (Second field - DUPLICATE)
      formDataToSubmit.append("entry.1704350731", formData.contactMethod);

      // Field 10: Best Time to Contact (uses hidden field)
      formDataToSubmit.append("entry.179979842", formData.bestTime);

      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSubmit,
      });

      // With no-cors mode, we assume success if no error is thrown
      setSubmitStatus("success");

      // Reset form
      setFormData({
        fullName: "",
        contact: "",
        whatsapp: "",
        email: "",
        purpose: "",
        requirement: "",
        contactMethod: "",
        bestTime: "",
        sameAsContact: false,
      });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(""), 5000);
    }
  };

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

          {/* FULL FORM WITH GOOGLE FORM CONNECTION */}
          <div className="bg-white/95 text-gray-900 p-8 rounded-3xl shadow-xl relative">
            <div className="absolute -top-4 right-6 bg-red-600 text-white px-5 py-2 rounded-lg font-bold text-sm">
              Starting at {heroContent.price}
            </div>

            <h3 className="text-2xl font-bold mb-2 text-center">
              Lead Capture Form
            </h3>
            <p className="text-sm text-gray-600 text-center mb-6">
              Tell us your requirement and we'll get back to you.
            </p>

            <div className="space-y-4">
              {/* Full Name */}
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                required
              />

              {/* Contact */}
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="Contact Number"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                required
              />

              {/* WhatsApp */}
              <div className="space-y-2">
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="WhatsApp Number (optional)"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                  disabled={formData.sameAsContact}
                />
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    name="sameAsContact"
                    checked={formData.sameAsContact}
                    onChange={handleInputChange}
                    className="accent-red-600"
                  />
                  Same as Contact Number
                </label>
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address (optional)"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />

              {/* Purpose */}
              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              >
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
                name="requirement"
                value={formData.requirement}
                onChange={handleInputChange}
                rows="2"
                maxLength={200}
                placeholder="Describe your requirement (optional)"
                className="w-full px-4 py-3 border rounded-lg resize-none focus:ring-2 focus:ring-red-500 focus:outline-none"
              />

              {/* Preferred Contact */}
              <div>
                <p className="text-sm font-medium mb-2">
                  Preferred Contact Method
                </p>
                <div className="flex gap-4 text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="Phone Call"
                      checked={formData.contactMethod === "Phone Call"}
                      onChange={handleInputChange}
                      className="accent-red-600"
                    />
                    Phone Call
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="WhatsApp"
                      checked={formData.contactMethod === "WhatsApp"}
                      onChange={handleInputChange}
                      className="accent-red-600"
                    />
                    WhatsApp
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="Email"
                      checked={formData.contactMethod === "Email"}
                      onChange={handleInputChange}
                      className="accent-red-600"
                    />
                    Email
                  </label>
                </div>
              </div>

              {/* Best Time */}
              <select
                name="bestTime"
                value={formData.bestTime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              >
                <option value="">Best Time to Contact</option>
                <option>Morning (9 AM – 12 PM)</option>
                <option>Afternoon (12 PM – 4 PM)</option>
                <option>Evening (4 PM – 8 PM)</option>
                <option>Anytime</option>
              </select>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="bg-green-100 text-green-800 p-3 rounded-lg text-sm font-medium flex items-center gap-2">
                  <Check size={18} />
                  Form submitted successfully! We'll contact you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="bg-red-100 text-red-800 p-3 rounded-lg text-sm font-medium">
                  ✗ Something went wrong. Please try again.
                </div>
              )}

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-600 to-rose-700 text-white py-4 rounded-lg font-semibold hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? "Submitting..." : "Submit & Get a Call Back"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="bg-white rounded-xl shadow mb-4">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition"
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
        <button className="bg-white text-red-700 px-10 py-4 rounded-full text-lg font-bold inline-flex items-center gap-3 hover:scale-105 transition">
          {cta.buttonText}
          <ArrowRight />
        </button>
      </section>
    </div>
  );
}
