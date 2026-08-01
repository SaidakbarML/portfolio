#!/usr/bin/env node
/**
 * Scans /public/images and records each file's intrinsic pixel size.
 *
 * The site uses this to cap how large an image may render: a 240px logo is
 * never stretched to 400px, it just sits at its native size on a blurred
 * backdrop. Runs automatically before dev and build.
 *
 * PNG/JPEG/WebP headers are parsed directly so this needs no dependencies.
 */
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { join, relative } from "node:path";

const IMAGES_DIR = join(process.cwd(), "public", "images");
const OUT_FILE = join(process.cwd(), "src", "constants", "image-manifest.json");

function readPng(buf) {
  // IHDR width/height live at fixed offsets after the 8-byte signature.
  if (buf.readUInt32BE(0) !== 0x89504e47) return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function readJpeg(buf) {
  if (buf.readUInt16BE(0) !== 0xffd8) return null;
  let offset = 2;
  while (offset < buf.length - 9) {
    if (buf[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const marker = buf[offset + 1];
    // SOF0..SOF15, excluding DHT/JPG/DAC which share the range.
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { height: buf.readUInt16BE(offset + 5), width: buf.readUInt16BE(offset + 7) };
    }
    offset += 2 + buf.readUInt16BE(offset + 2);
  }
  return null;
}

function readWebp(buf) {
  if (buf.toString("ascii", 0, 4) !== "RIFF") return null;
  const format = buf.toString("ascii", 12, 16);
  if (format === "VP8X") {
    return {
      width: 1 + buf.readUIntLE(24, 3),
      height: 1 + buf.readUIntLE(27, 3),
    };
  }
  if (format === "VP8 ") {
    return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
  }
  if (format === "VP8L") {
    const bits = buf.readUInt32LE(21);
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
  }
  return null;
}

function dimensions(buf, file) {
  if (/\.png$/i.test(file)) return readPng(buf);
  if (/\.jpe?g$/i.test(file)) return readJpeg(buf);
  if (/\.webp$/i.test(file)) return readWebp(buf);
  return null;
}

async function walk(dir) {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out; // directory doesn't exist yet
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (/\.(png|jpe?g|webp)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

const files = await walk(IMAGES_DIR);
const manifest = {};

for (const file of files) {
  const { size } = await stat(file);
  if (size === 0) continue;
  const buf = await readFile(file);
  const dims = dimensions(buf, file);
  if (!dims?.width || !dims?.height) {
    console.warn(`[image-manifest] could not read size: ${relative(process.cwd(), file)}`);
    continue;
  }
  const key = "/" + relative(join(process.cwd(), "public"), file).split(/[\\/]/).join("/");
  manifest[key] = dims;
}

await writeFile(OUT_FILE, JSON.stringify(manifest, null, 2) + "\n");
console.log(`[image-manifest] ${Object.keys(manifest).length} images indexed`);
