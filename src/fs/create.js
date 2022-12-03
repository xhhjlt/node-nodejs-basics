import * as fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const create = async () => {
  const filePath = path.join(__dirname, 'files', 'fresh.txt');
  try {
    await fs.writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await create();