import React from 'react';

const spacingScale = [
  { name: 'xs', value: '0.25rem', example: '4px' },
  { name: 'sm', value: '0.5rem', example: '8px' },
  { name: 'md', value: '1rem', example: '16px' },
  { name: 'lg', value: '1.5rem', example: '24px' },
  { name: 'xl', value: '2rem', example: '32px' },
  { name: '2xl', value: '3rem', example: '48px' },
  { name: '3xl', value: '4rem', example: '64px' },
  { name: '4xl', value: '6rem', example: '96px' },
];

export const SpacingSection = () => {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Escala de Espaciado</h3>
        <div className="space-y-4 border rounded-lg p-6 bg-gray-50">
          <p className="text-gray-600">
            La escala de espaciado sigue una progresión basada en 4px (0.25rem). Se utiliza para márgenes, rellenos y espacios entre elementos.
          </p>
          <div className="space-y-2">
            {spacingScale.map((item) => (
              <div key={item.name} className="flex items-center">
                <div className="w-24 font-mono text-sm text-gray-600">
                  {item.name}:
                </div>
                <div className="flex-1 flex items-center">
                  <div
                    className="bg-brand-400 h-6 flex items-center justify-end pr-2 text-white text-xs font-mono"
                    style={{ width: item.value }}
                  >
                    {item.example}
                  </div>
                  <div className="ml-2 text-sm text-gray-500 font-mono">
                    {item.value} ({item.example})
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Grid System</h3>
        <div className="space-y-4">
          <p className="text-gray-600">
            El sistema de grid utiliza un contenedor con un ancho máximo de 1280px y un padding lateral responsivo.
          </p>
          <div className="border rounded-lg overflow-hidden">
            <div className="p-4 border-b bg-gray-50">
              <h4 className="font-medium">Contenedor</h4>
              <code className="text-xs font-mono text-gray-600">max-w-7xl mx-auto px-4 sm:px-6 lg:px-8</code>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-12 gap-4">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="h-16 bg-brand-100 flex items-center justify-center text-brand-800 font-medium"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">Escala Tipográfica</h3>
        <div className="space-y-8">
          {/* Aquí se puede agregar la escala tipográfica si es necesario */}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Sombras</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'sm', class: 'shadow-sm', size: '0 1px 2px 0 rgb(0 0 0 / 0.05)' },
            { name: 'md', class: 'shadow', size: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)' },
            { name: 'lg', class: 'shadow-md', size: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' },
            { name: 'xl', class: 'shadow-lg', size: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' },
          ].map((shadow) => (
            <div key={shadow.name} className="space-y-3">
              <div className={`h-20 bg-white rounded-lg ${shadow.class}`}></div>
              <div>
                <h4 className="font-medium">Sombra {shadow.name}</h4>
                <code className="text-xs font-mono text-gray-600">{shadow.class}</code>
                <p className="text-xs text-gray-500 mt-1">{shadow.size}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

