import React from 'react';
import { caseStudies } from '../mock';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const ResultsSection = ({ onOpenLeadForm }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Results We Drive
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={study.image}
                  alt={study.company}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full font-bold text-gray-900">
                  {study.company}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {study.title}
                </h3>
                <a
                  href={study.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                >
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={onOpenLeadForm}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg"
          >
            Explore TriggerDeliver
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;