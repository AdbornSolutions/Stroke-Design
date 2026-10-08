import path from "node:path";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { transformSync } from "@babel/core";
import sharp from "sharp";

const assetDirectory = fileURLToPath(new URL("../src/assets/", import.meta.url));
const imagePattern = /\.(png|jpe?g|webp)$/i;

// Preserve original assets; produce responsive alternatives only for deployment.
export default function optimizedImages() {
  return {
    name: "optimized-images",
    apply: "build",
    enforce: "pre",
    transform(code, id) {
      if (!id.endsWith(".jsx") || !(code.includes("<img") || code.includes("<GalleryImage")) || !code.includes("assets/")) return null;
      return transformSync(code, {
        filename: id,
        configFile: false,
        babelrc: false,
        sourceMaps: true,
        parserOpts: { plugins: ["jsx"] },
        plugins: [({ types: t }) => ({
          visitor: {
            Program(program) {
              const entries = [];
              for (const node of program.node.body) {
                if (!t.isImportDeclaration(node) || !imagePattern.test(node.source.value)) continue;
                const image = node.specifiers.find(s => t.isImportDefaultSpecifier(s));
                if (!image || !node.source.value.includes("assets/")) continue;
                const set = program.scope.generateUidIdentifier(`${image.local.name}Sources`);
                node.specifiers.push(t.importSpecifier(set, t.identifier("srcSet")));
                entries.push(t.objectProperty(t.cloneNode(image.local), set, true));
              }
              if (!entries.length) return;
              const sources = program.scope.generateUidIdentifier("responsiveSources");
              program.traverse({
                JSXOpeningElement(element) {
                  if (!t.isJSXIdentifier(element.node.name, { name: "img" }) &&
                      !t.isJSXIdentifier(element.node.name, { name: "GalleryImage" })) return;
                  const attrs = element.node.attributes;
                  if (attrs.some(a => a.name?.name === "srcSet")) return;
                  const src = attrs.find(a => a.name?.name === "src");
                  if (!t.isJSXExpressionContainer(src?.value)) return;
                  attrs.push(t.jsxAttribute(t.jsxIdentifier("srcSet"), t.jsxExpressionContainer(
                    t.memberExpression(sources, t.cloneNode(src.value.expression, true), true),
                  )));
                  if (!attrs.some(a => a.name?.name === "sizes")) {
                    attrs.push(t.jsxAttribute(t.jsxIdentifier("sizes"), t.stringLiteral(id.endsWith("Hero.jsx")
                      ? "(max-width: 1440px) 1440px, (max-width: 1920px) 100vw, 1920px"
                      : "(max-width: 1920px) 100vw, 1920px")));
                  }
                  if (!attrs.some(a => a.name?.name === "decoding")) {
                    attrs.push(t.jsxAttribute(t.jsxIdentifier("decoding"), t.stringLiteral("async")));
                  }
                },
              });
              const lastImport = program.node.body.findLastIndex(n => t.isImportDeclaration(n));
              program.node.body.splice(lastImport + 1, 0, t.variableDeclaration("const", [
                t.variableDeclarator(sources, t.objectExpression(entries)),
              ]));
            },
          },
        })],
      });
    },
    async load(id) {
      const normalizedId = id.replaceAll("\\", "/");
      if (!imagePattern.test(id) || !normalizedId.startsWith(assetDirectory.replaceAll("\\", "/"))) return null;
      const original = await readFile(id);
      const preparedGalleryImage = (normalizedId.includes("/GalleryImages/optimized/") || normalizedId.includes("/assets/optimized/"));
      const optimized = preparedGalleryImage ? original : await sharp(original)
        .rotate()
        .resize({ width: 1920, height: 1920, fit: "inside", withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 })
        .toBuffer();
      const smaller = optimized.length < original.length;
      const source = smaller ? optimized : original;
      const metadata = await sharp(source).metadata();
      const name = path.parse(id).name;
      const reference = this.emitFile({
        type: "asset",
        name: smaller ? `${name}.webp` : path.basename(id),
        source,
      });
      const candidates = [];
      for (const width of (preparedGalleryImage ? [320, 480, 960, 1440] : [480, 960, 1440]).filter(w => w < metadata.width)) {
        const resized = await sharp(original).rotate().resize({ width, withoutEnlargement: true })
          .webp({ quality: 80, effort: 4 }).toBuffer();
        if (resized.length >= source.length) continue;
        const variant = this.emitFile({ type: "asset", name: `${name}-${width}w.webp`, source: resized });
        candidates.push(`import.meta.ROLLUP_FILE_URL_${variant} + " ${width}w"`);
      }
      candidates.push(`import.meta.ROLLUP_FILE_URL_${reference} + " ${metadata.width}w"`);
      return `export default import.meta.ROLLUP_FILE_URL_${reference};\nexport const srcSet = ${candidates.join(' + ", " + ')};`;
    },
  };
}
