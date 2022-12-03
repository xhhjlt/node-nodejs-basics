import * as fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const list = async () => {
  const dirPath = path.join(__dirname, 'files');
  try {
    const files = await fs.readdir(dirPath);
    console.log(files.toString());
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await list();