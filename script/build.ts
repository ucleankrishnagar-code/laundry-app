import { build } from "vite";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, "..");

async function runBuild() {
  try {
    console.log("Building client...");
    await build({
      root: resolve(root, "client"),
      build: {
        outDir: resolve(root, "dist/public"),
        emptyOutDir: true,
      },
    });
    console.log("Build completed successfully!");
  } catch (error) {
    console.error("Build failed:", error);
    process.exit(1);
  }
}

runBuild();
