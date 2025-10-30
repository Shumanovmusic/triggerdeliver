import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const InfinityAISection = ({ onOpenLeadForm }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Meet TriggerDeliver AI
              <span className="block mt-2">Adaptive intelligence for lifecycle marketing</span>
            </h2>
            <p className="text-xl text-blue-100">
              Automate predictions, scoring and journey orchestration with transparent AI that marketers control.
            </p>
            <Button
              onClick={onOpenLeadForm}
              className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg group"
            >
              Explore AI capabilities
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-xs text-gray-600 mb-2">Models</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-900">Churn Prediction (30 / 30 days)</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Explain Model Score</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{ width: '85%' }}></div>
                    </div>
                    <div className="text-xs text-gray-500">AI Performance</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="text-xs text-gray-600 mb-1">Predictions</div>
                    <div className="text-2xl font-bold text-blue-600">Churn Prediction</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="text-xs text-gray-600 mb-1">Latest Event</div>
                    <div className="text-2xl font-bold text-purple-600">Engagement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfinityAISection;