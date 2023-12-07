import { writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const create = async () => {
  const path = join(__dirname, "files", "fresh.txt");
  try {
    await writeFile(path, "I am fresh and young", { flag: "wx" });
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await create();