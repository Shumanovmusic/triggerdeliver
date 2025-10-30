import React from 'react';

const DiscoverSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">TD</span>
                    </div>
                    <div>
                      <div className="text-sm text-gray-900 font-bold">RetailCo</div>
                      <div className="text-xs text-gray-500">now</div>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4">
                    <p className="text-gray-900 text-sm">
                      Hi Alex, your 20% bundle offer expires today. Complete your purchase to unlock free shipping.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xs text-gray-600 mb-1">Latest Sessions</div>
                      <div className="text-lg font-bold text-gray-900">98.2K</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xs text-gray-600 mb-1">Predictions</div>
                      <div className="text-lg font-bold text-green-600">+12%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Intelligent Customer Activation Platform
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Trigger timely, relevant messages that build loyalty and drive conversion across every channel.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-white hover:text-blue-200 font-medium text-lg group"
            >
              Discover more
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;