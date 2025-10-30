import React from 'react';
import { features } from '../mock';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const FeaturesSection = ({ onOpenLeadForm }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Elevating Customer Engagement With
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Data-Driven Lifecycle Journeys
          </h2>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <Button
                  variant="link"
                  className="text-blue-600 hover:text-blue-700 p-0 text-lg group"
                >
                  Discover more
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div
                className={`relative ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                } ${
                  feature.id === 4 || feature.id === 1
                    ? 'flex justify-center items-center'
                    : ''
                }`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className={
                      feature.id === 4
                        ? 'w-full h-auto max-w-[312px] sm:max-w-[360px]'
                        : feature.id === 1
                        ? 'w-full h-auto max-w-[320px] sm:max-w-[360px]'
                        : 'w-full h-[400px] object-cover'
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
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

export default FeaturesSection;