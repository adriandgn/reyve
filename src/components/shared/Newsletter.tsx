import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage({ text: 'Please enter your email', isError: true });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: data.message || 'Thank you for subscribing!', isError: false });
        setEmail('');
      } else {
        setMessage({ 
          text: data.message || 'Error processing subscription. Please try again.', 
          isError: true 
        });
      }
    } catch (error) {
      setMessage({ 
        text: 'Connection error. Please try again later.', 
        isError: true 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-auto px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-600 text-gray-900 placeholder-gray-400 bg-gray-50 shadow-sm transition"
              placeholder="Your email address"
              aria-label="Email address"
              required
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-7 py-3 rounded-full text-white font-bold text-base transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-brand-600 ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-[#30f534] hover:bg-[#30f580]'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Subscribe'}
            </button>
          </form>
          {message && (
            <p className={`mt-2 text-sm ${
              message.isError ? 'text-red-500' : 'text-green-600'
            }`}>
              {message.text}
            </p>
          )}
          <p className="text-xs text-gray-400 mt-2">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

