import React from "react";

const RelatedBlogSection = () => {
  const blogs = [
    {
      id: 1,
      badge: "Digital Marketing",
      title: "Complete Digital Marketing Strategy for Business Growth in 2025",
      description:
        "Learn how to build a powerful digital marketing strategy using SEO, social media, content, and paid ads to scale your business online.",
      imageUrl:
        "https://imgs.search.brave.com/FPZyx8SXx2UrNSb520tdHNpqWCy-EDJmXZVAaA4A58Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZGln/aXRhbC1tYXJrZXRp/bmctcGljdHVyZXMt/M2FpYWh5ajlndzR1/cDJpNS5qcGc",
      buttonText: "Read Details",
      bgColor: "bg-yellow-50",
      titleColor: "text-gray-900",
    },
    {
      id: 2,
      badge: "SEO & Growth",
      title: "SEO vs Paid Ads: Which Digital Marketing Channel Works Best?",
      description:
        "Understand the key differences between SEO and paid advertising, and learn when to use each channel for maximum ROI.",
      imageUrl:
        "https://imgs.search.brave.com/FPZyx8SXx2UrNSb520tdHNpqWCy-EDJmXZVAaA4A58Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZGln/aXRhbC1tYXJrZXRp/bmctcGljdHVyZXMt/M2FpYWh5ajlndzR1/cDJpNS5qcGc",
      buttonText: "Read Details",
      bgColor: "bg-purple-900",
      titleColor: "text-white",
    },
    {
      id: 3,
      badge: "Social Media",
      title: "Social Media Marketing Guide: Grow Your Brand & Engagement",
      description:
        "Discover proven social media marketing techniques to build brand awareness, increase engagement, and generate leads.",
      imageUrl:
        "https://imgs.search.brave.com/FPZyx8SXx2UrNSb520tdHNpqWCy-EDJmXZVAaA4A58Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZGln/aXRhbC1tYXJrZXRp/bmctcGljdHVyZXMt/M2FpYWh5ajlndzR1/cDJpNS5qcGc",
      buttonText: "Read Details",
      bgColor: "bg-gray-100",
      titleColor: "text-gray-900",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#4a0e0e] via-[#2d0a0a] to-[#1a0505] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            The Creative Buzz: News,ideas & Innovations
          </h2>
          <p className="text-2xl text-white mb-2">
            Unfolding the latest campaigns, trends & digital conversations
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-200 hover:border-red-500 hover:scale-105"
            >
              {/* Blog Image */}
              <div className={`${blog.bgColor} h-48 relative overflow-hidden`}>
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {blog.badge}
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h3
                  className={`text-lg md:text-xl font-bold ${blog.titleColor} mb-3`}
                >
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {blog.description}
                </p>
                <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-300 flex items-center gap-1">
                  {blog.buttonText}
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogSection;
