import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const BookADemoPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(null); // Clear previous result

    if (!accessKey) {
      setResult("Access Key is missing. Please configure it in your .env file.");
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", accessKey);

    // Honeypot field for spam prevention
    formData.append("subject", "New Demo Request from Re:YVE Website"); // Optional: Subject for the email you receive

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const json = await res.json();

      if (json.success) {
        setResult("Demo request sent successfully! We will contact you shortly.");
        (event.target as HTMLFormElement).reset();
      } else {
        console.error("Web3Forms API Error:", json);
        setResult(json.message || "An error occurred while sending the form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setResult("An error occurred while sending the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Brockmann, Inter, sans-serif' }}>
              Book a Demo
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              See our solution in action. <br />
              Schedule a personalized demo with our team to see how we can help you.
            </p>
          </div>

          <motion.div 
            className="bg-gray-50 rounded-2xl p-8 sm:p-12 shadow-sm max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first-name"
                    className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-700"
                    placeholder="Mark"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last-name"
                    className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-700"
                    placeholder="Parker"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-700"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-700"
                  placeholder="mark@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-700"
                  placeholder="+49 (123) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-700"
                  placeholder="Tell us what you're interested in..."
                  required
                ></textarea>
              </div>

              <div>
                              {/* Honeypot field for spam - recommended by Web3Forms */}
              <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}} />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-white font-medium py-4 px-10 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Sending...' : 'Book a Demo'}
              </button>
              {result && (
                <p className={`mt-4 text-center text-sm ${result.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                  {result}
                </p>
              )}
              </div>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookADemoPage;
