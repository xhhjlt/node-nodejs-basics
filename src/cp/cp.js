import { spawn } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const scriptPath = join(__dirname,'files', 'script.js');

const spawnChildProcess = async (args) => {
    spawn('node', [scriptPath, ...args], {
        stdio: 'inherit',
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['--some-arg=value1', '--other=1337', '--arg2=42']);
