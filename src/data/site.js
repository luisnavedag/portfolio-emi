/**
 * Todo el contenido editable del sitio vive en este archivo.
 * Cambiá acá los datos y no hace falta tocar los componentes.
 *
 * Videos: poné los archivos en /public/videos y referenciá con
 * `/videos/nombre.mp4`. El fotograma que se ve antes de reproducir sale de
 * /public/posters con el mismo nombre (`nombre.jpg`).
 */

export const persona = {
  name: 'Emiberth García',
  shortName: 'Emi García',
  roles: ['Social Media Manager', 'Brand Content Manager', 'Community Manager', 'Video Editor'],
}

/** Links de la barra superior, en orden. */
export const sections = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'trabajos', label: 'Trabajos' },
  { id: 'proceso', label: 'Proceso' },
  { id: 'marcas', label: 'Marcas' },
  { id: 'contacto', label: 'Contacto' },
]

/**
 * Cada viñeta es una lista de tramos: `b: true` los pone en negrita.
 */
export const about = {
  greeting: '¡Hola!',
  name: 'Soy Emi García',
  bullets: [
    [
      { t: 'Estudiante de marketing y comercio electrónico en ' },
      { t: 'Centro e-learning UTN BA.', b: true },
    ],
    [
      { t: '1 año de experiencia', b: true },
      {
        t: ' trabajando en Agencia de marketing y freelance con marcas personales y comerciales de distintos rubros.',
      },
    ],
    [
      { t: 'Disfruto pensar ideas, transformar conceptos en contenido y ' },
      { t: 'construir una comunicación con personalidad propia.', b: true },
    ],
  ],
}

export const services = [
  'Estrategia de contenido',
  'Concepto creativo para marcas',
  'Creación de piezas visuales',
  'Análisis y mejora de resultados',
  'Gestión de redes sociales',
  'Planificación de contenido',
  'Edición de videos',
]

export const tools = [
  { group: 'Edición y diseño', items: ['CapCut', 'Canva'] },
  { group: 'Organización y planificación', items: ['Notion', 'Google Drive', 'Google Sheets'] },
  { group: 'Análisis y programación de contenido', items: ['Metricool'] },
  { group: 'Inteligencia artificial', items: ['ChatGPT', 'Claude', 'Gemini'] },
]

/**
 * Casos de estudio, en el orden del portfolio.
 *
 * - `details`: el panel grande (Meta / Estrategia / Resultado). El rótulo puede
 *   cambiar de un caso a otro (Prensaconeli usa "Enfoque").
 * - `feed` y `stories`: capturas de Instagram. Si no hay, la fila no se muestra.
 * - `ratio`: sólo si el video es horizontal ('16:9'); por defecto va en teléfono.
 * - `videos`: los reels dentro de los teléfonos. Si no hay, los teléfonos no se
 *   muestran. Para sumarlos, subí el mp4 a /public/videos y su fotograma a
 *   /public/posters, y agregá la ruta acá.
 */
export const cases = [
  {
    id: 'flowen',
    name: 'Flowen',
    sector: 'Moda / indumentaria personalizada.',
    role: 'Social media manager',
    details: [
      { label: 'Meta', text: 'posicionar a Flowen como una marca de personalización creativa.' },
      {
        label: 'Estrategia',
        text: 'creé contenido en reels y carruseles mostrando procesos, antes y después, uso real de las prendas, texturas y testimonios de clientes.',
      },
      {
        label: 'Resultado',
        text: 'aumentaron los pedidos de remeras personalizadas de mascotas, tote bags y prendas para empresas, además de generar alianzas con pet shops.',
      },
    ],
    feed: '/img/flowen-feed.webp',
    stories: [
      '/img/flowen-story-1.webp',
      '/img/flowen-story-2.webp',
      '/img/flowen-story-3.webp',
      '/img/flowen-story-4.webp',
    ],
    // Falta el reel "Sobre" que aparece en el PDF: no está como mp4 en el proyecto.
    videos: ['/videos/flowen-1.mp4', '/videos/flowen-2.mp4', '/videos/flowen-3.mp4'],
  },
  {
    id: 'qi',
    name: 'Qi',
    sector: 'Salud & Bienestar',
    role: 'Community Manager & Content Creator',
    details: [
      {
        label: 'Meta',
        text: 'Dar a conocer la oxigenación hiperbárica, aumentar las consultas y lograr una mayor ocupación de agenda en una de las sedes.',
      },
      {
        label: 'Estrategia',
        text: 'Creé principalmente reels educativos para explicar sus beneficios, usos complementarios y responder dudas recurrentes de forma clara, cercana y fácil de entender.',
      },
      {
        label: 'Resultado',
        text: 'la cuenta creció con éxito de 4K a 7K seguidores, aumentaron las consultas para reserva por WhatsApp y se llenó la agenda de sesiones en ambas sedes.',
      },
    ],
    videos: ['/videos/qi-1.mp4', '/videos/qi-2.mp4', '/videos/qi-3.mp4', '/videos/qi-4.mp4'],
  },
  {
    id: 'prensaconeli',
    name: 'Prensaconeli',
    sector: 'Comunicación, prensa y relaciones públicas.',
    role: 'Content Creator & Video Editor',
    details: [
      {
        label: 'Meta',
        text: 'Reactivar sus redes sociales y volver a mostrar de forma constante su trabajo y experiencia en prensa.',
      },
      {
        label: 'Enfoque',
        text: 'Desarrollé la parte creativa del contenido: ideas, grabación, edición de videos y creación de copys.',
      },
      {
        label: 'Resultado',
        text: 'Se reactivó la comunidad, aumentaron las consultas y las ventas, y el contenido comenzó a generar interés incluso por quién estaba detrás de la creación de sus redes.',
      },
    ],
    videos: [
      '/videos/prensaconeli-afw.mp4',
      '/videos/prensaconeli-eliana-ramirez.mp4',
      '/videos/prensaconeli-mx.mp4',
      '/videos/prensaconeli-mx-con-eliana.mp4',
    ],
  },
  {
    id: 'holistic-marketing',
    name: 'Holisstic marketing',
    sector: 'Marketing integral para marcas',
    role: 'Social Media Manager',
    details: [
      {
        label: 'Meta',
        text: 'Transmitir con claridad el mensaje de la marca y atraer nuevos clientes.',
      },
      {
        label: 'Estrategia',
        text: 'Realicé análisis de marca, definición de pilares y planificación de contenido para ordenar la comunicación y facilitar la creación constante de piezas alineadas a sus objetivos.',
      },
      {
        label: 'Resultado',
        text: 'El contenido empezó a atraer personas con las problemáticas que la marca buscaba abordar y ayudó a cerrar nuevos clientes.',
      },
    ],
    videos: [
      '/videos/holisstic-1.mp4',
      '/videos/holisstic-2.mp4',
      '/videos/holisstic-3.mp4',
    ],
  },
  // Estos tres no estaban en el PDF. Los textos salen de las descripciones que ya
  // tenían: faltan Meta y Resultado (sumalos a `details` cuando tengas los datos).
  {
    id: 'victoria-cipolla',
    name: 'Victoria Cipolla',
    sector: 'Marca personal',
    role: 'Video Editor · Edición, color y sonido',
    details: [
      {
        label: 'Enfoque',
        text: 'Serie de reels con ritmo rápido y subtítulos quemados. Cuatro piezas con el mismo look pero distinto hook.',
      },
    ],
    videos: [
      '/videos/victoria-cipolla-1.mp4',
      '/videos/victoria-cipolla-2.mp4',
      '/videos/victoria-cipolla-3.mp4',
      '/videos/victoria-cipolla-4.mp4',
    ],
  },
  {
    id: 'astropay-valeria',
    name: 'AstroPay',
    sector: 'Fintech / medios de pago',
    role: 'Video Editor · Edición y subtítulos',
    details: [
      {
        label: 'Enfoque',
        text: 'Reel de marca con foco en retención en los primeros tres segundos.',
      },
    ],
    videos: ['/videos/astropay-valeria.mp4'],
  },
  {
    id: 'la-rural',
    name: 'La Rural',
    sector: 'Eventos y expos',
    role: 'Video Editor · Edición, sonido y color',
    // '16:9' muestra el video en una pantalla horizontal en vez de un teléfono.
    ratio: '16:9',
    details: [
      {
        label: 'Enfoque',
        text: 'Aftermovie de la expo. Material de un día entero condensado en una pieza horizontal para web y presentaciones.',
      },
    ],
    videos: ['/videos/la-rural-expo-construccion.mp4'],
  },
]

/** Es una secuencia real de trabajo, por eso va numerado. */
export const process = [
  {
    n: '01',
    title: 'Conozco tu marca',
    body: 'Conversamos sobre tus objetivos, el público al que querés llegar, el estilo visual y el mensaje que querés comunicar.',
  },
  {
    n: '02',
    title: 'Recibo y organizo el material',
    body: 'Reviso los videos, referencias e indicaciones enviadas. Organizo el contenido y defino el enfoque de cada pieza.',
  },
  {
    n: '03',
    title: 'Creo y edito',
    body: 'Trabajo los cortes, el ritmo, los subtítulos, la música, los efectos, los recursos visuales y la portada, respetando la identidad de la marca.',
  },
  {
    n: '04',
    title: 'Envío para revisión',
    body: 'Comparto la primera versión mediante Google Drive para que puedas revisarla y enviar tu feedback. Cada video incluye hasta dos rondas de correcciones.',
  },
  {
    n: '05',
    title: 'Ajusto y entrego',
    body: 'Realizo los cambios acordados y entrego el video final en formato vertical y alta calidad, listo para publicar.',
  },
]

/** Cierra la sección de proceso. */
export const processClosing =
  'Un proceso claro, organizado y colaborativo para convertir tu material en contenido que represente a tu marca.'

/**
 * Marcas. Los logos son PNG de un solo color (el crema `bone`) con fondo
 * transparente, para que todos se lean igual sobre el fondo oscuro.
 * Para agregar una: dejá el original en /media-originals/marcas, generá la
 * versión monocroma en /public/logos y sumala acá.
 * Sin `logo` se muestra el nombre en texto.
 */
export const clients = [
  { name: 'Victoria Cipolla', logo: '/logos/victoria-cipolla.png' },
  { name: 'Qi', logo: '/logos/qi.png' },
  { name: 'Flowen', logo: '/logos/flowen.png' },
  { name: 'AstroPay', logo: '/logos/astropay.png' },
  { name: 'MX+', logo: '/logos/mx-mas.png' },
  { name: 'Construcciones Livianas', logo: '/logos/construcciones-livianas.png' },
  { name: 'Referentes con Impacto', logo: '/logos/referentes-con-impacto.png' },
  { name: 'Holisstic Marketing', logo: '/logos/holistic-marketing.png' },
]

export const contact = {
  email: 'emiberthgarcia@gmail.com',
  whatsapp: '+54 11 3795 3417',
  whatsappUrl: 'https://wa.me/5491137953417',
  tagline: 'Convirtamos tus ideas en contenido que conecte y genere resultados.',
}

/**
 * Cada video tiene su fotograma en /public/posters con el mismo nombre.
 * Se usan como poster para no bajar video hasta que alguien lo reproduce.
 */
export function posterFor(src) {
  if (!src) return undefined
  return src.replace('/videos/', '/posters/').replace(/\.mp4$/, '.jpg')
}
