import {https} from "firebase-functions"
import  next from "next"

const isDev = process.env.NODE_ENV !== "production";
const nextjsDistDir = require("./next.config.js").distDir;

const nextjsServer = next({
  dev: isDev,
  conf: {
    distDir: nextjsDistDir,
  } as any,
});
const nextjsHandle = nextjsServer.getRequestHandler();

exports.nextjsFunc = https.onRequest((req, res) => {
  return nextjsServer.prepare().then(() => nextjsHandle(req, res));
});