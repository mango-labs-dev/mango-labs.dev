import sharp from 'sharp';

const fgPath = '/Users/pcsalt/Documents/projects/mango-labs/android/sudoku-zen/app/src/main/res/mipmap-xxxhdpi/ic_launcher_foreground.png';
const outPath = './src/content/apps/sudoku-zen/icon.webp';

const fg = await sharp(fgPath).resize(512, 512).png().toBuffer();

await sharp({
  create: {
    width: 512,
    height: 512,
    channels: 4,
    background: { r: 0x2e, g: 0x3e, b: 0x27, alpha: 1 },
  },
})
  .composite([{ input: fg }])
  .webp({ quality: 92, effort: 6 })
  .toFile(outPath);

const meta = await sharp(outPath).metadata();
console.log(`wrote ${outPath} ${meta.width}x${meta.height} ${(meta.size/1024).toFixed(1)}KB`);
