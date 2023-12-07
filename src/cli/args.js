import { argv } from 'node:process';
const parseArgs = () => {
    argv.slice(2).forEach((arg, index, arr) => {
      if (arg.startsWith("--")) {
        const value = arr[index + 1];
        console.log(`${arg} is ${value}`);
      }
    });
};

parseArgs();