import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function inspect() {
  const obrasMeta = await sharp('public/source/obras-sociales-original.png').metadata();
  console.log('Obras metadata:', obrasMeta);

  const logoMeta = await sharp('public/source/logo-original.png').metadata();
  console.log('Logo metadata:', logoMeta);
}

inspect().catch(console.error);
