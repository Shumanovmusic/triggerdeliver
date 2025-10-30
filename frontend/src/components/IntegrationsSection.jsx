import React from 'react';
import { integrations } from '../mock';

const IntegrationsSection = () => {
  const allIntegrations = [...integrations, ...integrations, ...integrations];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Our Partners and Integrations
        </h2>

        <div className="relative">
          <div className="flex gap-16 animate-scroll-slow">
            {allIntegrations.map((integration, index) => (
              <div
                key={`${integration.name}-${index}`}
                className="flex-shrink-0 text-gray-400 hover:text-gray-700 transition-all duration-300 font-bold text-xl"
              >
                {integration.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;