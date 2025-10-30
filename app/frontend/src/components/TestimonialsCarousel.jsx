import React, { useState } from 'react';
import { testimonials } from '../mock';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from './ui/button';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Why Our Customers Love Us
        </h2>
        <p className="text-center text-blue-200 mb-16">
          The responses and feedback from our customers.
        </p>

        <div className="relative">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 space-y-8">
            <div className="flex justify-center">
              <Quote className="w-12 h-12 text-blue-400" />
            </div>

            <p className="text-xl md:text-2xl text-center leading-relaxed">
              {currentTestimonial.quote}
            </p>

            <div className="flex items-center justify-center gap-4">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.author}
                className="w-16 h-16 rounded-full border-2 border-white"
              />
              <div className="text-left">
                <div className="font-bold text-lg">{currentTestimonial.author}</div>
                <div className="text-blue-200">{currentTestimonial.position}</div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prevTestimonial}
              size="icon"
              className="rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextTestimonial}
              size="icon"
              className="rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;