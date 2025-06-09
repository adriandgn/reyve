import React from "react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-white animate-on-scroll opacity-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto rounded-2xl shadow-xl border border-brand-100 bg-white p-10 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            style={{ fontFamily: 'Brockmann, Inter, sans-serif' }}
          >
            Stay Updated
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join our newsletter for exclusive updates, new releases, and insights into the future of regenerative fashion.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-3">
            <input
              type="email"
              className="w-full sm:w-auto px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-600 text-gray-900 placeholder-gray-400 bg-gray-50 shadow-sm transition"
              placeholder="Your email address"
              aria-label="Email address"
              required
            />
            <button
              type="submit"
              className="px-7 py-3 rounded-full bg-[#30f534] hover:bg-[#30f534/60] text-white font-bold text-base transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-brand-600"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-2">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

