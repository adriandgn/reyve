# Checklist de Reestructuración de Proyecto

1. Preparación
[x] Crear una nueva rama: refactor/estructura-proyecto
[x] Hacer backup del proyecto actual
[x] Documentar la estructura y problemas actuales

2. Estructura de Carpetas
[x] /pages existe y contiene las páginas principales.
[x] /components/ui existe y contiene componentes visuales.
[x] /components/layout existe como carpeta separada (Navbar/Footer migrados y referenciados correctamente).
[x] /components/shared existe como carpeta separada (Migración de componentes compartidos finalizada: código fuente movido a shared, wrappers eliminados. Nota: Agrupación y documentación actualizada).
[x] /features existe (pendiente migrar lógica por dominio).
[x] /lib existe.
[x] /store existe (pendiente migrar slices/estado).
[x] /types existe.
[x] /styles existe.
[x] /design-system existe y contiene el playbook migrado.

3. Migración de Páginas y Componentes
[x] Las páginas están en /pages.
[x] Navbar/Footer migrados a /components/layout y todos los imports actualizados.
[x] Eliminar código obsoleto de /components/ui tras migración a shared (archivos eliminados: CTA.tsx, DetailsSection.tsx, Features.tsx, Hero.tsx, Newsletter.tsx, RegenerateBanner.tsx, SpecsSection.tsx, Testimonials.tsx, ImageShowcaseSection.tsx).
[x] /components/shared existe (migración de componentes compartidos finalizada).
[x] Todos los componentes reutilizables están agrupados por tipo.

4. Arquitectura por Features/Dominios
[~] No hay carpetas /features/[dominio] (carpeta base creada, migración por dominio desestimada por ahora).
[ ] No se observa separación de lógica/hook por dominio.

5. Centralización de Utilidades, Tipos y Estado
[x] /lib y /types existen y contienen utilidades y tipos.
[~] No hay slices agrupados en /store (carpeta base creada, migración de slices desestimada por ahora).

6. Estilos y Sistema de Diseño
[x] Estilos globales en /styles.
[~] No se observa uso de CSS Modules o Styled Components (No aplica: predomina Tailwind por decisión de equipo).
[x] /design-system existe y contiene el playbook migrado.

7. Pruebas
[ ] No hay estructura de tests ni archivos .test.ts(x) detectados.
[~] Mejoras de performance desestimadas por ahora.

8. Actualización de Imports y Refactor
[x] Todos los imports de Navbar/Footer han sido actualizados tras la migración.
[x] Validar visual y funcionalmente la app tras la migración (aprobado: validación manual realizada).
[x] tsconfig.json existe y permite paths absolutos.

9. Documentación
[ ] No hay README.md en la raíz ni en carpetas principales con convenciones/propósito.
[ ] No se documentó la nueva estructura.

10. Validación y Merge
[ ] No puedo verificar pruebas manuales ni tests automáticos tras cambios.
[ ] No se observa evidencia de commits pequeños y atómicos ni de merge a main tras validación.
