import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const read = async () => {
    const source = join(__dirname, 'files', 'fileToRead.txt');

    try {
      const content = await readFile(source, 'utf-8');
      console.log(content)
    } catch (error) {
      throw new Error('FS operation failed');
    }
};

await read();