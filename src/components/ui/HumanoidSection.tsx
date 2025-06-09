import React, { useEffect, useRef, useState } from "react";

const HumanoidSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);
  // Estado para el porcentaje de progreso que se mostrará en las cards y para el gráfico
  const [scrollProgressPercentage, setScrollProgressPercentage] = useState(0);

  // More responsive timing function with shorter duration
  const cardStyle = {
    height: '60vh',
    maxHeight: '600px',
    borderRadius: '20px',
    transition: 'transform 0.9s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'transform, opacity'
  };

  // Helper function to convert degrees to radians
  const degToRad = (degrees: number): number => {
    return degrees * (Math.PI / 180);
  };

  // Helper function to convert polar coordinates to Cartesian
  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    // Subtract 90 degrees to start at 12 o'clock (top)
    const angleInRadians = degToRad(angleInDegrees - 90); 

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  // Function to get SVG path data for a pie slice based on percentage
  const getPieSlicePath = (percentage: number) => {
    const centerX = 50;
    const centerY = 50;
    const radius = 45; // Adjusted radius for a cleaner look within a 100x100 viewBox

    const startAngle = 0; // Starting from 12 o'clock (after polarToCartesian adjustment)
    const endAngle = (percentage / 100) * 360;

    if (percentage === 0) {
      return ""; // No slice at 0%
    }
    if (percentage === 100) {
      // Path for a full circle to ensure it's rendered correctly at 100%
      return `M ${centerX},${centerY} m -${radius}, 0 a ${radius},${radius} 0 1,0 ${radius * 2},0 a ${radius},${radius} 0 1,0 -${radius * 2},0 Z`;
    }

    const start = polarToCartesian(centerX, centerY, radius, endAngle);
    const end = polarToCartesian(centerX, centerY, radius, startAngle);

    // If the arc is greater than 180 degrees, set largeArcFlag to 1
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      `M ${centerX},${centerY}`, // Move to center of the circle
      `L ${end.x},${end.y}`,   // Line from center to the start of the arc (top center initially)
      `A ${radius},${radius} 0 ${largeArcFlag} 1 ${start.x},${start.y}`, // Arc path
      `Z` // Close path back to the center, forming a pie slice
    ].join(" ");
  };


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
    
    // Optimized scroll handler using requestAnimationFrame
    const handleScroll = () => {
      if (!ticking.current) {
        lastScrollY.current = window.scrollY;
        
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          // totalScrollDistance es la distancia de scroll sobre la cual calculamos el progreso.
          // Si la última tarjeta se activa al 40% del progreso, y queremos que eso ocurra
          // cerca del final del scroll "artificial", ajustamos esta distancia.
          // Para que la última tarjeta (índice 4, progreso 0.4) sea visible,
          // sectionRect.top debe ser aproximadamente -0.8 * viewportHeight.
          // La altura total del scroll "artificial" es aproximadamente
          // (Altura del div principal) - (Altura de la sección sticky).
          // Necesitamos que esa diferencia sea ~0.8 * viewportHeight.
          // Como la sección sticky es 125vh y la viewportHeight es 100vh,
          // 0.8 * 100vh = 80vh.
          // Altura del div principal = 80vh + 125vh = 205vh.
          // Usamos 220vh para dar un pequeño margen después de que la última tarjeta sea visible.
          const totalScrollDistance = viewportHeight * 2; 
          
          // Calculate the scroll progress for cards
          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(2, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance));
          }
          
          // Determine which card should be visible based on progress
          if (progress >= 0.4) {
            setActiveCardIndex(4);
          } else if (progress >= 0.3) {
            setActiveCardIndex(3);
          } else if (progress >= 0.2) {
            setActiveCardIndex(2);
          } else if (progress >= 0.1) {
            setActiveCardIndex(1);
          } else {
            setActiveCardIndex(0);
          }

          // Calculate progress for the number display and pie chart.
          // The artificial scroll takes place while sectionRect.top goes from 0 to about -0.8 * viewportHeight.
          // We want the progress bar to go from 0% when progress is 0, to 100% when progress is 0.4.
          const currentProgress = Math.min(100, Math.max(0, (progress / 0.4) * 100));
          // Redondea el porcentaje para una mejor visualización.
          setScrollProgressPercentage(Math.round(currentProgress));
          
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Card visibility based on active index instead of direct scroll progress
  const isFirstCardVisible = isIntersecting;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;
  const isFourthCardVisible = activeCardIndex >= 3;
  const isFifthCardVisible = activeCardIndex >= 4;

  return (
    <div 
      ref={sectionRef} 
      className="relative" 
      // Se ha ajustado la altura del div principal de 500vh a 220vh.
      // Esto reduce significativamente la distancia de "scroll artificial"
      // y hace que el scroll normal de la página se reanude más rápido
      // después de que la última tarjeta se active.
      style={{ height: '220vh' }}
    >
      <section className="w-full h-[125vh] py-10 md:py-16 sticky top-0 overflow-hidden bg-white" id="why-humanoid">
        {/* La barra de progreso horizontal anterior ha sido eliminada */}
        
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
              {/* Indicador de porcentaje y gráfico de pastel en la esquina inferior derecha */}
              {isFirstCardVisible && (
                <div className="absolute bottom-4 right-4 z-20">
                  <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white">
                    <svg width="24" height="24" viewBox="0 0 100 100" className="mr-2">
                      {/* Fondo del círculo (el "reloj" vacío) */}
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10" opacity="0.3" />
                      {/* La porción del pastel que se llena */}
                      <path
                        d={getPieSlicePath(scrollProgressPercentage)}
                        fill="currentColor"
                        // La opacidad puede ajustarse para que sea más visible o sutil
                        opacity="0.8" 
                      />
                    </svg>
                    <span className="text-sm font-medium">{scrollProgressPercentage}%</span>
                  </div>
                </div>
              )}
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
              {/* Indicador de porcentaje y gráfico de pastel en la esquina inferior derecha */}
              {isSecondCardVisible && (
                <div className="absolute bottom-4 right-4 z-20">
                  <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white">
                    <svg width="24" height="24" viewBox="0 0 100 100" className="mr-2">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10" opacity="0.3" />
                      <path
                        d={getPieSlicePath(scrollProgressPercentage)}
                        fill="currentColor"
                        opacity="0.8" 
                      />
                    </svg>
                    <span className="text-sm font-medium">{scrollProgressPercentage}%</span>
                  </div>
                </div>
              )}
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
              {/* Indicador de porcentaje y gráfico de pastel en la esquina inferior derecha */}
              {isThirdCardVisible && (
                <div className="absolute bottom-4 right-4 z-20">
                  <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white">
                    <svg width="24" height="24" viewBox="0 0 100 100" className="mr-2">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10" opacity="0.3" />
                      <path
                        d={getPieSlicePath(scrollProgressPercentage)}
                        fill="currentColor"
                        opacity="0.8" 
                      />
                    </svg>
                    <span className="text-sm font-medium">{scrollProgressPercentage}%</span>
                  </div>
                </div>
              )}
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
              {/* Indicador de porcentaje y gráfico de pastel en la esquina inferior derecha */}
              {isFourthCardVisible && (
                <div className="absolute bottom-4 right-4 z-20">
                  <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white">
                    <svg width="24" height="24" viewBox="0 0 100 100" className="mr-2">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10" opacity="0.3" />
                      <path
                        d={getPieSlicePath(scrollProgressPercentage)}
                        fill="currentColor"
                        opacity="0.8" 
                      />
                    </svg>
                    <span className="text-sm font-medium">{scrollProgressPercentage}%</span>
                  </div>
                </div>
              )}
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
              {/* Indicador de porcentaje y gráfico de pastel en la esquina inferior derecha */}
              {isFifthCardVisible && (
                <div className="absolute bottom-4 right-4 z-20">
                  <div className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white">
                    <svg width="24" height="24" viewBox="0 0 100 100" className="mr-2">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10" opacity="0.3" />
                      <path
                        d={getPieSlicePath(scrollProgressPercentage)}
                        fill="currentColor"
                        opacity="0.8" 
                      />
                    </svg>
                    <span className="text-sm font-medium">{scrollProgressPercentage}%</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumanoidSection;
