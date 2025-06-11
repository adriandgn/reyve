import React from 'react';
import { motion } from 'framer-motion';

const OurSparkSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-square animate-on-scroll opacity-0">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <img
                src="/jade-aucamp-Kj6LgGceZ4M-unsplash.jpg"
                alt="Team working in atelier"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="animate-on-scroll opacity-0" style={{animationDelay: '0.2s'}}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Brockmann, Inter, sans-serif' }}>Our Spark: The Fusion of Passion and Purpose</h2>
            <p className="text-lg text-gray-600 mb-6">
              Re:YVE is the result of passionate minds uniting for design, innovation, and sustainability. We set out to challenge the status quo of an industry that has historically prioritized novelty over longevity, and mass production over conscious craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSparkSection;
