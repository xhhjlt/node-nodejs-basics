import { open } from "node:fs/promises";
import { join, dirname } from "node:path";
import { pipeline } from "node:stream";
import { fileURLToPath } from "node:url";
import { createGzip } from "node:zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const compress = async () => {
  const sourcePath = join(__dirname, 'files', 'fileToCompress.txt');
  const destinationPath = join(__dirname, 'files', 'archive.gz');
  const gzip = createGzip();
  try {
    const source = await open(sourcePath);
    const destination = await open(destinationPath, 'w');
    const readStream = source.createReadStream();
    const writeStream = destination.createWriteStream();
    pipeline(readStream, gzip, writeStream, (err) => {
      if (err) console.log(err);
    })
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await compress();