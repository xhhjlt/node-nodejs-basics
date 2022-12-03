import * as fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
  try {
    const file = await fs.readFile(filePath);
    console.log(file.toString());
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await read();