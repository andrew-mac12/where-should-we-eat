#!/usr/bin/env node

// Convert and normalize images in public/images/food-groups
// - Input: PNGs named <id>.png
// - Output: WebP at 4:3 aspect, max 1280x960, quality 78

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = process.cwd();
const srcDir = path.join(root, "public", "images", "food-groups");

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function processImage(filePath) {
  const file = path.basename(filePath);
  const ext = path.extname(file).toLowerCase();
  if (ext !== ".png") return; // only process PNG inputs
  const id = path.basename(file, ext);
  const outPath = path.join(srcDir, `${id}.webp`);

  const image = sharp(filePath);
  const metadata = await image.metadata();

  // Target: 4:3 aspect, fit cover within 1280x960
  const targetWidth = 1280;
  const targetHeight = 960;

  let pipeline = image.resize({
    width: targetWidth,
    height: targetHeight,
    fit: "cover",
    position: "attention",
  });

  pipeline = pipeline.webp({ quality: 78, effort: 5 });
  await pipeline.toFile(outPath);

  return { in: filePath, out: outPath, width: targetWidth, height: targetHeight, srcW: metadata.width, srcH: metadata.height };
}

async function main() {
  await ensureDir(srcDir);
  const entries = await fs.promises.readdir(srcDir);
  const pngs = entries.filter((f) => f.toLowerCase().endsWith(".png"));
  if (pngs.length === 0) {
    console.log("No PNGs found in", srcDir);
    return;
  }
  console.log(`Converting ${pngs.length} PNG(s) to WebP...`);
  const results = [];
  for (const file of pngs) {
    const inputPath = path.join(srcDir, file);
    try {
      const res = await processImage(inputPath);
      if (res) results.push(res);
      console.log("Converted:", file, "->", path.basename(res.out));
    } catch (err) {
      console.error("Failed:", file, err.message);
    }
  }
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});


