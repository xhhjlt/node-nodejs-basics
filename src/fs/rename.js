import * as fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
  const newPath = path.join(__dirname, 'files', 'properFilename.md');
  const isNewFileExist = await fs.access(newPath);
  try {
    await fs.access(newPath);
    throw new Error('File exist');
  } catch (error) {
    if (error.message === 'File exist') {
      throw new Error('FS operation failed');
    }
  }
  try {
    await fs.rename(oldPath, newPath);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await rename();