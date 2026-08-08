#!/bin/bash
set -e

OUT=/home/z/my-project/public/images

declare -A PROMPTS=(
  ["peer-review-detail"]="Overhead photograph of structural engineering drawings and a set of precision drafting tools on a warm-white architect desk, soft shadows, minimal muted palette, a few subtle red markup annotations on white tracing paper, no readable text, no logos, editorial technical photography"
  ["project-card-01"]="Architectural photograph of a modern commercial tower facade with subtle glass and steel rhythm, low-angle composition, soft overcast light, muted cool tones, no people, no logos, no readable text, premium editorial architecture photography"
  ["project-card-02"]="Architectural photograph of an exposed long-span steel roof structure of a civic building, repetitive trusses, soft directional daylight, warm neutral concrete floor, no people, no text, no logos, minimal editorial engineering photography"
  ["project-card-03"]="Architectural photograph of a curved concrete shell structure, smooth form-finished surface, raking sunlight revealing subtle geometry, monochromatic palette, no people, no logos, no readable text, fine-art engineering photography"
  ["about-image"]="Architectural photograph of a quiet modern engineering studio interior, large table with subtle blueprints, soft natural side light, warm off-white walls, restrained minimal palette, no people, no readable text, no logos, editorial interior photography"
  ["team-placeholder"]="Minimal abstract architectural photograph of a single concrete column seen against an off-white wall, soft daylight, subtle texture, muted neutral tones, no people, no logos, no text, fine-art engineering study"
)

declare -A SIZES=(
  ["peer-review-detail"]="1344x768"
  ["project-card-01"]="1024x1024"
  ["project-card-02"]="1024x1024"
  ["project-card-03"]="1024x1024"
  ["about-image"]="1344x768"
  ["team-placeholder"]="1024x1024"
)

for name in "${!PROMPTS[@]}"; do
  out_path="$OUT/$name.png"
  if [ -f "$out_path" ]; then
    echo "[skip] $name"
    continue
  fi
  echo "[gen] $name (${SIZES[$name]})"
  z-ai image -p "${PROMPTS[$name]}" -o "$out_path" -s "${SIZES[$name]}" 2>&1 | tail -2
done

echo "All images done."
ls -la "$OUT"
