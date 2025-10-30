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
              Recognised Industry Leader
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are proudly recognised around different review platforms and leading reports, including G2 and Forrester, along with many awards won for "Marketing & Services Provider of the Year" and "Online Initiative of the Year".
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;