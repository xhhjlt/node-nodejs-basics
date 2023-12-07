import { readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const list = async () => {
  const source = join(__dirname, 'files');

  try {
    const files = await readdir(source);
    console.log(files);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await list();