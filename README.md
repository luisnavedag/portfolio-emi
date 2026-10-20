# Portafolio — Emiberth García

React 19 + Vite + Tailwind CSS 4. Sin dependencias de UI: todo el diseño es propio.
El diseño sale del PDF "Portfolio Emiberth Garcia": negro cálido, vino, crema y
una serif gorda estilo Cooper para los títulos.

## Arrancar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera /dist
npm run preview  # sirve el build
```

## Dónde cambiar el contenido

Todo vive en **`src/data/site.js`**. No hace falta tocar ningún componente.

- `persona.roles`: la franja de arriba y la de abajo.
- `about`: las tres viñetas de "¡Hola!". Los tramos con `b: true` van en negrita.
- `services`: las pastillas de "¿Cómo puedo ayudarte?". Son siete: las posiciones
  están fijadas en `src/components/Services.jsx` (`PILL_POSITIONS`).
- `cases`: los casos de estudio, en orden (Flowen, Qi, Prensaconeli, Holisstic, Victoria Cipolla, AstroPay, La Rural). Un video horizontal lleva `ratio: '16:9'`.
- `process`, `clients`, `contact`.

### Sumar reels a un caso

Los teléfonos de cada caso salen de `videos`. Si queda vacío, la fila no se muestra.

1. Comprimí el mp4 a 720×1280 y ~1,6 Mbps: un 1080p pesa unos 30 MB y no se justifica en
   un teléfono de 300 px. Subilo a `public/videos/` y su fotograma a `public/posters/`,
   con el mismo nombre (`nombre.jpg`). El fotograma se usa de poster para no bajar el
   video hasta reproducir.
2. Agregá la ruta a `videos`: `'/videos/nombre.mp4'`.

Lo mismo con `feed` y `stories`: capturas de Instagram en `public/img/`.

## Estructura

```
src/
  data/site.js              todo el contenido
  components/
    Nav.jsx                 barra fija superior
    Hero.jsx                "Creative Portfolio": título, foto, título en contorno
    About.jsx               ¡Hola! + viñetas
    Services.jsx            ¿Cómo puedo ayudarte? + herramientas
    Work.jsx                lista de casos; guarda el reel activo
    CaseStudy.jsx           un caso: título, panel, capturas y teléfonos
    PhoneReel.jsx           un reel en un teléfono (o pantalla 16:9)
    VideoClip.jsx           <video> que no descarga hasta reproducir
    Process.jsx  Clients.jsx  Contact.jsx  WhatsAppFab.jsx
    RoleBand.jsx  Icons.jsx  Reveal.jsx  SectionHeader.jsx
public/img/                 fotos recortadas de Emi y capturas de Flowen
```

## Decisiones de diseño

**Escenas en `cqw`.** El hero, "Cómo puedo ayudarte" y el cierre son composiciones
con capas (texto detrás de la foto, contorno por delante). Se miden en unidades de
contenedor (`cqw`) dentro de `src/index.css`, así la escena escala entera y las
capas no se desalinean. Debajo de 640 / 900 / 720 px pasan a una sola columna.

**Paleta** (`@theme` en `src/index.css`), medida sobre el PDF: `ink #0b0907`,
`wine #480f1c`, `claret #7b1d33`, `bone #f9edd1`, `sand #d3c7b0`.

**Tipografía.** Montserrat para texto. El PDF usa *TAN Tangkiwood* en los títulos,
que es de pago; se reemplaza por **Caprasimo** (Google Fonts), la libre más cercana.
Si tenés la licencia web, cargala en `index.html` y cambiá `--font-display`.

**Reels.** Suena uno solo a la vez. Con el cursor encima y nada activo, se
previsualiza sin sonido. Se frena solo si el reel sale de pantalla.

## Accesibilidad y performance

- Foco visible en todos los elementos interactivos.
- `prefers-reduced-motion` desactiva las transiciones y detiene la marquesina y los íconos flotantes.
- Los videos no se descargan hasta que alguien los reproduce.
- Sin librerías de animación: solo CSS e IntersectionObserver.

## Deploy

Sitio estático. En Vercel o Netlify, build `npm run build`, carpeta `dist`.
Antes de publicar, agregá los tags Open Graph en `index.html` y una imagen
`og:image` de 1200×630.
