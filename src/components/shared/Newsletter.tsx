import React from 'react';
import { Link } from 'react-router-dom';

const Newsletter: React.FC = () => {
  // Functionality related to newsletter subscription has been removed.
  // The button below can be linked to a booking/demo page or service.

  return (
    <section className="py-20 bg-white animate-on-scroll opacity-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto rounded-2xl shadow-xl border border-brand-100 bg-white p-10 text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            style={{ fontFamily: 'Brockmann, Inter, sans-serif' }}
          > 
            Book a demo          
          </h2>
          <p className="text-lg text-gray-700 mb-8">
          What if dead stock was not the end but your next best seller? 
          </p>

            <Link to="/book-a-demo">
              <button
                className={`px-7 py-3 rounded-full text-white font-bold text-base transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-brand-600 bg-[#30f534] hover:bg-[#30f580]`}
              >
                Book a demo
              </button>
            </Link>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;

