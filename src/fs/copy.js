import { copyFile, cp, mkdir, readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const copy = async () => {
  const source = join(__dirname, "files");
  const destination = join(__dirname, "files_copy");

  try {
    const files = await readdir(source);
    await mkdir(destination);
    const copyPromises = files.map(async (file) =>
      copyFile(join(source, file), join(destination, file))
    );
    await Promise.all(copyPromises);
    // cp(source, destination);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();
