import React from "react";

const StickyReferButton = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <button className="bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 text-gray-900 font-bold rounded-l-2xl shadow-2xl transition-all duration-300 flex flex-col items-center justify-center py-4 px-3 group hover:px-4">
        {/* Icon Circle */}
        <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mb-2 shadow-md group-hover:scale-110 transition-transform">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>

        {/* Vertical Text */}
        <div className="flex flex-col items-center">
          <span className="writing-mode-vertical text-sm font-bold tracking-wider whitespace-nowrap">
            <span
              className="inline-block transform rotate-180"
              style={{ writingMode: "vertical-rl" }}
            >
              Refer a Friend
            </span>
          </span>
        </div>
      </button>
    </div>
  );
};

export default StickyReferButton;
