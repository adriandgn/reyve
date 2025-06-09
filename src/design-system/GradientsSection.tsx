import React from 'react';

const gradients = [
  {
    name: 'Gradiente Hero 1',
    value: 'bg-gradient-to-r from-[hsla(24,100%,83%,1)] to-[hsla(341,91%,68%,1)]',
    colors: 'from-[hsla(24,100%,83%,1)] to-[hsla(341,91%,68%,1)]',
    usage: 'Cabecera principal y secciones destacadas',
  },
  {
    name: 'Gradiente Hero 2',
    value: 'bg-gradient-to-r from-[hsla(39,100%,77%,1)] to-[hsla(22,90%,57%,1)]',
    colors: 'from-[hsla(39,100%,77%,1)] to-[hsla(22,90%,57%,1)]',
    usage: 'Botones de acción principal',
  },
  {
    name: 'Gradiente Pulse',
    value: 'bg-gradient-to-b from-[rgba(249,115,22,0.8)] to-transparent',
    colors: 'from-[rgba(249,115,22,0.8)] to-transparent',
    usage: 'Efectos de superposición',
  },
];

export const GradientsSection = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gradients.map((gradient, index) => (
          <div key={index} className="space-y-3">
            <div className={`h-40 rounded-lg ${gradient.value} shadow-md flex items-end p-4`}>
              <span className="text-white font-medium text-sm bg-black/30 px-2 py-1 rounded">
                {gradient.name}
              </span>
            </div>
            <div>
              <h4 className="font-medium text-gray-900">{gradient.name}</h4>
              <p className="text-sm text-gray-600 mb-2">{gradient.usage}</p>
              <div className="bg-gray-50 p-2 rounded text-xs font-mono text-gray-700 overflow-x-auto">
                {gradient.colors}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
