import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = ({ onOpenLeadForm }) => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-3 mb-16">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-4 flex-wrap">
          <p className="text-white text-sm md:text-base">
            Experience XP at your own pace, try our interactive demo
          </p>
          <Button
            onClick={onOpenLeadForm}
            size="sm"
            className="bg-white text-blue-900 hover:bg-gray-100 rounded-full px-6"
          >
            Click Here
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              One Solution,{' '}
              <span className="block">Infinite Possibilities</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              Turn visitors into loyal players with real-time data, AI and gamification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onOpenLeadForm}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg group"
              >
                Book a demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={onOpenLeadForm}
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 text-lg"
              >
                Discover our Platform
              </Button>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/main-1.png"
                alt="Dashboard Preview"
                className="w-full h-auto rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;