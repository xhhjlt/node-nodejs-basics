import { Transform, pipeline } from "node:stream";

const transform = async () => {
    const transformStream = new Transform({
      transform(chunk, encoding, callback) {
        callback(null, [...`${chunk}`.split("").reverse(), "\n"].join(""));
      },
    });

    pipeline(process.stdin, transformStream, process.stdout, (err) => {
      if (err) console.log(err);
    })
};

await transform();