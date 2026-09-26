import fs from 'fs';
import path from 'path';

const DIR = path.join(process.cwd(), 'public/logos/official');
if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });

const DOWNLOADS = [
  { file: 'jerarquicos.svg', url: 'https://jerarquicos.com/wp-content/uploads/2024/01/jerarquicos-logo.svg' },
  { file: 'federada.svg', url: 'https://federada.com/wp-content/uploads/2025/09/Logo-Federada-Cobertura-Medica.svg' },
  { file: 'prevencion-salud.svg', url: 'https://corporate-site-content.gruposancorseguros.com/PS/Content/Prevencion-salud-logo-completo-blanco.svg' },
  { file: 'apross.png', url: 'https://www.apross.gov.ar/wp-content/uploads/2021/08/apross_logo_1x_dark.png' },
  { file: 'avalian.png', url: 'https://www.avalian.com/assets/images/logo-avalian-nav.png' },
];

async function run() {
  for (const item of DOWNLOADS) {
    try {
      const res = await fetch(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(path.join(DIR, item.file), buf);
        console.log(`✓ Downloaded ${item.file}`);
      }
    } catch (e) {
      console.log(`Failed ${item.file}:`, e.message);
    }
  }
}

run();
