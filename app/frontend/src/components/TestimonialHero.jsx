import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Quote } from 'lucide-react';

const TestimonialHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <Quote className="w-16 h-16 text-blue-400" />
          </div>
          
          <div className="inline-block bg-blue-800/40 backdrop-blur-sm rounded-2xl px-8 py-4">
            <div className="text-5xl md:text-6xl font-bold">50%</div>
            <div className="text-lg text-blue-200 mt-2">Cost reduction</div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold max-w-4xl mx-auto leading-relaxed">
            "Thanks to the unified platform that CDPiGaming provides, we have been able to reduce our costs by 50% by investing in a CRM that has it all!"
          </h2>

          <div className="flex items-center justify-center gap-4 pt-6">
            <img
              src="https://i.pravatar.cc/80?img=1"
              alt="Andreia Oliveira"
              className="w-16 h-16 rounded-full border-2 border-white"
            />
            <div className="text-left">
              <div className="font-bold text-lg">Andreia Oliveira</div>
              <div className="text-blue-200">COO of Betsul</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialHero;