# Portafolio — edición de video / community management

React 19 + Vite 8 + Tailwind CSS 4. Sin dependencias de UI: todo el diseño es propio.

## Arrancar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera /dist
npm run preview  # sirve el build
```

## Qué cambiar primero

Todo el contenido vive en **`src/data/site.js`**. Nombre, roles, titular, piezas,
proceso, marcas, testimonio y contacto. No hace falta tocar ningún componente
para poner los datos reales.

Los timecodes de `sections` son los que muestra el rail izquierdo. Si agregás o
quitás secciones, actualizá también ese array y el `<SectionHeader tc="..." />`
de la sección correspondiente.

## Poner las piezas reales

Cada trabajo tiene un campo `frames`, vacío por defecto. Mientras esté vacío, la
card dibuja fotogramas generados por código (para poder probar el scrubbing sin
material). Cuando tengas las imágenes:

1. Guardá 6 capturas por pieza en `public/frames/`.
2. Cargalas en orden:

```js
{
  id: 'vero-otono',
  frames: [
    '/frames/vero-01.jpg',
    '/frames/vero-02.jpg',
    // ...hasta 6
  ],
}
```

El hero usa los tres primeros frames de cada pieza. Recomendado: JPG o WebP a
1080px de ancho, comprimido.

Para embeber video real, reemplazá `<Frame />` dentro de `WorkCard` por un
`<video muted loop playsInline preload="metadata">`. Conviene mantener el poster
como imagen para que la grilla no pese.

## Estructura

```
src/
  data/site.js              todo el contenido
  hooks/
    useScrollProgress.js    progreso de lectura + sección activa
    usePrefersReducedMotion.js
  components/
    Rail.jsx                playhead lateral (desktop) y barra inferior (mobile)
    Nav.jsx
    Hero.jsx                monitor + scrubber arrastrable
    Work.jsx                grilla filtrable por formato, scrub al hover
    Process.jsx
    Clients.jsx
    Contact.jsx
    Frame.jsx               fotograma real o generado
    Reveal.jsx              aparición al hacer scroll
    SectionHeader.jsx
```

## Decisiones de diseño

**Paleta** (`src/index.css`, bloque `@theme`). Base berenjena `#14101B` en vez de
negro neutro, y dos acentos complementarios: `#F2A73B` cálido y `#C9A2FF` frío.
Es la lógica del color grading aplicada a la interfaz. Cambiando esas variables
cambia todo el sitio, incluidos los fotogramas generados.

**Tipografía.** Bricolage Grotesque para display, Manrope para texto, DM Mono
para timecodes y datos. Se cargan desde Google Fonts en `index.html`.

**El timecode no es decoración.** El portafolio se recorre como un reel: el rail
izquierdo marca las secciones en su posición real de scroll y la cabeza de
reproducción sigue tu lectura.

**Filtro por formato en vez de por categoría.** 9:16, 4:5 y 16:9 son la decisión
real de cada pieza, y hacen que la grilla tenga alturas distintas sin trucos.

## Accesibilidad y performance

- El scrubber del hero es un `role="slider"` operable con flechas.
- `prefers-reduced-motion` desactiva la autoreproducción y las transiciones.
- Foco visible en todos los elementos interactivos.
- Sin librerías de animación: solo CSS e IntersectionObserver.

## Deploy

Sitio estático. En Vercel o Netlify, build `npm run build`, carpeta `dist`.
Antes de publicar, cambiá el `<title>`, la meta description y los tags Open
Graph en `index.html`, y agregá una imagen `og:image` de 1200×630.
