import { rename as fsRename } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rename = async () => {
    const originalName = join(__dirname, 'files', 'wrongFilename.txt');
    const newName = join(__dirname, 'files', 'properFilename.md');

    try {
      await fsRename(originalName, newName);
    } catch (error) {
      throw new Error('FS operation failed');
    }
};

await rename();