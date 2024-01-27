
import { cpus } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker } from 'worker_threads';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const workerPath = join(__dirname, 'worker.js');
const startFromNumber = 10;

const performCalculations = async () => {
    const promises = cpus().map((cpu,index) => {
      return new Promise((resolve) => {
        const worker = new Worker(workerPath, {
          workerData: startFromNumber + index,
        })
        worker.on('message', (data) => {
          resolve({
            status: "resolved",
            data,
          });
        })
        worker.on('error', () => {
          resolve({
            status: "error",
            data: null,
          });
        })
      })
    });
    const results = await Promise.all(promises);
    console.log(results);
};

await performCalculations();