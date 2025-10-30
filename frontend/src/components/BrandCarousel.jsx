import React from 'react';
import { brandLogos } from '../mock';

const BrandCarousel = () => {
  // Triple the logos for seamless loop
  const allLogos = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-gray-500 text-sm font-medium mb-12">
          Trusted by top brands and partners
        </h3>
        <div className="relative">
          <div className="flex gap-12 animate-scroll">
            {allLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 text-gray-400 hover:text-gray-700 transition-all duration-300 font-bold text-xl"
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;