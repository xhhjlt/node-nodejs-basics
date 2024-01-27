import { open } from "node:fs/promises";
import { join, dirname } from "node:path";
import { pipeline } from "node:stream";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const read = async () => {
  const source = join(__dirname, "files", "fileToRead.txt");

  try {
    const fd = await open(source);
    pipeline(fd.createReadStream(), process.stdout, (err) => {
      if (err) console.log(err);
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
