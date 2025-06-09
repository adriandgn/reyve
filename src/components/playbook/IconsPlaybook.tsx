import React from 'react';

const IconsPlaybook = () => {
  const icons = [
    {
      name: 'Package',
      component: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <path d="M3.27 6.96 12 12.01l8.73-5.05"></path>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      usage: 'Data Packs for Redesign',
    },
    {
      name: 'Phone',
      component: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      usage: 'Remote Digital Redesign',
    },
    {
      name: 'Target',
      component: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 1 1-4-4"></path>
          <path d="M12 8a4 4 0 1 0 4 4"></path>
          <circle cx="12" cy="12" r="1"></circle>
        </svg>
      ),
      usage: 'Automated Design Qualification',
    },
    {
      name: 'Layers',
      component: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
          <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
          <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
        </svg>
      ),
      usage: 'Repeatable Maker Recipes',
    },
    {
      name: 'Package Open',
      component: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <path d="M3.27 6.96 12 12.01l8.73-5.05"></path>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
          <path d="M16 6.5l-4 2.3-4-2.3"></path>
        </svg>
      ),
      usage: 'Market Re-introduction',
    },
    {
      name: 'Package Plus',
      component: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <path d="M3.27 6.96 12 12.01l8.73-5.05"></path>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
          <path d="M16 6.5l-4 2.3-4-2.3"></path>
          <path d="M12 12v10"></path>
          <path d="m8 14 4 2 4-2"></path>
        </svg>
      ),
      usage: 'On-Demand Logistics Integration',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Lucide Icons</h2>
          <p className="text-lg text-gray-500">Iconos utilizados en el proyecto</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {icons.map((icon, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white rounded-lg shadow-inner">
                <div className="text-indigo-600">
                  {icon.component}
                </div>
              </div>
              <h3 className="text-lg font-medium text-center text-gray-900 mb-2">{icon.name}</h3>
              <p className="text-sm text-gray-500 text-center">
                Usado en: <span className="text-indigo-600">{icon.usage}</span>
              </p>
              <div className="mt-4 p-3 bg-gray-100 rounded-md overflow-x-auto">
                <pre className="text-xs text-gray-700">
                  {`<svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="24" 
  height="24" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth="2" 
  strokeLinecap="round" 
  strokeLinejoin="round"
>
  ${icon.component.props.children}
</svg>`}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconsPlaybook;
