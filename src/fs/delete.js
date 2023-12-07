import { rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const remove = async () => {
    const file = join(__dirname, 'files', 'fileToRemove.txt');

    try {
      await rm(file);
    } catch (error) {
      throw new Error('FS operation failed');
    }
};

await remove();