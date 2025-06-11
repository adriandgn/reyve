import React, { useState, useEffect } from 'react';
import './HeroAnimation.css';

const AboutPageHero = () => {
  const typewriterText = "We're not just creating clothes; we're rewriting the story of fashion.";
  const [displayedText, setDisplayedText] = useState("");
  const [typeIndex, setTypeIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!isDeleting && typeIndex < typewriterText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(typewriterText.slice(0, typeIndex + 1));
        setTypeIndex(typeIndex + 1);
      }, 50);
    } else if (!isDeleting && typeIndex === typewriterText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && typeIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(typewriterText.slice(0, typeIndex - 1));
        setTypeIndex(typeIndex - 1);
      }, 25);
    } else if (isDeleting && typeIndex === 0) {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    }
    return () => clearTimeout(timeout);
  }, [typeIndex, isDeleting, typewriterText]);

  return (
    <section className="relative text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black min-h-[38rem] md:min-h-[42rem]">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage: "url('/force-majeure-SmIlY2uAHo8-unsplash.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white p-0 m-0 leading-tight"
            style={{fontFamily:'Brockmann, Inter, sans-serif', textAlign: 'left',letterSpacing: -3 }}>
            <span className="hero-animated-span">Beyond sustainable, </span> <br />
            <span className="hero-animated-span-green">its Regenerative.</span>
          </h1>
          <p className="p-0 my-2" style={{ fontFamily:'Brockmann, Inter, sans-serif', color: 'white', textAlign: 'left', fontSize: '2rem', lineHeight: '1.4', position: 'relative' }}>
            <span style={{ visibility: 'hidden' }}>{typewriterText}</span>
            <span style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
              <span style={{ backgroundColor: 'black' }}>{displayedText}
              <span className="typewriter-cursor">|</span></span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPageHero;
