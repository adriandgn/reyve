import React from 'react';

const OneLiner: React.FC = () => {
  return (
    <section className="w-full flex items-center bg-white py-6 sm:py-10" id="oneliner-section">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-5xl pl-4 sm:pl-8">
          <h2 className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl font-display md:leading-tight mb-8">
            <span className="color-[#30f534]" style={{ letterSpacing: -3, lineHeight: 0.8, fontWeight: 'bold',color: '#30f534' }}>
            <span style={{color: '#2c4c71'}}> Re:YVE is a product life-extension platform that enables </span>clothing-to-clothing<span style={{color: '#2c4c71'}}> production at scale to turn unsold inventory into new revenue.</span>
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default OneLiner;
