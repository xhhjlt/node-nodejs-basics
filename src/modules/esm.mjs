import path from 'path';
import { createServer as createServerHttp } from 'http';
import { release, version } from 'os'
import './files/c.js';

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
  await import('./files/a.json', {
    assert: {
      type: "json",
    }}).then((mod) => unknownObject = mod.default);
} else {
  await import('./files/b.json', {
    assert: {
      type: "json",
    }}).then((mod) => unknownObject = mod.default);
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});
