import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = 'client/public/images';
const IMAGES_TO_OPTIMIZE = [
  { name: 'dra-priscila-real.webp', width: 768 },
  { name: 'procedure-face.webp', width: 600 },
  { name: 'hero-doctor.webp', width: 768 },
  { name: 'smile.webp', width: 600 }
];

async function optimizeImages() {
  console.log('--- Starting Mobile Image Optimization ---');
  
  for (const img of IMAGES_TO_OPTIMIZE) {
    const inputPath = path.join(PUBLIC_DIR, img.name);
    const outputPath = path.join(PUBLIC_DIR, img.name.replace('.webp', '-mobile.webp'));
    
    if (fs.existsSync(inputPath)) {
      try {
        await sharp(inputPath)
          .resize({ width: img.width })
          .webp({ quality: 80 })
          .toFile(outputPath);
        
        const inputSize = fs.statSync(inputPath).size;
        const outputSize = fs.statSync(outputPath).size;
        
        console.log(`✅ Optimized ${img.name} -> ${path.basename(outputPath)}`);
        console.log(`   Size: ${(inputSize / 1024).toFixed(1)}KB -> ${(outputSize / 1024).toFixed(1)}KB (${Math.round((1 - outputSize / inputSize) * 100)}% reduction)`);
      } catch (err) {
        console.error(`❌ Error optimizing ${img.name}:`, err);
      }
    } else {
      console.warn(`⚠️ File not found: ${inputPath}`);
    }
  }
  
  console.log('--- Optimization Complete ---');
}

optimizeImages();
