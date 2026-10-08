import path from "node:path";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const assetDirectory = fileURLToPath(new URL("../src/assets/", import.meta.url));

// Optimize deployment assets without changing the original photographs.
export default function optimizedImages() {
  return {
    name: "optimized-images",
    apply: "build",
    enforce: "pre",
    async load(id) {
      const normalizedId = id.replaceAll("\\", "/");
      const normalizedAssetDirectory = assetDirectory.replaceAll("\\", "/");
      if (
        !/\.(png|jpe?g|webp)$/i.test(id) ||
        !normalizedId.startsWith(normalizedAssetDirectory)
      ) return null;
      const original = await readFile(id);
      const optimized = await sharp(original)
        .rotate()
        .resize({ width: 1920, height: 1920, fit: "inside", withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 })
        .toBuffer();
      const smaller = optimized.length < original.length;
      const reference = this.emitFile({
        type: "asset",
        name: smaller ? `${path.parse(id).name}.webp` : path.basename(id),
        source: smaller ? optimized : original,
      });
      return `export default import.meta.ROLLUP_FILE_URL_${reference};`;
    },
  };
}
