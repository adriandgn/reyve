
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pb-20 bg-gradient-to-b from-white via-circularity-green/10 to-white" id="process">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
  <h2 className="font-brockmann text-4xl sm:text-5xl font-extrabold tracking-tight text-circularity-navy mb-4 leading-tight">
    Our Process for <br /> <span className="bg-[#30f534] px-2 rounded">clothing-to-clothing</span> production
  </h2>
  <p className="text-lg sm:text-xl text-circularity-navy font-montserrat">
    We help fashion brands turn what’s already made and written-off, into what sells next. <b>Scaling Life Extension by Enabling Digital Collaboration</b>
  </p>
</div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Imagen protagonista con overlay y badges */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl min-h-[420px] flex items-center justify-center">
            <img 
              src="/vital-adi-03BEKvMfsQQ-unsplash.jpg"
              alt="Sustainable fashion design process combining technology and craftsmanship" 
              className="w-full h-full object-cover scale-105 transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Indicadores de proceso integrados y modernos */}
            <div className="absolute top-6 left-6 flex flex-col gap-4">
              <div className="bg-white/95 backdrop-blur-md rounded-xl px-5 py-3 shadow-lg border border-circularity-green/40 animate-fade-in">
                <div className="text-xs font-montserrat font-bold text-circularity-navy uppercase tracking-wide">Step 01</div>
                <div className="text-xs text-gray-600">Data Consolidation & Inventory Insights 
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 flex flex-col gap-4">
              <div className="bg-white/95 backdrop-blur-md rounded-xl px-5 py-3 shadow-lg border border-circularity-magenta/40 animate-fade-in">
                <div className="text-xs font-montserrat font-bold text-circularity-navy uppercase tracking-wide">100% Traceable</div>
                <div className="text-xs text-gray-600">Supply Chain</div>
              </div>
            </div>
          </div>
          {/* Sección de features alineada a la izquierda y jerarquía visual */}
          <div className="space-y-8">
  {/* Feature Card 1: Fashion Brands */}
  <div className="group feature-item transition-all duration-300 cursor-pointer bg-white rounded-2xl shadow-lg border border-circularity-green/30 hover:border-circularity-green hover:shadow-2xl hover:scale-[1.025] hover:bg-[#30f534]/5 flex items-center px-6 py-5 gap-5 relative">
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-circularity-green/40 transition-all duration-300 mt-0.5"
      style={{
        backgroundImage: `url('/mini-grad.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <span className="text-white font-bold text-base drop-shadow group-hover:text-circularity-green group-hover:scale-110 transition-all duration-300" style={{textShadow: '0 1px 6px rgba(0,0,0,0.25)'}}>1</span>
    </div>
    <div>
      <h3 className="font-brockmann text-xl font-bold text-circularity-navy mb-1">Data Consolidation & Inventory Insights </h3>
      <p className="font-montserrat text-gray-700"><span>We integrate dead stock, style data and best sellers data into <b>structured, product packs</b> to enable digital redesign</span></p>
    </div>
  </div>
  {/* Feature Card 2: Redesigners */}
  <div className="group feature-item transition-all duration-300 cursor-pointer bg-white rounded-2xl shadow-lg border border-circularity-green/30 hover:border-circularity-green hover:shadow-2xl hover:scale-[1.025] hover:bg-[#30f534]/5 flex items-center px-6 py-5 gap-5 relative">
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-circularity-green/40 transition-all duration-300 mt-0.5"
      style={{
        backgroundImage: `url('/mini-grad.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <span className="text-white font-bold text-base drop-shadow group-hover:text-circularity-green group-hover:scale-110 transition-all duration-300" style={{textShadow: '0 1px 6px rgba(0,0,0,0.25)'}}>2</span>
    </div>
    <div>
      <h3 className="font-brockmann text-xl font-bold text-circularity-navy mb-1">Data-Driven Digital Redesign Concepts</h3>  
      <p className="font-montserrat text-gray-700"><span>In close collaboration with the partner brand, accredited redesigners submit digital <b>upcycle concepts</b> aligned with each data pack -to outperform originals</span></p>
    </div>
  </div>
  {/* Feature Card 3: Makers */}
  <div className="group feature-item transition-all duration-300 cursor-pointer bg-white rounded-2xl shadow-lg border border-circularity-green/30 hover:border-circularity-green hover:shadow-2xl hover:scale-[1.025] hover:bg-[#30f534]/5 flex items-center px-6 py-5 gap-5 relative">
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-circularity-green/40 transition-all duration-300 mt-0.5"
      style={{
        backgroundImage: `url('/mini-grad.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <span className="text-white font-bold text-base drop-shadow group-hover:text-circularity-green group-hover:scale-110 transition-all duration-300" style={{textShadow: '0 1px 6px rgba(0,0,0,0.25)'}}>3</span>
    </div>
    <div>
      <h3 className="font-brockmann text-xl font-bold text-circularity-navy mb-1">High volume redesign production</h3>
      <p className="font-montserrat text-gray-700"><span>Approved redesigns are translated into scalable production by using redesign tech-packs based on Re:YVE´s unique metodology</span></p>
    </div>
  </div>
  {/* Feature Card 4: Consumers */}
  <div className="group feature-item transition-all duration-300 cursor-pointer bg-white rounded-2xl shadow-lg border border-circularity-green/30 hover:border-circularity-green hover:shadow-2xl hover:scale-[1.025] hover:bg-[#30f534]/5 flex items-center px-6 py-5 gap-5 relative">
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-circularity-green/40 transition-all duration-300 mt-0.5"
      style={{
        backgroundImage: `url('/mini-grad.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <span className="text-white font-bold text-base drop-shadow group-hover:text-circularity-green group-hover:scale-110 transition-all duration-300" style={{textShadow: '0 1px 6px rgba(0,0,0,0.25)'}}>4</span>
    </div>
    <div>
      <h3 className="font-brockmann text-xl font-bold text-circularity-navy mb-1">Market Re-introduction</h3>     
      <p className="font-montserrat text-gray-700"><span>Redesigned garments return as premium digital products sold with a story via brand and circular retail channels.
      </span></p>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
