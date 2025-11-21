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
            Automate customer engagement with real-time data and AI-powered insights
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
              Activate Customers,
              <span className="block">Personalize Every Interaction</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              Deliver omnichannel experiences with TriggerDeliver's intelligent customer data platform for modern B2C teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg group"
              >
                <a href="https://app.triggerdeliver.com/login">
                  Start free trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                onClick={onOpenLeadForm}
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 text-lg"
              >
                View product demo
              </Button>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/1.png"
                alt="TriggerDeliver omnichannel activation overview"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;