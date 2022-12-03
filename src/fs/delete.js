import * as fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');
  try {
    await fs.rm(filePath);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await remove();