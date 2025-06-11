import React from "react";
import { Layers, Cloud, Sparkles, Copy, Rocket, Workflow } from "lucide-react";
import { px } from "framer-motion";

interface SpecItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  value?: string; // Made optional as it's not used in the current design
  description: string;
}

const SpecCard: React.FC<SpecItem> = ({ icon, title, value, description }) => (
  <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border hover:border-brand-100">
    <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 mb-6 mx-auto">
      {icon}
    </div>
    <div className="text-center">
      <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Brockmann, Inter, sans-serif' }}>{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
    </div>
  </div>
);

const SpecsSection = () => {
  const specs: SpecItem[] = [
    {
      id: '1',
      icon: <Layers className="w-6 h-6 text-brand-600" />,
      title: 'Data Packs for Redesign',
      description: 'Consolidated inventory and product metadata to enable redesign at scale.'
    },
    {
      id: '2',
      icon: <Cloud className="w-6 h-6 text-brand-600" />,
      title: 'Remote Digital Redesign',
      description: 'Redesign without physical sampling.'
    },
    {
      id: '3',
      icon: <Sparkles className="w-6 h-6 text-brand-600" />,
      title: 'Automated Design Qualification',
      description: 'Redesign concepts filtered by brand fit and market demand.'
    },
    {
      id: '4',
      icon: <Copy className="w-6 h-6 text-brand-600" />,
      title: 'Repeatable Maker Recipes',
      description: 'Approved redesigns become repeatable production templates.'
    },
    {
      id: '5',
      icon: <Rocket className="w-6 h-6 text-brand-600" />,
      title: 'Market Re-introduction',
      description: 'Redesigned garments return as premium digital products sold with a story via brand and circular retail channels.'
    },
    {
      id: '6',
      icon: <Workflow className="w-6 h-6 text-brand-600" />,
      title: 'On-Demand Logistics Integration',
      description: 'Only what\'s ordered is produced.'
    }
  ];

  return (
    <>
    <section className=" bg-white flex flex-col items-center">
      <div className="container  px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h3 className="font-brockmann text-xl font-bold mb-6 uppercase "><span className="bg-[#30f534]/80 px-2 rounded">Our solution</span></h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Brockmann, Inter, sans-serif' }}>
          An infrastructure for high volume apparel reinvention
          </h2>
          <p className="text-xl text-gray-700">
          We integrate and orchestrate everything brands need to <b>transform dead stock into new value</b>          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec) => (
            <SpecCard key={spec.id} {...spec} />
          ))}
        </div>
      </div>
    </section>
  </>
  );
};

export default SpecsSection;
