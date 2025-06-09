import React from 'react';

const typography = {
  display: {
    name: 'Display',
    classes: 'text-5xl md:text-6xl font-display font-bold',
    description: 'Títulos principales y encabezados destacados',
    example: 'Revolucionando la moda sostenible',
  },
  heading1: {
    name: 'Heading 1',
    classes: 'text-4xl font-bold',
    description: 'Títulos de sección principales',
    example: 'Nuestra Visión',
  },
  heading2: {
    name: 'Heading 2',
    classes: 'text-3xl font-semibold',
    description: 'Subtítulos y encabezados de sección',
    example: 'Sostenibilidad en cada puntada',
  },
  heading3: {
    name: 'Heading 3',
    classes: 'text-2xl font-semibold',
    description: 'Encabezados de subsección',
    example: 'Materiales orgánicos',
  },
  body: {
    name: 'Body',
    classes: 'text-base',
    description: 'Texto de párrafo estándar',
    example: 'Cada prenda que creamos está diseñada pensando en el planeta y en las personas que la usarán.',
  },
  small: {
    name: 'Small',
    classes: 'text-sm',
    description: 'Texto secundario y notas',
    example: 'Hecho con materiales 100% reciclados',
  },
};

export const TypographySection = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">Familias Tipográficas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h4 className="text-lg font-medium mb-2">Inter</h4>
            <p className="text-gray-600 mb-4">Usada para la mayoría del texto y la interfaz de usuario.</p>
            <p className="font-sans text-lg">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
            <p className="font-sans text-lg mt-2">0 1 2 3 4 5 6 7 8 9</p>
          </div>
          <div className="border rounded-lg p-6">
            <h4 className="text-lg font-medium mb-2">Climate Crisis</h4>
            <p className="text-gray-600 mb-4">Usada para títulos y elementos destacados con impacto.</p>
            <p className="font-climate text-xl">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
            <p className="font-climate text-xl mt-2">0 1 2 3 4 5 6 7 8 9</p>
            <div className="mt-4 space-y-2">
              <p className="font-climate text-3xl">¡Acción climática ya!</p>
              <p className="font-climate text-2xl text-orange-600">No hay planeta B</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">Escala Tipográfica</h3>
        <div className="space-y-8">
          {Object.entries(typography).map(([key, style]) => (
            <div key={key} className="border-b pb-6 last:border-0 last:pb-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <div>
                  <h4 className="text-lg font-medium">{style.name}</h4>
                  <p className="text-sm text-gray-600">{style.description}</p>
                </div>
                <div className="text-sm font-mono bg-gray-50 px-3 py-1 rounded">
                  {style.classes}
                </div>
              </div>
              <div className={`mt-2 ${style.classes} text-gray-900`}>
                {style.example}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

