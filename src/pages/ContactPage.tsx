import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import RegenerateBanner from '@/components/shared/RegenerateBanner';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us | Re:YVE - Partner with Us, Inquiries & Support</title>
        <meta name="description" content="Connect with Re:YVE. Whether you're a brand, designer, maker, or have a general inquiry about regenerative fashion and our platform, we're here to help. Reach out to our team." />
        <link rel="canonical" href="https://www.reyve.com/contact" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph */}
        <meta property="og:title" content="Contact Us | Re:YVE - Partner with Us & Inquiries" />
        <meta property="og:description" content="Connect with Re:YVE. Whether you're a brand, designer, maker, or have a general inquiry about regenerative fashion and our platform, we're here to help. Reach out to our team." />
        <meta property="og:image" content="https://www.reyve.com/images/reyve-og-image-contact.jpg" />
        <meta property="og:url" content="https://www.reyve.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Re:YVE" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ReYVEofficial" />
        <meta name="twitter:creator" content="@ReYVEofficial" />
        <meta name="twitter:title" content="Contact Us | Re:YVE - Partner with Us & Inquiries" />
        <meta name="twitter:description" content="Connect with Re:YVE. Whether you're a brand, designer, maker, or have a general inquiry about regenerative fashion and our platform, we're here to help. Reach out to our team." />
        <meta name="twitter:image" content="https://www.reyve.com/images/reyve-twitter-image-contact.jpg" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{
              backgroundImage: "url('/force-majeure-SmIlY2uAHo8-unsplash.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl animate-on-scroll opacity-0">
              <h1 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6" 
                style={{ animationDelay: "0.3s" }}
              >
                <span className="px-2 py-1" style={{  fontFamily: 'Brockmann, Inter, sans-serif', color: 'black' }}>
                  <span className="bg-white" style={{ border: '2px solid black' }}> &nbsp;Get In Touch&nbsp; </span>
                </span>
              </h1>
              <p 
                style={{ 
                  animationDelay: "0.5s", 
                  color: 'white', 
                  backgroundColor: 'black', 
                  fontSize: 20,
                  marginTop: '0.75rem',
                  marginBottom: '2rem',
                  lineHeight: '1.6',
                  display: 'inline-block'
                }} 
                className="opacity-0 animate-fade-in text-left"
              >
                <span style={{ fontFamily: 'Brockmann, Inter, sans-serif' }}>
                  &nbsp; We'd love to hear from you. Reach out to us for any questions or feedback. &nbsp;
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Contact Information */}
                <div className="space-y-8 animate-on-scroll opacity-0">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Brockmann, Inter, sans-serif' }}>
                    Contact Information
                  </h2>
                  <p className="text-lg text-gray-600">
                    Have questions about our products or services? Feel free to reach out to us using the information below or fill out the contact form.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-600">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                        <p className="text-gray-600">info@re-yve.com</p>
                        <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-600">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                        <p className="text-sm text-gray-500 mt-1">Mon-Fri from 9am to 5pm</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-600">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Visit Us</h3>
                        <p className="text-gray-600">123 Fashion Avenue</p>
                        <p className="text-gray-600">Berlin, 10115</p>
                        <p className="text-gray-600">Germany</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <motion.div 
                  className="bg-gray-50 rounded-2xl p-8 shadow-sm animate-on-scroll opacity-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{  fontFamily: 'Brockmann, Inter, sans-serif', color: 'black' }}>Send us a message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                          First name
                        </label>
                        <input
                          type="text"
                          id="first-name"
                          className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-700"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                          Last name
                        </label>
                        <input
                          type="text"
                          id="last-name"
                          className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-700"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-700"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-700"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-700"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-white font-medium py-4 px-10 rounded-full transition-all duration-300"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>


        {/* Map Section */}
        <section className="bg-gray-100">
          <div className="h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409221990356!2d13.375996315807032!3d52.51626797981079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c6f687bd9f%3A0x8a4a2c8c2e3e3e1f!2sBrandenburg%20Gate!5e0!3m2!1sen!2sde!4v1620000000000!5m2!1sen!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>
        </section>

      </main>
        <RegenerateBanner />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
