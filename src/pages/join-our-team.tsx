import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Send, Linkedin } from 'lucide-react';

const JoinOurTeamPage = () => {
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
    formData.append("subject", "New Job Application from Re:YVE Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const json = await res.json();

      if (json.success) {
        setResult("Application submitted successfully! We will review your application and get back to you.");
        (event.target as HTMLFormElement).reset();
      } else {
        console.error("Web3Forms API Error:", json);
        setResult(json.message || "An error occurred while sending your application. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setResult("An error occurred while sending your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Join Our Team | Re:YVE - Careers in Regenerative Fashion</title>
        <meta name="description" content="Be part of Re:YVE's mission to revolutionize the fashion industry. Explore current job openings and apply to join our passionate team dedicated to sustainable, circular fashion." />
        <link rel="canonical" href="https://www.reyve.com/join-our-team" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph */}
        <meta property="og:title" content="Join Our Team | Re:YVE - Careers in Regenerative Fashion" />
        <meta property="og:description" content="Be part of Re:YVE's mission to revolutionize the fashion industry. Explore current job openings and apply to join our passionate team dedicated to sustainable, circular fashion." />
        <meta property="og:image" content="https://www.reyve.com/images/reyve-og-image-careers.jpg" />
        <meta property="og:url" content="https://www.reyve.com/join-our-team" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Re:YVE" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ReYVEofficial" />
        <meta name="twitter:creator" content="@ReYVEofficial" />
        <meta name="twitter:title" content="Join Our Team | Re:YVE - Careers in Regenerative Fashion" />
        <meta name="twitter:description" content="Be part of Re:YVE's mission to revolutionize the fashion industry. Explore current job openings and apply to join our passionate team dedicated to sustainable, circular fashion." />
        <meta name="twitter:image" content="https://www.reyve.com/images/reyve-twitter-image-careers.jpg" />
      </Helmet>
      <div className="bg-white text-gray-800">
        <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Brockmann, Inter, sans-serif' }}>
              Join Our Team
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Be part of the Re:YVE Revolution. <br />
              Help us make clothing-to-clothing production the industry standard.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 shadow-sm max-w-2xl mx-auto mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Explore Open Positions
              </h2>
              <p className="text-gray-600 mb-6">
                View all our current job openings and apply directly through LinkedIn
              </p>
              <a 
                href="https://www.linkedin.com/company/reyve/jobs/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#0A66C2] hover:bg-[#004182] text-white font-medium py-4 px-10 rounded-full transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                View Open Positions on LinkedIn
              </a>
            </div>
          </div>

          <motion.div 
            className="bg-gray-50 rounded-2xl p-8 sm:p-12 shadow-sm max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Submit Your Application
            </h2>
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
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                  Position You're Applying For <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="position"
                  id="position"
                  className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-700"
                  placeholder="E.g., Product Designer, Software Engineer"
                  required
                />
              </div>

              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                  LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  name="linkedin"
                  id="linkedin"
                  className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-700"
                  placeholder="https://www.linkedin.com/in/yourprofile"
                />
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                  Resume/CV Link (Google Drive, Dropbox, etc.)
                </label>
                <input
                  type="url"
                  name="resume"
                  id="resume"
                  className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-700"
                  placeholder="https://drive.google.com/file/your-resume"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Why do you want to join Re:YVE? <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-700"
                  placeholder="Tell us about yourself and why you're interested in joining our team..."
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
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
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
    </>
  );
};

export default JoinOurTeamPage;
