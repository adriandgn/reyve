import React from 'react';
import { motion } from 'framer-motion';
import { ChartLine, Leaf, Heart } from 'lucide-react';

const KeyAdvantages = () => {
  const items = [
    {
      title: "Revenue Growth",
      description: "Transform unsold stock into premium, made-to-order capsules, no discounts, no write-offs, just pure margin recovery.",
      icon: <ChartLine className="w-12 h-12 text-brand-400" />
    },
    {
      title: "Sustainable by Design",
      description: "Built for circularity from the start, Re:YVE regenerates value from existing products, aligning profit with planet.",
      icon: <Leaf className="w-12 h-12 text-brand-400" />
    },
    {
      title: "Increase Customer Retention",
      description: "Engage consumers through brand-led redesigns - opening the door to a value loop where their purchase is just the beginning of a longer relationship built on reinvention.",
      icon: <Heart className="w-12 h-12 text-brand-400" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Brockmann, Inter, sans-serif' }}>Key Advantages</h2>
          <p className="text-xl text-gray-600">
          We are your lifecycle engine to recover value and turn inventory into a long-term asset.          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAdvantages;
