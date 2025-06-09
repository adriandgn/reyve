import React from 'react';
import { Send, ArrowRight } from 'lucide-react';

const buttonVariants = [
  {
    name: 'Primario',
    className: 'bg-brand-500 text-white hover:bg-brand-600',
    code: 'bg-brand-500 hover:bg-brand-600 text-white font-medium py-4 px-10 rounded-full transition-all duration-300',
  },
  {
    name: 'Secundario',
    className: 'bg-white text-brand-600 border-2 border-brand-200 hover:bg-gray-50',
    code: 'bg-white text-brand-600 border-2 border-brand-200 hover:bg-gray-50 font-medium py-4 px-10 rounded-full transition-all duration-300',
  },
  {
    name: 'Texto',
    className: 'text-brand-600 hover:text-brand-700',
    code: 'text-brand-600 hover:text-brand-700 font-medium transition-colors duration-300',
  },
  {
    name: 'Deshabilitado',
    className: 'bg-gray-200 text-gray-400 cursor-not-allowed',
    code: 'bg-gray-200 text-gray-400 cursor-not-allowed font-medium py-4 px-10 rounded-full',
  },
];

const buttonSizes = [
  {
    name: 'Grande',
    className: 'py-4 px-10 text-base',
    code: 'py-4 px-10 text-base',
  },
  {
    name: 'Mediano',
    className: 'py-3 px-8 text-sm',
    code: 'py-3 px-8 text-sm',
  },
  {
    name: 'Pequeño',
    className: 'py-2 px-6 text-xs',
    code: 'py-2 px-6 text-xs',
  },
];

const inputStyles = {
  base: 'w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-700 transition-all duration-300',
  textarea: 'w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-gray-700 transition-all duration-300',
  label: 'block text-sm font-medium text-gray-700 mb-1',
  error: 'mt-1 text-sm text-red-600',
};

export const ButtonsSection = () => {
  return (
    <div className="space-y-16">
      {/* Sección de Botones */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
          Botones
        </h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Variantes</h3>
            <div className="flex flex-wrap items-center gap-6">
              {buttonVariants.map((variant, index) => (
                <div key={index} className="flex flex-col items-center space-y-3">
                  <button
                    className={`font-medium ${variant.className} min-w-[180px] text-center`}
                  >
                    {variant.name}
                  </button>
                  <div className="text-xs font-mono bg-gray-50 p-2 rounded-lg overflow-x-auto max-w-full">
                    <code className="text-gray-800">{variant.code}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Tamaños</h3>
            <div className="flex flex-wrap items-end gap-6">
              {buttonSizes.map((size, index) => (
                <div key={index} className="flex flex-col items-center space-y-3">
                  <button
                    className={`bg-brand-500 hover:bg-brand-600 text-white rounded-full font-medium ${size.className}`}
                  >
                    Botón
                  </button>
                  <div className="text-xs font-mono bg-gray-50 p-2 rounded-lg">
                    <code className="text-gray-800">{size.name}: {size.code}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Con Iconos</h3>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex flex-col items-center space-y-3">
                <button className="flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 min-w-[200px]">
                  <Send className="w-4 h-4" />
                  Enviar Mensaje
                </button>
                <div className="text-xs font-mono bg-gray-50 p-2 rounded-lg">
                  <code className="text-gray-800">
                    {`<button className="flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-medium py-4 px-8 rounded-full transition-all duration-300">
  <Send className="w-4 h-4" />
  Enviar Mensaje
</button>`}
                  </code>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <button className="flex items-center justify-center gap-2 text-brand-600 hover:text-brand-700 font-medium transition-colors duration-300">
                  Ver más
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-xs font-mono bg-gray-50 p-2 rounded-lg">
                  <code className="text-gray-800">
                    {`<button className="flex items-center justify-center gap-2 text-brand-600 hover:text-brand-700 font-medium transition-colors duration-300">
  Ver más
  <ArrowRight className="w-4 h-4" />
</button>`}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Campos de Entrada */}
      <div className="pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Campos de Entrada
        </h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Estilos de Entrada</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <label className={inputStyles.label}>Campo de texto</label>
                  <input 
                    type="text" 
                    placeholder="Escribe aquí..." 
                    className={inputStyles.base}
                  />
                </div>
                
                <div>
                  <label className={inputStyles.label}>Correo electrónico</label>
                  <input 
                    type="email" 
                    placeholder="tucorreo@ejemplo.com" 
                    className={inputStyles.base}
                  />
                </div>
                
                <div>
                  <label className={inputStyles.label}>Contraseña</label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className={inputStyles.base}
                  />
                </div>
                
                <div>
                  <label className={inputStyles.label}>Área de texto</label>
                  <textarea 
                    rows={4} 
                    placeholder="Escribe tu mensaje aquí..." 
                    className={inputStyles.textarea}
                  ></textarea>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-medium text-gray-900 mb-4">Clases de ejemplo:</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Campo de texto estándar:</p>
                    <code className="text-xs font-mono bg-white p-2 rounded-lg block overflow-x-auto">
                      {`<input 
  type="text" 
  className="${inputStyles.base}"
  placeholder="Escribe aquí..."
/>`}
                    </code>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Área de texto:</p>
                    <code className="text-xs font-mono bg-white p-2 rounded-lg block overflow-x-auto">
                      {`<textarea 
  rows={4}
  className="${inputStyles.textarea}" 
  placeholder="Escribe tu mensaje aquí..."
></textarea>`}
                    </code>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Con etiqueta y mensaje de error:</p>
                    <code className="text-xs font-mono bg-white p-2 rounded-lg block overflow-x-auto">
                      {`<div>
  <label className="${inputStyles.label}">Correo electrónico</label>
  <input 
    type="email" 
    className="${inputStyles.base} border-red-300 focus:ring-red-500"
    placeholder="tucorreo@ejemplo.com"
  />
  <p className="${inputStyles.error}">Por favor ingresa un correo válido</p>
</div>`}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Estados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Normal</label>
                <input 
                  type="text" 
                  placeholder="Escribe aquí..." 
                  className={inputStyles.base}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Enfoque</label>
                <input 
                  type="text" 
                  value="Texto de ejemplo"
                  className={`${inputStyles.base} ring-2 ring-brand-500 ring-offset-2`}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Deshabilitado</label>
                <input 
                  type="text" 
                  disabled 
                  placeholder="Campo deshabilitado" 
                  className="w-full px-6 py-4 rounded-full border border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Error</label>
                <input 
                  type="text" 
                  value="Texto incorrecto"
                  className="w-full px-6 py-4 rounded-full border-2 border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-700"
                />
                <p className="mt-1 text-sm text-red-600">Este campo es requerido</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
