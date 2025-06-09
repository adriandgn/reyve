import React from 'react';

const LogoGuidelines = () => {
  const logoVariants = [
    {
      name: 'Color Logo',
      file: 'logo-color.svg',
      usage: 'Primary logo for light backgrounds',
      className: 'bg-white p-6',
    },
    {
      name: 'White Logo',
      file: 'logo-white.svg',
      usage: 'For dark or colored backgrounds',
      className: 'bg-gray-900 p-6',
    },
    {
      name: 'Black Logo',
      file: 'logo-black.svg',
      usage: 'For light backgrounds when color is not appropriate',
      className: 'bg-white p-6',
    },
  ];

  const incorrectUsage = [
    'Do not stretch or distort the logo',
    'Do not rotate the logo',
    'Do not change the colors of the logo',
    'Do not add effects like drop shadows or glows',
    'Maintain minimum clear space around the logo',
  ];

  return (
    <section id="logo-guidelines" className="mb-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
        Logo Guidelines
      </h2>
      
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Logo Variations</h3>
        <p className="text-gray-600 mb-6">
          Re:YVE has three official logo variations. Always use the appropriate version based on the background.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {logoVariants.map((logo, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
              <div className={logo.className}>
                <img 
                  src={`/${logo.file}`} 
                  alt={`${logo.name} - ${logo.usage}`} 
                  className="h-24 mx-auto object-contain"
                />
              </div>
              <div className="p-4 border-t">
                <h4 className="font-medium text-gray-900">{logo.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{logo.usage}</p>
                <div className="mt-2 text-xs text-gray-500">
                  File: <code className="bg-gray-100 px-1.5 py-0.5 rounded">{logo.file}</code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Minimum Size</h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
              <img 
                src="/logo-color.svg" 
                alt="Minimum size example" 
                className="h-12"
              />
              <p className="text-xs text-center mt-2 text-gray-500">Minimum width: 120px</p>
            </div>
            <div className="max-w-lg">
              <p className="text-gray-600 mb-4">
                To ensure legibility, the logo should never be displayed smaller than 120px in width.
                For digital applications, the minimum width is 24px for favicon usage only.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Note:</strong> When using the logo in print, ensure it's at least 1 inch wide at 300 DPI.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Clear Space</h3>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
          <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 flex items-center justify-center">
            <div className="relative">
              <img 
                src="/logo-color.svg" 
                alt="Clear space example" 
                className="h-20 mx-auto"
              />
              <div className="absolute -left-4 -top-4 w-8 h-8 border-l-2 border-t-2 border-red-500"></div>
              <div className="absolute -right-4 -top-4 w-8 h-8 border-r-2 border-t-2 border-red-500"></div>
              <div className="absolute -left-4 -bottom-4 w-8 h-8 border-l-2 border-b-2 border-red-500"></div>
              <div className="absolute -right-4 -bottom-4 w-8 h-8 border-r-2 border-b-2 border-red-500"></div>
            </div>
          </div>
          <p className="mt-4 text-gray-600 text-center">
            Maintain clear space equal to half the logo's height on all sides
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Incorrect Usage</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-red-100 rounded-lg p-6 bg-red-50">
            <h4 className="font-medium text-red-800 mb-4">Avoid These Common Mistakes</h4>
            <ul className="space-y-2">
              {incorrectUsage.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-red-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 bg-white">
            <h4 className="font-medium text-gray-900 mb-4">Download</h4>
            <p className="text-gray-600 mb-4">
              Download the official logo assets package for all variations and formats.
            </p>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500">
              <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Logo Package
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoGuidelines;
