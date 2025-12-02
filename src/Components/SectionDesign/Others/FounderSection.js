import React from "react";
import {
  Award,
  Briefcase,
  Linkedin,
  Mail,
  Facebook,
  Instagram,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export default function FounderSection() {
  return (
    <section className="bg-gradient-to-br from-red-50 via-white to-red-50 py-24 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-red-400 to-red-600 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-red-300 to-red-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-red-200 to-transparent rounded-full blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm tracking-wider uppercase mb-4">
            <Sparkles className="w-4 h-4" />
            Leadership
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet Our Founder
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 max-w-6xl mx-auto">
          {/* Left Column - Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1762291252/Team_Sumanta_dey_tpnrwr.png"
                  alt="Sumanta Dey - Founder & CEO"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Established</p>
                    <p className="text-2xl font-bold text-red-600">2018</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Startups Served</p>
                    <p className="text-2xl font-bold text-red-600">100+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Information */}
          <div className="space-y-8">
            {/* Name & Title */}
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                Sumanta Dey
              </h3>
              <p className="text-2xl text-red-600 font-semibold mb-2">
                Founder & CEO
              </p>
              <p className="text-gray-500 text-lg">Cube • Kolkata, India</p>
            </div>

            {/* Description */}
            <div className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-2xl p-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                The visionary mind behind Cube's creative and marketing
                intelligence. Leading a passionate team of marketers, designers,
                filmmakers, and strategists to deliver cloud-first solutions for
                startups across India.
              </p>
            </div>

            {/* Expertise Areas */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Core Expertise
              </h4>
              <div className="grid gap-4">
                <div className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100 hover:border-red-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">
                      Creative & Marketing Intelligence
                    </h5>
                    <p className="text-sm text-gray-600">
                      Strategic vision for brand growth and market positioning
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100 hover:border-red-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">
                      Startup Solution Specialist
                    </h5>
                    <p className="text-sm text-gray-600">
                      Cloud-first solutions tailored for emerging businesses
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100 hover:border-red-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">
                      Innovation Pioneer
                    </h5>
                    <p className="text-sm text-gray-600">
                      7+ years of cutting-edge technology implementation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-gray-600 font-medium">Connect:</span>
              <div className="flex gap-3">
                <button className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 hover:from-red-500 hover:to-red-600 text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 hover:from-red-500 hover:to-red-600 text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Mail className="w-5 h-5" />
                </button>
                <button className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 hover:from-red-500 hover:to-red-600 text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 hover:from-red-500 hover:to-red-600 text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <Instagram className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-2xl border-2 border-gray-100 group-hover:border-transparent p-8 text-center transition-all duration-300 group-hover:-translate-y-1">
              <div className="text-5xl font-bold bg-gradient-to-br from-red-500 to-red-600 bg-clip-text text-transparent mb-3">
                7+
              </div>
              <div className="text-gray-600 group-hover:text-white font-medium transition-colors">
                Years of Excellence
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-2xl border-2 border-gray-100 group-hover:border-transparent p-8 text-center transition-all duration-300 group-hover:-translate-y-1">
              <div className="text-5xl font-bold bg-gradient-to-br from-red-500 to-red-600 bg-clip-text text-transparent mb-3">
                100+
              </div>
              <div className="text-gray-600 group-hover:text-white font-medium transition-colors">
                Startups Empowered
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-2xl border-2 border-gray-100 group-hover:border-transparent p-8 text-center transition-all duration-300 group-hover:-translate-y-1">
              <div className="text-5xl font-bold bg-gradient-to-br from-red-500 to-red-600 bg-clip-text text-transparent mb-3">
                24/7
              </div>
              <div className="text-gray-600 group-hover:text-white font-medium transition-colors">
                Support & Innovation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
