import * as fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  const baseFolder = path.join(__dirname, 'files');
  const newFolder = path.join(__dirname, 'files_copy');

  const copyDir = async (basePath, newPath) => {
    const file = await fs.stat(basePath);
    if (file.isDirectory()) {
      const files = await fs.readdir(basePath);
      await fs.mkdir(newPath);
      files.forEach((file) => {
        copyDir(path.join(basePath, file), path.join(newPath, file))
      });
    } else {
      await fs.copyFile(basePath, newPath);
    }
  };

  try {
    await fs.access(newFolder);
    throw new Error('Folder exist');
  } catch (error) {
    if (error.message === 'Folder exist') {
      throw new Error('FS operation failed');
    }
  }
  try {
    await copyDir(baseFolder, newFolder);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await copy();
