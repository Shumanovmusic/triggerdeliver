import React from 'react';
import { Award, Star } from 'lucide-react';

const AwardsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="/images/main-1.png" alt="Industry Leader" className="rounded-3xl shadow-2xl w-full" />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Recognised by Modern Marketing Teams
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              TriggerDeliver is featured in leading martech reports and trusted by brands ranked by G2, Forrester and Gartner for customer engagement excellence.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-lg group"
            >
              Explore analyst coverage
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

export default AwardsSection;