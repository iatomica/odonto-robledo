import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const OUT_DIR = path.join(process.cwd(), 'public/logos');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

async function processLogo() {
  const meta = await sharp('public/source/logo-original.png').metadata();
  const raw = await sharp('public/source/logo-original.png')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const data = Buffer.from(raw.data);
  const whiteData = Buffer.from(raw.data);

  // sample background color from the 4 corners
  const bgR = 212;
  const bgG = 196;
  const bgB = 181;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const dist = Math.sqrt(
      Math.pow(r - bgR, 2) +
      Math.pow(g - bgG, 2) +
      Math.pow(b - bgB, 2)
    );

    // The logo lines are lighter or darker than the background (has specular highlights and soft shadow)
    // When dist is very small, it's background
    if (dist < 18) {
      data[i + 3] = 0;
      whiteData[i + 3] = 0;
    } else if (dist < 28) {
      const alpha = (dist - 18) / (28 - 18);
      data[i + 3] = Math.round(data[i + 3] * alpha);
      whiteData[i + 3] = Math.round(whiteData[i + 3] * alpha);
    }

    // For the white logo version:
    // If pixel is visible, make it pure white (or bright pearl white) while preserving alpha opacity
    if (whiteData[i + 3] > 0) {
      whiteData[i] = 255;
      whiteData[i + 1] = 255;
      whiteData[i + 2] = 255;
    }
  }

  // Save gold transparent
  await sharp(data, {
    raw: { width: raw.info.width, height: raw.info.height, channels: 4 }
  })
    .png()
    .toFile(path.join(OUT_DIR, 'logo-gold-transparent.png'));

  // Save white transparent
  await sharp(whiteData, {
    raw: { width: raw.info.width, height: raw.info.height, channels: 4 }
  })
    .png()
    .toFile(path.join(OUT_DIR, 'logo-white-transparent.png'));

  console.log('✓ Successfully created logo-gold-transparent.png and logo-white-transparent.png');
}

processLogo().catch(console.error);
