import { env } from "node:process";
const parseEnv = () => {
  Object.entries(env).forEach(([key, val]) => {
    if (key.startsWith("RSS_")) {
      console.log(`${key}: ${val}`);
    }
  });
};

parseEnv();
