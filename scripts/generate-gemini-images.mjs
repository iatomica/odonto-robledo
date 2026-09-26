import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error('Error: GEMINI_API_KEY is not defined in environment variables.');
  process.exit(1);
}
const GEMINI_MODEL = 'gemini-3.1-flash-image';
const BASE_URL = 'https://generativelanguage.googleapis.com/v1beta';

const OUTPUT_DIR = path.join(__dirname, '../public/images');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const IMAGES = [
  {
    filename: 'hero-clinic.jpg',
    aspectRatio: '16:9',
    prompt: 'High-end architectural photography of a luxurious modern aesthetic dental clinic interior in warm beige and travertine limestone. Sunlit minimalist reception lounge, soft linen textiles, curved warm oak wood accents, understated elegance, warm ambient lighting, peaceful medical-spa atmosphere, no cartoon, ultra-realistic editorial photography.'
  },
  {
    filename: 'hero-banner-beige.jpg',
    aspectRatio: '16:9',
    prompt: 'Warm sun-drenched aesthetic dental studio interior, panoramic wide angle view. Elegant travertine stone desk, floor-to-ceiling sheer linen curtains with soft daylight pouring in, minimalist sculpture, warm cream and sand palette, sophisticated dental healthcare boutique in Argentina, editorial architectural photograph.'
  },
  {
    filename: 'dra-trinidad-robledo.jpg',
    aspectRatio: '4:3',
    prompt: 'Editorial portrait of a warm, professional, and friendly female dentist in her early 30s with hair elegantly tied back, wearing a tailored warm beige modern dental medical scrub coat, smiling gently and warmly in a bright sunlit boutique clinic. Natural daylight, compassionate expression, high-end editorial photography.'
  },
  {
    filename: 'estetica-dental-sonrisa.jpg',
    aspectRatio: '4:3',
    prompt: 'Close-up beauty portrait capturing a genuinely radiant, healthy, and natural smile with pristine dental aesthetics. Warm golden hour daylight, soft focus background of a boutique dental suite, authentic and natural teeth alignment and glow, editorial health photography.'
  },
  {
    filename: 'gabinete-dental-pro.jpg',
    aspectRatio: '4:3',
    prompt: 'Photographic interior of a state-of-the-art modern dental operatory room. Sleek minimalist dental chair in sand-colored leather, warm travertine wall panels, gentle indirect lighting, high precision dental tools neatly arranged, serene spa-like feeling.'
  },
  {
    filename: 'ortodoncia-invisible.jpg',
    aspectRatio: '4:3',
    prompt: 'Aesthetic flat lay and close-up photograph of clear transparent dental aligners resting inside a sleek matte ivory case on a natural travertine stone surface. Delicate soft shadow, pristine clean presentation, modern aesthetic dentistry.'
  },
  {
    filename: 'atencion-personalizada.jpg',
    aspectRatio: '4:3',
    prompt: 'Documentary photograph of a friendly female dentist in warm beige medical attire having a gentle consultation with a smiling patient in a relaxed, comfortable clinic lounge. Trust, human warmth, attentive communication.'
  }
];

async function generateImage({ filename, prompt, aspectRatio }) {
  const targetPath = path.join(OUTPUT_DIR, filename);
  if (fs.existsSync(targetPath)) {
    console.log(`⏩ ${filename} ya existe, omitiendo.`);
    return;
  }

  console.log(`\n📷 Generando ${filename} con Gemini API...`);

  const url = `${BASE_URL}/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;
  const requestBody = {
    contents: [{
      role: 'user',
      parts: [{ text: prompt }]
    }],
    generationConfig: {
      responseModalities: ['TEXT', 'IMAGE'],
      imageConfig: {
        aspectRatio: aspectRatio || '4:3'
      }
    }
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody)
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Gemini API Error ${res.status}: ${errorText}`);
  }

  const data = await res.json();
  const candidates = data.candidates || [];
  const parts = candidates.flatMap(c => c.content?.parts || []);
  const imgPart = parts.find(p => p.inlineData?.data);

  if (!imgPart?.inlineData?.data) {
    throw new Error(`No image in response: ${JSON.stringify(data)}`);
  }

  const buffer = Buffer.from(imgPart.inlineData.data, 'base64');
  fs.writeFileSync(targetPath, buffer);
  console.log(`✅ ${filename} guardada con éxito (${(buffer.length / 1024).toFixed(1)} KB)`);
}

async function run() {
  console.log('======================================================');
  console.log('🦷 GENERADOR DE IMÁGENES ODONTOLOGÍA ROBLEDO');
  console.log('======================================================');

  for (const img of IMAGES) {
    try {
      await generateImage(img);
      // Wait 3 seconds between requests to avoid rate limits
      await new Promise(r => setTimeout(r, 3000));
    } catch (err) {
      console.error(`❌ Error generando ${img.filename}:`, err.message);
    }
  }

  console.log('\n✨ Proceso de generación finalizado.');
}

run();
