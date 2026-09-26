import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function processNewLogo() {
  const logoPath = 'public/logos/centro-odontologico-robledo-black.png';

  // Extract tooth emblem (top ~430px)
  await sharp(logoPath)
    .extract({ left: 240, top: 20, width: 544, height: 420 })
    .trim()
    .png()
    .toFile('public/logos/tooth-mark-black.png');

  // White version of tooth emblem
  const rawTooth = await sharp('public/logos/tooth-mark-black.png')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const whiteToothData = Buffer.from(rawTooth.data);
  for (let i = 0; i < whiteToothData.length; i += 4) {
    if (whiteToothData[i + 3] > 0) {
      whiteToothData[i] = 255;
      whiteToothData[i + 1] = 255;
      whiteToothData[i + 2] = 255;
    }
  }

  await sharp(whiteToothData, {
    raw: { width: rawTooth.info.width, height: rawTooth.info.height, channels: 4 }
  })
    .png()
    .toFile('public/logos/tooth-mark-white.png');

  console.log('✓ Tooth marks generated');
}

processNewLogo().catch(console.error);
