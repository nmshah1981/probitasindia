import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = '/home/z/my-project/public/images';

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

type ImageJob = {
  name: string;
  prompt: string;
  size: '1024x1024' | '768x1344' | '864x1152' | '1344x768' | '1152x864' | '1440x768' | '768x1440';
};

// All prompts deliberately avoid any real company branding / famous buildings.
// Visuals communicate engineering design intelligence only.
const jobs: ImageJob[] = [
  {
    name: 'hero-structural-frame',
    size: '1440x768',
    prompt:
      'Cinematic architectural photograph of an exposed structural steel frame of a large modern building at dusk, dramatic low-angle view, complex steel trusses and bracing, soft blue-grey light, long shadows, minimal and precise, no people, no logos, no text, premium engineering photography, fine grain, muted natural tones',
  },
  {
    name: 'structural-feature',
    size: '1344x768',
    prompt:
      'Architectural close-up of reinforced concrete columns and beam junction in a contemporary building, raw architectural concrete, precise formwork lines, strong directional daylight, deep shadows, monochromatic warm grey palette, no people, no text, no logos, editorial engineering photography',
  },
  {
    name: 'mep-feature',
    size: '1344x768',
    prompt:
      'Architectural photograph of an industrial MEP plant room with neatly coordinated mechanical ductwork, piping and cable trays, painted in subtle muted greys and off-whites, precise parallel runs, soft natural light from a side window, no people, no text, no logos, technically clean industrial design photography',
  },
  {
    name: 'peer-review-detail',
    size: '1344x768',
    prompt:
      'Overhead photograph of structural engineering drawings and a set of precision drafting tools on a warm-white architect desk, soft shadows, minimal muted palette, a few subtle red markup annotations on white tracing paper, no readable text, no logos, editorial technical photography',
  },
  {
    name: 'project-card-01',
    size: '1024x1024',
    prompt:
      'Architectural photograph of a modern commercial tower facade with subtle glass and steel rhythm, low-angle composition, soft overcast light, muted cool tones, no people, no logos, no readable text, premium editorial architecture photography',
  },
  {
    name: 'project-card-02',
    size: '1024x1024',
    prompt:
      'Architectural photograph of an exposed long-span steel roof structure of a civic building, repetitive trusses, soft directional daylight, warm neutral concrete floor, no people, no text, no logos, minimal editorial engineering photography',
  },
  {
    name: 'project-card-03',
    size: '1024x1024',
    prompt:
      'Architectural photograph of a curved concrete shell structure, smooth form-finished surface, raking sunlight revealing subtle geometry, monochromatic palette, no people, no logos, no readable text, fine-art engineering photography',
  },
  {
    name: 'about-image',
    size: '1344x768',
    prompt:
      'Architectural photograph of a quiet modern engineering studio interior, large table with subtle blueprints, soft natural side light, warm off-white walls, restrained minimal palette, no people, no readable text, no logos, editorial interior photography',
  },
  {
    name: 'team-placeholder',
    size: '1024x1024',
    prompt:
      'Minimal abstract architectural photograph of a single concrete column seen against an off-white wall, soft daylight, subtle texture, muted neutral tones, no people, no logos, no text, fine-art engineering study',
  },
];

async function run() {
  const zai = await ZAI.create();
  for (const job of jobs) {
    const outPath = path.join(OUTPUT_DIR, `${job.name}.png`);
    if (fs.existsSync(outPath)) {
      console.log(`[skip] ${job.name} already exists`);
      continue;
    }
    try {
      console.log(`[gen] ${job.name} (${job.size}) ...`);
      const res = await zai.images.generations.create({
        prompt: job.prompt,
        size: job.size,
      });
      const b64 = res.data[0].base64;
      fs.writeFileSync(outPath, Buffer.from(b64, 'base64'));
      console.log(`[ok]  ${job.name} -> ${outPath}`);
    } catch (e) {
      console.error(`[err] ${job.name}:`, (e as Error).message);
    }
  }
  console.log('done');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
