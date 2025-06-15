import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Layers, Sparkles, Workflow, Leaf, Wind, Infinity as InfinityIcon, Zap } from 'lucide-react';
import RegenerateBanner from '@/components/shared/RegenerateBanner';
import TeamSection from '@/components/shared/TeamSection';
import AboutPageHero from '@/components/shared/AboutPageHero';

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
        <AboutPageHero />

        {/* Intro Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto animate-on-scroll opacity-0">
              <div className="prose prose-lg text-gray-600">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Brockmann, Inter, sans-serif' }}>About Us</h1>
                <p className="text-xl text-gray-800 mb-8">
                  We were born from a bold vision: a future where fashion is not only beautiful but also inherently good for the planet and its communities. In a world saturated with linear production and disposable consumption, Re:YVE emerges as a beacon of change, a startup that fervently believes in the power of regeneration.
                </p>
              </div>
            </div>
          </div>
        </section>

        

        {/* Team Section */}
        <div id="team-section">
          <TeamSection />
        </div>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto animate-on-scroll opacity-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Brockmann, Inter, sans-serif' }}>Join the Re:YVE Revolution</h2>
              <p className="text-xl text-gray-300 mb-8">
                We are a young startup, but our ambition is gigantic: to make clothing-to-clothing production the industry standard. 
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/join-our-team" className="bg-white hover:bg-gray-50 text-brand-600 border-2 border-brand-200 font-medium py-4 px-10 rounded-full transition-all duration-300 inline-block">
                  Join Our Team
                </a>
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
