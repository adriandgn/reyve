# Componentes Compartidos (`shared`)

Esta carpeta contiene **wrappers temporales** y componentes reutilizables que pueden ser usados en distintas páginas o secciones del proyecto.

## Convenciones
- **Wrappers:** Si el archivo exporta simplemente un componente desde `ui`, indica que está en proceso de migración. Cuando todos los imports apunten aquí, el componente puede moverse completamente a `shared` y eliminar el wrapper.
- **Nuevos componentes:** Los componentes que sean creados para ser reutilizables deben agregarse directamente aquí o en una subcarpeta temática (por ejemplo, `shared/forms`, `shared/cards`, etc.).
- **Nomenclatura:** Usa PascalCase para los nombres de archivo y componente.

## Subcarpetas sugeridas
- `forms/` para formularios reutilizables
- `cards/` para tarjetas o bloques informativos
- `banners/` para banners o alertas

## Lista de componentes actuales

- CTA
- DetailsSection
- Features
- Hero
- HowItWorks
- ImageShowcaseSection
- Newsletter
- RegenerateBanner
- SpecsSection
- TeamSection
- Testimonials

## Proceso de migración
1. Crea un wrapper en `shared` que reexporte el componente de `ui`.
2. Actualiza todos los imports en el proyecto para que apunten a `shared`.
3. Cuando no haya referencias a `ui`, mueve el código fuente a `shared` y elimina el wrapper.

---

**Nota:** Si identificas varios componentes de un mismo tipo, crea una subcarpeta y agrúpalos para mayor claridad y escalabilidad.
