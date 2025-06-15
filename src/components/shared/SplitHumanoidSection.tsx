import React, { useEffect, useRef, useState, useCallback } from "react";

const SplitHumanoidSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);
  const [scrollProgressPercentage, setScrollProgressPercentage] = useState(0);
  const [cardScrollProgresses, setCardScrollProgresses] = useState<number[]>(Array(5).fill(0));

  // Defines the segments of global progress (0-1) for each card's activity period
  // Increased separation between card thresholds for more distinct viewing
  const cardProgressThresholds = React.useMemo(() => [0.10, 0.25, 0.40, 0.55, 0.75, 1.0], []); 

  // More compact card style for split view
  const cardStyle = {
    minHeight: '300px', // Minimum height 
    height: '80%', // Percentage height to fill container
    maxHeight: '450px',
    borderRadius: '20px',
    transition: 'transform 0.9s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'transform, opacity'
  };

  // Optimized scroll handler
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
        const totalScrollDistance = viewportHeight * 2.2; // Increased to allow more scroll distance between cards

        const progressStartPoint = viewportHeight * 0.2;
        const progressEndPoint = -totalScrollDistance + (viewportHeight * 0.9);

        let currentScrollPosition = sectionRect.top;
        let progress = (progressStartPoint - currentScrollPosition) / (progressStartPoint - progressEndPoint);
        progress = Math.max(0, Math.min(1, progress)); 

        setScrollProgressPercentage(Math.round(progress * 100));

        // Calculate individual card progresses
        const newCardProgresses = Array(5).fill(0).map((_, index) => {
          const cardSegmentStart = cardProgressThresholds[index];
          const cardSegmentEnd = cardProgressThresholds[index + 1];
          let cardSpecificProgress = 0;

          if (progress >= cardSegmentEnd) {
            cardSpecificProgress = 1;
          } else if (progress > cardSegmentStart && progress < cardSegmentEnd) {
            const segmentDuration = cardSegmentEnd - cardSegmentStart;
            if (segmentDuration > 0) {
              cardSpecificProgress = (progress - cardSegmentStart) / segmentDuration;
            }
          } else {
            cardSpecificProgress = 0;
          }
          return Math.max(0, Math.min(1, cardSpecificProgress)); 
        });
        setCardScrollProgresses(newCardProgresses);

        // Determine which card is active
        let newActiveCardIndex = 4;
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
    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isIntersecting, handleScroll]);

  // Card visibility based on active index
  const isFirstCardVisible = activeCardIndex === 0;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;
  const isFourthCardVisible = activeCardIndex >= 3;

  return (
    <div 
      ref={sectionRef} 
      className="relative"
      style={{ height: '200vh' }} // Increased height to accommodate more scroll distance
    >
      <section className="w-full h-[70vh] min-h-[500px] py-6 md:py-8 sticky top-0 overflow-hidden bg-white" id="why-humanoid-split">
        <div className="container px-4 lg:px-6 mx-auto h-full flex flex-col">
          <div className="mb-2">
            <div className="flex items-center gap-4 mb-2 pt-4">
              {/* Section header removed for cleaner split view */}
            </div>
          </div>
          
          <div ref={cardsContainerRef} className="relative flex-1 perspective-1000">
            {/* First Card - Brands */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isFirstCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 10,
                transform: `translateY(${isFirstCardVisible ? '40px' : '150px'}) scale(0.9)`,
                opacity: isFirstCardVisible ? 0.9 : 0
              }}
            >
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: "url('/grad-2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  borderRadius: '20px'
                }}
              ></div>
              
              <div className="relative z-10 h-full flex flex-col justify-center pl-[15px] mr-[15px] md:mr-0">
                {/* Question on top */}
                <div className="w-full flex flex-col items-center p-4 pt-6 pb-2 text-left">
                  <div className="text-base lg:text-2xl md:text-xl font-display text-[#1d3451] font-bold leading-tight mb-4 w-full">
                    What does Re:YVE mean <span className="bg-white/60 px-2 py-1">for Fashion Brands?</span>
                  </div>
                </div>
                {/* Answer below */}
                <div className="w-full flex flex-col items-center p-4 pt-0 pb-6 text-left">
                  <div className="w-full">
                    <h3 className="text-base md:text-lg lg:text-4xl font-display text-[#1d3451] font-bold leading-tight">
                    The way to unlock new revenue streams from what has already been produced - <span className="bg-white/60">reducing growth dependency on new stock and supporting compliance with sustainability regulations.</span>
                    </h3>
                  </div>
                </div>
              </div>
              {/* Vertical Progress Bar */}
              <div className="absolute top-4 right-4 bottom-4 w-1 bg-white/20 backdrop-blur-sm pointer-events-none rounded-full overflow-hidden">
                <div
                  className="bg-white w-full"
                  style={{
                    height: `${cardScrollProgresses[0] * 100}%`,
                    transition: 'height 50ms linear',
                  }}
                />
              </div>
            </div>
            
            {/* Second Card - Redesigners */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isSecondCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 20,
                transform: `translateY(${isSecondCardVisible ? '35px' : '150px'}) scale(0.93)`,
                opacity: isSecondCardVisible ? 1 : 0,
                pointerEvents: isSecondCardVisible ? 'auto' : 'none'
              }}
            >
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: "url('/grad-2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  borderRadius: '20px'
                }}
              ></div>
              
              <div className="relative z-10 h-full flex flex-col justify-center pl-[15px] mr-[15px] md:mr-0">
                {/* Question on top */}
                <div className="w-full flex flex-col items-center p-4 pt-6 pb-2 text-left">
                  <div className="text-base lg:text-2xl md:text-xl font-display text-[#1d3451] font-bold leading-tight mb-4 w-full">
                    What does Re:YVE mean <span className="bg-white/60 px-2 py-1">for Fashion Redesigners?</span>
                  </div>
                </div>
                {/* Answer below */}
                <div className="w-full flex flex-col items-center p-4 pt-0 pb-6 text-left">
                  <div className="w-full">
                    <h3 className="text-base md:text-lg lg:text-4xl font-display text-[#1d3451] font-bold leading-tight">
                        Earn passive royalties by doing what you love doing - designing. <span className="bg-white/60">We connect your creativity to large dead stock inventories, scaling your designs and amplifying your impact</span> without resource limits.
                    </h3>
                  </div>
                </div>
              </div>
              {/* Vertical Progress Bar */}
              <div className="absolute top-4 right-4 bottom-4 w-1 bg-white/20 backdrop-blur-sm pointer-events-none rounded-full overflow-hidden">
                <div
                  className="bg-white w-full"
                  style={{
                    height: `${cardScrollProgresses[1] * 100}%`,
                    transition: 'height 50ms linear',
                  }}
                />
              </div>
            </div>
            
            {/* Third Card - Consumers */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isThirdCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 30,
                transform: `translateY(${isThirdCardVisible ? '30px' : '150px'}) scale(0.96)`,
                opacity: isThirdCardVisible ? 1 : 0,
                pointerEvents: isThirdCardVisible ? 'auto' : 'none'
              }}
            >
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: "url('/grad-2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  borderRadius: '20px'
                }}
              ></div>
              
              <div className="relative z-10 h-full flex flex-col justify-center pl-[15px] mr-[15px] md:mr-0">
                {/* Question on top */}
                <div className="w-full flex flex-col items-center p-4 pt-6 pb-2 text-left">
                  <div className="text-base lg:text-2xl md:text-xl font-display text-[#1d3451] font-bold leading-tight mb-4 w-full">
                    What does Re:YVE mean <span className="bg-white/60 px-2 py-1">for Fashion Consumers?</span>
                  </div>
                </div>
                {/* Answer below */}
                <div className="w-full flex flex-col items-center p-4 pt-0 pb-6 text-left">
                  <div className="w-full">
                    <h3 className="text-base md:text-lg lg:text-4xl font-display text-[#1d3451] font-bold leading-tight">
                    The way to enjoy stylish, high-quality fashion with a unique story - while effortlessly contributing to a more sustainable fashion future.
                    <br /><span className="bg-white/60"> Look good. Feel good. Do good.</span>                </h3>
                  </div>
                </div>
              </div>
              {/* Vertical Progress Bar */}
              <div className="absolute top-4 right-4 bottom-4 w-1 bg-white/20 backdrop-blur-sm pointer-events-none rounded-full overflow-hidden">
                <div
                  className="bg-white w-full"
                  style={{
                    height: `${cardScrollProgresses[2] * 100}%`,
                    transition: 'height 50ms linear',
                  }}
                />
              </div>
            </div>

            {/* Fourth Card - Planet */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-xl ${isFourthCardVisible ? 'animate-card-enter' : ''}`} 
              style={{
                ...cardStyle,
                zIndex: 50,
                transform: `translateY(${isFourthCardVisible ? '40px' : '150px'}) scale(1)`,
                opacity: isFourthCardVisible ? 1 : 0,
                pointerEvents: isFourthCardVisible ? 'auto' : 'none'
              }}
            >
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: "url('/grad-2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  borderRadius: '20px'
                }}
              ></div>
              
              <div className="relative z-10 h-full flex flex-col justify-center pl-[15px] mr-[15px] md:mr-0">
                {/* Question on top */}
                <div className="w-full flex flex-col items-center p-4 pt-6 pb-2 text-left">
                  <div className="text-base lg:text-2xl md:text-xl font-display text-[#1d3451] font-bold leading-tight mb-4 w-full">
                    What does Re:YVE mean <span className="bg-white/60 px-2 py-1">for the Planet?</span>
                  </div>
                </div>
                {/* Answer below */}
                <div className="w-full flex flex-col items-center p-4 pt-0 pb-6 text-left">
                  <div className="w-full">
                    <h3 className="text-base md:text-lg lg:text-4xl font-display text-[#1d3451] font-bold leading-tight">
                    The way to <span className="bg-white/60">align industry growth with social and environmental wellbeing</span> -by enhancing today’s value chains to cut waste, emissions, and water use, while elevating human skill and creativity.
                    </h3>
                  </div>
                </div>
              </div>
              {/* Vertical Progress Bar */}
              <div className="absolute top-4 right-4 bottom-4 w-1 bg-white/20 backdrop-blur-sm pointer-events-none rounded-full overflow-hidden">
                <div
                  className="bg-white w-full"
                  style={{
                    height: `${cardScrollProgresses[3] * 100}%`,
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

export default SplitHumanoidSection;
