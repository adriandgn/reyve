import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { px } from "framer-motion";
import './HeroAnimation.css';

const Hero = () => {
  // Typewriter effect state
  const typewriterText = "Building a fashion longevity culture where every piece tells a story.";
  const [displayedText, setDisplayedText] = useState("");
  const [typeIndex, setTypeIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!isDeleting && typeIndex < typewriterText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(typewriterText.slice(0, typeIndex + 1));
        setTypeIndex(typeIndex + 1);
      }, 35);
    } else if (!isDeleting && typeIndex === typewriterText.length) {
      // Pause at end before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && typeIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(typewriterText.slice(0, typeIndex - 1));
        setTypeIndex(typeIndex - 1);
      }, 15);
    } else if (isDeleting && typeIndex === 0) {
      // Pause before starting again
      timeout = setTimeout(() => setIsDeleting(false), 600);
    }
    return () => clearTimeout(timeout);
  }, [typeIndex, isDeleting]);

  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden"
      style={{ position: 'relative' }}
    >
      {/* Fondo dividido en dos proporciones: 66% y 33% */}
      {/* Fondo dividido en dos proporciones: 66% y 33%. En mobile, solo la primera imagen ocupa el 100% */}
      <style>{`
        @media (max-width: 767px) {
          .hero-bg-left {
            width: 100% !important;
          }
          .hero-bg-right {
            display: none !important;
          }
        }
      `}</style>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}>
        {/* Imagen izquierda: 66.66% */}
        <div className="hero-bg-left" style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '66.66%',
          height: '100%',
          backgroundImage: "url('/hero-kimono.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'width 0.3s ease'
        }} />
        {/* Imagen derecha: 33.33% */}
        <div className="hero-bg-right" style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '33.33%',
          height: '100%',
          backgroundImage: "url('/mike-von-2UTk-Nip5aM-unsplash.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'display 0.3s ease'
        }} />
      </div>

      {/* Contenido del Hero */}
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white p-0 m-0 leading-tight"
            style={{fontFamily:'Brockmann, Inter, sans-serif', textAlign: 'left',letterSpacing: -3 }}>
            <span className="hero-animated-span">Beyond Sustainable, </span> <br />
            <span className="hero-animated-span-green">its Regenerative.</span>
          </h1>
          <p className="p-0 my-2" style={{ fontFamily:'Brockmann, Inter, sans-serif', color: 'white', textAlign: 'left', fontSize: '2rem' }}>
            <span style={{ backgroundColor: 'black' }}>{displayedText}<span className="typewriter-cursor">&#8203;|</span></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

