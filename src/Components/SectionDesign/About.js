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
} from "lucide-react";

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative mt-15 bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-white overflow-hidden min-h-screen flex flex-col">
        {/* Animated Background Elements */}

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10 flex-grow flex items-center">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 inline-block">
              <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold border border-white/30 shadow-lg">
                🚀 Trusted Since 2018
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              Simplifying Legal,
              <span className="block bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
                Tax & Compliance
              </span>
            </h1>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 text-red-100">
              for Growing Businesses
            </h2>

            <p className="text-base md:text-xl text-red-50 mb-10 max-w-3xl mx-auto leading-relaxed">
              A 2018 Startup in Kolkata (India). The Best Solution for all Needs
              of Startups,
              <span className="font-semibold">
                {" "}
                Cutting-edge Launch Delivery in India
              </span>
              <br />
              <span className="text-red-200">
                Built on Cloud • Trusted since 2018
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-red-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-red-50 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105 transform">
                Get Started Now
              </button>
              <button className="border-2 border-white/50 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:scale-105 transform">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
                <div className="text-red-200 text-sm">Clients</div>
              </div>
              <div className="text-center border-x border-white/20">
                <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                <div className="text-red-200 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">7+</div>
                <div className="text-red-200 text-sm">Years</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Image Grid */}
        <div className="container mx-auto px-4 pb-12 relative z-10">
          <div className="flex justify-center gap-4 md:gap-6">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-xl border-2 border-white/30 shadow-2xl hover:scale-110 transition-transform duration-300 hover:bg-white/20 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-red-300/50 to-transparent"></div>
            </div>
            <div
              className="w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-xl border-2 border-white/30 shadow-2xl hover:scale-110 transition-transform duration-300 hover:bg-white/20 overflow-hidden"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="w-full h-full bg-gradient-to-br from-orange-300/50 to-transparent"></div>
            </div>
            <div
              className="w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-xl border-2 border-white/30 shadow-2xl hover:scale-110 transition-transform duration-300 hover:bg-white/20 overflow-hidden"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="w-full h-full bg-gradient-to-br from-pink-300/50 to-transparent"></div>
            </div>
            <div
              className="w-16 h-16 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-xl border-2 border-white/30 shadow-2xl hover:scale-110 transition-transform duration-300 hover:bg-white/20 overflow-hidden"
              style={{ transitionDelay: "300ms" }}
            >
              <div className="w-full h-full bg-gradient-to-br from-red-400/50 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Wave Shape */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

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
              <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200"></div>
            </div>
          </div>

          {/* Built on Trust */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center overflow-hidden order-2 md:order-1">
              <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200"></div>
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
              <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Industry Leaders */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Trusted by Industry Leaders
          </h2>

          <div className="max-w-5xl mx-auto space-y-16">
            {/* Expert Support */}
            <div className="flex items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Expert Support,
                  <br />
                  Anytime,
                  <br />
                  Anywhere You Need It
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Whether you're launching a campaign at midnight or
                  troubleshooting a strategy on Sunday, our team is always
                  accessible. We believe great support isn't bound by business
                  hours—it's about being there when you need us most.
                </p>
              </div>
              <div className="w-32 h-32 flex items-center justify-center">
                <Award className="w-20 h-20 text-red-600" />
              </div>
            </div>

            {/* Growing Together */}
            <div className="flex items-center gap-8">
              <div className="w-32 h-32 flex items-center justify-center order-2 md:order-1">
                <TrendingUp className="w-20 h-20 text-red-600" />
              </div>
              <div className="flex-1 order-1 md:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  2023 - Growing fast, Thinking Ahead
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  2023 has been a year of exponential growth and strategic
                  evolution for Cube Multimedia. As we've expanded our reach and
                  refined our services, we've kept our eyes firmly on the
                  future—innovating, adapting, and positioning ourselves to lead
                  in an ever-changing digital world.
                </p>
              </div>
            </div>

            {/* Tech-Driven Transformation */}
            <div className="flex items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  2024 - Tech-Driven Transformation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  This year marks a pivotal shift as we integrate cutting-edge
                  technology and AI-driven solutions into every aspect of our
                  work. From automation to advanced analytics, we're
                  transforming how brands connect, engage, and grow in the
                  digital age.
                </p>
              </div>
              <div className="w-32 h-32 flex items-center justify-center">
                <Lightbulb className="w-20 h-20 text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

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
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Our Team members
        </h2>
        <p className="text-gray-600 text-center mb-12">
          A 2018 Startup in Kolkata (India). The Best Solution for all Needs of
          Startups, Cutting-edge Launch Delivery in India. Built on Cloud •
          Trusted since 2018
        </p>

        {/* Team Categories */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          <button className="text-red-600 font-semibold border-b-2 border-red-600 pb-2">
            All
          </button>
          <button className="text-gray-600 hover:text-red-600 pb-2">
            Human Relations
          </button>
          <button className="text-gray-600 hover:text-red-600 pb-2">
            Board & Investors
          </button>
          <button className="text-gray-600 hover:text-red-600 pb-2">
            Advisors
          </button>
          <button className="text-gray-600 hover:text-red-600 pb-2">
            Management
          </button>
          <button className="text-gray-600 hover:text-red-600 pb-2">
            All Staffs
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[3/4] bg-gradient-to-b from-red-400 to-red-600 flex items-center justify-center text-6xl">
                {member.image}
              </div>
              <div className="bg-red-600 text-white p-4 text-center">
                <h3 className="font-bold text-sm mb-1">{member.name}</h3>
                <p className="text-red-100 text-xs">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">
            Behind Cube stands a young and passionate team of marketers,
            designers, filmmakers, and strategists led by{" "}
            <span className="font-bold text-red-600">Sumanta Dey</span> — the
            mind behind the brand's creative and marketing intelligence.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-20">
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
