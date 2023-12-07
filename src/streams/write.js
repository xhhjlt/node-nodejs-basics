import { open } from "node:fs/promises";
import { join, dirname } from "node:path";
import { pipeline } from "node:stream";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const source = join(__dirname, "files", "fileToWrite.txt");

  try {
    const fd = await open(source, "r+");
    const stream = fd.createWriteStream();
    pipeline(process.stdout, stream, (err) => {
      if (err) console.log(err);
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await write();