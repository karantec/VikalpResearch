import React, { useState } from "react";
import { Facebook, Instagram, Twitter, ChevronUp } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Contact Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-red-600 uppercase tracking-tight">
                CUBE
              </h2>
              <p className="text-red-600 text-sm">multimedia</p>
            </div>

            <div className="space-y-2 text-sm">
              <p className="text-gray-400">Email us:</p>
              <a
                href="mailto:contact@cubemultimedia.in"
                className="text-white hover:text-red-600 transition-colors"
              >
                contact@cubemultimedia.in
              </a>

              <p className="text-gray-400 mt-4">COSTUMER SERVICES</p>
              <a
                href="tel:01169310493"
                className="text-white text-xl font-semibold hover:text-red-600 transition-colors"
              >
                01169310493
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  Content Creation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  Web Designing
                </a>
              </li>
            </ul>
          </div>

          {/* Important */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Important</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  Top Trending
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  Recommended
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* About Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">About Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  Terms Of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Subscribe Newsletter</h3>
            <div className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-2 bg-neutral-800 text-white border border-neutral-700 rounded focus:outline-none focus:border-red-600 transition-colors"
              />
              <button
                onClick={handleSubscribe}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition-colors"
              >
                SUBSCRIBE
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-sm text-gray-400 mb-3">Follow Us:</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © 2004 <span className="text-red-600">Cube Multimedia</span>. All
              Rights Reserved.
            </div>

            {/* App Store Buttons */}
            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-400">Mobile App Soon!</p>
              <a href="#" className="inline-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </a>
              <a href="#" className="inline-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </footer>
  );
}
