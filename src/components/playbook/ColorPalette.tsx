import React, { useState } from 'react';

type ColorShade = {
  [key: string]: string;
};

const colorPalette = {
  // Paleta original (naranja)
  brand: {
    '50': '#fff7ed',
    '100': '#ffedd5',
    '200': '#fed7aa',
    '300': '#fdba74',
    '400': '#fb923c',
    '500': '#f97316',
    '600': '#ea580c',
    '700': '#c2410c',
    '800': '#9a3412',
    '900': '#7c2d12',
    '950': '#431407',
  },
  // Brand 1 - Azul (#2c4c71)
  brand1: {
    '50': '#f0f5fa',
    '100': '#d6e3f2',
    '200': '#b3cae3',
    '300': '#82a8cf',
    '400': '#5a87b9',
    '500': '#2c4c71',
    '600': '#233f62',
    '700': '#1d3451',
    '800': '#1a2c44',
    '900': '#142538',
    '950': '#0d1722',
  },
  // Brand 2 - Verde (#1be81d)
  brand2: {
    '50': '#f0fff0',
    '100': '#d9ffd9',
    '200': '#adffae',
    '300': '#73ff75',
    '400': '#30f534',
    '500': '#1be81d',
    '600': '#11b113',
    '700': '#138a14',
    '800': '#166c17',
    '900': '#155a16',
    '950': '#063208',
  },
  // Brand 3 - Magenta (#e81be6)
  brand3: {
    '50': '#fef1fe',
    '100': '#fde5fd',
    '200': '#fccafb',
    '300': '#fb9ff7',
    '400': '#f95fee',
    '500': '#e81be6',
    '600': '#c90fc7',
    '700': '#a00d9f',
    '800': '#8a0f89',
    '900': '#6b116a',
    '950': '#480347',
  },
  dark: {
    '600': '#3d3d3d',
    '700': '#2d2d2d',
    '800': '#1e1e1e',
    '900': '#121212',
  },
};

const ColorSwatch = ({ name, color, bgColor }: { name: string; color: string; bgColor: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="w-24 h-24 rounded-lg shadow-md mb-2 cursor-pointer relative group"
        style={{ backgroundColor: bgColor }}
        onClick={() => copyToClipboard(bgColor)}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 text-white text-xs rounded-lg">
          {copied ? '¡Copiado!' : 'Click para copiar'}
        </div>
      </div>
      <span className="text-sm font-medium text-gray-700">{name}</span>
      <span className="text-xs text-gray-500 font-mono">{bgColor}</span>
    </div>
  );
};

export const ColorPalette = () => {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Paleta Principal (Naranja)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 mb-12">
          {Object.entries(colorPalette.brand).map(([shade, color]) => (
            <ColorSwatch
              key={`brand-${shade}`}
              name={`Brand ${shade}`}
              color={`brand-${shade}`}
              bgColor={color}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Paleta 1 - Azul</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 mb-12">
          {Object.entries(colorPalette.brand1).map(([shade, color]) => (
            <ColorSwatch
              key={`brand1-${shade}`}
              name={`Brand 1 ${shade}`}
              color={`brand1-${shade}`}
              bgColor={color}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Paleta 2 - Verde</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 mb-12">
          {Object.entries(colorPalette.brand2).map(([shade, color]) => (
            <ColorSwatch
              key={`brand2-${shade}`}
              name={`Brand 2 ${shade}`}
              color={`brand2-${shade}`}
              bgColor={color}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Paleta 3 - Magenta</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 mb-12">
          {Object.entries(colorPalette.brand3).map(([shade, color]) => (
            <ColorSwatch
              key={`brand3-${shade}`}
              name={`Brand 3 ${shade}`}
              color={`brand3-${shade}`}
              bgColor={color}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Escala de Grises</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {Object.entries(colorPalette.dark).map(([shade, color]) => (
            <ColorSwatch
              key={`dark-${shade}`}
              name={`Dark ${shade}`}
              color={`dark-${shade}`}
              bgColor={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
