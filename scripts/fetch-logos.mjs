import fs from 'fs';
import path from 'path';

const LOGO_TARGETS = [
  { name: 'apross', url: 'https://www.apross.gov.ar' },
  { name: 'galeno', url: 'https://www.galeno.com.ar' },
  { name: 'prevencion-salud', url: 'https://www.prevencionsalud.com.ar' },
  { name: 'avalian', url: 'https://www.avalian.com' },
  { name: 'andes-salud', url: 'https://andessalud.com.ar' },
  { name: 'jerarquicos', url: 'https://www.jerarquicos.com' },
  { name: 'federada', url: 'https://www.federada.com' },
  { name: 'cpce-cordoba', url: 'https://www.cpcecba.org.ar' },
];

async function checkSites() {
  for (const t of LOGO_TARGETS) {
    try {
      const res = await fetch(t.url, { headers: { 'User-Agent': 'Mozilla/5.0' }, signal: AbortSignal.timeout(5000) });
      const html = await res.text();
      // find svg or logo png in html
      const matches = html.match(/src="([^">]+(?:logo|brand)[^">]*\.(?:svg|png|webp))"/gi) || [];
      console.log(`[${t.name}] matches:`, matches.slice(0, 3));
    } catch (e) {
      console.log(`[${t.name}] error:`, e.message);
    }
  }
}

checkSites();
