import { argv } from 'node:process';
const parseArgs = () => {
    const argsString = argv.slice(2).reduce((acc, arg, index, arr) => {
      if (arg.startsWith("--")) {
        const value = arr[index + 1];
        const argName = arg.slice(2);
        return [...acc, `${argName} is ${value}`];
      } else {
        return acc;
      }
    }, []).join(", ");
    console.log(argsString);
};

parseArgs();