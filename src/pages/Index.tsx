
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/shared/Hero";
import SplitContentSection from "@/components/shared/SplitContentSection";
// Mantenemos estas importaciones por si las necesitamos en el futuro
// import OneLiner from "@/components/shared/OneLiner";
// import HumanoidSection from "@/components/ui/HumanoidSection";
// import SpecsSection from "@/components/shared/SpecsSection";
// import DetailsSection from "@/components/shared/DetailsSection";
import ImageShowcaseSection from "@/components/shared/ImageShowcaseSection";
// import Features from "@/components/shared/Features";
// import Testimonials from "@/components/shared/Testimonials";
import Newsletter from "@/components/shared/Newsletter";
import RegenerateBanner from "@/components/shared/RegenerateBanner";
import KeyAdvantages from "@/components/shared/KeyAdvantages";
import Footer from "@/components/layout/Footer";

const Index = () => {
  // Initialize intersection observer to detect when elements enter viewport
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

  useEffect(() => {
    // This helps ensure smooth scrolling for the anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        // Increased offset to account for mobile nav
        const offset = window.innerWidth < 768 ? 100 : 80;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Re:YVE | Fashion Reimagined: Circularity, Redesign & Innovation</title>
        <meta name="description" content="Re:YVE pioneers regenerative fashion. We transform existing clothes into new designs, building a circular industry standard through tech, craft & collaboration. Join the revolution." />
        <meta name="keywords" content="fashion, circular fashion, regenerative fashion, upcycling, redesign, sustainable fashion, textile waste, fashion technology, circular economy, ethical fashion, B2B fashion platform, fashion innovation, brand collaboration" />
        <link rel="canonical" href="https://www.reyve.com/" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Open Graph */}
        <meta property="og:title" content="Re:YVE | Fashion Reimagined: Circularity, Redesign & Innovation" />
        <meta property="og:description" content="Re:YVE pioneers regenerative fashion. We transform existing clothes into new designs, building a circular industry standard through tech, craft & collaboration." />
        <meta property="og:image" content="https://www.reyve.com/images/reyve-og-image-home.jpg" />
        <meta property="og:url" content="https://www.reyve.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Re:YVE" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ReYVEofficial" />
        <meta name="twitter:creator" content="@ReYVEofficial" />
        <meta name="twitter:title" content="Re:YVE | Fashion Reimagined: Circularity, Redesign & Innovation" />
        <meta name="twitter:description" content="Re:YVE pioneers regenerative fashion. We transform existing clothes into new designs, building a circular industry standard through tech, craft & collaboration." />
        <meta name="twitter:image" content="https://www.reyve.com/images/reyve-twitter-image-home.jpg" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <SplitContentSection />
          {/* <SpecsSection /> */}
          <ImageShowcaseSection />
          <KeyAdvantages />
          <Newsletter />
          <RegenerateBanner />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
