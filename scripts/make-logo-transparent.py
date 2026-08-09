#!/usr/bin/env python3
"""
Process probitas-logo.png to make the white background transparent.

The original logo is RGB (no alpha channel) with a white background.
We convert near-white pixels to transparent, with anti-aliasing for smooth edges.
"""
from PIL import Image
import os

SRC = "/home/z/my-project/public/images/probitas-logo.png"
DST = "/home/z/my-project/public/images/probitas-logo.png"  # overwrite
BACKUP = "/home/z/my-project/public/images/probitas-logo-original.png"

# Backup original once
if not os.path.exists(BACKUP):
    Image.open(SRC).save(BACKUP)
    print(f"[backup] saved original to {BACKUP}")

# Open and convert to RGBA
img = Image.open(SRC).convert("RGBA")
w, h = img.size
print(f"[info] logo size: {w}x{h}, mode: {img.mode}")

# Get pixel data
pixels = img.load()

# Threshold for "near-white" — anything brighter than this becomes transparent.
# Use a high threshold so only true near-white background goes transparent,
# while anti-aliased edge pixels get partial alpha (smooth edges).
WHITE_THRESHOLD = 230  # 0-255

# Iterate over every pixel
for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        # If pixel is near-white (all channels bright), make it transparent
        # proportional to how white it is.
        whiteness = min(r, g, b)
        if whiteness >= WHITE_THRESHOLD:
            # Fully transparent
            pixels[x, y] = (r, g, b, 0)
        elif whiteness >= 200:
            # Anti-aliasing zone — partial transparency for smooth edges
            # Alpha decreases as whiteness increases
            alpha = int(255 * (whiteness - 200) / (WHITE_THRESHOLD - 200))
            alpha = max(0, min(255, 255 - alpha))
            pixels[x, y] = (r, g, b, alpha)
        # else: keep pixel fully opaque (it's part of the logo mark)

# Save
img.save(DST, "PNG")
print(f"[ok] saved transparent logo to {DST}")

# Verify
verify = Image.open(DST)
print(f"[verify] mode: {verify.mode}, size: {verify.size}")
# Check that there are transparent pixels
if verify.mode == "RGBA":
    has_transparent = False
    has_opaque = False
    vp = verify.load()
    for y in range(0, h, 4):
        for x in range(0, w, 4):
            _, _, _, a = vp[x, y]
            if a == 0:
                has_transparent = True
            elif a == 255:
                has_opaque = True
            if has_transparent and has_opaque:
                break
        if has_transparent and has_opaque:
            break
    print(f"[verify] has transparent pixels: {has_transparent}")
    print(f"[verify] has opaque pixels: {has_opaque}")
