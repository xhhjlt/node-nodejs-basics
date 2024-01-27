import { readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
let crypto;
try {
  crypto = await import('node:crypto');
} catch (err) {
  console.error('crypto support is disabled!');
} 

const calculateHash = async () => {
  const source = join(__dirname, "files", "fileToCalculateHashFor.txt");

  const hash = crypto.createHash("sha256");

  hash.on("readable", () => {
    const data = hash.read();
    if (data) {
      console.log(data.toString("hex"));
    }
  });

  try {
    const content = await readFile(source, "utf-8");
    hash.write(content);
    hash.end();
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await calculateHash();
