/**
 * Todo el contenido editable del sitio vive en este archivo.
 * Cambiá acá los datos y no hace falta tocar los componentes.
 *
 * Videos: poné los archivos en /public/videos y referenciá con
 * `/videos/nombre.mp4`. Cada trabajo puede tener uno o varios clips.
 */

export const persona = {
  name: 'Emiberth Garcia',
  initials: 'EG',
  roles: ['Editora de video', 'Community manager', 'Creación de contenido'],
  location: 'Buenos Aires, AR',
  headline: ['Videos que se ven', 'hasta el final.'],
  intro:
    'Trabajo con marcas que necesitan publicar seguido y sin bajar la calidad. Guion, edición, publicación y los números de la semana siguiente.',
}

/**
 * Secciones del sitio. El timecode no es decoración: el portafolio se
 * recorre como un reel y el rail de la izquierda marca dónde estás.
 */
export const sections = [
  { id: 'inicio', tc: '00:00', label: 'Inicio' },
  { id: 'trabajos', tc: '00:22', label: 'Trabajos' },
  { id: 'sobre-mi', tc: '01:26', label: 'Sobre mí' },
  { id: 'skills', tc: '01:52', label: 'Skills' },
  { id: 'proceso', tc: '02:14', label: 'Proceso' },
  { id: 'marcas', tc: '02:44', label: 'Marcas' },
  { id: 'contacto', tc: '03:02', label: 'Contacto' },
]

/** Los componentes toman su timecode de acá para que no se desincronice del rail. */
export function tcOf(id) {
  return sections.find((section) => section.id === id)?.tc ?? '00:00'
}

/** ratio: '9:16' | '4:5' | '16:9' — se usa para filtrar y para el alto real de la card. */
export const works = [
  {
    id: 'victoria-cipolla',
    title: 'Contenido personal',
    client: 'Victoria Cipolla',
    ratio: '9:16',
    year: '2025',
    role: 'Edición · Color · Sonido',
    runtime: 'Reels',
    metric: '4 piezas',
    note: 'Serie de reels con ritmo rápido y subtítulos quemados. Cuatro piezas con el mismo look pero distinto hook.',
    hue: 298,
    videos: [
      '/videos/victoria-cipolla-1.mp4',
      '/videos/victoria-cipolla-2.mp4',
      '/videos/victoria-cipolla-3.mp4',
      '/videos/victoria-cipolla-4.mp4',
    ],
  },
  {
    id: 'qi',
    title: 'Campaña de marca',
    client: 'Qi',
    ratio: '9:16',
    year: '2025',
    role: 'Edición · Motion · Subtítulos',
    runtime: 'Reels',
    metric: '4 piezas',
    note: 'Cuatro piezas verticales para feed y stories. Mismo universo visual, distintos remates para testear retención.',
    hue: 264,
    videos: [
      '/videos/qi-1.mp4',
      '/videos/qi-2.mp4',
      '/videos/qi-3.mp4',
      '/videos/qi-4.mp4',
    ],
  },
  {
    id: 'flowen',
    title: 'Contenido orgánico',
    client: 'Flowen',
    ratio: '9:16',
    year: '2025',
    role: 'Edición · Community',
    runtime: 'Reels',
    metric: '3 piezas',
    note: 'Tres reels con grabación en celular. El corte sigue el audio, no al revés.',
    hue: 42,
    videos: [
      '/videos/flowen-1.mp4',
      '/videos/flowen-2.mp4',
      '/videos/flowen-3.mp4',
    ],
  },
  {
    id: 'la-rural',
    title: 'Expo Construcción',
    client: 'La Rural',
    ratio: '16:9',
    year: '2024',
    role: 'Edición · Sonido · Color',
    runtime: 'Aftermovie',
    metric: 'Pieza institucional',
    note: 'Aftermovie de la expo. Material de un día entero condensado en una pieza horizontal para web y presentaciones.',
    hue: 22,
    videos: ['/videos/la-rural-expo-construccion.mp4'],
  },
  {
    id: 'astropay-valeria',
    title: 'Campaña de marca',
    client: 'AstroPay',
    ratio: '9:16',
    year: '2025',
    role: 'Edición · Subtítulos',
    runtime: 'Reel',
    metric: '1 pieza',
    note: 'Reel de marca con foco en retención en los primeros tres segundos.',
    hue: 30,
    videos: ['/videos/astropay-valeria.mp4'],
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

export const about = {
  photo: '/emi.jpeg',
  title: 'Hola, soy Emi.',
  lead: 'Community Manager y editora de video, con una mirada creativa, estratégica y analítica.',
  paragraphs: [
    'Me especializo en transformar ideas en contenido claro, dinámico y alineado con la identidad de cada marca. Disfruto especialmente la edición de Reels, el storytelling, la planificación de contenido y el análisis de lo que puede funcionar mejor en redes.',
    'Mi forma de trabajar combina creatividad, organización y cercanía, para que cada proyecto no solo se vea bien, sino que también comunique con intención.',
  ],
}

export const skills = [
  'Edición de videos para Reels, TikTok y YouTube Shorts.',
  'Storytelling aplicado a contenido.',
  'Creación y búsqueda de ideas.',
  'Planificación de contenido.',
  'Community Management.',
  'Análisis de Reels y perfiles.',
  'Adaptación de contenido a distintas marcas.',
  'Creación de carruseles e historias.',
  'Organización de calendarios y entregas.',
  'Interpretación básica de métricas.',
  'Comunicación con clientes.',
  'Uso de inteligencia artificial para agilizar procesos creativos.',
]

export const tools = [
  { group: 'Edición y diseño', items: ['CapCut', 'Canva'] },
  { group: 'Organización y planificación', items: ['Notion', 'Google Drive', 'Google Sheets'] },
  { group: 'Análisis y programación de contenido', items: ['Metricool'] },
  { group: 'Inteligencia artificial', items: ['ChatGPT', 'Claude', 'Gemini'] },
]

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
  { name: 'Holis8tic Marketing', logo: '/logos/holistic-marketing.png' },
]

export const contact = {
  email: 'emiberthgarcia@gmail.com',
  whatsapp: '+54 11 3795 3417',
  whatsappUrl: 'https://wa.me/5491137953417',
  closing: 'Contame qué querés publicar y te digo cómo lo haría.',
}

/**
 * Cada video tiene su fotograma en /public/posters con el mismo nombre.
 * Se usan como poster para no bajar video hasta que alguien lo reproduce.
 */
export function posterFor(src) {
  if (!src) return undefined
  return src.replace('/videos/', '/posters/').replace(/\.mp4$/, '.jpg')
}

/**
 * Clips para el reel del hero, en orden.
 * El monitor del hero es vertical: un 16:9 ahí queda tan chico que no se ve nada,
 * así que los horizontales sólo viven en la sección de trabajos.
 */
export function getReelItems(worksList = works) {
  return worksList.filter((work) => work.ratio !== '16:9').flatMap((work) => {
    const clips = work.videos?.length ? work.videos : work.video ? [work.video] : []
    if (clips.length === 0) {
      return [{ work, src: null, clipIndex: 0 }]
    }
    return clips.map((src, clipIndex) => ({ work, src, clipIndex }))
  })
}
