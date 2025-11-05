import React from "react";
import { Rocket, Users, Lightbulb } from "lucide-react";

export default function TrustedSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-500 text-sm">
            At Zolvit, we're proud to partner with some of India's most
            respected brands, including Meesha, Amazon, Flipkart, Kotak Bank,
            and more.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {/* Left Column - Expert Support */}
          <div className="md:col-span-1 bg-gray-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Expert Support,
              <br />
              Anytime
              <br />
              Anywhere You
              <br />
              Need It
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              With a network of 350+ verified professionals including CAs, CSs,
              and legal experts, Zolvit delivers expert services that are both
              legally robust and digitally seamless. Whether you're a startup or
              an established business, our online marketplace gives you easy
              access to a wide range of professional services tailored to your
              unique needs.
            </p>
          </div>

          {/* Right Column - Timeline Events */}
          <div className="md:col-span-2 space-y-6">
            {/* 2012 - The Beginning */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center">
                    <Rocket
                      className="w-16 h-16 text-red-600"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    2012 – The Beginning
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    It all began in Chennai, where a passionate team laid the
                    foundation with a clear mission: simplify company
                    incorporation and intellectual property services.
                  </p>
                </div>
              </div>
            </div>

            {/* 2013 - Growing Fast */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center">
                    <Users
                      className="w-16 h-16 text-red-600"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    2013 : Growing Fast, Thinking Ahead
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    As our team tripled in size, so did our ambitions. We dove
                    into developing a powerful Customer Relationship Management
                    (CRM) system and saw our customer base grow with a 90%
                    satisfaction rate.
                  </p>
                </div>
              </div>
            </div>

            {/* 2014 - Tech-Driven */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-center">
                    <Lightbulb
                      className="w-16 h-16 text-red-600"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    2014 : Tech-Driven Transformation
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Embracing technology became our priority. We introduced
                    accounting and government filing services, enhancing the
                    customer journey and achieving a remarkable 300%
                    year-on-year growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
