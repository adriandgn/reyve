import React from 'react';
import { motion } from 'framer-motion';
import OneLiner from './OneLiner';
import HumanoidSection from '../ui/HumanoidSection';
import SplitHumanoidSection from './SplitHumanoidSection';

const SplitContentSection: React.FC = () => {
  return (
    <section className="w-full bg-white">
      {/* Mobile view - stacked */}
      <div className="block md:hidden">
        <OneLiner />
        <HumanoidSection />
      </div>
      
      {/* Desktop view - side by side */}
      <div className="hidden md:block w-full relative">
        <div className="flex flex-row">
          {/* Left side - OneLiner with adjusted styling */}
          <div className="w-1/2 sticky top-0 h-[70vh] flex items-center bg-white">
            <div className="max-w-full pl-8 pr-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display leading-tight">
                  <span style={{ letterSpacing: -1.5, lineHeight: 0.9, fontWeight: 'bold'}}>
                    <span style={{color: '#2c4c71'}}> Re:YVE is a product <br />life-extension platform <br />that enables </span>
                    <span style={{color: '#30f534'}}>clothing-to-clothing</span>
                    <span style={{color: '#2c4c71'}}> production at scale<br /> to turn unsold inventory <br />into new revenue.</span>
                  </span>
                </h2>
              </motion.div>
            </div>
          </div>
          
          {/* Right side - SplitHumanoidSection */}
          <div className="w-1/2 min-h-[70vh]">
            <SplitHumanoidSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitContentSection;
