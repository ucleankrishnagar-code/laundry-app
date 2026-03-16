import express from "express";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(express.json());

const distPath = resolve(__dirname, "../dist/public");
app.use(express.static(distPath));

app.get("*", (_req, res) => {
  res.sendFile(resolve(distPath, "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
