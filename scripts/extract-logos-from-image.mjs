import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const OUT_DIR = path.join(process.cwd(), 'public/logos/obras-sociales');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const CROPS = [
  { id: 'apross', name: 'Apross', left: 15, top: 12, width: 185, height: 60 },
  { id: 'galeno', name: 'Galeno', left: 15, top: 72, width: 175, height: 105 },
  { id: 'prevencion-salud', name: 'Prevención Salud', left: 5, top: 198, width: 195, height: 50 },
  { id: 'smata', name: 'SMATA', left: 10, top: 270, width: 180, height: 60 },
  { id: 'osepc', name: 'OSEPC', left: 25, top: 340, width: 150, height: 55 },
  
  { id: 'federada', name: 'Federada Cobertura Médica', left: 215, top: 18, width: 185, height: 55 },
  { id: 'jerarquicos', name: 'Jerárquicos Salud', left: 220, top: 92, width: 185, height: 48 },
  { id: 'andes-salud', name: 'Andes Salud', left: 215, top: 148, width: 180, height: 50 },
  { id: 'avalian', name: 'Avalian', left: 215, top: 210, width: 185, height: 50 },
  { id: 'cpce-cordoba', name: 'CPCE Córdoba', left: 270, top: 270, width: 110, height: 75 },
];

async function removeBackground(rawBuffer, info) {
  // rawBuffer has channels=4 (RGBA)
  const data = Buffer.from(rawBuffer);
  // sample corners for background color
  const sampleR = (data[0] + data[(info.width - 1) * 4] + data[(info.height - 1) * info.width * 4]) / 3;
  const sampleG = (data[1] + data[(info.width - 1) * 4 + 1] + data[(info.height - 1) * info.width * 4 + 1]) / 3;
  const sampleB = (data[2] + data[(info.width - 1) * 4 + 2] + data[(info.height - 1) * info.width * 4 + 2]) / 3;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const dist = Math.sqrt(
      Math.pow(r - sampleR, 2) +
      Math.pow(g - sampleG, 2) +
      Math.pow(b - sampleB, 2)
    );
    // threshold around 30-40 removes beige smoothly
    if (dist < 32) {
      data[i + 3] = 0; // transparent
    } else if (dist < 48) {
      // smooth alpha feathering
      const alphaFactor = (dist - 32) / (48 - 32);
      data[i + 3] = Math.round(data[i + 3] * alphaFactor);
    }
  }
  return data;
}

async function extractLogos() {
  const src = 'public/source/obras-sociales-original.png';
  for (const crop of CROPS) {
    const croppedBuffer = await sharp(src)
      .extract({ left: crop.left, top: crop.top, width: crop.width, height: crop.height })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const cleanData = await removeBackground(croppedBuffer.data, croppedBuffer.info);

    const outPath = path.join(OUT_DIR, `${crop.id}.png`);
    await sharp(cleanData, {
      raw: {
        width: croppedBuffer.info.width,
        height: croppedBuffer.info.height,
        channels: 4
      }
    })
      .trim() // trim transparent borders
      .png()
      .toFile(outPath);

    console.log(`✓ Processed ${crop.name} -> ${outPath}`);
  }
}

extractLogos().catch(console.error);
