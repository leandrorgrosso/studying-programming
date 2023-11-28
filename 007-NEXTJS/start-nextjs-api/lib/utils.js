import crypto from "crypto";

export function generateMarvelHash(timestamp, privateKey, publicKey) {
  const hash = crypto.createHash("md5");
  hash.update(`${timestamp}${privateKey}${publicKey}`);
  return hash.digest("hex");
}
