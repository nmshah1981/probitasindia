#!/usr/bin/env python3
"""
Create a light (inverted) version of the Probitas logo for use on dark backgrounds.

Source: probitas-logo-original.png (dark mark on white background)
Output: probitas-logo-light.png (light mark on transparent background)

This is used on the hero (dark overlay) so the logo mark stays visible,
while the normal (dark) logo is used on the sticky header (light background).
"""
from PIL import Image
import os

SRC = "/home/z/my-project/public/images/probitas-logo-original.png"
DST = "/home/z/my-project/public/images/probitas-logo-light.png"

# Open the original (dark on white)
img = Image.open(SRC).convert("RGBA")
w, h = img.size
print(f"[info] logo size: {w}x{h}")

pixels = img.load()

# Strategy: invert dark pixels to light, make white background transparent.
# The logo mark is dark (RGB ~ dark), background is near-white.
# We want: dark mark -> light (bone/white) mark, white bg -> transparent.

WHITE_THRESHOLD = 220  # near-white -> transparent
DARK_THRESHOLD = 180   # darker than this -> part of the logo mark

# Target light color: warm bone white (matches the site's --bone token)
# oklch(0.985 0.004 75) ≈ RGB (250, 247, 240)
LIGHT_R, LIGHT_G, LIGHT_B = 250, 247, 240

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        whiteness = min(r, g, b)
        darkness = 255 - max(r, g, b)

        if whiteness >= WHITE_THRESHOLD:
            # Background -> transparent
            pixels[x, y] = (r, g, b, 0)
        elif darkness >= (255 - DARK_THRESHOLD):
            # Part of the logo mark — make it light, with full opacity
            # Blend toward the light bone color based on how dark the original was
            t = darkness / 255  # 0 = light, 1 = fully dark
            # Use t to set the light color intensity
            new_r = int(LIGHT_R * (0.4 + 0.6 * (1 - t)) + 255 * 0 * t)
            new_g = int(LIGHT_G * (0.4 + 0.6 * (1 - t)) + 255 * 0 * t)
            new_b = int(LIGHT_B * (0.4 + 0.6 * (1 - t)) + 255 * 0 * t)
            # Actually simpler: just use the bone color, full opacity
            pixels[x, y] = (LIGHT_R, LIGHT_G, LIGHT_B, 255)
        else:
            # Anti-aliasing edge — partial transparency, tinted light
            # Compute alpha based on how non-white it is
            alpha = int(255 * (1 - whiteness / 255))
            # Tint toward light
            pixels[x, y] = (LIGHT_R, LIGHT_G, LIGHT_B, alpha)

img.save(DST, "PNG")
print(f"[ok] saved light logo to {DST}")

# Verify
verify = Image.open(DST)
print(f"[verify] mode: {verify.mode}, size: {verify.size}")
