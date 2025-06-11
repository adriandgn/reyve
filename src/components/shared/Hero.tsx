import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { px } from "framer-motion";
import './HeroAnimation.css';

const BACKGROUND_IMAGES = [
  "/vital-adi-03BEKvMfsQQ-unsplash.jpg",
  "/dom-hill-JqZlSnI2ctA-unsplash.jpg",
  "/jade-aucamp-Kj6LgGceZ4M-unsplash.jpg",
  "/mike-von-2UTk-Nip5aM-unsplash.jpg",
  "/force-majeure-SmIlY2uAHo8-unsplash.jpg",
  "/vital-adi-m5DkN6xLY54-unsplash.jpg",
  "/photo-1.avif"
];

const Hero = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    
    <section
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url('${BACKGROUND_IMAGES[currentBgIndex]}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 1s ease-in-out'
      }}
    >

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white p-0 m-0 leading-tight"
            style={{fontFamily:'Brockmann, Inter, sans-serif', textAlign: 'left',letterSpacing: -3 }}>
            <span className="hero-animated-span">Beyond sustainable, </span> <br />
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

