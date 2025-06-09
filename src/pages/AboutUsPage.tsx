import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Layers, Sparkles, Workflow, Leaf, Wind, Infinity as InfinityIcon, Zap } from 'lucide-react';
import RegenerateBanner from '@/components/shared/RegenerateBanner';
import TeamSection from '@/components/shared/TeamSection';

const AboutUsPage = () => {
  useEffect(() => {
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
        <title>About Us | Re:YVE - Our Story, Vision & Team for Regenerative Fashion</title>
        <meta name="description" content="Discover Re:YVE's inspiring journey to revolutionize fashion. Learn about our vision for a circular future, meet our passionate founders & expert team, and explore our commitment to sustainability." />
        <link rel="canonical" href="https://www.reyve.com/about-us" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph */}
        <meta property="og:title" content="About Us | Re:YVE - Our Story, Vision & Team" />
        <meta property="og:description" content="Discover Re:YVE's inspiring journey to revolutionize fashion. Learn about our vision for a circular future, meet our passionate founders & expert team, and explore our commitment to sustainability." />
        <meta property="og:image" content="https://www.reyve.com/images/reyve-og-image-about.jpg" />
        <meta property="og:url" content="https://www.reyve.com/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Re:YVE" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ReYVEofficial" />
        <meta name="twitter:creator" content="@ReYVEofficial" />
        <meta name="twitter:title" content="About Us | Re:YVE - Our Story, Vision & Team" />
        <meta name="twitter:description" content="Discover Re:YVE's inspiring journey to revolutionize fashion. Learn about our vision for a circular future, meet our passionate founders & expert team, and explore our commitment to sustainability." />
        <meta name="twitter:image" content="https://www.reyve.com/images/reyve-twitter-image-about.jpg" />
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
                <span className="px-2 py-1" style={{  fontFamily: 'Brockmann, Inter, sans-serif', color: 'black',fontWeight:'bold' }}>
                  <span className="bg-white"> Re:YVE - Where Fashion</span>
                  <br/> 
                  <span className="bg-primary"> Reimagines Its Future</span>
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
                     We're not just creating clothes; we're rewriting the story of fashion.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto animate-on-scroll opacity-0">
              <div className="prose prose-lg text-gray-600">
                <p className="text-xl text-gray-800 mb-8">
                  We were born from a bold vision: a future where fashion is not only beautiful but also inherently good for the planet and its communities. In a world saturated with linear production and disposable consumption, Re:YVE emerges as a beacon of change, a startup that fervently believes in the power of regeneration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Spark Section */}
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

        {/* What We Do Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Brockmann, Inter, sans-serif' }}>What We Do: Turning What's Made Into What's Next</h2>
              <p className="text-xl text-gray-600">
                At the heart of Re:YVE is our pioneering methodology: transforming existing garments into desirable new creations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "We Elevate Craft",
                  description: "We believe in the power of intelligent design and expert craftsmanship to transform materials.",
                  icon: <Layers className="w-12 h-12 text-brand-600" />
                },
                {
                  title: "We Drive Creativity",
                  description: "Our designers see potential where others see waste, creating unique pieces with stories to tell.",
                  icon: <Sparkles className="w-12 h-12 text-brand-600" />
                },
                {
                  title: "We Embrace Technology",
                  description: "We use technological innovation to optimize our processes, ensuring each piece is beautiful and sustainable.",
                  icon: <Workflow className="w-12 h-12 text-brand-600" />
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 md:py-24 bg-brand-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Brockmann, Inter, sans-serif' }}>Our Promise: Beyond Fashion, Real Impact</h2>
              <p className="text-xl text-gray-700">
                Every Re:YVE garment is a statement of intent. A conscious choice that makes a difference.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
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
              ].map((item, index) => (
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

        {/* Team Section */}
        <TeamSection />

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto animate-on-scroll opacity-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Brockmann, Inter, sans-serif' }}>Join the Re:YVE Revolution</h2>
              <p className="text-xl text-gray-300 mb-8">
                We are a young startup, but our ambition is gigantic: to make clothing-to-clothing production the industry standard. 
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-brand-500 hover:bg-brand-600 text-white font-medium py-4 px-10 rounded-full transition-all duration-300">
                  Explore Our Collections
                </button>
                <button className="bg-white hover:bg-gray-50 text-brand-600 border-2 border-brand-200 font-medium py-4 px-10 rounded-full transition-all duration-300">
                  Learn About Our Process
                </button>
              </div>
            </div>
          </div>
        </section>


      </main>
        <RegenerateBanner />
        <Footer />
      </div>
    </>
  );
};

export default AboutUsPage;
