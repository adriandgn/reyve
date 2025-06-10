import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";

const HumanoidSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);
  // Estado para el porcentaje de progreso que se mostrará en las cards y para el gráfico
  const [scrollProgressPercentage, setScrollProgressPercentage] = useState(0);
  // State for individual card scroll progresses (0 to 1 for each card)
  const [cardScrollProgresses, setCardScrollProgresses] = useState<number[]>(Array(5).fill(0));

  // Defines the segments of global progress (0-1) for each card's activity period
  // 5 cards mean 5 segments, defined by 6 thresholds. Example: card 0 progresses from threshold 0 to 1, card 1 from 1 to 2, etc.
  const cardProgressThresholds = React.useMemo(() => [0, 0.1, 0.2, 0.3, 0.4, 1.0], []); 

  // More responsive timing function with shorter duration
  const cardStyle = {
    height: '60vh',
    maxHeight: '600px',
    borderRadius: '20px',
    transition: 'transform 0.9s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'transform, opacity'
  };

  // Optimized scroll handler using requestAnimationFrame
  const handleScroll = useCallback(() => {
    lastScrollY.current = window.scrollY;
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        if (!sectionRef.current || !isIntersecting) {
          ticking.current = false;
          return;
        }

        const sectionRect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const totalScrollDistance = viewportHeight * 2.5; // Example: 2.5 times viewport height for scroll

        const progressStartPoint = viewportHeight * 0.2;
        const progressEndPoint = -totalScrollDistance + (viewportHeight * 0.9);

        let currentScrollPosition = sectionRect.top;
        let progress = (progressStartPoint - currentScrollPosition) / (progressStartPoint - progressEndPoint);
        progress = Math.max(0, Math.min(1, progress)); // This is the global progress from 0 to 1

        setScrollProgressPercentage(Math.round(progress * 100));

        // Calculate individual card progresses
        const newCardProgresses = Array(5).fill(0).map((_, index) => {
          const cardSegmentStart = cardProgressThresholds[index];
          const cardSegmentEnd = cardProgressThresholds[index + 1];
          let cardSpecificProgress = 0;

          // If global progress is past this card's segment, it's fully scrolled
          if (progress >= cardSegmentEnd) {
            cardSpecificProgress = 1;
          // If global progress is within this card's segment
          } else if (progress > cardSegmentStart && progress < cardSegmentEnd) {
            const segmentDuration = cardSegmentEnd - cardSegmentStart;
            // Avoid division by zero if thresholds are the same (should not happen with current setup)
            if (segmentDuration > 0) {
              cardSpecificProgress = (progress - cardSegmentStart) / segmentDuration;
            }
          // If global progress is before this card's segment, it's not scrolled yet (implicitly 0)
          } else {
            cardSpecificProgress = 0;
          }
          return Math.max(0, Math.min(1, cardSpecificProgress)); // Clamp between 0 and 1
        });
        setCardScrollProgresses(newCardProgresses);

        // Determine which card is active based on global scroll progress
        // The active card is the first one whose segment start threshold has been passed
        let newActiveCardIndex = 4; // Default to last card if progress is 1
        for (let i = 0; i < cardProgressThresholds.length - 1; i++) {
          if (progress < cardProgressThresholds[i + 1]) {
            newActiveCardIndex = i;
            break;
          }
        }
        setActiveCardIndex(newActiveCardIndex);

        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [isIntersecting, setScrollProgressPercentage, setActiveCardIndex, setCardScrollProgresses, cardProgressThresholds]);

  // useEffect for scroll handling and intersection observer
  useEffect(() => {
    // Create intersection observer to detect when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 } // Start observing when 10% of element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isIntersecting, handleScroll]);

  // Card visibility based on active index instead of direct scroll progress
  const isFirstCardVisible = activeCardIndex === 0;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;
  const isFourthCardVisible = activeCardIndex >= 3;
  const isFifthCardVisible = activeCardIndex >= 4;

  return (
    <div 
      ref={sectionRef} 
      className="relative" 
      style={{ height: '220vh' }}
    >
      <section className="w-full h-[125vh] py-10 md:py-16 sticky top-0 overflow-hidden bg-white" id="why-humanoid">
        
        <div className="container px-6 lg:px-8 mx-auto h-full flex flex-col">
          <div className="mb-2 md:mb-3">
            <div className="flex items-center gap-4 mb-2 md:mb-2 pt-8 sm:pt-6 md:pt-4">

            </div>
          
          </div>
          
          <div ref={cardsContainerRef} className="relative flex-1 perspective-1000">
            {/* First Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isFirstCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 10,
                transform: `translateY(${isFirstCardVisible ? '90px' : '200px'}) scale(0.9)`,
                opacity: isFirstCardVisible ? 0.9 : 0
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-brand-900/40 to-dark-900/80"
                style={{
                  backgroundImage: "url('/grad-1.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  backgroundBlendMode: "overlay",
                  borderRadius: '20px'
                }}
              ></div>
              
              <div className="absolute top-8 left-8 z-20 text-2xl sm:text-3xl md:text-4xl font-display text-[#1d3451] font-bold leading-tight mb-4">
                What does Re:YVE mean <br /> <span className="bg-white/60 px-2 py-1">for Fashion Brands?</span>                
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                  The way to reduce environmental impact, and meet conscious consumer demand by <span className="text-[#1d3451] px-2 py-1">transforming existing materials into new value.</span>
                  </h3>
                </div>
              </div>
              {/* Vertical Progress Bar */}
              <div className="absolute top-8 right-8 bottom-8 w-1.5 bg-white/20 backdrop-blur-sm pointer-events-none rounded-full overflow-hidden">
                <div
                  className="bg-white w-full"
                  style={{
                    height: `${cardScrollProgresses[0] * 100}%`,
                    transition: 'height 50ms linear',
                  }}
                />
              </div>
            </div>
            
            {/* Second Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isSecondCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 20,
                transform: `translateY(${isSecondCardVisible ? activeCardIndex === 1 ? '55px' : '45px' : '200px'}) scale(0.95)`,
                opacity: isSecondCardVisible ? 1 : 0,
                pointerEvents: isSecondCardVisible ? 'auto' : 'none'
              }}
            >
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: "url('/grad-2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: '20px'
                }}
              ></div>
              
              <div className="absolute top-8 left-8 z-20 text-2xl sm:text-3xl md:text-4xl font-display text-[#1d3451] font-bold leading-tight mb-4">
                What does Re:YVE mean <br /> <span className="bg-white/60 px-2 py-1">for Upcycling Designers?</span>                
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                  <span className="text-[#1d3451]">a platform to scale</span> their creative transformation of discarded textiles into unique fashion                  </h3>
                </div>
              </div>
              {/* Vertical Progress Bar */}
              <div className="absolute top-8 right-8 bottom-8 w-1.5 bg-white/20 backdrop-blur-sm pointer-events-none rounded-full overflow-hidden">
                <div
                  className="bg-white w-full"
                  style={{
                    height: `${cardScrollProgresses[1] * 100}%`,
                    transition: 'height 50ms linear',
                  }}
                />
              </div>
            </div>
            
            {/* Third Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isThirdCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 30,
                transform: `translateY(${isThirdCardVisible ? activeCardIndex === 2 ? '65px' : '55px' : '200px'}) scale(0.95)`,
                opacity: isThirdCardVisible ? 1 : 0,
                pointerEvents: isThirdCardVisible ? 'auto' : 'none'
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-brand-900/40 to-dark-900/80"
                style={{
                  backgroundImage: "url('/grad-3.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "bottom center",
                  backgroundBlendMode: "overlay",
                  borderRadius: '20px'
                }}
              ></div>
              
              <div className="absolute top-8 left-8 z-20 text-2xl sm:text-3xl md:text-4xl font-display text-[#1d3451] font-bold leading-tight mb-4">
                What does Re:YVE mean <br /> <span className="bg-white/60 px-2 py-1">for Makers?</span>                
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                  A sustainable supply chain,<span className="text-[#1d3451] px-2 py-1">valuing their craftsmanship in transforming existing materials</span> and fostering ethical production.
                  </h3>
                </div>
              </div>
              {/* Vertical Progress Bar */}
              <div className="absolute top-8 right-8 bottom-8 w-1.5 bg-white/20 backdrop-blur-sm pointer-events-none rounded-full overflow-hidden">
                <div
                  className="bg-white w-full"
                  style={{
                    height: `${cardScrollProgresses[2] * 100}%`,
                    transition: 'height 50ms linear',
                  }}
                />
              </div>
            </div>

            {/* Fourth Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isFourthCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 40,
                transform: `translateY(${isFourthCardVisible ? activeCardIndex === 3 ? '75px' : '65px' : '200px'}) scale(0.98)`,
                opacity: isFourthCardVisible ? 1 : 0,
                pointerEvents: isFourthCardVisible ? 'auto' : 'none'
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-brand-900/40 to-dark-900/80"
                style={{
                  backgroundImage: "url('/grad-4.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundBlendMode: "overlay",
                  borderRadius: '20px'
                }}
              ></div>
              
              <div className="absolute top-8 left-8 z-20 text-2xl sm:text-3xl md:text-4xl font-display text-[#1d3451] font-bold leading-tight mb-4">
                What does Re:YVE mean <br /> <span className="bg-white/60 px-2 py-1">for Consumers?</span>                
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                  Offers customers unique, high-quality, and ethically produced fashion that<span className="text-[#1d3451] px-2 py-1"> allows them to make conscious choices</span>
                  </h3>
                </div>
              </div>
              {/* Vertical Progress Bar */}
              <div className="absolute top-8 right-8 bottom-8 w-1.5 bg-white/20 backdrop-blur-sm pointer-events-none rounded-full overflow-hidden">
                <div
                  className="bg-white w-full"
                  style={{
                    height: `${cardScrollProgresses[3] * 100}%`,
                    transition: 'height 50ms linear',
                  }}
                />
              </div>
            </div>

            {/* Fifth Card */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isFifthCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 50,
                transform: `translateY(${isFifthCardVisible ? '85px' : '200px'}) scale(1)`,
                opacity: isFifthCardVisible ? 1 : 0,
                pointerEvents: isFifthCardVisible ? 'auto' : 'none'
              }}
            >
              <div
                className="absolute inset-0 z-0 bg-gradient-to-b from-brand-900/40 to-dark-900/80"
                style={{
                  backgroundImage: "url('/grad-5.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundBlendMode: "overlay",
                  borderRadius: '20px'
                }}
              ></div>
              
              <div className="absolute top-8 left-8 z-20 text-2xl sm:text-3xl md:text-4xl font-display text-[#1d3451] font-bold leading-tight mb-4">
                What does Re:YVE mean <br /> <span className="bg-white/60 px-2 py-1">for the Planet?</span>                
              </div>
              
              <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex items-center">
                <div className="max-w-lg">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4">
                  the foundational infrastructure for <span className="text-[#1d3451] px-2 py-1">a regenerative fashion industry, where existing materials are the new standard</span>, and circularity is paramount.                  </h3>
                </div>
              </div>
              {/* Vertical Progress Bar */}
              <div className="absolute top-8 right-8 bottom-8 w-1.5 bg-white/20 backdrop-blur-sm pointer-events-none rounded-full overflow-hidden">
                <div
                  className="bg-white w-full"
                  style={{
                    height: `${cardScrollProgresses[4] * 100}%`,
                    transition: 'height 50ms linear',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanoidSection;
