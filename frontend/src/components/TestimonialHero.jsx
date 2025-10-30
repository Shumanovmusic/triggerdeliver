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
            <div className="text-5xl md:text-6xl font-bold">35%</div>
            <div className="text-lg text-blue-200 mt-2">Less time spent on campaigns</div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold max-w-4xl mx-auto leading-relaxed">
            "TriggerDeliver centralizes every channel, workflow and insight. We launch intelligent customer journeys in hours instead of weeks."
          </h2>

          <div className="flex items-center justify-center gap-4 pt-6">
            <img
              src="https://i.pravatar.cc/80?img=1"
              alt="Eva Martinez"
              className="w-16 h-16 rounded-full border-2 border-white"
            />
            <div className="text-left">
              <div className="font-bold text-lg">Eva Martinez</div>
              <div className="text-blue-200">VP of Growth, Lumina Retail</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialHero;