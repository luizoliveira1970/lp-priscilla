import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const IMAGES_DIR = path.join(ROOT, 'client', 'public', 'images');
const TECH_DIR = path.join(IMAGES_DIR, 'tech');

async function convertDir(dir) {
  const files = await fs.readdir(dir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

    const name = path.basename(file, ext);
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, `${name}.webp`);

    const stat = await fs.stat(inputPath);
    const beforeKB = Math.round(stat.size / 1024);

    await sharp(inputPath)
      .webp({ quality: 82, effort: 4 })
      .toFile(outputPath);

    const afterStat = await fs.stat(outputPath);
    const afterKB = Math.round(afterStat.size / 1024);

    await fs.unlink(inputPath);
    console.log(`✅  ${file} → ${name}.webp  (${beforeKB}KB → ${afterKB}KB)`);
  }
}

async function main() {
  await convertDir(IMAGES_DIR);
  try {
    await fs.access(TECH_DIR);
    await convertDir(TECH_DIR);
  } catch { /* tech dir might not exist */ }
  console.log('\n🎉 Conversão concluída!');
}

main().catch(console.error);
