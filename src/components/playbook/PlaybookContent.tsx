import React from 'react';
import { ColorPalette } from './ColorPalette';
import { TypographySection } from './TypographySection';
import { ButtonsSection } from './ButtonsSection';
import { SpacingSection } from './SpacingSection';
import { GradientsSection } from './GradientsSection';
import IconsPlaybook from './IconsPlaybook';
import LogoGuidelines from './LogoGuidelines';

export const PlaybookContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Re:YVE Design System</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Guía de diseño y desarrollo para mantener la consistencia en todos los productos Re:YVE
        </p>
      </header>

      <section id="logo" className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
          Logo & Marca
        </h2>
        <LogoGuidelines />
      </section>

      <section id="colores" className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
          Paleta de Colores
        </h2>
        <ColorPalette />
      </section>

      <section id="gradientes" className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
          Gradientes
        </h2>
        <GradientsSection />
      </section>

      <section id="tipografia" className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
          Tipografía
        </h2>
        <TypographySection />
      </section>

      <section id="botones" className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
          Botones
        </h2>
        <ButtonsSection />
      </section>

      <section id="espaciado" className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
          Espaciado y Layout
        </h2>
        <SpacingSection />
      </section>

      <section id="iconos" className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
          Iconos
        </h2>
        <IconsPlaybook />
      </section>
    </div>
  );
};
