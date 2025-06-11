import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Wind, InfinityIcon, Zap } from 'lucide-react';

const ImpactSection = () => {
  const items = [
    {
      text: "Drastically reduces reliance on virgin materials",
      icon: <Leaf className="w-6 h-6" />
    },
    {
      text: "Decreases emissions and water consumption",
      icon: <Wind className="w-6 h-6" />
    },
    {
      text: "Generates a circular business model",
      icon: <InfinityIcon className="w-6 h-6" />
    },
    {
      text: "Empowers a network of talent",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Brockmann, Inter, sans-serif' }}>Our Promise: Beyond Fashion, Real Impact</h2>
          <p className="text-xl text-gray-700">
            Every Re:YVE garment is a statement of intent. A conscious choice that makes a difference.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mb-4 mx-auto">
                {item.icon}
              </div>
              <p className="text-gray-800 font-medium text-center">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
