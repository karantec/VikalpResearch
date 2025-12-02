import React from "react";
import {
  Users,
  Target,
  Eye,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Award,
  TrendingUp,
  Lightbulb,
  Briefcase,
} from "lucide-react";
import HeroSection from "./Others/TopAbout";
import TrustedSection from "./Others/Trusted";
import FounderSection from "./Others/FounderSection";

export default function CubeAboutPage() {
  const teamMembers = [
    { name: "Sumanta Dey", role: "Founder & CEO", image: "👨‍💼" },
    { name: "Rohit K. Mukherjee", role: "Creative Director", image: "👨‍💼" },
    { name: "Aryan Saha", role: "Lead Developer", image: "👨‍💻" },
    { name: "Priya Chatterjee", role: "Content Strategist", image: "👩‍💼" },
    { name: "Amit Das", role: "Digital Marketing Lead", image: "👨‍💼" },
    { name: "Shalini Roy", role: "PR Manager", image: "👩‍💼" },
    { name: "Ravi Kumar", role: "Video Production", image: "👨‍💼" },
    { name: "Neha Banerjee", role: "Social Media Manager", image: "👩‍💼" },
    { name: "Kunal Sen", role: "Graphic Designer", image: "👨‍💻" },
    { name: "Anjali Ghosh", role: "Client Relations", image: "👩‍💼" },
    { name: "Siddharth Paul", role: "Web Developer", image: "👨‍💻" },
    { name: "Ritika Sharma", role: "SEO Specialist", image: "👩‍💼" },
    { name: "Abhishek Mondal", role: "Photographer", image: "👨‍💼" },
    { name: "Tanmay Dutta", role: "Motion Graphics", image: "👨‍💻" },
  ];

  return (
    <div>
      <HeroSection />
      {/* Value Propositions Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Delivering Unparalleled Value */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Delivering Unparalleled Value
                <br />
                to Our Customers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                From independent audits of all our products to ensuring our
                clients get top-notch service quality throughout the customer
                lifecycle, we constantly strive to exceed expectations and
                deliver superior value to our customers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our commitment to excellence drives everything we do, from
                initial consultation to ongoing support and beyond.
              </p>
            </div>
            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center overflow-hidden">
              <img
                src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1762291226/Delivering_Unparalleled_Value_mlonen.png"
                alt="Team delivering value to customers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Built on Trust */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center overflow-hidden order-2 md:order-1">
              <img
                src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1762291256/Built_on_Trust_Powered_by_Results_x5oxfw.png"
                alt="Business handshake representing trust"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Built on Trust, Powered by Results
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Cube Multimedia, trust isn't just earned—it's the foundation
                of everything we do. With a track record spanning years and
                hundreds of satisfied clients, we've built lasting relationships
                through transparency, reliability, and measurable outcomes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every project is a partnership where your success is our
                priority, and we don't just work for you—we work with you.
              </p>
            </div>
          </div>

          {/* Empowering SMBs */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Empowering SMBs to Succeed
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Small and medium businesses are the backbone of our economy, and
                at Cube Multimedia, we're dedicated to giving them the tools,
                strategies, and support they need to compete and thrive in
                today's digital landscape.
              </p>
              <button className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Know More
              </button>
            </div>
            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center overflow-hidden">
              <img
                src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1762291227/Empowering_SMBs_to_Succeed_dluvvk.png"
                alt="Small business team working together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders */}
      <TrustedSection />

      {/* Testimonials/Achievements */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border border-red-100">
            <div className="w-12 h-12 bg-red-600 rounded-full mb-4 flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Strategic Expansion
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Over the past year, we expanded from 3 to 9 clients. Now we're
              heading toward 150+ clients while exploring opportunities in
              sectors like construction and insurance to ensure diverse growth.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border border-red-100">
            <div className="w-12 h-12 bg-red-600 rounded-full mb-4 flex items-center justify-center text-white font-bold text-xl">
              A
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Achieving Milestones
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              This quarter, we achieved a major milestone by launching new
              service lines and reaching our highest client satisfaction score
              to date. Our team has grown to 14 dedicated professionals.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border border-red-100">
            <div className="w-12 h-12 bg-red-600 rounded-full mb-4 flex items-center justify-center text-white font-bold text-xl">
              L
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Leading Legal Tech Nationwide
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Having begun as India's most agile tech-based firm, we positioned
              ourselves as a leader in bridging legal, tax, and compliance
              services with cutting-edge technology nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              About Cube Multimedia
            </h2>
            <div className="text-lg leading-relaxed space-y-4 mb-12">
              <p>
                Cube Multimedia isn't just a marketing agency — it's a growth
                partner for brands that dream big. Born in Bengal and built with
                passion, Cube is redefining how creativity and strategy work
                together. From digital marketing and content creation to
                publicity, PR, and education — we help brands scale smarter with
                the right balance of storytelling, performance, and technology.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-red-100 leading-relaxed">
                  To simplify marketing and make creative growth accessible for
                  every business — from startups to global brands. We aim to be
                  the go-to media agency for anyone who believes in growing with
                  purpose, creativity, and technology.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-red-100 leading-relaxed">
                  To build Bengal's most trusted creative powerhouse that
                  represents innovation, youth, and global thinking.
                </p>
              </div>
            </div>

            {/* Who We Are */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Who We Are</h3>
              </div>
              <p className="text-red-100 leading-relaxed">
                Cube Multimedia is more than just an agency — it's a creative
                ecosystem built to empower brands, creators, and businesses. We
                specialize in Digital Marketing, Content Creation, Publicity &
                PR, and IT Solutions, creating impact across every corner of the
                digital world. Since its inception, Cube has collaborated with
                100+ clients and partnered with Bengal's top celebrities,
                influencers, and public figures — shaping how brands communicate
                and grow online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      {/* Contact Section */}
      <FounderSection />
      <section
        cla
        ssName="bg-gradient-to-br from-red-700 to-red-900 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Get In Touch
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Office</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-2">Address</p>
                      <p className="text-red-100 leading-relaxed">
                        68, Roy Mallick Colony, Ghughudanga, Kolkata, West
                        Bengal 700074
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-2">Call / WhatsApp</p>
                      <p className="text-red-100">+91 90469 65841</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-2">Email</p>
                      <p className="text-red-100">hello@cubemultimedia.in</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Connect With Cube</h3>
                <div className="grid grid-cols-3 gap-4">
                  <a
                    href="https://www.facebook.com/cubemultimedia.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-colors flex flex-col items-center gap-2"
                  >
                    <Facebook className="w-8 h-8" />
                    <span className="text-xs text-center">Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/cubemultimedia.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-colors flex flex-col items-center gap-2"
                  >
                    <Instagram className="w-8 h-8" />
                    <span className="text-xs text-center">Instagram</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@CubeMultimedia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-colors flex flex-col items-center gap-2"
                  >
                    <Youtube className="w-8 h-8" />
                    <span className="text-xs text-center">YouTube</span>
                  </a>
                  <a
                    href="https://in.linkedin.com/company/cubemultimedia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-colors flex flex-col items-center gap-2"
                  >
                    <Linkedin className="w-8 h-8" />
                    <span className="text-xs text-center">LinkedIn</span>
                  </a>
                  <a
                    href="https://x.com/cubemultimediax"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-colors flex flex-col items-center gap-2"
                  >
                    <Twitter className="w-8 h-8" />
                    <span className="text-xs text-center">Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
