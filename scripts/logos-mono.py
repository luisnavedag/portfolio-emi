"""Convierte cada logo en una silueta transparente de un solo color.

El fondo de cada archivo (blanco, rojo o transparente) se detecta solo y se
vuelve transparente; todo lo que sea logo se pinta en el crema del sitio.

Uso: dejá el logo original en /media-originals/marcas, agregalo a MAPPING y corré
    python3 scripts/logos-mono.py
Los PNG salen en /public/logos con el nombre que pongas en MAPPING.
Requiere Pillow: pip3 install Pillow
"""
from PIL import Image, ImageChops, ImageDraw
from collections import Counter
import os

SRC = "/Users/luisnaveda/Developer/portfolio-emi/media-originals/marcas"
DST = "/Users/luisnaveda/Developer/portfolio-emi/public/logos"
os.makedirs(DST, exist_ok=True)

TINT = (237, 231, 225)   # --color-bone
TARGET_H = 200           # se muestra a ~50px: cubre retina
MAX_W = 700
LO, HI = 14, 60          # rampa de opacidad sobre la distancia al fondo

# 'holes': el logo es un banner con el texto calado en blanco, así que la
# silueta que queremos es el hueco, no la placa.
MAPPING = [
    ("5.png", "victoria-cipolla", "auto"),
    ("3.png", "qi", "auto"),
    ("1.png", "flowen", "auto"),
    ("7.png", "astropay", "auto"),
    ("2.png", "mx-mas", "auto"),
    ("6.png", "construcciones-livianas", "auto"),
    ("4.png", "referentes-con-impacto", "holes"),
    ("width_1150.png", "holistic-marketing", "auto"),
]


def ramp(v):
    if v <= LO:
        return 0
    if v >= HI:
        return 255
    return int((v - LO) / (HI - LO) * 255)


RAMP = [ramp(v) for v in range(256)]

for src_name, slug, mode in MAPPING:
    im = Image.open(os.path.join(SRC, src_name)).convert("RGBA")
    existing_alpha = im.getchannel("A")
    rgb = im.convert("RGB")

    if existing_alpha.getextrema()[0] < 250:
        # Ya viene con transparencia: ese es el recorte.
        alpha = existing_alpha.point(RAMP)
    else:
        # Fondo = color de la esquina. Opacidad = cuánto se aleja cada pixel de él.
        bg = rgb.getpixel((0, 0))
        flat = Image.new("RGB", im.size, bg)
        diff = ImageChops.difference(rgb, flat)
        r, g, b = diff.split()
        alpha = ImageChops.lighter(ImageChops.lighter(r, g), b).point(RAMP)

    if mode == "holes":
        # Sólo el color dominante cuenta como banner: así los elementos sueltos
        # (una franja gris al costado) no dejan restos al calar el texto.
        small = rgb.resize((rgb.width // 4, rgb.height // 4))
        counts = Counter(small.getdata())
        bg_color = rgb.getpixel((0, 0))
        dominant = next(
            c for c, _ in counts.most_common()
            if sum(abs(a - b) for a, b in zip(c, bg_color)) > 60
        )
        flat = Image.new("RGB", im.size, dominant)
        d = ImageChops.difference(rgb, flat).split()
        near = ImageChops.lighter(ImageChops.lighter(d[0], d[1]), d[2])
        alpha = near.point(lambda v: 255 if v < 70 else 0)

        # El fondo exterior se inunda desde las cuatro esquinas (el banner cruza
        # la imagen, así que arriba y abajo no están conectados); lo que queda
        # son los huecos interiores, o sea el texto calado.
        inverse = alpha.point(lambda v: 0 if v > 128 else 255)
        w, h = inverse.size
        for corner in ((0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)):
            if inverse.getpixel(corner) == 255:
                ImageDraw.floodfill(inverse, corner, 0)
        alpha = inverse

    mono = Image.new("RGBA", im.size, TINT + (0,))
    mono.putalpha(alpha)

    box = alpha.getbbox()
    if box is None:
        print("sin contenido:", src_name)
        continue
    pad_x = int((box[2] - box[0]) * 0.04)
    pad_y = int((box[3] - box[1]) * 0.04)
    box = (
        max(0, box[0] - pad_x),
        max(0, box[1] - pad_y),
        min(im.width, box[2] + pad_x),
        min(im.height, box[3] + pad_y),
    )
    cropped = mono.crop(box)

    scale = TARGET_H / cropped.height
    if cropped.width * scale > MAX_W:
        scale = MAX_W / cropped.width
    out = cropped.resize(
        (max(1, round(cropped.width * scale)), max(1, round(cropped.height * scale))),
        Image.LANCZOS,
    )

    path = os.path.join(DST, f"{slug}.png")
    out.save(path, optimize=True)
    print(f"{out.size[0]:3}x{out.size[1]:<3}  {os.path.getsize(path)/1000:6.1f}KB  {slug}.png")
